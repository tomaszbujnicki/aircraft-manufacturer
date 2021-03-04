import { Controller } from './js/controller/Controller';

document.addEventListener('DOMContentLoaded', init);

function init() {
  const app = new Controller();
  localStorage.clear();
  app.data.load();
  app.data.save();

  window.setInterval(
    () => app.model.time.nextStep(),
    app.model.time.stepInMilliseconds
  );
}
