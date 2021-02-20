import { AircraftElement } from './createAircraftElement';
import { LoanTakenElement } from './view/LoanTakenElement';
import { LoanOfferElement } from './LoanOfferElement';
import { DesignElement } from './DesignElement';
//import { StockOfferElement } from './view/StockOfferElement';
import { DeliveryElement } from './DeliveryElement';

export class ElementFactory {
  constructor() {
    this.create = (item) => {
      const type = item.type;
      const creator = this.getCreator(type);
      const element = creator(item);
      return element;
    };
  }

  getCreator(type) {
    switch (type) {
      case 'aircraft':
        return this.createAircraft;
      case 'design':
        return this.createDesign;
      case 'stockOffer':
        return this.createStockOffer;
      case 'delivery':
        return this.createDelivery;
      case 'loanOffer':
        return this.createLoanOffer;
      case 'loanTaken':
        return this.createLoanTaken;
      default:
        break;
    }
  }
  createAircraft(item) {
    element = new AircraftElement();
    return element;
  }
  createDesign(item) {
    element = new DesignElement(item);
    return element;
  }
  createStockOffer(item) {
    container = document.getElementById('partsDIV');
    element = new StockOfferElement(
      container,
      item.id,
      item.flag,
      item.company,
      item.time,
      item.risk,
      item.amount,
      item.unitPrice,
      item.totalPrice
    );
    return element;
  }
  createDelivery(item) {
    element = new DeliveryElement(item);
    return element;
  }
  createLoanOffer(item) {
    element = new LoanOfferElement(item);
    return element;
  }
  createLoanTaken(item) {
    element = new LoanTakenElement(item);
    return element;
  }
}
