const financesBtn = document.getElementById('financesCardBtn'),
  employeesBtn = document.getElementById('employeesCardBtn'),
  partsBtn = document.getElementById('partsCardBtn'),
  closeCardBtn = document.getElementById('closeCardBtn'),
  employeesCard = document.getElementById('employeesCard'),
  financesCard = document.getElementById('financesCard'),
  partsCard = document.getElementById('partsCard'),
  aircraftDIV = document.getElementById('aircraftDIV'),
  cardCointainer = document.getElementById('cardCointainer'),
  partsMarketBtn = document.getElementById('partsMarketBtn'),
  partsDeliveryBtn = document.getElementById('partsDeliveryBtn'),
  partsMarket = document.getElementById('partsMarket'),
  partsDelivery = document.getElementById('partsDelivery');

const OPEN = true,
  CLOSE = false;

const navTree = {
  aircraftDIV: OPEN,
  cardCointainer: {
    financesCard,
    employeesCard,
    partsCard: {
      partsMarket,
      partsDelivery,
    },
  },
};

export function navigation() {
  financesBtn.addEventListener('click', () => openCard(financesCard));
  employeesBtn.addEventListener('click', () => openCard(employeesCard));
  partsBtn.addEventListener('click', () => openCard(partsCard));
  closeCardBtn.addEventListener('click', () => closeCard());
  partsMarketBtn.addEventListener('click', () => openParts('partsMarket'));
  partsDeliveryBtn.addEventListener('click', () => openParts('partsDelivery'));
}

function openCard(card) {
  financesCard.classList.add('hide');
  employeesCard.classList.add('hide');
  partsCard.classList.add('hide');
  aircraftDIV.classList.add('hide');

  cardCointainer.classList.remove('hide');
  card.classList.remove('hide');
}

function closeCard() {
  document.getElementById('cardCointainer').classList.add('hide');
  document.getElementById('aircraftDIV').classList.remove('hide');
}

function openParts(page) {
  partsMarket.classList.add('hide');
  partsDelivery.classList.add('hide');

  document.getElementById(page).classList.remove('hide');
}

document
  .getElementById('financesMonthsBtn')
  .addEventListener('click', () => openFinances('financesMonths'));
document
  .getElementById('financesYearsBtn')
  .addEventListener('click', () => openFinances('financesYears'));
document
  .getElementById('financesBankBtn')
  .addEventListener('click', () => openFinances('financesBank'));
document
  .getElementById('financesAwardsBtn')
  .addEventListener('click', () => openFinances('financesAwards'));

function openFinances(page) {
  document.getElementById('financesMonths').classList.add('hide');
  document.getElementById('financesYears').classList.add('hide');
  document.getElementById('financesBank').classList.add('hide');
  document.getElementById('financesAwards').classList.add('hide');

  document.getElementById(page).classList.remove('hide');
}

document
  .getElementById('employeeReviewBtn')
  .addEventListener('click', () => openEmployees('employeeReview'));
document
  .getElementById('employeeInventionsBtn')
  .addEventListener('click', () => openEmployees('employeeInvention'));

function openEmployees(page) {
  document.getElementById('employeeReview').classList.add('hide');
  document.getElementById('employeeInvention').classList.add('hide');

  document.getElementById(page).classList.remove('hide');
}

document
  .getElementById('closeEmployeeDescriptionBtn')
  .addEventListener('click', () => closeEmployeeDescription());
for (let i = 0; i < 5; i++) {
  const button = document.getElementById('employeeCard' + i);
  button.addEventListener('click', () => openEmployeeDescription(i));
}

function openEmployeeDescription(i) {
  const allCards = document.querySelectorAll('.employeeDescription');
  allCards.forEach((element) => element.classList.add('hide'));

  document
    .getElementById('employeeDescriptionContainer')
    .classList.remove('hide');
  document.getElementById('employeeDescription' + i).classList.remove('hide');
}

function closeEmployeeDescription() {
  document.getElementById('employeeDescriptionContainer').classList.add('hide');
}
