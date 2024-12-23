 describe('Application/Review Popup - Full Board Review',  () => {
  const logIn =
  "https://orisdev.research.unc.edu/irb_maint/index.cfm?event=general.logout";
const submissionOwner = "mhannah1";
const PI = "maeco";
const IRBAnalyst = "jtbraswe";
const devMaintBaseURL = Cypress.env('devMaintBaseURL')

  it('Review Pop up', () => {
  
  

    cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm?event=admin.study.pgStudy&irbid=24-0935');
     cy.get('input#username.long')
         .type(IRBAnalyst).should('have.value', IRBAnalyst)  
     cy.get('input#password.long')
          .type('Lordoflords!{Enter}')



    cy.get('.appSwimLanes').should("be.visible")
    // Get window object
/*
cy.window().then((win) => {
    // Replace window.open(url, target)-function with our own arrow function
    cy.stub(win, "open", (url) => {
    //cy.stub(win, 'open', url => 
 // cy.stub(win, 'open').callsFake (url => 
    {
    // change window location to be same as the popup url
//win.location.href = Cypress.config().devMaintBaseURL + url;
win.location.href = Cypress.config().baseurl + url;
}).as("application"); // alias it with popup, so we can refer it with @application
});

// Click button which triggers javascript's window.open() call
cy.contains("Application").click();
// Make sure that it triggered window.open function call
cy.get("@application").should("be.called");


*/ // Get window object



cy.window().then((win) => {
  // Replace window.open(url, target)-function with our own arrow function
 // cy.stub(win, "open", (url) => {
    cy.stub(win, 'open').callsFake (url => 
    // change window location to be same as the popup url
    win.location.href = Cypress.config().devMaintBaseUrl + url);
   // win.location.href = Cypress.config().devMaintBaseURL + url;
  }).as("application"); // alias it with popup, so we can refer it with @popup
// Click button which triggers javascript's window.open() call
cy.contains("Application").click();
// Make sure that it triggered window.open function call
//cy.get("@application").should("be.called");
     


          });
        }); 
      




/*
    // Get window object
    cy.window().then((win) => {
      // Replace window.open(url, target)-function with our own arrow function
      cy.stub(win, "open", (url) => {
        // change window location to be same as the popup url
        win.location.href = Cypress.config().baseUrl + url;
      }).as("popup"); // alias it with popup, so we can refer it with @popup
    });

    // Click button which triggers javascript's window.open() call
    cy.get(".swimlane1 > div").click();
    // Make sure that it triggered window.open function call
    cy.get("@popup").should("be.called");

*/