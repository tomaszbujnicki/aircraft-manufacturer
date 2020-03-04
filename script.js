//document.addEventListener('contextmenu', event => event.preventDefault());

/*
	1. Functions
		1.1 Engine
			1.1.1 Ticker
			1.1.2 Periodic
			1.1.3 Calculate
			1.1.4 Action
			1.1.5 Visual effects
			1.1.6 new Message
			1.1.7 removeDOM_ELEMENT
			1.1.8 Menu
		1.2 Show on screen
			1.2.1 Resources
			1.2.2 Date
			1.2.3 Aircrafts
			1.2.4 Funds
			1.2.5 Employees
			1.2.6 Parts
	2. Event Listeners
		2.1 Main container
			2.1.1 Aircrafts
			2.1.2 Menu (resources) - open pop-up cards
		2.2 Pop-up cards
			2.2.1 Funds
	3. Start the game
	



*/

// 	1.1 Engine ......................................................................................

// 		1.1.1 Ticker ......................................................................................

function newDay() {
	date.setTime(date.getTime() + 86400000);
	showDate();
	if ((date.getDate() == 1) && (date.getMonth() == 0)) newYear();
	if (date.getDate() == 1) newMonth();
	if (date.getDay() == 0) payment();

	showThisMonthBudget();
	showThisYearBudget();
	if (availableParts < 100) clickFalse(document.getElementById("parts"));
}

function constructionProgress() {
	// if ((date.getDay() == 0) || (date.getDay() == 6)) return; // the workers don't work at the weekend - function disabled

	for (let i = 0; i < aircrafts.length; i++) {
		progresWork(i, productionForce / dayTick * aircrafts[i].workers);
	}

}

// 		1.1.2 Periodic ......................................................................................

function newMonth() {
	for (let x in budget.lastMonthExpenses) {
		budget.agoMonthExpenses[x] = budget.lastMonthExpenses[x];
	}
	for (let x in budget.lastMonthIncome) {
		budget.agoMonthIncome[x] = budget.lastMonthIncome[x];
	}
	for (let x in budget.thisMonthExpenses) {
		budget.lastMonthExpenses[x] = budget.thisMonthExpenses[x];
	}
	for (let x in budget.thisMonthIncome) {
		budget.lastMonthIncome[x] = budget.thisMonthIncome[x];
	}
	for (let x in budget.thisMonthIncome) {
		budget.thisMonthIncome[x] = 0;
	}
	for (let x in budget.thisMonthExpenses) {
		budget.thisMonthExpenses[x] = 0;
	}
	showLastMonthBudget();
	showAgoMonthBudget();
	payInstallment();
	payTax();
}

function newYear() {
	for (let x in yearBudget.lastYearExpenses) {
		yearBudget.agoYearExpenses[x] = yearBudget.lastYearExpenses[x];
	}
	for (let x in yearBudget.lastYearIncome) {
		yearBudget.agoYearIncome[x] = yearBudget.lastYearIncome[x];
	}
	for (let x in yearBudget.thisYearExpenses) {
		yearBudget.lastYearExpenses[x] = yearBudget.thisYearExpenses[x];
	}
	for (let x in yearBudget.thisYearIncome) {
		yearBudget.lastYearIncome[x] = yearBudget.thisYearIncome[x];
	}
	for (let x in yearBudget.thisYearIncome) {
		yearBudget.thisYearIncome[x] = 0;
	}
	for (let x in yearBudget.thisYearExpenses) {
		yearBudget.thisYearExpenses[x] = 0;
	}
	showLastYearBudget();
	showAgoYearBudget();
}

function payTax() {
	let sum = 0;
	for (let x in budget.lastMonthIncome) {
		sum += budget.lastMonthIncome[x];
	}
	let sum2 = 0;
	for (let x in budget.lastMonthExpenses) {
		sum2 += budget.lastMonthExpenses[x];
	}
	let result = sum - sum2;
	if (result > 0) {
		calculateExpenses(Math.floor(result * 0.2), "tax");
	}
}

function payment() {
	calculateExpenses(totalSalary(), "salary");
}

function payInstallment() {
	for (let x = 0; x < loans.length; x++) {
		if (loans[x].numberOfInstallments > 0) {
			loans[x].numberOfInstallments--;
			calculateExpenses(loans[x].installment, "interest");
			document.querySelector("#loan" + x + " > button + div").textContent = loans[x].numberOfInstallments;
			if (loans[x].numberOfInstallments <= 0) {
				document.getElementById("takeLoanBtn" + x).textContent = "take";
				document.getElementById("takeLoanBtn" + x).disabled = false;
			}
		}
	}
}

