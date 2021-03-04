import { elementContent } from './elementContent';
import { elementListeners } from './elementListeners';

export function createElement(item) {
  const element = document.createElement('div');
  element.setAttribute('id', item.type + item.id);
  element.classList.add(item.type);
  element.innerHTML = elementContent[item.type](item);

  const container = document.getElementById(item.type + 'DIV');
  container.appendChild(element);

  const listener = elementListeners[item.type];
  if (listener) listener.call(this, item);
}
