function createInitialElements(){

    for (const aircraft of aircraftList) createElementAircraft(aircraft);

    for (const aircraft of newDesignList) createElementNewDesign(aircraft);

    for (const loan of loanList) createElementLoan(loan);

    for (const employee of employeeList){

        const buttonAdd = document.getElementById("addEmployee" + employee.id);
        buttonAdd.addEventListener("click", () => employee.hire())
        
        const buttonRemove = document.getElementById("removeEmployee" + employee.id);
        buttonRemove.addEventListener("click", () => employee.fire())
    }

    for (let i = 0; i < 10; i++){ createNewStock();}

}

