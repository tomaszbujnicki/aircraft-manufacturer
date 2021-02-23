import { Event } from '../Event';

export class Manufacture {
  constructor(aircrafts, employees, cash, parts, unassignedWorkers) {
    this.aircrafts = aircrafts;
    this.employees = employees;
    this.cash = cash;
    this.parts = parts;
    this.unassignedWorkers = unassignedWorkers;
    this.aircraftChangeEvent = new Event();
  }

  sellAircraft(id) {
    const aircraft = this.aircrafts.getItemById(id);
    if (!aircraft) return;

    if (aircraft.quantity > 0) {
      aircraft.quantity--;
      this.cash.add(aircraft.currentPrice);
      this.aircraftChangeEvent.publish(aircraft);
    }
  }

  addWorker(id) {
    const aircraft = this.aircrafts.getItemById(id);
    if (!aircraft) return;
    console.log(this.unassignedWorkers());
    if (this.unassignedWorkers() > 0) {
      aircraft.workers++;
      this.aircraftChangeEvent.publish(aircraft);
    }
  }
}
