import { getRndInteger } from './calculations';
import { Delivery } from './Delivery';
import { StockOffer } from './StockOffer';
import { EXPENSES } from './FinancialReport';

export class SupplyChain {
  constructor(data, wallet) {
    this.data = data;
    this.wallet = wallet;
    this.offers = data.stockOffers;
    this.deliveries = data.deliveries;
  }

  buyStock(id) {
    const stock = this.offers.getItemById(id);
    if (!stock) return;

    this.wallet.pay(stock.totalPrice, EXPENSES.PARTS);
    console.log('Offer accepted.');
    this.removeOffer(stock);
    this.addDelivery(stock);
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
    if (stock.risk < getRndInteger(0, 100)) {
      this.data.parts += stock.amount;
      console.log(
        `Delivery from ${stock.company} unloaded: + ${stock.amount} parts.`
      );
      this.removeDelivery(stock);
    } else {
      console.log(
        `Delivery from ${stock.company} failed. ${stock.amount} parts lost.`
      );
    }
  }

  removeDelivery(stock) {
    this.deliveries.delete(stock);
  }

  nextDay() {
    this.shortenOffersExpiryTime();
    this.bringDeliveriesCloser();
    this.createNewOffer();
  }
  bringDeliveriesCloser() {
    this.deliveries.list.forEach((delivery) => {
      delivery.daysToGo--;
      if (delivery.daysToGo <= 0) this.unloadDelivery(delivery);
    });
  }
  shortenOffersExpiryTime() {
    this.offers.list.forEach((offer) => {
      offer.daysUntilExpiry--;
      if (offer.daysUntilExpiry <= 0) this.removeOffer(offer);
    });
  }
  createNewOffer() {
    const maxOffersNumber = 12;
    const currentOffersNumber = this.offers.list.length;
    const chanceToCreateNewOffer = 1 - currentOffersNumber / maxOffersNumber;
    if (chanceToCreateNewOffer > Math.random()) {
      const stock = new StockOffer();
      this.offers.insert(stock);
    }
  }
}
