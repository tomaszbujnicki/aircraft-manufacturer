import { button, div } from './domElements';

export function addListeners(view) {
  button.designs.addEventListener('click', () =>
    view.navigation.openCard(div.designsCard)
  );
  button.finances.addEventListener('click', () =>
    view.navigation.openCard(div.financesCard)
  );
  button.employees.addEventListener('click', () =>
    view.navigation.openCard(div.employeesCard)
  );
  button.parts.addEventListener('click', () =>
    view.navigation.openCard(div.partsCard)
  );
  button.closeCard.addEventListener('click', () => view.navigation.closeCard());
  button.partsMarket.addEventListener('click', () =>
    view.navigation.openParts(div.partsMarket)
  );
  button.partsDelivery.addEventListener('click', () =>
    view.navigation.openParts(div.partsDelivery)
  );
  button.financesMonths.addEventListener('click', () =>
    view.navigation.openFinances(div.financesMonths)
  );
  button.financesYears.addEventListener('click', () =>
    view.navigation.openFinances(div.financesYears)
  );
  button.financesBank.addEventListener('click', () =>
    view.navigation.openFinances(div.financesBank)
  );
  button.financesLoansTaken.addEventListener('click', () =>
    view.navigation.openFinances(div.financesLoansTaken)
  );
  button.closeEmployeeDetails.addEventListener('click', () =>
    view.navigation.closeEmployeeDetails()
  );
  button.settings.addEventListener('click', () =>
    view.navigation.openMenuCard(div.settingsCard)
  );
  button.credits.addEventListener('click', () =>
    view.navigation.openMenuCard(div.creditsCard)
  );
  button.closeMenuCard.addEventListener('click', () =>
    view.navigation.closeMenuCards()
  );

  button.newGame.addEventListener('click', () => {
    view.events.startNewGame.publish();
    view.navigation.openGameContainer();
  });
  button.continueGame.addEventListener('click', () => {
    view.events.continueGame.publish();
  });
}
