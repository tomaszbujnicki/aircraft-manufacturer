import ship from '../../img/parts/ship.svg';
import warehouse from '../../img/parts/warehouse.svg';

export class Delivery {
  constructor(stock) {
    this.type = 'delivery';
    this.flag = stock.flag;
    this.company = stock.company;
    this.ship = ship;
    this.warehouse = warehouse;
    this.country = stock.country;
    this.daysToGo = stock.time;
    this.risk = stock.risk;
    this.amount = stock.amount;
  }
}
