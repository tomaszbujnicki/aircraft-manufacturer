document.getElementById( "financesCardBtn" ) .addEventListener( "click", () =>	openCard( "financesCard" ) );
document.getElementById( "employeesCardBtn" ).addEventListener( "click", () =>	openCard( "employeesCard" ) );
document.getElementById( "partsCardBtn" )    .addEventListener( "click", () =>	openCard( "partsCard" ) );
document.getElementById( "closeCardBtn" )    .addEventListener( "click", () =>	closeCard()	);
                

function openCard( card ) {

    document.getElementById("financesCard") .classList.add("hide");
	document.getElementById("employeesCard").classList.add("hide");
	document.getElementById("partsCard")    .classList.add("hide");
    document.getElementById("aircraftDIV")  .classList.add("hide");
    
    document.getElementById("cardCointainer").classList.remove("hide");

    document.getElementById( card ).classList.remove("hide");
}

function closeCard() {

    document.getElementById("cardCointainer").classList.add("hide");
    document.getElementById("aircraftDIV").classList.remove("hide");
}



