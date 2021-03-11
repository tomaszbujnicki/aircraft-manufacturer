import { getRndInteger, randomPercent } from './calculations';
import { stock_coreValues } from '../list/stock_coreValues';

export class StockOffer {
  constructor(core = getStockCore()) {
    this.type = 'stockOffer';
    this.daysUntilExpiry = core.daysUntilExpiry;
    this.country = core.country;
    this.company = core.company;
    this.time = core.time;
    this.risk = core.risk;
    this.amount = core.amount;
    this.unitPrice = core.price;
    this.totalPrice = this.unitPrice * this.amount;
  }
}

function getStockCore() {
  const core = stock_coreValues[getRndInteger(0, stock_coreValues.length - 1)];
  const stock = {
    country: core.country,
    daysUntilExpiry: getRndInteger(14, 42),
    company: core.company[getRndInteger(0, core.company.length - 1)],
    time: Math.round(core.time * (1 + randomPercent(-20, 20))),
    risk: Math.round(core.risk * (1 + randomPercent(-20, 20))),
    amount: Math.round(core.amount * (1 + randomPercent(-50, 50))),
    price: Math.round(core.price * (1 + randomPercent(-10, 10))),
  };
  return stock;
}
