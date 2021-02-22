export function subscribeModel(model, view) {
  model.manufacture.aircraftChangeEvent.subscribe((item) => {
    view.displayElementData(item);
  });
}
