const infoData = {
	Name: "Michael Airola",
	Email: 'mik3airol@gmail.com',
	Cell: '(831) 210-9163',
	Address: '425 Purisima Ave, 94086 Sunnyvale CA'
}
const jobTemplate = `Full stack software developer for FQ Systems`;
const experience = {
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

const renderXP = exp => {
	let response = '<ul class="xpList">';
	for (let i in exp) {
		response += `<li class="xpItem"><div><span class="xpName">${i}</span><span class="xpTime">(${exp[i].time})</span></div>
						<div class="xpDescription">${exp[i].description}</div></li>`
	}
	response += "</ul>"
	return response;
}

const render = template => {
	const id = template.name;
	document.getElementById(id).innerHTML = template()
}


const info = () => `
<div id="name">${infoData.Name}</div>
<div id=""><span id="cell">${infoData.Cell}</span> | <span id="email">${infoData.Email}</span></div>
<div id="address">${infoData.Address}</div>
`;

const profSummaryTemp = 'hi';
const skillsTemp = renderXP(experience);
const workHistTemp = 'howya doin\'<br>hi';
const educationTemp = 'sup dog';

const smallCircleTemplate = `<div class="circle small-circle"></div>`
const createSmallCircle = circle => {circle.innerHTML = smallCircleTemplate;}
const largeCircleTemplate = `<div class="circle large-circle"><text id="initials">MA</text></div>`

const addSelectRowClass = rowDiv => {
	rowDiv.addEventListener('mouseover', (e) => {
		rowDiv.classList.add('selectedRow');
		rowDiv.querySelector('.outside-box').classList.add('selectedOuterBox');
	});
	rowDiv.addEventListener('mouseout', (e) => {
		rowDiv.classList.remove('selectedRow');
		rowDiv.querySelector('.outside-box').classList.remove('selectedOuterBox');
	});
}


window.onload = function() {
	document.querySelectorAll('.row').forEach(rowDiv => addSelectRowClass(rowDiv));

	render(info)
	document.getElementById("professional-summary").innerHTML = profSummaryTemp;
	document.getElementById("skills").innerHTML = skillsTemp;
	document.getElementById("work-history").innerHTML = workHistTemp;	
	document.getElementById("education").innerHTML = educationTemp;	

	document.querySelectorAll(".smallCircleContainer").forEach(circle => createSmallCircle(circle));
	document.querySelector(".largeCircleContainer").innerHTML = largeCircleTemplate;

    window.onbeforeprint = () => {
	    const resume = document.getElementById('resume');
	    resume.style.margin = "0px";
	}

	window.onafterprint = () => {
		const resume = document.getElementById('resume');
		resume.style.margin = "var(--resume-margins)";
	}	
}


