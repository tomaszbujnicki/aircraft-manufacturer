import { FinancialReport } from '../model/FinancialReport';
import { LoanTaken } from '../model/LoanTaken';

export function loadDataForContinueGame(data) {
  this.date.setTime(data.date);
  this.tax = data.tax;
  this.cash = data.cash;
  this.parts = data.parts;

  this.monthlyReports = data.monthlyReports.map((item) => {
    item.__proto__ = FinancialReport.prototype;
    return item;
  });
  this.annualReports = data.annualReports.map((item) => {
    item.__proto__ = FinancialReport.prototype;
    return item;
  });

  for (const item of data.employees) {
    this.employees.insert(item);
  }
  for (const item of data.stockOffers) {
    this.stockOffers.insert(item);
  }
  for (const item of data.deliveries) {
    this.deliveries.insert(item);
  }
  for (const item of data.aircrafts) {
    this.aircrafts.insert(item);
  }
  for (const item of data.designs) {
    this.designs.insert(item);
  }
  for (const item of data.loanOffers) {
    this.loanOffers.insert(item);
  }
  for (const item of data.loanTaken) {
    item.__proto__ = LoanTaken.prototype;
    this.loansTaken.insert(item);
  }

  return true;
}
