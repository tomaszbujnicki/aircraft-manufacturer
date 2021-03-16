import { Controller } from './js/controller/Controller';

document.addEventListener('DOMContentLoaded', init);

function init() {
  const app = new Controller();

  window.setInterval(() => {
    if (app.data.isGameRun) {
      app.model.time.nextStep();
    }
  }, app.model.time.stepInMilliseconds);
}
