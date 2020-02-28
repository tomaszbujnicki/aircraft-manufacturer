
function showThisMonthBudget() {
	let incomeCells = document.querySelectorAll("#income > div.budget__cell--name + div");
	let i = 0;
	for (let x in budget.thisMonthIncome) {
		incomeCells[i].textContent = budget.thisMonthIncome[x].toLocaleString(undefined, {maximumFractionDigits: 0});
		budget.thisMonthIncome[x] > 0 ? incomeCells[i].classList.add("budget__cell--plus") : incomeCells[i].classList.remove("budget__cell--plus");
		i++;
	}



	let expensesCells = document.querySelectorAll("#expenses > div.budget__cell--name + div");
	i = 0;
	for (let x in budget.thisMonthExpenses) {
		expensesCells[i].textContent = budget.thisMonthExpenses[x].toLocaleString(undefined, {maximumFractionDigits: 0});
		budget.thisMonthExpenses[x] > 0 ? expensesCells[i].classList.add("budget__cell--minus") : expensesCells[i].classList.remove("budget__cell--minus");
		i++;
	}

	let sum = 0;
	for (let x in budget.thisMonthIncome) {
		sum += budget.thisMonthIncome[x];
	}
	document.getElementById("incomeSummaryThisMonth").textContent = sum.toLocaleString(undefined, {maximumFractionDigits: 0});
	sum > 0 ? document.getElementById("incomeSummaryThisMonth").classList.add("budget__cell--plus") : document.getElementById("incomeSummaryThisMonth").classList.remove("budget__cell--plus");
	document.getElementById("profitIncomeThisMonth").textContent = sum.toLocaleString(undefined, {maximumFractionDigits: 0});
	sum > 0 ? document.getElementById("profitIncomeThisMonth").classList.add("budget__cell--plus") : document.getElementById("profitIncomeThisMonth").classList.remove("budget__cell--plus");

	let sum2 = 0;
	for (let x in budget.thisMonthExpenses) {
		sum2 += budget.thisMonthExpenses[x];
	}
	document.getElementById("expensesSummaryThisMonth").textContent = sum2.toLocaleString(undefined, {maximumFractionDigits: 0});
	sum2 > 0 ? document.getElementById("expensesSummaryThisMonth").classList.add("budget__cell--minus") : document.getElementById("expensesSummaryThisMonth").classList.remove("budget__cell--minus");
	document.getElementById("expensesIncomeThisMonth").textContent = sum2.toLocaleString(undefined, {maximumFractionDigits: 0});
	sum2 > 0 ? document.getElementById("expensesIncomeThisMonth").classList.add("budget__cell--minus") : document.getElementById("expensesIncomeThisMonth").classList.remove("budget__cell--minus");
	document.getElementById("profitSummaryThisMonth").textContent = (sum - sum2).toLocaleString(undefined, {maximumFractionDigits: 0});
	document.getElementById("profitSummaryThisMonth").classList.remove("budget__cell--plus", "budget__cell--minus");
	if ((sum - sum2) > 0) {
		document.getElementById("profitSummaryThisMonth").classList.add("budget__cell--plus");
	} else {
		if ((sum - sum2) < 0) document.getElementById("profitSummaryThisMonth").classList.add("budget__cell--minus");
	}


}

