export function subscribeService(service, view) {
  service.unassignedWorkersEvent.subscribe(() => {
    view.workers(service.unassignedWorkers());
  });
}
