import warehouse from '../../img/parts/warehouse.svg';
import ship from '../../img/parts/ship.svg';

export function createElementDelivery(delivery) {
  if (!delivery) return;

  const deliveryElement = document.createElement('div');
  deliveryElement.setAttribute('id', delivery.type + 'Item' + delivery.id);
  deliveryElement.classList.add('delivery');
  deliveryElement.innerHTML = `
	<div>

		<div class="delivery__description">
			<span >${delivery.country}: </span >
			<span class="align-right">${delivery.amount} parts</span >
			<span></span>
			<span >risk: ${delivery.risk}%</span >
			<span id="deliveryTimeToGo${delivery.id}" class="align-right">${delivery.daysToGo} days to go</span >
		</div>

		<div class = "delivery__images" >
			<img src=${delivery.flag} class="delivery__img" >
			<div><img id="deliveryShipping${delivery.id}" src=${ship} class="delivery__img delivery__img--relative" ></div>
			<img src=${warehouse} class="delivery__img" >
			</div>
		</div>
	</div>`;

  document.getElementById('deliveryDIV').appendChild(deliveryElement);
}
