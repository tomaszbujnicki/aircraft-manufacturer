const employees = [
	{
		id: 0,
		name: "Workers",
		img: "employees/img/worker.svg",
		number: 0,
        maxNumber: 12,
        multiplier: 12,
		salary: 1800,
		employmentCost: 4000,
        description: "Workers build aircrafts",
        hire(){
            const canIHire = (cash >= this.employmentCost) && (this.maxNumber > this.number);
	        if (canIHire) {
                addEmployee(this);
                showAvailableWorkers(); 
            }   
            else{
                clickFalse(document.getElementById("employee" + this.id));
		        if (cash < this.employmentCost) clickFalse(document.getElementById("cash"));
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
		name: "Foreman",
		img: "employees/img/foreman.svg",
        number: 0,
        multiplier: 4,
		maxNumber: 4,
		salary: 2600,
		employmentCost: 6000,
        description: "Foremen help workers build aircrafts", 
        hire(){
            const canIHire = (cash >= this.employmentCost) && (this.maxNumber > this.number);
	        if (canIHire) {
                addEmployee(this); 
            }   
            else{
                clickFalse(document.getElementById("employee" + this.id));
		        if (cash < this.employmentCost) clickFalse(document.getElementById("cash"));
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
		img: "employees/img/get-hired.svg",
        number: 0,
        multiplier: 1,
		maxNumber: 1,
		salary: 3200,
		employmentCost: 9000,
        description: "HR care about all employees",
        hire(){
            const canIHire = cash >= this.employmentCost;
	        if (canIHire) {
                addEmployee(this);
                this.showMaxNumber();
            }   
            else{
                clickFalse(document.getElementById("employee" + this.id));
		        if (cash < this.employmentCost) clickFalse(document.getElementById("cash"));
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
                if  (employee.number > this.number * employee.multiplier) {
                    clickFalse(document.getElementById("employee" + employee.id));
                    return false;
                }
            }
            return true;
        },
        showMaxNumber(){
            for (let employee of employees){
                employee.maxNumber = employee.multiplier + this.number * employee.multiplier;
                showEmployeesNumber(employee.id);
            }
        }
    },
    {
		id: 3,
		name: "Salesman",
		img: "employees/img/businessman.svg",
        number: 0,
        multiplier: 3,
		maxNumber: 3,
		salary: 3800,
		employmentCost: 10000,
        description: "Salesmen keep high the price of aircrafts", 
        hire(){
            const canIHire = (cash >= this.employmentCost) && (this.maxNumber > this.number);
	        if (canIHire) {
                addEmployee(this); 
            }   
            else{
                clickFalse(document.getElementById("employee" + this.id));
		        if (cash < this.employmentCost) clickFalse(document.getElementById("cash"));
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
		id: 4,
		name: "Engineers",
		img: "employees/img/engineer.svg",
        number: 0,
        multiplier: 2,
		maxNumber: 2,
		salary: 5000,
		employmentCost: 25000,
        description: "Engineers develop new aircrafts",
        hire(){
            const canIHire = (cash >= this.employmentCost) && (this.maxNumber > this.number);
	        if (canIHire) {
                addEmployee(this); 
            }   
            else{
                clickFalse(document.getElementById("employee" + this.id));
		        if (cash < this.employmentCost) clickFalse(document.getElementById("cash"));
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
]

