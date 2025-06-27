const fs = require('fs');
const fs_async = require('fs').promises;
const path = require('path');
let mkdirp = require('mkdirp');

let Mustache = require('mustache');

// const staticDirs = [ 'dist', 'public', 'data' ];


const STATIC_DIRECTORIES = [
    path.join(__dirname,"public"),
    path.join(__dirname,"data")
]
const BUILD_DIRECTORY = path.join(__dirname,"dist")
const SRC_DIRECTORY = path.join(__dirname,"src")

const delete_and_reset_build_directory = async () => {
    if (fs.existsSync(BUILD_DIRECTORY)) {
        console.log('Previous build directory exists. Deleting...');
        fs.rmSync(BUILD_DIRECTORY, { recursive: true, force: true });
    }
    await mkdirp(BUILD_DIRECTORY)
    console.log("Created build directory ", BUILD_DIRECTORY)

}

const copy_files_in_dir = async (in_dir, out_dir) => {
    const files = await fs_async.readdir(in_dir)
    return files.map(file => {
        const old_file = path.join(in_dir, file)
        const new_file = path.join(out_dir, file)
        console.log(old_file, " ~~~~~> ", new_file)
        return fs.cpSync(old_file, new_file, { recursive: true })
    })
}

const copy_static_files = async () => {
    return Promise.all(
        STATIC_DIRECTORIES
            .map(async STATIC_DIRECTORY => {
                await copy_files_in_dir(STATIC_DIRECTORY, BUILD_DIRECTORY)
        })
    )

}
const routeVariations = {
    "/": "software-engineer",
    // "/BI-developer": "bi-dev",
    // "/data-analyst": "data-analyst",
    // "/software": "software-engineer", 
}

const generate_dynamic_resumes = async () => {
    src_files = await fs_async.readdir(SRC_DIRECTORY)
    src_files = src_files.map(src_file => path.join(SRC_DIRECTORY, src_file))
    src_files = [ ...src_files, path.join(__dirname, "index.html") ]
    return Promise.all(src_files.map(async file => {
        file_data = await fs_async.readFile(file, 'utf-8')
        const is_js = file.endsWith(".js")
        const is_html = file.endsWith(".html")
        file = path.basename(file)
        const file_name = is_js ? file.slice(0,-3) : is_html ? file.slice(0,-5) : file;        
        Object.keys(routeVariations).forEach(key => {
            const toggle = routeVariations[key]
            const base_name = key == "/" && is_html ? "index" : `${file_name}-${toggle}`
            const extension = `${is_js ? "js" : is_html ? "html" : ""}`
            const output_file = path.join(BUILD_DIRECTORY, `${base_name}.${extension}`)
            console.log("outputing file ", output_file)
            fs.writeFile(
                output_file, 
                Mustache.render(file_data, { toggle }),
                e => { if(e) throw e; })
        })
    }))
}

const build = async () => {
    await delete_and_reset_build_directory();
    await copy_static_files();
    await generate_dynamic_resumes();
    console.log("Files located in ", BUILD_DIRECTORY, " are ready to be served :)")
} 

build()
// console.log('parsing src files...') 
// fs.readdir(path.join(__dirname, "src"), (e, files) => {
//     if(e) throw e
//     mkdirp(path.join(__dirname,"dist")).then(_ => {
//         files.forEach(file => {
//             fs.readFile(path.join(__dirname, `src/${file}`), 'utf8', (e,data) => {
//                 if(e) throw e;
//                 const fileName = file.endsWith(".js") ? file.slice(0,-3) : file;
//                 Object.values(routeVariations).forEach(toggle => {
//                     fs.writeFile(path.join(__dirname, "dist" ,`${fileName}-${toggle}.js`), Mustache.render(data, { toggle }), e => { if(e) throw e; })
//                     })
//                 })
//             })
//             console.log("src files parsed! parsing index file...")
//             fs.readFile('./index.html', 'utf8' , (err, data) => {
//                 if (err) throw err
//                 console.log("index file parsed!")
//                 Object.keys(routeVariations).forEach(key =>
//                     fs.writeFile(
//                         path.join(__dirname, "dist", key == "/" ? "index.html" : key), 
//                         Mustache.render(data, { toggle: routeVariations[key] }), 
//                         e => { if (e) throw e; }
//                     )
//                 )
//           console.log("index file created :)")
//         })
//     })
// })
