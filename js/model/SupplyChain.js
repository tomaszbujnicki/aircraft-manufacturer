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

  buyStock(id) {
    const stock = this.offers.getItemById(id);
    if (!stock) return;

    if (this.payFor(stock)) {
      console.log('Offer accepted.');
      this.removeOffer(stock);
      this.addDelivery(stock);
    }
  }

  payFor(stock) {
    const price = stock.totalPrice;

    if (this.cash.get() >= price) {
      this.cash.subtract(price);
      return true;
    } else {
      console.log('Not enough cash.');
      return false;
    }
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
