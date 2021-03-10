import { images } from '../assets';

export function stockOfferContent(item) {
  return `
<div>
  <img src=${images[item.country]} class="employee__img" title=${item.country}>
</div>
<div class="employee__value employee__value--left" title="company">
  ${item.company}
</div>
<div class="employee__value" title="delivery time">
  ${item.time}
</div>
<div class="employee__value" title="delivery risk">
  ${item.risk}
</div>
<div class="employee__value" title="amount of stock">
  ${item.amount}
</div>
<div class="employee__value" title="unit price">
  $ ${item.unitPrice}
</div>
<div class="employee__value employee__value--bold" title="total price">
  $ ${item.totalPrice.toLocaleString()}
</div>		
<div id="offer-expiry${item.id}" class="employee__value" title="time of expiry">

</div>	

<div class="employee__value">
  <button id="buy${item.type}${
    item.id
  }" class="employee__buy-btn" title="buy stock">
  </button>
</div>
`;
}
