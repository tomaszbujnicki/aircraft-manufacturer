//import { data } from '../data/generateInitialData';
/* import { employeeList } from '../list/employeeList';
import { calculateProfit, months, thisMonth, thisYear, years } from './budget';
import {
  calculateAvailableWorkers,
  productionForce,
  totalSalary,
} from './calculations';

const descriptionWorkersNumberElement = document.getElementById(
  'descriptionWorkersNumber'
);
const descriptionWorkersMountElement = document.getElementById(
  'descriptionWorkersMount'
);
const descriptionWorkersCapacityElement = document.getElementById(
  'edescriptionWorkersCapacity'
);


export function showEmployeesNumber(employee) {
  document.getElementById('employee' + employee.id).textContent =
    employee.number + ' / ' + employee.maxNumber;
}

export function showEmployeesSalary(employee) {
  document.getElementById('salary' + employee.id).textContent =
    '$ ' + employee.salary;
  document.getElementById('totalSalary' + employee.id).textContent =
    '$ ' + (employee.salary * employee.number).toLocaleString();
  document.getElementById('salarySummary__value').textContent =
    '$ ' + totalSalary().toLocaleString();
}

export function showWorkersCard() {
  const workers = employeeList[0];
  const canMount = productionForce() / 1000;
  const partsOrPart = canMount == 1 ? ' part' : ' parts';
  descriptionWorkersNumberElement.textContent = workers.number;
  descriptionWorkersMountElement.textContent =
    canMount.toFixed(2) + partsOrPart;
  descriptionWorkersCapacityElement.textContent = (
    canMount * workers.number
  ).toFixed(2);
}

export function showActualBudget() {
  calculateProfit(thisMonth);
  showBudget(thisMonth, 0);
  calculateProfit(thisYear);
  showBudget(thisYear, 0);
}
export function showMonthlyFinancialReport() {
  showBudget(months[months.length - 1], 1);
  showBudget(months[months.length - 2], 2);
}
export function showAnnualFinancialReport() {
  showBudget(years[years.length - 1], 1);
  showBudget(years[years.length - 2], 2);
}

export function showBudget(item, columnNumber) {
  for (const key in item) {
    if (key === 'period') continue;
    const id =
      item.period + key.charAt(0).toUpperCase() + key.slice(1) + columnNumber;
    const element = document.getElementById(id);
    element.textContent = item[key].toLocaleString();
  }
  const id = item.period + 'Profit' + columnNumber;
  const element = document.getElementById(id);
  item.profit < 0
    ? element.classList.add('budget__cell--minus')
    : element.classList.remove('budget__cell--minus');
  item.profit > 0
    ? element.classList.add('budget__cell--plus')
    : element.classList.remove('budget__cell--plus');
}
 */
