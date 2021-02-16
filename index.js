import { createInitialElements } from './js/createInitialElements';
import { loadData } from './js/loadData';
import { constructionProgress } from './js/intervals/constructionProgress';
import { newDay } from './js/intervals/time';
import { addNavigation } from './js/navigation/navigation';
import { showInitialValues } from './js/showInitialValues';
import { SupplyChain } from './js/model/SupplyChain';
import { Manufacture } from './js/model/Manufacture';
import { ResearchCenter } from './js/model/ResearchCenter';
import { Bank } from './js/model/Bank';
import { addControl } from './js/navigation/control';
import { Display } from './js/create/Display';
import { OperationHandler } from './js/OperationHandler';
import { createElementAircraft } from './js/create/createElementAircraft';
import { createElementStock } from './js/create/createElementStockOffer';
import { View } from './js/View';
import { Data } from './js/Data';

document.addEventListener('DOMContentLoaded', init);

function init() {
  const view = new View();
  const data = new Data(view);
  addNavigation();
  addControl();
  data.generateInitialData();

  const display = new Display();
  data.cash.subscribe((number) => display.cash(number));
  data.parts.subscribe((number) => display.parts(number));

  const operationHandler = new OperationHandler();

  data.cash.add(150_000);
  data.parts.add(500);

  const supplyChain = new SupplyChain(
    data.stockOfferList,
    data.deliveryList,
    data.cash,
    data.parts
  );

  const stockA = data.stockOfferList.list[1];
  const stockB = data.stockOfferList.list[-1];
  const stockC = data.stockOfferList.list[0];
  const stockD = data.stockOfferList.list[-5];
  const stockE = data.stockOfferList.list[5];
  supplyChain.acceptOffer(stockA);
  supplyChain.acceptOffer(stockB);
  supplyChain.acceptOffer(stockC);
  supplyChain.acceptOffer(stockD);
  supplyChain.acceptOffer(stockE);

  /*   const objectTypes = {
    stock: 'stockOffer',
    delivery: 'delivery',
    aircraft: 'aircraft',
    design: 'design',
    loanOffer: 'loanOffer',
    loanTaken: 'loanTaken',
  }; */
  //const humanResources = new HumanResources(data)
  //const bank = new Bank(data);

  //const manufacture = new Manufacture(data);
  //const researchCenter = new ResearchCenter(data);
}
