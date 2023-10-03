//TEST COMMITTEE LOGIN

//beforeEach method

describe('Login as Committee Member', () => {
    beforeEach (() => {
      cy.visit('https://orisdev.research.unc.edu/irb/index.cfm');
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
           win.location.href = 'https://orisdev.research.unc.edu/irb/index.cfm?event=admin.review.pageReview&committeeReview=true&appid=413332&reviewId=530098&eformreviewid=284724&area=1&jsexec=&rand=0.8551396759649628';
             }).as("popup")
       })
       cy.get('tbody > :nth-child(1) > :nth-child(2) > a').click() 
       cy.get('body')
           .should("be.visible")
           //VERIFY BUTTONS
       cy.get('#btnSummary').should('not.be.disabled') 
       cy.get('#btnSummary2').should('not.be.disabled') 
      // cy.get('#dhtmltooltipFinding_anchor').should('not.be.disabled') 
       cy.get('#btnViewChanges').should('not.be.disabled') 
       cy.get('#btnViewLetters').should('not.be.disabled') 
       cy.get('#btnViewPDF').should('not.be.disabled')    
          //VERIFY LINKS AT THE TOP
          cy.get('[onclick="showReview(413332,530098,284724,1);"]').should('contain', 'Application')  
       cy.get('#stipulationLink').should('contain', 'Stipulations (0)')
       cy.get('#navigateToReview530098 > :nth-child(10)').should('contain', 'Review Result')
      // cy.get('div.link').should('contain', 'Draft Letter')
       cy.get('#flag_413332').should('not.be.disabled') 
        //VERIFY PRIMARY REVIEW SUMMARY BUTTON
        cy.get('#btnSummary').click()
        cy.get('#summaryEdit').should("be.visible")
        cy.get('#summaryEdit > #btnSummary').should('not.be.disabled')
        cy.get('#btnSummaryClose').should('not.be.disabled')
        cy.get('#btnSummaryClear').should('not.be.disabled')
        cy.get('#btnSummaryChecklist').click()
        cy.get('#fileDataInput').should('not.be.disabled')
        cy.get('#btnSummaryClose').click()
        cy.get('.ui-dialog-titlebar-close > .ui-icon').click()
        //VERIFY SECONDAY REVIEW SUMMARY BUTTON
        cy.get('#btnSummary2').click()
        cy.get('#summaryEdit').should("be.visible")
        cy.get('#summaryEdit > #btnSummary').should('not.be.disabled')
        cy.get('#btnSummaryClose').should('not.be.disabled')
        cy.get('#btnSummaryClear').should('not.be.disabled')
        cy.get('#btnSummaryChecklist').click()
        cy.get('#fileDataInput').should('not.be.disabled')
        cy.get('#btnSummaryClose').click()
        cy.get('.ui-dialog-titlebar-close > .ui-icon').click()
        //VERIFY VIEW FINDINGS HOVER OVER
      //  cy.get('#dhtmltooltipFinding_anchor').trigger('mouseover')
      //  cy.get('.qtip-content').should("be.visible")
       //VERIFY VIEW CHANGES
       cy.reload() //Gets rid of hoverover
       cy.get('#btnViewChanges').click()
       cy.get('[style="z-index: 2100; display: block; top: 106px;"] > :nth-child(2)').should('not.be.disabled')
       cy.get('[style="z-index: 2100; display: block; top: 106px;"] > :nth-child(1) > [name="btnClose"]').click()
       //VERIFY VIEW LETTER AND STIPLULATIONS
       cy.get('#btnViewLetters').click()
       cy.get('#divEmail').should("be.visible")
       cy.wait(3000)
       cy.get('#divEmail > #closeMe > .button').should("be.visible")
       cy.get('#divEmail > #closeMe > .button').click()
       //VERIFY VIEW PDF
       cy.get('#btnViewPDF').should('not.be.disabled')
       //VERIFY ITEM LIST SLIDE OUT
       cy.get('#itemListHandle').should("be.visible")
       cy.get('#itemListHandle').click()
       cy.get('#snavwindow').should("be.visible")
       cy.get('#itemListHandle').click()
 


        /*
        cy.get('#btnSummary2').should('not.be.disabled') 
        cy.get('#dhtmltooltipFinding_anchor').should('not.be.disabled') 
        cy.get('#btnViewChanges').should('not.be.disabled') 
        cy.get('#btnViewLetters').should('not.be.disabled') 
        cy.get('#btnViewPDF').should('not.be.disabled')    
        */

      // cy.get('[onclick="showReview(351327,448451,223240,1);"]').should('not.be.disabled')  
      })
    }); 
  });
//});
      
  

 