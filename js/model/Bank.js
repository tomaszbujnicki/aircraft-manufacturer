import { Loan } from './Loan';

export class Bank {
  constructor(data) {
    this.loanOfferList = data.loanOfferList;
    this.loanTakenList = data.loanTakenList;
    this.resources = data.resources;
  }
  takeLoan(loanOffer) {
    const loan = new Loan(loanOffer);
    this.takenLoanList.push(loan);
  }
}
