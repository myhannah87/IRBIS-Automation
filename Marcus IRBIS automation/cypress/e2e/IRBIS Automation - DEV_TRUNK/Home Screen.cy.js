describe('', () => {
  beforeEach (() => {
     cy.visit('https://orisdev.research.unc.edu/irb/index.cfm');
     cy.get('input#username.long')
         .type('mhannah1').should('have.value', 'mhannah1')  
     cy.get('input#password.long')
          .type('Lordoflords!{Enter}')
 });



 //describe('Verify Home Screen Dashboard',  () => {
    it('NEW STUDY LINK / CARDS', () => {
    //CREATE NEW SUBMISSION LINKS'
        cy.get('#nav > :nth-child(2) > a').click()
        cy.get('#dashboard').should("be.visible")
        cy.get('[style="padding: 10px 10px 5px 10px;"]').should("be.visible")
//NEW STUDY
        cy.get(':nth-child(2) > .wizardLinks1').should("be.visible").click()
        cy.get('.bd').should("be.visible")
    //VERIFY ONCORE
        cy.get('.searchProtocolNo > img').should("be.visible")
        cy.get('#showOnCoreWizard').click()
        cy.get('.protocolNoDisplay').should("be.visible")
        cy.get('#submitProtocolNo').should("be.visible")
        //cy.get('#submitProtocolNo').click()  --> THIS IS BROKEN AT THE MOMENT (KNOWN ISSUE ON DEV)        
    //VERIFY JIT CARD
       cy.get('#wizard6').should("be.visible")
    //VERIFY NHSR CARD
        cy.get('#wizard1').should("be.visible")
    //VERIFY EXEMPT CARD
        cy.get('#wizard2').should("be.visible")
    //VERIFY FULL FORM CARD
        cy.get('#wizard5').should("be.visible")
    //VERIFY MULTI-SITE CARD
        cy.get('#wizard3').should("be.visible")
    //VERIFY RELY ON CARD
       cy.get('#wizard4').should("be.visible")
       cy.get('#btn4').click()
    //VERIFY RELY ON STUDY TYPE
       cy.get('#modalPopup').should("be.visible")
    //RELY ON NCI CIRB CARD
       cy.get('#wizard10').should("be.visible")
    //RELY ON RELY ON COMMERICAL IRB CARD
      cy.get('#wizard11').should("be.visible")
    //RELY ON INSTITUTIONAL IRB CARD
      cy.get('#wizard12').should("be.visible")
    //RELY ON COLLABORATVIE IRB CARD
      cy.get('#wizard13').should("be.visible")
      cy.get('.ui-icon').click()
    //MODIFICATION
      cy.get('#dashboardmenu4 > :nth-child(4) > a').should("be.visible")
      cy.get('#dashboardmenu4 > :nth-child(4) > a').click()
      cy.get('.bd').should("be.visible")
      cy.get('.sorting_desc > .DataTables_sort_wrapper > label').should("be.visible")
      cy.get('[aria-label="Title: activate to sort column ascending"] > .DataTables_sort_wrapper > label').should("be.visible")
      cy.get('[aria-label="PI: activate to sort column ascending"] > .DataTables_sort_wrapper > label').should("be.visible")
      cy.get('[aria-label="Most RecentSubmission: activate to sort column ascending"] > .DataTables_sort_wrapper > label').should("be.visible")
      cy.get('[aria-label="IRB: activate to sort column ascending"] > .DataTables_sort_wrapper > label').should("be.visible")
      cy.get('[aria-label="Study Status: activate to sort column ascending"] > .DataTables_sort_wrapper > label').should("be.visible")
      cy.get('[aria-label="ExpirationDate: activate to sort column ascending"] > .DataTables_sort_wrapper > label').should("be.visible")
      cy.get('[aria-label="Admin AnnualReview Date: activate to sort column ascending"] > .DataTables_sort_wrapper > label').should("be.visible")
      cy.get('[aria-label="Copy: activate to sort column ascending"] > .DataTables_sort_wrapper').should("be.visible")
    //RENEWAL
      cy.get(':nth-child(6) > .arrowLinks').should("be.visible")
      cy.get(':nth-child(6) > .arrowLinks').click()
      cy.get('.bd').should("be.visible")
    //PRI
      cy.get('#dashboardmenu4 > :nth-child(8) > a').should("be.visible")
      cy.get('#dashboardmenu4 > :nth-child(8) > a').click()
      cy.get('.bd').should("be.visible")

    //CLOSURE
      cy.get('#dashboardmenu4 > :nth-child(10) > a').should("be.visible")
      cy.get('#dashboardmenu4 > :nth-child(10) > a').click()
      cy.get('.bd').should("be.visible")

      
//SUBMISSION IN PROGRESS LINKS
    // IN DRAFT
     cy.get('#dashboardmenu5 > :nth-child(2) > a').should("be.visible")
     cy.get('#dashboardmenu5 > :nth-child(2) > a').click() 
     cy.get('.bd').should("be.visible")    
    //BEING ROUTED
      cy.get('#dashboardmenu5 > :nth-child(4) > a').should("be.visible")
      cy.get('#dashboardmenu5 > :nth-child(4) > a').click()
      cy.get('.bd').should("be.visible")
    //DEPT WAITING RESPONSE
      cy.get('#dashboardmenu5 > :nth-child(6) > a').should("be.visible")
      cy.get('#dashboardmenu5 > :nth-child(6) > a').click()
      cy.get('.bd').should("be.visible")
    //SUBMITTED TO IRB
      cy.get('#dashboardmenu5 > :nth-child(8) > a').should("be.visible")
      cy.get('#dashboardmenu5 > :nth-child(8) > a').click()
      cy.get('.bd').should("be.visible")
    //IRB WAITING PI RESPONSE
      cy.get('#dashboardmenu5 > :nth-child(10) > a').should("be.visible")
      cy.get('#dashboardmenu5 > :nth-child(8) > a').click()
      cy.get('.bd').should("be.visible")
//ALL MY STUDIES LINKS
    //MY STUDIES
      cy.get('#dashboardmenu6 > :nth-child(2) > a').should("be.visible")
      cy.get('#dashboardmenu6 > :nth-child(2) > a').click()
      cy.get('.bd').should("be.visible")
    //STUDIES IN MY DEPT
      cy.get('#dashboardmenu6 > dd.even > a').should("be.visible")
      cy.get('#dashboardmenu6 > :nth-child(2) > a').click()
      cy.get('.bd').should("be.visible")

//ROUTING INBOX
    //PI/ADVISOR CERTIFICATION
      cy.get('#dashboardmenu8 > :nth-child(2) > a').should("be.visible")
      cy.get('#dashboardmenu8 > :nth-child(2) > a').click()
      cy.get('.bd').should("be.visible")

    //DEPT APPROVAL
      cy.get('#dashboardmenu8 > dd.even > a').should("be.visible")
      cy.get('#dashboardmenu8 > dd.even > a').click()
      cy.get('.bd').should("be.visible")
//MY LETTER HISTORY
    //VIEW LETTER HISTORY
      cy.get(':nth-child(11) > dd.even > a').should("be.visible")
      cy.get(':nth-child(11) > dd.even > a').click()
      cy.get('.bd').should("be.visible")

    //VIEW ACTIVE COIRM
      cy.get(':nth-child(13) > dd > a').should("be.visible")
      cy.get(':nth-child(11) > dd.even > a').click()
      cy.get('.bd').should("be.visible")

            });
    });
//});
