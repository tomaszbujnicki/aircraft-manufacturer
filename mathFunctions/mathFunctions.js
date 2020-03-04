function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChange(value, percent) {
	const change = getRndInteger(-percent,percent);
	return Math.round(value * (1 + change / 100));
}