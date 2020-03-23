const aircrafts = [
	{
		id: 0,
		name: "Beoing 737-700",
		img: "aircrafts/img/aeroplane2.svg",
		parts: 100,
		corePrice: 150000,
		price: 150000,
		passengers: 110,
		quantity: 10,
		productionStage: 0,
		workers: 0
	},
	{
		id: 1,
		name: "Helicopter",
		img: "aircrafts/img/airplane1.svg",
		parts: 10,
		corePrice: 15000,
		price: 15000,
		passengers: 110,
		quantity: 0,
		productionStage: 0,
		workers: 0
	},
	{
		id: 2,
		name: "Airbus A320",
		img: "aircrafts/img/aeroplane3.svg",
		parts: 99,
		corePrice: 105000,
		price: 105000,
		passengers: 70,
		quantity: 0,
		productionStage: 0,
		workers: 0
	}
]


function createElementAircraft(aircraft){
	if (!aircraft) return ;

	const aircraftElement = document.createElement("div");
	aircraftElement.setAttribute("id", "aircraftItem" + aircraft.id);
	aircraftElement.classList.add("aircraft");
	aircraftElement.innerHTML=`
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
	<div id="quantity${aircraft.id}" class="worker__value" title="number of aircrafts">
	${aircraft.quantity}
	</div>
	<div class = "worker__icon" >
		<button id = "sellAircraftButton${aircraft.id}" class = "aircraft__btn-sell" title = "sell aircraft" ></button>
	</div>
	<div id = "price${aircraft.id}" class = "worker__value" title = "selling price" > $ ${aircraft.price.toLocaleString()}
	</div>`

	document.getElementById("aircraftDIV").appendChild(aircraftElement);

	const sellAircraftButton = document.getElementById(`sellAircraftButton${aircraft.id}`);
	sellAircraftButton.addEventListener("click", ()=> {sell(aircraft, aircraft.id)} );

	const addWorkerButton = document.getElementById(`addWorkerButton${aircraft.id}`);
	addWorkerButton.addEventListener("click", ()=> {addWorker(aircraft, aircraft.id)} );

	const removeWorkerButton = document.getElementById(`removeWorkerButto${aircraft.id}`);
	removeWorkerButton.addEventListener("click", ()=> {removeWorker(aircraft, aircraft.id)} );
}

function sell(aircraft,id) {
	if (aircraft.quantity > 0) {
		aircraft.quantity -= 1;
		calculateIncome(aircraft.price, "sale");
		calculateAircraftPrice(aircraft, id);
		showQuantity(id);
		clickTrue(document.getElementById("quantity" + id));
		clickTrue(document.getElementById("price" + id));
		clickTrue(document.getElementById("cash"));
	} else clickFalse(document.getElementById("quantity" + id));
}


function addWorker(aircraft,id) {
	if (calculateAvailableWorkers()) {
		aircraft.workers++;
		showAvailableWorkers();
		showWorkers(id);
		clickTrue(document.getElementById("workers" + id));
	} else {
		clickFalse(document.getElementById("workers"));
		clickFalse(document.getElementById("workers" + id));
	}
}

function removeWorker(aircraft, id) {
	if (aircraft.workers > 0) {
		aircraft.workers--;
		showAvailableWorkers();
		showWorkers(id);
		clickTrue(document.getElementById("workers" + id));
	} else clickFalse(document.getElementById("workers" + id));
}

function calculateAircraftPrice(aircraft, id){
	aircraft.price -= aircraft.corePrice * 0.01;
	document.getElementById(`price${id}`).textContent = aircraft.price.toLocaleString()
}