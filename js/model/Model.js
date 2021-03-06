import { HumanResources } from './HumanResources';
import { Manufacture } from './Manufacture';
import { ResearchCenter } from './ResearchCenter';
import { SupplyChain } from './SupplyChain';
import { Time } from './Time';

export class Model {
  constructor(data) {
    this.time = new Time(data.date);

    this.humanResources = new HumanResources(
      data.employeeList,
      data.aircraftList,
      data.cash
    );
    this.supplyChain = new SupplyChain(
      data.stockOfferList,
      data.deliveryList,
      data.cash,
      data.parts
    );
    this.manufacture = new Manufacture(
      this.humanResources,
      data.aircraftList,
      data.cash,
      data.parts
    );
    this.researchCenter = new ResearchCenter(
      this.humanResources,
      data.aircraftList,
      data.designList
    );
  }
}
