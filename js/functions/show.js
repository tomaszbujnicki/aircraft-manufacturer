const descriptionWorkersNumberElement = document.getElementById(
  'descriptionWorkersNumber'
);
const descriptionWorkersMountElement = document.getElementById(
  'descriptionWorkersMount'
);
const descriptionWorkersCapacityElement = document.getElementById(
  'edescriptionWorkersCapacity'
);

export function showEmployeesNumber(employee) {
  document.getElementById('employee' + employee.id).textContent =
    employee.number + ' / ' + employee.maxNumber;
}
