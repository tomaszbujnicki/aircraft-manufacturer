export function employeeContent(item) {
  return `
<button id="employeeDetails${item.id}" class="employeeDescriptionButton">
  <img class="employee__img" src="${item.img}" />
</button>
<div class="worker__add-remove">
  <button
    id="addEmployee${item.id}"
    class="employee__btn-add"
    title="hire cost: $ ${item.hireCost}"
  ></button>
  <button
    id="removeEmployee${item.id}"
    class="employee__btn-add employee__btn-add--remove"
    title="fire employee"
  ></button>
</div>
<div id="employeeNumber${item.id}" class="employee__value" title="number / max"
></div>
<div class="employee__value employee__value--left" title="${item.description}">
${item.name}
</div>
<div
  id="salaryPerEmployee${item.id}"
  class="employee__value employee__value--bold"
  title="weekly per person"
></div>
<div
  id="salaryForGroup${item.id}"
  class="employee__value"
  title="weekly for group"
></div>
  `;
}
