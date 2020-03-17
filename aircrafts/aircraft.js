const aircrafts = [
	{
		id: 0,
		name: "Beoing 737-700",
		img: "aircrafts/img/aeroplane2.svg",
		parts: 100,
		price: 150000,
		passengers: 110,
		quantity: 0,
		productionStage: 0,
		workers: 0
	},
	{
		id: 1,
		name: "Helicopter",
		img: "aircrafts/img/airplane1.svg",
		parts: 10,
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
		<button id="addWorker${aircraft.id}" class="worker__btn-add" title="assign a worker"></button >
		<button id = "removeWorker${aircraft.id}" class = "worker__btn-add worker__btn-add--remove" title = "dismiss a worker" > </button>
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
		<button id = "sell${aircraft.id}" class = "aircraft__btn-sell" title = "sell aircraft" ></button>
	</div>
	<div id = "price${aircraft.id}" class = "worker__value" title = "selling price" > $ ${aircraft.price.toLocaleString()}
	</div>`

	document.getElementById("aircraftDIV").appendChild(aircraftElement);
}