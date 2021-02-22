//import { game } from '../data/generateInitialData';
import { thisMonth, thisYear } from './budget';
import { totalSalary } from './calculations';
import { showActualBudget, showCash } from './show';

export function calculateIncome(amount, property) {
  game.cash += amount;
  showCash();
  thisMonth[property] += amount;
  thisYear[property] += amount;
  showActualBudget();
}

export function calculateExpenses(amount, property) {
  game.cash -= amount;
  showCash();
  thisMonth[property] += amount;
  thisYear[property] += amount;
  showActualBudget();
}

export function payTax() {
  const incomeSum = thisMonth.sale + thisMonth.prizes;
  const expensesSum =
    thisMonth.interest +
    thisMonth.parts +
    thisMonth.recruitment +
    thisMonth.salaries;

  let result = incomeSum - expensesSum;
  if (result > 0) {
    calculateExpenses(Math.floor(result * game.taxRate), 'tax');
  }
}

export function payment() {
  calculateExpenses(totalSalary(), 'salaries');
}
