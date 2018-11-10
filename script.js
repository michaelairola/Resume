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
const professionalSummary = () => 'hi';
const workHistory = () => 'Full stack software developer for FQ Systems';
const education = () => 'sup dog';
const skillsData = {
	"Javascript": { time: "2 years",
		description: `Creation of dynamic content with Vanilla JS, TypeScript, JSX, 
					  and WebComponents (specifically LitHTML).`,
	},
	"Redux": { time: "3 months",
		description: ``,
	},
	"GoLang": { time: "6 months",
		description: "Backend experience with Go for business logic and database models",
	},
	"SQL": { time: "1 year", 
		description: "Database querying for data-analytics projects and work related DB projects",
	},
	"HTML/CSS": { time: "4 years",
		description: "Content for personal and professional websites",
	},
	"Unix/Systems Programming": { time: "2 years",
		description: `Using bash on personal and work computers and servers.
					  Familiarity with Git version control, npm, and `,
	},
	"Ruby": { time: "2 years",
		description: "Development of share box for personal cloud storage",
	}
};



// templates 
const skills = () => {
	let response = '<ul class="xpList">';
	for (let i in skillsData) {
		response += `<li class="xpItem"><div><span class="xpName">${i}</span><span class="xpTime">(${skillsData[i].time})</span></div>
						<div class="xpDescription">${skillsData[i].description}</div></li>`
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


