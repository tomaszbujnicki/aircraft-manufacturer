import { inventAircraft, raiseAircraftPrice } from '../functions/aircraft';
import { saveMonth, saveYear } from '../functions/budget';
import { payTax } from '../functions/incomeAndExpanses';
import {
  showActualBudget,
  showAnnualFinancialReport,
  showDate,
  showDeliveryStage,
  showMonthlyFinancialReport,
} from '../functions/show';
import { createNewStockMaybe } from '../functions/stock';
import { clickFalse } from '../functions/visual';

export function newDay() {
  date.setTime(date.getTime() + 86400000);
  showDate();
  if (date.getDate() == 1) newMonth();
  if (date.getDay() == 0) payment();

  showDeliveryStage();
  raiseAircraftPrice();
  inventAircraft();
  showActualBudget();
  createNewStockMaybe();

  if (availableParts < 100) clickFalse(document.getElementById('parts'));
}

export function newMonth() {
  payTax();
  saveMonth();
  showMonthlyFinancialReport();
  if (date.getMonth() == 0) newYear();
}

export function newYear() {
  saveYear();
  showAnnualFinancialReport();
}