function showLastMonthBudget() {
	let incomeCells = document.querySelectorAll("#income > div.budget__cell--name + div+div");
	let i = 0;
	for (let x in budget.lastMonthIncome) {
		incomeCells[i].textContent = budget.lastMonthIncome[x].toLocaleString(undefined, {maximumFractionDigits: 0});
		budget.lastMonthIncome[x] > 0 ? incomeCells[i].classList.add("budget__cell--plus") : incomeCells[i].classList.remove("budget__cell--plus");
		i++;
	}



	let expensesCells = document.querySelectorAll("#expenses > div.budget__cell--name + div+div");
	i = 0;
	for (let x in budget.lastMonthExpenses) {
		expensesCells[i].textContent = budget.lastMonthExpenses[x].toLocaleString(undefined, {maximumFractionDigits: 0});
		budget.lastMonthExpenses[x] > 0 ? expensesCells[i].classList.add("budget__cell--minus") : expensesCells[i].classList.remove("budget__cell--minus");
		i++;
	}

	let sum = 0;
	for (let x in budget.lastMonthIncome) {
		sum += budget.lastMonthIncome[x];
	}
	document.getElementById("incomeSummaryLastMonth").textContent = sum.toLocaleString(undefined, {maximumFractionDigits: 0});
	sum > 0 ? document.getElementById("incomeSummaryLastMonth").classList.add("budget__cell--plus") : document.getElementById("incomeSummaryLastMonth").classList.remove("budget__cell--plus");
	document.getElementById("profitIncomeLastMonth").textContent = sum.toLocaleString(undefined, {maximumFractionDigits: 0});
	sum > 0 ? document.getElementById("profitIncomeLastMonth").classList.add("budget__cell--plus") : document.getElementById("profitIncomeLastMonth").classList.remove("budget__cell--plus");

	let sum2 = 0;
	for (let x in budget.lastMonthExpenses) {
		sum2 += budget.lastMonthExpenses[x];
	}
	document.getElementById("expensesSummaryLastMonth").textContent = sum2.toLocaleString(undefined, {maximumFractionDigits: 0});
	sum2 > 0 ? document.getElementById("expensesSummaryLastMonth").classList.add("budget__cell--minus") : document.getElementById("expensesSummaryLastMonth").classList.remove("budget__cell--minus");
	document.getElementById("expensesIncomeLastMonth").textContent = sum2.toLocaleString(undefined, {maximumFractionDigits: 0});
	sum2 > 0 ? document.getElementById("expensesIncomeLastMonth").classList.add("budget__cell--minus") : document.getElementById("expensesIncomeLastMonth").classList.remove("budget__cell--minus");
	document.getElementById("profitSummaryLastMonth").textContent = (sum - sum2).toLocaleString(undefined, {maximumFractionDigits: 0});
	document.getElementById("profitSummaryLastMonth").classList.remove("budget__cell--plus", "budget__cell--minus");
	if ((sum - sum2) > 0) {
		document.getElementById("profitSummaryLastMonth").classList.add("budget__cell--plus");
	} else {
		if ((sum - sum2) < 0) document.getElementById("profitSummaryLastMonth").classList.add("budget__cell--minus");
	}

}

