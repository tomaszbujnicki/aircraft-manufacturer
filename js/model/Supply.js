export class Supply {
  constructor(data) {
    this.deliveryList = data.deliveryList;
    this.subscribers = [];
  }

  addDelivery(stock) {
    this.deliveryList.push(stock);
  }

  receive(supply) {
    if ('delivery === success') {
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
