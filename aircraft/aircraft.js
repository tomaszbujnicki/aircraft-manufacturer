const aircraftArray = [
	{
		id: 0,
		name: "Beoing 737-700",
		img: "img/aircraft/aeroplane2.svg",
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
		img: "img/aircraft/airplane1.svg",
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
		img: "img/aircraft/aeroplane3.svg",
		parts: 99,
		corePrice: 105000,
		price: 105000,
		passengers: 70,
		quantity: 0,
		productionStage: 0,
		workers: 0
	}
]
aircraftToInvent= [
	{
		id: 3,
		name: "Porshe",
		img: "img/aircraft/aeroplane2.svg",
		parts: 100,
		corePrice: 150000,
		price: 150000,
		passengers: 110,
		quantity: 0,
		productionStage: 0,
		workers: 0,
		inventionPoints: 50
	},
	{
		id: 4,
		name: "Ferrari",
		img: "img/aircraft/airplane1.svg",
		parts: 10,
		corePrice: 15000,
		price: 15000,
		passengers: 110,
		quantity: 0,
		productionStage: 0,
		workers: 0,
		inventionPoints: 100
	},
	{
		id: 5,
		name: "Mercedes",
		img: "img/aircraft/aeroplane3.svg",
		parts: 99,
		corePrice: 105000,
		price: 105000,
		passengers: 70,
		quantity: 0,
		productionStage: 0,
		workers: 0,
		inventionPoints: 150
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
	<div id="quantity${aircraft.id}" class="worker__value" title="number of aircraft">
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
		dropAircraftPrice(aircraft, id);
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

function dropAircraftPrice(aircraft, id){
	aircraft.price -= aircraft.corePrice * 0.01;
	document.getElementById(`price${id}`).textContent = "$ " + aircraft.price.toLocaleString()
}

function raiseAircraftPrice(){

	for (let i = 0; i < employeeList[3].number; i++){
		let aircraft =  aircraftArray[getRndInteger(0, aircraftArray.length-1)];
		aircraft.price += aircraft.corePrice * 0.001;
		if (aircraft.price > aircraft.corePrice) aircraft.price = aircraft.corePrice;
		document.getElementById(`price${aircraft.id}`).textContent = "$ " + aircraft.price.toLocaleString()   
	}

}

function inventAircraft(){

		if (aircraftToInvent.length == 0) return ;

		let aircraft =  aircraftToInvent[0];
		aircraft.inventionPoints -= employeeList[4].number;
		if (aircraft.inventionPoints <= 0 ){
			creatNewMessage(`Our  engineers invented: ${aircraft.name}` , "#ff0000");
			aircraftArray.push(aircraft);
			aircraftToInvent.shift(aircraft);
			createElementAircraft(aircraft);
		}
 
}