function showAgoMonthBudget() {
	let incomeCells = document.querySelectorAll("#income > div.budget__cell--name + div+div+div");
	let i = 0;
	for (let x in budget.agoMonthIncome) {
		incomeCells[i].textContent = budget.agoMonthIncome[x].toLocaleString(undefined, {maximumFractionDigits: 0});
		budget.agoMonthIncome[x] > 0 ? incomeCells[i].classList.add("budget__cell--plus") : incomeCells[i].classList.remove("budget__cell--plus");
		i++;
	}



	let expensesCells = document.querySelectorAll("#expenses > div.budget__cell--name + div+div+div");
	i = 0;
	for (let x in budget.agoMonthExpenses) {
		expensesCells[i].textContent = budget.agoMonthExpenses[x].toLocaleString(undefined, {maximumFractionDigits: 0});
		budget.agoMonthExpenses[x] > 0 ? expensesCells[i].classList.add("budget__cell--minus") : expensesCells[i].classList.remove("budget__cell--minus");
		i++;
	}

	let sum = 0;
	for (let x in budget.agoMonthIncome) {
		sum += budget.agoMonthIncome[x];
	}
	document.getElementById("incomeSummaryAgoMonth").textContent = sum.toLocaleString(undefined, {maximumFractionDigits: 0});
	sum > 0 ? document.getElementById("incomeSummaryAgoMonth").classList.add("budget__cell--plus") : document.getElementById("incomeSummaryAgoMonth").classList.remove("budget__cell--plus");
	document.getElementById("profitIncomeAgoMonth").textContent = sum.toLocaleString(undefined, {maximumFractionDigits: 0});
	sum > 0 ? document.getElementById("profitIncomeAgoMonth").classList.add("budget__cell--plus") : document.getElementById("profitIncomeAgoMonth").classList.remove("budget__cell--plus");
	let sum2 = 0;
	for (let x in budget.agoMonthExpenses) {
		sum2 += budget.agoMonthExpenses[x];
	}
	document.getElementById("expensesSummaryAgoMonth").textContent = sum2.toLocaleString(undefined, {maximumFractionDigits: 0});
	sum2 > 0 ? document.getElementById("expensesSummaryAgoMonth").classList.add("budget__cell--minus") : document.getElementById("expensesSummaryAgoMonth").classList.remove("budget__cell--minus");
	document.getElementById("expensesIncomeAgoMonth").textContent = sum2.toLocaleString(undefined, {maximumFractionDigits: 0});
	sum2 > 0 ? document.getElementById("expensesIncomeAgoMonth").classList.add("budget__cell--minus") : document.getElementById("expensesIncomeAgoMonth").classList.remove("budget__cell--minus");
	document.getElementById("profitSummaryAgoMonth").textContent = (sum - sum2).toLocaleString(undefined, {maximumFractionDigits: 0});
	document.getElementById("profitSummaryAgoMonth").classList.remove("budget__cell--plus", "budget__cell--minus");
	if ((sum - sum2) > 0) {
		document.getElementById("profitSummaryAgoMonth").classList.add("budget__cell--plus");
	} else {
		if ((sum - sum2) < 0) document.getElementById("profitSummaryAgoMonth").classList.add("budget__cell--minus");
	}
}



// ------------------------------------------- YEAR
function showThisYearBudget() {
	let incomeCells = document.querySelectorAll("#yearIncome > div.budget__cell--name + div");
	let i = 0;
	for (let x in yearBudget.thisYearIncome) {
		incomeCells[i].textContent = yearBudget.thisYearIncome[x].toLocaleString(undefined, {maximumFractionDigits: 0});
		yearBudget.thisYearIncome[x] > 0 ? incomeCells[i].classList.add("budget__cell--plus") : incomeCells[i].classList.remove("budget__cell--plus");
		i++;
	}



	let expensesCells = document.querySelectorAll("#yearExpenses > div.budget__cell--name + div");
	i = 0;
	for (let x in yearBudget.thisYearExpenses) {
		expensesCells[i].textContent = yearBudget.thisYearExpenses[x].toLocaleString(undefined, {maximumFractionDigits: 0});
		yearBudget.thisYearExpenses[x] > 0 ? expensesCells[i].classList.add("budget__cell--minus") : expensesCells[i].classList.remove("budget__cell--minus");
		i++;
	}

	let sum = 0;
	for (let x in yearBudget.thisYearIncome) {
		sum += yearBudget.thisYearIncome[x];
	}
	document.getElementById("incomeSummaryThisYear").textContent = sum.toLocaleString(undefined, {maximumFractionDigits: 0});
	sum > 0 ? document.getElementById("incomeSummaryThisYear").classList.add("budget__cell--plus") : document.getElementById("incomeSummaryThisYear").classList.remove("budget__cell--plus");
	document.getElementById("profitIncomeThisYear").textContent = sum.toLocaleString(undefined, {maximumFractionDigits: 0});
	sum > 0 ? document.getElementById("profitIncomeThisYear").classList.add("budget__cell--plus") : document.getElementById("profitIncomeThisYear").classList.remove("budget__cell--plus");

	let sum2 = 0;
	for (let x in yearBudget.thisYearExpenses) {
		sum2 += yearBudget.thisYearExpenses[x];
	}
	document.getElementById("expensesSummaryThisYear").textContent = sum2.toLocaleString(undefined, {maximumFractionDigits: 0});
	sum2 > 0 ? document.getElementById("expensesSummaryThisYear").classList.add("budget__cell--minus") : document.getElementById("expensesSummaryThisYear").classList.remove("budget__cell--minus");
	document.getElementById("expensesIncomeThisYear").textContent = sum2.toLocaleString(undefined, {maximumFractionDigits: 0});
	sum2 > 0 ? document.getElementById("expensesIncomeThisYear").classList.add("budget__cell--minus") : document.getElementById("expensesIncomeThisYear").classList.remove("budget__cell--minus");
	document.getElementById("profitSummaryThisYear").textContent = (sum - sum2).toLocaleString(undefined, {maximumFractionDigits: 0});
	document.getElementById("profitSummaryThisYear").classList.remove("budget__cell--plus", "budget__cell--minus");
	if ((sum - sum2) > 0) {
		document.getElementById("profitSummaryThisYear").classList.add("budget__cell--plus");
	} else {
		if ((sum - sum2) < 0) document.getElementById("profitSummaryThisYear").classList.add("budget__cell--minus");
	}


}

