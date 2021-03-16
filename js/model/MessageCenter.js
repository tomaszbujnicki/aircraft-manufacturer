import { Event } from '../controller/Event';

export const MESSAGE_TYPE = {
  FAIL: 'fail',
  SUCCESS: 'success',
  NEUTRAL: 'neutral',
};

export class MessageCenter {
  constructor() {
    this.messages = [];
    this.messageEvent = new Event();
  }
  new(type, text) {
    this.messages.unshift({ type, text });
    this.messageEvent.publish({ type, text });
  }
}
