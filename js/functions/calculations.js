function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChange(value, percent) {
	const change = getRndInteger(-percent,percent);
	return Math.round(value * (1 + change / 100));
}

const productionForce = () => {
    let force = PRODUCTION_FORCE;
    const workers = employeeList[0].number;
    const foremen =  employeeList[1].number;
    const withoutSupervision = workers - (foremen * 4);
    
    if (withoutSupervision > 0){
        const workerForce = force / workers;
        force -=  withoutSupervision * workerForce / 2;
    }
    return force
}

function totalSalary() {
	let x = 0;
	for (let i = 0; i < employeeList.length; i++) {
		x += employeeList[i].salary * employeeList[i].number
	}
	return x;
}

function calculateAvailableWorkers() {
	let busyWorkers = 0;
	for (let aircraft of aircraftList) {
		busyWorkers += aircraft.workers;
	}
	const availableWorkers = employeeList[0].number - busyWorkers;
	return availableWorkers;
}