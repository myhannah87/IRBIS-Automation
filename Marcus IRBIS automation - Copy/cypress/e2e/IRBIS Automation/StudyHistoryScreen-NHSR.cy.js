describe('', () => {
  beforeEach (() => {
     cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm?event=admin.reviewWindow&reviewId=530699&appId=415018');
    // cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm?event=admin.study.pgStudy&irbid=18-3123');
     cy.get('input#username.long')
         .type('mhannah1').should('have.value', 'mhannah1')  
     cy.get('input#password.long')
          .type('Lordoflords!{Enter}')
 });

 describe('Application/Review Popup',  () => {
  it('Click application link', () => {
    //Verify header info
    
  cy.get('#irbInfo').should("be.visible")
  cy.get('#irbInfo > :nth-child(3) > :nth-child(1)').should("be.visible")
  cy.get('#irbInfo > :nth-child(3) > :nth-child(2)').should("be.visible")
  cy.get('#irbInfo > :nth-child(3) > :nth-child(3)').should("be.visible")
  //Verify left rail
  cy.get('#navContainer').should("be.visible")
  cy.get('#navReviewType').should("be.visible")
  cy.get('#navReviewConditions').should("be.visible")
  cy.get('#navNextStep').should("be.visible")
  cy.get('#navApplication').should("be.visible")
  cy.get('#navLibrary').should("be.visible")
  cy.get('#navStipulations').should("be.visible")
  cy.get('#navExpandCollapse').should("be.visible")
  cy.get('#navItemList').should("be.visible")
  cy.get('#navOptions').should("be.visible")
  cy.get('navChecklist').should('not.exist')
  cy.get('#navReviewResult').should("be.visible")
  cy.get('#navReviewNotes').should("be.visible")
  cy.get('#navLetter').should("be.visible")

  //Verify review conditions -> REVIEW
  cy.get('#navReviewConditions').click()
  cy.get('#stopsHeader').should("be.visible")
  cy.get('#optionsList > :nth-child(1)').should("be.visible")
  cy.get('#stopListStipulations').should("be.visible")
  cy.get('#stopListCategory').should("be.visible")
  cy.get('#stopListLetterEmail').should("be.visible")
  cy.get('#stopListPIResponse').should("be.visible")
  cy.get('#stopListChecklist').should("be.visible")
  cy.get('#stopListPRIResponse').should("be.visible")
  cy.get('#stopListModExpiration').should("be.visible")

  //Verify review conditions -> SUBMISSION
  cy.get('#optionsList > :nth-child(2)').should("be.visible")
  cy.get('#stopListFlags').should("be.visible")
  cy.get('#stopListExternalInstitutions').should("be.visible")
  cy.get('#stopListRouting').should("be.visible")
  cy.get('#stopListPrisoners').should("be.visible")

  //Verify review conditions -> COI 
  cy.get('#optionsList > :nth-child(3)').should("be.visible")
  cy.get('#stopListCOI').should("be.visible")
  cy.get('#stopListManagementPlan').should("be.visible")
  cy.get('#stopListHSP').should("be.visible")
  cy.get('#stopListGCP').should("be.visible")
  
  
  //Select an Analyst
  cy.get('#navNextStep').click()
  cy.get('#analystSelector').should("be.visible")
  cy.get('.managerTextbox').type('celeste')
  cy.get('[name="Celeste Cantrell"]').click()

 

  //Add a stipulation
  cy.get('#navApplication').click()
  cy.get('#addStipForQuestion554').click()
  cy.wait(1000)
  cy.get('.cke_wysiwyg_frame').then(function($iframe) {
    const $body = $iframe.contents().find("body");
    console.log($body);
    cy.wrap($body[0]).type("My test stip");
  cy.get('#questionId554 > #stip0 > .stipButtons > .save').click()
  cy.get('.editStipulation > p').should("be.visible")
 
  cy.get('#navReviewResult').click()

  //Disabled review results:
  cy.get('#reviewResult1').should('have.class', 'stipsNotAllowed') //Approved
  cy.get('#reviewResult2').should('have.class', 'stipsNotAllowed') //Exempted
  cy.get('#reviewResult4').should('have.class', 'stipsNotAllowed') //NHSR
  cy.get('#reviewResult5').should('have.class', 'stipsNotAllowed') //Rely on External IRB
  cy.get('#reviewResult6').should('have.class', 'stipsNotAllowed') //Rely on NCI-CIRB
  cy.get('#reviewResult7').should('have.class', 'stipsNotAllowed') // Withdraw

  //Select Minor Stipulations
  cy.get('#reviewResult3').click()

  cy.get('#navReviewNotes').click()
  cy.wait(3000)

//Study Specific Findings  
  cy.get('#cke_1_contents > .cke_wysiwyg_frame').then(function($iframe) {
    const $body = $iframe.contents().find("body");
    console.log($body);
    cy.wrap($body[0]).type("My Study Specific Findings");
 
  cy.wait(5000)  //wait for autosave to finish
  //Submission Specific Findings 
  cy.get('#cke_2_contents > .cke_wysiwyg_frame').then(function($iframe) {
    const $body = $iframe.contents().find("body");
    console.log($body);
    cy.wrap($body[0]).type("My Submission Specific Findings");

    cy.get('#cke_1_contents > .cke_wysiwyg_frame').then(function($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("!");

      cy.wait(5000)    //wait for autosave to finish

    cy.get(':nth-child(5) > .subHeader').should("be.visible")  
    cy.get('.meetingNotes').should("be.visible")
   

    
  //Draft Letter 
  cy.get('#navNextStep').click()
 
 
  cy.get('#letterTypeId')
  .should('contain', 'Select Template Type...')
           .and('contain', 'Minor Stips - Expedited')
           .and('contain', 'FB Admin pre-review')
           .and('contain', 'UNC ONLY-Permission to Register')
           .select('Minor Stips - Expedited')
  cy.get('#btnDraftLetter').click()      

  //Verify and Finalize letter
  cy.get('#sent_to_email').should("be.visible")
  cy.get('#sent_to_email2').should("be.visible")
  cy.get('.cke_wysiwyg_frame').should("be.visible")
  cy.get('.letterSubHeader').should('contain', 'Minor Stips - Expedited')
  cy.get('#btnViewPDF').should("be.visible")
  cy.get('#btnDelete').should("be.visible")
  cy.get('#btnSaveLetter').should("be.visible")
  cy.get('#btnSendToChair').should("be.visible")
  cy.get('#btnFinalizeLetterModal').should("be.visible")

  //Delete and redraft letter
  cy.get('#btnDelete').click()
  cy.get('#letterTypeId')
  .should('contain', 'Select Template Type...')
           .and('contain', 'Minor Stips - Expedited')
           .and('contain', 'FB Admin pre-review')
           .and('contain', 'UNC ONLY-Permission to Register')
           .select('Minor Stips - Expedited')
  cy.get('#btnDraftLetter').click()  

  //Verify and Finalize letter
    cy.get('#sent_to_email').should("be.visible")
    cy.get('#sent_to_email2').should("be.visible")
    cy.get('.cke_wysiwyg_frame').should("be.visible")
    cy.get('.letterSubHeader').should('contain', 'Minor Stips - Expedited')
    cy.get('#btnViewPDF').should("be.visible")
    cy.get('#btnDelete').should("be.visible")
    cy.get('#btnSaveLetter').should("be.visible")
    cy.get('#btnSendToChair').should("be.visible")
    cy.get('#btnFinalizeLetterModal').should("be.visible")
    cy.get('#btnFinalizeLetterModal').click()
    cy.get('.ui-dialog-content').should("be.visible")
    cy.get('.ui-dialog-buttonset > .btn-info').click()
   


  
             })
          })
        })
      })
    })
  })
})
