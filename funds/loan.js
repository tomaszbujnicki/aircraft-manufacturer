function takeLoan(loan) {
	
	if (loan.taken == true) return ;
	loan.taken = true;
	calculateIncome(loan.amount, "loans");
	loan.installmentsToEnd = loan.period;
	loan.amountToBeRepaid = loan.amount;
	loan.capitalPart = Math.round(loan.amount/loan.period);
	loan.intervalID = setInterval( ()=> payInstallment(loan), dayTick*2);

	const loanElement = document.getElementById(`loanItem${loan.id}`);
	const takeButton = document.getElementById(`takeLoanBtn${loan.id}`);
	takeButton.classList.add("hide");
	clickTrue(loanElement);
	clickTrue(document.getElementById("cash"));

	setTimeout(() => {

		const newParent = document.getElementById('loanTakenDIV');
		newParent.appendChild(loanElement);
		clickTrue(loanElement);
		const payOffButton = document.getElementById(`payOffLoanBtn${loan.id}`);
		payOffButton.classList.remove("hide");

	}, 500);
}

function payOffLoan(loan){
	if (loan.taken == false) return ;
	const canPayOff = cash >= loan.amountToBeRepaid;
	if (canPayOff) {
		const interestPart = Math.round(loan.amountToBeRepaid*loan.interest/100/12);
		calculateExpenses(interestPart,"interest");
		calculateExpenses(loan.amountToBeRepaid,"capital");

		loan.amountToBeRepaid = 0;
		loan.installmentsToEnd = 0;

		document.getElementById(`loanAmount${loan.id}`).textContent = `$ ${loan.amountToBeRepaid.toLocaleString()}`;
		document.getElementById(`loanPeriod${loan.id}`).textContent = `${loan.installmentsToEnd}`;
		loanEnd(loan);
	}
	else{
		clickFalse(document.getElementById(`loanItem${loan.id}`));
		clickFalse(document.getElementById("cash"));
	}
}

function payInstallment(loan) {
	const interestPart = Math.round(loan.amountToBeRepaid*loan.interest/100/12);
	loan.installmentsToEnd--;
	loan.amountToBeRepaid -= loan.capitalPart;
	calculateExpenses(interestPart, "interest");
	calculateExpenses(loan.capitalPart, "capital");
	if (loan.installmentsToEnd <= 0) {
		calculateExpenses(loan.amountToBeRepaid, "capital");
		loan.amountToBeRepaid = 0;
		loanEnd(loan);
	}
	document.getElementById(`loanAmount${loan.id}`).textContent = `$ ${loan.amountToBeRepaid.toLocaleString()}`;
	document.getElementById(`loanPeriod${loan.id}`).textContent = `${loan.installmentsToEnd}`;
}

function loanEnd(loan){
	loan.taken = false;
	clearInterval(loan.intervalID);
	const loanElement = document.getElementById(`loanItem${loan.id}`);
	clickTrue(loanElement);
	const payOffButton = document.getElementById(`payOffLoanBtn${loan.id}`);
	payOffButton.classList.add("hide");

	setTimeout(() => {

		const newParent = document.getElementById('loanDIV');
		newParent.appendChild(loanElement);
		clickTrue(loanElement);
		loan.amount += 100000 * (loan.id + 1);
		loan.interest += 1;
		document.getElementById(`loanAmount${loan.id}`).textContent = `$ ${loan.amount.toLocaleString()}`;
		document.getElementById(`loanPeriod${loan.id}`).textContent = `${loan.period}`;
		document.getElementById(`loanInterest${loan.id}`).textContent = `${loan.interest}%`;
		const takeButton = document.getElementById(`takeLoanBtn${loan.id}`);
		takeButton.classList.remove("hide");

	}, 1500);
}

const loanList = [
	{
		id: 0,
		name: "Start-up loan",
		amount: 100000,
		interest: 6,
		period: 12,
		taken: false
	},
	{
		id: 1,
		name: "Investment loan",
		amount: 250000,
		interest: 10,
		period: 24,
		taken: false
	},
	{
		id: 2,
		name: "Asset loan",
		amount: 500000,
		interest: 14,
		period: 36,
		taken: false
	},
	{
		id: 3,
		name: "Corporate loan",
		amount: 1000000,
		interest: 16,
		period: 48,
		taken: false
	}
]

function createElementLoan(loan) {

	if (!loan) return;

	const loanElement = document.createElement("div");
	loanElement.setAttribute("id", `loanItem${loan.id}`);
	loanElement.classList.add("loan");
	loanElement.innerHTML = `
		<div class="employee__value" title="Loan name">${loan.name}</div>
		<div id="loanAmount${loan.id}" class="employee__value" title="loan amount">$ ${loan.amount.toLocaleString()}</div>
		<div id="loanInterest${loan.id}" class="employee__value" title="loan interest rate">${loan.interest}%</div>
		<div id="loanPeriod${loan.id}" class="employee__value" title="loan repayment time">${loan.period}</div>
		<button id="takeLoanBtn${loan.id}" class="loanTakeButton" title="take a loan"></button>
		<button id="payOffLoanBtn${loan.id}" class="loanPayOffButton hide" title="pay off the loan early"></button>
	`;

	document.getElementById("loanDIV").appendChild(loanElement);

	const takeLoanButton = document.getElementById(`takeLoanBtn${loan.id}`);
	takeLoanButton.addEventListener( "click", () => takeLoan(loan) );
	const payOffLoanButton = document.getElementById(`payOffLoanBtn${loan.id}`);
	payOffLoanButton.addEventListener( "click", ()=> payOffLoan(loan) );

}