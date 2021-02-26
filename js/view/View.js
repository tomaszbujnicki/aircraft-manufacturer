import { Event } from '../Event';
import { addListeners } from './addListeners';
import { createElement } from './createElement';
import { displayElementData } from './displayElementData';
import { cash, parts, workers, date } from './displayResources';

export class View {
  constructor() {
    this.buyStockEvent = new Event();
    this.sellAircraftEvent = new Event();
    this.assignWorkerEvent = new Event();
    this.revokeWorkerEvent = new Event();
    this.hireEmployeeEvent = new Event();
    this.fireEmployeeEvent = new Event();
    this.createElement = createElement;
    this.addListeners = addListeners;
    this.displayElementData = displayElementData;
    this.cash = cash;
    this.parts = parts;
    this.workers = workers;
    this.date = date;
  }
  displayTotalSalary(sum) {
    console.log('x');
    const element = document.getElementById('salarySummary__value');
    element.textContent = `$ ${sum.toLocaleString()}`;
  }
}
