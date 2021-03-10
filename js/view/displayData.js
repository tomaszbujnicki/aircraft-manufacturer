const cashElement = document.getElementById('cash'),
  partsElement = document.getElementById('parts'),
  dateElement = document.getElementById('date'),
  workersElement = document.getElementById('workers'),
  totalSalaryElement = document.getElementById('salarySummary__value');

export const displayData = {
  cash(number) {
    cashElement.textContent = `$ ${number.toLocaleString()}`;
  },

  parts(number) {
    partsElement.textContent = Math.floor(number).toLocaleString();
  },

  unassignedWorkers(number) {
    workersElement.textContent = number;
  },

  date(date) {
    let mm = date.getMinutes();
    if (mm < 10) mm = '0' + mm;
    let hh = date.getHours();
    if (hh < 10) hh = '0' + hh;
    let MM = date.getMonth() + 1;
    if (MM < 10) MM = '0' + MM;
    let DD = date.getDate();
    if (DD < 10) DD = '0' + DD;
    let YYYY = date.getFullYear();
    dateElement.textContent = `${hh}:${mm} ${DD}-${MM}-${YYYY}`;
  },

  totalSalary(sum) {
    totalSalaryElement.textContent = `$ ${sum.toLocaleString()}`;
  },
};
