import { createElementAircraft } from './create/createElementAircraft';
import { createElementDesign } from './create/createElementDesign';
import { createElementLoanOffer } from './create/createElementLoanOffer';
import { createElementStockOffer } from './create/createElementStockOffer';
import { createElementDelivery } from './create/createElementDelivery';
// import createElementLoanTaken(loan);

export class View {
  constructor() {
    this.createElementAircraft = createElementAircraft;
    this.createElementDesign = createElementDesign;
    this.createElementStockOffer = createElementStockOffer;
    this.createElementDelivery = createElementDelivery;
    this.createElementLoanOffer = createElementLoanOffer;
    //this.createElementLoanTaken = createElementLoanTaken;
  }

  removeElement(item) {
    const element = document.getElementById(item.type + 'Item' + item.id);
    console.log(element);
    element.remove();
  }

  createElement(item) {
    switch (item.type) {
      case 'aircraft':
        this.createElementAircraft(item);
        break;
      case 'design':
        this.createElementDesign(item);
        break;
      case 'stockOffer':
        this.createElementStockOffer(item);
        break;
      case 'delivery':
        this.createElementDelivery(item);
        break;
      case 'loanOffer':
        this.createElementLoanOffer(item);
        break;
      case 'loanTaken':
        this.createElementloanTaken(item);
        break;

      default:
        break;
    }
  }
}
