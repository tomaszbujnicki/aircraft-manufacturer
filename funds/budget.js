
const months = [];
const years = [];

class financialResult {
	constructor(period){
		this.period = period;
		this.sale = 0;
		this.prizes = 0;
		this.loans = 0;
		this.salaries = 0;
		this.recruitment = 0;
		this.parts = 0;
		this.interest = 0;
		this.tax = 0;
		this.capital = 0;
	}
}

let thisMonth = new financialResult("month");
let thisYear = new financialResult("year");

saveMonth();
saveMonth();
saveYear();
saveYear();
showMonthlyFinancialReport();
showAnnualFinancialReport();

function saveMonth(){
	calculateProfit(thisMonth);
	months.push(thisMonth);
	thisMonth = new financialResult("month");
}

function saveYear(){
	calculateProfit(thisYear);
    years.push(thisYear);
	thisYear = new financialResult("year");
}

function calculateProfit(object){
	object.income = object.sale + object.prizes + object.loans;
	object.expenses = object.salaries + object.recruitment + object.parts + object.interest + object.tax + object.capital;
	object.profit = object.income - object.expenses;
}

function showActualBudget(){
	calculateProfit(thisMonth);
	showBudget(thisMonth,0);
	calculateProfit(thisYear);
	showBudget(thisYear,0);
}
function showMonthlyFinancialReport(){
	showBudget(months[months.length-1],1)
	showBudget(months[months.length-2],2)
}
function showAnnualFinancialReport(){
	showBudget(years[years.length-1],1)
	showBudget(years[years.length-2],2)
}

function showBudget(item,columnNumber){
	for (const key in item){
		if (key === "period") continue ;
		const id = item.period + key.charAt(0).toUpperCase() + key.slice(1) + columnNumber;
		const element = document.getElementById(id);
		element.textContent = item[key].toLocaleString();
	}
	const id = item.period + "Profit" + columnNumber;
	const element = document.getElementById(id);
	item.profit < 0 ? element.classList.add("budget__cell--minus") : element.classList.remove("budget__cell--minus")
	item.profit > 0 ? element.classList.add("budget__cell--plus") : element.classList.remove("budget__cell--plus")
}