function showLastYearBudget() {
	let incomeCells = document.querySelectorAll("#yearIncome > div.budget__cell--name + div+div");
	let i = 0;
	for (let x in yearBudget.lastYearIncome) {
		incomeCells[i].textContent = yearBudget.lastYearIncome[x].toLocaleString(undefined, {maximumFractionDigits: 0});
		yearBudget.lastYearIncome[x] > 0 ? incomeCells[i].classList.add("budget__cell--plus") : incomeCells[i].classList.remove("budget__cell--plus");
		i++;
	}



	let expensesCells = document.querySelectorAll("#yearExpenses > div.budget__cell--name + div+div");
	i = 0;
	for (let x in yearBudget.lastYearExpenses) {
		expensesCells[i].textContent = yearBudget.lastYearExpenses[x].toLocaleString(undefined, {maximumFractionDigits: 0});
		yearBudget.lastYearExpenses[x] > 0 ? expensesCells[i].classList.add("budget__cell--minus") : expensesCells[i].classList.remove("budget__cell--minus");
		i++;
	}

	let sum = 0;
	for (let x in yearBudget.lastYearIncome) {
		sum += yearBudget.lastYearIncome[x];
	}
	document.getElementById("incomeSummaryLastYear").textContent = sum.toLocaleString(undefined, {maximumFractionDigits: 0});
	sum > 0 ? document.getElementById("incomeSummaryLastYear").classList.add("budget__cell--plus") : document.getElementById("incomeSummaryLastYear").classList.remove("budget__cell--plus");
	document.getElementById("profitIncomeLastYear").textContent = sum.toLocaleString(undefined, {maximumFractionDigits: 0});
	sum > 0 ? document.getElementById("profitIncomeLastYear").classList.add("budget__cell--plus") : document.getElementById("profitIncomeLastYear").classList.remove("budget__cell--plus");

	let sum2 = 0;
	for (let x in yearBudget.lastYearExpenses) {
		sum2 += yearBudget.lastYearExpenses[x];
	}
	document.getElementById("expensesSummaryLastYear").textContent = sum2.toLocaleString(undefined, {maximumFractionDigits: 0});
	sum2 > 0 ? document.getElementById("expensesSummaryLastYear").classList.add("budget__cell--minus") : document.getElementById("expensesSummaryLastYear").classList.remove("budget__cell--minus");
	document.getElementById("expensesIncomeLastYear").textContent = sum2.toLocaleString(undefined, {maximumFractionDigits: 0});
	sum2 > 0 ? document.getElementById("expensesIncomeLastYear").classList.add("budget__cell--minus") : document.getElementById("expensesIncomeLastYear").classList.remove("budget__cell--minus");
	document.getElementById("profitSummaryLastYear").textContent = (sum - sum2).toLocaleString(undefined, {maximumFractionDigits: 0});
	document.getElementById("profitSummaryLastYear").classList.remove("budget__cell--plus", "budget__cell--minus");
	if ((sum - sum2) > 0) {
		document.getElementById("profitSummaryLastYear").classList.add("budget__cell--plus");
	} else {
		if ((sum - sum2) < 0) document.getElementById("profitSummaryLastYear").classList.add("budget__cell--minus");
	}

}

