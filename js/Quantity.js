export class Quantity {
  constructor() {
    this.quantity = 0;
    this.subscribers = [];
  }
  add(number) {
    this.quantity += number;
    this.publish();
  }

  subtract(number) {
    this.quantity -= number;
    this.publish();
  }

  get() {
    return this.quantity;
  }

  publish() {
    this.subscribers.forEach((sub) => sub(this.quantity));
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
}
