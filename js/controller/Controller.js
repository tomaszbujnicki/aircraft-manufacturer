import { Data } from '../data/Data';
import { Model } from '../model/Model';
import { View } from '../view/View';
import { subscribeModel } from './subscribeModel';
import { subscribeView } from './subscribeView';

export class Controller {
  constructor() {
    this.data = new Data();
    this.model = new Model(this.data);
    this.view = new View();

    subscribeModel(this.data, this.model, this.view);
    subscribeView(this.view, this.model);
  }
}