function showAgoYearBudget() {
	let incomeCells = document.querySelectorAll("#yearIncome > div.budget__cell--name + div+div+div");
	let i = 0;
	for (let x in yearBudget.agoYearIncome) {
		incomeCells[i].textContent = yearBudget.agoYearIncome[x].toLocaleString(undefined, {maximumFractionDigits: 0});
		yearBudget.agoYearIncome[x] > 0 ? incomeCells[i].classList.add("budget__cell--plus") : incomeCells[i].classList.remove("budget__cell--plus");
		i++;
	}



	let expensesCells = document.querySelectorAll("#yearExpenses > div.budget__cell--name + div+div+div");
	i = 0;
	for (let x in yearBudget.agoYearExpenses) {
		expensesCells[i].textContent = yearBudget.agoYearExpenses[x].toLocaleString(undefined, {maximumFractionDigits: 0});
		yearBudget.agoYearExpenses[x] > 0 ? expensesCells[i].classList.add("budget__cell--minus") : expensesCells[i].classList.remove("budget__cell--minus");
		i++;
	}

	let sum = 0;
	for (let x in yearBudget.agoYearIncome) {
		sum += yearBudget.agoYearIncome[x];
	}
	document.getElementById("incomeSummaryAgoYear").textContent = sum.toLocaleString(undefined, {maximumFractionDigits: 0});
	sum > 0 ? document.getElementById("incomeSummaryAgoYear").classList.add("budget__cell--plus") : document.getElementById("incomeSummaryAgoYear").classList.remove("budget__cell--plus");
	document.getElementById("profitIncomeAgoYear").textContent = sum.toLocaleString(undefined, {maximumFractionDigits: 0});
	sum > 0 ? document.getElementById("profitIncomeAgoYear").classList.add("budget__cell--plus") : document.getElementById("profitIncomeAgoYear").classList.remove("budget__cell--plus");
	let sum2 = 0;
	for (let x in yearBudget.agoYearExpenses) {
		sum2 += yearBudget.agoYearExpenses[x];
	}
	document.getElementById("expensesSummaryAgoYear").textContent = sum2.toLocaleString(undefined, {maximumFractionDigits: 0});
	sum2 > 0 ? document.getElementById("expensesSummaryAgoYear").classList.add("budget__cell--minus") : document.getElementById("expensesSummaryAgoYear").classList.remove("budget__cell--minus");
	document.getElementById("expensesIncomeAgoYear").textContent = sum2.toLocaleString(undefined, {maximumFractionDigits: 0});
	sum2 > 0 ? document.getElementById("expensesIncomeAgoYear").classList.add("budget__cell--minus") : document.getElementById("expensesIncomeAgoYear").classList.remove("budget__cell--minus");
	document.getElementById("profitSummaryAgoYear").textContent = (sum - sum2).toLocaleString(undefined, {maximumFractionDigits: 0});
	document.getElementById("profitSummaryAgoYear").classList.remove("budget__cell--plus", "budget__cell--minus");
	if ((sum - sum2) > 0) {
		document.getElementById("profitSummaryAgoYear").classList.add("budget__cell--plus");
	} else {
		if ((sum - sum2) < 0) document.getElementById("profitSummaryAgoYear").classList.add("budget__cell--minus");
	}
}
