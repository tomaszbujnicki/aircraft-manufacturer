export function subscribeService(service, view) {
  service.unassignedWorkersEvent.subscribe((number) => {
    view.workers(number);
  });
}
