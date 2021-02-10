import { createInitialElements } from './js/createInitialElements';
import { createInitialValues } from './js/createInitialValues';
import { navigation } from './js/navigation/navigation';
import { showInitialValues } from './js/showInitialValues';

document.addEventListener('DOMContentLoaded', init);

function init() {
  createInitialElements();
  createInitialValues();
  showInitialValues();
  navigation();

  /*   setInterval(constructionProgress, 10);
  setInterval(newDay, dayTick); */
}
