export function subscribeData(data, view) {
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
      view.addListeners(item);
    });
  });

  dataLists.forEach((list) => {
    list.deleteEvent.subscribe((item) => {
      const element = document.getElementById(item.type + item.id);
      element.remove();
    });
  });

  data.cash.changeEvent.subscribe((number) => {
    view.display.cash(number);
  });

  data.parts.changeEvent.subscribe((number) => {
    view.display.parts(number);
  });
}
