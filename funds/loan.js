
class Loan {

	constructor(id, name, amount, interest, period) {
		this.id = id;
		this.name = name;
		this.amount = amount;
		this.interest = interest;
		this.period = period;
	}

	take() {
		const loan = this;
		const loanElement = document.getElementById(`loanItem${loan.id}`);
		const buyButton = document.getElementById(`takeLoanBtn${loan.id}`);

		calculateIncome(loan.amount, "other");

		clickTrue(loanElement);
		disableElement(buyButton);
		clickTrue(document.getElementById("cash"));

		removeDOM_ELEMENT(loanElement)
		createLoanTaken(loan.id, loan.name, loan.amount, loan.interest, loan.period);

		delete loans[loan.id];
	}

	
}

const loan_coreValues = [
	{
		name: "Start-up loan",
		amount: 100000,
		interest: 6,
		period: 3
	},
	{
		name: "Investment loan",
		amount: 250000,
		interest: 12,
		period: 24
	},
	{
		name: "Asset loan",
		amount: 500000,
		interest: 18,
		period: 36
	},
	{
		name: "Corporate loan",
		amount: 1000000,
		interest: 24,
		period: 48
	},
]


const loans = [];

function createLoan(n){
	const core = loan_coreValues[n];
	if (!core) return ;
    const loan = new Loan(loans.length,core.name,core.amount,core.interest,core.period)
    loans.push(loan);
	createElementLoan(loan);
	// dodać zwiększanie kosztów
}
createLoan(0);
createLoan(1);
createLoan(2);
createLoan(4);
createLoan(2);
createLoan(-1);

function createElementLoan(loan){

	if (!loan) return ;

	const loanElement = document.createElement("div");
	loanElement.setAttribute("id", `loanItem${loan.id}`);
	loanElement.classList.add("loan");			
	loanElement.innerHTML = `
		<div class="employee__value" title="Loan name">${loan.name}</div>
		<div class="employee__value" title="loan amount">$ ${loan.amount}</div>
		<div class="employee__value" title="loan interest rate">${loan.interest}%</div>
		<div class="employee__value" title="loan repayment time">${loan.period}</div>
		<button id="takeLoanBtn${loan.id}" class="loanTakeButton" title="take a loan">take</button>
	`;

	document.getElementById("loanDIV").appendChild(loanElement);

	const takeLoanButton = document.getElementById(`takeLoanBtn${loan.id}`);

	takeLoanButton.addEventListener("click", ()=> {loan.take()} );

}
