describe('', () => {
  beforeEach (() => {
    // cy.visit('https://orisstage.research.unc.edu/irb/index.cfm?');
     cy.visit('https://orisstage.research.unc.edu/irb/index.cfm?event=admin.study.pgStudy&irbid=18-3123');
     cy.get('input#username.long')
         .type('mhannah1').should('have.value', 'mhannah1')  
     cy.get('input#password.long')
          .type('Lordoflords!{Enter}')
 });

  describe('Application/Review Popup',  () => {
  it('Click application link', () => {
  cy.get('.appSwimLanes').should("be.visible")
  //cy.get('.swimlane1 > div').invoke('removeAttr', 'target').click()
  //cy.get('.appSwimLanes').invoke('removeAttr', 'target').click()
  
// Get window object
cy.window().then((win) => {
  // Replace window.open(url, target)-function with our own arrow function
  cy.stub(win, 'open', url => 
  {
    // change window location to be same as the popup url
    win.location.href = Cypress.config().baseUrl + url;
  }).as("popup") // alias it with popup, so we can wait refer it with @popup
})

// Click button which triggers javascript's window.open() call
cy.get('.swimlane1 > div').click()
// Make sure that it triggered window.open function call
cy.get("@popup").should("be.called")


// Now we can continue integration testing for the new "popup tab" inside the same tab
//Verify header info
    
cy.get('#irbInfo').should("be.visible")
cy.get('#irbInfo > :nth-child(3) > :nth-child(1)').should("be.visible")
cy.get('#irbInfo > :nth-child(3) > :nth-child(2)').should("be.visible")
cy.get('#irbInfo > :nth-child(3) > :nth-child(3)').should("be.visible")






})
}) 
}) 



//https://orisstage.research.unc.edu/irb/index.cfm?event=admin.reviewWindow&reviewId=530765&appId=414897


  /*
  it('Click application link', () => {
   // cy.get('[onclick="showReview(414897,0,0,1);"]').click()
   
   cy.get('td[data-title="Accepted By IRB"] > .bucket > :nth-child(2) > table > tbody > :nth-child(2) > [data-column="TBD"] > a').click()
   cy.wait(1000)
   cy.get('#bucketDataTable_filter > label > input').type('18-3123')
   cy.get('.noteList').invoke('attr', 'data-appid').as("InitialAppId"); 
   cy.get('@InitialAppId').then((InitialAppId) => {
    //console.log(InitialAppId); //-> this returns the ID I need!
    //cy.get('#bucketFinderText').type(InitialAppId) 
   //cy.visit('https://orisstage.research.unc.edu/irb/index.cfm?event=admin.reviewWindow&reviewId=0&appId=InitialAppId');
  
 
   cy.visit(InitialAppId);
  
        });
      });  
    });
  });

  */
//});
//});
   


  
  
