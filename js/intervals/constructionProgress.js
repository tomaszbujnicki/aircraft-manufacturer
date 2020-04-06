function constructionProgress() {
	for (const aircraft of aircraftArray) {
		progresWork(aircraft);
	}
}

function progresWork(aircraft) {
    
    let progress = productionForce() / dayTick * aircraft.workers;
	if ((progress / 100) <= availableParts) {
		aircraft.productionStage += progress / aircraft.parts;
		availableParts -= progress / 100;
		showAvailableParts();
		if (aircraft.productionStage >= 100) {
			availableParts += (aircraft.productionStage - 100) * aircraft.parts / 100;
			aircraft.productionStage = 0;
			aircraft.quantity++;
			showQuantity(aircraft);
		}
		showProductionStage(aircraft);
	}
}