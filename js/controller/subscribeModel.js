export function subscribeModel(model, view) {
  model.manufacture.aircraftChangeEvent.subscribe((item) => {
    view.displayElementData(item);
  });
  model.humanResources.employeeChangeEvent.subscribe((item) => {
    view.displayElementData(item);
    view.displayTotalSalary(model.humanResources.totalSalary());
  });
}
