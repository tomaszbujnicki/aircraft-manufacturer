import { createElementAircraft } from '../create/createElementAircraft';
import { aircraftList } from '../list/aircraftList';
import { employeeList } from '../list/employeeList';
import { calculateAvailableWorkers, getRndInteger } from './calculations';
import { calculateIncome } from './incomeAndExpanses';
import { showAvailableWorkers, showQuantity, showWorkers } from './show';

const traders = employeeList[3];
const engineers = employeeList[4];

export function sell(aircraft) {
  if (aircraft.quantity > 0) {
    aircraft.quantity -= 1;
    calculateIncome(aircraft.price, 'sale');
    dropAircraftPrice(aircraft);
    showQuantity(aircraft);
  }
}

export function addWorker(aircraft) {
  if (calculateAvailableWorkers()) {
    aircraft.workers++;
    showAvailableWorkers();
    showWorkers(aircraft);
  }
}

export function removeWorker(aircraft) {
  if (aircraft.workers > 0) {
    aircraft.workers--;
    showAvailableWorkers();
    showWorkers(aircraft);
  }
}

export function dropAircraftPrice(aircraft) {
  aircraft.price -= aircraft.corePrice * 0.01;
  document.getElementById(`price${aircraft.id}`).textContent =
    '$ ' + aircraft.price.toLocaleString();
}

export function raiseAircraftPrice() {
  const lastAircraft = aircraftList.find(
    (aircraft) => aircraft.inventionPoints > 0
  );
  const length = lastAircraft ? lastAircraft.id : aircraftList.length;

  for (let i = 0; i < traders.number; i++) {
    const aircraft = aircraftList[getRndInteger(0, length - 1)];
    aircraft.price += aircraft.corePrice * 0.001;
    if (aircraft.price > aircraft.corePrice)
      aircraft.price = aircraft.corePrice;
    document.getElementById(`price${aircraft.id}`).textContent =
      '$ ' + aircraft.price.toLocaleString();
  }
}

export function inventAircraft() {
  const aircraft = aircraftList.find(
    (aircraft) => aircraft.inventionPoints > 0
  );
  if (aircraft) {
    aircraft.inventionPoints -= engineers.number;
    if (aircraft.inventionPoints <= 0) {
      addNewAircraft(aircraft);
    }
  }
}

function addNewAircraft(aircraft) {
  document.getElementById('newDesignItem' + aircraft.id).remove();
  createElementAircraft(aircraft);
}
