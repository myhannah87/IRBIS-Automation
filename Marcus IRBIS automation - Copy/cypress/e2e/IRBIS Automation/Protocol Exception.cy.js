describe('Protocol Exception',  () => {
   it('Create Protocol Exception', () => {
        //cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm');
        //cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm?event=home.dashboard.irbStudyManagement&irb_id=22-2824');
        cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm?event=home.protocolException&id=383757');
        cy.get('input#username.long')
          .type('mchopra').should('have.value', 'mchopra')  
        cy.get('input#password.long')
          .type('test{Enter}')
       
        cy.viewport(1300, 750)
        
        /*
        cy.get('#dashboardmenu4 > :nth-child(4) > a').should('contain', 'Modification').click()
        cy.get('input[placeholder="IRB Number"]')
       .type('22-2824')
        cy.get(':nth-child(1) > .sorting_1 > .oneClickOnly').click()
        */
        
        /*
        cy.get('#protocolExceptionSelector').should("be.visible")
        cy.get('#protocolExceptionSelector > .updateCardText > div').should('contain', 'Protocol Exception').click()
        cy.get(':nth-child(1) > .selectCardTitle').should('contain', 'Protocol Exception')
        cy.get(':nth-child(1) > .selectCardDescription').should('contain', 'Request a protocol exception to allow the enrollment of a single participant who does not meet eligibility')
        cy.get(':nth-child(2) > .selectCardTitle').should('contain', 'Continuation')
        cy.get('#protocolException > :nth-child(2) > :nth-child(2)').should('contain', 'Request to continue of some or all research activities with currently enrolled') 
        cy.get('em').should('contain', 'Note: The continuation of study activities must be well justified to be in the best interest of the participant, and relate to the safety of the participant. Enrollment of new subjects is not permitted under this exception.')
        cy.get('#chooseProtocolException').should("be.visible")
        cy.get('#chooseProtocolException').should("be.visible").click()
       
        //ITEM LIST
        cy.get('#itemListContainer').should("be.visible")
        cy.get('#itemListHeader > :nth-child(2)').should('contain', 'Item List')
        cy.get('.subHeader').should('contain', 'Protocol Exception')
        cy.get('#navViewForm > :nth-child(2)').should('contain', 'View Form')
        cy.get('#navSaveForm > :nth-child(2)').should('contain', 'Save Form')
        cy.get('#navSubmitToRouting > :nth-child(2)').should('contain', 'Submit Exception')
        cy.get('#navPICert > :nth-child(2)').should('contain', 'PI Certification')
        cy.get('#navDownloadPDF > :nth-child(2)').should('contain', 'Download PDF')
        //View history modal
        cy.get('#navViewHistory > :nth-child(2)').should('contain', 'View History').click()    
        cy.get('.ui-dialog').should("be.visible")
        cy.get('b.copy').should('contain', 'Exception created')
        cy.get('[style="padding-bottom:10px;"] > div.copy').should("be.visible")
        cy.get('.ui-icon').click()
        cy.get('#navDeleteException > :nth-child(2)').should('contain', 'Delete Exception')

        //PROTOCOL EXCEPTION REQUEST HEADER - STUDY DATA
        cy.get('#protocolExceptionInfo > .pageHeaderTitle').should('contain', 'UNC IRB Protocol Exception Request')
        cy.get('[width="14%"]').should('contain', 'IRB Number:')
        cy.get('#goToStudyManagement > a').should('contain', '22-2824')
        cy.get('tbody > :nth-child(1) > :nth-child(3)').should('contain', 'Study Status')
        cy.get('tbody > :nth-child(1) > :nth-child(4)').should('contain', 'Approved')
        cy.get('tbody > :nth-child(1) > :nth-child(5)').should("be.visible")
        cy.get('tbody > :nth-child(2) > :nth-child(1)').should('contain', 'PI:')
        cy.get('#openPIWindow').should("be.visible")
        cy.get('tbody > :nth-child(2) > :nth-child(3)').should('contain', 'IRB:')
        cy.get('tbody > :nth-child(2) > :nth-child(4)').should('contain', 'Biomedical')
        cy.get(':nth-child(3) > .label').should("be.visible")
        cy.get(':nth-child(4) > .label').should('contain', 'Study Title:')
        cy.get(':nth-child(4) > .copy').should('contain', 'Retrospective review of patients switched from plasma exchange therapy to efgartigimod treatment')

        //PROTOCOL EXCPETION FORM
        cy.get('#protocolExceptionForm > .pageHeaderTitle').should('contain', 'Protocol Exception')
        cy.get('.introText').should("be.visible")
        cy.get('.introText > :nth-child(1)').should('contain', 'This protocol exception request applies to a single individual.')
        cy.get('.introText > :nth-child(2)').should('contain', 'Approval is required prior to implementing the request.')
       
        //question 1
        cy.get('#questionList > :nth-child(1) > :nth-child(2) > div').should('contain', 'Participant Study Identification Code (Study ID) – Do not provide any direct subject identifiers. Instead, use a code identifier such as the one used in the study records.')
        cy.get('#participant_study_id').type('My Participant Study Identification Code (Study ID).')
      
        //question 2
        cy.get('#questionList > :nth-child(2) > :nth-child(2) > div').should('contain', 'Provide a description and rationale for the request.')
        cy.get('#description').type('My description and rationale for the request.')
      
        //question 3
        cy.get('#questionList > :nth-child(3) > :nth-child(2)').should('contain', 'Does the protocol exception pose new risks not currently listed in the consent form, increase the likelihood or severity of experiencing known risks, or otherwise affect the safety of the participant?')
        cy.get('#new_risks_no').should("be.visible")
        cy.get('#new_risks_yes').should("be.visible").click()
        cy.get('#new_risks_justification').type('My justification regarding the response.')
       
        //question 4
        cy.get('#questionList > :nth-child(4) > :nth-child(2)').should('contain', 'Does the protocol exception require a different informed consent form or process than the one currently approved by the IRB?')
        cy.get('#different_informed_consent_no').should("be.visible").click()
        cy.get(':nth-child(4) > :nth-child(2) > .showHide').should("not.be.visible")
        cy.get('#explain_consent_process').should("not.be.visible")
        cy.get('#different_informed_consent_yes').should("be.visible").click()
        cy.get(':nth-child(4) > :nth-child(2) > .showHide').should('contain', 'Explain the consenting process you will use in relation to this protocol exception and if applicable, attach any proposed addendum to the informed consent that will be used.')
        cy.get('#explain_consent_process').type('My explanation of the consenting process I will use in relation to this protocol exception and if applicable.')

        //question 5
        cy.get('#questionList > :nth-child(5) > :nth-child(2)').should('contain', 'Does the protocol exception affect the integrity of the study data?')
        cy.get('#integrity_affected_no').should("be.visible")
        cy.get('#integrity_affected_yes').should("be.visible").click()
        cy.get('#integrity_affected_justification').type('My justification regarding your response.')

        //question 6
        cy.get('#questionList > :nth-child(6) > :nth-child(2)').should('contain', 'Will data collected as a result of the exception be analyzed in a different manner from other collected data?')
        cy.get('#data_analyzed_different_no').should("be.visible").click()
        cy.get(':nth-child(6) > :nth-child(2) > .showHide').should("not.be.visible")
        cy.get('#data_analyzed_different_description').should("not.be.visible")
        cy.get('#data_analyzed_different_yes').should("be.visible").click()
        cy.get(':nth-child(6) > :nth-child(2) > .showHide').should("be.visible")
        cy.get('#data_analyzed_different_description').type('My explanation of how it will be analyzed differently.')

        //question 7
        cy.get(':nth-child(7) > :nth-child(2)').should('contain', 'Have you previously requested this exception for this same reason?')
        cy.get('#previously_requested_no').should("be.visible").click()
        cy.get(':nth-child(7) > :nth-child(2) > .showHide').should("not.be.visible")
        cy.get('#previously_requested_description').should("not.be.visible")
        cy.get('#previously_requested_yes').should("be.visible").click()
        cy.get(':nth-child(7) > :nth-child(2) > .showHide').should("be.visible")
        cy.get('#previously_requested_description').type('My explanation of if a previous exception was requested for the same reason.')
*/

        //question 8
        cy.get(':nth-child(8) > :nth-child(2)').should('contain', 'Is this study externally sponsored?')
        cy.get('#externally_sponsored_no').click()
        cy.get(':nth-child(8) > :nth-child(2) > .showHide').should("not.be.visible")
        cy.get('#documentationContainer').should("not.be.visible")
        cy.get('#externally_sponsored_yes').click()
        cy.get('#external_organization_FDA').should("be.visible").click()
        cy.get('#external_organization_NIH').should("be.visible")
        cy.get('#external_organization_Industry_Sponsor').should("be.visible")
        cy.get('#external_organization_Other').should("be.visible")
        // Need to eventually incorporate triggered textarea here.
        cy.get('#external_organization_NA').should("be.visible")
        
        cy.get('th').should('contain', 'Documentation')
        cy.get('em').should('contain', 'No Documentation Provided')
        cy.get('#btnAddDocs').click()
        //cy.get('input[type=file]').selectFile('cypress/fixtures/example.json')

       // cy.get('#btnAddDocs').attachFile('myfixture.json');
       
        /*
        //question 9
        cy.get(':nth-child(9) > :nth-child(2)').should('contain', 'For participants not meeting inclusion/exclusion criteria')
        cy.get('#endorsement_uploaded_yes').click()
        cy.get(':nth-child(9) > :nth-child(2) > .showHide').should("not.be.visible")
        cy.get('#na_endorsement_explanation').should("not.be.visible")
        cy.get('#endorsement_uploaded_NA').click()
        cy.get('#na_endorsement_explanation').type('My provided explanation as to why a written endorsement been uploaded as an attachment')

        
        cy.get('#btnSave')
        cy.get('#btnSubmit')
*/









           
  })
})
