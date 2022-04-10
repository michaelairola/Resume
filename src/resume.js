import { html, renderById, addClassById, listenToMouseOver } from './html-template.js';

import { 
	  infoData
	, professionalSummary
	, education
	, workXps
	, skills
	, linksData 
} from './{{ toggle }}.js';


const rows = [
	{ label: "Professional Summary", template: html`
		<div id="professionalSummary">
			${professionalSummary}
		</div>`
	},
	{ label: "Work Experience", template: html`
		<ul class="xpList">
		${workXps.map(workXp => html`
			<li class="xpItem">
				<div>
					<span class="xpName">
					${workXp.Name} at <a target="_blank" href="${workXp.Link}">${workXp.Location}</a> 
					</span>
					(${workXp.Time}):
				</div>
				<div class="xpDescription">
					<ul>${workXp.Bullets.map(v => html`<li>${v}</li>`)}</ul>
				</div>
			</li>`
		)}
		</ul>`
	},
	{ label: "Other notables", template: html`
		<ul class="workList">
			${skills.map(x => html`<li>${x}</li>`)}
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
  			${hideLine2 ? html`<span style="font-weight:bold;">${template}</span>` : template}
  		</div>
  	</div>
  	`)}`

const links = () => html`
	<div style="display:flex;flex-direction:column;">
		${linksData.map((href, icon) => html`
			<a href="${href}" target="_blank"><img class="icon" style="width:70px;margin:5px 0 0 5px;" src="./icons/${icon}" /></a>
		`)}
	</div>
`

const entrypoint = () => html`
	<div id="links"></div>
	<div class="resume" id="resume"></div>
`

window.onload = () => {
	renderById(entrypoint)
	renderById(links)
	renderById(resume)
	setTimeout(() => {
		addClassById(links, "slide-in")
	}, 2000)
	listenToMouseOver("row", "selectedRow");
}
