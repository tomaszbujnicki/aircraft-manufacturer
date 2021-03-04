import { Event } from '../controller/Event';
import { addControl } from './addControl';
import { addNavigation } from './addNavigation';
import { createElement } from './createElement';
import { displayElementData } from './displayElementData';
import display from './displayResources';

export class View {
  constructor() {
    this.buyStockEvent = new Event();
    this.sellAircraftEvent = new Event();
    this.assignWorkerEvent = new Event();
    this.revokeWorkerEvent = new Event();
    this.hireEmployeeEvent = new Event();
    this.fireEmployeeEvent = new Event();
    this.speedLevelEvent = new Event();
    this.createElement = createElement;
    this.displayElementData = displayElementData;
    this.display = display;
    addNavigation();
    addControl(this);
  }
}
