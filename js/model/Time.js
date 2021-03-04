import { Event } from '../controller/Event';

export class Time {
  constructor(date) {
    this.date = date;
    this.timeRatio = 10_800; // 1 sec in real <=> 3 h in game
    this.speedMultiplier = 1;
    this.stepInMilliseconds = 30;
    this.stepInGame = () =>
      this.stepInMilliseconds * this.timeRatio * this.speedMultiplier;
    this.stepEvent = new Event();
    this.dayEvent = new Event();
    this.weekEvent = new Event();
    this.monthEvent = new Event();
    this.yearEvent = new Event();
  }
  setSpeedMultiplier(speed) {
    this.speedMultiplier = speed;
  }

  nextStep() {
    const timeProgressInMilliseconds = this.stepInGame();
    const dateBefore = this.date.getDate();

    this.date.setTime(this.date.getTime() + timeProgressInMilliseconds);

    if (dateBefore != this.date.getDate()) this.nextDay();

    const millisecondsInHour = 3_600_000;
    const timeProgressInHours = timeProgressInMilliseconds / millisecondsInHour;

    this.stepEvent.publish({
      date: this.date,
      timeProgressInHours,
    });
  }

  nextDay() {
    if (this.date.getDay() == 0) this.nextWeek();
    if (this.date.getDate() == 1) this.nextMonth();

    this.dayEvent.publish();
  }
  nextWeek() {
    this.weekEvent.publish();
  }
  nextMonth() {
    if (this.date.getMonth() == 0) this.nextYear();
    this.monthEvent.publish();
  }
  nextYear() {
    this.yearEvent.publish();
  }
}
