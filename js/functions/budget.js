export const months = [];
export const years = [];

export class financialResult {
  constructor(period) {
    this.period = period;
    this.sale = 0;
    this.prizes = 0;
    this.loans = 0;
    this.salaries = 0;
    this.recruitment = 0;
    this.parts = 0;
    this.interest = 0;
    this.tax = 0;
    this.capital = 0;
  }
}

export let thisMonth = new financialResult('month');
export let thisYear = new financialResult('year');

export function saveMonth() {
  calculateProfit(thisMonth);
  months.push(thisMonth);
  thisMonth = new financialResult('month');
}

export function saveYear() {
  calculateProfit(thisYear);
  years.push(thisYear);
  thisYear = new financialResult('year');
}

export function calculateProfit(object) {
  object.income = object.sale + object.prizes + object.loans;
  object.expenses =
    object.salaries +
    object.recruitment +
    object.parts +
    object.interest +
    object.tax +
    object.capital;
  object.profit = object.income - object.expenses;
}