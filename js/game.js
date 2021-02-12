import { aircraftList } from './list/aircraftList';
import { Aircraft } from './model/Aircraft';
import { Design } from './model/Design';
import { Stock } from './model/Stock';

export const game = {
  date: new Date(1955, 10, 12),
  dayTick: 500,
  taxRate: 0.2,
};

const initialData = {
  cash: 50_000_000,
  parts: 500,
  offerList: [],
  deliveryList: [],
  aircraftList: [],
  designList: [],
};
fillInitialData();

function fillInitialData() {
  for (let i = 0; i < 3; i++) {
    initialData.aircraftList.push(new Aircraft(aircraftList[i]));
  }
  for (let i = 3; i < 6; i++) {
    initialData.designList.push(new Design(aircraftList[i]));
  }
  for (let i = 0; i < 10; i++) initialData.offerList.push(new Stock());
}

export function loadData() {
  const data = localStorage.getItem('data')
    ? JSON.parse(localStorage.getItem('data'))
    : initialData;
  return data;
}
