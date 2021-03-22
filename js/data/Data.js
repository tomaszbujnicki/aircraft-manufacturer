import { List } from './List';
import { loadDataForContinueGame } from './loadDataForContinueGame';
import { loadDataForNewGame } from './loadDataForNewGame';
import { save } from './save';

export class Data {
  constructor() {
    this.date = new Date();
    this.tax = 0;
    this.cash = 0;
    this.parts = 0;
    this.monthlyReports = [];
    this.annualReports = [];
    this.employees = new List();
    this.stockOffers = new List();
    this.deliveries = new List();
    this.aircrafts = new List();
    this.designs = new List();
    this.loanOffers = new List();
    this.loansTaken = new List();
    this.loadDataForContinueGame = loadDataForContinueGame;
    this.loadDataForNewGame = loadDataForNewGame;
    this.save = save;
  }
  get workers() {
    return this.employees.list[0].number;
  }
  get foremen() {
    return this.employees.list[1].number;
  }
  get HR() {
    return this.employees.list[2].number;
  }
  get traders() {
    return this.employees.list[3].number;
  }
  get engineers() {
    return this.employees.list[4].number;
  }
  get unassignedWorkers() {
    let remainingWorkers = this.workers;
    for (const aircraft of this.aircrafts.list) {
      remainingWorkers -= aircraft.workers;
    }
    return remainingWorkers;
  }
  get designProgress() {
    const currentProject = this.designs.list[0];
    if (currentProject) {
      const total = currentProject.inventionPointsNeeded;
      const complited = currentProject.inventionPointsCompleted;
      return (complited / total) * 100;
    } else return 0;
  }
  get totalSalary() {
    let sum = 0;
    for (const employee of this.employees.list) {
      sum += employee.number * employee.salary;
    }
    return sum;
  }
}
