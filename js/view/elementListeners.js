export const elementListeners = {
  employee(item) {
    const hire = document.getElementById(`addEmployee${item.id}`);
    const fire = document.getElementById(`removeEmployee${item.id}`);
    const details = document.getElementById(`employeeDetails${item.id}`);

    hire.addEventListener('click', () => {
      this.events.hireEmployee.publish(item.id);
    });
    fire.addEventListener('click', () => {
      this.events.fireEmployee.publish(item.id);
    });
    /*   details.addEventListener('click', () => {
      this.events.detailsEmployee.publish(item.id);
    }); */
  },

  aircraft(item) {
    const sell = document.getElementById(`sellAircraftButton${item.id}`);
    const assign = document.getElementById(`assignWorkerButton${item.id}`);
    const revoke = document.getElementById(`revokeWorkerButton${item.id}`);

    sell.addEventListener('click', () => {
      this.events.sellAircraft.publish(item.id);
    });
    assign.addEventListener('click', () => {
      this.events.assignWorker.publish(item.id);
    });
    revoke.addEventListener('click', () => {
      this.events.revokeWorker.publish(item.id);
    });
  },

  stockOffer(item) {
    const buy = document.getElementById(`buy${item.type}${item.id}`);

    buy.addEventListener('click', () => {
      this.events.buyStock.publish(item.id);
    });
  },
};
