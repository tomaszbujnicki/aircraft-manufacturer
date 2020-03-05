
class Loan {

	constructor(id, name, amount, interest, period) {
		this.id = id;
		this.name = name;
		this.amount = amount;
		this.interest = interest;
		this.period = period;
		this.amountToBeRepaid = amount;
		this.installmentsToEnd = period;
	}

	take() {
		const loan = this;
		calculateIncome(loan.amount, "other");
		document.getElementById(`takeLoanBtn${loan.id}`).textContent = "-";
		document.getElementById(`takeLoanBtn${loan.id}`).disabled = true;
		clickTrue(document.getElementById(`loanItem${loan.id}`));
		clickTrue(document.getElementById("dollars"));
		loan.payInstallment();
	}
	payInstallment() {
		const loan = this;
		const intervalID = setInterval(function () {
			const capitalPart = Math.round(loan.amount/loan.period )
			const interestPart = Math.round(loan.amountToBeRepaid*loan.interest/100/12)
			const installmentValue = capitalPart + interestPart;
			loan.installmentsToEnd--;
			loan.amountToBeRepaid -= capitalPart;
			calculateExpenses(installmentValue, "interest");
			console.log(capitalPart);
			console.log(interestPart);
			if (loan.installmentsToEnd <= 0) clearInterval(intervalID);
		}, dayTick);
	}
}

const loans = [];

loans[0] = new Loan(0,"Start-up loan",100000,6,12);
loans[1] = new Loan(1,"Investment loan",250000,12,24);
loans[2] = new Loan(2,"Asset loan",500000,18,36);
loans[3] = new Loan(3,"Corporate loan",1000000,24,48);

function createElementLoan(loan){

	if (!loan) return ;

	const loanElement = document.createElement("div");
	loanElement.setAttribute("id", "loanItem" + loan.id);
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