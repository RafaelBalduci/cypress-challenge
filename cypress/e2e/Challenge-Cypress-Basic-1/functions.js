import * as selectors from "./components";

export const registerStudent = () => {
  cy.visit(selectors.demoqa);
  cy.get(selectors.txtName).type(selectors.name);
  cy.get(selectors.txtEmail).type(selectors.email);
  cy.get(selectors.txtCurrentAddress).type(selectors.currentAddress);
  cy.get(selectors.txtPermanentAddress).type(selectors.permanentAddress);
  cy.get(selectors.btnSubmit).click();
};

export const checkStudentRegistration = () => {
  cy.get(selectors.chkName).should("contains.text", selectors.name);
  cy.get(selectors.chkEmail).should("contains.text", selectors.email);
  cy.get(selectors.chkCurrentAddress).should(
    "contains.text",
    selectors.currentAddress
  );
  cy.get(selectors.chkPermanentAddress).should(
    "contains.text",
    selectors.permanentAddress
  );
};
