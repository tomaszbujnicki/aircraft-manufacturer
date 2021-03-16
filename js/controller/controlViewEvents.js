export function controlViewEvents(view, model, data) {
  view.events.startNewGame.subscribe(() => {
    data.newGame();
  });
  view.events.continueGame.subscribe(() => {
    data.continueGame();
  });
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
  view.events.takeLoan.subscribe((id) => {
    model.bank.takeLoan(id);
  });
  view.events.payOffLoan.subscribe((id) => {
    model.bank.payOffLoan(id);
  });

  view.events.speedLevel.subscribe((speed) => {
    model.time.setSpeedMultiplier(speed);
  });
}
