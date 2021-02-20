import { addNavigation } from './js/navigation/navigation';
import { Controller } from './js/controller/Controller';

document.addEventListener('DOMContentLoaded', init);

function init() {
  const app = new Controller();
  app.data.generateInitialData();
  addNavigation();

  app.run();
  app.model.supplyChain.addNewOffer();
  const firstOffer = app.data.stockOfferList.getItemById(1);
  console.log(app.data.stockOfferList);
  console.log(firstOffer);
}
