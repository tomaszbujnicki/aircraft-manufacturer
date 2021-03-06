import { addControl } from './addControl';
import { createElement } from './createElement';
import { displayElementData } from './displayElementData';
import { displayFinancialReports } from './displayFinancialReports';
import { displayData } from './displayData';
import { events } from './events';
import { elementDetails } from './elementDetails';
import { displayMessage } from './displayMessage';
import { addListeners } from './addListeners';
import { navigation } from './navigation';

export class View {
  constructor() {
    this.events = events;

    this.navigation = navigation;

    this.createElement = createElement;
    this.displayElementData = displayElementData;

    this.displayData = displayData;

    this.displayFinancialReports = displayFinancialReports;
    this.monthReportShift = 0;
    this.yearReportShift = 0;

    this.elementDetails = elementDetails;

    this.displayMessage = displayMessage;

    addListeners(this);
    addControl(this);
  }
}
