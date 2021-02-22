export function displayElementData(item) {
  switch (item.type) {
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

function displayAircraftData(item) {
  const workers = document.getElementById('workers' + item.id);
  const progressBar = document.getElementById('myBar' + item.id);
  const quantity = document.getElementById('quantity' + item.id);
  const price = document.getElementById('price' + item.id);
  workers.textContent = item.workers;
  //progressBar.textContent = item.;
  quantity.textContent = item.quantity;
  price.textContent = `$ ${item.currentPrice.toLocaleString()}`;
}

function displayDesignData(item) {}
function displayDeliveryData(item) {}
function displayStockOfferData(item) {}
