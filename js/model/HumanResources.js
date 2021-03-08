export class HumanResources {
  constructor(data) {
    this.data = data;
    this.employees = data.employees;
  }

  hire(id) {
    const employee = this.employees.getItemById(id);
    if (!employee) return;

    if (this.isHirePossible(employee)) {
      this.data.cash -= employee.hireCost;
      employee.number++;

      if (employee.name === 'Human Resources') {
        this.updateMaxEmployee();
      }
    }
  }
  isHirePossible(employee) {
    if (this.data.cash >= employee.hireCost) {
      if (employee.number + 1 <= (this.data.HR + 1) * employee.maxNumberPerHR) {
        return true;
      } else {
        console.log('need more HR');
        return false;
      }
    } else {
      console.log('Not enough cash.');
      return false;
    }
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
    if (this.data.unassignedWorkers > 0) {
      return true;
    } else {
      console.log(
        'All workers assigned\nFirst revoke workers from production.'
      );
      return false;
    }
  }
  isHRFirePossible() {
    for (const employee of this.employees.list) {
      if (!(employee.number <= employee.maxNumberPerHR * this.data.HR)) {
        const difference =
          employee.number - employee.maxNumberPerHR * this.data.HR;
        console.log(
          `Too many ${employee.name}.\nFirst fire ${difference} ${employee.name}.`
        );
        return false;
      }
    }
    return true;
  }

  updateMaxEmployee = () => {
    for (const employee of this.employees.list) {
      employee.maxNumber = (this.data.HR + 1) * employee.maxNumberPerHR;
    }
  };

  salaryPayment() {
    const amount = this.data.totalSalary;
    this.data.cash -= amount;
  }
}
