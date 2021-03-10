export class Delivery {
  constructor(stock) {
    this.type = 'delivery';
    this.company = stock.company;
    this.country = stock.country;
    this.daysToGo = stock.time;
    this.risk = stock.risk;
    this.amount = stock.amount;
  }
}
