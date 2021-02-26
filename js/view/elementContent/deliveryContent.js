import warehouse from '../../../img/parts/warehouse.svg';

export function deliveryContent(item) {
  return `
  <div>
  <div class="delivery__description">
    <span>${item.company}: </span>
    <span class="align-right">${item.amount} parts</span>
    <span></span>
    <span>risk: ${item.risk}%</span>
    <span id="deliveryDaysToGo${item.id}" class="align-right"
      ></span
    >
  </div>

  <div class="delivery__images">
    <img src="${item.flag}" class="delivery__img" />
    <div>
      <img
        id="deliveryShipping${item.id}"
        src=""
        class="delivery__img delivery__img--relative"
      />
    </div>
    <img src="${warehouse}" class="delivery__img" />
  </div>
</div>`;
}
