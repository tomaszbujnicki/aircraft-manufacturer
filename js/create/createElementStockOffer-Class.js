export class StockOfferElement {
  constructor(stock) {
    this.container = document.getElementById('partsDIV');
    this.stock = stock;
    this.element;
    this.createElement();
    this.subscribers = [];
  }

  createElement() {
    this.createRoot();
    this.fillContent();
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
			<button id="buyStockButton${
        stock.id
      }" class="employee__buy-btn" title="buy stock">
			</button>
		</div>
		`;
  }

  createButton() {
    buyStockButton.addEventListener('click', () => {
      stock.buy();
    });
    btn.addEventListener('click', () => {
      this.subscribers.forEach((s) => s(this.stock));
    });
  }

  attachToContainer() {
    this.container.appendChild(this.element);
  }

  createButton(name, selector) {
    const btn = document.createElement('button');
    btn.setAttribute('data-tool', selector);
    btn.textContent = name;
    btn.addEventListener('click', () => {
      this.subscribers.forEach((s) => s(selector));
    });
    return btn;
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
}
