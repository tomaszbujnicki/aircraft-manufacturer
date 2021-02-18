export class List {
  constructor() {
    this.list = [];
    this.subscribers = [];
  }
  insert(item) {
    this.list.push(item);
    this.subscribers.forEach((sub) => sub('insert', item));
  }
  delete(item) {
    const index = this.list.findIndex((e) => e === item);
    if (index !== -1) {
      this.list.splice(index, 1);
      this.subscribers.forEach((sub) => sub('delete', item));
    }
  }
  getItemBy(id) {
    const item = this.list.find((e) => e.id === id);
    return item;
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
}
