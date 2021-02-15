import { StockOffer } from './StockOffer';

export class Market {
  constructor(stockOfferList, deliveryList, cash) {
    this.offers = stockOfferList;
    this.deliveries = deliveryList;
    this.cash = cash;
  }

  addOffer() {
    this.offers.insert(new StockOffer());
  }

  buyStock(stock) {
    if (this.isExists(stock)) {
      const price = stock.totalPrice;
      if (this.isEnoughCash(price)) {
        this.removeOffer(stock);
        this.addDelivery(stock);
        this.pay(price);
        console.log('Stock bought');
      } else console.log("Can't buy stock");
    } else console.log('Stock does not exist');
  }

  isExists(stock) {
    return this.offers.isOnList(stock);
  }

  isEnoughCash(price) {
    const balance = this.cash.get();
    return price <= balance;
  }

  removeOffer(stock) {
    this.offers.delete(stock);
  }

  addDelivery(stock) {
    this.deliveries.insert(stock);
  }

  pay(price) {
    this.cash.subtract(price);
  }
}
