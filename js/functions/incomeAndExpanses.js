function calculateIncome(amount, property) {
	cash += amount;
	showCash();
	thisMonth[property] += amount;
	thisYear[property] += amount;
	showActualBudget();
}

function calculateExpenses(amount, property) {
	cash -= amount;
	showCash();
	thisMonth[property] += amount;
	thisYear[property] += amount;
	showActualBudget();
}


function payTax() {
	const incomeSum = thisMonth.sale + thisMonth.prizes;
	const expensesSum = thisMonth.interest + thisMonth.parts + thisMonth.recruitment + thisMonth.salaries;
	
	let result = incomeSum - expensesSum;
	if (result > 0) {
		calculateExpenses(Math.floor(result * taxRate), "tax");
	}
}

function payment() {
	calculateExpenses(totalSalary(), "salaries");
}