function progresWork(z, y) {
	if ((y / 100) <= availableParts) {
		aircrafts[z].productionStage += y / aircrafts[z].parts;
		availableParts -= y / 100;
		showAvailableParts();
		if (aircrafts[z].productionStage >= 100) {
			availableParts += (aircrafts[z].productionStage - 100) * aircrafts[z].parts / 100;
			aircrafts[z].productionStage = 0;
			aircrafts[z].quantity++;
			showQuantity(z);
		}
		showProductionStage(z);
	}
}


// 		1.1.3 Calculate ......................................................................................

function calculateIncome(cash, item) {
	dollars += cash;
	showDollars();
	budget.thisMonthIncome[item] += cash;
	yearBudget.thisYearIncome[item] += cash;
}

function calculateExpenses(cash, item) {
	dollars -= cash;
	showDollars();
	budget.thisMonthExpenses[item] += cash;
	yearBudget.thisYearExpenses[item] += cash;
}

function totalSalary() {
	let x = 0;
	for (let i = 0; i < employees.length; i++) {
		x += employees[i].salary * employees[i].number
	}
	return x;
}

// 		1.1.4 Action ......................................................................................

function sell(z) {
	if (aircrafts[z].quantity > 0) {
		aircrafts[z].quantity -= 1;
		calculateIncome(aircrafts[z].price, "sale");
		showQuantity(z);
		clickTrue(document.getElementById("quantity" + z));
		clickTrue(document.getElementById("price" + z));
		clickTrue(document.getElementById("dollars"));
	} else clickFalse(document.getElementById("quantity" + z));
}

function takeLoan(x) {
	calculateIncome(loans[x].amount, "other");
	loans[x].numberOfInstallments = loans[x].period * 12;
	document.querySelector("#loan" + x + " > button + div").textContent = loans[x].numberOfInstallments;
	document.getElementById("takeLoanBtn" + x).textContent = "-";
	document.getElementById("takeLoanBtn" + x).disabled = true;
	clickTrue(document.getElementById("loan" + x));
	clickTrue(document.getElementById("dollars"));
}



function addWorker(z) {
	if (availableWorkers > 0) {
		availableWorkers--;
		aircrafts[z].workers++;
		showAvailableWorkers();
		showWorkers(z);
		clickTrue(document.getElementById("workers" + z));
	} else {
		clickFalse(document.getElementById("workers"));
		clickFalse(document.getElementById("workers" + z));
	}
}

function removeWorker(z) {
	if (aircrafts[z].workers > 0) {
		availableWorkers++;
		aircrafts[z].workers--;
		showAvailableWorkers();
		showWorkers(z);
		clickTrue(document.getElementById("workers" + z));
	} else clickFalse(document.getElementById("workers" + z));
}


// 		1.1.5 Visual effects ......................................................................................

function clickFalse(element) {

	element.classList.add("click-false");
	setTimeout(function () {
		element.classList.remove("click-false");
	}, 500);
}

function clickTrue(element) {

	element.classList.add("click-true");
	setTimeout(function () {
		element.classList.remove("click-true");
	}, 500);
}

// 		1.1.6 Message ......................................................................................

function creatNewMessage(text, color) {
	const el = document.createElement("div");
	el.innerHTML = text;
	el.classList.add("alertsItem");
	if (color) el.style="color:" + color; 
	document.getElementById("alerts").prepend(el);
	removeDOM_ELEMENT(el, 10000);
}

// 		1.1.7 removeDOM_ELEMENT ......................................................................................
function disableElement(element) {
	element.classList.add("disabled");
	element.setAttribute("disabled", true);
}

function removeDOM_ELEMENT(element, ms) {
	setTimeout(function () {
		element.classList.add("vanish");
	}, ms - 5000);
	setTimeout(function () {
		element.remove();
	}, ms);

}

// 		1.1.8 Menu ......................................................................................

function menu(x) {
	closeMenu();
	document.getElementById(x).classList.remove("unactive");
	document.getElementById("closeMenu").classList.remove("unactive");
}

function closeMenu() {
	document.getElementById("popFunds").classList.add("unactive");
	document.getElementById("popEmployees").classList.add("unactive");
	document.getElementById("popParts").classList.add("unactive");
	document.getElementById("closeMenu").classList.add("unactive");
}

function financesMenu(x) {
	document.getElementById("financesMonths").classList.add("unactive");
	document.getElementById("financesYears").classList.add("unactive");
	document.getElementById("financesBank").classList.add("unactive");
	document.getElementById("financesAwards").classList.add("unactive");
	document.getElementById(x).classList.remove("unactive");
}


// 	1.2 Show on screen ......................................................................................

