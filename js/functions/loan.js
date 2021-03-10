//import { game } from '../data/generateInitialData';
import { calculateExpenses, calculateIncome } from './incomeAndExpenses';

export function takeLoan(loan) {
  if (loan.taken == true) return;
  loan.taken = true;
  calculateIncome(loan.amount, 'loans');
  loan.installmentsToEnd = loan.period;
  loan.amountToBeRepaid = loan.amount;
  loan.capitalPart = Math.round(loan.amount / loan.period);
  loan.intervalID = setInterval(() => payInstallment(loan), game.dayTick * 2);

  const loanElement = document.getElementById(`loanItem${loan.id}`);
  const takeButton = document.getElementById(`takeLoanBtn${loan.id}`);
  takeButton.classList.add('hide');

  setTimeout(() => {
    const newParent = document.getElementById('loanTakenDIV');
    newParent.appendChild(loanElement);
    const payOffButton = document.getElementById(`payOffLoanBtn${loan.id}`);
    payOffButton.classList.remove('hide');
  }, 500);
}

export function payOffLoan(loan) {
  if (loan.taken == false) return;
  const canPayOff = game.cash >= loan.amountToBeRepaid;
  if (canPayOff) {
    const interestPart = Math.round(
      (loan.amountToBeRepaid * loan.interest) / 100 / 12
    );
    calculateExpenses(interestPart, 'interest');
    calculateExpenses(loan.amountToBeRepaid, 'capital');

    loan.amountToBeRepaid = 0;
    loan.installmentsToEnd = 0;

    document.getElementById(
      `loanAmount${loan.id}`
    ).textContent = `$ ${loan.amountToBeRepaid.toLocaleString()}`;
    document.getElementById(
      `loanPeriod${loan.id}`
    ).textContent = `${loan.installmentsToEnd}`;
    loanEnd(loan);
  }
}
export function payInstallment(loan) {
  const interestPart = Math.round(
    (loan.amountToBeRepaid * loan.interest) / 100 / 12
  );
  loan.installmentsToEnd--;
  loan.amountToBeRepaid -= loan.capitalPart;
  calculateExpenses(interestPart, 'interest');
  calculateExpenses(loan.capitalPart, 'capital');
  if (loan.installmentsToEnd <= 0) {
    calculateExpenses(loan.amountToBeRepaid, 'capital');
    loan.amountToBeRepaid = 0;
    loanEnd(loan);
  }
  document.getElementById(
    `loanAmount${loan.id}`
  ).textContent = `$ ${loan.amountToBeRepaid.toLocaleString()}`;
  document.getElementById(
    `loanPeriod${loan.id}`
  ).textContent = `${loan.installmentsToEnd}`;
}

export function loanEnd(loan) {
  loan.taken = false;
  clearInterval(loan.intervalID);
  const loanElement = document.getElementById(`loanItem${loan.id}`);
  const payOffButton = document.getElementById(`payOffLoanBtn${loan.id}`);
  payOffButton.classList.add('hide');

  setTimeout(() => {
    const newParent = document.getElementById('loanDIV');
    newParent.appendChild(loanElement);
    loan.amount += 100000 * (loan.id + 1);
    loan.interest += 1;
    document.getElementById(
      `loanAmount${loan.id}`
    ).textContent = `$ ${loan.amount.toLocaleString()}`;
    document.getElementById(
      `loanPeriod${loan.id}`
    ).textContent = `${loan.period}`;
    document.getElementById(
      `loanInterest${loan.id}`
    ).textContent = `${loan.interest}%`;
    const takeButton = document.getElementById(`takeLoanBtn${loan.id}`);
    takeButton.classList.remove('hide');
  }, 1500);
}
