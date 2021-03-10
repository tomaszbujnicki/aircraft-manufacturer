const speedLevelButtons = [...document.querySelectorAll('.speedLevel')];

export function addControl(view) {
  speedLevelButtons.forEach((button) => {
    button.addEventListener('click', () => {
      changeHighlight(button);
      view.events.speedLevel.publish(button.value);
    });
  });

  function changeHighlight(buttonToHighlight) {
    speedLevelButtons.forEach((button) => {
      button.classList.remove('highlighted');
    });
    buttonToHighlight.classList.add('highlighted');
  }
}
