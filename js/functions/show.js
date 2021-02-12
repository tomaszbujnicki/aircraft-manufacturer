import { game } from '../game';
import { employeeList } from '../list/employeeList';
import { calculateProfit, months, thisMonth, thisYear, years } from './budget';
import {
  calculateAvailableWorkers,
  productionForce,
  totalSalary,
} from './calculations';
import truck from '../../img/parts/truck.svg';
import truck2 from '../../img/parts/truck2.svg';

const cashElement = document.getElementById('cash');
const partsElement = document.getElementById('parts');
const dateElement = document.getElementById('date');
const workersElement = document.getElementById('workers');
const descriptionWorkersNumberElement = document.getElementById(
  'descriptionWorkersNumber'
);
const descriptionWorkersMountElement = document.getElementById(
  'descriptionWorkersMount'
);
const descriptionWorkersCapacityElement = document.getElementById(
  'edescriptionWorkersCapacity'
);

export function showCash() {
  cashElement.textContent =
    '$ ' +
    game.cash.toLocaleString(undefined, {
      maximumFractionDigits: 0,
    });
}

export function showAvailableParts() {
  partsElement.textContent = game.availableParts.toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });
}

export function showDate() {
  let MM = game.date.getMonth() + 1;
  if (MM < 10) MM = '0' + MM;
  let DD = game.date.getDate();
  if (DD < 10) DD = '0' + DD;
  dateElement.textContent = game.date.getFullYear() + '-' + MM + '-' + DD;
}

export function showProductionStage(aircraft) {
  document.getElementById('myBar' + aircraft.id).style =
    'width:' + aircraft.productionStage.toString() + '%';
}

export function showQuantity(aircraft) {
  document.getElementById('quantity' + aircraft.id).textContent =
    aircraft.quantity;
}

export function showWorkers(aircraft) {
  document.getElementById('workers' + aircraft.id).textContent =
    aircraft.workers;
}

export function showPrice(aircraft) {
  document.getElementById('price' + aircraft.id).textContent =
    '$ ' + aircraft.price.toLocaleString();
}

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

export function showAvailableWorkers() {
  workersElement.textContent = calculateAvailableWorkers();
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

export function showDeliveryStage() {
  const changeImg = (id) => {
    document.getElementById('deliveryShipping' + id).src = truck;
  };
  const changeImg2 = (id) => {
    document.getElementById('deliveryShipping' + id).src = truck2;
  };
  for (const index in game.deliveryArray) {
    const delivery = game.deliveryArray[index];
    delivery.daysToGo--;
    let imgPosition = 95 - delivery.daysToGo;
    if (imgPosition < -5) imgPosition = -5;
    if (imgPosition > 75) changeImg(delivery.id);
    if (imgPosition == 95) changeImg2(delivery.id);
    document.getElementById('deliveryShipping' + delivery.id).style =
      'left:' + imgPosition + '%';
    document.getElementById('deliveryTimeToGo' + delivery.id).textContent =
      delivery.daysToGo + ' days to go';
  }
}
