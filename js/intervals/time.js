import { inventAircraft, raiseAircraftPrice } from '../functions/aircraft';
import { saveMonth, saveYear } from '../functions/budget';
import { payment, payTax } from '../functions/incomeAndExpanses';
import {
  showActualBudget,
  showAnnualFinancialReport,
  showDate,
  showDeliveryStage,
  showMonthlyFinancialReport,
} from '../functions/show';
import { game } from '../data/generateInitialData';
import { getRndInteger } from '../functions/calculations';

export function newDay() {
  game.date.setTime(game.date.getTime() + 86400000);
  showDate();
  if (game.date.getDate() == 1) newMonth();
  if (game.date.getDay() == 0) payment();

  showDeliveryStage();
  raiseAircraftPrice();
  inventAircraft();
  showActualBudget();
  createNewStockMaybe();
}

export function newMonth() {
  payTax();
  saveMonth();
  showMonthlyFinancialReport();
  if (game.date.getMonth() == 0) newYear();
}

export function newYear() {
  saveYear();
  showAnnualFinancialReport();
}

export function createNewStockMaybe() {
  const probability = 20;
  const maxItems = 14;
  if (getRndInteger(0, 100) < probability) {
    let x = 0;
    for (let i in game.stockArray) {
      ++x;
    }
    if (x < maxItems) game.stockArray.push(new Stock());
  }
}
