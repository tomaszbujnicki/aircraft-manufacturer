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
	for (let i = 0; i < employees.length; i++) createEmployeesItem(i);
	/*for (let i = 0; i < parts.length; i++) createPartsItem(i);*/
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
function createEmployeesItem(x){
	
	if ((!employees[x]) || (document.getElementById("employeesItem" + x))) return ;

	const el = document.createElement("div");
	el.setAttribute("id", "employeesItem" + x);
	el.classList.add("employee");			

	const el_0 = document.createElement("div");

	const el_0_0 = document.createElement("img");
	el_0_0.setAttribute("id", "employeeImg" + x);
	el_0_0.classList.add("employee__img");

	const el_1 = document.createElement("div");
	el_1.classList.add("employee__add-remove");

	const el_1_0 = document.createElement("button");
	el_1_0.setAttribute("id", "addEmployee" + x);
	el_1_0.classList.add("employee__btn-add");

	const el_1_1 = document.createElement("button");
	el_1_1.setAttribute("id", "removeEmployee" + x);
	el_1_1.classList.add("employee__btn-add", "employee__btn-add--remove");
	el_1_1.setAttribute("title", "fire employee");

	const el_3 = document.createElement("div");
	el_3.setAttribute("id", "employee" + x);
	el_3.classList.add("employee__value");
	el_3.setAttribute("title", "number / max");

	const el_4 = document.createElement("div");
	el_4.setAttribute("id", "employeeName" + x);
	el_4.classList.add("employee__value", "employee__value--left");

	const el_5 = document.createElement("div");
	el_5.setAttribute("id", "salary" + x);
	el_5.classList.add("employee__value","employee__value--bold");
	el_5.setAttribute("title", "weekly per person");

	const el_6 = document.createElement("div");
	el_6.setAttribute("id", "totalSalary" + x);
	el_6.classList.add("employee__value");
	el_6.setAttribute("title", "weekly for everyone");


	document.getElementById("employeesDIV").appendChild(el);
	el.appendChild(el_0);
	el_0.appendChild(el_0_0);
	el.appendChild(el_1);
	el_1.appendChild(el_1_0);
	el_1.appendChild(el_1_1);
	el.appendChild(el_3);
	el.appendChild(el_4);
	el.appendChild(el_5);
	el.appendChild(el_6);
}

//	3. Parts ......................................................................................
function createPartsItem(item){

	const el = document.createElement("div");
	el.classList.add("employee", "employee--parts");			
	el.innerHTML = `
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
			${item.stock}
		</div>
		<div class="employee__value" title="unit price">
			${item.price}
		</div>
		<div class="employee__value employee__value--bold" title="total price">
			${item.totalPrice.toLocaleString()}
		</div>
		<div class="employee__value">
			<button id="buy-stock${stockArr.length}" class="employee__buy-btn" title="buy stock"></button>
		</div>`
	
	document.getElementById("partsDIV").appendChild(el);	

		
	const sellButton = document.getElementById(`buy-stock${stockArr.length}`);
	console.log(sellButton);
	console.log(document.getElementById(`buy-stock${stockArr.length}`));
	sellButton.addEventListener("click", function() {
		if (dollars >= item.totalPrice) {
			item.buy();
			disableElement(this);
			clickTrue(el);
			removeDOM_ELEMENT(el, 6000);
		}
		else{
			clickFalse(el);
			clickFalse(document.getElementById("dollars"));
		}
	});
	
}