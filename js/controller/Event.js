export class Event {
  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  publish(params) {
    this.subscribers.forEach((sub) => {
      sub(params);
    });
  }
}
