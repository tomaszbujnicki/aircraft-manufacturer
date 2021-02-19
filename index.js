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
import { ElementFactory } from './js/ElementFactory';
import { Data } from './js/Data';
import { ListContainer } from './js/ListContainer';
import { generateInitialData } from './js/generateInitialData';
import { PubSub } from './js/model/PubSub';
import { createElement } from './js/view/createElement';

document.addEventListener('DOMContentLoaded', init);

function init() {
  const elementFactory = new ElementFactory();
  const data = new Data();
  const dataListContainer = new ListContainer();
  const display = new Display();
  const userActionController = new PubSub();
  const elementController = new PubSub(dataListContainer);

  for (const list in dataListContainer) {
    dataListContainer[list].subscribe((action, item) => {
      if (action === 'insert') {
        createElement(item);
      }
      if (action === 'delete') {
        const element = document.getElementById(item.id);
        element.remove();
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

  generateInitialData(dataListContainer);

  data.cash.add(150_000);
  data.parts.add(500);
  const supplyChain = new SupplyChain(
    dataListContainer.stockOfferList,
    dataListContainer.deliveryList,
    data.cash,
    data.parts
  );

  supplyChain.acceptOffer(1);
  console.log('after 1 ');
  supplyChain.acceptOffer(0);
  console.log('after 0');
  supplyChain.acceptOffer(-1);
  supplyChain.acceptOffer(5);
  supplyChain.acceptOffer(5);
  supplyChain.acceptOffer(-2);

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
