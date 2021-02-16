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
import { View } from './js/View';
import { Data } from './js/Data';
import { ListContainer } from './js/ListContainer';
import { generateInitialData } from './js/generateInitialData';

document.addEventListener('DOMContentLoaded', init);

function init() {
  const view = new View();
  const data = new Data();
  const listContainer = new ListContainer();
  const display = new Display();

  for (const list in listContainer) {
    listContainer[list].subscribe((action, item) => {
      if (action === 'delete') {
        view.removeElement(item);
      }
      if (action === 'insert') {
        view.createElement(item);
      }
    });
  }

  data.cash.subscribe((number) => {
    display.cash(number);
  });
  data.parts.subscribe((number) => {
    display.parts(number);
  });
  addNavigation();
  addControl();
  generateInitialData(listContainer);
  data.cash.add(150_000);
  data.parts.add(500);
  const supplyChain = new SupplyChain(
    listContainer.stockOfferList,
    listContainer.deliveryList,
    data.cash,
    data.parts
  );

  const stockA = listContainer.stockOfferList.list[1];
  const stockB = listContainer.stockOfferList.list[-1];
  const stockC = listContainer.stockOfferList.list[0];
  const stockD = listContainer.stockOfferList.list[-5];
  const stockE = listContainer.stockOfferList.list[5];
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
