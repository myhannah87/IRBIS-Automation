//TEST COMMITTEE LOGIN

//beforeEach method

describe('Login as Committee Member', () => {
    //beforeEach (() => {
    it('Committee Reviewer Dashboard', () => {
    cy.viewport(1400, 750) 
    cy.visit('https://orisdev.research.unc.edu/irb/index.cfm?event=committee.reviewers&committeeId=12&reviewDate=01/10/2023');
      //cy.get('title')
        //  .invoke('text')
          //.should('equal', '\nIRB \n') 
    cy.get('input#username.long')
        .type('jtauman').should('have.value', 'jtauman')  
    cy.get('input#password.long')
        .type('test!{Enter}')
    cy.get('#reviewDateCalendar').should("be.visible")
    cy.get('#messageCenterBox').should("be.visible")  
    cy.get('.expandView').should("be.visible")
    cy.get('.updateMessageLogs').should("be.visible")

    cy.get('.headerTitle').should('contain', 'Committee Reviews')
    cy.get('.headerDescription').should('contain', 'Select a committee on the left to view the Agenda, Minutes and submissions for the committee selected.')
    cy.get('#committeeReviews > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').should("be.visible")
    cy.get(':nth-child(1) > .sideNavHeader').should('contain', 'Next Committee')
    cy.get('.oddEvenContainer > [data-committeeid="2"]').should('contain', 'Board A')
    cy.get('[data-committeeid="2"] > .dateLink').should("be.visible")
    cy.get('[data-committeeid="7"]').should('contain', 'Board B')
    cy.get('[data-committeeid="7"] > .dateLink').should("be.visible")
    cy.get('[data-committeeid="8"]').should('contain', 'Board C')
    cy.get('[data-committeeid="8"] > .dateLink').should("be.visible")
    cy.get('[data-committeeid="9"]').should('contain', 'Board D')
    cy.get('[data-committeeid="9"] > .dateLink').should("be.visible")
    cy.get('[data-committeeid="12"]').should('contain', 'Board E')
    cy.get('[data-committeeid="12"] > .dateLink').should("be.visible")
    cy.get('[data-committeeid="13"]').should('contain', 'Board F')
    cy.get('[data-committeeid="13"] > .dateLink').should("be.visible")
    //cy.get('[data-committeeid="16"]').should('contain', 'SWAG Committee')
    //cy.get('[data-committeeid="16"] > .dateLink').should("be.visible")

    cy.get(':nth-child(2) > .sideNavHeader').should('contain', 'Search Committees')
    cy.get('#selectCommittee').should('contain', 'Board A')
    .and('contain', 'Board B')
    .and('contain', 'Board C')
    .and('contain', 'Board D')
    .and('contain', 'Board E')
    .and('contain', 'Board F')
    .and('contain', 'SWAG Committee')
    
    /*
    //This opens results on a new tab
    cy.get('#selectCommittee')
    .select('Board A')

    cy.get('#selectDates2')
    .select('08/07/2023')
   
  // cy.visit('https://orisdev.research.unc.edu/irb/index.cfm?event=committee.reviewers&committeeId=2&reviewDate=08/07/2023');
    */

    cy.get(':nth-child(3) > .sideNavHeader').should('contain', 'IRB Reviewer Checklists')
    cy.get('[data-href="https://research.unc.edu/wp-content/uploads/2022/10/Document-38_IRB-Reviewer-Checklist-Initial-Application-8.15.2022.docx"] > .textLink').should('contain', 'Initial Application')
    cy.get('[data-href="https://research.unc.edu/wp-content/uploads/2022/10/IRB-Reviewer-Checklist-Renewal-Application-11.14.2023.docx"] > .textLink').should('contain', 'Renewal')
    cy.get('[data-href="https://research.unc.edu/wp-content/uploads/2024/04/Document-39_IRB-Reviewer_Checklist-Modifications-8.15.2022.docx"] > .textLink').should('contain', 'Modification')
    cy.get('[data-href="https://research.unc.edu/wp-content/uploads/2022/10/Document-37_IRB-Reviewer-Checklist-Additional-Considerations-8.15.2022.docx"] > .textLink').should('contain', 'Additional Considerations')
    cy.get('[data-href="https://research.unc.edu/wp-content/uploads/2022/08/PRI-Worksheet.docx"] > .textLink').should('contain', 'PRI Reviewer Worksheet')

    cy.get('.boardTitle').should("be.visible")
    //Agenda and Minutes:
    cy.get('.boardLinks > :nth-child(1)').should("be.visible")
    //View Current Agenda:
    cy.get('[href="index.cfm?event=admin.committee.exportPDF&type=agenda&idValue=0&committeeId=12&reviewDate=01/10/2023"]').should('contain', 'View Current Agenda')
    //View Current Minutes:
    cy.get('[href="index.cfm?event=admin.committee.exportPDF&type=minutes&idValue=0&committeeId=12&reviewDate=01/10/2023"]').should('contain', 'View Current Minutes')

    cy.get(':nth-child(3) > button').should('contain', 'Next Board')
    cy.get(':nth-child(4) > button').should('contain', 'Previous Board')
    cy.get(':nth-child(5) > button').should('contain', 'Previous Board')
    //Excel button
    cy.get('.dt-button > img').should("be.visible")
    //Search field
    cy.get('#reviewersDT_filter > label').should("be.visible")

   // cy.visit('https://orisdev.research.unc.edu/irb/index.cfm?event=committee.reviewers&committeeId=12&reviewDate=01/10/2023');

    cy.get('.sorting_asc').should("be.visible")
    cy.get('[aria-label="IRB Number: activate to sort column ascending"]').should('contain', 'IRB Number')
    cy.get('[aria-label="Title: activate to sort column ascending"]').should('contain', 'Title')
    cy.get('[aria-label="PI: activate to sort column ascending"]').should('contain', 'PI')
    cy.get('[aria-label="Submission Type: activate to sort column ascending"]').should('contain', 'Submission Type')
    cy.get('[aria-label="Date Received: activate to sort column ascending"]').should('contain', 'Date Received')
    cy.get('[aria-label="Review Type: activate to sort column ascending"]').should('contain', 'Review Type')
    cy.get('[aria-label="Primary Reviewer: activate to sort column ascending"]').should('contain', 'Primary Reviewer')
    cy.get('[aria-label="Secondary Reviewer: activate to sort column ascending"]').should('contain', 'Secondary Reviewer')
    cy.get('[aria-label="Expiration Date: activate to sort column ascending"]').should('contain', 'Expiration Date')






});

      
    //Committee Availability
    it('Committee Availability', () => {
       cy.viewport(1400, 750) 
    //cy.visit('https://orisdev.research.unc.edu/irb/index.cfm');
    cy.visit('https://orisdev.research.unc.edu/irb/index.cfm');
      //cy.get('title')
        //  .invoke('text')
          //.should('equal', '\nIRB \n') 
    cy.get('input#username.long')
        .type('jtauman').should('have.value', 'jtauman')  
    cy.get('input#password.long')
        .type('test!{Enter}')
    cy.get('#reviewDateCalendar').should("be.visible")
    cy.get('#messageCenterBox').should("be.visible")  
    cy.get('.expandView').should("be.visible")
    cy.get('.updateMessageLogs').should("be.visible")
    cy.get('#committeeAvailability').click()
    cy.get('#ui-dialog-title-calendarModal').should('contain', 'Availability for Committee Dates (View All)')
    cy.get('table > :nth-child(4)').should("be.visible")
    cy.get('table > :nth-child(5)').should("be.visible")

    cy.get('#leftRail > strong').should('contain', 'Committee Selector')
    cy.get('#committeeSelector > .selected').should("be.visible")
    cy.get('#committeeSelector > [data-committeeid="2"]').should("be.visible")
    cy.get('#committeeSelector > [data-committeeid="7"]').should("be.visible")
    cy.get('#committeeSelector > [data-committeeid="8"]').should("be.visible")
    cy.get('#committeeSelector > [data-committeeid="9"]').should("be.visible")
    cy.get('#committeeSelector > [data-committeeid="12"]').should("be.visible")
    cy.get('#committeeSelector > [data-committeeid="13"]').should("be.visible")
    //cy.get('#committeeSelector > [data-committeeid="14"]').should("be.visible")
    cy.get('#committeeSelector > [data-committeeid="16"]').should("be.visible")

    cy.get('.months-container > :nth-child(1)').should("be.visible")
    cy.get('.months-container > :nth-child(2)').should("be.visible")
    cy.get('.months-container > :nth-child(3)').should("be.visible")
    cy.get('.months-container > :nth-child(4)').should("be.visible")
    cy.get('.months-container > :nth-child(5)').should("be.visible")
    cy.get('.months-container > :nth-child(6)').should("be.visible")
    cy.get('.months-container > :nth-child(7)').should("be.visible")
    cy.get('.months-container > :nth-child(8)').should("be.visible")
    cy.get('.months-container > :nth-child(9)').should("be.visible")
    cy.get('.months-container > :nth-child(10)').should("be.visible")
    cy.get('.months-container > :nth-child(11)').should("be.visible")
    cy.get('.months-container > :nth-child(12)').should("be.visible")

    cy.get(':nth-child(12) > .month > tbody > :nth-child(3) > :nth-child(2) > .day-content').click()
    cy.get('[aria-labelledby="ui-dialog-title-unavailableModal"] > .ui-dialog-titlebar').should('contain', 'Add Unavailability')
    cy.get('#unavailableModal > :nth-child(1) > :nth-child(1)').should('contain', 'Person:')
    cy.get('#personUnavailable').should("be.visible")
    cy.get('#unavailableModal > :nth-child(2) > :nth-child(1)').should('contain', 'Date:')
    cy.get('#committeeDate').should("be.visible")
    cy.get('#fullDay').should("be.visible")
    cy.get('#partialDay').should("be.visible")
    cy.get('.ui-dialog-buttonset > :nth-child(1)').should('contain', 'Update Unavailability')
    cy.get('.ui-dialog-buttonset > :nth-child(2)').should('contain', 'Cancel')
    cy.get('#partialDay').click()
    cy.get('#partialDateTime > :nth-child(2) > :nth-child(1)').should('contain', 'Arriving Late at:')
    cy.get('#arrivingLate').should('contain', '1:00 PM')
        .and('contain', '1:30 PM')
        .and('contain', '2:00 PM')
        .and('contain', '2:30 PM')
        .and('contain', '3:00 PM')
        .and('contain', '3:30 PM')
        .and('contain', '4:00 PM')
        .and('contain', '4:30 PM')
        .and('contain', '5:00 PM')
    cy.get('#partialDateTime > :nth-child(3) > :nth-child(1)').should('contain', 'Leaving Early at:')
    cy.get('#leavingEarly').should('contain', '1:00 PM')
        .and('contain', '1:30 PM')
        .and('contain', '2:00 PM')
        .and('contain', '2:30 PM')
        .and('contain', '3:00 PM')
        .and('contain', '3:30 PM')
        .and('contain', '4:00 PM')
        .and('contain', '4:30 PM')
        .and('contain', '5:00 PM')

    cy.get('#arrivingLate')
        .select('1:30 PM')
    cy.get('#leavingEarly')    
        .select('4:30 PM')
    cy.get('.ui-dialog-buttonset > :nth-child(1)').click()
    cy.get('.partialDay > .day-content').should("be.visible")

    cy.get('.partialDay > .day-content').click()
    cy.get('#fullDay').click()
    cy.get('#partialDateTime > :nth-child(2) > :nth-child(1)').should("not.be.visible")
    cy.get('#partialDateTime > :nth-child(3) > :nth-child(1)').should("not.be.visible")
    cy.get('#arrivingLate').should("not.be.visible")
    cy.get('#leavingEarly').should("not.be.visible")
    cy.get('.ui-dialog-buttonset > :nth-child(1)').click()
    cy.get(':nth-child(3) > .notAttending > .day-content').should("be.visible")

    cy.get(':nth-child(3) > .notAttending > .day-content').click()
    cy.get('#fullDay').click()
    cy.get('.ui-dialog-buttonset > :nth-child(1)').click()
    cy.get('[style=""] > .day-content').should("be.visible")
    cy.get('[aria-labelledby="ui-dialog-title-calendarModal"] > .ui-dialog-titlebar > .ui-dialog-titlebar-close > .ui-icon').click()

    })






//describe('Test Committee View',  () => {
  it.only('Committee Reviewer Application pop up', () => {  
    cy.viewport(1400, 750) 
    // cy.visit('https://orisdev.research.unc.edu/irb/index.cfm?event=committee.reviewers&committeeId=12&reviewDate=01/10/2023');
    cy.visit('https://orisdev.research.unc.edu/irb/index.cfm?event=committee.reviewers&committeeId=12&reviewDate=01/10/2023');
      //cy.get('title')
        //  .invoke('text')
          //.should('equal', '\nIRB \n') 
    cy.get('input#username.long')
        .type('jtauman').should('have.value', 'jtauman')  
    cy.get('input#password.long')
        .type('test!{Enter}')
  
    cy.viewport(1200, 1000)  
    
  
    //OPENS POP UP IN A NEW WINDOW
    cy.window().then((win) => {
    cy.stub(win, 'open', url => {
        //win.location.href = 'https://orisdev.research.unc.edu/irb/index.cfm?event=admin.reviewWindow&reviewId=530098&appId=413332&committeeView=1';
        win.location.href = 'https://orisdev.research.unc.edu/irb/index.cfm?event=admin.reviewWindow&reviewId=530098&appId=413332&committeeView=1';
         }).as("popup")
    })
    cy.viewport(1200, 750) 
    cy.get('tbody > :nth-child(1) > :nth-child(3) > a').click() 
    cy.get('body')
        .should("be.visible")
        //VERIFY BUTTONS AT THE TOP
    cy.get('#primaryReviewerSummary').should('not.be.disabled') 
    cy.get('#secondaryReviewerSummary').should('not.be.disabled') 
    cy.get('#lettersAndStips').should('not.be.disabled') 
    cy.get('#committeeViewPDF').should('not.be.disabled')    
       
     // CAPTURE URL OF REVIEW WINDOW

     cy.url().as("reviewWindow");
    
    //Verify header info
    cy.wait(1000)
    cy.get('#irbInfo').should("be.visible")
    cy.get('#irbInfo > :nth-child(3) > :nth-child(1)').should("be.visible")
    cy.get('#irbInfo > :nth-child(3) > :nth-child(2)').should("be.visible")
    cy.get('#irbInfo > :nth-child(3) > :nth-child(3)').should("be.visible")
    cy.get('#openStudyHistory').should("be.visible")
    //Verify left rail
    cy.get('#navContainer').should("be.visible")
    cy.get('#navReviewType').should("be.visible")
    //cy.get('#navReviewConditions').should("be.visible")
    //cy.get('#navNextStep').should("be.visible")
    cy.get('#navApplication').should("be.visible")
    //cy.get('#navLibrary').should("be.visible")
    //cy.get('#navCompare').should("be.visible")
    //cy.get('#navStipulations').should("be.visible")
    //cy.get('#navExpandCollapse').should("be.visible")
    //cy.get('#navItemList').should("be.visible")
    cy.get('#navOptions').should("be.visible")
    cy.get('#navPIResponses').should("be.visible")
    cy.get('#navPIResponses > .subText').should('contain', 'Actions Taken')
    cy.get('#navCommittee').should("be.visible")
    cy.get('#navCommittee > .subText').should('contain', 'Board E | 1/10/2023')
    cy.get('#navReviewResult').should("be.visible")
    cy.get('#navReviewNotes').should("be.visible")
    cy.get('#navLetter').should("be.visible")
  
    /*
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

    */

    //VERIFY/ENTER PRIMARY REVIEW SUMMARY 
     cy.get('#primaryReviewerSummary').click()
    // cy.get('#summaryTxtHeader > .section_hdr_1').should('contain', 'Primary Review Summary')
    // cy.get('#summaryTxtHeader > #summaryDetails').should("be.visible")
    // cy.get('#summaryTxt').should("be.visible")
    // cy.get('#btnSummaryEdit').click()
    // cy.get('#reviewSummary').should("be.visible")
    // cy.get('#summaryEdit > #summaryDetails').should('contain', 'Summary saved by Amy Marzinsky')
    // cy.get('#summaryTxtHeader > #checklistDetails').should('contain', 'Checklist (22-2109_Initial_Marzinsky.docx) uploaded by Amy Marzinsky on 01/09/2023 at 1:42 PM')
    
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
    cy.wait(1000)
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

     //DELETE SECONDARY REVIEW SUMMARY
     cy.wait(1000)
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

       // Get window object
        cy.window().then((win) => {
                // Replace window.open(url, target)-function with our own arrow function
        cy.stub(win, 'open', url => 
                {
                // change window location to be same as the popup url
        win.location.href = Cypress.config().baseUrl + url;
                }).as("popup") // alias it with popup, so we can refer it with @popup
                })

     cy.get('#navPIResponses').click()
     //cy.wait(5000)
     cy.get('#PIResponseHeader').should("be.visible")
     cy.get('#PIResponseBody > :nth-child(2)').should("be.visible")
     cy.get('#questionPIResponse1856 > :nth-child(1)').should("be.visible")
     cy.get('#questionPIResponse1856 > :nth-child(2) > .stipDiv > :nth-child(2)').should("be.visible")
     cy.get('#questionPIResponse1856 > :nth-child(2) > .responseDiv > :nth-child(1)').should("be.visible")
     cy.get('#questionPIResponse1856 > :nth-child(2) > .responseDiv > :nth-child(2)').should("be.visible")
     cy.get('#questionPIResponse1856 > :nth-child(2) > .actionDiv > :nth-child(1)').should("be.visible")
     cy.get('#questionPIResponse1856 > :nth-child(2) > .actionDiv > :nth-child(2)').should("be.visible")


      //NAVIGATE BACK TO REVIEW WINDOW
      cy.get("@reviewWindow").then((url) => {
        cy.visit(url)
        })
     cy.viewport(1400, 750)

        //VERIFY REVIEW RESULTS
    cy.get('#navReviewResult').click()
    cy.get('#selectResult > :nth-child(1)').should('contain', 'Review Result')
    cy.get('#reviewResult4').should('contain', 'Minor Stipulations')
    cy.get('#riskOfResearchContainer > :nth-child(1)').should('contain', 'Risk of Research')
    //cy.get('#approvalDateContainer > span').should('contain', 'Approval Date')
    //cy.get('#approvalDateContainer > .reviewResultContainer > div').should('contain', '01/10/2023')
    //cy.get('#expirationDateContainer > span').should('contain', 'Expiration Date')
    //cy.get('#expirationDateContainer > .reviewResultContainer > div').should('contain', '01/09/2024')

    //VERIFY COMMITTEE AREA
    cy.get('#navCommittee').click()
    cy.get('#selectCommittee').should('contain', 'Board E')
    cy.get('#committeeDate12').should('contain', '1/10/2023')

    //VERIFY REVIEW NOTES
    cy.get('#navReviewNotes').click()
    cy.get(':nth-child(2) > .subHeader').should('contain', 'Study Specific Findings')
    cy.get(':nth-child(3) > .subHeader').should('contain', 'Submission Specific Findings')
    cy.get(':nth-child(5) > .subHeader').should('contain', 'Internal Meeting Notes')

    //VERIFY LETTER
    cy.get('#navLetter').click()
    cy.get('.letterSubHeader').should('contain', 'Minor Stips - Full Board')


      })
    }); 
 // });
//});
      
  

 