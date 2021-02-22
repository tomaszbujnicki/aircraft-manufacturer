function createElementLoanOffer(loan) {
  const takeLoanButton = document.getElementById(`takeLoanBtn${loan.id}`);
  takeLoanButton.addEventListener('click', () => takeLoan(loan));
  const payOffLoanButton = document.getElementById(`payOffLoanBtn${loan.id}`);
  payOffLoanButton.addEventListener('click', () => payOffLoan(loan));
}
