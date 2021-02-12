export class Supply {
  constructor(deliveryList = []) {
    this.deliveryList = deliveryList;
    this.subscribers = [];
  }

  add(stock) {
    this.deliveryList.push(stock);
  }

  receive(supply) {
    if (game.cash >= stock.totalPrice) {
      this.subscribers.forEach((s) => s(stock));
      remove(supply);
    }
  }

  remove(supply) {
    const index = this.deliveryList.findIndex((e) => e === supply);
    if (index) {
      this.deliveryList.splice(index, 1);
    }
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
}
