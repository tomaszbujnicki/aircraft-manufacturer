export class Aircraft {
  constructor(aircraft) {
    this.type = 'aircraft';
    this.name = aircraft.name;
    this.img = aircraft.img;
    this.partsNeeded = aircraft.parts;
    this.partsCompleted = 0;
    this.startingPrice = aircraft.price;
    this.currentPrice = aircraft.price;
    this.priceChange = aircraft.priceChange || 0;
    this.workers = 0;
    this.quantity = aircraft.quantity || 0;
  }
}
