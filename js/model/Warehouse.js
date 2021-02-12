export class Warehouse {
  constructor(parts) {
    this.parts = parts;
    this.subscribers = [];
  }

  getParts(amount) {
    this.parts += amount;
  }

  spendParts(amount) {
    this.parts -= amount;
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
}
