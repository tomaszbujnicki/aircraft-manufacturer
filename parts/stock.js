
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
		const stock = this;
		const canIBuy = cash >= stock.totalPrice;
		if (canIBuy) {
			calculateExpenses(stock.totalPrice,"parts");
			clickTrue(document.getElementById(`stockItem${stock.id}`));
			stock.delivery();
			delete stockArray[stock.id];
			removeElementStock(stock.id)
		}
		else{
			clickFalse(document.getElementById(`stockItem${stock.id}`));
			clickFalse(document.getElementById("cash"));
		}
	}
	delivery(){
		const stock = this;
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

}
let stockID = 0;
const stockArray = [];
function createNewStock() {
	const randomStock = stock_coreValues[getRndInteger(0, stock_coreValues.length - 1)];
	const newStock = new Stock(
		stockID++,
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
	setTimeout(() => {
		if (stockArray[newStock.id]) {
		delete stockArray[newStock.id];
		clickFalse(document.getElementById(`stockItem${newStock.id}`));
		removeElementStock(newStock.id);
		}
	}, dayTick * getRndInteger(7,84));
	
}


function createElementStock(stock){

	if (!stock) return ;

	const stockElement = document.createElement("div");
	stockElement.setAttribute("id", "stockItem" + stock.id);
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
		<div class="employee__value" title="unit price">
			$ ${stock.price}
		</div>
		<div class="employee__value employee__value--bold" title="total price">
			$ ${stock.totalPrice.toLocaleString()}
		</div>		
		
		<div class="employee__value">
			<button id="buyStockButton${stock.id}" class="employee__buy-btn" title="buy stock">
			</button>
		</div>
		`;

	document.getElementById("partsDIV").appendChild(stockElement);
	
	const buyStockButton = document.getElementById(`buyStockButton${stock.id}`);

	buyStockButton.addEventListener("click", ()=> {stock.buy()} );
}

function removeElementStock(id){
	const stockElement = document.getElementById(`stockItem${id}`);
	if (!stockElement) return ;
	const stockButtonElement = document.getElementById(`buyStockButton${id}`);
	disableElement(stockButtonElement);
	removeDOM_ELEMENT(stockElement);
}

function createNewStockMaybe(){
	if (getRndInteger(0,100) < 20){
		let x = 0;
		for (let i in stockArray){
			++x;
		}
		if (x < 14) createNewStock();
	}
}
