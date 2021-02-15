export function createElementDesign(design) {
  if (!design) return;

  const designElement = document.createElement('div');
  designElement.setAttribute('id', design.type + 'Item' + design.id);
  designElement.classList.add('newDesign');
  designElement.innerHTML = `
	<div class = "worker__icon" ><img class = "worker__img" src = ${design.img}>
	</div>
	<div class="aircraft__name">
		<span >${design.name}</span >
		<div class = "bar" >
			<div id = "inventBar${design.id}" class = "bar--color">
			</div>
		</div>
	</div>
	<div id="inventionPointsLeft${design.id}" class="worker__value" title="Invention points left to develop this aircraft">
	${design.inventionPoints}
	</div>
	</div>`;

  document.getElementById('newDesignItemDIV').appendChild(designElement);
}
