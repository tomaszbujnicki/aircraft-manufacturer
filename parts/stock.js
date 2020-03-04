
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
		calculateExpenses(stock.totalPrice,"parts");
		stock.delivery();
		delete stockArray[stock.id];
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

const stockArray = [];
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


function createElementStock(stock){

	if (!stock) return ;

	const stockElement = document.createElement("div");
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
		<div class="employee__value" title="unit price">$ 
			${stock.price}
		</div>
		<div class="employee__value employee__value--bold" title="total price">$ 
			${stock.totalPrice.toLocaleString()}
		</div>`;
	
		const buyButton = document.createElement("div");
		buyButton.classList.add("employee__value");			
		buyButton.innerHTML = `
				<button class="employee__buy-btn" title="buy stock">
				</button>`;
	
	document.getElementById("partsDIV").appendChild(stockElement);
	stockElement.appendChild(buyButton);
	
	buyButton.addEventListener("click", function() {
		if (dollars >= stock.totalPrice) {
			stock.buy();
			disableElement(this);
			clickTrue(stockElement);
			removeDOM_ELEMENT(stockElement, 6000);
		}
		else{
			clickFalse(stockElement);
			clickFalse(document.getElementById("dollars"));
		}
	});
	
}


createNewStock();
createNewStock();
createNewStock();
createNewStock();
createNewStock();