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
}
