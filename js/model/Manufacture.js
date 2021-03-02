import { Event } from '../Event';
import { getRndInteger } from '../functions/calculations';

export class Manufacture {
  constructor(humanResources, aircrafts, cash, parts) {
    this.humanResources = humanResources;
    this.aircrafts = aircrafts;
    this.cash = cash;
    this.parts = parts;
    this.productionForce = 1_000;
    this.aircraftChangeEvent = new Event();
  }

  assignWorker(id) {
    const aircraft = this.aircrafts.getItemById(id);
    if (!aircraft) return;
    if (this.humanResources.getUnassignedWorkers() > 0) {
      aircraft.workers++;
      this.aircraftChangeEvent.publish(aircraft);
    }
  }

  revokeWorker(id) {
    const aircraft = this.aircrafts.getItemById(id);
    if (!aircraft) return;
    if (aircraft.workers > 0) {
      aircraft.workers--;
      this.aircraftChangeEvent.publish(aircraft);
    }
  }

  makeAircrafts(workTimeInHours) {
    for (const aircraft of this.aircrafts.list) {
      const partsMounted = aircraft.workers * workTimeInHours;
      if (partsMounted > this.parts.get()) {
        partsMounted = this.parts.get();
      }
      this.parts.subtract(partsMounted);
      aircraft.partsCompleted += partsMounted;
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

  nextDay() {
    for (let i = 0; i < this.humanResources.traders(); i++) {
      const index = getRndInteger(0, this.aircrafts.list.length - 1);
      const aircraft = this.aircrafts.list[index];
      this.raiseAircraftPrice(aircraft);
    }
  }

  raiseAircraftPrice(aircraft) {
    aircraft.currentPrice += 500;
    if (aircraft.currentPrice > aircraft.startingPrice) {
      aircraft.currentPrice = aircraft.startingPrice;
    }

    this.aircraftChangeEvent.publish(aircraft);
  }
}
