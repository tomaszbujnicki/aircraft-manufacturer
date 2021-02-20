import { Data } from '../data/Data';
import { Model } from '../model/Model';
import { View } from '../view/View';

export class Controller {
  constructor() {
    this.view = new View();
    this.data = new Data();
    this.model = new Model(this.data);

    this.data.stockOfferList.insertEvent.subscribe((item) => {
      this.view.createStockOfferElement({
        id: item.id,
        type: item.type,
        flag: item.flag,
        country: item.country,
        company: item.company,
        risk: item.risk,
        time: item.time,
        amount: item.amount,
        unitPrice: item.unitPrice,
        totalPrice: item.totalPrice,
      });
    });
    this.data.deliveryList.insertEvent.subscribe((item) => {
      console.log('create element: delivery');
    });
    this.data.aircraftList.insertEvent.subscribe((item) => {
      console.log('create element: aircraft');
    });
    this.data.designList.insertEvent.subscribe((item) => {
      console.log('create element: design');
    });
    this.data.loanOfferList.insertEvent.subscribe((item) => {
      console.log('create element: loanOffer');
    });
    this.data.loanTakenList.insertEvent.subscribe((item) => {
      console.log('create element: loanTaken');
    });

    this.dataLists = [
      this.data.stockOfferList,
      this.data.deliveryList,
      this.data.aircraftList,
      this.data.designList,
      this.data.loanOfferList,
      this.data.loanTakenList,
    ];
    this.dataLists.forEach((list) => {
      list.deleteEvent.subscribe((item) => {
        const element = document.getElementById(item.type + item.id);
        element.remove();
      });
    });

    this.data.cash.changeEvent.subscribe((number) => {
      this.view.cash(this.data.cash.get());
      this.view.showDate(this.data.date);
      console.log(this.data.date);
    });
    this.data.parts.changeEvent.subscribe((number) => {
      this.view.parts(this.data.parts.get());
    });

    this.view.buyStockEvent.subscribe((id) =>
      this.model.supplyChain.buyStock(id)
    );
    console.log('CONTROLLER READY!');
  }
  run() {
    console.log('App is runing...');
  }
}
