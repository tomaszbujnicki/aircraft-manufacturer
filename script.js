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
	if (date.getDate() == 1) newMonth();
	if (date.getDay() == 0) payment();

	showActualBudget();
	createNewStockMaybe();
	

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
	payTax();
	saveMonth();
	showMonthlyFinancialReport();
	if (date.getMonth() == 0) newYear();
}

function newYear() {
	saveYear();
	showAnnualFinancialReport();
}

function payTax() {
	const taxRate = 0.2;
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
		clickTrue(document.getElementById("cash"));
	} else clickFalse(document.getElementById("quantity" + z));
}


function addWorker(z) {
	if (calculateAvailableWorkers()) {
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
	setTimeout(function () {
		removeDOM_ELEMENT(el);
	}, 5000);
	
}

// 		1.1.7 removeDOM_ELEMENT ......................................................................................
function disableElement(element) {
	element.classList.add("disabled");
	element.setAttribute("disabled", true);
}

function removeDOM_ELEMENT(element) {
	setTimeout(function () {
		element.classList.add("vanish");
	}, 1000);
	setTimeout(function () {
		element.classList.add("softRemove");
	}, 6000);
	setTimeout(function () {
		element.remove();
	}, 9000);

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

function showCash() {
	document.getElementById("cash").innerHTML = "$ " + cash.toLocaleString(undefined, {
		maximumFractionDigits: 0
	});
}

function showAvailableParts() {
	document.getElementById("parts").innerHTML = availableParts.toLocaleString(undefined, {
		maximumFractionDigits: 0
	});
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

// 		1.2.5 Employees ......................................................................................
function showEmployeesNumber(z) {
	document.getElementById("employee" + z).textContent = employees[z].number + " / " + employees[z].maxNumber;
}

function showEmployeesSalary(z) {
	document.getElementById("salary" + z).textContent = "$ " + employees[z].salary;
	document.getElementById("totalSalary" + z).textContent = "$ " + (employees[z].salary * employees[z].number).toLocaleString();
	document.getElementById("salarySummary__value").textContent = "$ " + totalSalary().toLocaleString();
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


//	3. Start the game ......................................................................................



document.addEventListener("DOMContentLoaded", function() {
	setInterval(constructionProgress, 10);
	setInterval(newDay, dayTick);
	showCash();
	showAvailableParts();
	showAvailableWorkers();
	showDate();
});