import { saveMonth, saveYear } from '../functions/budget';
import { payTax } from '../functions/incomeAndExpenses';
import {
  showAnnualFinancialReport,
  showMonthlyFinancialReport,
} from '../functions/show';

function newMonth() {
  payTax();
  saveMonth();
  showMonthlyFinancialReport();
}
function newYear() {
  saveYear();
  showAnnualFinancialReport();
}
