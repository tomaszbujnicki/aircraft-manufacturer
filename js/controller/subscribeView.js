export function subscribeView(view, model) {
  view.buyStockEvent.subscribe((id) => {
    model.supplyChain.buyStock(id);
  });
  view.sellAircraftEvent.subscribe((id) => {
    model.manufacture.sellAircraft(id);
  });
  view.assignWorkerEvent.subscribe((id) => {
    model.manufacture.assignWorker(id);
  });
  view.revokeWorkerEvent.subscribe((id) => {
    model.manufacture.revokeWorker(id);
  });
  view.hireEmployeeEvent.subscribe((id) => {
    model.humanResources.hire(id);
  });
  view.fireEmployeeEvent.subscribe((id) => {
    model.humanResources.fire(id);
  });
  view.speedLevelEvent.subscribe((speed) => {
    model.time.setSpeedMultiplier(speed);
  });
}
