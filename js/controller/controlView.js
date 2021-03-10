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
    view.display.date(data.date);
    view.display.cash(data.cash);
    view.display.parts(data.parts);

    view.display.totalSalary(data.totalSalary);
    view.display.workers(data.unassignedWorkers);

    dataLists.forEach((list) => {
      list.list.forEach((item) => view.displayElementData(item));
    });

    displayRaports(data.monthlyReports, view.monthlyReportShift, 'month');
    displayRaports(data.annualReports, view.annualReportShift, 'year');

    function displayRaports(raports, shift, period) {
      for (let i = 0; i < 3; i++) {
        view.displayReport(raports[shift + i], period + i);
      }
    }
  });
}
