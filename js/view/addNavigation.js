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
  partsMarketBtn = document.getElementById('partsMarketBtn'),
  menuContainer = document.getElementById('menu'),
  gameContainer = document.getElementById('game'),
  newGameBtn = document.getElementById('new-button'),
  continueGameBtn = document.getElementById('continue-button'),
  settingsBtn = document.getElementById('settings-button'),
  creditsBtn = document.getElementById('credits-button'),
  settingsCard = document.getElementById('settingsCard'),
  creditsCard = document.getElementById('creditsCard'),
  menuCardContainer = document.getElementById('menuCardContainer'),
  closeMenuCardBtn = document.getElementById('closeMenuCardBtn'),
  menuList = document.getElementById('menuList');

export function addNavigation(view) {
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
  settingsBtn.addEventListener('click', () => openMenuCard(settingsCard));
  creditsBtn.addEventListener('click', () => openMenuCard(creditsCard));
  closeMenuCardBtn.addEventListener('click', () => closeMenuCards());
  newGameBtn.addEventListener('click', () => {
    view.events.startNewGame.publish();
    openContainer(gameContainer);
  });
  continueGameBtn.addEventListener('click', () => {
    view.events.continueGame.publish();
    openContainer(gameContainer);
  });
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

function closeEmployeeDetails() {
  hide(employeeDetailsContainer);
}

function openContainer(container) {
  hide(gameContainer);
  hide(menuContainer);
  show(container);
}

function openMenuCard(page) {
  hide(settingsCard);
  hide(creditsCard);
  hide(menuList);
  show(menuCardContainer);
  show(page);
}

function closeMenuCards() {
  hide(settingsCard);
  hide(creditsCard);
  hide(menuCardContainer);
  show(menuList);
}
