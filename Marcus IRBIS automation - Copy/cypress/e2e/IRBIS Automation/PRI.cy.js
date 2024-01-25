    describe('NHSR',  () => {
       it('Create PRI Application', () => {
        cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm?event=home.dashboard.irbstudymanagement&irb_id=06-0006');
        cy.get('input#username.long')
          .type('mhannah1').should('have.value', 'mhannah1')  
         //.type('cjfennim').should('have.value', 'cjfennim') 
        cy.get('input#password.long')
          .type('test{Enter}')
       
        cy.viewport(1300, 750)
        cy.get('#lnkSubmitUPAE > .copybold').should('contain', 'Submit Promptly Reportable Information').click()

        // Brief Description of Promptly Reportable Information Screen
        cy.get('#divNSIHeader > .hd').should("be.visible")
        cy.get('[href="https://policies.unc.edu/TDClient/2833/Portal/KB/ArticleDet?ID=132230"]').should('contain', 'SOP 1401')

        cy.get(':nth-child(1) > tbody > :nth-child(1) > [width="14%"]').should('contain', 'IRB Number:')
        cy.get('.classToLoad').should('contain', '06-0006')

        cy.get('.bd > :nth-child(1) > tbody > :nth-child(2) > :nth-child(1)').should('contain', 'PI:')
        cy.get('tbody > :nth-child(2) > :nth-child(2) > a').should('contain', 'Stephenson, John')

        cy.get(':nth-child(3) > .label').should('contain', 'Sponsor:')
        cy.get('.bd > :nth-child(1) > tbody > :nth-child(3) > .copy').should('contain', 'Cancer Research Institute')

        cy.get(':nth-child(4) > .label').should('contain', 'Study Title:')
        cy.get('.tablemainsub-allborders > tbody > :nth-child(4) > .copy').should('contain', 'Shock Treatment')

        cy.get('.bd > :nth-child(1) > tbody > :nth-child(1) > :nth-child(3)').should('contain', 'Study Status:')
        cy.get('.bd > :nth-child(1) > tbody > :nth-child(1) > :nth-child(4)').should('contain', 'Approved')

        cy.get('.bd > :nth-child(1) > tbody > :nth-child(2) > :nth-child(3)').should('contain', 'IRB:')
        cy.get('.bd > :nth-child(1) > tbody > :nth-child(2) > :nth-child(4)').should('contain', 'Non-Biomedical')

        cy.get(':nth-child(1) > tbody > :nth-child(1) > :nth-child(5)').should("be.visible") //expiration date
/*
       cy.get('[style="margin-top: 20px;"] > tbody > :nth-child(1) > [width="14%"]').should('contain', 'Reference Id:')
       cy.get('[style="margin-top: 20px;"] > tbody > :nth-child(1) > :nth-child(2) > a').should("be.visible") //Actual reference id link

        cy.get(':nth-child(2) > [width="14%"]').should('contain', 'Date Submitted:')
        cy.get('[style="margin-top: 20px;"] > tbody > :nth-child(2) > :nth-child(2)').should('contain', 'Not Submitted')

        cy.get('[style="margin-top: 20px;"] > tbody > :nth-child(1) > :nth-child(3)').should('contain', 'PRI Status:')
        cy.get('[style="margin-top: 20px;"] > tbody > :nth-child(1) > :nth-child(4)').should('contain', 'In Draft')

        cy.get('[style="margin-top: 20px;"] > tbody > :nth-child(2) > :nth-child(3)').should('contain', 'Date PI Certified:')
        cy.get('[style="margin-top: 20px;"] > tbody > :nth-child(2) > :nth-child(4)').should('contain', 'Not Certified')

        cy.get('[style="margin-top: 20px;"] > tbody > :nth-child(1) > :nth-child(5)').should('contain', 'Reportable:')
        cy.get('[style="margin-top: 20px;"] > tbody > :nth-child(1) > :nth-child(6)').should('contain', 'No')
 */       


        cy.get('[style="margin-left: 10px; margin-bottom: 10px;"]').should('contain', 'IRBIS has not been assessed for storing personally identifiable information or PHI')

        cy.get('#divNSIForm1 > .hd').should('contain', 'Brief Description of Promptly Reportable Information')
        cy.get('.copyboldred').should('contain', 'The brief description is limited to 200 characters.')
        cy.get(':nth-child(2) > .textbox-longest2').type ('Marcus Cypress PRI test')

        cy.get('[align="left"] > :nth-child(2) > .copy').should("be.visible")
        cy.get(':nth-child(2) > .copyred').should("be.visible")
        cy.get('[style="padding:10px 0px 0px 25px; margin-top: 10px;"] > .textbox-longest2').should("be.visible")
        cy.get('[style="padding:10px 0px 0px 25px; margin-top: 10px;"] > .copyred').should("be.visible")

        //Investigator's Brochure (IB) Update
        cy.get('#divNSIForm1b > .hd').should('contain', 'Brochure (IB) Update')
        cy.get('#A00').should('contain', 'Is this submission regarding an Investigator')
       //Question A00 Verification
        cy.get('[data-idtohide="A01,A02,A03,A04,APrompt"]').click()  //No
        cy.get('#A01').should('not.be.visible')
        cy.get('#A02').should('not.be.visible')
        cy.get('#A03').should('not.be.visible')
        cy.get('#A04').should('not.be.visible')
        cy.get('#APrompt').should('not.be.visible')

        cy.get('[data-idtoshow="A01,A02,A03,A04,APrompt"]').click()//Yes
        cy.get('#A01 > #QA0Chk > [value="1"]').click()
        cy.get('#A02 > .copy').type('My PRI answer to Question 3')
        cy.get('#A03 > #QA0Chk > [value="1"]').click()
        cy.get('#A04').should("be.visible")
        cy.get('#A04 > .copy').type('My PRI answer to Question 5')
        cy.get('#APrompt').should('contain', 'Please create a modification linked to this PRI')

        cy.get('[style="text-align: center; padding:10px;margin-top: 10px;"] > .copy').click()

        //Form 2 - Exapnded Header Verification:
        cy.get('[style="margin-top: 20px;"] > tbody > :nth-child(1) > [width="14%"]').should('contain', 'Reference Id:')
        cy.get('[style="margin-top: 20px;"] > tbody > :nth-child(1) > :nth-child(2) > a').should("be.visible") //Actual reference id link

        cy.get(':nth-child(2) > [width="14%"]').should('contain', 'Date Submitted:')
        cy.get('[style="margin-top: 20px;"] > tbody > :nth-child(2) > :nth-child(2)').should('contain', 'Not Submitted')

        cy.get('[style="margin-top: 20px;"] > tbody > :nth-child(1) > :nth-child(3)').should('contain', 'PRI Status:')
        cy.get('[style="margin-top: 20px;"] > tbody > :nth-child(1) > :nth-child(4)').should('contain', 'In Draft')

        cy.get('[style="margin-top: 20px;"] > tbody > :nth-child(2) > :nth-child(3)').should('contain', 'Date PI Certified:')
        cy.get('[style="margin-top: 20px;"] > tbody > :nth-child(2) > :nth-child(4)').should('contain', 'Not Certified')

        cy.get('[style="margin-top: 20px;"] > tbody > :nth-child(1) > :nth-child(5)').should('contain', 'Reportable:')
        cy.get('[style="margin-top: 20px;"] > tbody > :nth-child(1) > :nth-child(6)').should('contain', 'No')
        
        //Part A: Does This PRI Need to be Reported   
        cy.get('.copyred').should('contain', 'IRBIS has not been assessed for storing personally identifiable information or PHI')
       
        cy.get('[data-idtoshow="Q1B"]').click()
        cy.get('#Q1B').should("be.visible")
        cy.get('#Q2').should('not.be.visible')

        cy.get('#Q1BChk > .isReportable').click()
        cy.get('#COMMENTC > .copyboldred').should('contain', 'Based on your responses, you are required to submit this Promptly Reportable Information to the IRB. Click Submit to proceed.')

        cy.get('#Q1BChk > [value="0"]').click()
        cy.get('#COMMENTA > .copyboldred').should('contain', 'Based on your response, this event is not required to be reported to this IRB.')

        cy.get('[data-idtoshow="Q2,Q1A"]').click()
        cy.get('#Q1B').should('not.be.visible')
        cy.get('#Q2').should("be.visible")
        
        cy.get('#Q2Chk > [value="1"]').click()
        cy.get('#Q2Text > .copy').type('My explanation for question A2')

        cy.get('#Q3Chk > [value="0"]').click()
        cy.get('#COMMENTB').should('contain', 'Based on your response this event is not required to be reported to the IRB.')

        cy.get('#Q3Chk > .isReportable').click()
        cy.get('#Q3Text > .copy').type('My explanation for question A3')

        cy.get('#Q4').should("be.visible")
        cy.get(':nth-child(1) > .copybold').should('contain', 'Economic:')
        cy.get(':nth-child(2) > .copybold').should('contain', 'Legal:')
        cy.get(':nth-child(3) > .copybold').should('contain', 'Physical:')
        cy.get(':nth-child(4) > .copybold').should('contain', 'Psychological:')
        cy.get(':nth-child(5) > .copybold').should('contain', 'Social:')

        cy.get('#Economic').click()
        cy.get('#Legal3').click()
        cy.get('#Physical2').click()
        cy.get('#Psychological3').click()
        cy.get('#Social').click()

        cy.get('#ExplanationText').should('contain', 'Please explain all responses.')
        cy.get('#ExplanationHouse > .requiredAnswer').type('My explanation of my responses from A4')

        cy.get('#Q6').should('contain', 'A5) Does the event involve a potential')
        cy.get('#Q6Chk > [value="0"]').click()

        cy.get('#Q7').should('contain', 'A6) Has this event or issue been identified as noncompliance previously ')
        cy.get('#Q7Chk > [value="1"]').click()
        cy.get('#Q7Text').should('contain', 'If Yes, please explain and submit (or attach) relevant documentation to the PRI report.')
        cy.get('#Q7Text > .copy').type('My Explanation for A6')

        cy.get('#Q8').should('contain', 'A7) In review of the study’s deviation log, are there any similar issues or events?')
        cy.get('#Q8Chk > [value="1"]').click()
        cy.get('#Q8Text').should('contain', 'If yes, please explain.')
        cy.get('#Q8Text > .copy').type('My Explanation for A7')

        cy.get('#Q9').should('contain', 'A8) Is this submission regarding other Promptly Reportable Information as outlined in Table 1 and Table 2 of SOP 1401?')
        cy.get('#Q9Chk > [value="1"]').click()
        cy.get('#Q9Text').should('contain', '1. Please describe what is being reported and ensure all attachments are included.')
        cy.get('#Q9Text > .copy').type('My Explanation for A8')
        cy.get(':nth-child(5) > [value="1"]').click()
        cy.get('#Q9ChangesPrompt').should('contain', 'Please create a modification linked to this PRI and include the relevant material (e.g., protocol and consent).')
        cy.get(':nth-child(9) > [value="1"]').click()
        cy.get('#A9INDConfirmChk > [value="0"]').click()

        cy.get('#FRMPOST > .copy').click()
        cy.get('#COMMENTC > .copyboldred').should('contain', 'Based on your responses, you are required to submit this Promptly Reportable Information to the IRB. Click Submit to proceed.')

        cy.get('#FRMPOST2 > .copy').click()
    
        //PART B: INFORMATION ABOUT THE EVENT
        cy.get('div.tablemainsub-allborders > .tablemainsub-allborders > tbody > :nth-child(1) > .label').should('contain', 'B1) Date of Event:')
        cy.get('#EventDate').type('1/1/2024', { force: true })
        cy.get('div.tablemainsub-allborders > .tablemainsub-allborders > tbody > :nth-child(2) > .label').should('contain', 'B2) Location of Event')
        cy.get('.textbox-longer').type('Chapel Hill')
        cy.get('td.copy > .label').should('contain', 'B3) Full Description of Event.')
        cy.get('td.copy > .copy').type('My Cypress PRI test description')



        //PART C: WAS THIS A SERIOUS ADVERSE EVENT?



















        




       })
    }) 