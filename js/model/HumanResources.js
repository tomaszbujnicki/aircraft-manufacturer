import { Event } from '../Event';

export class HumanResources {
  constructor(employees, aircrafts, cash, service) {
    this.employees = employees;
    this.aircrafts = aircrafts.list;
    this.cash = cash;
    this.service = service;
    this.employeeChangeEvent = new Event();
  }

  hire(id) {
    const employee = this.employees.getItemById(id);
    if (!employee) return;

    employee.number++;
    this.employeeChangeEvent.publish(employee);
    this.service.unassignedWorkersEvent.publish();
  }

  fire(id) {}

  totalSalary = () => {
    let sum = 0;
    for (const employee of this.employees.list) {
      sum += employee.number * employee.salary;
    }
    return sum;
  };
}
