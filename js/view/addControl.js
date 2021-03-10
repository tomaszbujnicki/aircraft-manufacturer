const speedLevelButtons = [...document.querySelectorAll('.speedLevel')],
  newerMonth = document.getElementById('newerMonth'),
  olderMonth = document.getElementById('olderMonth'),
  refreshMonth = document.getElementById('refreshMonth'),
  newerYear = document.getElementById('newerYear'),
  olderYear = document.getElementById('olderYear'),
  refreshYear = document.getElementById('refreshYear');

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

  newerMonth.addEventListener('click', () => view.monthReportShift--);
  olderMonth.addEventListener('click', () => view.monthReportShift++);
  refreshMonth.addEventListener('click', () => (view.monthReportShift = 0));
  newerYear.addEventListener('click', () => view.yearReportShift--);
  olderYear.addEventListener('click', () => view.yearReportShift++);
  refreshYear.addEventListener('click', () => (view.yearReportShift = 0));
}
