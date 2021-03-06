import { getRndInteger } from '../functions/calculations';

export class Manufacture {
  constructor(humanResources, aircrafts, cash, parts) {
    this.humanResources = humanResources;
    this.aircrafts = aircrafts;
    this.cash = cash;
    this.parts = parts;
    this.productionForce = 1_000;
  }

  assignWorker(id) {
    const aircraft = this.aircrafts.getItemById(id);
    if (!aircraft) return;

    if (this.humanResources.unassignedWorkers > 0) {
      aircraft.workers++;
    }
  }

  revokeWorker(id) {
    const aircraft = this.aircrafts.getItemById(id);
    if (!aircraft) return;

    if (aircraft.workers > 0) {
      aircraft.workers--;
    }
  }

  makeAircrafts(workTimeInHours) {
    for (const aircraft of this.aircrafts.list) {
      const partsMounted = this.calculatePartsMounted(
        aircraft,
        workTimeInHours
      );

      this.parts.subtract(partsMounted);
      aircraft.partsCompleted += partsMounted;

      while (aircraft.partsCompleted >= aircraft.partsNeeded) {
        aircraft.quantity++;
        aircraft.partsCompleted -= aircraft.partsNeeded;
      }
    }
  }
  calculatePartsMounted(aircraft, workTimeInHours) {
    let partsMounted = aircraft.workers * workTimeInHours;
    if (partsMounted > this.parts.get()) {
      partsMounted = this.parts.get();
    }
    return partsMounted;
  }

  sellAircraft(id) {
    const aircraft = this.aircrafts.getItemById(id);
    if (!aircraft) return;

    if (aircraft.quantity > 0) {
      aircraft.quantity--;
      this.cash.add(aircraft.currentPrice);
      this.dropAircraftPrice(aircraft);
    }
  }

  dropAircraftPrice(aircraft) {
    aircraft.currentPrice -= aircraft.priceChange;
  }

  nextDay() {
    this.raisePrices();
  }

  raisePrices() {
    for (let i = 0; i < this.humanResources.traders; i++) {
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
  }
}
