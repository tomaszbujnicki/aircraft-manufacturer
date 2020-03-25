
function createElementDelivery(delivery){
	if (!delivery) return ;
	console.log(delivery);

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
			<span class="align-right">${delivery.time} days to go</span >
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
		const imgPosition = 95 - deliveryArray[index].time.toString();
		if (imgPosition < -5) imgPosition = -5;
		if (imgPosition > 75) changeImg(deliveryArray[index].id);
		document.getElementById("deliveryShipping" + deliveryArray[index].id).style = "left:" + imgPosition + "%";
	}

}