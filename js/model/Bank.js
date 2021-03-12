import { EXPENSES } from './FinancialReport';
import { INCOME } from './FinancialReport';
import { LoanTaken } from './LoanTaken';
import { LoanOffer } from './LoanOffer';

export class Bank {
  constructor(data, wallet) {
    this.data = data;
    this.wallet = wallet;
    this.offers = data.loanOffers;
    this.loans = data.loansTaken;
  }
  takeLoan(id) {
    const offer = this.offers.getItemById(id);
    if (!offer) return;

    this.removeOffer(offer);
    this.addLoan(offer);
    this.wallet.getPaid(offer.amount, INCOME.LOANS);
  }

  removeOffer(offer) {
    this.offers.delete(offer);
  }

  addLoan(offer) {
    const loan = new LoanTaken(offer);
    this.loans.insert(loan);
    console.log('Loan taken.');
  }

  nextWeek() {
    this.loans.list.forEach((loan) => {
      this.payInstallment(loan);
      this.reduceAmount(loan);
      this.reduceRepaymentPeriod(loan);
    });
  }
  payInstallment(loan) {
    this.wallet.pay(loan.interestAmount, EXPENSES.INTEREST);
    this.wallet.pay(loan.capitalAmount, EXPENSES.CAPITAL);
  }
  reduceAmount(loan) {
    loan.amountToBeRepaid -= loan.capitalAmount;
  }
  reduceRepaymentPeriod(loan) {
    loan.installmentsToEnd--;
    if (loan.installmentsToEnd <= 0) {
      this.removeLoan(loan);
    }
  }

  payOffLoan(id) {
    const loan = this.loans.getItemById(id);
    if (!loan) return;

    this.wallet.pay(loan.amountToBeRepaid, EXPENSES.CAPITAL);
    this.removeLoan(loan);
  }

  removeLoan(loan) {
    this.loans.delete(loan);
  }

  createNewOffer() {}
}
