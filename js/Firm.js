export class Firm {
  constructor() {
    this.market = new Market(data);
    this.transactions = new Transactions(data.cash);
    this.supply = new Supply(data);
    this.warehouse = new Warehouse(data);
    this.manufacture = new Manufacture(data);
    this.researchCenter = new ResearchCenter(data);
  }
  takeLoan(loanOffer) {
    const loan = new Loan(loanOffer);
    this.takenLoanList.push(loan);
    this.operationList.push([loan, 'loanTaken']);
  }
}
