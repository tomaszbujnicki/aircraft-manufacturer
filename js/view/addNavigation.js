const aircraftDIV = document.getElementById('aircraftDIV'),
  cardContainer = document.getElementById('cardContainer'),
  closeCardBtn = document.getElementById('closeCardBtn'),
  closeEmployeeDetailsBtn = document.getElementById('closeEmployeeDetailsBtn'),
  employeeDetailsContainer = document.getElementById(
    'employeeDetailsContainer'
  ),
  employeeInventions = document.getElementById('employeeInventions'),
  employeeInventionsBtn = document.getElementById('employeeInventionsBtn'),
  employeeReview = document.getElementById('employeeReview'),
  employeeReviewBtn = document.getElementById('employeeReviewBtn'),
  employeesBtn = document.getElementById('employeesCardBtn'),
  employeesCard = document.getElementById('employeesCard'),
  financesAwards = document.getElementById('financesAwards'),
  financesAwardsBtn = document.getElementById('financesAwardsBtn'),
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
  financesAwardsBtn.addEventListener('click', () =>
    openFinances(financesAwards)
  );
  employeeReviewBtn.addEventListener('click', () =>
    openEmployees(employeeReview)
  );
  employeeInventionsBtn.addEventListener('click', () =>
    openEmployees(employeeInventions)
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
  hide(financesAwards);
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
