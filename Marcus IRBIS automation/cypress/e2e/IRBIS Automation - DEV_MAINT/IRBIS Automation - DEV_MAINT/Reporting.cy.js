 
  describe('REPORTING',  () => {
     it('Verify Reporting landing screen', () => {
        cy.visit(Cypress.config().devMaintBaseUrl);
       
        cy.get('input#username.long')
            .type('cdcantre').should('have.value', 'cdcantre')  
        cy.get('input#password.long')
            .type('test{Enter}')
        
        cy.viewport(1400, 1100) 
        

        //REPORTS LEFT RAIL
        cy.get('#dashboard').should("be.visible")
        cy.get('#dashboard > :nth-child(6)').should("be.visible")
        cy.get('#dashboard > :nth-child(7)').should("be.visible")

         //IRB REPORTS
        cy.get('#dashboardmenu2 > dd > a').should('contain','Study Report')
        cy.get(':nth-child(9) > dd.even > a').should('contain','Submission Report')
        cy.get(':nth-child(10) > dd > a').should('contain','Review Report')

        cy.get('#divBusinessRuleAdminBucket > :nth-child(2)').should("be.visible")
        cy.get('[style="float: left; width: 48%;"] > h3').should('contain', 'FINALIZED SUBMISSIONS BY TYPE Past 7 Days')

        cy.get('[style="float: right; width: 48%;"] > h3').should('contain','FINALIZED REVIEWS BY RESULT Past 7 Days')
        cy.get('[href="index.cfm?event=irbis_reporting.irb_reports.index&datespan=7"]').should('contain','Week')
        cy.get('[href="index.cfm?event=irbis_reporting.irb_reports.index&datespan=14"]').should('contain','2 Weeks')
        cy.get('[href="index.cfm?event=irbis_reporting.irb_reports.index&datespan=30"]').should('contain','Month')
        cy.get('[href="index.cfm?event=irbis_reporting.irb_reports.index&datespan=90"]').should('contain','Quarter')
        cy.get('[href="index.cfm?event=irbis_reporting.irb_reports.index&datespan=365"]').should('contain','Year')
        
        cy.get('#divBusinessRuleAdminBucket > :nth-child(3)').should("be.visible")
        cy.get('[style="float: left;"] > h3').should('contain', 'ACTIVE SUBMISSION COUNT BY ANALYST')
        cy.get('[href="index.cfm?event=irbis_reporting.irb_reports.index&dashboard=all"]').should('contain','All')
        cy.get('[href="index.cfm?event=irbis_reporting.irb_reports.index&dashboard=ohre"]').should('contain','Under Review')
        cy.get('[href="index.cfm?event=irbis_reporting.irb_reports.index&dashboard=pi"]').should('contain','Waiting PI Response')

        })

it('Study Report', () => {
        cy.visit(Cypress.config().devMaintBaseUrl);
       
        cy.get('input#username.long')
            .type('cdcantre').should('have.value', 'cdcantre')  
        cy.get('input#password.long')
            .type('test{Enter}')

        cy.viewport(1400, 1100) 
        cy.get('#dashboardmenu2 > dd > a').should('contain','Study Report')
            .click()
        cy.get('#editSearchCriteria99 > .searchCriteriaForm > .selectFieldDiv > .addSearchField')
        .should('contain', 'Active')
        .should('contain', 'Clinical Trial')
        .should('contain', 'Continuing Review')
        .should('contain', 'Initial Finalized')
        .should('contain', 'Renewal Finalized')
        .should('contain', 'IRB ID')
        .should('contain', 'Study Title')
        .should('contain', 'Prinicpal Investigator')
        .should('contain', 'Department')
        .should('contain', 'Study Status')
        .should('contain', 'Study Tag')
        .should('contain', 'Exempted Category')
        .should('contain', 'Expedited Category')
        .select('Active')

       // cy.get('#editSearchCriteria99 > .searchCriteriaForm > .selectFieldDiv > .addSearchField').select('Active')
        cy.get('#editSearchCriteria99 > .searchCriteriaForm > .booleanDiv > [value="1"]').click()
        cy.get('#editSearchCriteria99 > .searchCriteriaForm > .editCritButtons > .btnSubmitCrit').click()

        cy.get('.addNewCriteriaImg').click()

        cy.get('#editSearchCriteria99 > .searchCriteriaForm > .selectFieldDiv > .addSearchField').select('Prinicpal Investigator')
        cy.get('#editSearchCriteria99 > .searchCriteriaForm > .hideOperator > .selectOperatorDiv > .addSearchOperator')
        .should('contain', 'Is One Of')
        .should('contain', 'Not One Of')
        .select('Is One Of')

        cy.get('#editSearchCriteria99 > .searchCriteriaForm > .selectValuesDiv > .listValues > .lookupList').click()
        cy.get('#fName').type('Marcus')
        cy.get('#lName').type('Hannah')
        cy.get('#submitPersonnelSearch').click()
        cy.get('.personSelect').click()
        cy.get('#editSearchCriteria99 > .searchCriteriaForm > .editCritButtons > .btnSubmitCrit').click()
        cy.get('#btnSubmit').click()

        cy.get('#studyDT').should("be.visible")
        cy.get('label > select').should("be.visible")
        cy.get('.dt-button > img').should("be.visible")
        cy.get('label > input').should("be.visible")


         })

it('Submission Report', () => {
        cy.visit(Cypress.config().devMaintBaseUrl);

        cy.get('input#username.long')
                .type('cdcantre').should('have.value', 'cdcantre')  
        cy.get('input#password.long')
                .type('test{Enter}')

        cy.viewport(1400, 1100) 

        cy.get(':nth-child(9) > dd.even > a').click()
        cy.get('#editSearchCriteria99 > .searchCriteriaForm > .selectFieldDiv > .addSearchField')
        .should('contain', 'Date Accepted By IRB')
        .should('contain', 'Date Finalized')
        .should('contain', 'Prinicpal Investigator')
        .should('contain', 'Faculty Advisor')
        .should('contain', 'Department')
        .should('contain', 'IRB ID')
        .should('contain', 'Study Title')
        .should('contain', 'Submission Type')
        .should('contain', 'Department')
        .should('contain', 'Study Status')
        .should('contain', 'Study IRB')
        .should('contain', 'Study Tag')
        .should('contain', 'Exempted Category')
        .should('contain', 'Expedited Category')
        .should('contain', 'Risk')
        .select('Prinicpal Investigator')

        cy.get('#editSearchCriteria99 > .searchCriteriaForm > .hideOperator > .selectOperatorDiv > .addSearchOperator')
        .should('contain', 'Is One Of')
        .should('contain', 'Not One Of')
        .select('Is One Of')

        cy.get('#editSearchCriteria99 > .searchCriteriaForm > .selectValuesDiv > .listValues > .lookupList').click()
        cy.get('#fName').type('Marcus')
        cy.get('#lName').type('Hannah')
        cy.get('#submitPersonnelSearch').click()
        cy.get('.personSelect').click()
        cy.get('#editSearchCriteria99 > .searchCriteriaForm > .editCritButtons > .btnSubmitCrit').click()
        cy.get('#btnSubmit').click()

        cy.get('#submissionsDT').should("be.visible")
        cy.get('label > select').should("be.visible")
        cy.get('.dt-button > img').should("be.visible")
        cy.get('label > input').should("be.visible")

         
       }) 

it('Review Report', () => {
        cy.visit(Cypress.config().devMaintBaseUrl);

        cy.get('input#username.long')
                .type('cdcantre').should('have.value', 'cdcantre')  
        cy.get('input#password.long')
                .type('test{Enter}')

        cy.viewport(1400, 1100) 

        cy.get(':nth-child(10) > dd > a').click()

        cy.get('#editSearchCriteria99 > .searchCriteriaForm > .selectFieldDiv > .addSearchField')
        .should('contain', 'Date Accepted By IRB')
        .should('contain', 'Date Finalized')
        .should('contain', 'Prinicpal Investigator')
        .should('contain', 'Faculty Advisor')
        .should('contain', 'Department')
        .should('contain', 'IRB ID')
        .should('contain', 'Study Title')
        .should('contain', 'Submission Type')
        .should('contain', 'Department')
        .should('contain', 'Study Status')
        .should('contain', 'Study IRB')
        .should('contain', 'Study Tag')
        .should('contain', 'Exempted Category')
        .should('contain', 'Expedited Category')
        .should('contain', 'Risk')
        .select('Prinicpal Investigator')

        cy.get('#editSearchCriteria99 > .searchCriteriaForm > .hideOperator > .selectOperatorDiv > .addSearchOperator')
        .should('contain', 'Is One Of')
        .should('contain', 'Not One Of')
        .select('Is One Of')

        cy.get('#editSearchCriteria99 > .searchCriteriaForm > .selectValuesDiv > .listValues > .lookupList').click()
        cy.get('#fName').type('Marcus')
        cy.get('#lName').type('Hannah')
        cy.get('#submitPersonnelSearch').click()
        cy.get('.personSelect').click()
        cy.get('#editSearchCriteria99 > .searchCriteriaForm > .editCritButtons > .btnSubmitCrit').click()
        cy.get('#btnSubmit').click()

        cy.get('.addNewCriteriaImg').click()
        cy.get('#editSearchCriteria99 > .searchCriteriaForm > .selectFieldDiv > .addSearchField')
        .select('Review Type')
        cy.get('#editSearchCriteria99 > .searchCriteriaForm > .hideOperator > .selectOperatorDiv > .addSearchOperator')
        .select('Is One Of')
        cy.get('#editSearchCriteria99 > .searchCriteriaForm > .selectValuesDiv > .listValues > .lookupList').click()
        cy.get(':nth-child(2) > [align="center"] > input').click()
        cy.get('.subTypeSelectCheckbox').click()

        cy.get('#editSearchCriteria99 > .searchCriteriaForm > .editCritButtons > .btnSubmitCrit').click()

        cy.get('#btnSubmit').click()

     })
  }) 