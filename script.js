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
	Email: 'mik3airol@gmail.com',
	Cell: '(831) 210-9163',
	Address: '425 Purisima Ave, 94086 Sunnyvale CA'
}
const professionalSummary = () => 
`<b>Full-stack Engineer</b> <br>
Current stack: FE - Javascript, BE - GoLang, DB - SQL`
;
const workHistory = () => 'Software developer for FQ Systems';
const education = () => 'B.S. Mathematics, Physics Minor from UC Santa Barbara 2016';
const skillsData = {
	"Javascript": { time: "2.5 years",
		description: `Crafted complex yet user-friendly client side rendering
		 architectures (specifically using React and lit-html). `,
	},
	"GoLang": { time: "6 months",
		description: `Using GORM library, implemented both business and server-side 
		logical functions such as inventory-counting and data-querying tasks. 
		`,
	},
	"SQL": { time: "1 year", 
		description: `Database modeling and querying for 
			business-to-business application, as well as data-analytics 
			projects on the side. Specific database name 
			used for work: 'RoachSQL'`,
	},
	"Redux": { time: "6 months",
		description: `Within a month of first software job, unified a 
		decentralized state management system into a fully-blown redux ecosystem.`,
	},
	"Unix/Systems Programming": { time: "2 years",
		description: `Bash, Git, Node, npm, Docker, Kubernetes,
		Istio, Redux, S3, and Google Cloud knowledge.`,
	},
	"HTML/CSS/JS": { time: "4 years",
		description: `Resume made with browser-friendly languages only :)`,
	},
};

// templates 
const skills = () => {
	let response = '<ul class="xpList">';
	for (let i in skillsData) {
		response += `<li class="xpItem"><div><span class="xpName">${i}</span><span class="xpTime">(${skillsData[i].time})</span></div>
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
	// renderById(workHistory)
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


