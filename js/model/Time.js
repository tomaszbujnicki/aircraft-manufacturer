import { Event } from '../Event';

export class Time {
  constructor(date) {
    this.date = date;
    this.timeRatio = 3_600;
    this.speedMultiplier = 1;
    this.stepInMilliseconds = 30;
    this.MAX_SPEED = 4;
    this.stepInGame = () =>
      this.stepInMilliseconds * this.timeRatio * this.speedMultiplier;
    this.stepEvent = new Event();
  }
  nextStep() {
    const hour = this.date.getHours();
    const day = this.date.getDay();
    const date = this.date.getDate();

    const timeProgress = this.stepInGame();

    this.date.setTime(this.date.getTime() + timeProgress);

    this.stepEvent.publish({ date: this.date, timeProgress });
  }

  nextHour() {
    this.date.setTime(this.date.getTime() + this.hour);
  }
}
