const cashElement = document.getElementById('cash'),
  partsElement = document.getElementById('parts'),
  dateElement = document.getElementById('date'),
  workersElement = document.getElementById('workers');

export class Display {
  constructor() {}

  cash(number) {
    cashElement.textContent =
      '$ ' +
      number.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
  }

  parts(number) {
    partsElement.textContent = number.toLocaleString(undefined, {
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

  /*   display_date() {
    let MM = this.date.getMonth() + 1;
    if (MM < 10) MM = '0' + MM;
    let DD = this.date.getDate();
    if (DD < 10) DD = '0' + DD;
    dateElement.textContent = this.date.getFullYear() + '-' + MM + '-' + DD;
  } */
}
