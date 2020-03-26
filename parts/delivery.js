
function createElementDelivery(delivery){
	if (!delivery) return ;

	const deliveryElement = document.createElement("div");
	deliveryElement.setAttribute("id", "deliveryItem" + delivery.id);
	deliveryElement.classList.add("delivery");
	deliveryElement.innerHTML=`
	<div>

		<div class="delivery__description">
			<span >${delivery.country}: </span >
			<span class="align-right">${delivery.amount} parts</span >
			<span></span>
			<span >risk: ${delivery.risk}%</span >
			<span id="deliveryTimeToGo${delivery.id}" class="align-right">${delivery.time} days to go</span >
		</div>

		<div class = "delivery__images" >
			<img src=${delivery.flag} class="delivery__img" >
			<div><img id="deliveryShipping${delivery.id}" src=img/parts/ship.svg class="delivery__img delivery__img--relative" ></div>
			<img src=img/parts/warehouse.svg class="delivery__img" >
			</div>
		</div>
	</div>`

	document.getElementById("deliveryDIV").appendChild(deliveryElement);
}

const deliveryArray = [];

function showDeliveryStage() {
	const changeImg = (id)=>{
		document.getElementById("deliveryShipping" + id).src = "img/parts/truck.svg";
	}
	for (const index in deliveryArray){
		const delivery = deliveryArray[index];
		delivery.daysToGo--;
		let imgPosition = 95 - delivery.daysToGo;
		if (imgPosition < -5) imgPosition = -5;
		if (imgPosition > 75) changeImg(delivery.id);
		document.getElementById("deliveryShipping" + delivery.id).style = "left:" + imgPosition + "%";
		document.getElementById("deliveryTimeToGo" + delivery.id).textContent = delivery.daysToGo + " days to go";
	}

}