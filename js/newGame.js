createInitialElements();
showCash();
showAvailableParts();
showAvailableWorkers();
showDate();
showWorkersCard();
saveMonth();
saveMonth();
saveYear();
saveYear();
showMonthlyFinancialReport();
showAnnualFinancialReport();
for (const employee of employeeList){
	showEmployeesNumber(employee)
	showEmployeesSalary(employee)
}


document.addEventListener("DOMContentLoaded", function() {

	setInterval(constructionProgress, 10);
	setInterval(newDay, dayTick);
});