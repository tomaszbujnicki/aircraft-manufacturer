export class Delivery {
  constructor(stock) {
    this.type = 'delivery';
    this.flag = stock.flag;
    this.country = stock.country;
    this.daysToGo = stock.time;
    this.risk = stock.risk;
    this.amount = stock.amount;
  }
}
