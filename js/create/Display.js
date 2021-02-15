const cashElement = document.getElementById('cash'),
  partsElement = document.getElementById('parts'),
  dateElement = document.getElementById('date'),
  workersElement = document.getElementById('workers');

export class Display {
  constructor(cash, parts, tax, date) {
    this.cash = cash;
    this.parts = parts;
    this.tax = tax;
    this.date = date;
  }

  display_cash() {
    cashElement.textContent =
      '$ ' +
      this.cash.get().toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
  }

  display_parts() {
    partsElement.textContent = this.parts.get().toLocaleString(undefined, {
      maximumFractionDigits: 0,
    });
  }

  availableWorkers() {
    workersElement.textContent = calculateAvailableWorkers();
  }

  workers(aircraft) {
    document.getElementById('workers' + aircraft.id).textContent =
      aircraft.workers;
  }

  display_date() {
    let MM = this.date.getMonth() + 1;
    if (MM < 10) MM = '0' + MM;
    let DD = this.date.getDate();
    if (DD < 10) DD = '0' + DD;
    dateElement.textContent = this.date.getFullYear() + '-' + MM + '-' + DD;
  }
}
