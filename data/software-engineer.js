import { htmlObj } from './html-template.js';

export const linksData = new htmlObj({
	"https://blog.michaelairola.com": "blogging.svg",
	"https://github.com/michaelairola": "github.svg",
	"https://twitter.com/": "twitter.svg",
	"https://www.linkedin.com/in/michael-airola-122702162/": "linkedin.svg",
	"/pdf/software-engineer.pdf": "pdf.svg",
})

export const infoData = {
	Name: "Michael S Airola",
	Email: 'me@michaelairola.com',
	Cell: '831-210-9163',
	Address: '121 S Voluntario st. Santa Barbrara, CA 93103'
}

export const professionalSummary = 
	`Full stack engineer dedicated to writing usable, maintainable and powerful code. Current position is Business Intelligence Developer at <a href="https://www.aspirehealthplan.org/">Aspire Health</a>.`;

export const skillsData = new htmlObj({
	"Front End": [
		`I know Javascript! 2 years professional experience with component based life cycle fremeworks (i.e. lit-element, but this falls in the same set of frameworks as React does). 4 years recreational experience with Node, Vanilla JS, React, ReactNative, Vue, and most other buzz-word frameworks!`
	],
	"Back End": [
		`Current professional experience (2 years) in backend systems have used Node and GoLang, but love playing around with anything from rust to rails.`
	],
	"Development Operations": [
		`A good CI/CD can go a long way! When 'git push master' triggers the testing and deployment processes I desire, life is good.`
	],
	"Database": [
		`Query Languages are fun! I prefer structure (I have ~ 3.5 years experience with SQL variants: mysql and tsql to be exact).`
	],				
	// "Achievements": [
	// 	`As lead engineer at Defie, total lines of code of main work project went from 134,244 to 43,460 (67.62% decrease) within a timespan of 6 months.`,
	// ],
});

export const workHistoryData = [
	'BI Dev at <a href="https://www.aspirehealthplan.org/">Aspire</a>. Monterey, CA. 2021-present',
	'Full Stack Engineer at <a href="https://defie.co/">Defie.co</a>. Fremont, CA. 2018-2020',
	'Server at BeachSide Bar and Cafe. Santa Barbara, CA. 2016-2018',
	'Poke Bar manager at Big Eye Raw Bar. Santa Barbara, CA. 2017-2018',
	'Blenders In the Grass smoothie-shack. Santa Barbara, CA. 2013-2014',
	'Camp Counselor at Clover Sports Camp. Carmel, CA. Summers 2009-2015',
]
export const education = 'B.S. Mathematics, Physics Minor from UC Santa Barbara 2016';
