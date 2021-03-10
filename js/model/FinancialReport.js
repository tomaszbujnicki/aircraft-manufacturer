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
  constructor(date) {
    this.month = date.getMonth();
    this.year = date.getFullYear();

    this.sale = 0;
    this.prizes = 0;
    this.loans = 0;

    this.salaries = 0;
    this.recruitment = 0;
    this.parts = 0;
    this.interest = 0;
    this.taxes = 0;
    this.capital = 0;
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
      this.taxes +
      this.capital
    );
  }

  get profit() {
    return this.income - this.expenses;
  }
}
