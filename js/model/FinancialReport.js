export const EXPENSES = {
  SALARIES: 'salaries',
  RECRUITMENT: 'recruitment',
  PARTS: 'parts',
  INTEREST: 'interest',
  CAPITAL: 'capital',
  TAXES: 'taxes',
};

export const INCOME = {
  SALE: 'sale',
  LOANS: 'loans',
  PRIZES: 'prizes',
};

export class FinancialReport {
  constructor(report) {
    this.sale = report.sale || 0;
    this.prizes = report.prizes || 0;
    this.loans = report.loans || 0;

    this.salaries = report.salaries || 0;
    this.recruitment = report.recruitment || 0;
    this.parts = report.parts || 0;
    this.interest = report.interest || 0;
    this.taxes = report.taxes || 0;
    this.capital = report.capital || 0;
  }

  get income() {
    return this.sale + this.prizes + this.loans;
  }

  get expenses() {
    return (
      this.salaries +
      this.recruitment +
      this.parts +
      this.interest +
      this.tax +
      this.capital
    );
  }

  get profit() {
    return this.income - this.expenses;
  }
}
