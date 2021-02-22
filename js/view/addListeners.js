export function addListeners(item) {
  switch (item.type) {
    case 'aircraft':
      addAircraftListeners.call(this, item);
      break;
    case 'design':
      addDesignListeners.call(this, item);
      break;
    case 'stockOffer':
      addStockOfferListeners.call(this, item);
      break;
    case 'delivery':
      addDeliveryListeners.call(this, item);
      break;

    default:
      break;
  }
}

function addAircraftListeners(item) {
  const sellAircraftButton = document.getElementById(
    `sellAircraftButton${item.id}`
  );
  sellAircraftButton.addEventListener('click', () => {
    this.sellAircraftEvent.publish(item.id);
  });

  const addWorkerButton = document.getElementById(`addWorkerButton${item.id}`);
  addWorkerButton.addEventListener('click', () => {
    this.addWorkerEvent.publish(item.id);
  });

  const removeWorkerButton = document.getElementById(
    `removeWorkerButton${item.id}`
  );
  removeWorkerButton.addEventListener('click', () => {
    this.removeWorkerEvent.publish(item.id);
  });
}

function addDesignListeners(item) {}

function addDeliveryListeners(item) {}

function addStockOfferListeners(item) {
  const buyStockButton = document.getElementById(`buy${item.type}${item.id}`);
  buyStockButton.addEventListener('click', () => {
    this.buyStockEvent.publish(item.id);
  });
}
