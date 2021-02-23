import { Event } from '../Event';

export class Service {
  constructor(data) {
    this.data = data;
    this.workers = () => this.data.employeeList.getItemById(0);
    this.foremen = () => this.data.employeeList.getItemById(1);
    this.humRes = () => this.data.employeeList.getItemById(2);
    this.traders = () => this.data.employeeList.getItemById(3);
    this.engineers = () => this.data.employeeList.getItemById(4);
    this.unassignedWorkersEvent = new Event();
  }

  unassignedWorkers = () => {
    let remainingWorkers = this.workers().number;
    for (const aircraft of this.data.aircraftList.list) {
      remainingWorkers -= aircraft.workers;
    }
    return remainingWorkers;
  };
}
