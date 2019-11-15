// simple render functions 

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
`Full stack engineer currently working at <a href="https://defie.co/">Defie.co</a>. I am dedicated to writing usable, maintainable and powerful code.`;

const skillsData = {
	"Front End:": { 
		description: `Firm grasp of vanilla Javascript, node, redux state management framework, and component-based lifecycle frameworks. Current tools used are Typescript, Redux, and LitElement. Using LitElement Components, elminated 59,591 lines of code from front end App.`
	},
	"Back End:": {
		description: `Understanding of server terminology and concepts (HTTP protocol, APIs, CRUD applications, and authentication). Using Golang, created of CRUD Router Factory that eliminated around 28,625 lines of code from backend microservices.`,
	},
	"Dev Ops:": {
		description: `Expertise is in the Google Kubernetes Engine. Specific knowledge in: Google cloud console (gcloud), Kubernetes, Istio, Helm. Using Helm charts, simplified and speed of the deployment experience from hours to minutes.`,
	},
	"Database:": {
		description: `Relational Database Management geek. Currently transitioning dialects from postgreSQL to MySql. Open to learning other DBMS's, relational or otherwise.`
	}, 
	// "System Admin": {
	// 	description: `Knowledge of linux operating system and bash terminal environment. I love grep-ing and awk-ing my way through the terminal.`
	// },
	"Take Aways:": {
		description: 'Over 7 months as lead engineer, total lines of code of our project went from 175,533 to 58,692 (65% decrease).',
	}
};
// const accomplishments = [
// 	'Over 7 months as lead engineer, total lines of code of our project went from 175,533 to 58,692 (65% decrease)',
// 	'development environment',
// 	'CRUD http router',
// 	'component-based architecure learning',
// 	'signin auth system',
// ]

const education = () => 'B.S. Mathematics, Physics Minor from UC Santa Barbara 2016';
const workHistoryData = [
	'Full Stack Engineer at <a href="https://defie.co/">Defie.co</a>. Fremont, CA. 2018-Present.',
	'Server at BeachSide Bar and Cafe. Santa Barbara, CA. 2016-2018.',
	'Poke Bar manager at Big Eye Raw Bar. Santa Barbara, CA. 2017-2018.',
	'Blenders In the grass smoothie-shack. Santa Barbara, CA. 2013-2014.',
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

const skills = () => {
	let response = '<ul class="xpList">';
	for (let i in skillsData) {
		response += `<li class="xpItem"><div><span class="xpName">${i}</span><span class="xpTime">${skillsData[i].time || ''}</span></div>
						<div class="xpDescription"><ul><li>${skillsData[i].description}</li></ul></div></li>`
	}
	response += "</ul>"
	return response;
}
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
		console.log('rowDiv', rowDiv.classList);
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
    	removeSelectedRowClass();
    	setResumeMargins("0px auto 0px auto");
    	setRowWidth("100%");
    };
	window.onafterprint = () => {
		setResumeMargins("var(--resume-margins)");
		setRowWidth("110%");
	}
}