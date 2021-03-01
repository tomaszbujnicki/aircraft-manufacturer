export function subscribeService(service, view) {
  service.unassignedWorkersEvent.subscribe(() => {
    view.display.workers(service.unassignedWorkers());
  });
}
