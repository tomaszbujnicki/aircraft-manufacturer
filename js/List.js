export class List {
  constructor(view) {
    this.view = view;
    this.list = [];
    this.subscribers = [];
  }
  insert(item) {
    console.log('INSERT:');
    this.list.push(item);
    this.view.createElement(item);
  }
  delete(item) {
    const index = this.list.findIndex((e) => e === item);
    if (index !== -1) {
      this.list.splice(index, 1);
      console.log('pls DEL');
      console.log(item);
      this.view.removeElement(item);
    } else console.log('item cant be delated');
  }
  isOnList(item) {
    const index = this.list.findIndex((e) => e === item);
    return index !== -1;
  }
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
}
