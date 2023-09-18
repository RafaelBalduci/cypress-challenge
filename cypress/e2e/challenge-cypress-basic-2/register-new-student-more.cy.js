import * as demoFunctions from "./functions";

describe("Register New Student", () => {
  it("Register without confirmation", () => {
    demoFunctions.registerStudent();
    demoFunctions.checkStudentRegistration();
  });
});
