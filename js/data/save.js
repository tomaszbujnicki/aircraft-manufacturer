export function save() {
  const data = {
    date: this.date.getTime(),
    hourInMilliseconds: this.hourInMilliseconds.get(),
    tax: this.tax.get(),
    cash: this.cash.get(),
    parts: this.parts.get(),
    employees: this.employeeList.list,
    stockOffers: this.stockOfferList.list,
    deliveries: this.deliveryList.list,
    aircrafts: this.aircraftList.list,
    designs: this.designList.list,
    loanOffers: this.loanOfferList.list,
    loanTaken: this.loanTakenList.list,
  };
  localStorage.setItem('data', JSON.stringify(data));
}
