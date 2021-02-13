import { Loan } from './Loan';

export class Bank {
  constructor(data) {
    this.loanOfferList = data.loanOfferList;
    this.takenLoanList = data.takenLoanList;
    this.subscribers = [];
  }
  takeLoan(loan) {
    this.takenLoanList.push(new Loan(loan));
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
}
