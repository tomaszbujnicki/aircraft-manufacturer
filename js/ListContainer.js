import { List } from './List';

export class ListContainer {
  constructor() {
    this.stockOfferList = new List();
    this.deliveryList = new List();
    this.aircraftList = new List();
    this.designList = new List();
    this.loanOfferList = new List();
    this.loanTakenList = new List();
  }
}
