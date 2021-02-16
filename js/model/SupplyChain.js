import { Delivery } from './Delivery';
import { StockOffer } from './StockOffer';

export class SupplyChain {
  constructor(offers, deliveries, cash, parts) {
    this.offers = offers;
    this.deliveries = deliveries;
    this.cash = cash;
    this.parts = parts;
  }

  addNewOffer() {
    const stock = new StockOffer();
    this.offers.insert(stock);
  }

  acceptOffer(stock) {
    if (this.isAcceptable(stock)) {
      console.log('Offer accepted.');
      this.payFor(stock);
      this.removeOffer(stock);
      this.addDelivery(stock);
    }
  }

  isAcceptable(stock) {
    if (this.offers.isOnList(stock)) {
      if (this.cash.get() >= stock.totalPrice) {
        return true;
      } else console.log('Not enough cash.');
    } else console.log('Offer does not exist.');
  }

  payFor(stock) {
    const price = stock.totalPrice;
    this.cash.subtract(price);
  }

  removeOffer(stock) {
    this.offers.delete(stock);
  }

  addDelivery(stock) {
    const delivery = new Delivery(stock);
    this.deliveries.insert(delivery);
    console.log('Delivery expected in ' + delivery.daysToGo + ' days ');
  }

  unloadDelivery(stock) {
    if ('delivery === success') {
      const parts = stock.parts;
      this.parts.add(parts);
      console.log('Delivery unloaded: +' + stock.parts + ' parts.');
      this.removeDelivery(stock);
    }
  }

  removeDelivery(stock) {
    this.deliveries.delete(stock);
  }

  expireOffer(stock) {
    // TODO

    if (stock.daysUntilExpiry <= 0) {
      this.removeOffer(stock);
    }
  }
}
