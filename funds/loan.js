
class Loan {

	constructor(id, name, amount, interest, period, coreId) {
		this.id = id;
		this.name = name;
		this.amount = amount;
		this.interest = interest;
		this.period = period;
		this.coreId = coreId;
	}

	take() {
		const loan = this;
		const loanElement = document.getElementById(`loanItem${loan.id}`);
		const buyButton = document.getElementById(`takeLoanBtn${loan.id}`);

		calculateIncome(loan.amount, "loans");

		clickTrue(loanElement);
		disableElement(buyButton);
		clickTrue(document.getElementById("cash"));

		removeDOM_ELEMENT(loanElement)
		createLoanTaken(loan.id, loan.name, loan.amount, loan.interest, loan.period, loan.coreId);

		delete loans[loan.id];
	}

	
}

const loan_coreValues = [
	{
		coreId: 0,
		name: "Start-up loan",
		amount: 100000,
		interest: 6,
		period: 12
	},
	{
		coreId: 1,
		name: "Investment loan",
		amount: 250000,
		interest: 10,
		period: 24
	},
	{
		coreId: 2,
		name: "Asset loan",
		amount: 500000,
		interest: 14,
		period: 36
	},
	{
		coreId: 3,
		name: "Corporate loan",
		amount: 1000000,
		interest: 16,
		period: 48
	},
]


const loans = [];

function createLoan(core){
	if (!core) return ;
    const newLoan = new Loan(loans.length,core.name,core.amount,core.interest,core.period,core.coreId)
    loans.push(newLoan);
	createElementLoan(newLoan);
	updateCore(core);
}

function updateCore(core){
	core.amount += 100000*(core.coreId+1);
	core.interest += 2;
}

function createElementLoan(loan){

	if (!loan) return ;

	const loanElement = document.createElement("div");
	loanElement.setAttribute("id", `loanItem${loan.id}`);
	loanElement.classList.add("loan");			
	loanElement.innerHTML = `
		<div class="employee__value" title="Loan name">${loan.name}</div>
		<div class="employee__value" title="loan amount">$ ${loan.amount.toLocaleString()}</div>
		<div class="employee__value" title="loan interest rate">${loan.interest}%</div>
		<div class="employee__value" title="loan repayment time">${loan.period}</div>
		<button id="takeLoanBtn${loan.id}" class="loanTakeButton" title="take a loan"></button>
	`;

	document.getElementById("loanDIV").appendChild(loanElement);

	const takeLoanButton = document.getElementById(`takeLoanBtn${loan.id}`);

	takeLoanButton.addEventListener("click", ()=> {loan.take()} );

}
