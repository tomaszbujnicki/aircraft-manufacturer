import aircraftDesigns from './dataForNewGame/aircraftDesigns';
import loanOffers from './dataForNewGame/loanOffers';
import { Aircraft } from '../model/Aircraft';
import { Design } from '../model/Design';
import { Loan } from '../model/Loan';
import { StockOffer } from '../model/StockOffer';
import employees from './dataForNewGame/employees';
import { Employee } from '../model/Employee';

export function loadDataForNewGame() {
  this.date.setFullYear(1955, 7, 2);
  this.cash = 1_250_000;
  this.parts = 50_000;
  this.tax = 20;

  for (const item of employees) {
    this.employees.insert(new Employee(item));
  }

  for (let i = 0; i < 10; i++) {
    this.stockOffers.insert(new StockOffer());
  }

  for (const item of aircraftDesigns) {
    item.inventionPoints > 0
      ? this.designs.insert(new Design(item))
      : this.aircrafts.insert(new Aircraft(item));
  }

  /*   for (const item of loanOffers) {
    this.loanOffers.insert(new Loan(item));
  } */
}
