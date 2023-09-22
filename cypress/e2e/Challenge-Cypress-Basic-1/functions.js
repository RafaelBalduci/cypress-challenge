import * as selectors from "./components";

export const registerStudent = () => {
  cy.visit("text-box");
  cy.get(selectors.txtName).type(data.name);
  cy.get(selectors.txtEmail).type(data.email);
  cy.get(selectors.txtCurrentAddress).type(data.currentAddress);
  cy.get(selectors.txtPermanentAddress).type(data.permanentAddress);
  cy.get(selectors.btnSubmit).click();
};

export const checkStudentRegistration = () => {
  cy.get(selectors.chkName).should("contains.text", data.name);
  cy.get(selectors.chkEmail).should("contains.text", data.email);
  cy.get(selectors.chkCurrentAddress).should(
    "contains.text",
    data.currentAddress
  );
  cy.get(selectors.chkPermanentAddress).should(
    "contains.text",
    data.permanentAddress
  );
};
