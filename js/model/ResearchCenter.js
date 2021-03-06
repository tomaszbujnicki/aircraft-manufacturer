import { Aircraft } from './Aircraft';

export class ResearchCenter {
  constructor(humanResources, aircrafts, designs) {
    this.humanResources = humanResources;
    this.aircrafts = aircrafts;
    this.designs = designs;
  }

  invent(workTimeInHours) {
    const design = this.designs.list[0];
    if (!design) return;

    design.inventionPointsCompleted +=
      this.humanResources.engineers * workTimeInHours;

    if (design.inventionPointsCompleted >= design.inventionPointsNeeded) {
      this.remove(design);
    }
  }

  remove(design) {
    this.designs.delete(design);
    this.aircrafts.insert(new Aircraft(design));
  }
}
