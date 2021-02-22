import { Quantity } from '../data/Quantity';

export class Aircraft {
  constructor(aircraft) {
    this.type = 'aircraft';
    this.name = aircraft.name;
    this.img = aircraft.img;
    this.partsNeeded = aircraft.parts;
    this.startingPrice = aircraft.price;
    this.currentPrice = aircraft.price;
    this.productionStage = aircraft.productionStage || 0;
    this.workers = aircraft.workers || 0;
    this.quantity = aircraft.quantity || 0;
  }
}
