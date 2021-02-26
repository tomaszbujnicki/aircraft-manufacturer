import ship from '../../img/parts/ship.svg';
import truck from '../../img/parts/truck.svg';
import truck2 from '../../img/parts/truck2.svg';

export function displayElementData(item) {
  switch (item.type) {
    case 'employee':
      displayEmployeeData(item);
      break;
    case 'aircraft':
      displayAircraftData(item);
      break;
    case 'design':
      displayDesignData(item);
      break;
    case 'stockOffer':
      displayStockOfferData(item);
      break;
    case 'delivery':
      displayDeliveryData(item);
      break;

    default:
      break;
  }
}

function displayEmployeeData(item) {
  const number = document.getElementById('employeeNumber' + item.id);
  const salaryPerEmployee = document.getElementById(
    'salaryPerEmployee' + item.id
  );
  const salaryForGroup = document.getElementById('salaryForGroup' + item.id);
  const salaryTotal = document.getElementById('salaryTotal');

  number.textContent = item.number;
  salaryPerEmployee.textContent = '$ ' + item.salary;
  salaryForGroup.textContent = `$ ${(
    item.salary * item.number
  ).toLocaleString()}`;
}

function displayAircraftData(item) {
  const workers = document.getElementById('workers' + item.id);
  const quantity = document.getElementById('quantity' + item.id);
  const price = document.getElementById('price' + item.id);

  workers.textContent = item.workers;
  quantity.textContent = item.quantity;
  price.textContent = `$ ${item.currentPrice.toLocaleString()}`;
  displayProgressBar('myBar' + item.id, item.partsCompleted, item.partsNeeded);
}

function displayDesignData(item) {
  const inventionPointsRemaining = document.getElementById(
    'inventionPointsRemaining' + item.id
  );
  const IPReamining =
    item.inventionPointsNeeded - item.inventionPointsCompleted;

  inventionPointsRemaining.textContent = IPReamining;
  displayProgressBar(
    'inventBar' + item.id,
    item.inventionPointsCompleted,
    item.inventionPointsNeeded
  );
}

function displayDeliveryData(item) {
  const daysToGo = document.getElementById('deliveryDaysToGo' + item.id);
  const img = document.getElementById(`deliveryShipping${item.id}`);

  daysToGo.textContent = `${item.daysToGo} days to go`;
  let image = ship;
  if (item.daysToGo < 20) image = truck;
  if (item.daysToGo < 2) image = truck2;
  let imgPosition = 95 - item.daysToGo;
  if (imgPosition < -5) imgPosition = -5;

  img.src = image;
  img.style = `left: ${imgPosition}%`;
}

function displayStockOfferData(item) {
  const expires = document.getElementById('offer-expiry' + item.id);
  expires.textContent = item.daysUntilExpiry;
}

function displayProgressBar(barId, complited, total) {
  let percent = (complited / total) * 100;
  if (percent > 100) percent = 100;
  const element = document.getElementById(barId);
  element.style = 'width:' + percent.toString() + '%';
}
