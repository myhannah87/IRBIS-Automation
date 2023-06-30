describe('', () => {
  beforeEach (() => {
     cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm?');
    // cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm?event=admin.study.pgStudy&irbid=18-3123');
     cy.get('input#username.long')
         .type('mhannah1').should('have.value', 'mhannah1')  
     cy.get('input#password.long')
          .type('Lordoflords!{Enter}')
 });

 describe('Application/Review Popup',  () => {
  it('Click application link', () => {
   // cy.get('[onclick="showReview(414897,0,0,1);"]').click()
   
   cy.get('td[data-title="Accepted By IRB"] > .bucket > :nth-child(2) > table > tbody > :nth-child(2) > [data-column="TBD"] > a').click()
   cy.wait(1000)
   cy.get('#bucketDataTable_filter > label > input').type('18-3123')
   cy.get('.noteList').invoke('attr', 'data-appid').as("InitialAppId"); 
   cy.get('@InitialAppId').then((InitialAppId) => {
    //console.log(InitialAppId); //-> this returns the ID I need!
    //cy.get('#bucketFinderText').type(InitialAppId) 
   //cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm?event=admin.reviewWindow&reviewId=0&appId=InitialAppId');
  
 
   cy.visit({InitialAppId});
  
        });
      });  
    });
  });
//});
//});
   
   //const appId = cy.get('@appId')
     
   //cy.visit(`https://orisdev.research.unc.edu/irb_maint/index.cfm?event=admin.reviewWindow&reviewId=0&appId=@appId`);
     
//    cy.get('.mat-tooltip-trigger.copy-link.ng-star-inserted').first().text().as('srt');

// cy.get('@srt').then(srtText => {   // unwrapping happens here
//   console.log(srtText)             // check that the text was captured
//   cy.get('input[formcontrolname="encoderAddress"]').type(srtText);
// })


     //cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm?event=admin.reviewWindow&reviewId=0&appId=appId');
    
  //  });
  
   //cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm?event=admin.reviewWindow&reviewId=0&appId=@appId');
 
  


   /*
   cy.get('button').invoke('text').as('text')
  })
  
  it('has access to text', function () {
    this.text // is now available

*/



   //cy.get('#frmSubmission_414897')
   //cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm?event=admin.reviewWindow&reviewId=0&appId=414897&goto=Application');





  
  


   /*
   .should('match',/\?MasterId=\d+\&ScreenId=2/,)
   .invoke('match',/\?MasterId=(?<Masterid>\d+)\&ScreenId=2/)
   .its('groups.Masterid', { timeout: 0 })
   .should('be.a','string')
   .as('masterId')
   cy.log('printing the id').then(function() {
   cy.log(`MasterId is: ${this.masterId}`) 
  })
   cy.get('@masterId').then(Number)
   //cy.visit('https://orisdev.research.unc.edu/irb_maint/eform_routing.cfm?masterid=382905');
   //cy.url().as('routingURL')
   //cy.log(`Routing link is: ${this.routingURL}`) 
*/

   /*


// AFTER cy.visit()
cy.window().then((win) => {
  cy.spy(win, 'open').as('windowOpen'); // 'spy' vs 'stub' lets the new tab still open if you are visually watching it
});
// perform action here [for me it was a button being clicked that eventually ended in a window.open]
cy.get('[onclick="showReview(414897,0,0,1);"]').click()
// verify the window opened
// verify the first parameter is a string (this is the dynamic url) and the second is _blank (opens a new window)
cy.get('@windowOpen').should('be.calledWith', Cypress.sinon.match.string, '_blank');

*/

/*
   let newUrl = '';
   cy.window().then((win) => {
     cy.stub(win, 'open').as('windowOpen').callsFake(url => {
       newUrl = url;
     });
   })
   
   cy.get('[onclick="showReview(414897,0,0,1);"]').click()
   cy.get('@windowOpen').should('be.called');
   cy.visit(newUrl)

*/

   /*
      
 // Get window object
cy.window().then((win) => {
  // Replace window.open(url, target)-function with our own arrow function
  cy.stub(win, 'open', url => 
  {
    // change window location to be same as the popup url
    win.location.href = Cypress.config().baseUrl + url;
  }).as("popup") // alias it with popup, so we can wait refer it with @popup
})

 cy.wait(1000)

 // Click button which triggers javascript's window.open() call
cy.get('[onclick="showReview(414897,0,0,1);"]').click()

// Make sure that it triggered window.open function call
cy.get("@popup").should("be.called")

// Now we can continue integration testing for the new "popup tab" inside the same tab

*/


//"(new url)https://orisdev.research.unc.edu/irb/nullindex.cfm?event=admin.review.pageReview&appid=414897&reviewId=0&eformreviewid=0&area=1&jsexec=&rand=0.8544914106670098"
