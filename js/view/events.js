import { Event } from '../controller/Event';

export const events = {
  buyStock: new Event(),
  sellAircraft: new Event(),
  assignWorker: new Event(),
  revokeWorker: new Event(),
  hireEmployee: new Event(),
  fireEmployee: new Event(),
  speedLevel: new Event(),
  takeLoan: new Event(),
  payOffLoan: new Event(),
};
