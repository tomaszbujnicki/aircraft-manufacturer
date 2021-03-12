const aircraftDIV = document.getElementById('aircraftDIV'),
  cardContainer = document.getElementById('cardContainer'),
  closeCardBtn = document.getElementById('closeCardBtn'),
  closeEmployeeDetailsBtn = document.getElementById('closeEmployeeDetailsBtn'),
  employeeDetailsContainer = document.getElementById(
    'employeeDetailsContainer'
  ),
  designsCard = document.getElementById('designsCard'),
  designsBtn = document.getElementById('designsCardBtn'),
  employeesBtn = document.getElementById('employeesCardBtn'),
  employeesCard = document.getElementById('employeesCard'),
  financesLoansTaken = document.getElementById('financesLoansTaken'),
  financesLoansTakenBtn = document.getElementById('financesLoansTakenBtn'),
  financesBank = document.getElementById('financesBank'),
  financesBankBtn = document.getElementById('financesBankBtn'),
  financesBtn = document.getElementById('financesCardBtn'),
  financesCard = document.getElementById('financesCard'),
  financesMonths = document.getElementById('financesMonths'),
  financesMonthsBtn = document.getElementById('financesMonthsBtn'),
  financesYears = document.getElementById('financesYears'),
  financesYearsBtn = document.getElementById('financesYearsBtn'),
  partsBtn = document.getElementById('partsCardBtn'),
  partsCard = document.getElementById('partsCard'),
  partsDelivery = document.getElementById('partsDelivery'),
  partsDeliveryBtn = document.getElementById('partsDeliveryBtn'),
  partsMarket = document.getElementById('partsMarket'),
  partsMarketBtn = document.getElementById('partsMarketBtn');

export function addNavigation() {
  designsBtn.addEventListener('click', () => openCard(designsCard));
  financesBtn.addEventListener('click', () => openCard(financesCard));
  employeesBtn.addEventListener('click', () => openCard(employeesCard));
  partsBtn.addEventListener('click', () => openCard(partsCard));
  closeCardBtn.addEventListener('click', () => closeCard());
  partsMarketBtn.addEventListener('click', () => openParts(partsMarket));
  partsDeliveryBtn.addEventListener('click', () => openParts(partsDelivery));
  financesMonthsBtn.addEventListener('click', () =>
    openFinances(financesMonths)
  );
  financesYearsBtn.addEventListener('click', () => openFinances(financesYears));
  financesBankBtn.addEventListener('click', () => openFinances(financesBank));
  financesLoansTakenBtn.addEventListener('click', () =>
    openFinances(financesLoansTaken)
  );
  closeEmployeeDetailsBtn.addEventListener('click', () =>
    closeEmployeeDetails()
  );
}

function hide(element) {
  element.classList.add('hide');
}
function show(element) {
  element.classList.remove('hide');
}

function openCard(card) {
  hide(financesCard);
  hide(employeesCard);
  hide(partsCard);
  hide(designsCard);
  hide(aircraftDIV);
  show(cardContainer);
  show(card);
}

function closeCard() {
  hide(cardContainer);
  show(aircraftDIV);
}

function openParts(page) {
  hide(partsMarket);
  hide(partsDelivery);
  show(page);
}

function openFinances(page) {
  hide(financesMonths);
  hide(financesYears);
  hide(financesBank);
  hide(financesLoansTaken);
  show(page);
}

function openEmployees(page) {
  hide(employeeReview);
  hide(employeeInventions);
  show(page);
}

function closeEmployeeDetails() {
  hide(employeeDetailsContainer);
}
