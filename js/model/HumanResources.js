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
    console.log(id);
    const employee = this.employees.getItemById(id);
    if (!employee) return;
    console.log(employee);

    if (this.isHirePossible(employee)) {
      this.cash.subtract(employee.hireCost);
      employee.number++;
      this.employeeChangeEvent.publish(employee);
      this.service.unassignedWorkersEvent.publish();
    }
  }
  isHirePossible(employee) {
    if (employee.number + 1 > employee.maxNumber) {
      console.log('too much');
      return false;
    }
    if (this.cash.get() < employee.hireCost) {
      console.log('cash');
      return false;
    }
    return true;
  }

  fire(id) {
    const employee = this.employees.getItemById(id);
    if (!employee) return;

    if (this.isFirePossible(employee)) {
      employee.number--;
      this.employeeChangeEvent.publish(employee);
      this.service.unassignedWorkersEvent.publish();
    }
  }
  isFirePossible(employee) {
    if (employee.number <= 0) return false;
    if (employee.name === 'Human Resources') {
      for (const item in this.employees.list) {
        if (item.maxNumber - item.multiplier < item.number) return false;
      }
    }
    return true;
  }

  totalSalary = () => {
    let sum = 0;
    for (const employee of this.employees.list) {
      sum += employee.number * employee.salary;
    }
    return sum;
  };
}
