


// 		1.1.2 Periodic ......................................................................................



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




//	3. Start the game ......................................................................................


showCash();
showAvailableParts();
showAvailableWorkers();
showDate();
showWorkersCard();


document.addEventListener("DOMContentLoaded", function() {

	setInterval(constructionProgress, 10);
	setInterval(newDay, dayTick);
});