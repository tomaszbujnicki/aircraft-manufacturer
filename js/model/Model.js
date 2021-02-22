import { Manufacture } from './Manufacture';
import { SupplyChain } from './SupplyChain';

export class Model {
  constructor(data) {
    this.supplyChain = new SupplyChain(
      data.stockOfferList,
      data.deliveryList,
      data.cash,
      data.parts
    );
    this.manufacture = new Manufacture(
      data.aircraftList,
      data.employeeList,
      data.cash,
      data.parts
    );
  }
}
