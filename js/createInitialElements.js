import { createElementAircraft } from './create/createElementAircraft';
import { createElementNewDesign } from './create/createElementNewDesign';
import { createElementLoan } from './create/createElementLoan';
import { aircraftList } from './list/aircraftList';
import { newDesignList } from './list/newDesignList';
import { loanList } from './list/loanList';
import { employeeList } from './list/employeeList';

export function createInitialElements() {
  for (const aircraft of aircraftList) createElementAircraft(aircraft);

  for (const aircraft of newDesignList) createElementNewDesign(aircraft);

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
