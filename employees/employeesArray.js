const employees = [
	{
		id: 0,
		name: "Workers",
		img: "employees/img/businessman.svg",
		number: 0,
		maxNumber: 10,
		salary: 1750,
		employmentCost: 2000,
        description: "Workers build aircrafts",
        hire(){
            const canIHire = (dollars >= this.employmentCost) && (this.maxNumber > this.number);
	        if (canIHire) {
                addEmployee(this);
                showAvailableWorkers(); 
            }   
            else{
                clickFalse(document.getElementById("employee" + this.id));
		        if (dollars < this.employmentCost) clickFalse(document.getElementById("dollars"));
            }  
        },
        fire(){
            const canIFire = calculateAvailableWorkers() > 0;
            if (canIFire){
                removeEmployee(this);
    			showAvailableWorkers();
            }
            else{
                clickFalse(document.getElementById("employee" + this.id));
		        clickFalse(document.getElementById("workers"));
            }
        }

	},
	{
		id: 1,
		name: "Engineers",
		img: "employees/img/businessman2.svg",
		number: 0,
		maxNumber: 10,
		salary: 4200,
		employmentCost: 8000,
        description: "Engineers develop new aircrafts",
        hire(){
            const canIHire = (dollars >= this.employmentCost) && (this.maxNumber > this.number);
	        if (canIHire) {
                addEmployee(this); 
            }   
            else{
                clickFalse(document.getElementById("employee" + this.id));
		        if (dollars < this.employmentCost) clickFalse(document.getElementById("dollars"));
            }  
        },
        fire(){
            const canIFire = this.number > 0;
            if (canIFire){
                removeEmployee(this);
            }
            else{
                clickFalse(document.getElementById("employee" + this.id));
            }
        }
	},
	{
		id: 2,
		name: "Human Resources",
		img: "employees/img/girl.svg",
		number: 0,
		maxNumber: 10,
		salary: 3200,
		employmentCost: 4000,
        description: "HR care about all employees",
        hire(){
            const canIHire = dollars >= this.employmentCost;
	        if (canIHire) {
                addEmployee(this);
                this.showMaxNumber();
            }   
            else{
                clickFalse(document.getElementById("employee" + this.id));
		        if (dollars < this.employmentCost) clickFalse(document.getElementById("dollars"));
            }  
        },
        fire(){
            const canIFire = this.number > 0 && this.isMoreThenNumber();
            if (canIFire){
                removeEmployee(this);
                this.showMaxNumber();
            }
            else{
                clickFalse(document.getElementById("employee" + this.id));
            }
        },
        isMoreThenNumber(){
             for (let employee of employees){
                if  (employee.number > this.number * 10) return false;
            }
            return true;
        },
        showMaxNumber(){
            for (let employee of employees){
                employee.maxNumber = 10 + this.number * 10;
                showEmployeesNumber(employee.id);
            }
        }
	}
]