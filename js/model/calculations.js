export function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomPercent(min, max) {
  return getRndInteger(min, max) / 100;
}
