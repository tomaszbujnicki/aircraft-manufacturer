function createElements(){

    for (const aircraft of aircraftArray) createElementAircraft(aircraft);

    for (const employee of employeeList) createElementEmployee(employee);

    for (const aircraft of aircraftToInvent) createElementAircraftToInvent(aircraft);

    for (const loan of loanList) createElementLoan(loan);



    for (let i = 0; i < 10; i++){ createNewStock();}

}

createElements();