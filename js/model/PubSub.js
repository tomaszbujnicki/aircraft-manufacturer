export class PubSub {
  constructor() {
    this.events = {};
  }

  subscribe(name, func) {
    this.events[name] = this.events[name] || [];
    this.events[name].push(func);
  }

  unsubscribe(name, func) {
    if (this.events[name]) {
      this.events[name] = this.events[name].filter((f) => f !== func);
    }
  }

  publish(name, data) {
    if (this.events[name]) {
      console.log('PUBLISH: ' + name);
      this.events[name].forEach((func) => {
        func(data);
      });
    }
  }
}
/*
 for (const obj in data) {
  if (data[obj].hasOwnProperty('subscribers')) {
    data[obj].subscribe((action, item) => {
      pubSub.publish(action, item);
    });
  }
} 

  pubSub.subscribe('insert', (item) => {
    view.createElement(item);
  });
  
  */
