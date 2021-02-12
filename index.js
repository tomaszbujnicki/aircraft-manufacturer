import { createInitialElements } from './js/createInitialElements';
import { game, loadData } from './js/game';
import { constructionProgress } from './js/intervals/constructionProgress';
import { newDay } from './js/intervals/time';
import { addNavigation } from './js/navigation/navigation';
import { showInitialValues } from './js/showInitialValues';
import { Market } from './js/model/Market';
import { Wallet } from './js/model/Wallet';
import { Warehouse } from './js/model/Warehouse';
import { Supply } from './js/model/Supply';
import { Manufacture } from './js/model/Manufacture';
import { ResearchCenter } from './js/model/ResearchCenter';

document.addEventListener('DOMContentLoaded', init);

function init() {
  const data = loadData();

  const market = new Market(data.offerList);
  const wallet = new Wallet(data.cash);
  const supply = new Supply(data.deliveryList);
  const warehouse = new Warehouse(data.parts);
  const manufacture = new Manufacture(data.aircraftList);
  const researchCenter = new ResearchCenter(data.designList);
  console.log(market);
  createInitialElements();
  showInitialValues();
  addNavigation();

  setInterval(constructionProgress, 10);
  setInterval(newDay, game.dayTick);

  market.subscribe((stock) => {
    removeElement(stock);
    createElementDelivery(stock);
    wallet.pay(stock.totalPrice);
    supply.add(stock);
  });

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
