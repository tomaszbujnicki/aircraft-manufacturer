/* import { calculateAvailableWorkers } from '../../functions/calculations';
import { addEmployee, removeEmployee } from '../../functions/employee'; */
/* import {
  showAvailableWorkers,
  showEmployeesNumber,
  showWorkersCard,
} from '../functions/show'; */
//import { game } from '../data/generateInitialData';

import worker from '../../../img/employees/worker.svg';
import foreman from '../../../img/employees/foreman.svg';
import HRImg from '../../../img/employees/get-hired.svg';
import trader from '../../../img/employees/businessman.svg';
import engineer from '../../../img/employees/engineer.svg';

export default [
  {
    id: 0,
    name: 'Workers',
    img: worker,
    number: 15,
    maxNumber: 16,
    multiplier: 16,
    salary: 1800,
    employmentCost: 4000,
    description: 'Workers build aircraft',
    /*     hire() {
      const canIHire =
        game.cash >= this.employmentCost && this.maxNumber > this.number;
      if (canIHire) {
        addEmployee(this);
        showAvailableWorkers();
        showWorkersCard();
      }
    },
    fire() {
      const canIFire = calculateAvailableWorkers() > 0;
      if (canIFire) {
        removeEmployee(this);
        showAvailableWorkers();
        showWorkersCard();
      }
    }, */
  },
  {
    id: 1,
    name: 'Foremen',
    img: foreman,
    number: 10,
    multiplier: 4,
    maxNumber: 4,
    salary: 2600,
    employmentCost: 6000,
    description: 'Foremen help workers build aircraft',
    /*     hire() {
      const canIHire =
        game.cash >= this.employmentCost && this.maxNumber > this.number;
      if (canIHire) {
        addEmployee(this);
        showWorkersCard();
      }
    },
    fire() {
      const canIFire = this.number > 0;
      if (canIFire) {
        removeEmployee(this);
        showWorkersCard();
      }
    }, */
  },
  {
    id: 2,
    name: 'Human Resources',
    img: HRImg,
    number: 0,
    multiplier: 1,
    maxNumber: 1,
    salary: 3200,
    employmentCost: 9000,
    description: 'HR care about all employees',
    /*     hire() {
      const canIHire = game.cash >= this.employmentCost;
      if (canIHire) {
        addEmployee(this);
        this.showMaxNumber();
      }
    },
    fire() {
      const canIFire = this.number > 0 && this.isMoreThenNumber();
      if (canIFire) {
        removeEmployee(this);
        this.showMaxNumber();
      }
    },
    isMoreThenNumber() {
      for (let employee of employeeList) {
        if (employee.number > this.number * employee.multiplier) {
          return false;
        }
      }
      return true;
    },
    showMaxNumber() {
      for (let employee of employeeList) {
        employee.maxNumber =
          employee.multiplier + this.number * employee.multiplier;
        showEmployeesNumber(employee);
      }
    }, */
  },
  {
    id: 3,
    name: 'Traders',
    img: trader,
    number: 0,
    multiplier: 3,
    maxNumber: 3,
    salary: 3800,
    employmentCost: 10000,
    description: 'Traders keep high the price of aircraft',
    /*     hire() {
      const canIHire =
        game.cash >= this.employmentCost && this.maxNumber > this.number;
      if (canIHire) {
        addEmployee(this);
      }
    },
    fire() {
      const canIFire = this.number > 0;
      if (canIFire) {
        removeEmployee(this);
      }
    }, */
  },
  {
    id: 4,
    name: 'Engineers',
    img: engineer,
    number: 0,
    multiplier: 2,
    maxNumber: 2,
    salary: 5000,
    employmentCost: 25000,
    description: 'Engineers develop new aircraft',
    /*     hire() {
      const canIHire =
        game.cash >= this.employmentCost && this.maxNumber > this.number;
      if (canIHire) {
        addEmployee(this);
      }
    },
    fire() {
      const canIFire = this.number > 0;
      if (canIFire) {
        removeEmployee(this);
      }
    }, */
  },
];
