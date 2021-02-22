export function deliveryContent(item) {
  return `
<div>
  <div class="delivery__description">
    <span >${item.company}: </span >
    <span class="align-right">${item.amount} parts</span >
    <span></span>
    <span >risk: ${item.risk}%</span >
    <span id="deliveryTimeToGo${item.id}" class="align-right">${item.daysToGo} days to go</span >
  </div>

  <div class = "delivery__images" >
    <img src=${item.flag} class="delivery__img" >
    <div><img id="deliveryShipping${item.id}" src=${item.ship} class="delivery__img delivery__img--relative" ></div>
    <img src=${item.warehouse} class="delivery__img" >
    </div>
  </div>
</div>`;
}
