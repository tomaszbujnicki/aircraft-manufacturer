for (const employee of employeeList){

    const buttonAdd = document.getElementById("addEmployee" + employee.id);
	buttonAdd.addEventListener("click", () => employee.hire())
	
	const buttonRemove = document.getElementById("removeEmployee" + employee.id);
    buttonRemove.addEventListener("click", () => employee.fire())
}




function addEmployee(employee) {
	employee.number++;
	calculateExpenses(employee.employmentCost, "recruitment");
	showEmployeesNumber(employee);
	showEmployeesSalary(employee);
	clickTrue(document.getElementById("employee" + employee.id));
}

function removeEmployee(employee) {
		employee.number--;
		showEmployeesNumber(employee);
		showEmployeesSalary(employee);
		clickTrue(document.getElementById("employee" + employee.id));
}