import { createInitialElements } from './js/createInitialElements';
import { loadData } from './js/loadData';
import { constructionProgress } from './js/intervals/constructionProgress';
import { newDay } from './js/intervals/time';
import { addNavigation } from './js/navigation/navigation';
import { showInitialValues } from './js/showInitialValues';
import { Market } from './js/model/Market';
import { Transactions } from './js/model/Transactions';
import { Warehouse } from './js/model/Warehouse';
import { Supply } from './js/model/Supply';
import { Manufacture } from './js/model/Manufacture';
import { ResearchCenter } from './js/model/ResearchCenter';
import { Bank } from './js/model/Bank';
import { addControl } from './js/navigation/control';
import { Display } from './js/create/Display';

document.addEventListener('DOMContentLoaded', init);

function init() {
  const data = loadData();
  createInitialElements(data);

  const display = new Display(data);
  display.cash();
  display.date();
  display.parts();

  const bank = new Bank(data);
  const market = new Market(data);
  const transactions = new Transactions(data.cash);
  const supply = new Supply(data);
  const warehouse = new Warehouse(data);
  const manufacture = new Manufacture(data);
  const researchCenter = new ResearchCenter(data);

  addNavigation();
  addControl();

  transactions.subscribe((invoice) => {
    data.cash += invoice.amount;
    display.cash();
  });

  console.log(data.cash);
  transactions.issueInvoice(3333, 'parts');
  market.addOffer();
  console.log(market.offerList);
  console.log(data.offerList);
  console.log(data.cash);
  console.log('Step #1 success');

  //showInitialValues();

  //setInterval(constructionProgress, 10);
  //setInterval(newDay, game.dayTick);

  market.subscribe((stock) => {
    removeElement(stock);
    supply.addDelivery(stock);
  });

  createElementDelivery(stock);

  researchCenter.subscribe((design) => {
    removeElement(design);
    createElementAircraft(design);
    manufacture.add(design);
  });
}

function removeElement(object) {
  const element = document.getElementById(object.type + 'Item' + object.id);
  element.remove();
}
