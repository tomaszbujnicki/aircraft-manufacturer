import { Event } from '../Event';
import { addListeners } from './addListeners';
import { createElement } from './createElement';
import { displayElementData } from './displayElementData';

const cashElement = document.getElementById('cash'),
  partsElement = document.getElementById('parts'),
  dateElement = document.getElementById('date'),
  workersElement = document.getElementById('workers');

export class View {
  constructor() {
    this.buyStockEvent = new Event();
    this.sellAircraftEvent = new Event();
    this.assignWorkerEvent = new Event();
    this.revokeWorkerEvent = new Event();
    this.createElement = createElement;
    this.addListeners = addListeners;
    this.displayElementData = displayElementData;
  }
  cash(number) {
    cashElement.textContent =
      '$ ' +
      number.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      });
  }

  parts(number) {
    partsElement.textContent = number.toLocaleString(undefined, {
      maximumFractionDigits: 0,
    });
  }

  workers(number) {
    workersElement.textContent = number;
  }

  showDate(date) {
    let MM = date.getMonth() + 1;
    if (MM < 10) MM = '0' + MM;
    let DD = date.getDate();
    if (DD < 10) DD = '0' + DD;
    dateElement.textContent = date.getFullYear() + '-' + MM + '-' + DD;
  }
}
