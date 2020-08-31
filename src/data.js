import { htmlObj } from './html-template.js';

export const linksData = new htmlObj({
	"/resume.pdf": "pdf.svg",
	"https://github.com/michaelairola": "github.svg",
	"https://twitter.com/": "twitter.svg",
	"https://www.linkedin.com/in/michael-airola-122702162/": "linkedin.svg",
})

export const infoData = {
	Name: "Michael S Airola",
	Email: 'mik3airola@gmail.com',
	Cell: '831-210-9163',
	Address: '645 Harrison Terrace. San Jose, CA 95125.'
}

export const professionalSummary = 
	`Full stack engineer dedicated to writing usable, maintainable and powerful code. Last employed at <a href="https://defie.co/">Defie.co</a>`;

export const skillsData = new htmlObj({
	"Front End": [
		`Firm grasp of most javascript concepts, from plain vanilla coding to component-based lifecycle frameworks (i.e. React). 2 years professional experience.`
	],
	"Back End": [
		`Strong understanding of APIs using HTTP and HTTPS. Current Server-side languages used in production are Node and GoLang, but open to learning others. 2 years professional experience.`
	],
	"Development Operations": [
		`Expertise is in the Google Kubernetes Engine. Specific knowledge in: Google cloud console (gcloud), Kubernetes, Istio, Helm. 2 years professional experience.`
	],
	"Database": [
		`Relational Database Management geek. Currently transitioning dialects from postgreSQL to MySql. Open to learning other Data Base Management Systems, relational or otherwise. Most recent work in schema and data  migrational systems. 2 years professional experience.`
	],				
	"Achievements": [
		`Over the past 2 years, I have implemented many application-wide framework refactorizations that have significantly increased developer productivity and code simplicity. Finding solutions to problems is what I do best.`,
		`As lead engineer, total lines of code of main work project went from 134,244 to 43,460 (67.62% decrease) within a timespan of 6 months.`,
	],
});

export const workHistoryData = [
	'Full Stack Engineer at <a href="https://defie.co/">Defie.co</a>. Fremont, CA. 2018-2020',
	'Server at BeachSide Bar and Cafe. Santa Barbara, CA. 2016-2018',
	'Poke Bar manager at Big Eye Raw Bar. Santa Barbara, CA. 2017-2018',
	'Blenders In the Grass smoothie-shack. Santa Barbara, CA. 2013-2014',
	'Camp Counselor at Clover Sports Camp. Carmel, CA. Summers 2009-2015',
]
export const education = 'B.S. Mathematics, Physics Minor from UC Santa Barbara 2016';
