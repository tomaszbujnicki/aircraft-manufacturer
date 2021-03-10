import { addControl } from './addControl';
import { addNavigation } from './addNavigation';
import { createElement } from './createElement';
import { displayElementData } from './displayElementData';
import { displayFinancialReports } from './displayFinancialReports';
import { displayData } from './displayData';
import { events } from './events';

export class View {
  constructor() {
    this.events = events;

    this.createElement = createElement;
    this.displayElementData = displayElementData;

    this.displayData = displayData;

    this.displayFinancialReports = displayFinancialReports;
    this.monthlyReportShift = 0;
    this.annualReportShift = 0;

    addNavigation();
    addControl(this);
  }
}
