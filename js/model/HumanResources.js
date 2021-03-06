export class HumanResources {
  constructor(employees, aircrafts, cash) {
    this.employees = employees;
    this.aircrafts = aircrafts.list;
    this.cash = cash;
  }
  get workers() {
    return this.employees.getItemById(0).number;
  }
  get foremen() {
    return this.employees.getItemById(1).number;
  }
  get HR() {
    return this.employees.getItemById(2).number;
  }
  get traders() {
    return this.employees.getItemById(3).number;
  }
  get engineers() {
    return this.employees.getItemById(4).number;
  }
  get unassignedWorkers() {
    let remainingWorkers = this.workers;
    for (const aircraft of this.aircrafts) {
      remainingWorkers -= aircraft.workers;
    }
    return remainingWorkers;
  }

  hire(id) {
    const employee = this.employees.getItemById(id);
    if (!employee) return;
    if (!this.isHirePossible(employee)) return;

    this.cash.subtract(employee.hireCost);
    employee.number++;

    if (employee.name === 'Human Resources') {
      this.updateMaxEmployee();
    }
  }
  isHirePossible(employee) {
    if (employee.number + 1 > (this.HR + 1) * employee.maxNumberPerHR) {
      console.log('need more HR');
      return false;
    }
    if (this.cash.get() < employee.hireCost) {
      console.log('Not enough cash.');
      return false;
    }
    return true;
  }

  fire(id) {
    const employee = this.employees.getItemById(id);
    if (!employee) return;
    if (!this.isFirePossible(employee)) return;

    employee.number--;

    if (employee.name === 'Human Resources') {
      this.updateMaxEmployee();
    }
  }
  isFirePossible(employee) {
    if (employee.number <= 0) return false;
    if (employee.name === 'Workers') {
      return this.isWorkersFirePossible();
    }
    if (employee.name === 'Human Resources') {
      return this.isHRFirePossible();
    }
    return true;
  }
  isWorkersFirePossible() {
    if (this.unassignedWorkers > 0) {
      return true;
    } else {
      console.log(
        'All workers assigned\nFirst revoke workers from production.'
      );
      return false;
    }
  }
  isHRFirePossible() {
    for (const item of this.employees.list) {
      if (item.number > item.maxNumberPerHR * this.HR) {
        const difference = item.number - item.maxNumberPerHR * this.HR;
        console.log(
          `Too many ${item.name}.\nFirst fire ${difference} ${item.name}.`
        );
        return false;
      }
    }
    return true;
  }

  updateMaxEmployee = () => {
    for (const employee of this.employees.list) {
      employee.maxNumber = (this.HR + 1) * employee.maxNumberPerHR;
    }
  };

  salaryPayment() {
    const amount = this.getTotalSalary();
    this.cash.subtract(amount);
  }
  getTotalSalary = () => {
    let sum = 0;
    for (const employee of this.employees.list) {
      sum += employee.number * employee.salary;
    }
    return sum;
  };
}
