import { htmlObj } from './html-template.js';

export const linksData = new htmlObj({
	"https://www.linkedin.com/in/michael-airola-122702162/": "linkedin.svg",
	"https://github.com/michaelairola": "github.svg",
	// "https://twitter.com/": "twitter.svg",
	"/pdf/resume.pdf": "pdf.svg",
	"https://blog.michaelairola.com": "blogging.svg",
	"https://www.cookbook.michaelairola.com/": "cookbook.svg",
})

export const infoData = {
	Name: "Michael Airola",
	Email: '<a target="_blank" href="mailto:me@michaelairola.com">me@michaelairola.com</a>',
	Cell: '831-210-9163',
}

export const professionalSummary =
	`Looking for positions where I can develop useful products for important causes in a healthy work environment.`

export const workXps = [
	{
		Name: "Technical Staff",
		Location: "The Aerospace Organization",
		Link: "https://aerospace.org/",
		Time: "2022-present",
		Bullets: [
			`Develop satellite communication simulators to analyze government requirement satisfactions given contractor systems.`,
			`Collaborate with government entities to develop productivity tools for managing capability assessments and tradeoffs`,
			`Maintain and add features to internal data visualization toolings and applications.`
		]
	},
	{
		Name: "Business Intelligence Developer",
		Location: "Aspire",
		Link: "https://www.aspirehealthplan.org/",
		Time: "2021-2022",
		Bullets: [
			`Developed, prepped, and maintained Aspire's <a target="_blank" href="https://www.precisely.com/glossary/enterprise-data-warehouse#:~:text=An%20enterprise%20data%20warehouse%20(EDW,server%20or%20in%20the%20cloud.">Enterprise Data Warehouse</a> (SQL database) for all of Aspire's business needs.`,
			"Gathered requirements for and implemented logic for client-requested data reports.",
			"Designed, implemented, and operated a data-extraction pipeline runner - complete with monitoring, validating, and scheduling features.",
			"Designed, implemented, and operated a data load monitoring suite."
		]
	},{
		Name: "Full Stack Engineer",
		Location: "Defie",
		Time: "2018-2021",
		Bullets: [
			`Built and shipped features for an <a target="_blank" href="https://en.wikipedia.org/wiki/Enterprise_resource_planning">Enterprise Resource Planning (ERP) software.</a>`,
			`Designed ~40 resource-oriented data models and oversaw their lifecycle implementations.`,
			`Maintained and restructured large legacy codebase. From 2018 - 2021, total lines of code went from 134,244 to 43,460 (66% decrease!)`
		]
	},
]

const years_since = year => `${Math.abs(new Date(Date.now() - year).getUTCFullYear() - year)} yrs` 

export const tools = [
	['Python',			years_since(2022),	'https://www.python.org/'							],
	['SQL',				years_since(2020),	'https://en.wikipedia.org/wiki/SQL'					],
	['Linux/Bash',		years_since(2018),	'https://en.wikipedia.org/wiki/Bash_(Unix_shell)'	],
	['Javascript',		years_since(2018),	'https://nextjs.org/'								],
	['React/Next.js',	years_since(2018),	'https://react.dev/'								], 
	['GoLang',							3,  'https://go.dev/'									],
	['Kubernetes',		years_since(2018),	'https://kubernetes.io/'							],
	['C++',								3,	'https://en.wikipedia.org/wiki/C%2B%2B'				],
	['JIRA',			years_since(2022),	'https://www.atlassian.com/software/jira'			],
	['GIT',				years_since(2018),	'https://git-scm.com/'								],
]
export const skills = {
	 'Backend': years_since(2018)
	,'Frontend': years_since(2016)
	,'Data engineering': years_since(2018)
	,'Cloud engineering': years_since(2018)
	,'CI/CD development': years_since(2018)
}

export const education = 'B.S. Mathematics, Physics Minor from <a target="_blank" href="https://www.math.ucsb.edu/">UC Santa Barbara</a> 2016.';
