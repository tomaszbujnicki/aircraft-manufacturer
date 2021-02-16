import { StockOffer } from './StockOffer';

export class Market {
  constructor(type, offers, deliveries, cash) {
    this.type = type;
    this.offers = offers;
    this.deliveries = deliveries;
    this.cash = cash;
  }

  add(offer) {
    //new StockOffer()
    this.offers.insert();
  }

  accept(offer) {
    if (this.isAcceptable(offer)) {
      this.pay(price);
      this.remove(offer);
      this.addDelivery(offer);
      console.log('Stock bought');
    }
  }

  isAcceptable(offer) {
    if (this.isExists(offer)) {
      if (this.isEnoughCash(price)) {
        return true;
      } else console.log("Can't buy stock");
    } else console.log('Stock does not exist');
  }

  isExists(offer) {
    return this.offers.isOnList(offer);
  }

  isEnoughCash(price) {
    const balance = this.cash.get();
    return price <= balance;
  }

  remove(offer) {
    this.offers.delete(offer);
  }

  addDelivery(stock) {
    this.deliveries.insert(stock);
  }

  pay(price) {
    this.cash.subtract(price);
  }
}
