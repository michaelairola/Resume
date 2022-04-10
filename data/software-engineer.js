import { htmlObj } from './html-template.js';

export const linksData = new htmlObj({
	"https://blog.michaelairola.com": "blogging.svg",
	"https://github.com/michaelairola": "github.svg",
	"https://twitter.com/": "twitter.svg",
	"https://www.linkedin.com/in/michael-airola-122702162/": "linkedin.svg",
	"/pdf/software-engineer.pdf": "pdf.svg",
	"https://www.cookbook.michaelairola.com/": "cookbook.svg",
})

export const infoData = {
	Name: "Michael S Airola",
	Email: 'me@michaelairola.com',
	Cell: '831-210-9163',
	Address: '119 S Voluntario St. Santa Barbrara, CA 93103'
}

export const professionalSummary = 
	`Looking for positions where I can develop useful products for important causes in a healthy work environment. I love making complex things less complex. Current position is Business Intelligence Developer at <a href="https://www.aspirehealthplan.org/">Aspire Health Plan</a>.`;

export const workXps = [
	{
		Name: "Business Intelligence Developer", 
		Location: "Aspire", 
		Link: "https://www.aspirehealthplan.org/", 
		Time: "2021-present", 
		Bullets: [
			`Developed, prepped, and maintained Aspire's <a target="_blank" href="https://www.precisely.com/glossary/enterprise-data-warehouse#:~:text=An%20enterprise%20data%20warehouse%20(EDW,server%20or%20in%20the%20cloud.">Enterprise Data Warehouse</a> for all of Aspire's business needs.`,
			"Gathered requirements for and implemented logic for client-requested data reports.", 
			"Designed, implemented, and operated a data-extraction pipeline runner - complete with monitoring, validating, and scheduling features. Used for all data file exchanges going to Aspire's business partners.",
			"Designed, implemented, and operated a data load monitoring suite. Used for all data file loads coming from Aspire's business partners."
		]
	},{
		Name: "Full Stack Engineer", 
		Location: "Defie", 
		Link: "",//"https://defie.co/",
		Time: "2018-2021", 
		Bullets: [ 
			`Built and shipped features for an Enterprise Resource Planning (<a target="_blank" href="https://en.wikipedia.org/wiki/Enterprise_resource_planning">ERP</a>) software.`,
			`Designed ~40 resource-oriented data models and oversaw their lifecycle implementations.`,
			`Maintained and restructured large legacy codebase. From 2018 - 2021, total lines of code went from 134,244 to 43,460 (66% decrease!)`
		]
	},
]
export const skills = [
	,`Relational database work: SQL ~ 4yrs xp.`
	,`SQL Server Intergration Services (SSIS) projects: C++ ~ 1 yr xp.`
	,`Data visualization work: Tableau, Python ~ 1 yr xp. R ~ 2 yrs xp.`
	,`Website development: Javascript, LitElement, React ~ 2 yrs xp.`
	,`Server-side engineering: GoLang, Node ~ 2 yrs xp.`
	,`Development Operations: Linux, Git, Docker ~ 4yrs xp.`
	,`CI/CD pipeline engineering: Kubernetes ~ 2 ys xp. Google Cloud Run ~ 4 yrs xp.`
]

export const education = 'B.S. Mathematics, Physics Minor from UC Santa Barbara 2016';
