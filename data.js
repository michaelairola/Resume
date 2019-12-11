import { htmlObj } from '../html-template.js';

export const infoData = {
	Name: "Michael Airola",
	Email: 'mik3airola@gmail.com',
	Cell: '831-210-9163',
	Address: '425 Purisima Avenue. Sunnyvale CA, 94086.'
}

export const professionalSummary = 
	`Full stack engineer currently working at <a href="https://defie.co/">Defie.co</a>.
	 I am dedicated to writing usable, maintainable and powerful code.`;

export const skillsData = new htmlObj({
	"Front End": [
		`Firm grasp of most javascript concepts, from plain vanilla coding to component-based lifecycle frameworks (i.e. React).`
	],
	"Back End": [
		`Strong understanding of APIs using HTTP and HTTPS. Current Server-side languages used in production are Node and GoLang, but open to learning others.`
	],
	"Development Operations": [
		`Expertise is in the Google Kubernetes Engine. Specific knowledge in: Google cloud console (gcloud), Kubernetes, Istio, Helm.`
	],
	"Database": [
		`Relational Database Management geek. Currently transitioning dialects from postgreSQL to MySql. Open to learning other Data Base Management Systems, relational or otherwise. Most recent work in schema and data  migrational systems.`
	],				
	"Achievements": [
		`Refactoring buff, from converting application to state-based component (using Redux) to implementing a minimalistic database schema migration implementation, making better is what I do best.`,
		`Over 6 months as lead engineer, total lines of code went from 134,244 to 43,460 (67.62% decrease).`,
	],
});

export const workHistoryData = [
	'Full Stack Engineer at <a href="https://defie.co/">Defie.co</a>. Fremont, CA. 2018-Present.',
	'Server at BeachSide Bar and Cafe. Santa Barbara, CA. 2016-2018.',
	'Poke Bar manager at Big Eye Raw Bar. Santa Barbara, CA. 2017-2018.',
	'Blenders In the Grass smoothie-shack. Santa Barbara, CA. 2013-2014.',
	'Camp Counselor at Clover Sports Camp. Carmel, CA. Summers 2009-2015.',
]
export const education = 'B.S. Mathematics, Physics Minor from UC Santa Barbara 2016';
