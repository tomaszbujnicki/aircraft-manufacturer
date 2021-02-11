import { getRndInteger, randomChange } from '../functions/calculations';
import { stock_coreValues } from '../list/stock_coreValues';
import { game } from '../game';
import { createElementStock } from '../create/createElementStock';
import {
  clickFalse,
  clickTrue,
  createNewMessage,
  disableElement,
  removeDOM_ELEMENT,
} from './visual';
import { calculateExpenses } from './incomeAndExpanses';
import { createElementDelivery } from '../create/createElementDelivery';
import { showAvailableParts } from './show';

export class Stock {
  constructor(id, flag, country, company, time, risk, amount, price) {
    this.id = id;
    this.flag = flag;
    this.country = country;
    this.company = company;
    this.time = time;
    this.daysToGo = time;
    this.risk = risk;
    this.amount = amount;
    this.price = price;
    this.totalPrice = this.price * this.amount;
  }

  buy() {
    const stock = this;
    const canIBuy = game.cash >= stock.totalPrice;
    if (canIBuy) {
      calculateExpenses(stock.totalPrice, 'parts');
      clickTrue(document.getElementById(`stockItem${stock.id}`));
      stock.delivery();
      delete game.stockArray[stock.id];
      removeElementStock(stock.id);
    } else {
      clickFalse(document.getElementById(`stockItem${stock.id}`));
      clickFalse(document.getElementById('cash'));
    }
  }
  delivery() {
    const stock = this;
    game.deliveryArray[stock.id] = stock;
    createElementDelivery(stock);
    setTimeout(() => {
      const deliveryElement = document.getElementById(
        'deliveryItem' + stock.id
      );
      const isDeliveryCorrect = Math.floor(Math.random() * 100) >= stock.risk;
      if (isDeliveryCorrect) {
        game.availableParts += stock.amount;
        showAvailableParts();
        createNewMessage('+' + stock.amount + ' parts form ' + stock.country);
        clickTrue(deliveryElement);
        clickTrue(document.getElementById('parts'));
      } else {
        createNewMessage(
          'Delivery failed.<br> Lost: ' + stock.amount + ' parts',
          '#F00'
        );
        clickFalse(deliveryElement);
      }
      delete game.deliveryArray[stock.id];
      removeDOM_ELEMENT(deliveryElement);
    }, game.dayTick * stock.time);
  }
}

let stockID = 0;

export function createNewStock() {
  const randomStock =
    stock_coreValues[getRndInteger(0, stock_coreValues.length - 1)];
  const newStock = new Stock(
    stockID++,
    randomStock.flag,
    randomStock.country,
    randomStock.company[getRndInteger(0, randomStock.company.length - 1)],
    randomChange(randomStock.time, 20),
    randomChange(randomStock.risk, 20),
    randomChange(randomStock.amount, 50),
    randomChange(randomStock.price, 10)
  );
  game.stockArray.push(newStock);
  createElementStock(newStock);
  setTimeout(() => {
    if (game.stockArray[newStock.id]) {
      delete game.stockArray[newStock.id];
      clickFalse(document.getElementById(`stockItem${newStock.id}`));
      removeElementStock(newStock.id);
    }
  }, game.dayTick * getRndInteger(7, 84));
}

export function removeElementStock(id) {
  const stockElement = document.getElementById(`stockItem${id}`);
  if (!stockElement) return;
  const stockButtonElement = document.getElementById(`buyStockButton${id}`);
  disableElement(stockButtonElement);
  removeDOM_ELEMENT(stockElement);
}

export function createNewStockMaybe() {
  if (getRndInteger(0, 100) < 20) {
    let x = 0;
    for (let i in game.stockArray) {
      ++x;
    }
    if (x < 14) createNewStock();
  }
}
