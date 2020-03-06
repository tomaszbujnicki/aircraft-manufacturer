function createLoanTaken(id, name,amount, interest, period){
    const capitalPart = Math.round(amount/period);
    const loanTaken = new LoanTaken(id, name, amount, interest, period, capitalPart)
    loanTaken.intervalID = setInterval(function () {loanTaken.payInstallment()}, dayTick);
    loansTaken.push(loanTaken);
    createElementLoanTaken(loanTaken);
}
   
const loansTaken = [];

class LoanTaken {

	constructor(id, name, amount, interest, period, capitalPart) {
		this.id = id;
		this.name = name;
		this.interest = interest;
		this.amountToBeRepaid = amount;
        this.installmentsToEnd = period;
        this.capitalPart = capitalPart;
	}

	payInstallment() {
		const loan = this;
        const interestPart = Math.round(loan.amountToBeRepaid*loan.interest/100/12);
        loan.installmentsToEnd--;
        loan.amountToBeRepaid -= loan.capitalPart;
        calculateExpenses(interestPart, "interest");
        calculateExpenses(loan.capitalPart, "other");
        if (loan.installmentsToEnd <= 0) {
            calculateExpenses(loan.amountToBeRepaid, "other");
            loan.amountToBeRepaid = 0;
            loan.end();
        }
        loan.show();
	}

	show(){
		const loan = this;
		document.getElementById(`loanTakenAmount${loan.id}`).textContent = `$ ${loan.amountToBeRepaid}`;
		document.getElementById(`loanTakenInstallments${loan.id}`).textContent = `${loan.installmentsToEnd}`;
	}

	end(){
		const loan = this;
        clearInterval(loan.intervalID);

        const payOffLoanButton = document.getElementById(`payOffLoanBtn${loan.id}`);
        disableElement(payOffLoanButton);
        
        const loanElement = document.getElementById(`loanTakenItem${loan.id}`);
        removeDOM_ELEMENT(loanElement);
        createElementLoan(loans[loan.id]);
        delete loansTaken[loan.id];
	}
	
	payOff(){
        const loan = this;
        const amount = loan.amountToBeRepaid;
		const canIPayOff = cash >= amount;
		if (canIPayOff) {
            clickTrue(document.getElementById(`loanTakenItem${loan.id}`));
			calculateExpenses(amount,"other");
			const commission = Math.round(amount*loan.interest/100/12);
			calculateExpenses(commission,"interest");
			loan.amountToBeRepaid = 0;
			loan.installmentsToEnd = 0;
			loan.end();
			loan.show();
		}
		else{
			clickFalse(document.getElementById(`loanTakenItem${loan.id}`));
			clickFalse(document.getElementById("cash"));
		}
	}
}

function createElementLoanTaken(loan){
	if (!loan) return ;

	const loanElement = document.createElement("div");
	loanElement.setAttribute("id", `loanTakenItem${loan.id}`);
	loanElement.classList.add("loan");
	loanElement.innerHTML = `
	<div class="employee__value" title="Loan name">${loan.name}</div>
	<div id="loanTakenAmount${loan.id}" class="employee__value" title="how much is left to pay">$ ${loan.amountToBeRepaid}</div>
	<div class="employee__value" title="loan interest rate">${loan.interest}%</div>
	<div id="loanTakenInstallments${loan.id}" class="employee__value" title="how many installments are left">${loan.installmentsToEnd}</div>
	<button id="payOffLoanBtn${loan.id}" class="loanTakeButton" title="pay off the loan early">pay off</button>
	`;

	document.getElementById("loanTakenDIV").appendChild(loanElement);

	const payOffLoanButton = document.getElementById(`payOffLoanBtn${loan.id}`);

	payOffLoanButton.addEventListener("click", ()=> {loan.payOff()} );

}