import { createElementAircraft } from '../view/addContent/createAircraftElement';
import { aircraftList } from '../list/aircraftList';
import { employeeList } from '../list/employeeList';
import { calculateAvailableWorkers, getRndInteger } from './calculations';
import { showAvailableWorkers, showQuantity, showWorkers } from './show';

const traders = employeeList[3];
const engineers = employeeList[4];

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
