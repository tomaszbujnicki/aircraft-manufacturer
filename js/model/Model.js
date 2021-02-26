import { HumanResources } from './HumanResources';
import { Manufacture } from './Manufacture';
import { SupplyChain } from './SupplyChain';

export class Model {
  constructor(data, service) {
    this.supplyChain = new SupplyChain(
      data.stockOfferList,
      data.deliveryList,
      data.cash,
      data.parts
    );
    this.manufacture = new Manufacture(
      service,
      data.aircraftList,
      data.cash,
      data.parts
    );
    this.humanResources = new HumanResources(
      data.employees,
      data.aircraftList,
      data.cash
    );
  }
}
