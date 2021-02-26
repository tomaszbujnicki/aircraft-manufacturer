import { Event } from '../Event';

export class Manufacture {
  constructor(service, aircrafts, cash, parts) {
    this.service = service;
    this.aircrafts = aircrafts;
    this.cash = cash;
    this.parts = parts;
    this.unassigned = this.service.unassignedWorkers;
    this.aircraftChangeEvent = new Event();
  }

  assignWorker(id) {
    const aircraft = this.aircrafts.getItemById(id);
    if (!aircraft) return;
    if (this.unassigned() > 0) {
      aircraft.workers++;
      this.aircraftChangeEvent.publish(aircraft);
      this.service.unassignedWorkersEvent.publish();
    }
  }

  revokeWorker(id) {
    const aircraft = this.aircrafts.getItemById(id);
    if (!aircraft) return;
    if (aircraft.workers > 0) {
      aircraft.workers--;
      this.aircraftChangeEvent.publish(aircraft);
      this.service.unassignedWorkersEvent.publish();
    }
  }

  makeAircrafts() {
    for (const aircraft of this.aircrafts.list) {
      const progress = aircraft.workers * 1;
      if (progress > this.parts.get()) {
        progress = this.parts.get();
      }
      this.parts.subtract(progress);
      aircraft.partsCompleted += progress;
      if (aircraft.partsCompleted >= aircraft.partsNeeded) {
        aircraft.quantity++;
        aircraft.partsCompleted -= aircraft.partsNeeded;
      }
      this.aircraftChangeEvent.publish(aircraft);
    }
  }

  sellAircraft(id) {
    const aircraft = this.aircrafts.getItemById(id);
    if (!aircraft) return;

    if (aircraft.quantity > 0) {
      aircraft.quantity--;
      this.cash.add(aircraft.currentPrice);
      this.dropAircraftPrice(aircraft);

      this.aircraftChangeEvent.publish(aircraft);
    }
  }

  dropAircraftPrice(aircraft) {
    aircraft.currentPrice -= aircraft.priceChange;

    this.aircraftChangeEvent.publish(aircraft);
  }

  raiseAircraftPrice(aircraft) {
    aircraft.currentPrice += aircraft.priceChange;
    if (aircraft.currentPrice > aircraft.startingPrice) {
      aircraft.currentPrice = aircraft.startingPrice;
    }

    this.aircraftChangeEvent.publish(aircraft);
  }
}
