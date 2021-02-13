import { aircraftList } from './list/aircraftList';
import { loanList } from './list/loanList';
import { Aircraft } from './model/Aircraft';
import { Design } from './model/Design';
import { Loan } from './model/Loan';
import { Stock } from './model/Stock';

export function generateInitialData() {
  const data = {
    date: new Date(1955, 10, 12),
    dayTick: {
      delay: 500,
      unit: 'ms',
    },
    taxRate: {
      percent: 20,
    },
    parts: {
      quantity: 500,
    },
    cash: {
      amount: 20_000_000,
      currency: 'USD',
    },
    offerList: [],
    deliveryList: [],
    aircraftList: [],
    designList: [],
    loanOfferList: [],
    takenLoanList: [],
  };
  for (let i = 0; i < 3; i++) {
    data.aircraftList.push(new Aircraft(aircraftList[i]));
  }
  for (let i = 3; i < 6; i++) {
    data.designList.push(new Design(aircraftList[i]));
  }
  for (let i = 0; i < 10; i++) data.offerList.push(new Stock());

  for (let i = 0; i < 4; i++) {
    data.loanOfferList.push(new Loan(loanList[i]));
  }
  return data;
}
