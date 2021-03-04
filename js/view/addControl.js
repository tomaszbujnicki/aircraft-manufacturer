const speedLevelButtons = [...document.querySelectorAll('.speedLevel')];

export function addControl(view) {
  speedLevelButtons.forEach((button) => {
    button.addEventListener('click', () => {
      view.speedLevelEvent.publish(button.value);
    });
  });
}
