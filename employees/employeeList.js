const employeeList = [
	{
		id: 0,
		name: "Workers",
		img: "img/employees/worker.svg",
		number: 15,
        maxNumber: 16,
        multiplier: 16,
		salary: 1800,
		employmentCost: 4000,
        description: "Workers build aircraft",
        hire(){
            const canIHire = (cash >= this.employmentCost) && (this.maxNumber > this.number);
	        if (canIHire) {
                addEmployee(this);
                showAvailableWorkers();
                showWorkersCard();
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
                showWorkersCard()
            }
            else{
                clickFalse(document.getElementById("employee" + this.id));
		        clickFalse(document.getElementById("workers"));
            }
        }

    },
    {
		id: 1,
		name: "Foremen",
		img: "img/employees/foreman.svg",
        number: 10,
        multiplier: 4,
		maxNumber: 4,
		salary: 2600,
		employmentCost: 6000,
        description: "Foremen help workers build aircraft", 
        hire(){
            const canIHire = (cash >= this.employmentCost) && (this.maxNumber > this.number);
	        if (canIHire) {
                addEmployee(this); 
                showWorkersCard();
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
                showWorkersCard();
            }
            else{
                clickFalse(document.getElementById("employee" + this.id));
            }
        }
    },
	{
		id: 2,
		name: "Human Resources",
		img: "img/employees/get-hired.svg",
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
             for (let employee of employeeList){
                if  (employee.number > this.number * employee.multiplier) {
                    clickFalse(document.getElementById("employee" + employee.id));
                    return false;
                }
            }
            return true;
        },
        showMaxNumber(){
            for (let employee of employeeList){
                employee.maxNumber = employee.multiplier + this.number * employee.multiplier;
                showEmployeesNumber(employee.id);
            }
        }
    },
    {
		id: 3,
		name: "Traders",
		img: "img/employees/businessman.svg",
        number: 0,
        multiplier: 3,
		maxNumber: 3,
		salary: 3800,
		employmentCost: 10000,
        description: "Traders keep high the price of aircraft", 
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
		img: "img/employees/engineer.svg",
        number: 0,
        multiplier: 2,
		maxNumber: 2,
		salary: 5000,
		employmentCost: 25000,
        description: "Engineers develop new aircraft",
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

