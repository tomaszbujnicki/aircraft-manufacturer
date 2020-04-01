document.getElementById("closeEmployeeDescriptionBtn").addEventListener("click", () => closeEmployeeDescription());


function openEmployeeDescription( id ) {

    const allCards = document.querySelectorAll(".employeeDescription");
    allCards.forEach(element => element.classList.add("hide"));   
    
    document.getElementById("employeeDescriptionContainer").classList.remove("hide");
	document.getElementById("employeeDescription" + id).classList.remove("hide");
}

function closeEmployeeDescription() {

    document.getElementById("employeeDescriptionContainer").classList.add("hide");
}