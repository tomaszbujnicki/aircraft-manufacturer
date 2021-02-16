export class Quantity {
  constructor() {
    this.quantity = 0;
    this.subscribers = [];
  }
  add(number) {
    this.quantity += number;
    console.log(number);
    this.subscribers.forEach((sub) => sub(this.quantity));
  }

  subtract(number) {
    this.quantity -= number;
    this.subscribers.forEach((sub) => sub(this.quantity));
  }

  get() {
    return this.quantity;
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
}
