describe('Exempt - Modification',  () => {
   it('Create Modification', () => {
        cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm');
        cy.get('input#username.long')
          .type('khwhite').should('have.value', 'khwhite')  
        cy.get('input#password.long')
          .type('test{Enter}')
       
        cy.viewport(1300, 750)

        cy.get('#pmSelector > .updateCardText').click()
       
  })
})