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

const elements = {
  month0: [],
  month1: [],
  month2: [],
  year0: [],
  year1: [],
  year2: [],
};

types.forEach((str) => {
  for (const period in elements) {
    const element = document.getElementById(str + '-' + period);
    elements[period].push(element);
  }
});

export function displayReport(report, column) {
  if (column in elements && report) {
    for (let i = 0; i < types.length; i++) {
      const cell = elements[column][i];
      const value = report[types[i]];
      cell.textContent = value.toLocaleString();
    }
  }
}
