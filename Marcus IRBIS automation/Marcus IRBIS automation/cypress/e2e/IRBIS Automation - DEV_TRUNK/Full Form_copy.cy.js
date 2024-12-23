describe('Create Full Form Study Application',  () => {
  it('Create Full Form', () => {
     //cy.visit('https://orisdev.research.unc.edu/irb/index.cfm');
     cy.visit('https://orisdev.research.unc.edu/irb/eform_screens.cfm?MasterId=439927&ScreenId=2');
    
     cy.get('input#username.long')
         .type('mhannah1').should('have.value', 'mhannah1')  
     cy.get('input#password.long')
         .type('test{Enter}')

         
    // cy.get('#nav > :nth-child(2) > a').click()
    // cy.get('#dashboard').should("be.visible")
    // cy.get('[style="padding: 10px 10px 5px 10px;"]').should("be.visible")
    // cy.get(':nth-child(2) > .wizardLinks1').click()
    // cy.get('#wizard5').should("be.visible")
    // cy.get('#btn5').click()
    // cy.wait(15000)


//1. GENERAL INFORMATION SCREEN

    // cy.get('#q_29_3').should("be.visible")
    //   .type('My Full Form Cypress Test')

    // cy.get('#cke_q_29_554').should("be.visible")
    //   .type('My Full Form Cypress Test')

    // cy.get('[qid="q_1855"] > td.copy').should("be.visible")
    // cy.get('[inputvalue="0"] > #q_29_1855').click()
    // cy.get('[name="submit0"]').should("be.visible")
    // cy.get('[name="submit1"]').should("be.visible")
    // cy.get('[name="submit1"]').click()


//2. PROJECT PERSONNEL SCREEN

    //PROJECT PERSONNEL WIZARD MODAL (SEARCH PESRONNEL BY RAMSES NUMBER)
    // cy.get('#modalPopup').should("be.visible")
    // cy.get('#first_name').should("be.visible")
    // cy.get('#last_name').should("be.visible")
    // cy.get('#pid').should("be.visible")
    // cy.get(':nth-child(3) > .tablemainsub > tbody > [align="center"] > .copy > .seachSubmit').should("be.visible")
    // cy.get(':nth-child(3) > .tablemainsub > tbody > [align="center"] > .copy > .button').should("be.visible")
    // cy.get('#ramses_number').should("be.visible")
    // cy.get(':nth-child(4) > .tablemainsub > tbody > [align="center"] > .copy > .seachSubmit').should("be.visible")
    // cy.get(':nth-child(4) > .tablemainsub > tbody > [align="center"] > .copy > .seachSubmit').should("be.visible")
    // //cy.get('[style="width: 100%; text-align: center; margin-top: 10px;"] > .button').click()
    // cy.get('#first_name').type('Chuck')
    // cy.get('#last_name').type('Fennimore')
    // cy.get(':nth-child(3) > .tablemainsub > tbody > [align="center"] > .copy > .seachSubmit').click()
    // cy.get('#modalPopup').should("be.visible")
    // cy.get('[width="40%"] > a').click()
    // cy.get('.sorting_asc > .DataTables_sort_wrapper').should("be.visible")
    // cy.get('[aria-label="Sponsor: activate to sort column ascending"] > .DataTables_sort_wrapper').should("be.visible")
    // cy.get('[aria-label="Title: activate to sort column ascending"] > .DataTables_sort_wrapper').should("be.visible")
    // cy.get(':nth-child(1) > .sorting_1 > .copy').click()
    // cy.get('#modalPopup').should("be.visible")
    // cy.get('[action="/irb/index.cfm?event=eform.projectPersonnel.importProjectPersonnel"]').should("be.visible")
    // cy.get('.divImportButtons > .button').should("be.visible")
    // cy.get('#btnSubmitR').should("be.visible")
    // cy.get(':nth-child(7) > tbody > .odd > [width="4%"] > input').click()
    // cy.get('.importSubmit').click()
    // //MAKE CHUCK PI / VERIFY PERSONNEL POP UP
    // cy.get('[qid="h_1895"] > [width="99%"]').should("be.visible")
    // cy.get('[inputvalue="1"] > #q_2_1895').should("be.visible")
    // cy.get('[inputvalue="0"] > #q_2_1895').click()
    // cy.get('[qid="h_4"] > [width="99%"]').should("be.visible")
    // cy.get(':nth-child(3) > :nth-child(6) > a').click()
    // cy.get('[qid="q_11"] > .copy > #q_2_11').type('123456789')
    // cy.get('[qid="q_15"] > td.copy > [inputvalue="Principal Investigator"] > #q_2_15').click()
    // cy.get('[inputvalue="Faculty Advisor"]').should("be.visible")
    // cy.get('[inputvalue="Co-investigator"]').should("be.visible")
    // cy.get('[inputvalue="Study Coordinator"]').should("be.visible")
    // cy.get('[inputvalue="Research Assistant"]').should("be.visible")
    // cy.get('[inputvalue="Regulatory Associate"]').should("be.visible")
    // cy.get('[inputvalue="External Site PI"]').should("be.visible")
    // cy.get('[inputvalue="Other"]').should("be.visible")
    // //cy.get('#q_2_1276').should("be.visible")
    // cy.get('[qid="q_550"] > td.copy > .label').should("be.visible")
    // cy.get('[qid="q_550"] > td.copy > [inputvalue="1"] > #q_2_550').should("be.visible")
    // cy.get('[qid="q_550"] > td.copy > [inputvalue="0"]').should("be.visible")
    // cy.get('form > #tbl_2_4 > tbody > :nth-child(14) > .copy > [type="button"]').should("be.visible")
    // cy.get('form > #tbl_2_4 > tbody > :nth-child(14) > .copy > [type="submit"]').click()
    // cy.get('.liaisonValues').click()
    // cy.get('#q_2_31').should("be.visible")
    // cy.get('[name="submit0"]').should("be.visible")
    // cy.get('[name="submit1"]').click()


    
    cy.viewport(1200, 612) 

    cy.contains('Click here to add personnel').click()

    cy.get('[qid="q_7"] > .label').should("be.visible")

    cy.wait(2000)


    cy.url().as("reviewWindow");

    // Get window object
     cy.window().then((win) => {
             // Replace window.open(url, target)-function with our own arrow function
     cy.stub(win, 'open', url => 
             {
             // change window location to be same as the popup url
     win.location.href = Cypress.config().baseUrl + url;
             }).as("popup") // alias it with popup, so we can refer it with @popup
             })

    cy.get('[qid="q_7"] > .label > a > img').click()

    cy.get('#first_name').type('Jeff')
    cy.get('#last_name').type('hartman')
    cy.get('[name="submit"]').click()

    cy.pause()

    cy.contains('Hartman, Jeff ').click()
    
    cy.get("@reviewWindow").then((url) => {
      cy.visit(url)
      })
    
    cy.contains('Click here to add personnel').click()


    })
  })

     
      
    
    

                              
                              