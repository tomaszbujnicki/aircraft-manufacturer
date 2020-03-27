function createElementAircraftToInvent(aircraft){
	if (!aircraft) return ;

	const aircraftElement = document.createElement("div");
	aircraftElement.setAttribute("id", "aircraftToInventItem" + aircraft.id);
	aircraftElement.classList.add("aircraftToInvent");
	aircraftElement.innerHTML=`
	<div class = "worker__icon" ><img class = "worker__img" src = ${aircraft.img}>
	</div>
	<div class="aircraft__name">
		<span >${aircraft.name}</span >
		<div class = "bar" >
			<div id = "inventBar${aircraft.id}" class = "bar--color">
			</div>
		</div>
	</div>
	<div id="inventionPointsLeft${aircraft.id}" class="worker__value" title="Invention points left to develop this aircraft">
	${aircraft.inventionPoints}
	</div>
	</div>`

	document.getElementById("aircraftToInventItemDIV").appendChild(aircraftElement);

}