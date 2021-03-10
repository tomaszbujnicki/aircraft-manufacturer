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
    dateElement.textContent = date.toLocaleString('default', {
      weekday: 'short',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
    });
  },

  totalSalary(sum) {
    totalSalaryElement.textContent = `$ ${sum.toLocaleString()}`;
  },
};
