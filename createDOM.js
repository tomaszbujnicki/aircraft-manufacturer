/*

	0. Creat DOM items

	1. Aircrafts

	2. Employees

	3. Stock




*/
//	0. Creat DOM items ......................................................................................

createDOM_items()

function createDOM_items(){
	for (let i = 0; i < airplanes.length; i++) createElementAircraft(airplanes[i]);
	for (let i = 0; i < employees.length; i++) createElementEmployee(employees[i]);
}


//	1. Aircrafts ......................................................................................

function createElementAircraft(aircraft){
	if (!aircraft) return ;

	const aircraftElement = document.createElement("div");
	aircraftElement.setAttribute("id", "airplaneItem" + aircraft.id);
	aircraftElement.classList.add("airplane");
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
	<div class="airplane__name">
		<span >${aircraft.name}</span >
		<div class = "bar" >
			<div id = "myBar${aircraft.id}" class = "bar--color">
			</div>
		</div>
	</div>
	<div id="quantity${aircraft.id}" class="airplane__quantity" title="number of aircrafts">
	${aircraft.quantity}
	</div>
	<div class = "worker__icon" >
		<button id = "sell${aircraft.id}" class = "airplane__btn-sell" title = "sell airplane" ></button>
	</div>
	<div id = "price${aircraft.id}" class = "airplane__quantity" title = "selling price" > $ ${aircraft.price.toLocaleString()}
	</div>`

	document.getElementById("aircraftDIV").appendChild(aircraftElement);
}

//	2. Employees ......................................................................................
function createElementEmployee(employee){

	if(!employee) return;
	
	const employeeElement = document.createElement("div");
	employeeElement.setAttribute("id", "employeesItem" + employee.id);
	employeeElement.classList.add("employee");
	employeeElement.innerHTML=`
		<div>
			<img class="employee__img" src=${employee.img}>
		</div>
		<div class="employee__add-remove">
			<button id="addEmployee${employee.id}" class="employee__btn-add" title="hire cost: $ ${employee.employmentCost}"></button>
			<button id="removeEmployee${employee.id}" class="employee__btn-add employee__btn-add--remove" title="fire employee"></button>
		</div>
		<div id="employee${employee.id}" class="employee__value" title="number / max">
			${employee.number} / ${employee.maxNumber}
		</div>
		<div class="employee__value employee__value--left" title="Workers build aircrafts">
			${employee.name}
		</div>
		<div id="salary${employee.id}" class="employee__value employee__value--bold" title="weekly per person">
			${employee.salary}
		</div>
		<div id="totalSalary${employee.id}" class="employee__value" title="weekly for everyone">
			$ ${employee.salary*employee.number}
		</div>`	

	document.getElementById("employeesDIV").appendChild(employeeElement);

}

//	3. Stock ......................................................................................
function createElementStock(stock){

	if (!stock) return ;

	const stockElement = document.createElement("div");
	stockElement.classList.add("employee", "employee--parts");			
	stockElement.innerHTML = `
		<div>
			<img src=${stock.flag} class="employee__img" title=${stock.country}>
		</div>
		<div class="employee__value employee__value--left" title="company">
			${stock.company}
		</div>
		<div class="employee__value" title="delivery time">
			${stock.time}
		</div>
		<div class="employee__value" title="delivery risk">
			${stock.risk}
		</div>
		<div class="employee__value" title="amount of stock">
			${stock.amount}
		</div>
		<div class="employee__value" title="unit price">$ 
			${stock.price}
		</div>
		<div class="employee__value employee__value--bold" title="total price">$ 
			${stock.totalPrice.toLocaleString()}
		</div>`;
	
		const sellButton = document.createElement("div");
		sellButton.classList.add("employee__value");			
		sellButton.innerHTML = `
				<button class="employee__buy-btn" title="buy stock">
				</button>`;
	
	document.getElementById("partsDIV").appendChild(stockElement);
	stockElement.appendChild(sellButton);
	
	sellButton.addEventListener("click", function() {
		if (dollars >= stock.totalPrice) {
			stock.buy();
			disableElement(this);
			clickTrue(stockElement);
			removeDOM_ELEMENT(stockElement, 6000);
		}
		else{
			clickFalse(stockElement);
			clickFalse(document.getElementById("dollars"));
		}
	});
	
}