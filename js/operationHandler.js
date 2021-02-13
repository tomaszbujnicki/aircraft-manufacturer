export class operationHandler {
  constructor(operationList) {
    this.operationList = operationList;
  }

  insert(object, action) {
    this.operationList.push({ object, action });
  }

  select() {}
}
