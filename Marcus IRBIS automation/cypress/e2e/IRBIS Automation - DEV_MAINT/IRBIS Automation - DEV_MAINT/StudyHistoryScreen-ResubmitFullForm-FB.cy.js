describe('', () => {
  beforeEach (() => {
   //  cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm?event=admin.reviewWindow&reviewId=530805&appId=416288');
     cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm?event=admin.study.pgStudy&irbid=22-3322');
     cy.get('input#username.long')
         .type('mhannah1').should('have.value', 'mhannah1')  
     cy.get('input#password.long')
          .type('Lordoflords!{Enter}')
 });

 describe('Application/Review Popup',  () => {
  it('Click application link', () => {

    cy.get('.appSwimLanes').should("be.visible")
  cy.get('.appSwimLanes').invoke('attr', 'data-appid').as("InitialAppId"); 
  //cy.get('@InitialAppId').then((InitialAppId) => {
  //console.log(InitialAppId); //-> this returns the ID I need!
  cy.get('.appSwimLanes').invoke('attr', 'data-reviewid').as("InitialReviewId"); 
  //cy.get('@InitialReviewId')//.then((InitialReviewId) => {
  cy.get('@InitialReviewId').then(Number)

  cy.get('#swimLaneReview530805 > .swimlane1 > div').click()
  cy.location()
  

 // const InitialReviewId = '@InitialReviewId'

 // cy.visit(`https://orisdev.research.unc.edu/irb_maint/index.cfm?event=admin.reviewWindow&reviewId=@InitialReviewId`);
    //console.log(InitialReviewId); //-> this returns the ID I need!
    //cy.get('#bucketFinderText').type(InitialAppId) 
   //cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm?event=admin.reviewWindow&reviewId=@InitialReviewId&appId=@InitialAppId');
  
  


    /*
//Create a review
  cy.get('#navNextStep').click()
  cy.get('#hasReviewTypes').should("be.visible")
  cy.get('#reviewTypeId')
  .should('contain', 'Select Review Type...')
           .and('contain', 'Not Full Board (Expedited, Exempt, NHSR, other)')
           .and('contain', 'Full Board')
           .select('Not Full Board (Expedited, Exempt, NHSR, other)')
  cy.get('#btnCreateReview').click() 


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
  cy.get('#navPIResponses').should("be.visible")
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
  
  

  //PI Responses
  cy.viewport(1200, 612) 
  cy.get('#navPIResponses').click()
  cy.get('#PIResponseHeader').should("be.visible")
  cy.get('#PIResponseHeader > :nth-child(2) > :nth-child(1)').should("be.visible")
  cy.get('#PIResponseHeader > :nth-child(2) > :nth-child(2)').should("be.visible")
  cy.get('#PIResponseHeader > :nth-child(2) > :nth-child(3)').should("be.visible")
  cy.get('.answerForStip > :nth-child(1)').should("be.visible")
  cy.get('.compareClick').should("be.visible")
  cy.get(':nth-child(1) > .nextChange').should("be.visible")
  cy.get('.stipDiv > :nth-child(1)').should("be.visible")
  cy.get('.stipDiv > :nth-child(2) > p').should("be.visible")
  cy.get('.stipDiv > :nth-child(2)').should("be.visible")
  cy.get('.responseDiv > :nth-child(1)').should("be.visible")
  cy.get('.responseDiv > :nth-child(2) > p').should("be.visible")
  cy.get('.responseDiv > :nth-child(2)').should("be.visible")
  cy.get('.actionDiv > :nth-child(1)').should("be.visible")
  cy.get('.actionDiv > :nth-child(2)').should("be.visible")
  cy.get('.resolve').should("be.visible")
  cy.get('.resend').should("be.visible")
  cy.get('.withdraw').should("be.visible")
  cy.get('.responseConfirm').should("be.visible")
  
  cy.get('.resolve').click()
  cy.get('.responseConfirm').click()
  cy.get('#saveResponseConfirmations').click()

 

  //Record Review Result (minor stip w/o stip)
  cy.get('#navReviewResult').click()
  cy.get('#reviewResult3').click()

  cy.get('#navReviewNotes').click()
  cy.wait(3000)
 
  //Draft Letter 
   cy.get('#navLetter').click()
   cy.get('#letterTypeId').select('Minor Stips - Expedited')
   cy.get('#btnDraftLetter').click()  
   cy.get('#btnFinalizeLetterModal').click()
   cy.get('.finalCheckAlertText > strong').should("be.visible")
   cy.get('.body > div').and('contain', 'You have no stipulations in place.')
   cy.get('.closeFinal').click()

   cy.get('#btnDelete').click()

  //Record Review Result -> Select NHSR
  cy.get('#navReviewResult').click()
  cy.get('#reviewResult4').click()
  cy.get('#navReviewNotes').click()
  cy.wait(3000)

 //Study Specific Findings
  cy.get('#cke_48_contents > .cke_wysiwyg_frame').then(function($iframe) {
    const $body = $iframe.contents().find("body");
    console.log($body);
    cy.wrap($body[0]).and('contain', 'My Study Specific Findings!')

      //Submission Specific Findings 
  cy.get('#cke_49_contents > .cke_wysiwyg_frame').then(function($iframe) {
    const $body = $iframe.contents().find("body");
    console.log($body);
    cy.wrap($body[0]).and('contain', 'My Submission Specific Findings');

    cy.get(':nth-child(5) > .subHeader').should("be.visible")  
    cy.get('.meetingNotes').should("be.visible")
   
   cy.get('#navNextStep').click()
  cy.get('#letterTypeId')
  .should('contain', 'Select Template Type...')
           .and('contain', '118 Approval Letter')
           .and('contain', 'Not Human Subjects Research')
           .and('contain', 'Emergency Use Ackn.')
           .select('Not Human Subjects Research')
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
     


*/

          })
        })
      })
   // })
 // })
//})
