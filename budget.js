
function showThisMonthBudget() {
	let incomeCells = document.querySelectorAll("#income > div.budget__cell--name + div");
	let i = 0;
	for (let x in budget.thisMonthIncome) {
		incomeCells[i].textContent = budget.thisMonthIncome[x].toLocaleString();
		budget.thisMonthIncome[x] > 0 ? incomeCells[i].classList.add("budget__cell--plus") : incomeCells[i].classList.remove("budget__cell--plus");
		i++;
	}



	let expensesCells = document.querySelectorAll("#expenses > div.budget__cell--name + div");
	i = 0;
	for (let x in budget.thisMonthExpenses) {
		expensesCells[i].textContent = budget.thisMonthExpenses[x].toLocaleString();
		budget.thisMonthExpenses[x] > 0 ? expensesCells[i].classList.add("budget__cell--minus") : expensesCells[i].classList.remove("budget__cell--minus");
		i++;
	}

	let sum = 0;
	for (let x in budget.thisMonthIncome) {
		sum += budget.thisMonthIncome[x];
	}
	document.getElementById("incomeSummaryThisMonth").textContent = sum.toLocaleString();
	sum > 0 ? document.getElementById("incomeSummaryThisMonth").classList.add("budget__cell--plus") : document.getElementById("incomeSummaryThisMonth").classList.remove("budget__cell--plus");
	document.getElementById("profitIncomeThisMonth").textContent = sum.toLocaleString();
	sum > 0 ? document.getElementById("profitIncomeThisMonth").classList.add("budget__cell--plus") : document.getElementById("profitIncomeThisMonth").classList.remove("budget__cell--plus");

	let sum2 = 0;
	for (let x in budget.thisMonthExpenses) {
		sum2 += budget.thisMonthExpenses[x];
	}
	document.getElementById("expensesSummaryThisMonth").textContent = sum2.toLocaleString();
	sum2 > 0 ? document.getElementById("expensesSummaryThisMonth").classList.add("budget__cell--minus") : document.getElementById("expensesSummaryThisMonth").classList.remove("budget__cell--minus");
	document.getElementById("expensesIncomeThisMonth").textContent = sum2.toLocaleString();
	sum2 > 0 ? document.getElementById("expensesIncomeThisMonth").classList.add("budget__cell--minus") : document.getElementById("expensesIncomeThisMonth").classList.remove("budget__cell--minus");
	document.getElementById("profitSummaryThisMonth").textContent = (sum - sum2).toLocaleString();
	document.getElementById("profitSummaryThisMonth").classList.remove("budget__cell--plus", "budget__cell--minus");
	if ((sum - sum2) > 0) {
		document.getElementById("profitSummaryThisMonth").classList.add("budget__cell--plus");
	} else {
		if ((sum - sum2) < 0) document.getElementById("profitSummaryThisMonth").classList.add("budget__cell--minus");
	}


}



const months = []

class Month {
	constructor(){
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

let thisMonth = new Month;

function saveMonth(){
	thisMonth.income = thisMonth.sale + thisMonth.prizes + thisMonth.loans;
	thisMonth.expenses = thisMonth.salaries + thisMonth.recruitment + thisMonth.parts + thisMonth.interest + thisMonth.tax + thisMonth.capital;
	thisMonth.profit = thisMonth.income - thisMonth.expenses;
	months.push(thisMonth);
	thisMonth = new Month;
}

function showBudget(month){
	console.log(month);
	for (let key in month){
		const id = `month${key.charAt(0).toUpperCase() + key.slice(1)}0`;
		const element = document.getElementById(id);
		element.textContent = month[key];
	}
	// tax under profit ?

}
function showActualBudget(){

}

function saveYear(){}
function showYearBudget(){}
