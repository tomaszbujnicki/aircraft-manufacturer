import { Event } from '../Event';

export class List {
  constructor() {
    this.uniqueId = 0;
    this.list = [];
    this.insertEvent = new Event();
    this.deleteEvent = new Event();
  }
  insert(item) {
    item.id = this.getUniqueId();
    this.list.push(item);
    this.insertEvent.publish(item);
  }
  getUniqueId() {
    this.uniqueId++;
    return this.uniqueId;
  }
  delete(item) {
    const index = this.list.findIndex((e) => e === item);
    if (index !== -1) {
      this.list.splice(index, 1);
      this.deleteEvent.publish(item);
    }
  }
  getItemById(id) {
    const item = this.list.find((e) => e.id === id);
    return item;
  }
}
