function clickFalse(element) {

	element.classList.add("click-false");
	setTimeout(function () {
		element.classList.remove("click-false");
	}, 500);
}

function clickTrue(element) {

	element.classList.add("click-true");
	setTimeout(function () {
		element.classList.remove("click-true");
	}, 500);
}

function creatNewMessage(text, color) {
	const el = document.createElement("div");
	el.innerHTML = text;
	el.classList.add("alertsItem");
	if (color) el.style="color:" + color; 
	document.getElementById("alerts").prepend(el);
	setTimeout(function () {
		removeDOM_ELEMENT(el);
	}, 5000);
	el.addEventListener("click", ()=>{
		el.style="display:none";
	})
	
}

function disableElement(element) {
	element.classList.add("disabled");
	element.setAttribute("disabled", true);
}

function removeDOM_ELEMENT(element) {
	setTimeout(function () {
		element.classList.add("vanish");
	}, 1000);
	setTimeout(function () {
		element.classList.add("softRemove");
	}, 6000);
	setTimeout(function () {
		element.remove();
	}, 9000);

}