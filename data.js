let dayTick = 1000;
let dollars = 300000;
let availableParts = 110;
let productionForce = 1000;
let date = new Date(1955, 11, 18);

const airplanes = [
	{
		name: "Beoing 737-700",
		img: "img/flags/japan.svg",
		parts: 100,
		price: 150000,
		passengers: 110,
		quantity: 0,
		productionStage: 0,
		workers: 0
	},
	{
		name: "Helicopter",
		img: "img/flags/china.svg",
		parts: 10,
		price: 15000,
		passengers: 110,
		quantity: 0,
		productionStage: 0,
		workers: 0
	},
	{
		name: "Airbus A320",
		img: "img/flags/canada.svg",
		parts: 99,
		price: 105000,
		passengers: 70,
		quantity: 0,
		productionStage: 0,
		workers: 0
	}
]

const employees = [
	{
		name: "Workers",
		img: "img/flags/canada.svg",
		number: 0,
		maxNumber: 20,
		salary: 1750,
		employmentCost: 2000,
		description: "Workers build aircrafts"
	},
	{
		name: "Engineers",
		img: "img/flags/australia.svg",
		number: 0,
		maxNumber: 10,
		salary: 4200,
		employmentCost: 8000,
		description: "Engineers develop new aircrafts"
	},
	{
		name: "Human Resources",
		img: "img/flags/germany.svg",
		number: 0,
		maxNumber: 10,
		salary: 3200,
		employmentCost: 4000,
		description: "HR care about all employees"
	},




]
let availableWorkers = employees[0].number;
const stock_coreValues = [
	{
		flag: "img/flags/japan.svg",
		country: "Japan",
		company: ["Yamato", "Dōmo arigatō", "Seikō", "Sakura no kuni", "Japan Motor"],
		time: 45,
		risk: 5,
		amount: 100,
		price: 212
	},
	{
		flag: "img/flags/canada.svg",
		country: "Canada",
		company: ["Maple Inc.", "Polar Bear", "Favor & kindness", "Sure, eh"],
		time: 3,
		risk: 7,
		amount: 100,
		price: 269
	},
	{
		flag: "img/flags/brazil.svg",
		country: "Brazil",
		company: ["Avião Pequeno","Minha linda","Big Brasil","Rio", "São Paulo", "São Salvador"],
		time: 20,
		risk: 11,
		amount: 200,
		price: 223
	},
	{
		flag: "img/flags/germany.svg",
		country: "Germany",
		company: ["Teile GmbH", "Bayern GmbH", "Berliner Bären", "Hafen von Hamburg", "Ruhrgebiet", "der Kebap","Achtung"],
		time: 31,
		risk: 2,
		amount: 200,
		price: 231
	},
	{
		flag: "img/flags/china.svg",
		country: "China",
		company: ["Best Friend", "My Corp", "Big Brother", "Red Dragon", "Fàn" ,"Good Quality", "Moon Shanzung"],
		time: 55,
		risk: 18,
		amount: 500,
		price: 170
	},
	{
		flag: "img/flags/australia.svg",
		country: "Australia",
		company: ["Yello Kangaroo", "Upside down", "Desert & Ocean", "Long road"],
		time: 90,
		risk: 7,
		amount: 200,
		price: 189
	},
	{
		flag: "img/flags/russia.svg",
		country: "Russia",
		company: ["Matryoshka", "Vodka & more", "Hot Sibir", "Vladimir", "Da da da"],
		time: 36,
		risk: 13,
		amount: 200,
		price: 201
	},
]


const budget = {
	thisMonthExpenses: {
		salary: 0,
		parts: 0,
		recruitment: 0,
		tax: 0,
		interest: 0,
		other: 0
	},
	thisMonthIncome: {
		sale: 0,
		prizes: 0,
		other: 0
	},
	lastMonthExpenses: {
		salary: 0,
		parts: 0,
		recruitment: 0,
		tax: 0,
		interest: 0,
		other: 0
	},
	lastMonthIncome: {
		sale: 0,
		prizes: 0,
		other: 0
	},
	agoMonthExpenses: {
		salary: 0,
		parts: 0,
		recruitment: 0,
		tax: 0,
		interest: 0,
		other: 0
	},
	agoMonthIncome: {
		sale: 0,
		prizes: 0,
		other: 0
	}

}

const yearBudget = {
	thisYearExpenses: {
		salary: 0,
		parts: 0,
		recruitment: 0,
		tax: 0,
		interest: 0,
		other: 0
	},
	thisYearIncome: {
		sale: 0,
		prizes: 0,
		other: 0
	},
	lastYearExpenses: {
		salary: 0,
		parts: 0,
		recruitment: 0,
		tax: 0,
		interest: 0,
		other: 0
	},
	lastYearIncome: {
		sale: 0,
		prizes: 0,
		other: 0
	},
	agoYearExpenses: {
		salary: 0,
		parts: 0,
		recruitment: 0,
		tax: 0,
		interest: 0,
		other: 0
	},
	agoYearIncome: {
		sale: 0,
		prizes: 0,
		other: 0
	}

}

const loans = [
	{
		amount: 100000,
		interest: 6,
		period: 2,
		installment: 4432,
		numberOfInstallments : 0
	},
	{
		amount: 250000,
		interest: 12,
		period: 4,
		installment: 6583,
		numberOfInstallments : 0
	},
	{
		amount: 500000,
		interest: 18,
		period: 6,
		installment: 11403,
		numberOfInstallments : 0
	},
	{
		amount: 1000000,
		interest: 24,
		period: 8,
		installment: 23513,
		numberOfInstallments : 0
	}
]