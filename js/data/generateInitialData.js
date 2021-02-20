import { aircraftList } from '../list/aircraftList';
import { designList } from '../list/designList';
import { loanOfferList } from '../list/loanOfferList';
import { Aircraft } from '../model/Aircraft';
import { Design } from '../model/Design';
import { Loan } from '../model/Loan';
import { StockOffer } from '../model/StockOffer';

export function generateInitialData() {
  this.date.setFullYear(1955, 10, 12);
  this.cash.add(1_250_000);
  this.parts.add(500);
  this.tax.add(20);
  this.dayTick.add(500);

  for (let i = 0; i < 3; i++) {
    this.aircraftList.insert(new Aircraft(aircraftList[i]));
  }
  for (let i = 0; i < 3; i++) {
    this.designList.insert(new Design(designList[i]));
  }
  for (let i = 0; i < 10; i++) {
    this.stockOfferList.insert(new StockOffer());
  }
  for (let i = 0; i < 4; i++) {
    this.loanOfferList.insert(new Loan(loanOfferList[i]));
  }
}
