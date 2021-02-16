import { generateInitialData } from './generateInitialData';
import { List } from './List';
import { Quantity } from './Quantity';

export class Data {
  constructor(view) {
    this.date = new Date(1955, 10, 12);
    this.dayTick = new Quantity();
    this.tax = new Quantity();
    this.cash = new Quantity();
    this.parts = new Quantity();
    this.stockOfferList = new List(view);
    this.deliveryList = new List(view);
    this.aircraftList = new List(view);
    this.designList = new List(view);
    this.loanOfferList = new List(view);
    this.loanTakenList = new List(view);
    this.operationList = new List(view);
    this.generateInitialData = generateInitialData;
  }
  loadFromLocalStorage() {}
  update() {}
  select() {}
}
