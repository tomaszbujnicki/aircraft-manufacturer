function createElementEmployee(employee){

	if(!employee) return;
	
	const employeeElement = document.createElement("div");
	employeeElement.setAttribute("id", "employeeItem" + employee.id);
	employeeElement.classList.add("employee");
	employeeElement.innerHTML=`
		<button class="employeeDescriptionButton" id="employeeCard${employee.id}">
			<img class="employee__img" src=${employee.img}>
		</button>
		<div class="worker__add-remove">
			<button id="addEmployee${employee.id}" class="employee__btn-add" title="hire cost: $ ${employee.employmentCost}"></button>
			<button id="removeEmployee${employee.id}" class="employee__btn-add employee__btn-add--remove" title="fire employee"></button>
		</div>
		<div id="employee${employee.id}" class="employee__value" title="number / max">
			${employee.number} / ${employee.maxNumber}
		</div>
		<div class="employee__value employee__value--left" title="${employee.description}">
			${employee.name}
		</div>
		<div id="salary${employee.id}" class="employee__value employee__value--bold" title="weekly per person">
		$  ${employee.salary}
		</div>
		<div id="totalSalary${employee.id}" class="employee__value" title="weekly for everyone">
			$ ${(employee.salary*employee.number).toLocaleString()}
		</div>`;

	document.getElementById("employeesDIV").appendChild(employeeElement);
	const addEmployeeButton = document.getElementById("addEmployee" + employee.id);
	const removeEmployeeButton = document.getElementById("removeEmployee" + employee.id);

	addEmployeeButton.addEventListener("click", () => {employee.hire()});
	removeEmployeeButton.addEventListener("click", () => {employee.fire()});

	const imageButton = document.getElementById( "employeeCard" + employee.id )
	imageButton.addEventListener("click", () => openEmployeeDescription(employee.id));
	
}

function addEmployee(employee) {
	employee.number++;
	calculateExpenses(employee.employmentCost, "recruitment");
	showEmployeesNumber(employee.id);
	showEmployeesSalary(employee.id);
	clickTrue(document.getElementById("employee" + employee.id));
}

function removeEmployee(employee) {
		employee.number--;
		showEmployeesNumber(employee.id);
		showEmployeesSalary(employee.id);
		clickTrue(document.getElementById("employee" + employee.id));
}