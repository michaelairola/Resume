import { htmlObj } from './html-template.js';

export const linksData = new htmlObj({
	"https://blog.michaelairola.com": "blogging.svg",
	"https://github.com/michaelairola": "github.svg",
	"https://twitter.com/": "twitter.svg",
	"https://www.linkedin.com/in/michael-airola-122702162/": "linkedin.svg",
	"/pdf/waiter.pdf": "pdf.svg",
})

export const infoData = {
	Name: "Michael S Airola",
	Email: 'me@michaelairola.com',
	Cell: '831-210-9163',
	Address: '121 S Voluntario st. Santa Barbrara, CA 93103'
}

export const professionalSummary = 
	`Experienced customer service worker seeking opportunity as barista at Cajé inc. Dedicated to excellent customer experiences and healthy work environments.`;

export const skillsData = new htmlObj({
	"Customer Service": [
		`Service industry experience ranging from smoothie maker at blenders all the way to full-service wait staff at Beachside Bar and cafe.`
	],
	"Food Industry": [
		`Oyster bar meal and appetizer prep experience.`,
		`Meal prepper, expediter and dinner runner at Beachside Bar and Cafe. I also love to cook!`
	],
	"Adapatability": [
		`I enjoy being challenged and placed in new and exciting environments.`, 
		`My best attributes are my positive attitude and my honest work ethics.`
	],
	"Great communication Skills": [
		`I am an extroverted people-person who takes pride in positive customer interactions.`
	],
	"Drinks": [
		`I do love coffee. Current favorite drink is Cold Brew, no cream or sugar necessary. Very willing and able to put specialty cocktails in my repertoire.`
	],
});

export const workHistoryData = [
	'Full Stack Engineer at <a href="https://defie.co/">Defie.co</a>. Fremont, CA. 2018-2020',
	'Poke Bar manager at Big Eye Raw Bar. Santa Barbara, CA. 2017-2018',
	'Server at BeachSide Bar and Cafe. Santa Barbara, CA. 2016-2018',
	'Blenders In the Grass smoothie-shack. Santa Barbara, CA. 2013-2014',
	'Camp Counselor at Clover Sports Camp. Carmel, CA. Summers 2009-2015',
]
export const education = 'B.S. Mathematics, Physics Minor from UC Santa Barbara 2016';
