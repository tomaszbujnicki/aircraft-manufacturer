export class ResearchCenter {
  constructor(designList = []) {
    this.designList = designList;
    this.subscribers = [];
  }

  add(design) {
    this.designList.push(design);
  }

  develop(design) {
    if (design.inventionPoints <= 0) {
      this.subscribers.forEach((s) => s(design));
      this.remove(design);
    }
  }

  remove(design) {
    const index = this.designList.findIndex((e) => e === design);
    if (index) {
      this.designList.splice(index, 1);
    }
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
}
