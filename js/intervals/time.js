export function newDay() {
  date.setTime(date.getTime() + 86400000);
  showDate();
  if (date.getDate() == 1) newMonth();
  if (date.getDay() == 0) payment();

  showDeliveryStage();
  raiseAircraftPrice();
  inventAircraft();
  showActualBudget();
  createNewStockMaybe();

  if (availableParts < 100) clickFalse(document.getElementById('parts'));
}

export function newMonth() {
  payTax();
  saveMonth();
  showMonthlyFinancialReport();
  if (date.getMonth() == 0) newYear();
}

export function newYear() {
  saveYear();
  showAnnualFinancialReport();
}