// 		1.2.1 Resources ......................................................................................

function showDollars() {
	document.getElementById("dollars").innerHTML = "$ " + dollars.toLocaleString(undefined, {
		maximumFractionDigits: 0
	});
}

function showAvailableParts() {
	document.getElementById("parts").innerHTML = availableParts.toLocaleString(undefined, {
		maximumFractionDigits: 0
	});
}

function showAvailableWorkers() {
	document.getElementById("workers").innerHTML = availableWorkers;
}

// 		1.2.2 Date ......................................................................................

function showDate() {
	let MM = date.getMonth() + 1;
	if (MM < 10) MM = "0" + MM;
	let DD = date.getDate();
	if (DD < 10) DD = "0" + DD;
	document.getElementById("date").textContent = date.getFullYear() + "-" + MM + "-" + DD;
}

// 		1.2.3 Aircrafts ......................................................................................
function showProductionStage(z) {
	document.getElementById("myBar" + z).style = "width:" + aircrafts[z].productionStage.toString() + "%";
}

function showQuantity(z) {
	document.getElementById("quantity" + z).innerHTML = aircrafts[z].quantity;
}

function showWorkers(z) {
	document.getElementById("workers" + z).innerHTML = aircrafts[z].workers;
}

function showPrice(z) {
	document.getElementById("price" + z).innerHTML = "$ " + aircrafts[z].price.toLocaleString();
}

// 		1.2.4 Funds ......................................................................................

function showLoans() {
	for (let i = 0; i < loans.length; i++) {
		let cell = document.querySelectorAll("#loan" + i + " > *");
		cell[1].textContent = "$ " + loans[i].amount;
		cell[2].textContent = loans[i].interest + "%";
		cell[3].textContent = loans[i].period + "y";
		cell[5].textContent = loans[i].numberOfInstallments;
	}
}

// 		1.2.5 Employees ......................................................................................
function showEmployeesNumber(z) {
	document.getElementById("employee" + z).textContent = employees[z].number + " / " + employees[z].maxNumber;
}

function showEmployeesSalary(z) {
	document.getElementById("salary" + z).textContent = "$ " + employees[z].salary;
	document.getElementById("totalSalary" + z).textContent = "$ " + employees[z].salary * employees[z].number;
	document.getElementById("salarySummary__value").textContent = "$ " + totalSalary();
}


//	2. Event Listeners ......................................................................................

// 		2.1 Main container ......................................................................................

//  		2.1.1 Aircrafts ......................................................................................

for (let i = 0; i < aircrafts.length; i++) {
	document.getElementById("sell" + i).addEventListener("click", function () {
		sell(i);
	});
	document.getElementById("addWorker" + i).addEventListener("click", function () {
		addWorker(i);
	});
	document.getElementById("removeWorker" + i).addEventListener("click", function () {
		removeWorker(i);
	});
	/*	CLICK to BUILD AIRCRAFTS (without workers) - function disabled
	document.getElementById("aircraft" + i).addEventListener("click", function () {
		progresWork(i, productionForce)
	});*/
}

//  		2.1.2 Menu - open pop-up cards ......................................................................................

document.getElementById("fundsCard").addEventListener("click", function () {
	menu("popFunds");
});
document.getElementById("workersCard").addEventListener("click", function () {
	menu("popEmployees");
});
document.getElementById("partsCard").addEventListener("click", function () {
	menu("popParts");
});

// 		2.2 Pop-up cards ......................................................................................

document.getElementById("closeMenu").addEventListener("click", function () {
	closeMenu();
});

//  		2.2.1 Funds ......................................................................................

document.getElementById("financesMonthsBtn").addEventListener("click", function () {
	financesMenu("financesMonths");
});
document.getElementById("financesYearsBtn").addEventListener("click", function () {
	financesMenu("financesYears");
});
document.getElementById("financesBankBtn").addEventListener("click", function () {
	financesMenu("financesBank");
});
document.getElementById("financesAwardsBtn").addEventListener("click", function () {
	financesMenu("financesAwards");
});

for (let i = 0; i < loans.length; i++) {
	document.getElementById("takeLoanBtn" + i).addEventListener("click", function () {
		takeLoan(i);
	})
}

//	3. Start the game ......................................................................................



document.addEventListener("DOMContentLoaded", function() {
	setInterval(constructionProgress, 10);
	setInterval(newDay, dayTick);
	showDollars();
	showAvailableWorkers();
	showAvailableParts();
	showDate();
	showThisMonthBudget();
	showLastMonthBudget();
	showAgoMonthBudget();
	showThisYearBudget();
	showLastYearBudget();
	showAgoYearBudget();
	showLoans();

});