export class Market {
  constructor(offerList = []) {
    this.offerList = offerList;
    this.subscribers = [];
  }

  buyStock(stock) {
    if (game.cash >= stock.totalPrice) {
      this.subscribers.forEach((s) => s(stock));
      this.remove(stock);
    }
  }

  remove(stock) {
    const index = this.offerList.findIndex((e) => e === stock);
    if (index) {
      this.offerList.splice(index, 1);
    }
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
}
