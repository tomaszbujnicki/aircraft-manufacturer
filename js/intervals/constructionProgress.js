import { productionForce } from '../functions/calculations';
import {
  showAvailableParts,
  showProductionStage,
  showQuantity,
} from '../functions/show';
import { game } from '../game';
import { aircraftList } from '../list/aircraftList';

export function constructionProgress() {
  for (const aircraft of aircraftList) {
    if (aircraft.inventionPoints <= 0) {
      progresWork(aircraft);
    }
  }
}

export function progresWork(aircraft) {
  let progress = (productionForce() / game.dayTick) * aircraft.workers;
  if (progress / 100 <= game.availableParts) {
    aircraft.productionStage += progress / aircraft.parts;
    game.availableParts -= progress / 100;
    showAvailableParts();
    if (aircraft.productionStage >= 100) {
      game.availableParts +=
        ((aircraft.productionStage - 100) * aircraft.parts) / 100;
      aircraft.productionStage = 0;
      aircraft.quantity++;
      showQuantity(aircraft);
    }
    //showProductionStage(aircraft);
  }
}
