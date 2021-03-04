import { Event } from '../controller/Event';

export class Quantity {
  constructor() {
    this.quantity = 0;
    this.changeEvent = new Event();
  }
  add(number) {
    this.quantity += number;
    this.changeEvent.publish(this.quantity);
  }

  subtract(number) {
    this.quantity -= number;
    this.changeEvent.publish(this.quantity);
  }

  get() {
    return this.quantity;
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
}
