const cashElement = document.getElementById('cash'),
  partsElement = document.getElementById('parts'),
  dateElement = document.getElementById('date'),
  workersElement = document.getElementById('workers');

function cash(number) {
  cashElement.textContent =
    '$ ' +
    number.toLocaleString(undefined, {
      maximumFractionDigits: 0,
    });
}

function parts(number) {
  partsElement.textContent = number.toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });
}

function workers(number) {
  workersElement.textContent = number;
}

function date(date) {
  let MM = date.getMonth() + 1;
  if (MM < 10) MM = '0' + MM;
  let DD = date.getDate();
  if (DD < 10) DD = '0' + DD;
  dateElement.textContent = date.getFullYear() + '-' + MM + '-' + DD;
}

export { cash, parts, workers, date };
