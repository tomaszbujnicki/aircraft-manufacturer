const employees = [
	{
		id: 0,
		name: "Workers",
		img: "employees/img/businessman.svg",
		number: 0,
		maxNumber: 20,
		salary: 1750,
		employmentCost: 2000,
		description: "Workers build aircrafts"
	},
	{
		id: 1,
		name: "Engineers",
		img: "employees/img/businessman2.svg",
		number: 0,
		maxNumber: 10,
		salary: 4200,
		employmentCost: 8000,
		description: "Engineers develop new aircrafts"
	},
	{
		id: 2,
		name: "Human Resources",
		img: "employees/img/girl.svg",
		number: 0,
		maxNumber: 10,
		salary: 3200,
		employmentCost: 4000,
		description: "HR care about all employees"
	}
]
let availableWorkers = employees[0].number;

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
	document.getElementById("addEmployee" + employee.id).addEventListener("click", function () {
		addEmployee(employee);
	});
	document.getElementById("removeEmployee" + employee.id).addEventListener("click", function () {
		removeEmployee(employee);
	});

}

function addEmployee(employee) {
	if (dollars >= employee.employmentCost) {
		if (employee.maxNumber > employee.number) {
			employee.number++;
			calculateExpenses(employee.employmentCost, "recruitment");
			showEmployeesNumber(employee.id);
			showEmployeesSalary(employee.id);
			if (employee.id == 0) {
				availableWorkers++;
				showAvailableWorkers();
			}
			clickTrue(document.getElementById("employee" + employee.id));
		} else clickFalse(document.getElementById("employee" + employee.id));
	} else {
		clickFalse(document.getElementById("dollars"));
		clickFalse(document.getElementById("employee" + employee.id));
	}

}

function removeEmployee(employee) {
	if ((employee.id == 0) && (availableWorkers <= 0)) {
		clickFalse(document.getElementById("employee" + employee.id));
		clickFalse(document.getElementById("workers"));
		return;
	}


	if (0 < employee.number) {
		employee.number--;
		showEmployeesNumber(employee.id);
		showEmployeesSalary(employee.id);
		if (employee.id == 0) {
			availableWorkers--;
			showAvailableWorkers();
		}

		clickTrue(document.getElementById("employee" + employee.id));
	} else {
		clickFalse(document.getElementById("employee" + employee.id));
	}

}

for (let i = 0; i < employees.length; i++) createElementEmployee(employees[i]);