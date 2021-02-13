import { employeeList } from '../list/employeeList';

export function addControl() {
  for (const employee of employeeList) {
    const buttonAdd = document.getElementById('addEmployee' + employee.id);
    buttonAdd.addEventListener('click', () => employee.hire());

    const buttonRemove = document.getElementById(
      'removeEmployee' + employee.id
    );
    buttonRemove.addEventListener('click', () => employee.fire());
  }
}
