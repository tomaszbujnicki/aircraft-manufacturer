import { Event } from '../Event';

export class HumanResources {
  constructor(employees, aircrafts, cash) {
    this.employees = employees;
    this.aircrafts = aircrafts.list;
    this.cash = cash;
    this.employeeChangeEvent = new Event();
  }

  hire(id) {
    const employee = this.employees.getItemById(id);
    if (!employee) return;
  }

  fire(id) {}
}
