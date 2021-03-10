import { EXPENSES, FinancialReport, INCOME } from './FinancialReport';

export class Wallet {
  constructor(data) {
    this.data = data;
  }

  pay(amount, forWhat) {
    this.data.cash -= amount;
    this.data.monthlyReports[0][forWhat] += amount;
    this.data.annualReports[0][forWhat] += amount;
  }

  getPaid(amount, forWhat) {
    this.data.cash += amount;
    this.data.monthlyReports[0][forWhat] += amount;
    this.data.annualReports[0][forWhat] += amount;
  }

  nextMonth() {
    this.data.monthlyReports.unshift(new FinancialReport(this.data.date));
  }

  nextYear() {
    this.data.annualReports.unshift(new FinancialReport(this.data.date));
  }

  salaryPayment() {
    const amount = this.data.totalSalary;
    this.pay(amount, EXPENSES.SALARIES);
  }
}
