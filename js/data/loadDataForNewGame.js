import aircraftDesigns from './dataForNewGame/aircraftDesigns';
import loanOffers from './dataForNewGame/loanOffers';
import { Aircraft } from '../model/Aircraft';
import { Design } from '../model/Design';
import { Loan } from '../model/Loan';
import { StockOffer } from '../model/StockOffer';
import employees from './dataForNewGame/employees';
import { Employee } from '../model/Employee';

export function loadDataForNewGame() {
  this.date.setFullYear(1955, 10, 12);
  this.cash.add(1_250_000);
  this.parts.add(500);
  this.tax.add(20);
  this.hourInMilliseconds.add(500);

  for (const item of employees) {
    this.employeeList.insert(new Employee(item));
  }

  for (let i = 0; i < 10; i++) {
    this.stockOfferList.insert(new StockOffer());
  }

  for (const item of aircraftDesigns) {
    item.inventionPoints > 0
      ? this.designList.insert(new Design(item))
      : this.aircraftList.insert(new Aircraft(item));
  }

  /*   for (const item of loanOffers) {
    this.loanOfferList.insert(new Loan(item));
  } */
}
