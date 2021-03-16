import { Data } from '../data/Data';
import { Model } from '../model/Model';
import { View } from '../view/View';
import { controlTimeEvents } from './controlTimeEvents';
import { controlView } from './controlView';
import { controlViewEvents } from './controlViewEvents';

export class Controller {
  constructor() {
    this.data = new Data();
    this.model = new Model(this.data);
    this.view = new View();

    controlView(this.data, this.model, this.view);
    controlViewEvents(this.view, this.model, this.data);
    controlTimeEvents(this.model, this.data);
  }
}
