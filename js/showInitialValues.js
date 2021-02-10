import {
  showAnnualFinancialReport,
  showAvailableParts,
  showAvailableWorkers,
  showCash,
  showDate,
  showEmployeesNumber,
  showEmployeesSalary,
  showMonthlyFinancialReport,
  showWorkersCard,
} from './functions/show';
import { employeeList } from './list/employeeList';

export function showInitialValues() {
  showCash();
  showAvailableParts();
  showAvailableWorkers();
  showDate();
  showWorkersCard();
  showMonthlyFinancialReport();
  showAnnualFinancialReport();
  for (const employee of employeeList) {
    showEmployeesNumber(employee);
    showEmployeesSalary(employee);
  }
}
