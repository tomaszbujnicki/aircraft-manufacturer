export const elementDetails = {
  employee: document.getElementById('employeeDetailsContainer'),
  aircraft: '',
  design: '',

  open(type, itemId) {
    const arr = document.querySelectorAll(`.${type}Details`);

    for (const element of arr) {
      this.hide(element);
    }
    this.show(this[type]);
    const element = document.getElementById(type + 'Details' + itemId);
    this.show(element);
  },

  hide: (element) => element.classList.add('hide'),
  show: (element) => {
    element.classList.remove('hide');
  },
};
