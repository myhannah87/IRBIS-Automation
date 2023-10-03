//TEST COMMITTEE LOGIN

//beforeEach method

describe('Login as Committee Member', () => {
    beforeEach (() => {
      cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm');
      //cy.get('title')
        //  .invoke('text')
          //.should('equal', '\nIRB \n') 
      cy.get('input#username.long')
          .type('jtauman').should('have.value', 'jtauman')  
      cy.get('input#password.long')
          .type('Lordoflords!{Enter}')
 });


describe('Test Committee Access',  () => {
    it('Committee Reviewer Dashboard', () => {
      cy.viewport(1200, 750) 
      cy.get('#Committee_Id')
           .should('contain', 'Choose Committee')
           .should('contain', 'Board A')
           //.should('have'.id, '') -> SHOULD HAVE
           .should('contain', 'Board B')
           .and('contain', 'Board C')
           .and('contain', 'Board D')
           .and('contain', 'Board E')
           .and('contain', 'Board F')
       cy.get('#Committee_Id')
           .select('Board E')
           .should('have.value', '12')  
       cy.get('#Review_Date')
           .select('01/10/2023')
       cy.get('.textbox-longer')   
           .should('contain', 'Show All Agenda Items')
           .and('contain', 'Show Only My Agenda Items') 
       cy.get('a.bold')
           .should('contain', 'IRB Reviewer Checklists')
       cy.get('[aria-label="IRB Number: activate to sort column ascending"] > .DataTables_sort_wrapper')    
          .should('contain', 'IRB Number')
     //   });
        
   

//describe('Test Committee View',  () => {
 // it('Committee Reviewer Application pop up', () => {   
    cy.get('#Committee_Id')
        .select('Board E')
        .should('have.value', '12')    
    cy.get('#Review_Date')
    .select('01/10/2023')
    cy.get('.textbox-longer')   
        .should('contain', 'Show All Agenda Items')
        .and('contain', 'Show Only My Agenda Items') 
    cy.get('a.bold')
        .should('contain', 'IRB Reviewer Checklists')
    cy.get('[aria-label="IRB Number: activate to sort column ascending"] > .DataTables_sort_wrapper')    
        .should('contain', 'IRB Number')
    //OPENS POP UP IN A NEW WINDOW
    cy.window().then((win) => {
    cy.stub(win, 'open', url => {
        win.location.href = 'https://orisdev.research.unc.edu/irb_maint/index.cfm?event=admin.review.pageReview&committeeReview=true&appid=413332&reviewId=530098&eformreviewid=284724&area=1&jsexec=&rand=0.8551396759649628';
            }).as("popup")
    })
    cy.viewport(1200, 750) 
    cy.get('tbody > :nth-child(1) > :nth-child(2) > a').click() 
    cy.get('body')
        .should("be.visible")
        //VERIFY BUTTONS AT THE TOP
    cy.get('#primaryReviewerSummary').should('not.be.disabled') 
    cy.get('#secondaryReviewerSummary').should('not.be.disabled') 
    cy.get('#lettersAndStips').should('not.be.disabled') 
    cy.get('#committeeViewPDF').should('not.be.disabled')    
       
    
    //Verify header info
    cy.wait(3000)
    cy.get('#irbInfo').should("be.visible")
    cy.get('#irbInfo > :nth-child(3) > :nth-child(1)').should("be.visible")
    cy.get('#irbInfo > :nth-child(3) > :nth-child(2)').should("be.visible")
    cy.get('#irbInfo > :nth-child(3) > :nth-child(3)').should("be.visible")
    cy.get('#openStudyHistory').should("be.visible")
    //Verify left rail
    cy.get('#navContainer').should("be.visible")
    cy.get('#navReviewType').should("be.visible")
    cy.get('#navReviewConditions').should("be.visible")
    cy.get('#navNextStep').should("be.visible")
    cy.get('#navApplication').should("be.visible")
    cy.get('#navLibrary').should("be.visible")
    cy.get('#navCompare').should("be.visible")
    cy.get('#navStipulations').should("be.visible")
    cy.get('#navExpandCollapse').should("be.visible")
    cy.get('#navItemList').should("be.visible")
    cy.get('#navOptions').should("be.visible")
    cy.get('#navPIResponses').should("be.visible")
    cy.get('#navPIResponses > .subText').should('contain', 'Actions Taken')
    cy.get('#navCommittee').should("be.visible")
    cy.get('#navCommittee > .subText').should('contain', 'Board E | 1/10/2023')
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


    //VERIFY/ENTER PRIMARY REVIEW SUMMARY 
    cy.get('#primaryReviewerSummary').click()
    cy.get('#reviewSummary').type('My Primary Reviewer Summary')
    cy.get('#btnSummary').click()
    cy.get('#btnSummaryChecklist').click()
    cy.get('#summaryEdit').should("be.visible")
    cy.get('#summaryEdit > #btnSummary').should('not.be.disabled')
    cy.get('#btnSummaryClose').should('not.be.disabled')
    cy.get('#btnSummaryClear').should('not.be.disabled')
    cy.get('#frmUploadOHREAttachment').and('contain', 'Click Browse to select a Reviewer Checklist:');
    cy.get('#fileDataInput').should('not.be.disabled')
    cy.get('#btnSummaryClose').click()
    cy.get('.ui-dialog-titlebar-close > .ui-icon').click()
    
    //DELETE PRIMARY REVIEW SUMMARY
    cy.get('#primaryReviewerSummary').click()
    cy.get('#summaryTxt').should('contain', 'My Primary Reviewer Summary')
    cy.get('#btnSummaryEdit').click()
    cy.get('#btnSummaryClear').click()

    //VERIFY SECONDAY REVIEW SUMMARY BUTTON
    cy.wait(1000)
    cy.get('#secondaryReviewerSummary').click()
    cy.get('#reviewSummary').type('My Secondary Reviewer Summary')    
    cy.get('#btnSummary').click()
    cy.get('#btnSummaryChecklist').click()
    cy.get('#summaryEdit').should("be.visible")
    cy.get('#summaryEdit > #btnSummary').should('not.be.disabled')
    cy.get('#btnSummaryClose').should('not.be.disabled')
    cy.get('#btnSummaryClear').should('not.be.disabled')
    cy.get('#frmUploadOHREAttachment').and('contain', 'Click Browse to select a Reviewer Checklist:');
    cy.get('#fileDataInput').should('not.be.disabled')
    cy.get('#btnSummaryClose').click()
    cy.get('.ui-dialog-titlebar-close > .ui-icon').click()

     //DELETE PRIMARY REVIEW SUMMARY
     cy.get('#secondaryReviewerSummary').click()
     cy.get('#summaryTxt').should('contain', 'My Secondary Reviewer Summary')
     cy.get('#btnSummaryEdit').click()
     cy.get('#btnSummaryClear').click()

    
    //VERIFY VIEW LETTER AND STIPLULATIONS
    cy.get('#lettersAndStips').click()
    cy.get('#lettersStipsTable').should("be.visible")
    cy.get('.tableheadersub3 > :nth-child(1)').should('contain', 'Review Result')
    cy.get('.tableheadersub3 > :nth-child(2)').should('contain', 'Date Sent')
    cy.get('.tableheadersub3 > :nth-child(3)').should('contain', 'View Letter')
    cy.get(':nth-child(3) > a > img').should("be.visible")
    cy.get('.tableheadersub3 > :nth-child(4)').should('contain', 'Document List')
    cy.get('.tableheadersub3 > :nth-child(5)').should('contain', 'PI Responses')
    cy.get('tbody > :nth-child(2) > :nth-child(5) > a').should('contain', 'View')
    cy.get('.button').click()
  
     //PI RESPONSES
     cy.viewport(1200, 612) 
     cy.get('#navPIResponses').click()
     cy.wait(5000)
     cy.get('#PIResponseHeader').should("be.visible")
     cy.get('#PIResponseBody > :nth-child(2)').should("be.visible")
     cy.get('#questionPIResponse1856 > :nth-child(1)').should("be.visible")
     cy.get('#questionPIResponse1856 > :nth-child(2) > .stipDiv > :nth-child(2)').should("be.visible")
     cy.get('#questionPIResponse1856 > :nth-child(2) > .responseDiv > :nth-child(1)').should("be.visible")
     cy.get('#questionPIResponse1856 > :nth-child(2) > .responseDiv > :nth-child(2)').should("be.visible")
     cy.get('#questionPIResponse1856 > :nth-child(2) > .actionDiv > :nth-child(1)').should("be.visible")
     cy.get('#questionPIResponse1856 > :nth-child(2) > .actionDiv > :nth-child(2)').should("be.visible")

    //VERIFY COMMITTEE AREA
    cy.get('#navCommittee').click()
    cy.get('#selectCommittee').should('contain', 'Board E')
    cy.get('#committeeDate12').should('contain', '1/10/2023')

    //VERIFY REVIEW RESULTS
    cy.get('#navReviewResult').click()
    cy.get('#selectResult > :nth-child(1)').should('contain', 'Review Result')
    cy.get('#reviewResult1').should('contain', 'Approved')
    cy.get('#riskOfResearchContainer > :nth-child(1)').should('contain', 'Risk of Research')
    cy.get('#approvalDateContainer > span').should('contain', 'Approval Date')
    cy.get('#approvalDateContainer > .reviewResultContainer > div').should('contain', '01/10/2023')
    cy.get('#expirationDateContainer > span').should('contain', 'Expiration Date')
    cy.get('#expirationDateContainer > .reviewResultContainer > div').should('contain', '01/09/2024')

    //VERIFY REVIEW NOTES
    cy.get('#navReviewNotes').click()
    cy.get(':nth-child(2) > .subHeader').should('contain', 'Study Specific Findings')
    cy.get(':nth-child(3) > .subHeader').should('contain', 'Submission Specific Findings')
    cy.get(':nth-child(5) > .subHeader').should('contain', 'Internal Meeting Notes')




      

      })
    }); 
  });
//});
      
  

 