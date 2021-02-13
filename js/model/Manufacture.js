export class Manufacture {
  constructor(data) {
    this.aircraftList = data.aircraftList;
    this.subscribers = [];
  }

  add(aircraft) {
    this.aircraftList.push(aircraft);
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
}
