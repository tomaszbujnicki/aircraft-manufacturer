/* import { createElementAircraft } from './view/AircraftElement';
import { createElementNewDesign } from './create/createElementDesign';
import { createElementLoan } from './create/createElementLoanOffer';
import { createElementStock } from './create/createElementStockOffer';
import { createElementDelivery } from './create/createElementDelivery'; */
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
