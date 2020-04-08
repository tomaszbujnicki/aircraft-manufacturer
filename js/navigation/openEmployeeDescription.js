document.getElementById("closeEmployeeDescriptionBtn").addEventListener("click", () => closeEmployeeDescription());
for (let i = 0; i < 5; i++){
    const button = document.getElementById("employeeCard" + i);
    button.addEventListener("click", () => openEmployeeDescription( i ))
}


function openEmployeeDescription( i ) {

    const allCards = document.querySelectorAll(".employeeDescription");
    allCards.forEach(element => element.classList.add("hide"));   
    
    document.getElementById("employeeDescriptionContainer").classList.remove("hide");
	document.getElementById("employeeDescription" + i).classList.remove("hide");
}

function closeEmployeeDescription() {

    document.getElementById("employeeDescriptionContainer").classList.add("hide");
}