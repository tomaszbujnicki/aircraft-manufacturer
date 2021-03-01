const cashElement = document.getElementById('cash'),
  partsElement = document.getElementById('parts'),
  dateElement = document.getElementById('date'),
  workersElement = document.getElementById('workers'),
  totalSalaryElement = document.getElementById('salarySummary__value');

export default {
  cash(number) {
    cashElement.textContent = `$ ${number.toLocaleString()}`;
  },

  parts(number) {
    partsElement.textContent = number.toLocaleString();
  },

  workers(number) {
    workersElement.textContent = number;
  },

  date(date) {
    let MM = date.getMonth() + 1;
    if (MM < 10) MM = '0' + MM;
    let DD = date.getDate();
    if (DD < 10) DD = '0' + DD;
    dateElement.textContent = date.getFullYear() + '-' + MM + '-' + DD;
  },

  totalSalary(sum) {
    totalSalaryElement.textContent = `$ ${sum.toLocaleString()}`;
  },
};
