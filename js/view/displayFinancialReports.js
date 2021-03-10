const types = [
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

export function displayFinancialReports(raports, shift, periodName) {
  let i = columnsNumber;
  for (i = 0; i < 3; i++) {
    displayReport(raports[shift + i], periodName + i);
  }
}

function displayReport(report, column) {
  if (column in columns && report) {
    for (let i = 0; i < types.length; i++) {
      const cell = columns[column][i];
      const value = report[types[i]];
      cell.textContent = value.toLocaleString();
    }
  }
}
