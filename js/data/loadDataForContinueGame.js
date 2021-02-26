export function loadDataForContinueGame(data) {
  this.date.setTime(data.date);
  this.hourInMilliseconds.add(data.hourInMilliseconds);
  this.tax.add(data.tax);
  this.cash.add(data.cash);
  this.parts.add(data.parts);

  for (const item of data.employees) {
    this.employeeList.insert(item);
  }
  for (const item of data.stockOffers) {
    this.stockOfferList.insert(item);
  }
  for (const item of data.deliveries) {
    this.deliveryList.insert(item);
  }
  for (const item of data.aircrafts) {
    this.aircraftList.insert(item);
  }
  for (const item of data.designs) {
    this.designList.insert(item);
  }
  for (const item of data.loanOffers) {
    this.loanOfferList.insert(item);
  }
  for (const item of data.loanTaken) {
    this.loanTakenList.insert(item);
  }
}
