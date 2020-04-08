
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