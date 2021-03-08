import { getRndInteger } from '../functions/calculations';
import { INCOME } from './FinancialReport';

export class Manufacture {
  constructor(data, wallet) {
    this.data = data;
    this.wallet = wallet;
    this.aircrafts = data.aircrafts;
  }

  assignWorker(id) {
    const aircraft = this.aircrafts.getItemById(id);
    if (!aircraft) return;

    if (this.data.unassignedWorkers > 0) {
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

      this.data.parts -= partsMounted;
      aircraft.partsCompleted += partsMounted;

      while (aircraft.partsCompleted >= aircraft.partsNeeded) {
        aircraft.quantity++;
        aircraft.partsCompleted -= aircraft.partsNeeded;
      }
    }
  }
  calculatePartsMounted(aircraft, workTimeInHours) {
    let partsMounted = aircraft.workers * workTimeInHours * this.workEfficiency;
    if (partsMounted > this.data.parts) {
      partsMounted = this.data.parts;
    }
    return partsMounted;
  }

  get workEfficiency() {
    const subordinates = this.data.workers;
    const basicEfficiency = 0.5;
    if (subordinates == 0) return basicEfficiency;

    const superiors = this.data.foremen;
    const supervisedBySuperior = 4;
    const fullSupervisionBonus = 0.5;

    let supervisionPart = (superiors * supervisedBySuperior) / subordinates;
    if (supervisionPart > 1) supervisionPart = 1;

    return basicEfficiency + supervisionPart * fullSupervisionBonus;
  }

  sellAircraft(id) {
    const aircraft = this.aircrafts.getItemById(id);
    if (!aircraft) return;

    if (aircraft.quantity > 0) {
      aircraft.quantity--;
      this.wallet.getPaid(aircraft.currentPrice, INCOME.SALE);
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
    for (let i = 0; i < this.data.traders; i++) {
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
