export class Wallet {
  constructor(cash) {
    this.cash = cash;
    this.subscribers = [];
  }

  getPaid(amount) {
    this.cash += amount;
  }

  pay(amount) {
    this.cash -= amount;
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
}
