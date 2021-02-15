export class Transaction {
  constructor(resources) {
    this.resources = resources;
    this.subscribers = [];
  }
  spendMoney(amount) {
    this.resources.cash -= amount;
  }

  getMoney(amount) {
    this.resources.cash += amount;
  }

  buyStock(stock) {
    const price = stock.totalPrice;
    if (price <= balance) {
      spendMoney(price);
      this.subscribers.forEach((sub) => sub(stock, 'buyStock'));
    }
  }

  sellAircraft(aircraft) {
    if (aircraft.quantity > 0) {
      const price = aircraft.currentPrice;
      getMoney(price);
      this.subscribers.forEach((sub) => sub(aircraft, 'sellAircraft'));
    }
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
}
