import worker from '../../../img/employees/worker.svg';
import foreman from '../../../img/employees/foreman.svg';
import HRImg from '../../../img/employees/get-hired.svg';
import trader from '../../../img/employees/businessman.svg';
import engineer from '../../../img/employees/engineer.svg';

export default [
  {
    id: 0,
    name: 'Workers',
    img: worker,
    number: 10,
    maxNumberPerHR: 16,
    salary: 1800,
    hireCost: 4000,
    description: 'Workers build aircraft',
  },
  {
    id: 1,
    name: 'Foremen',
    img: foreman,
    number: 0,
    maxNumberPerHR: 4,
    salary: 2600,
    hireCost: 6000,
    description: 'Foremen help workers build aircraft',
  },
  {
    id: 2,
    name: 'Human Resources',
    img: HRImg,
    number: 0,
    maxNumberPerHR: 1,
    salary: 3200,
    hireCost: 9000,
    description: 'HR care about all employees',
  },
  {
    id: 3,
    name: 'Traders',
    img: trader,
    number: 0,
    maxNumberPerHR: 3,
    salary: 3800,
    hireCost: 10000,
    description: 'Traders keep high the price of aircraft',
  },
  {
    id: 4,
    name: 'Engineers',
    img: engineer,
    number: 0,
    maxNumberPerHR: 2,
    salary: 5000,
    hireCost: 25000,
    description: 'Engineers develop new aircraft',
  },
];
