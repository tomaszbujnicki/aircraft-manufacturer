const aircraftDIV = document.getElementById('aircraftDIV'),
  cardCointainer = document.getElementById('cardCointainer'),
  closeCardBtn = document.getElementById('closeCardBtn'),
  closeEmployeeDescriptionBtn = document.getElementById(
    'closeEmployeeDescriptionBtn'
  ),
  employeeDescriptionContainer = document.getElementById(
    'employeeDescriptionContainer'
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
  partsMarketBtn = document.getElementById('partsMarketBtn'),
  employeeDescriptionBtns = [
    ...document.querySelectorAll('.employeeDescriptionButton'),
  ],
  employeeDescription = [...document.querySelectorAll('.employeeDescription')];

const OPEN = true,
  CLOSE = false;

const navTree = {
  aircraftDIV,
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
  closeEmployeeDescriptionBtn.addEventListener('click', () =>
    closeEmployeeDescription()
  );

  for (const button of employeeDescriptionBtns) {
    button.addEventListener('click', () =>
      openEmployeeDescription(button.value)
    );
  }
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
  show(cardCointainer);
  show(card);
}

function closeCard() {
  hide(cardCointainer);
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

function openEmployeeDescription(i) {
  employeeDescription.forEach((element) => hide(element));
  show(employeeDescriptionContainer);
  show(employeeDescription[i]);
}

function closeEmployeeDescription() {
  hide(employeeDescriptionContainer);
}
