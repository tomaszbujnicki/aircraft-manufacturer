/*

0. Creat --------------

1. Aircrafts

2. Employees

3. Parts




*/
//	0. Creat  ......................................................................................

function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomPercent(x) {
	return getRndInteger(-x, x) / 100;
}


//	1. Loans ......................................................................................

//  2. Order delivery

//  4. Budget month

//	3. Parts ......................................................................................

class PartsClass {

	constructor(id, flag, country, company, time, risk, stock, price) {
		this.id = id;
		this.flag = flag;
		this.country = country;
		this.company = company;
		this.time = time + Math.floor(time * randomPercent(50));
		this.risk = risk + Math.floor(risk * randomPercent(50));
		this.stock = stock + Math.floor(stock * randomPercent(50));
		this.price = price + Math.floor(price * randomPercent(10));
		this.totalPrice = this.price * this.stock;
	}

	buy(){
		calculateExpenses(this.totalPrice,"parts");
		setTimeout(() => {
			let random = Math.floor(Math.random() * 100);
			if (random >= this.risk) {
				availableParts += this.stock;
				showAvailableParts();
				creatNewMessage("+" + this.stock + " parts form " + this.country);
			} else {
				creatNewMessage("Delivery failed.<br> Lost: " + this.stock + " parts", "#F00");
			}
		}, dayTick * this.time);
	}
}

const stockArr = [];

function createNewStock() {
	const randomStock = parts[getRndInteger(0, parts.length - 1)];
	const newStock = new PartsClass(
		stockArr.length,
		randomStock.flag, 
		randomStock.country, 
		randomStock.company[getRndInteger(0, randomStock.company.length-1)], 
		randomStock.time, 
		randomStock.risk, 
		randomStock.stock, 
		randomStock.price,
	);
	stockArr.push(newStock);
	createPartsItem(stockArr[stockArr.length-1]);
}

createNewStock();
createNewStock();
createNewStock();
createNewStock();
createNewStock();