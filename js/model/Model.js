import { SupplyChain } from './SupplyChain';

export class Model {
  constructor(data) {
    this.supplyChain = new SupplyChain(
      data.stockOfferList,
      data.deliveryList,
      data.cash,
      data.parts
    );
  }
}
