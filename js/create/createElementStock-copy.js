export function createElementStockOffer(stock) {
  if (!stock) return;

  const stockElement = document.createElement('div');
  stockElement.setAttribute('id', stock.type + 'Item' + stock.id);
  stockElement.classList.add('employee', 'employee--parts');
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
		</div>
		`;

  const stockButton = document.createElement('button');
  stockButton.classList.add('employee__buy-btn');
  stockButton.setAttribute('title', 'buy stock');

  stockButton.addEventListener('click', () => {
    this.subscribers.forEach((s) => s(stock));
  });

  stockElement.appendChild(stockButton);
  document.getElementById('partsDIV').appendChild(stockElement);
}
