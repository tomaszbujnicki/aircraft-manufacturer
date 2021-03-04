export const elementListeners = {
  employee(item) {
    const hire = document.getElementById(`addEmployee${item.id}`);
    const fire = document.getElementById(`removeEmployee${item.id}`);
    const details = document.getElementById(`employeeDetails${item.id}`);

    hire.addEventListener('click', () => {
      this.hireEmployeeEvent.publish(item.id);
    });
    fire.addEventListener('click', () => {
      this.fireEmployeeEvent.publish(item.id);
    });
    /*   details.addEventListener('click', () => {
      this.detailsEmployeeEvent.publish(item.id);
    }); */
  },

  aircraft(item) {
    const sell = document.getElementById(`sellAircraftButton${item.id}`);
    const assign = document.getElementById(`assignWorkerButton${item.id}`);
    const revoke = document.getElementById(`revokeWorkerButton${item.id}`);

    sell.addEventListener('click', () => {
      this.sellAircraftEvent.publish(item.id);
    });
    assign.addEventListener('click', () => {
      this.assignWorkerEvent.publish(item.id);
    });
    revoke.addEventListener('click', () => {
      this.revokeWorkerEvent.publish(item.id);
    });
  },

  stockOffer(item) {
    const buy = document.getElementById(`buy${item.type}${item.id}`);

    buy.addEventListener('click', () => {
      this.buyStockEvent.publish(item.id);
    });
  },
};
