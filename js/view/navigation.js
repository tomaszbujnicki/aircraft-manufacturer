import { div } from './domElements';

export const navigation = {
  hide(element) {
    element.classList.add('hide');
  },
  show(element) {
    element.classList.remove('hide');
  },

  openCard(card) {
    this.hide(div.financesCard);
    this.hide(div.employeesCard);
    this.hide(div.partsCard);
    this.hide(div.designsCard);
    this.hide(div.aircraftDIV);
    this.show(div.cardContainer);
    this.show(card);
  },

  closeCard() {
    this.hide(div.cardContainer);
    this.show(div.aircraftDIV);
  },

  openParts(page) {
    this.hide(div.partsMarket);
    this.hide(div.partsDelivery);
    this.show(page);
  },

  openFinances(page) {
    this.hide(div.financesMonths);
    this.hide(div.financesYears);
    this.hide(div.financesBank);
    this.hide(div.financesLoansTaken);
    this.show(page);
  },

  closeEmployeeDetails() {
    this.hide(div.employeeDetailsContainer);
  },

  openGameContainer() {
    this.hide(div.menuContainer);
    this.show(div.gameContainer);
  },
  openMenuContainer() {
    this.hide(div.gameContainer);
    this.show(div.menuContainer);
  },

  openMenuCard(page) {
    this.hide(div.settingsCard);
    this.hide(div.creditsCard);
    this.hide(div.menuList);
    this.show(div.menuCardContainer);
    this.show(page);
  },

  closeMenuCards() {
    this.hide(div.settingsCard);
    this.hide(div.creditsCard);
    this.hide(div.menuCardContainer);
    this.this.show(div.div.menuList);
  },
};
