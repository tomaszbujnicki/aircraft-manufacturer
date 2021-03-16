const container = document.getElementById('messageBox');

export function displayMessage({ type, text }) {
  const element = document.createElement('div');
  element.classList.add('message', 'message-' + type);
  element.innerHTML = text;

  container.appendChild(element);

  element.addEventListener('click', () => element.remove());

  const displayTime = 10_000;
  setTimeout(() => {
    element.remove();
  }, displayTime);
}
