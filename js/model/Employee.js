export class Employee {
  constructor(employee) {
    this.id = employee.id;
    this.type = 'employee';
    this.name = employee.name;
    this.img = employee.img;
    this.number = employee.number || 0;
    this.multiplier = employee.multiplier;
    this.maxNumber = employee.maxNumber;
    this.salary = employee.salary;
    this.hireCost = employee.hireCost;
    this.description = employee.description;
  }
}
