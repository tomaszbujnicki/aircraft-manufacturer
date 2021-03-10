export function controlView(data, model, view) {
  const dataLists = [
    data.employees,
    data.stockOffers,
    data.deliveries,
    data.aircrafts,
    data.designs,
    data.loanOffers,
    data.loansTaken,
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

  model.time.stepEvent.subscribe(() => {
    view.displayData.date(data.date);
    view.displayData.cash(data.cash);
    view.displayData.parts(data.parts);
    view.displayData.unassignedWorkers(data.unassignedWorkers);
    view.displayData.totalSalary(data.totalSalary);

    dataLists.forEach((list) => {
      list.list.forEach((item) => view.displayElementData(item));
    });

    view.displayFinancialReports(data.monthlyReports, 'month');
    view.displayFinancialReports(data.annualReports, 'year');
  });
}
