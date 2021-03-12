export class LoanOffer {
  constructor(loan) {
    this.type = 'loadOffer';
    this.name = loan.name;
    this.amount = loan.amount;
    this.amountToBeRepaid = loan.amount;
    this.repaymentPeriod = loan.repaymentPeriod; // in weeks

    this.interestRate = loan.interestRate;
    this.installmentsToEnd = loan.repaymentPeriod;
  }
  getInterestAmount = () => {};

  getCapitalAmount = () => Math.round(this.amount / this.repaymentPeriod);
}
