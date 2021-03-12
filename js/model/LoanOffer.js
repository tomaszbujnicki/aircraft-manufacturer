export class LoanOffer {
  constructor(loan) {
    this.type = 'loanOffer';
    this.name = loan.name;
    this.interestRate = loan.interestRate;
    this.amount = loan.amount;
    this.repaymentPeriod = loan.repaymentPeriod; // in weeks
  }
}
