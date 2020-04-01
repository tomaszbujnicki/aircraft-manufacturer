document.getElementById("financesMonthsBtn").addEventListener("click", () => openFinances("financesMonths"));
document.getElementById("financesYearsBtn")	.addEventListener("click", () => openFinances("financesYears"));
document.getElementById("financesBankBtn")	.addEventListener("click", () => openFinances("financesBank"));
document.getElementById("financesAwardsBtn").addEventListener("click", () => openFinances("financesAwards"));


function openFinances( page ) {

	document.getElementById("financesMonths").classList.add("hide");
	document.getElementById("financesYears") .classList.add("hide");
	document.getElementById("financesBank")  .classList.add("hide");
	document.getElementById("financesAwards").classList.add("hide");
	
	document.getElementById( page ).classList.remove("hide");
}


