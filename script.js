
function newDay() {
	date.setTime(date.getTime() + 86400000);
	showDate();
	if (date.getDate() == 1) newMonth();
	if (date.getDay() == 0) payment();

	showDeliveryStage();
	raiseAircraftPrice();
	inventAircraft();
	showActualBudget();
	createNewStockMaybe();
	

	if (availableParts < 100) clickFalse(document.getElementById("parts"));
}

function constructionProgress() {

	for (let i = 0; i < aircraftArray.length; i++) {
		progresWork(i, productionForce() / dayTick * aircraftArray[i].workers);
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
		aircraftArray[z].productionStage += y / aircraftArray[z].parts;
		availableParts -= y / 100;
		showAvailableParts();
		if (aircraftArray[z].productionStage >= 100) {
			availableParts += (aircraftArray[z].productionStage - 100) * aircraftArray[z].parts / 100;
			aircraftArray[z].productionStage = 0;
			aircraftArray[z].quantity++;
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
	for (let i = 0; i < employeeList.length; i++) {
		x += employeeList[i].salary * employeeList[i].number
	}
	return x;
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
	el.addEventListener("click", ()=>{
		el.style="display:none";
	})
	
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

// 		1.2.3 Aircraft ......................................................................................
function showProductionStage(z) {
	document.getElementById("myBar" + z).style = "width:" + aircraftArray[z].productionStage.toString() + "%";
}

function showQuantity(z) {
	document.getElementById("quantity" + z).innerHTML = aircraftArray[z].quantity;
}

function showWorkers(z) {
	document.getElementById("workers" + z).innerHTML = aircraftArray[z].workers;
}

function showPrice(z) {
	document.getElementById("price" + z).innerHTML = "$ " + aircraftArray[z].price.toLocaleString();
}

// 		1.2.5 Employees ......................................................................................
function showEmployeesNumber(z) {
	document.getElementById("employee" + z).textContent = employeeList[z].number + " / " + employeeList[z].maxNumber;
}

function showEmployeesSalary(z) {
	document.getElementById("salary" + z).textContent = "$ " + employeeList[z].salary;
	document.getElementById("totalSalary" + z).textContent = "$ " + (employeeList[z].salary * employeeList[z].number).toLocaleString();
	document.getElementById("salarySummary__value").textContent = "$ " + totalSalary().toLocaleString();
}



//	3. Start the game ......................................................................................



document.addEventListener("DOMContentLoaded", function() {

	setInterval(constructionProgress, 10);
	setInterval(newDay, dayTick);
	showCash();
	showAvailableParts();
	showAvailableWorkers();
	showDate();
	showWorkersCard();
	showEmployeesSalary(0);
});