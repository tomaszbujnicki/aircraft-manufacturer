export const elementListeners = {
  employee(item) {
    const hire = document.getElementById(`addEmployee${item.id}`);
    const fire = document.getElementById(`removeEmployee${item.id}`);
    const details = document.getElementById(`employeeDetailsBtn${item.id}`);

    hire.addEventListener('click', () => {
      this.events.hireEmployee.publish(item.id);
    });
    fire.addEventListener('click', () => {
      this.events.fireEmployee.publish(item.id);
    });
    details.addEventListener('click', () => {
      this.elementDetails.open(item.type, item.id);
    });
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
    const buy = document.getElementById(`buyStock${item.id}`);

    buy.addEventListener('click', () => {
      this.events.buyStock.publish(item.id);
    });
  },

  loanOffer(item) {
    const take = document.getElementById(`takeLoanBtn${item.id}`);

    take.addEventListener('click', () => {
      this.events.takeLoan.publish(item.id);
    });
  },

  loanTaken(item) {
    const payOff = document.getElementById(`payOffLoanBtn${item.id}`);

    payOff.addEventListener('click', () => {
      this.events.payOffLoan.publish(item.id);
    });
  },
};
