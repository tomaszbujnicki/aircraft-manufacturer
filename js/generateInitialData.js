import { aircraftList } from './list/aircraftList';
import { designList } from './list/designList';
import { loanOfferList } from './list/loanOfferList';
import { Aircraft } from './model/Aircraft';
import { Design } from './model/Design';
import { Loan } from './model/Loan';
import { StockOffer } from './model/StockOffer';

export function generateInitialData() {
  const generator = new InitialDataGenerator(this);
  generator.generate();
}

class InitialDataGenerator {
  constructor(data) {
    this.stockOfferList = data.stockOfferList;
    this.aircraftList = data.aircraftList;
    this.loanOfferList = data.loanOfferList;
    this.designList = data.designList;
  }
  generate() {
    for (let i = 0; i < 3; i++) {
      this.generateAircraft(i);
    }
    for (let i = 0; i < 3; i++) {
      this.generateDesign(i);
    }
    for (let i = 0; i < 4; i++) {
      this.generateLoanOffer(i);
    }
    for (let i = 0; i < 10; i++) {
      this.generateStockOffer();
    }
  }

  generateAircraft(i) {
    this.aircraftList.insert(new Aircraft(aircraftList[i]));
  }
  generateDesign(i) {
    this.designList.insert(new Design(designList[i]));
  }
  generateStockOffer() {
    this.stockOfferList.insert(new StockOffer());
  }
  generateLoanOffer(i) {
    this.loanOfferList.insert(new Loan(loanOfferList[i]));
  }
}
