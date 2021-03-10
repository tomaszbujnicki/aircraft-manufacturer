import aircraftDesigns from './dataForNewGame/aircraftDesigns';
import loanOffers from './dataForNewGame/loanOffers';
import { Aircraft } from '../model/Aircraft';
import { Design } from '../model/Design';
import { Loan } from '../model/Loan';
import { StockOffer } from '../model/StockOffer';
import employees from './dataForNewGame/employees';
import { Employee } from '../model/Employee';
import { FinancialReport } from '../model/FinancialReport';

export function loadDataForNewGame() {
  this.date.setFullYear(1955, 11, 15);
  this.cash = 1_250_000;
  this.parts = 50_000;
  this.tax = 20;

  this.monthlyReports.unshift(new FinancialReport(this.date, 'month'));
  this.annualReports.unshift(new FinancialReport(this.date, 'year'));

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
