function createElementAircraft(aircraft) {
	if (!aircraft)
		return;
	const aircraftElement = document.createElement("div");
	aircraftElement.setAttribute("id", "aircraftItem" + aircraft.id);
	aircraftElement.classList.add("aircraft");
	aircraftElement.innerHTML = `
	<div class = "worker__icon" ><img class = "worker__img" src = ${aircraft.img}>
	</div>
	<div class="worker__add-remove">
		<button id="addWorkerButton${aircraft.id}" class="worker__btn-add" title="assign a worker"></button >
		<button id = "removeWorkerButto${aircraft.id}" class = "worker__btn-add worker__btn-add--remove" title = "dismiss a worker" > </button>
	</div>
	<div id = "workers${aircraft.id}" class = "worker__value" title = "number of workers" >
	${aircraft.workers}
	</div>
	<div class="aircraft__name">
		<span >${aircraft.name}</span >
		<div class = "bar" >
			<div id = "myBar${aircraft.id}" class = "bar--color">
			</div>
		</div>
	</div>
	<div id="quantity${aircraft.id}" class="worker__value" title="number of aircraft">
	${aircraft.quantity}
	</div>
	<div class = "worker__icon" >
		<button id = "sellAircraftButton${aircraft.id}" class = "aircraft__btn-sell" title = "sell aircraft" ></button>
	</div>
	<div id = "price${aircraft.id}" class = "worker__value" title = "selling price" > $ ${aircraft.price.toLocaleString()}
	</div>`;
	document.getElementById("aircraftDIV").appendChild(aircraftElement);
	const sellAircraftButton = document.getElementById(`sellAircraftButton${aircraft.id}`);
	sellAircraftButton.addEventListener("click", () => { sell(aircraft); });
	const addWorkerButton = document.getElementById(`addWorkerButton${aircraft.id}`);
	addWorkerButton.addEventListener("click", () => { addWorker(aircraft); });
	const removeWorkerButton = document.getElementById(`removeWorkerButto${aircraft.id}`);
	removeWorkerButton.addEventListener("click", () => { removeWorker(aircraft); });
}
