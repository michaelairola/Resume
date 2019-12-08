import { html, htmlObj, renderById, listenToMouseOver } from '../html-template.js';

import { 
	infoData,
	professionalSummary, 
	skillsData, 
	education, 
	workHistoryData 
} from'./data.js';

const rows = [
	{ label: "Professional Summary", template: html`
		<div id="professionalSummary">
			${professionalSummary}
		</div>`
	},
	{ label: "Skills", template: html`
		<ul class="xpList">
		${skillsData.map((key, vals) => html`
			<li class="xpItem">
				<div class="xpName">${key}:</div>
				<div class="xpDescription">
					<ul>${vals.map(v => html`<li>${v}</li>`)}</ul>
				</div>
			</li>`
		)}
		</ul>`
	},
	{ label: "Work History", template: html`
		<ul class="workList">
			${workHistoryData}
		</ul>`
	},
	{ label: "Education", hideLine2: true, template: education },
]

const resume = () => html`
  	<div id="header" class="row">
    	<div class="outside-box"></div>
    	<div id="info" class="right">
			<div id="name">${infoData.Name}</div>
			<div><span>${infoData.Cell}</span> | <span>${infoData.Email}</span></div>
			<div>${infoData.Address}</div>
    	</div>
  		<div id="initials" class="largeCircleContainer">
  			<div class="circle large-circle"><text id="initials">MA</text></div>
  		</div>
  	</div>
  	${rows.map(({ label, template, hideLine2 }) => html`
  	<div class="row">
  		<div class="outside-box"></div>
  		<div class="left cell">${label}</div>
  		<span class="mid cell">
			<div class="smallCircleContainer">
				<div class="circle small-circle"></div>
			</div>
			<div class="line1"></div>
			${hideLine2 ? `` : `<div class="line2"></div>` } 
		</span>
  		<div class="right cell">
  			${template}
  		</div>
  	</div>
  	`)}`

window.onload = () => {
	renderById(resume)
	listenToMouseOver("row", "selectedRow");
}
