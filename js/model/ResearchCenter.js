import { Aircraft } from './Aircraft';

export class ResearchCenter {
  constructor(data) {
    this.data = data;
    this.designs = data.designs;
    this.aircrafts = data.aircrafts;
  }

  invent(workTimeInHours) {
    const design = this.designs.list[0];
    if (!design) return;

    design.inventionPointsCompleted += this.data.engineers * workTimeInHours;

    if (design.inventionPointsCompleted >= design.inventionPointsNeeded) {
      this.remove(design);
    }
  }

  remove(design) {
    this.designs.delete(design);
    this.aircrafts.insert(new Aircraft(design));
  }
}
