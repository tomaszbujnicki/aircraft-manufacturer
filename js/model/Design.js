export class Design {
  constructor(design) {
    this.type = 'design';
    this.img = design.img;
    this.name = design.name;
    this.inventionPointsNeeded = design.inventionPoints;
    this.inventionPointsCompleted = 15;
    this.parts = design.parts;
    this.price = design.price;
    this.priceChange = design.priceChange;
  }
}
