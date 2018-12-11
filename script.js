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
	Name: "First Last (Name)",
	Email: 'Email@Email.Email',
	Cell: '(123) 456-7890',
	Address: 'Address goes here!'
}
const professionalSummary = () => 'professional summary goes here!';
const workHistory = () => 'Work history goes here!';
const education = () => 'education history goes here!';
const skillsData = {
	"Skill 1": { time: "forever",
		description: `Skill 1 description goes here!`,
	},
	"Skill 2": { time: "forever ever",
		description: `Skill 2 description goes here!`,
	},
	"Skill 3": { time: "five ever!",
		description: `Skill ${1 + 2} goes here!`,
	},
	// "": { time: "", 
	// 	description: "",
	// },
	// "": { time: "",
	// 	description: "",
	// },
	// "": { time: "",
	// 	description: ``,
	// },
	// "": { time: "",
	// 	description: "",
	// }
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


