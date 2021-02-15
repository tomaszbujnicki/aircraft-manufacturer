export class Quantity {
  constructor() {
    this.quantity = 0;
  }
  add(number) {
    console.log('add: ' + number);
    this.quantity += number;
  }

  subtract(number) {
    console.log('subtract: ' + number);
    this.quantity -= number;
  }

  get() {
    console.log('get = ' + this.quantity);
    return this.quantity;
  }
}
