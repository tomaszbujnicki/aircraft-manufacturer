import { getRndInteger } from './calculations';
import { Delivery } from './Delivery';
import { StockOffer } from './StockOffer';
import { EXPENSES } from './FinancialReport';
import { MESSAGE_TYPE } from './MessageCenter';

export class SupplyChain {
  constructor(data, wallet, messageCenter) {
    this.data = data;
    this.wallet = wallet;
    this.messageCenter = messageCenter;
    this.offers = data.stockOffers;
    this.deliveries = data.deliveries;
  }

  buyStock(id) {
    const stock = this.offers.getItemById(id);
    if (!stock) return;

    this.wallet.pay(stock.totalPrice, EXPENSES.PARTS);
    this.removeOffer(stock);
    this.addDelivery(stock);
  }

  removeOffer(stock) {
    this.offers.delete(stock);
  }

  addDelivery(stock) {
    const delivery = new Delivery(stock);
    this.deliveries.insert(delivery);
    this.messageCenter.new(
      MESSAGE_TYPE.NEUTRAL,
      `Delivery expected in<br />
      ${delivery.daysToGo} days.`
    );
  }

  unloadDelivery(stock) {
    if (stock.risk < getRndInteger(0, 100)) {
      this.data.parts += stock.amount;
      this.messageCenter.new(
        MESSAGE_TYPE.SUCCESS,
        `Delivery success<br>
        ${stock.company}<br />
        +${stock.amount} parts`
      );
      this.removeDelivery(stock);
    } else {
      this.messageCenter.new(
        MESSAGE_TYPE.FAIL,
        `Delivery failed<br>
        ${stock.company}<br />
        Lost: ${stock.amount} parts`
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
