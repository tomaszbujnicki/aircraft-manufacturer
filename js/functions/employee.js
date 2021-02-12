import { calculateExpenses } from './incomeAndExpanses';
import { showEmployeesNumber, showEmployeesSalary } from './show';

export function addEmployee(employee) {
  employee.number++;
  calculateExpenses(employee.employmentCost, 'recruitment');
  showEmployeesNumber(employee);
  showEmployeesSalary(employee);
}

export function removeEmployee(employee) {
  employee.number--;
  showEmployeesNumber(employee);
  showEmployeesSalary(employee);
}
