import * as demoFunctions from "./functions";
import * as selectors from "./components";

describe("Register New Student", () => {
  it("Register without confirmation", () => {
    cy.viewport(1536, 960);
    demoFunctions.registerStudent();
    demoFunctions.checkStudentRegistration();
  });
});
