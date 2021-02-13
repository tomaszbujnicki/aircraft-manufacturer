export class Transactions {
  constructor(cash) {
    this.cash = cash;
    this.subscribers = [];
  }

  buyStock(stock) {
    if (stock.totalPrice <= this.cash.amount) {
      this.cash.amount -= stock.totalPrice;
      this.subscribers.forEach((sub) => sub(stock));
    }
  }

  issueInvoice(amount, subject) {
    this.subscribers.forEach((sub) => sub({ amount, subject }));
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
}
