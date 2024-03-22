describe('Exempt - Modification',  () => {
   it('Create Modification', () => {
        cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm');
        cy.get('input#username.long')
          .type('khwhite').should('have.value', 'khwhite')  
        cy.get('input#password.long')
          .type('test{Enter}')
       
        cy.viewport(1300, 750)

        cy.get('#dashboardmenu4 > :nth-child(4) > a').should('contain', 'Modification').click()
        cy.get('input[placeholder="IRB Number"]')
       .type('22-2442')
        cy.get(':nth-child(1) > .sorting_1 > .oneClickOnly').click()
        
        cy.get('#pmSelector > .updateCardText').click()
        cy.get('.hdWizard').should('contain', 'Create a Modification')

        cy.get('#wizard17 > .wizardType').should('contain', 'Modify Study and Personnel')
        cy.get('#wizard15 > .wizardType').should('contain', 'Personnel Only Modification')
        cy.get('#wizard16 > .wizardType').should('contain', 'Study Only Modification')

        //cy.get('#wizard16 > .btn-primary').click()
       
  })
})