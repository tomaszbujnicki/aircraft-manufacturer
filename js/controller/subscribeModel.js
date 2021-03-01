export function subscribeModel(model, view) {
  model.manufacture.aircraftChangeEvent.subscribe((item) => {
    view.displayElementData(item);
  });
  model.humanResources.employeeChangeEvent.subscribe((item) => {
    view.displayElementData(item);
    view.display.totalSalary(model.humanResources.totalSalary());
  });
}
