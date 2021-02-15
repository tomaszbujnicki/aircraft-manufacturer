import { createInitialElements } from './js/createInitialElements';
import { loadData } from './js/loadData';
import { constructionProgress } from './js/intervals/constructionProgress';
import { newDay } from './js/intervals/time';
import { addNavigation } from './js/navigation/navigation';
import { showInitialValues } from './js/showInitialValues';
import { Market } from './js/model/Market';
import { Transaction } from './js/model/Transaction';
import { Warehouse } from './js/model/Warehouse';
import { Supply } from './js/model/Supply';
import { Manufacture } from './js/model/Manufacture';
import { ResearchCenter } from './js/model/ResearchCenter';
import { Bank } from './js/model/Bank';
import { addControl } from './js/navigation/control';
import { Display } from './js/create/Display';
import { OperationHandler } from './js/OperationHandler';
import { Wallet } from './js/model/Wallet';
import { createElementAircraft } from './js/create/createElementAircraft';
import { createElementStock } from './js/create/createElementStockOffer';
import { View } from './js/View';
import { Data } from './js/Data';

document.addEventListener('DOMContentLoaded', init);

function init() {
  const view = new View();
  const data = new Data(view);
  console.log(data);
  console.log('~~~~~~~~~~~~');

  data.generateInitialData();
  console.log('~~~~~~~~~~~~');
  console.log(data);

  const display = new Display(data.cash, data.parts, data.tax, data.date);
  display.display_cash();
  display.display_date();
  display.display_parts();
  const operationHandler = new OperationHandler();

  const objectTypes = {
    stock: 'stockOffer',
    delivery: 'delivery',
    aircraft: 'aircraft',
    design: 'design',
    loanOffer: 'loanOffer',
    loanTaken: 'loanTaken',
  };
  data.cash.add(150_000);
  console.log(data);
  console.log(
    '____________________________________________________________________________________'
  );
  //const humanResources = new HumanResources(data)
  const bank = new Bank(data);
  const market = new Market(data.stockOfferList, data.deliveryList, data.cash);
  const supply = new Supply(data);
  const manufacture = new Manufacture(data);
  const researchCenter = new ResearchCenter(data);
  market.buyStock(data.stockOfferList.list[1]);
  market.buyStock(data.stockOfferList.list[0]);
  market.buyStock(data.stockOfferList.list[-2]);
  market.buyStock(data.stockOfferList.list[-1]);
  addNavigation();
  addControl();
}
