import { Bank } from './Bank';
import { HumanResources } from './HumanResources';
import { Manufacture } from './Manufacture';
import { MessageCenter } from './MessageCenter';
import { ResearchCenter } from './ResearchCenter';
import { SupplyChain } from './SupplyChain';
import { Time } from './Time';
import { Wallet } from './Wallet';

export class Model {
  constructor(data) {
    this.time = new Time(data.date);

    this.messageCenter = new MessageCenter();
    this.wallet = new Wallet(data);

    this.humanResources = new HumanResources(
      data,
      this.wallet,
      this.messageCenter
    );
    this.manufacture = new Manufacture(data, this.wallet);
    this.researchCenter = new ResearchCenter(data, this.messageCenter);
    this.supplyChain = new SupplyChain(data, this.wallet, this.messageCenter);
    this.bank = new Bank(data, this.wallet, this.messageCenter);
  }
}
