export function createElementNewDesign(design) {
  if (!design) return;

  const designElement = document.createElement('div');
  designElement.setAttribute('id', 'newDesignItem' + design.ID);
  designElement.classList.add('newDesign');
  designElement.innerHTML = `
	<div class = "worker__icon" ><img class = "worker__img" src = ${design.IMG}>
	</div>
	<div class="aircraft__name">
		<span >${design.NAME}</span >
		<div class = "bar" >
			<div id = "inventBar${design.ID}" class = "bar--color">
			</div>
		</div>
	</div>
	<div id="inventionPointsLeft${design.ID}" class="worker__value" title="Invention points left to develop this aircraft">
	${design.inventionPoints}
	</div>
	</div>`;

  document.getElementById('newDesignItemDIV').appendChild(designElement);
}
