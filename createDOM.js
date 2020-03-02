/*

	0. Creat DOM items

	1. Aircrafts

	2. Employees

	3. Parts




*/
//	0. Creat DOM items ......................................................................................
createDOM_items();

function createDOM_items(){
	for (let i = 0; i < airplanes.length; i++) createAircraftItem(i);
	for (let i = 0; i < employees.length; i++) createEmployeesItem(employees[i],i);
}


//	1. Aircrafts ......................................................................................

function createAircraftItem(x){
	
	if ((!airplanes[x]) || (document.getElementById("airplaneItem" + x))) return ;

	const el = document.createElement("div");
	el.setAttribute("id", "airplaneItem" + x);
	el.classList.add("airplane");			

	const el_0 = document.createElement("div");
	el_0.classList.add("worker__icon");

	const el_0_0 = document.createElement("img");
	el_0_0.setAttribute("id", "airplaneImg" + x);
	el_0_0.classList.add("worker__img");

	const el_1 = document.createElement("div");
	el_1.classList.add("worker__add-remove");

	const el_1_0 = document.createElement("button");
	el_1_0.setAttribute("id", "addWorker" + x);
	el_1_0.classList.add("worker__btn-add");
	el_1_0.setAttribute("title", "assign a worker");

	const el_1_1 = document.createElement("button");
	el_1_1.setAttribute("id", "removeWorker" + x);
	el_1_1.classList.add("worker__btn-add", "worker__btn-add--remove");
	el_1_1.setAttribute("title", "dismiss a worker");

	const el_2 = document.createElement("div");
	el_2.setAttribute("id", "workers" + x);
	el_2.classList.add("worker__value");
	el_2.setAttribute("title", "number of workers");

	const el_3 = document.createElement("div");
	el_3.setAttribute("id", "airplane" + x);
	el_3.classList.add("airplane__name");

	const el_3_0 = document.createElement("span");
	el_3_0.setAttribute("id", "airplaneName" + x);

	const el_3_1 = document.createElement("div");
	el_3_1.classList.add("bar");

	const el_3_1_0 = document.createElement("div");
	el_3_1_0.setAttribute("id", "myBar" + x);
	el_3_1_0.classList.add("bar--color");

	const el_4 = document.createElement("div");
	el_4.setAttribute("id", "quantity" + x);
	el_4.classList.add("airplane__quantity");
	el_4.setAttribute("title", "number of aircrafts");

	const el_5 = document.createElement("div");
	el_5.classList.add("worker__icon");

	const el_5_0 = document.createElement("button");
	el_5_0.setAttribute("id", "sell" + x);
	el_5_0.classList.add("airplane__btn-sell");
	el_5_0.setAttribute("title", "sell airplane");

	const el_6 = document.createElement("div");
	el_6.setAttribute("id", "price" + x);
	el_6.classList.add("airplane__quantity");
	el_6.setAttribute("title", "selling price");


	document.getElementById("aircraftDIV").appendChild(el);
	el.appendChild(el_0);
	el_0.appendChild(el_0_0);
	el.appendChild(el_1);
	el_1.appendChild(el_1_0);
	el_1.appendChild(el_1_1);
	el.appendChild(el_2);
	el.appendChild(el_3);
	el_3.appendChild(el_3_0);
	el_3.appendChild(el_3_1);
	el_3_1.appendChild(el_3_1_0);
	el.appendChild(el_4);
	el.appendChild(el_5);
	el_5.appendChild(el_5_0);
	el.appendChild(el_6);
}

//	2. Employees ......................................................................................
function createEmployeesItem(employee, employeeID){
	
	const el = document.createElement("div");
	el.setAttribute("id", "employeesItem" + employeeID);
	el.classList.add("employee");
	el.innerHTML=`
		<div>
			<img class="employee__img" src=${employee.img}>
		</div>
		<div class="employee__add-remove">
			<button id="addEmployee${employeeID}" class="employee__btn-add" title="hire cost: $ ${employee.employmentCost}"></button>
			<button id="removeEmployee${employeeID}" class="employee__btn-add employee__btn-add--remove" title="fire employee"></button>
		</div>
		<div id="employee${employeeID}" class="employee__value" title="number / max">
			${employee.number} / ${employee.maxNumber}
		</div>
		<div class="employee__value employee__value--left" title="Workers build aircrafts">
			${employee.name}
		</div>
		<div id="salary${employeeID}" class="employee__value employee__value--bold" title="weekly per person">
			${employee.salary}
		</div>
		<div id="totalSalary${employeeID}" class="employee__value" title="weekly for everyone">
			$ ${employee.salary*employee.number}
		</div>`	

	document.getElementById("employeesDIV").appendChild(el);

}

//	3. Parts ......................................................................................
function createElementStock(item){

	if (!item) return ;

	const partsItem = document.createElement("div");
	partsItem.classList.add("employee", "employee--parts");			
	partsItem.innerHTML = `
		<div>
			<img src=${item.flag} class="employee__img" title=${item.country}>
		</div>
		<div class="employee__value employee__value--left" title="company">
			${item.company}
		</div>
		<div class="employee__value" title="delivery time">
			${item.time}
		</div>
		<div class="employee__value" title="delivery risk">
			${item.risk}
		</div>
		<div class="employee__value" title="amount of stock">
			${item.amount}
		</div>
		<div class="employee__value" title="unit price">$ 
			${item.price}
		</div>
		<div class="employee__value employee__value--bold" title="total price">$ 
			${item.totalPrice.toLocaleString()}
		</div>`;
	
		const sellButton = document.createElement("div");
		sellButton.classList.add("employee__value");			
		sellButton.innerHTML = `
				<button class="employee__buy-btn" title="buy stock">
				</button>`;
	
	document.getElementById("partsDIV").appendChild(partsItem);
	partsItem.appendChild(sellButton);
	
	sellButton.addEventListener("click", function() {
		if (dollars >= item.totalPrice) {
			item.buy();
			disableElement(this);
			clickTrue(partsItem);
			removeDOM_ELEMENT(partsItem, 6000);
		}
		else{
			clickFalse(partsItem);
			clickFalse(document.getElementById("dollars"));
		}
	});
	
}