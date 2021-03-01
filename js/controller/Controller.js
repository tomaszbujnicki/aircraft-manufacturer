import { Data } from '../data/Data';
import { Model } from '../model/Model';
import { View } from '../view/View';
import { subscribeData } from './subscribeData';
import { subscribeModel } from './subscribeModel';
import { subscribeView } from './subscribeView';

export class Controller {
  constructor() {
    this.data = new Data();
    this.model = new Model(this.data);
    this.view = new View();

    subscribeData(this.data, this.view);
    subscribeModel(this.model, this.view);
    subscribeView(this.view, this.model);
  }
}
