const cashElement = document.getElementById('cash'),
  partsElement = document.getElementById('parts'),
  dateElement = document.getElementById('date'),
  workersElement = document.getElementById('workers');

export class Display {
  constructor(data) {
    this.data = data;
  }

  cash() {
    cashElement.textContent =
      '$ ' +
      this.data.cash.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
  }

  parts() {
    partsElement.textContent = this.data.parts.quantity.toLocaleString(
      undefined,
      {
        maximumFractionDigits: 0,
      }
    );
  }

  availableWorkers() {
    workersElement.textContent = calculateAvailableWorkers();
  }

  workers(aircraft) {
    document.getElementById('workers' + aircraft.id).textContent =
      aircraft.workers;
  }

  date() {
    let MM = this.data.date.getMonth() + 1;
    if (MM < 10) MM = '0' + MM;
    let DD = this.data.date.getDate();
    if (DD < 10) DD = '0' + DD;
    dateElement.textContent =
      this.data.date.getFullYear() + '-' + MM + '-' + DD;
  }
}
