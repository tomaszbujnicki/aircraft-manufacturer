export function createElementStock(stock) {
  if (!stock) return;

  const stockElement = document.createElement('div');
  stockElement.setAttribute('id', 'stockItem' + stock.id);
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
			<button id="buyStockButton${
        stock.id
      }" class="employee__buy-btn" title="buy stock">
			</button>
		</div>
		`;
  document.getElementById('partsDIV').appendChild(stockElement);
  const buyStockButton = document.getElementById(`buyStockButton${stock.id}`);
  buyStockButton.addEventListener('click', () => {
    stock.buy();
  });
}
