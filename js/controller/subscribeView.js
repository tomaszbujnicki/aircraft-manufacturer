export function subscribeView(view, model) {
  view.buyStockEvent.subscribe((id) => {
    model.supplyChain.buyStock(id);
  });
  view.sellAircraftEvent.subscribe((id) => {
    model.manufacture.sellAircraft(id);
  });
  view.addWorkerEvent.subscribe((id) => {
    model.manufacture.addWorker(id);
  });
}
