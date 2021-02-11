import { createElementAircraft } from './create/createElementAircraft';
import { createElementNewDesign } from './create/createElementNewDesign';
import { createElementLoan } from './create/createElementLoan';
import { aircraftList } from './list/aircraftList';
import { loanList } from './list/loanList';
import { employeeList } from './list/employeeList';

export function createInitialElements() {
  for (const aircraft of aircraftList) {
    aircraft.inventionPoints <= 0
      ? createElementAircraft(aircraft)
      : createElementNewDesign(aircraft);
  }

  for (const loan of loanList) createElementLoan(loan);

  for (const employee of employeeList) {
    const buttonAdd = document.getElementById('addEmployee' + employee.id);
    buttonAdd.addEventListener('click', () => employee.hire());

    const buttonRemove = document.getElementById(
      'removeEmployee' + employee.id
    );
    buttonRemove.addEventListener('click', () => employee.fire());
  }
}
