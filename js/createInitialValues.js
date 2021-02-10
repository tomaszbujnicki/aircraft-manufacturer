import { saveMonth, saveYear } from './functions/budget';
import { createNewStock } from './functions/stock';

export function createInitialValues() {
  for (let i = 0; i < 10; i++) createNewStock();
  saveMonth();
  saveMonth();
  saveYear();
  saveYear();
}
