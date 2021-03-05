export function subscribeModel(data, model, view) {
  const dataLists = [
    data.employeeList,
    data.stockOfferList,
    data.deliveryList,
    data.aircraftList,
    data.designList,
    data.loanOfferList,
    data.loanTakenList,
  ];

  dataLists.forEach((list) => {
    list.insertEvent.subscribe((item) => {
      view.createElement(item);
    });
  });

  dataLists.forEach((list) => {
    list.deleteEvent.subscribe((item) => {
      const element = document.getElementById(item.type + item.id);
      element.remove();
    });
  });

  model.time.stepEvent.subscribe((timeProgressInHours) => {
    model.manufacture.makeAircrafts(timeProgressInHours);

    view.display.date(data.date);
    view.display.cash(data.cash.get());
    view.display.parts(data.parts.get());
    view.display.totalSalary(model.humanResources.getTotalSalary());
    view.display.workers(model.humanResources.getUnassignedWorkers());

    dataLists.forEach((list) => {
      list.list.forEach((item) => view.displayElementData(item));
    });
  });

  model.time.dayEvent.subscribe(() => {
    model.supplyChain.nextDay();
    model.manufacture.nextDay();
  });

  model.time.weekEvent.subscribe(() => {
    model.humanResources.salaryPayment();
  });

  model.time.monthEvent.subscribe(() => {});

  model.time.yearEvent.subscribe(() => {});
}
