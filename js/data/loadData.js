import { generateInitialData } from './generateInitialData';

export function loadData() {
  if (localStorage.getItem('data')) {
    const data = JSON.parse(localStorage.getItem('data'));
    if (isDataCorrect(data)) {
      return data;
    }
  } else {
    const data = generateInitialData();
    return data;
  }
}

function isDataCorrect(data) {}
