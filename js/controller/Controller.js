import { Data } from '../data/Data';
import { Service } from '../data/Service';
import { Model } from '../model/Model';
import { View } from '../view/View';
import { subscribeData } from './subscribeData';
import { subscribeService } from './subscribeService';
import { subscribeModel } from './subscribeModel';
import { subscribeView } from './subscribeView';

export class Controller {
  constructor() {
    this.data = new Data();
    this.service = new Service(this.data);
    this.model = new Model(this.data, this.service);
    this.view = new View();

    subscribeData(this.data, this.view);
    subscribeService(this.service, this.view);
    subscribeModel(this.model, this.view);
    subscribeView(this.view, this.model);
  }
}
