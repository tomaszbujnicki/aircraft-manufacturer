export function aircraftContent(item) {
  return `
<div class = "worker__icon" ><img class = "worker__img" src = ${item.img}>
</div>
<div class="worker__add-remove">
  <button id="assignWorkerButton${
    item.id
  }" class="worker__btn-add" title="assign a worker"></button >
  <button id = "revokeWorkerButton${
    item.id
  }" class = "worker__btn-add worker__btn-add--remove" title = "dismiss a worker" > </button>
</div>
<div id = "workers${
    item.id
  }" class = "worker__value" title = "number of workers" >
${item.workers}
</div>
<div class="aircraft__name">
  <span >${item.name}</span >
  <div class = "bar" >
    <div id = "myBar${item.id}" class = "bar--color">
    </div>
  </div>
</div>
<div id="quantity${item.id}" class="worker__value" title="number of aircraft">
${item.quantity}
</div>
<div class = "worker__icon" >
  <button id = "sellAircraftButton${
    item.id
  }" class = "aircraft__btn-sell" title = "sell aircraft" ></button>
</div>
<div id = "price${
    item.id
  }" class = "worker__value" title = "selling price" > $ ${item.currentPrice.toLocaleString()}
</div>`;
}
