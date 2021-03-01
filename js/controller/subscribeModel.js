export function subscribeModel(model, view) {
  model.time.stepEvent.subscribe(({ date, timeProgress }) => {
    view.display.date(date);
    model.manufacture.makeAircrafts(timeProgress);
  });
  model.manufacture.aircraftChangeEvent.subscribe((item) => {
    view.displayElementData(item);
    view.display.workers(model.humanResources.getUnassignedWorkers());
  });
  model.humanResources.employeeChangeEvent.subscribe((item) => {
    view.displayElementData(item);
    view.display.workers(model.humanResources.getUnassignedWorkers());
    view.display.totalSalary(model.humanResources.totalSalary());
  });
}
