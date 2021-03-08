import { EXPENSES, FinancialReport, INCOME } from './FinancialReport';

export class Wallet {
  constructor(data) {
    this.data = data;
  }

  pay(amount, forWhat) {
    this.data.cash -= amount;
    this.data.financialReports[0][forWhat] += amount;
  }

  getPaid(amount, forWhat) {
    this.data.cash += amount;
    this.data.financialReports[0][forWhat] += amount;
  }

  nextMonth() {
    this.data.financialReports.unshift(new FinancialReport());
  }

  salaryPayment() {
    const amount = this.data.totalSalary;
    this.pay(amount, EXPENSES.SALARIES);
  }
}
