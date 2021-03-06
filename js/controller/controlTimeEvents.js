export function controlTimeEvents(model, data) {
  model.time.stepEvent.subscribe((timeProgressInHours) => {
    model.manufacture.makeAircrafts(timeProgressInHours);
    model.researchCenter.invent(timeProgressInHours);
  });

  model.time.dayEvent.subscribe(() => {
    model.supplyChain.nextDay();
    model.manufacture.nextDay();

    data.save();
  });

  model.time.weekEvent.subscribe(() => {
    model.humanResources.nextWeek();
    model.bank.nextWeek();
  });

  model.time.monthEvent.subscribe(() => {
    model.wallet.nextMonth();
  });

  model.time.yearEvent.subscribe(() => {
    model.wallet.nextYear();
  });
}
