export class Warehouse {
  constructor(data) {
    this.parts = data.parts;
  }

  getParts(quantity) {
    this.parts.quantity += quantity;
    pubsub.publish('parts', this.parts);
  }

  spendParts(quantity) {
    this.parts.quantity -= quantity;
    pubsub.publish('parts', this.parts);
  }
}
