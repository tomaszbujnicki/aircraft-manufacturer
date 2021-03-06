const types = [
  'date',
  'sale',
  'loans',
  'prizes',
  'salaries',
  'recruitment',
  'parts',
  'interest',
  'capital',
  'taxes',
  'income',
  'expenses',
  'profit',
];

const columnsNumber = 3; // the number of columns of one type
const columns = {
  month0: [],
  month1: [],
  month2: [],
  year0: [],
  year1: [],
  year2: [],
};

types.forEach((str) => {
  for (const column in columns) {
    const element = document.getElementById(str + '-' + column);
    columns[column].push(element);
  }
});

export function displayFinancialReports(reports) {
  const periodName = reports[0].period;
  let i = columnsNumber;
  const shift = this[periodName + 'ReportShift'];
  for (i = 0; i < 3; i++) {
    displayReport(reports[shift + i], periodName + i);
  }
}

function displayReport(report, column) {
  if (report) {
    for (let i = 0; i < types.length; i++) {
      const cell = columns[column][i];
      const value = report[types[i]];
      if (types[i] == 'date') {
        cell.textContent = getFormattedDate(value, report.period);
      } else {
        cell.textContent = value.toLocaleString();
      }
    }
  } else {
    const value = '-';
    for (let i = 0; i < types.length; i++) {
      const cell = columns[column][i];
      cell.textContent = value;
    }
  }
}

function getFormattedDate(value, period) {
  const date = new Date(value);
  if (period == 'year')
    return date.toLocaleString('default', { year: 'numeric' });
  if (period == 'month')
    return date.toLocaleString('en', { year: '2-digit', month: 'short' });
}
