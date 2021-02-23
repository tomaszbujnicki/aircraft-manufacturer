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

  const assignWorkerButton = document.getElementById(
    `assignWorkerButton${item.id}`
  );
  assignWorkerButton.addEventListener('click', () => {
    this.assignWorkerEvent.publish(item.id);
  });

  const revokeWorkerButton = document.getElementById(
    `revokeWorkerButton${item.id}`
  );
  revokeWorkerButton.addEventListener('click', () => {
    this.revokeWorkerEvent.publish(item.id);
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
