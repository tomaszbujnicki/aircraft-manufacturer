export class OperationHandler {
  constructor() {
    this.operationList = [];
    this.subscribers = [];
  }

  insert(obj, action) {
    this.operationList.push([obj, action]);
    this.subscribers.forEach((sub) => sub(obj, action));
  }

  select() {
    console.log('select: ' + this.operationList);
  }

  #delete() {
    console.log('delete: ' + this.operationList);
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
}
