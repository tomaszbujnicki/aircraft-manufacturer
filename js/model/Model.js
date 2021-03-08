import { HumanResources } from './HumanResources';
import { Manufacture } from './Manufacture';
import { ResearchCenter } from './ResearchCenter';
import { SupplyChain } from './SupplyChain';
import { Time } from './Time';

export class Model {
  constructor(data) {
    this.time = new Time(data.date);

    this.humanResources = new HumanResources(data);
    this.supplyChain = new SupplyChain(data);
    this.manufacture = new Manufacture(data);
    this.researchCenter = new ResearchCenter(data);
  }
}
