let express = require('express');
const fs = require('fs');
const path = require('path');
let mkdirp = require('mkdirp');

let Mustache = require('mustache');
let app = express();

const port = 8080
let index = undefined;

const staticDirs = [ 'dist', 'public', 'data' ];
staticDirs.forEach(key => 
	app.use(express.static(path.join(__dirname, key)))
)

const routeVariations = {
	"/": "software-engineer",
	"/software": "software-engineer", 
	"/waiter": "waiter",
}
Object.keys(routeVariations).forEach(key => 
	app.get(key, (_, res) => 
		res.send(Mustache.render(index, { toggle: routeVariations[key] }))
	)
)

console.log('parsing src files...') 
fs.readdir(path.join(__dirname, "src"), (e, files) => {
	if(e) throw e
	mkdirp(path.join(__dirname,"dist")).then(_ => {
		files.forEach(file => {
			fs.readFile(path.join(__dirname, `src/${file}`), 'utf8', (e,data) => {
				if(e) throw e;
				const fileName = file.endsWith(".js") ? file.slice(0,-3) : file;
				Object.values(routeVariations).forEach(toggle => {
					fs.writeFile(path.join(__dirname, "dist" ,`${fileName}-${toggle}.js`), Mustache.render(data, { toggle }), e => { if(e) throw e; })
				})
			})
		})
		console.log("src files parsed! parsing index file...")
		fs.readFile('./index.html', 'utf8' , (err, data) => {
		  if (err) throw err
		  console.log("index file parsed!")
		  index = data;
		  app.listen(port,function() {
		      console.log(`Server started on port ${port}`);
		  });
		})
	})
})
