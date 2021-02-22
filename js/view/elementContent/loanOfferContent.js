export function loanOfferContent(item) {
  return `
<div class="employee__value" title="Loan name">${loan.name}</div>
<div id="loanAmount${
    loan.id
  }" class="employee__value" title="loan amount">$ ${loan.amount.toLocaleString()}</div>
<div id="loanInterest${
    loan.id
  }" class="employee__value" title="loan interest rate">${loan.interest}%</div>
<div id="loanPeriod${
    loan.id
  }" class="employee__value" title="loan repayment time">${loan.period}</div>
<button id="takeLoanBtn${
    loan.id
  }" class="loanTakeButton" title="take a loan"></button>
<button id="payOffLoanBtn${
    loan.id
  }" class="loanPayOffButton hide" title="pay off the loan early"></button>
`;
}
