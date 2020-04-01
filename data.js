let dayTick = 500;
let taxRate = 0.2;
let cash = 500000;
let availableParts = 110;
let date = new Date(1955, 10, 12);
const productionForceCoreValue = 1000;
const productionForce = ()=> {
    let force = productionForceCoreValue;
    const workers = employeeList[0].number;
    const foremen =  employeeList[1].number;
    const withoutSupervision = workers - (foremen * 4);
    
    if (withoutSupervision > 0){
        const workerForce = force / workers;
        force -=  withoutSupervision * workerForce / 2;
    }
    return force
};