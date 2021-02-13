import { createElementAircraft } from './create/createElementAircraft';
import { createElementNewDesign } from './create/createElementNewDesign';
import { createElementLoan } from './create/createElementLoan';
import { createElementStock } from './create/createElementStock';
import { createElementDelivery } from './create/createElementDelivery';
// import createElementTakenLoan(loan);

export function createInitialElements(data) {
  for (const aircraft of data.aircraftList) {
    createElementAircraft(aircraft);
  }

  for (const design of data.designList) {
    createElementNewDesign(design);
  }

  for (const offer of data.offerList) {
    createElementStock(offer);
  }

  for (const delivery of data.deliveryList) {
    createElementDelivery(delivery);
  }

  for (const loan of data.loanOfferList) {
    //createElementLoan(loan);
  }

  for (const loan of data.takenLoanList) {
    //createElementTakenLoan(loan);
  }
}
