export function controlViewEvents(view, model) {
  view.events.buyStock.subscribe((id) => {
    model.supplyChain.buyStock(id);
  });
  view.events.sellAircraft.subscribe((id) => {
    model.manufacture.sellAircraft(id);
  });
  view.events.assignWorker.subscribe((id) => {
    model.manufacture.assignWorker(id);
  });
  view.events.revokeWorker.subscribe((id) => {
    model.manufacture.revokeWorker(id);
  });
  view.events.hireEmployee.subscribe((id) => {
    model.humanResources.hire(id);
  });
  view.events.fireEmployee.subscribe((id) => {
    model.humanResources.fire(id);
  });
  view.events.speedLevel.subscribe((speed) => {
    model.time.setSpeedMultiplier(speed);
  });
}
