

function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChange(value, percent) {
	const change = getRndInteger(-percent,percent);
	return Math.round(value * (1 + change / 100));
}

//	3. Stock ......................................................................................

class Stock {

	constructor(id, flag, country, company, time, risk, amount, price) {
		this.id = id;
		this.flag = flag;
		this.country = country;
		this.company = company;
		this.time = time;
		this.risk = risk;
		this.amount = amount;
		this.price = price;
		this.totalPrice = this.price * this.amount;
	}

	buy(){
		calculateExpenses(this.totalPrice,"parts");
		delivery(this);
		delete stockArray[this.id];
	}
}

function delivery(stock){
	setTimeout(() => {
		const isDeliveryCorrect = Math.floor(Math.random() * 100) >= stock.risk;
		if (isDeliveryCorrect) {
			availableParts += stock.amount;
			showAvailableParts();
			creatNewMessage("+" + stock.amount + " parts form " + stock.country);
		} else {
			creatNewMessage("Delivery failed.<br> Lost: " + stock.amount + " parts", "#F00");
		}
	}, dayTick * stock.time);
}

function createNewStock() {
	const randomStock = stock_coreValues[getRndInteger(0, stock_coreValues.length - 1)];
	const newStock = new Stock(
		stockArray.length,
		randomStock.flag, 
		randomStock.country, 
		randomStock.company[getRndInteger(0, randomStock.company.length-1)], 
		randomChange(randomStock.time, 20),
		randomChange(randomStock.risk, 20),
		randomChange(randomStock.amount, 50),
		randomChange(randomStock.price, 10)
	);
	stockArray.push(newStock);
	createElementStock(newStock);
}

const stockArray = [];

createNewStock();
createNewStock();
createNewStock();
createNewStock();
createNewStock();

function createAllStock(){
	for (let i in stockArray){
		console.log(i);
		createElementStock(stockArray[i]);
	}
}
