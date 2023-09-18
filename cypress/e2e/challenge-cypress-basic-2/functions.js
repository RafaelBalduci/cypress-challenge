import * as selectors from "./components";
import * as data from "./data";

export const registerStudent = () => {
  cy.visit("automation-practice-form");
  cy.get(selectors.inputFirstName).type(data.firstName);
  cy.get(selectors.inputLastName).type(data.lastName);
  cy.get(selectors.inputEmail).type(data.mail);
  cy.get(selectors.radioButtonMale).click();
  cy.get(selectors.inputNumber).type(data.number);
  cy.get(selectors.inputDate).click();
  cy.get(selectors.inputDateSelect)
    .click()
    .then(() => {
      cy.get(selectors.inputDate)
        .invoke("attr", "value")
        .then((element) => {});
    });
  cy.get(selectors.inputSubjects).type(data.subjectsMaths + "{enter}");
  cy.get(selectors.inputSubjects).type(data.subjectsChemistry + "{enter}");
  cy.get(selectors.inputSubjects).type(data.subjectsEngish + "{enter}");
  cy.get(selectors.checkBoxSports).click();
  cy.adBloker();
  cy.get(selectors.inputPicture).selectFile("cypress/fixtures/foto.PNG");
  cy.get(selectors.inputCurrentAddress).type(data.currentAddress);
  cy.get(selectors.dropDownState)
    .click()
    .then(() => {
      cy.contains(data.state).click();
    });
  cy.get(selectors.dropDownCity)
    .click()
    .then(() => {
      cy.contains(data.city).click({ force: true });
    });
  cy.get(selectors.buttonSubmit).click();
};

export const checkStudentRegistration = () => {
  cy.get(selectors.tableFieldName).should(
    "contains.text",
    data.firstName + " " + data.lastName
  );
  cy.get(selectors.tableFieldEmail).should("contains.text", data.mail);
  cy.get(selectors.tableFieldGender).should("contains.text", "Male");
  cy.get(selectors.tableFieldNumber).should("contains.text", data.number);
  cy.get(selectors.tableFieldDate).should("contains.text", "21 September,2023");
  cy.get(selectors.tableFieldSubejcts).should(
    "contains.text",
    data.subjectsMaths +
      ", " +
      data.subjectsChemistry +
      ", " +
      data.subjectsEngish
  );
  cy.get(selectors.tableFieldHobbies).should("contains.text", "Sports");
  cy.get(selectors.tableFieldPicture).should("contains.text", "foto.PNG");
  cy.get(selectors.tableFieldAddress).should(
    "contains.text",
    data.currentAddress
  );
  cy.get(selectors.tableFieldStateCity).should(
    "contains.text",
    data.state + " " + data.city
  );
};
