import { employeeList } from '../data/dataForNewGame/employees';

export function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomPercent(min, max) {
  return getRndInteger(min, max) / 100;
}

export const productionForce = () => {
  const PRODUCTION_FORCE = 1000;
  let force = PRODUCTION_FORCE;
  const workers = employeeList[0].number;
  const foremen = employeeList[1].number;
  const withoutSupervision = workers - foremen * 4;

  if (withoutSupervision > 0) {
    const workerForce = force / workers;
    force -= (withoutSupervision * workerForce) / 2;
  }
  return force;
};
