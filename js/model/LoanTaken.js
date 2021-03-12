export class LoanTaken {
  constructor(loan) {
    this.type = 'loanTaken';
    this.name = loan.name;
    this.interestRate = loan.interestRate;
    this.amount = loan.amount;
    this.capitalAmount = Math.round(loan.amount / loan.repaymentPeriod);

    this.amountToBeRepaid = loan.amount;
    this.installmentsToEnd = loan.repaymentPeriod; // in weeks
  }

  get interestAmount() {
    const weeklyInterestRate = this.interestRate / 100 / 52;
    return Math.round(this.amountToBeRepaid * weeklyInterestRate);
  }
}
