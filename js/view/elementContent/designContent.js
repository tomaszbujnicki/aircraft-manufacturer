export function designContent(item) {
  return `
	<div class="worker__icon"><img class="worker__img" src="${item.img}" /></div>
	<div class="aircraft__name">
		<span>${item.name}</span>
		<div class="bar">
			<div id="inventBar${item.id}" class="bar--color"></div>
		</div>
	</div>
	<div
		id="inventionPointsRemaining${item.id}"
		class="worker__value"
		title="Invention points left to develop this aircraft"
	>
		${item.inventionPoints}
	</div>
	
	`;
}
