import { getRndInteger, randomPercent } from '../functions/calculations';
import { stock_coreValues } from '../list/stock_coreValues';

export class StockOffer {
  constructor(core = getStockCore()) {
    this.id = uniqueId();
    this.type = 'stockOffer';
    this.daysUntilExpiry = core.daysUntilExpiry;
    this.flag = core.flag;
    this.country = core.country;
    this.company = core.company;
    this.time = core.time;
    this.risk = core.risk;
    this.amount = core.amount;
    this.price = core.price;
    this.totalPrice = this.price * this.amount;
  }
}

function getStockCore() {
  const core = stock_coreValues[getRndInteger(0, stock_coreValues.length - 1)];
  const stock = {
    flag: core.flag,
    country: core.country,
    daysUntilExpiry: getRndInteger(14, 42),
    company: core.company[getRndInteger(0, core.company.length - 1)],
    time: core.time * 1 + Math.round(randomPercent(-20, 20)),
    risk: core.risk * 1 + Math.round(randomPercent(-20, 20)),
    amount: core.amount * 1 + Math.round(randomPercent(-50, 50)),
    price: core.price * 1 + Math.round(randomPercent(-10, 10)),
  };
  return stock;
}

let IdCounter = 0;
function uniqueId() {
  return IdCounter++;
}