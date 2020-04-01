document.getElementById("employeeReviewBtn")    .addEventListener("click", () => openEmployees("employeeReview"));
document.getElementById("employeeInventionsBtn").addEventListener("click", () => openEmployees("employeeInvention"));


function openEmployees( page ) {

	document.getElementById("employeeReview")   .classList.add("hide");
    document.getElementById("employeeInvention").classList.add("hide");
    
	document.getElementById( page ).classList.remove("hide");
}
