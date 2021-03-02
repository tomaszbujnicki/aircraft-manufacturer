export function subscribeModel(model, view) {
  model.time.stepEvent.subscribe(({ date, timeProgressInHours }) => {
    view.display.date(date);
    model.manufacture.makeAircrafts(timeProgressInHours);
  });
  model.time.dayEvent.subscribe(() => {
    model.supplyChain.nextDay();
    model.manufacture.nextDay();
  });
  model.time.weekEvent.subscribe(() => {});
  model.time.monthEvent.subscribe(() => {});
  model.time.yearEvent.subscribe(() => {});
  model.manufacture.aircraftChangeEvent.subscribe((item) => {
    view.displayElementData(item);
    view.display.workers(model.humanResources.getUnassignedWorkers());
  });
  model.humanResources.employeeChangeEvent.subscribe((item) => {
    view.displayElementData(item);
    view.display.workers(model.humanResources.getUnassignedWorkers());
    view.display.totalSalary(model.humanResources.totalSalary());
  });
  model.supplyChain.stockChangeEvent.subscribe((item) => {
    view.displayElementData(item);
  });
}
