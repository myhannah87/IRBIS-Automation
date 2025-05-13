describe("Intake Form", () => {

  const ownerOnyen = "mhannah1";
  const IRBAnalyst = "jfuse";
  const IRBNumber = "22-2824";

  it("Create Intake Form", () => {
    //cy.visit(Cypress.config().devMaintBaseUrl);
    cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm?event=eform.multisiteIntakeForm&referenceId=439973');
    cy.get("input#username.long")
      .type(ownerOnyen)
    cy.get("input#password.long").type("test{Enter}");

    cy.viewport(1300, 750);
    cy.scrollTo(0, 550)

    //cy.scrollTo(0, 1100)
 
  })
})