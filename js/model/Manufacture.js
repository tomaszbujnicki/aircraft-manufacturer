export class Manufacture {
  constructor(aircraftList = []) {
    this.aircraftList = aircraftList;
    this.subscribers = [];
  }

  add(aircraft) {
    this.aircraftList.push(aircraft);
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
}
