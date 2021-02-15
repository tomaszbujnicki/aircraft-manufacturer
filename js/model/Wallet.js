export class Wallet {
  constructor(resources) {
    this.resources = resources;
  }

  spendMoney(amount) {
    this.cash -= amount;
  }

  getMoney(amount) {
    this.cash += amount;
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
}
