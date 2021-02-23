import { Event } from '../Event';

export class HumanResources {
  constructor(employees, aircrafts, cash) {
    this.employees = employees;
    this.aircrafts = aircrafts.list;
    this.cash = cash;
    this.employeeChangeEvent = new Event();
    this.workers = () => this.employees.getItemById(0);
    this.foremen = () => this.employees.getItemById(1);
    this.humRes = () => this.employees.getItemById(2);
    this.traders = () => this.employees.getItemById(3);
    this.engineers = () => this.employees.getItemById(4);
  }

  hire(id) {
    const employee = this.employees.getItemById(id);
    if (!employee) return;
  }

  fire(id) {}
}
