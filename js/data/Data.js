import { List } from './List';
import { loadDataForContinueGame } from './loadDataForContinueGame';
import { loadDataForNewGame } from './loadDataForNewGame';
import { isDataCorrect } from './isDataCorrect';
import { save } from './save';

export class Data {
  constructor() {
    this.date = new Date();
    this.tax = 0;
    this.cash = 0;
    this.parts = 0;
    this.employees = new List();
    this.stockOffers = new List();
    this.deliveries = new List();
    this.aircrafts = new List();
    this.designs = new List();
    this.loanOffers = new List();
    this.loansTaken = new List();
    this.isDataCorrect = isDataCorrect;
    this.loadDataForContinueGame = loadDataForContinueGame;
    this.loadDataForNewGame = loadDataForNewGame;
    this.save = save;
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
    for (const aircraft of this.aircrafts.list) {
      remainingWorkers -= aircraft.workers;
    }
    return remainingWorkers;
  }
  get totalSalary() {
    let sum = 0;
    for (const employee of this.employees.list) {
      sum += employee.number * employee.salary;
    }
    return sum;
  }

  load() {
    if (localStorage.getItem('data')) {
      const data = JSON.parse(localStorage.getItem('data'));
      //if (isDataCorrect(data)) {
      this.loadDataForContinueGame(data);
      return;
      //}
    }
    this.loadDataForNewGame();
  }
}
