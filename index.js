import { createInitialElements } from './js/createInitialElements';
import { createInitialValues } from './js/createInitialValues';
import { game } from './js/game';
import { constructionProgress } from './js/intervals/constructionProgress';
import { newDay } from './js/intervals/time';
import { addNavigation } from './js/navigation/navigation';
import { showInitialValues } from './js/showInitialValues';

document.addEventListener('DOMContentLoaded', init);

function init() {
  createInitialElements();
  createInitialValues();
  showInitialValues();
  addNavigation();

  setInterval(constructionProgress, 10);
  setInterval(newDay, game.dayTick);
}
