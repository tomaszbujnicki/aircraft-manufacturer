export class StockOfferElement {
  constructor(stock, flag) {
    this.stock = stock;
    flag, (this.container = document.getElementById('partsDIV'));
    this.element = this.createElement();
    this.subscribers = [];
  }

  createElement() {
    this.createRoot();
    this.fillContent();
    this.addButton();
    this.attachToContainer();
  }

  createRoot() {
    const root = document.createElement('div');
    root.setAttribute('id', stock.type + 'Item' + stock.id);
    root.classList.add('employee', 'employee--parts');
    return root;
  }

  fillContent() {
    const stock = this.stock;
    this.element.innerHTML = `
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
		</div>
		`;
  }

  createButton() {
    const stockButton = document.createElement('button');
    stockButton.classList.add('employee__buy-btn');
    stockButton.setAttribute('title', 'buy stock');

    stockButton.addEventListener('click', () => {
      this.subscribers.forEach((s) => s(this.id));
    });
    this.element.appendChild(stockButton);
  }

  attachToContainer() {
    this.container.appendChild(this.element);
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
}
