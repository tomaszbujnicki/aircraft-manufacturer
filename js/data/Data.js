import { List } from './List';
import { Quantity } from './Quantity';
import { loadDataForContinueGame } from './loadDataForContinueGame';
import { loadDataForNewGame } from './loadDataForNewGame';
import { isDataCorrect } from './isDataCorrect';

export class Data {
  constructor() {
    this.date = new Date();
    this.dayTick = new Quantity();
    this.tax = new Quantity();
    this.cash = new Quantity();
    this.parts = new Quantity();
    this.employeeList = new List();
    this.stockOfferList = new List();
    this.deliveryList = new List();
    this.aircraftList = new List();
    this.designList = new List();
    this.loanOfferList = new List();
    this.loanTakenList = new List();
    this.isDataCorrect = isDataCorrect;
    this.loadDataForContinueGame = loadDataForContinueGame;
    this.loadDataForNewGame = loadDataForNewGame;
  }

  save() {}

  load() {
    if (localStorage.getItem('data')) {
      const data = JSON.parse(localStorage.getItem('data'));
      if (isDataCorrect(data)) {
        this.loadDataForContinueGame(data);
        return;
      }
    }
    this.loadDataForNewGame();
  }

  unassignedWorkers = () => {
    let remainingWorkers = this.employeeList.getItemById(0).number;
    for (const aircraft of this.aircraftList.list) {
      remainingWorkers -= aircraft.workers;
    }
    return remainingWorkers;
  };
}
