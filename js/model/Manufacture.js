import { Event } from '../Event';

export class Manufacture {
  constructor(service, aircrafts, employees, cash, parts) {
    this.service = service;
    this.aircrafts = aircrafts;
    this.employees = employees;
    this.cash = cash;
    this.parts = parts;
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

  assignWorker(id) {
    const aircraft = this.aircrafts.getItemById(id);
    if (!aircraft) return;
    if (this.service.unassignedWorkers() > 0) {
      aircraft.workers++;
      this.aircraftChangeEvent.publish(aircraft);
      this.service.unassignedWorkersEvent.publish(
        this.service.unassignedWorkers()
      );
    }
  }
  revokeWorker(id) {
    const aircraft = this.aircrafts.getItemById(id);
    if (!aircraft) return;
    if (aircraft.workers > 0) {
      aircraft.workers--;
      this.aircraftChangeEvent.publish(aircraft);
      this.service.unassignedWorkersEvent.publish(
        this.service.unassignedWorkers()
      );
    }
  }
}
