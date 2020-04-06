
const cashElement = document.getElementById("cash")
const partsElement = document.getElementById("parts")
const dateElement = document.getElementById("date")
const workersElement = document.getElementById("workers")
const descriptionWorkersNumberElement = document.getElementById("descriptionWorkersNumber")
const descriptionWorkersMountElement = document.getElementById("descriptionWorkersMount")
const descriptionWorkersCapacityElement = document.getElementById("edescriptionWorkersCapacity")

function showCash() {
	cashElement.textContent = "$ " + cash.toLocaleString(undefined, {
		maximumFractionDigits: 0	});
}

function showAvailableParts() {
	partsElement.textContent = availableParts.toLocaleString(undefined, {
		maximumFractionDigits: 0	});
}



function showDate() {
	let MM = date.getMonth() + 1;
	if (MM < 10) MM = "0" + MM;
	let DD = date.getDate();
	if (DD < 10) DD = "0" + DD;
	dateElement.textContent = date.getFullYear() + "-" + MM + "-" + DD;
}


function showProductionStage(aircraft) {
	document.getElementById("myBar" + aircraft.id).style = "width:" + aircraft.productionStage.toString() + "%";
}

function showQuantity(aircraft) {
	document.getElementById("quantity" + aircraft.id).textContent = aircraft.quantity;
}

function showWorkers(z) {
	document.getElementById("workers" + z).textContent = aircraftArray[z].workers;
}

function showPrice(z) {
	document.getElementById("price" + z).textContent = "$ " + aircraftArray[z].price.toLocaleString();
}


function showEmployeesNumber(z) {
	document.getElementById("employee" + z).textContent = employeeList[z].number + " / " + employeeList[z].maxNumber;
}

function showEmployeesSalary(z) {
	document.getElementById("salary" + z).textContent = "$ " + employeeList[z].salary;
	document.getElementById("totalSalary" + z).textContent = "$ " + (employeeList[z].salary * employeeList[z].number).toLocaleString();
	document.getElementById("salarySummary__value").textContent = "$ " + totalSalary().toLocaleString();
}

function showAvailableWorkers() {
	workersElement.textContent = calculateAvailableWorkers();
}

function showWorkersCard() {
	const workers = employeeList[0];
	const canMount = productionForce() / 1000;
	const partsOrPart = canMount == 1 ? " part" : " parts";
	descriptionWorkersNumberElement.textContent = workers.number;
	descriptionWorkersMountElement.textContent = canMount.toFixed(2) + partsOrPart;
	descriptionWorkersCapacityElement.textContent = (canMount * workers.number).toFixed(2);
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

function showDeliveryStage() {
	const changeImg = (id) => {
		document.getElementById("deliveryShipping" + id).src = "img/parts/truck.svg";
	}
	const changeImg2 = (id) => {
		document.getElementById("deliveryShipping" + id).src = "img/parts/truck2.svg";
	}
	for (const delivery of deliveryArray){
		console.log(delivery);
		delivery.daysToGo--;
		let imgPosition = 95 - delivery.daysToGo;
		if (imgPosition < -5) imgPosition = -5;
		if (imgPosition > 75) changeImg(delivery.id);
		if (imgPosition == 95) changeImg2(delivery.id);
		document.getElementById("deliveryShipping" + delivery.id).style = "left:" + imgPosition + "%";
		document.getElementById("deliveryTimeToGo" + delivery.id).textContent = delivery.daysToGo + " days to go";
	}

}