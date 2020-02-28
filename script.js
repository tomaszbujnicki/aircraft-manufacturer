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
			1.2.3 Airplanes
			1.2.4 Funds
			1.2.5 Employees
			1.2.6 Parts
	2. Event Listeners
		2.1 Main container
			2.1.1 Airplanes
			2.1.2 Menu (resources) - open pop-up cards
		2.2 Pop-up cards
			2.2.1 Funds
			2.2.2 Employees
			2.2.3 Parts & Delivery
	3. Start the game
	



*/

// 	1.1 Engine ......................................................................................

// 		1.1.1 Ticker ......................................................................................

function newDay() {
	date.setTime(date.getTime() + 86400000);
	showDate();
	if (date.getDate() == 1) newMonth();
	if ((date.getDate() == 1) && (date.getMonth() == 0)) newYear();
	if (date.getDay() == 0) payment();

	showThisMonthBudget();
	showThisYearBudget();
	if (availableParts < 100) clickFalse(document.getElementById("parts"));
}

function constructionProgress() {
	// if ((date.getDay() == 0) || (date.getDay() == 6)) return; // the workers don't work at the weekend - function disabled

	for (let i = 0; i < airplanes.length; i++) {
		progresWork(i, productionForce / dayTick * airplanes[i].workers);
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
		airplanes[z].productionStage += y / airplanes[z].parts;
		availableParts -= y / 100;
		showAvailableParts();
		if (airplanes[z].productionStage >= 100) {
			availableParts += (airplanes[z].productionStage - 100) * airplanes[z].parts / 100;
			airplanes[z].productionStage = 0;
			airplanes[z].quantity++;
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
	if (airplanes[z].quantity > 0) {
		airplanes[z].quantity -= 1;
		calculateIncome(airplanes[z].price, "sale");
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

function addEmployee(z) {
	if (dollars >= employees[z].employmentCost) {
		if (employees[z].maxNumber > employees[z].number) {
			employees[z].number++;
			calculateExpenses(employees[z].employmentCost, "recruitment");
			showEmployeesNumber(z);
			showEmployeesSalary(z);
			if (z == 0) {
				availableWorkers++;
				showAvailableWorkers();
			}
			clickTrue(document.getElementById("employee" + z));
		} else clickFalse(document.getElementById("employee" + z));
	} else {
		clickFalse(document.getElementById("dollars"));
		clickFalse(document.getElementById("employee" + z));
	}

}

function removeEmployee(z) {
	if ((z == 0) && (availableWorkers <= 0)) {
		clickFalse(document.getElementById("employee" + z));
		clickFalse(document.getElementById("workers"));
		return;
	}


	if (0 < employees[z].number) {
		employees[z].number--;
		showEmployeesNumber(z);
		showEmployeesSalary(z);
		if (z == 0) {
			availableWorkers--;
			showAvailableWorkers();
		}

		clickTrue(document.getElementById("employee" + z));
	} else {
		clickFalse(document.getElementById("employee" + z));
	}

}

function addWorker(z) {
	if (availableWorkers > 0) {
		availableWorkers--;
		airplanes[z].workers++;
		showAvailableWorkers();
		showWorkers(z);
		clickTrue(document.getElementById("workers" + z));
	} else {
		clickFalse(document.getElementById("workers"));
		clickFalse(document.getElementById("workers" + z));
	}
}

function removeWorker(z) {
	if (airplanes[z].workers > 0) {
		availableWorkers++;
		airplanes[z].workers--;
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

// 		1.2.3 Airplanes ......................................................................................

function showAirplaneAll() {
	for (let i = 0; i < airplanes.length; i++) {
		showAirplaneItem(i);
	}
}

function showAirplaneItem(i) {
	showAirplaneName(i);
	showProductionStage(i);
	showQuantity(i);
	showWorkers(i);
	showPrice(i);
	showAirplaneImg(i);
}

function showAirplaneName(z) {
	document.getElementById("airplaneName" + z).textContent = airplanes[z].name;
}

function showAirplaneImg(z) {
	document.getElementById("airplaneImg" + z).src = airplanes[z].img;
}

function showProductionStage(z) {
	document.getElementById("myBar" + z).style = "width:" + airplanes[z].productionStage.toString() + "%";
}

function showQuantity(z) {
	document.getElementById("quantity" + z).innerHTML = airplanes[z].quantity;
}

function showWorkers(z) {
	document.getElementById("workers" + z).innerHTML = airplanes[z].workers;
}

function showPrice(z) {
	document.getElementById("price" + z).innerHTML = "$ " + airplanes[z].price.toLocaleString();
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

function showEmployeesAll() {
	for (let i = 0; i < employees.length; i++) {
		showEmployeeItem(i);
	}
}

function showEmployeeItem(i) {
	showEmployeesSalary(i);
	showEmployeesNumber(i);
	document.getElementById("addEmployee" + i).title = "hire cost: $" + employees[i].employmentCost;
	document.getElementById("employeeImg" + i).src = employees[i].img;
	document.getElementById("employeeName" + i).textContent = employees[i].name;
	document.getElementById("employeeName" + i).title = employees[i].description;
}


function showEmployeesNumber(z) {
	document.getElementById("employee" + z).textContent = employees[z].number + " / " + employees[z].maxNumber;
}

function showEmployeesSalary(z) {
	document.getElementById("salary" + z).textContent = "$ " + employees[z].salary;
	document.getElementById("totalSalary" + z).textContent = "$ " + employees[z].salary * employees[z].number;
	document.getElementById("salarySummary__value").textContent = "$ " + totalSalary();
}


// 		1.2.6 Parts ......................................................................................

/*function showPartsAll() {
	for (let i = 0; i < parts.length; i++) {
		showPartsItem(i);
	}
}*/




function showPartsItem(x) {

	document.getElementById("parts-flag" + x).src = parts[x].flag;
	document.getElementById("parts-company" + x).textContent = parts[x].company;
	document.getElementById("parts-time" + x).textContent = parts[x].time;
	document.getElementById("parts-risk" + x).textContent = parts[x].risk;
	document.getElementById("parts-stock" + x).textContent = parts[x].stock;
	document.getElementById("parts-price" + x).textContent = "$ " + parts[x].price;
	document.getElementById("parts-totalPrice" + x).textContent = "$ " + (parts[x].price * parts[x].stock).toLocaleString();

}



//	2. Event Listeners ......................................................................................

// 		2.1 Main container ......................................................................................

//  		2.1.1 Airplanes ......................................................................................

for (let i = 0; i < airplanes.length; i++) {
	document.getElementById("sell" + i).addEventListener("click", function () {
		sell(i);
	});
	document.getElementById("addWorker" + i).addEventListener("click", function () {
		addWorker(i);
	});
	document.getElementById("removeWorker" + i).addEventListener("click", function () {
		removeWorker(i);
	});
	/*	CLICK to BUILD AIRPLANES (without workers) - function disabled
	document.getElementById("airplane" + i).addEventListener("click", function () {
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
//  		2.2.2 Employees ......................................................................................

for (let i = 0; i < employees.length; i++) {
	document.getElementById("addEmployee" + i).addEventListener("click", function () {
		addEmployee(i);
	});
	document.getElementById("removeEmployee" + i).addEventListener("click", function () {
		removeEmployee(i);
	});
}


//	3. Start the game ......................................................................................


document.body.onload = function () {
	setInterval(constructionProgress, 10);
	setInterval(newDay, dayTick);
	showDollars();
	showAvailableWorkers();
	showAvailableParts();
	showEmployeesAll();
	showAirplaneAll();
	showDate();
	showThisMonthBudget();
	showLastMonthBudget();
	showAgoMonthBudget();
	showThisYearBudget();
	showLastYearBudget();
	showAgoYearBudget();
	showLoans();

}
