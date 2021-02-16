import { Quantity } from './Quantity';

export class Data {
  constructor() {
    this.date = new Date(1955, 10, 12);
    this.dayTick = new Quantity();
    this.tax = new Quantity();
    this.cash = new Quantity();
    this.parts = new Quantity();
  }
}
