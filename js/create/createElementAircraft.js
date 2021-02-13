import { addWorker, removeWorker, sell } from '../functions/aircraft';

export function createElementAircraft(aircraft) {
  if (!aircraft) return;
  const aircraftElement = document.createElement('div');
  aircraftElement.setAttribute('id', 'aircraftItem' + aircraft.ID);
  aircraftElement.classList.add('aircraft');
  aircraftElement.innerHTML = `
	<div class = "worker__icon" ><img class = "worker__img" src = ${aircraft.IMG}>
	</div>
	<div class="worker__add-remove">
		<button id="addWorkerButton${
      aircraft.ID
    }" class="worker__btn-add" title="assign a worker"></button >
		<button id = "removeWorkerButto${
      aircraft.ID
    }" class = "worker__btn-add worker__btn-add--remove" title = "dismiss a worker" > </button>
	</div>
	<div id = "workers${
    aircraft.ID
  }" class = "worker__value" title = "number of workers" >
	${aircraft.workers}
	</div>
	<div class="aircraft__name">
		<span >${aircraft.NAME}</span >
		<div class = "bar" >
			<div id = "myBar${aircraft.ID}" class = "bar--color">
			</div>
		</div>
	</div>
	<div id="quantity${
    aircraft.ID
  }" class="worker__value" title="number of aircraft">
	${aircraft.quantity}
	</div>
	<div class = "worker__icon" >
		<button id = "sellAircraftButton${
      aircraft.ID
    }" class = "aircraft__btn-sell" title = "sell aircraft" ></button>
	</div>
	<div id = "price${
    aircraft.ID
  }" class = "worker__value" title = "selling price" > $ ${aircraft.currentPrice.toLocaleString()}
	</div>`;
  document.getElementById('aircraftDIV').appendChild(aircraftElement);
  const sellAircraftButton = document.getElementById(
    `sellAircraftButton${aircraft.ID}`
  );
  sellAircraftButton.addEventListener('click', () => {
    sell(aircraft);
  });
  const addWorkerButton = document.getElementById(
    `addWorkerButton${aircraft.ID}`
  );
  addWorkerButton.addEventListener('click', () => {
    addWorker(aircraft);
  });
  const removeWorkerButton = document.getElementById(
    `removeWorkerButto${aircraft.ID}`
  );
  removeWorkerButton.addEventListener('click', () => {
    removeWorker(aircraft);
  });
}
