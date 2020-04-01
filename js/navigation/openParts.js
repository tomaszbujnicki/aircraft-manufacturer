document.getElementById("partsMarketBtn")  .addEventListener("click", () => openParts("partsMarket"));
document.getElementById("partsDeliveryBtn").addEventListener("click", () => openParts("partsDelivery"));


function openParts( page ) {

	document.getElementById("partsMarket").classList.add("hide");
    document.getElementById("partsDelivery").classList.add("hide");
    
	document.getElementById( page ).classList.remove("hide");
}