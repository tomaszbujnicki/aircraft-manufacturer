export function loanOfferContent(item) {
  return `
<div class="employee__value" title="Loan name">${item.name}</div>
<div id="loanAmount${
    item.id
  }" class="employee__value" title="loan amount">$ ${item.amount.toLocaleString()}</div>
<div id="loanInterest${
    item.id
  }" class="employee__value" title="loan interest rate">${
    item.interestRate
  }%</div>
<div id="loanPeriod${
    item.id
  }" class="employee__value" title="loan repayment time">${
    item.repaymentPeriod
  }</div>
<button id="takeLoanBtn${
    item.id
  }" class="loanTakeButton" title="take a loan"></button>
`;
}
