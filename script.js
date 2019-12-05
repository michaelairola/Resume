// simple render functions
convertVariable = v => Array.isArray(v) ? v.join("") : v
const html = (strings, ...keys) => {
	return strings[0] + keys.map((key,i) => `${convertVariable(key)}${strings[i + 1]}`).join("");
} 

const renderById = template => {
	const id = template.name;
	document.getElementById(id).innerHTML = template()
}
const renderByClass = template => {
	const id = template.name;
	document.querySelectorAll(`.${id}`).forEach(circle => {
		circle.innerHTML = template()
	});
}

// DATA CONFIGURATION FOR TEMPLATE
const infoData = {
	Name: "Michael Airola",
	Email: 'mik3airola@gmail.com',
	Cell: '831-210-9163',
	Address: '425 Purisima Avenue. Sunnyvale CA, 94086.'
}

const professionalSummary = () => 
	`Full stack engineer currently working at <a href="https://defie.co/">Defie.co</a>.
	 I am dedicated to writing usable, maintainable and powerful code.`;

const skillsData = {
	"Front End:":  			   	`Firm grasp of most javascript concepts, from plain vanilla coding to
								 component-based lifecycle frameworks (i.e. React).`,
	"Back End:":   			   	`Strong understanding of APIs using HTTP and HTTPS. Current Server-side
								 languages used in production are Node and GoLang, but open to learning
								 others.`,
	"Development Operations:": 	`Expertise is in the Google Kubernetes Engine. Specific knowledge in:
								 Google cloud console (gcloud), Kubernetes, Istio, Helm.`,
	"Database:": 				`Relational Database Management geek. Currently transitioning dialects
								 from postgreSQL to MySql. Open to learning other Data Base Management
								 Systems, relational or otherwise.`,
	"Acheivements:": 			`Over 6 months as lead engineer, total lines of code went from 134,036
								 to 42732 (68.11% decrease).`,
};

const education = () => 'B.S. Mathematics, Physics Minor from UC Santa Barbara 2016';
const workHistoryData = [
	'Full Stack Engineer at <a href="https://defie.co/">Defie.co</a>. Fremont, CA. 2018-Present.',
	'Server at BeachSide Bar and Cafe. Santa Barbara, CA. 2016-2018.',
	'Poke Bar manager at Big Eye Raw Bar. Santa Barbara, CA. 2017-2018.',
	'Blenders In the Grass smoothie-shack. Santa Barbara, CA. 2013-2014.',
	'Camp Counselor at Clover Sports Camp. Carmel, CA. Summers 2009-2015.',
]

// templates 
const workHistory = () => {
	let response = '<ul class="workList">';
	workHistoryData.forEach(i => {
		response += '<li class="workItem">' + i +'</li>'
	})
	response += "</ul>"
	return response
}

xpItem = (i) => `
	<li class="xpItem">
		<div>
			<span class="xpName">${i}</span>
		</div>
		<div class="xpDescription">
			<ul><li>${skillsData[i]}</li></ul>
		</div>
	</li>`
const skills = () => html`
	<ul class="xpList">
		${Object.keys(skillsData).map(xpItem)}
	</ul>
`
const info = () => `
	<div id="name">${infoData.Name}</div>
	<div id=""><span id="cell">${infoData.Cell}</span> | <span id="email">${infoData.Email}</span></div>
	<div id="address">${infoData.Address}</div>
`;

const smallCircleContainer = () => `<div class="circle small-circle"></div>`;
const largeCircleContainer = () => `<div class="circle large-circle"><text id="initials">MA</text></div>`;

const setResumeMargins = margins => {
	document.getElementById('resume').style.margin = margins;
}
const setRowWidth = width => {
	document.querySelectorAll(".row").forEach(rowDiv => rowDiv.style.width = width);
}
const removeSelectedRowClass = () => {
	document.querySelectorAll('.row').forEach(rowDiv => {
		rowDiv.classList.remove("selectedRow")})
}
const rowsListenToMouseOver = () => {
	document.querySelectorAll('.row').forEach(rowDiv => {
		rowDiv.addEventListener('mouseover', _ => {
			rowDiv.classList.add('selectedRow');
			rowDiv.querySelector('.outside-box').classList.add('selectedOuterBox');
		})
		rowDiv.addEventListener('mouseout', (e) => {
			rowDiv.classList.remove('selectedRow');
			rowDiv.querySelector('.outside-box').classList.remove('selectedOuterBox');
		});
	})
}

window.onload = function() {
	// mouse-over event triggers selectedRow class
	rowsListenToMouseOver();

	// rendering with simple render function at the top of the page
	renderByClass(smallCircleContainer);
	renderByClass(largeCircleContainer);
	renderById(info)
	renderById(professionalSummary)
	renderById(skills);
	renderById(workHistory)
	renderById(education)

	// For printing the page properly
    window.onbeforeprint = () => {
    	setResumeMargins("0px auto 0px auto");
    	setRowWidth("100%");
    	removeSelectedRowClass();
    };
	window.onafterprint = () => {
		setResumeMargins("var(--resume-margins)");
		setRowWidth("110%");
	}
}