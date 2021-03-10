import { images } from './assets';

export function displayElementData(item) {
  switch (item.type) {
    case 'employee':
      employee(item);
      break;
    case 'aircraft':
      aircraft(item);
      break;
    case 'design':
      design(item);
      break;
    case 'stockOffer':
      stockOffer(item);
      break;
    case 'delivery':
      delivery(item);
      break;

    default:
      break;
  }
}

function employee(item) {
  const number = document.getElementById('employeeNumber' + item.id);
  const salaryPerEmployee = document.getElementById(
    'salaryPerEmployee' + item.id
  );
  const salaryForGroup = document.getElementById('salaryForGroup' + item.id);

  number.textContent = item.number + ' / ' + item.maxNumber;
  salaryPerEmployee.textContent = '$ ' + item.salary;
  salaryForGroup.textContent = `$ ${(
    item.salary * item.number
  ).toLocaleString()}`;
}

function aircraft(item) {
  const workers = document.getElementById('workers' + item.id);
  const quantity = document.getElementById('quantity' + item.id);
  const price = document.getElementById('price' + item.id);

  workers.textContent = item.workers;
  quantity.textContent = item.quantity;
  price.textContent = `$ ${item.currentPrice.toLocaleString()}`;
  displayProgressBar('myBar' + item.id, item.partsCompleted, item.partsNeeded);
}

function design(item) {
  const inventionPointsRemaining = document.getElementById(
    'inventionPointsRemaining' + item.id
  );
  const IPRemaining =
    item.inventionPointsNeeded - item.inventionPointsCompleted;

  inventionPointsRemaining.textContent = Math.floor(IPRemaining);
  displayProgressBar(
    'inventBar' + item.id,
    item.inventionPointsCompleted,
    item.inventionPointsNeeded
  );
}

function delivery(item) {
  const daysToGo = document.getElementById('deliveryDaysToGo' + item.id);
  const img = document.getElementById(`deliveryShipping${item.id}`);

  daysToGo.textContent = `${item.daysToGo} days to go`;
  let image = images.ship;
  if (item.daysToGo < 20) image = images.movingTruck;
  if (item.daysToGo < 2) image = images.truckUnloading;
  let imgPosition = 95 - item.daysToGo;
  if (imgPosition < -5) imgPosition = -5;

  img.src = image;
  img.style = `left: ${imgPosition}%`;
}

function stockOffer(item) {
  const expires = document.getElementById('offer-expiry' + item.id);
  expires.textContent = item.daysUntilExpiry;
}

function displayProgressBar(barId, complited, total) {
  let percent = (complited / total) * 100;
  if (percent > 100) percent = 100;
  const element = document.getElementById(barId);
  element.style = 'width:' + percent.toString() + '%';
}
