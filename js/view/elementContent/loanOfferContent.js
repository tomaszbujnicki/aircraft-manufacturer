export function loanOfferContent(item) {
  return `
<div class="employee__value" title="Loan name">${item.name}</div>
<div id="loanOfferAmount${
    item.id
  }" class="employee__value" title="loan amount">$ ${item.amount.toLocaleString()}</div>
<div id="loanOfferInterest${
    item.id
  }" class="employee__value" title="loan interest rate">${
    item.interestRate
  }%</div>
<div id="loanOfferPeriod${
    item.id
  }" class="employee__value" title="loan repayment time">${
    item.repaymentPeriod
  }</div>
<button id="takeLoanBtn${
    item.id
  }" class="loanTakeButton" title="take a loan"></button>
`;
}
