import { calculateExpenses } from './incomeAndExpanses';
import { showEmployeesNumber, showEmployeesSalary } from './show';
import { clickTrue } from './visual';

function addEmployee(employee) {
  employee.number++;
  calculateExpenses(employee.employmentCost, 'recruitment');
  showEmployeesNumber(employee);
  showEmployeesSalary(employee);
  clickTrue(document.getElementById('employee' + employee.id));
}

function removeEmployee(employee) {
  employee.number--;
  showEmployeesNumber(employee);
  showEmployeesSalary(employee);
  clickTrue(document.getElementById('employee' + employee.id));
}
