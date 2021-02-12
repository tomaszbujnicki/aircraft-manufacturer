export class Aircraft {
  constructor(aircraft) {
    this.ID = aircraft.id;
    this.NAME = aircraft.name;
    this.IMG = aircraft.img;
    this.PARTS_NEEDED = aircraft.parts;
    this.STARTING_PRICE = aircraft.price;
    this.currentPrice = aircraft.price;
    this.productionStage = 0;
    this.workers = 0;
    this.quantity = 0;
  }
}
