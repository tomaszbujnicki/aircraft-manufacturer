import { Stock } from './Stock';

export class Market {
  constructor(offerList, cash) {
    this.offerList = offerList;
    this.cash = cash;
    this.subscribers = [];
  }

  addOffer() {
    this.offerList.push(new Stock());
  }

  removeOffer(stock) {
    const index = this.offerList.findIndex((e) => e === stock);
    if (index) {
      this.offerList.splice(index, 1);
    }
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
}
