import { generateInitialData } from './generateInitialData';
import { List } from './List';
import { Quantity } from './Quantity';

export class Data {
  constructor() {
    this.date = new Date();
    this.dayTick = new Quantity();
    this.tax = new Quantity();
    this.cash = new Quantity();
    this.parts = new Quantity();
    this.stockOfferList = new List();
    this.deliveryList = new List();
    this.aircraftList = new List();
    this.designList = new List();
    this.loanOfferList = new List();
    this.loanTakenList = new List();
    this.generateInitialData = generateInitialData;
  }

  save() {}

  load() {}
}
