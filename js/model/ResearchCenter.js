import { Aircraft } from './Aircraft';
import { MESSAGE_TYPE } from './MessageCenter';

export class ResearchCenter {
  constructor(data, messageCenter) {
    this.data = data;
    this.designs = data.designs;
    this.aircrafts = data.aircrafts;
    this.messageCenter = messageCenter;
  }

  invent(workTimeInHours) {
    const design = this.designs.list[0];
    if (!design) return;

    design.inventionPointsCompleted += this.data.engineers * workTimeInHours;

    if (design.inventionPointsCompleted >= design.inventionPointsNeeded) {
      this.makeNew(design);
    }
  }

  makeNew(design) {
    this.designs.delete(design);
    this.aircrafts.insert(new Aircraft(design));
    this.messageCenter.new(
      MESSAGE_TYPE.SUCCESS,
      `A new aircraft design has been developed.<br />
      ${design.name} production possible.`
    );
  }
}
