import { Controller } from './js/controller/Controller';

document.addEventListener('DOMContentLoaded', init);

function init() {
  const app = new Controller();
  app.data.load();

  window.setInterval(
    () => app.model.time.nextStep(),
    app.model.time.stepInMilliseconds
  );
}
