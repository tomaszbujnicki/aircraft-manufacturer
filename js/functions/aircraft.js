function sell(aircraft) {
	if (aircraft.quantity > 0) {
		aircraft.quantity -= 1;
		calculateIncome(aircraft.price, "sale");
		dropAircraftPrice(aircraft);
		showQuantity(aircraft);
		clickTrue(document.getElementById("quantity" + aircraft.id));
		clickTrue(document.getElementById("price" + aircraft.id));
		clickTrue(document.getElementById("cash"));
	} else clickFalse(document.getElementById("quantity" + aircraft.id));
}


function addWorker(aircraft) {
	if (calculateAvailableWorkers()) {
		aircraft.workers++;
		showAvailableWorkers();
		showWorkers(aircraft);
		clickTrue(document.getElementById("workers" + aircraft.id));
	} else {
		clickFalse(document.getElementById("workers"));
		clickFalse(document.getElementById("workers" + aircraft.id));
	}
}

function removeWorker(aircraft) {
	if (aircraft.workers > 0) {
		aircraft.workers--;
		showAvailableWorkers();
		showWorkers(aircraft);
		clickTrue(document.getElementById("workers" + aircraft.id));
	} else clickFalse(document.getElementById("workers" + aircraft.id));
}

function dropAircraftPrice(aircraft){
	aircraft.price -= aircraft.corePrice * 0.01;
	document.getElementById(`price${aircraft.id}`).textContent = "$ " + aircraft.price.toLocaleString()
}

function raiseAircraftPrice(){

	for (let i = 0; i < employeeList[3].number; i++){
		let aircraft =  aircraftList[getRndInteger(0, aircraftList.length-1)];
		aircraft.price += aircraft.corePrice * 0.001;
		if (aircraft.price > aircraft.corePrice) aircraft.price = aircraft.corePrice;
		document.getElementById(`price${aircraft.id}`).textContent = "$ " + aircraft.price.toLocaleString()   
	}

}

function inventAircraft(){

		if (newDesignList.length == 0) return ;

		let aircraft =  newDesignList[0];
		aircraft.inventionPoints -= employeeList[4].number;
		if (aircraft.inventionPoints <= 0 ){
			creatNewMessage(`Our  engineers invented: ${aircraft.name}` , "#ff0000");
			aircraftList.push(aircraft);
			newDesignList.shift(aircraft);
			createElementAircraft(aircraft);
		}
 
}