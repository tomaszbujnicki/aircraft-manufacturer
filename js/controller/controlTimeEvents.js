export function controlTimeEvents(model) {
  model.time.stepEvent.subscribe((timeProgressInHours) => {
    model.manufacture.makeAircrafts(timeProgressInHours);
    model.researchCenter.invent(timeProgressInHours);
  });

  model.time.dayEvent.subscribe(() => {
    model.supplyChain.nextDay();
    model.manufacture.nextDay();
  });

  model.time.weekEvent.subscribe(() => {
    model.wallet.salaryPayment();
  });

  model.time.monthEvent.subscribe(() => {});

  model.time.yearEvent.subscribe(() => {});
}
