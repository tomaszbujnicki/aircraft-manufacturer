export function loanTakenContent(item) {
  return `
<div class="employee__value" title="Loan name">${item.name}</div>
<div id="loanAmount${item.id}" class="employee__value" title="loan amount"></div>
<div id="loanInterest${item.id}" class="employee__value" title="loan interest rate">${item.interestRate}%</div>
<div id="loanPeriod${item.id}" class="employee__value" title="loan repayment time"></div>
<button id="payOffLoanBtn${item.id}" class="loanPayOffButton" title="pay off the loan early"></button>
`;
}
