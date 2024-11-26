describe('JIT/118', () => {
    it('Create JIT/118', () => {
   //   beforeEach (() => {
       cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm');
       cy.get('input#username.long')
           .type('mhannah1').should('have.value', 'mhannah1')  
       cy.get('input#password.long')
           .type('test{Enter}')
           
         cy.get('#nav > :nth-child(2) > a').click()
         cy.get('#dashboard').should("be.visible")
         cy.get('[style="padding: 10px 10px 5px 10px;"]').should("be.visible")
         cy.get(':nth-child(2) > .wizardLinks1').click()
         cy.get('#wizard6').should("be.visible")
         cy.get('#btn6').click()
         cy.wait(15000)

        

 //JIT/118
        cy.get('[qid="h_2256"] > [width="99%"]').should("be.visible")
        cy.get('[qid="q_2257"] > td.copy > [style="position: relative; display: block;"] > div > .copy').click()
        cy.get('[qid="q_2258"] > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy').click()
        cy.get('#att_2258_1').should("be.visible")
        cy.get('[name="submit1"]').click()



         
 //1. GENERAL INFORMATION SCREEN
 
        cy.get('#q_29_3').should("be.visible")
         .type('My JIT/118 Cypress Test')//.should('have.value', 'My JIT Regression Test') 
        cy.get('.cke_wysiwyg_frame').then(function($iframe) {
            const $body = $iframe.contents().find("body");
            console.log($body);
            cy.wrap($body[0]).type("My JIT/118 CYPRESS TEST"); 
         cy.get('[name="submit0"]').should("be.visible")
         cy.get('[name="submit1"]').should("be.visible")
         cy.get('[name="submit1"]').click()
 
 //2. PROJECT PERSONNEL SCREEN
          //PROJECT PERSONNEL WIZARD MODAL (SEARCH PESRONNEL BY RAMSES NUMBER)
         cy.get('#modalPopup').should("be.visible")
         cy.get('#first_name').should("be.visible")
         cy.get('#last_name').should("be.visible")
         cy.get('#pid').should("be.visible")
         cy.get(':nth-child(3) > .tablemainsub > tbody > [align="center"] > .copy > .seachSubmit').should("be.visible")
         cy.get(':nth-child(3) > .tablemainsub > tbody > [align="center"] > .copy > .button').should("be.visible")
         cy.get('#ramses_number').should("be.visible")
         cy.get(':nth-child(4) > .tablemainsub > tbody > [align="center"] > .copy > .seachSubmit').should("be.visible")
         cy.get(':nth-child(4) > .tablemainsub > tbody > [align="center"] > .copy > .seachSubmit').should("be.visible")
         //cy.get('[style="width: 100%; text-align: center; margin-top: 10px;"] > .button').click()
         cy.get('#first_name').type('Chuck')
         cy.get('#last_name').type('Fennimore')
         cy.get(':nth-child(3) > .tablemainsub > tbody > [align="center"] > .copy > .seachSubmit').click()
         cy.get('#modalPopup').should("be.visible")
         cy.get('[width="40%"] > a').click()
         cy.get('.sorting_asc > .DataTables_sort_wrapper').should("be.visible")
         cy.get('[aria-label="Sponsor: activate to sort column ascending"] > .DataTables_sort_wrapper').should("be.visible")
         cy.get('[aria-label="Title: activate to sort column ascending"] > .DataTables_sort_wrapper').should("be.visible")
         cy.get(':nth-child(1) > .sorting_1 > .copy').click()
         cy.get('#modalPopup').should("be.visible")
         cy.get('[action="/irb_maint/index.cfm?event=eform.projectPersonnel.importProjectPersonnel"]').should("be.visible")
         cy.get('.divImportButtons > .button').should("be.visible")
         cy.get('#btnSubmitR').should("be.visible")
         cy.get(':nth-child(7) > tbody > .odd > [width="4%"] > input').click()
         cy.get('.importSubmit').click()
         //MAKE CHUCK PI / VERIFY PERSONNEL POP UP
         cy.get('[qid="h_1895"] > [width="99%"]').should("be.visible")
         cy.get('[inputvalue="1"] > #q_2_1895').should("be.visible")
         cy.get('[inputvalue="0"] > #q_2_1895').click()
         cy.get('[qid="h_4"] > [width="99%"]').should("be.visible")
         cy.get(':nth-child(3) > :nth-child(6) > a').click()
         cy.get('[qid="q_11"] > .copy > #q_2_11').type('123456789')
         cy.get('[qid="q_15"] > td.copy > [inputvalue="Principal Investigator"] > #q_2_15').click()
         cy.get('[inputvalue="Faculty Advisor"]').should("be.visible")
         cy.get('[inputvalue="Co-investigator"]').should("be.visible")
         cy.get('[inputvalue="Study Coordinator"]').should("be.visible")
         cy.get('[inputvalue="Research Assistant"]').should("be.visible")
         cy.get('[inputvalue="Regulatory Associate"]').should("be.visible")
         cy.get('[inputvalue="External Site PI"]').should("be.visible")
         cy.get('[inputvalue="Other"]').should("be.visible")
         //cy.get('#q_2_1276').should("be.visible")
         cy.get('[qid="q_550"] > td.copy > .label').should("be.visible")
         cy.get('[qid="q_550"] > td.copy > [inputvalue="1"] > #q_2_550').should("be.visible")
         cy.get('[qid="q_550"] > td.copy > [inputvalue="0"]').should("be.visible")
         cy.get('form > #tbl_2_4 > tbody > :nth-child(14) > .copy > [type="button"]').should("be.visible")
         cy.get('form > #tbl_2_4 > tbody > :nth-child(14) > .copy > [type="submit"]').click()
         cy.get('.liaisonValues').click()
         cy.get('#q_2_31').should("be.visible")
         cy.get('[name="submit0"]').should("be.visible")
         cy.get('[name="submit1"]').click()
 
 
 //3.FUNDING SOURCES
        cy.get('#hd_0\\|\\| > [width="99%"]').should("be.visible")
        cy.get('#tr_0\\|\\|0 > .copy').should("be.visible")
        cy.get('[qid="h_2045"] > [width="99%"]').should("be.visible")
        cy.get('[qid="q_2045"] > .copy').should("be.visible")
        cy.get('[qid="h_533"] > [width="99%"]').should("be.visible")
        cy.get('.odd > :nth-child(7) > a').click()
        cy.get('[qid="q_1204"] > .copy > #q_98_1204')
        .select('Federal')
        cy.get('form > #tbl_98_533 > tbody > :nth-child(7) > .copy > [type="submit"]').click()
        cy.get('[name="submit1"]').click()


//ATTACHMENTS
        cy.get('[style="margin-top: 10px; padding: 10px;"] > .tablemainsub > :nth-child(1) > :nth-child(1) > :nth-child(1) > table > tbody > tr > .copybold').should("be.visible")  
        cy.get('#docs > .tablemainsub > :nth-child(1) > :nth-child(1) > :nth-child(1) > table > tbody > tr > .copybold').should("be.visible")  
        cy.get('[style=" padding: 10px;"] > .tablemainsub > :nth-child(1) > :nth-child(1) > :nth-child(1) > table > tbody > tr > .copybold').should("be.visible") 
            //SUBMIT
        cy.get('.buttonEformYellow').click()
        cy.get('#modalPopup').should("be.visible") 
        cy.wait(2000)
        cy.get('.iAgreeCheckbox').click()
        cy.get('.buttons > .buttonEformYellow').click()
                

        
    
});
});


    //JIT ROUTING  
    
    it('JIT/118 Being Routed', () => {  
        cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm?event=general.logout');
        cy.get('input#username.long')
        .type('cjfennim').should('have.value', 'cjfennim')  
        cy.get('input#password.long')
        .type('test{Enter}')
        
        
        
        cy.get('#dashboardmenu8 > :nth-child(2) > a').click()
        //cy.get('.searchColumn ui-state-default')
        cy.get('input[placeholder="Title"]')
            .type('My JIT/118 Cypress Test')
        cy.get('.sorting_1 > a').click()
        

        //Application Status screen
        cy.get('#triggerLoading').should("be.visible") 
        cy.get('#btnPDF').should("be.visible") 
        cy.get('#btnUnsubmit').should("be.visible") 
        cy.get('.box_tab_info').should("be.visible")
            
        
        //Routing Tab

        //PI/FA Cert area
        cy.get('.box_tab_info > :nth-child(2)').should("be.visible").should('contain', 'Investigator(s) who must certify this Submission')
        cy.get('[width="40%"] > .searchresults').should('contain', 'Investigator')
        cy.get(':nth-child(4) > tbody > :nth-child(1) > [width="39%"]').should('contain', 'Role')
        cy.get('[width="20%"]').should('contain', 'Decision').should("be.visible")
        cy.get(':nth-child(4) > tbody > .odd > :nth-child(1)')
        cy.get(':nth-child(4) > tbody > .odd > :nth-child(2)').should('contain', 'Principal Investigator')
        cy.get('.odd > .copysmall').should('contain', 'Not Yet Reviewed')

        //Dept approval area
        cy.get('.box_tab_info > :nth-child(6)').should('contain', 'Department(s) that must approve this Submission')
        cy.get(':nth-child(8) > tbody > tr > [width="39%"]').should('contain', 'Department')
        cy.get(':nth-child(8) > tbody > tr > [width="40%"]').should('contain', 'Approving Person(s)')
        cy.get('[width="19%"]').should('contain', 'Approving Decision')

        
        //Routing Comments tab
        cy.get('#Tab_notes > .middlegreen > .copy').click()
        cy.get('.box_tab_info').should("be.visible")

        //Status History tab
        cy.get('#Tab_history > .middlegreen > .copy').click()
        cy.get('.box_tab_info').should("be.visible") 
        cy.get('.box_tab_info > :nth-child(2)').should("be.visible")
        cy.get('.box_tab_info > :nth-child(6)').should("be.visible")

        //Submitted Documents tab
        cy.get('#Tab_attachments > .middlegreen').click()
        cy.get('.box_tab_info').should("be.visible") 
        cy.get('[style="margin-bottom: 20px;"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > table > tbody > tr > .copybold').should("be.visible") 
        cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > :nth-child(1) > table > tbody > tr > .copybold').should("be.visible") 

        //Personnel tab
        cy.get('#Tab_personnel > .middlegreen > .copy').click()
        cy.get('.box_tab_info').should("be.visible") 
        cy.get('.coiTableConfig_personnelTab > .searchresults').should("be.visible") 
        cy.get('td.externalInstitutionHeaderName').should("be.visible") 

        //sIRB tab
        cy.get('#Tab_sirb > .middlegreen').click()
        cy.get('.box_tab_info').should("be.visible") 
        
        //Routing tab
        cy.get('.middleyellow').click() 
            
        //Ceritfy as the Prinicapl Investigator
        cy.get('#btnCertify').click()
        cy.get('.buttonEformYellow').click()
    

        });
   //   });
    //});

    //JIT Accept for Review  
    it('Accept JIT For Review', () => {  
    cy.visit('https://orisdev.research.unc.edu/irb/index.cfm?event=general.logout');
    cy.get('input#username.long')
       .type('mhannah1').should('have.value', 'mhannah1')  
    cy.get('input#password.long')
      .type('test{Enter}')     
    //})   
  

    cy.get('td[data-title="Submitted To IRB"] > .bucket > :nth-child(2) > table > tbody > :nth-child(2) > .countTotal > a').click()
    cy.wait(1000)
    cy.get('#bucketDataTable_filter > label > input').type('My JIT Cypress Test')
    cy.get('.confirmAcceptByIRB').click()

    
});


it('Verify Study History Screen', () => {  
    cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm?event=general.logout');
    cy.get('input#username.long')
       .type('cdcantre').should('have.value', 'cdcantre')  //Log in as Celeste (IRB Analyst)
    cy.get('input#password.long')
      .type('test{Enter}')     
    cy.get('td[data-title="Accepted By IRB"] > .bucket > :nth-child(2) > table > tbody > :nth-child(2) > [data-column="TBD"] > a').click()
    cy.wait(1000)
    cy.get('#bucketDataTable_filter > label > input').type('My JIT Cypress Test')
    cy.get('#bucketDataTable > tbody > .odd > :nth-child(1) > a').click()
        //STUDY DASHBOARD
    cy.get('#studyHistoryDashboard').should("be.visible") 
    cy.get('#form_irbid2').should("be.visible") 
    cy.get('#studyHistoryDashboard > :nth-child(3)').should("be.visible") 
    cy.get('.messageCenterNewDl > dd > .sidebarLinks').should("be.visible")
    cy.get('.messageCenterLogsDl > dd > .sidebarLinks').should("be.visible") 
    cy.get('#studyHistoryDashboard > :nth-child(6)').should("be.visible") 
    //TimeStamp Log
    cy.get('.timeStampLogDl > dd > .sidebarLinks').should("be.visible").click()
    cy.get('#modalPopup').should("be.visible") 
    cy.get('.choosen').should("be.visible") 
    cy.get('.showing').should('contain', 'Showing All Logs')  
    cy.get('[data-filtertype="History"]').click()
    cy.get('.showing').should('contain', 'Showing Study Logs')  
    cy.get('[data-filtertype="Letter"]').click()
    cy.get('.showing').should('contain', 'Showing Letter Logs')  
    cy.get('[data-filtertype="Change"]').click()
    cy.get('.showing').should('contain', 'Showing Change Logs')  
    cy.get('[aria-labelledby="ui-dialog-title-modalPopup"] > .ui-dialog-titlebar > .ui-dialog-titlebar-close > .ui-icon').click()
    //COI DIsclosure Log
    cy.get('.coiDisclosureLogDl > dd > .sidebarLinks').should("be.visible").click()
    cy.get('[aria-labelledby="ui-dialog-title-modalPopup"] > .ui-dialog-titlebar').should("be.visible")
    cy.get('#modalPopup').should("be.visible")
    cy.get('label > select').should("be.visible")
    cy.get('[aria-labelledby="ui-dialog-title-modalPopup"] > .ui-dialog-titlebar > .ui-dialog-titlebar-close > .ui-icon').click()
    //Attachment Log
    cy.get('.eformAttachmentsDl > dd > .sidebarLinks').should("be.visible") 
    //Add PRI
    cy.get('.addNSIDl > dd > .sidebarLinks').should("be.visible") 
    //Physician Network Sites
    cy.get('.networkSitesDl > dd > .sidebarLinks').should("be.visible").click()
    cy.get('#modalPopup').should("be.visible") 
    cy.get('[aria-labelledby="ui-dialog-title-modalPopup"]').should("be.visible") 
    cy.get('label > select').should("be.visible") 
    cy.get('label > input').type('UNC Family Medicine at Goldsboro')
    cy.get('.sorting_1').should('contain', 'UNC Family Medicine at Goldsboro')  
    cy.get('[aria-labelledby="ui-dialog-title-modalPopup"] > .ui-dialog-titlebar > .ui-dialog-titlebar-close > .ui-icon').click()

    //STUDY HISTORY 
    cy.get('.tablemainsub-allborders').should("be.visible")
    cy.get('.mod > :nth-child(1) > div > a').should("be.visible")
    cy.get('.tablemainsub-allborders > :nth-child(1) > :nth-child(1) > [align="left"]').should('contain', 'IRB No:')
    cy.get('.tablemainsub-allborders > :nth-child(1) > :nth-child(2) > :nth-child(1)').should('contain', 'IRB')
    cy.get('.tablemainsub-allborders > :nth-child(1) > :nth-child(3) > :nth-child(1)').should('contain', 'PI:')
    cy.get('.tablemainsub-allborders > :nth-child(1) > :nth-child(1) > :nth-child(3)').should('contain', 'Study Status:')
    cy.get('.tablemainsub-allborders > :nth-child(1) > :nth-child(1) > .copy').should('contain', 'Submitted')
    cy.get('.tablemainsub-allborders > :nth-child(1) > :nth-child(2) > [align="left"]').should('contain', 'Expiration Date:')
    cy.get(':nth-child(1) > :nth-child(3) > :nth-child(3)').should('contain', 'Last Approved:')
    cy.get('[rowspan="2"] > b').should('contain', 'Study Title')
    cy.get('[rowspan="2"]').should('contain', 'My JIT/118 Cypress Test')
    
    //Study Notes
    cy.get('.studyNotesLink').click()
    cy.get('#modalPopup').should("be.visible") 
    cy.get('#lastestUpdate').should('contain', 'There is no current Study Note')
    cy.get('#noteText').should('contain', 'Type here to begin a new Study Note')
    cy.get('#btnSave').should("be.visible") 
    cy.get('#btnSaveAndClose').should("be.visible") 
    cy.get('#btnClose').should("be.visible") 
    cy.get('#noteText').type('Hello World!')
    cy.get('#btnSaveAndClose').click()
    cy.get('#studyNotesPreview').should('contain', 'by Celeste Cantrell on')
    
    //Study Tags
    cy.get('#addTag2').click()
    cy.get('.tagList').should("be.visible")
    cy.get('#tag55 > .customTagNoHighlight').should('contain', 'Minimal Risk')
    cy.get('#addTag2').click()
    cy.get('.draftSubsLink').should("be.visible")
    cy.get('span > u').should('contain', 'Submission Type')
    cy.get('[width="7%"] > u').should('contain', 'Reference ID')
    cy.get('[width="11%"] > u').should('contain', 'Approval State')
    cy.get(':nth-child(4) > u').should('contain', 'Date Routing Complete')
    cy.get(':nth-child(5) > u').should('contain', 'Action Date')
    cy.get(':nth-child(6) > u').should('contain', 'Expiration Date')
    cy.get(':nth-child(7) > u').should('contain', 'AR Date')
    cy.get('[nowrap="nowrap"] > u').should('contain', 'Review Type')
    
    cy.get('[style="padding-left: 50px;"]').should("be.visible")
    cy.get('[style="padding-left: 10px; color: red;"]').should("be.visible")
    cy.get('.searchresults > :nth-child(3)').should("be.visible")
    cy.get('.searchresults > :nth-child(4)').should("be.visible")
    cy.get('.submissionNoteLink').should("be.visible")
    cy.get('.returnToSender').should("be.visible")

    cy.get('.watchButton').should("be.visible").click()
    cy.get(':nth-child(1) > :nth-child(2) > table > tbody > tr > [width="115px"] > label').should("be.visible")
    cy.get(':nth-child(2) > :nth-child(2) > table > tbody > tr > [width="115px"] > label').should("be.visible")
    cy.get(':nth-child(3) > :nth-child(2) > table > tbody > tr > [width="115px"] > label').should("be.visible")
    cy.get('#date_received_cell > tbody > tr > [width="140px"] > label').should("be.visible")
    
    //OPTIONS
    cy.get('#link_action > .button').click()
    cy.get('#action_menu').should("be.visible")
    cy.get('#closewindow').click()
    
    }) 
    

    it('Verify Application/Review popup', () => {
    cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm?event=general.logout');
    cy.get('input#username.long')
            .type('cdcantre').should('have.value', 'cdcantre')  //Log in as Celeset (IRB Analyst)
    cy.get('input#password.long')
            .type('test{Enter}')     
    cy.get('td[data-title="Accepted By IRB"] > .bucket > :nth-child(2) > table > tbody > :nth-child(2) > [data-column="TBD"] > a').click()
    cy.wait(1000)
    cy.get('#bucketDataTable_filter > label > input').type('My JIT Cypress Test')
    cy.get('#bucketDataTable > tbody > .odd > :nth-child(1) > a').click()
    cy.get('.appSwimLanes').should("be.visible")
            // Get window object
    cy.window().then((win) => {
            // Replace window.open(url, target)-function with our own arrow function
    cy.stub(win, 'open', url => 
            {
            // change window location to be same as the popup url
    win.location.href = Cypress.config().baseUrl + url;
            }).as("popup") // alias it with popup, so we can refer it with @popup
            })
            
            // Click button which triggers javascript's window.open() call
    cy.get('.swimlane1 > div').click()
            // Make sure that it triggered window.open function call
    cy.get("@popup").should("be.called")

    //Verify header info

    cy.get('#irbInfo').should("be.visible")
    cy.get('#irbInfo > :nth-child(3) > :nth-child(1)').should("be.visible")
    cy.get('#irbInfo > :nth-child(3) > :nth-child(2)').should("be.visible")
    cy.get('#irbInfo > :nth-child(3) > :nth-child(3)').should("be.visible")
  
   
    //Create a Review
    cy.get('#navNextStep').click()
    cy.get('#hasReviewTypes').should("be.visible")
    cy.get('#reviewTypeId').should('contain', 'Select Review Type...')
    .and('contain', 'Not Full Board (Expedited, Exempt, NHSR, other)')
    .and('contain', 'Full Board (Meeting)')
    .select('Not Full Board (Expedited, Exempt, NHSR, other)')
    cy.get('#btnCreateReview').click()
    cy.wait(5000)

    
    //Verify left rail
    cy.get('#navContainer').should("be.visible")
    cy.get('#navReviewType').should("be.visible")
    cy.get('#navReviewConditions').should("be.visible")
    cy.get('#navNextStep').should("be.visible")
    cy.get('#navApplication').should("be.visible")
    cy.get('#navLibrary').should("be.visible")
    cy.get('#navStipulations').should("be.visible")
    cy.get('#navExpandCollapse').should("be.visible")
    cy.get('#navItemList').should("be.visible")
    cy.get('#navOptions').should("be.visible")
    cy.get('navChecklist').should('not.exist')
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


    //Select an Analyst
    cy.get('#navNextStep').click()
    cy.get('#analystSelector').should("be.visible")
    cy.get('.managerTextbox').type('celeste')
    cy.get('[name="Celeste Cantrell"]').click()



    //Add a stipulation
    cy.get('#navApplication').click()
    cy.get('#addStipForQuestion554').click()
    cy.wait(1000)
    cy.get('.cke_wysiwyg_frame').then(function($iframe) {
    const $body = $iframe.contents().find("body");
    console.log($body);
    cy.wrap($body[0]).type("My test stip");
    cy.get('#questionId554 > #stip0 > .stipButtons > .save').click()
    cy.get('.editStipulation > p').should("be.visible")

    cy.get('#navReviewResult').click()

    //Disabled review results:
    cy.get('#reviewResult1').should('have.class', 'stipsNotAllowed') //Approved
    cy.get('#reviewResult2').should('have.class', 'stipsNotAllowed') //Exempted
    cy.get('#reviewResult4').should('have.class', 'stipsNotAllowed') //NHSR
    cy.get('#reviewResult5').should('have.class', 'stipsNotAllowed') //Rely on External IRB
    cy.get('#reviewResult6').should('have.class', 'stipsNotAllowed') //Rely on NCI-CIRB
    cy.get('#reviewResult7').should('have.class', 'stipsNotAllowed') // Withdraw

    //Select Minor Stipulations
    cy.get('#reviewResult3').click()
    cy.wait(3000)

    cy.get('#navReviewNotes').click()
    cy.wait(3000)

    //Study Specific Findings - Add Macro

    cy.get(':nth-child(2) > .macrosContainer > .insertmacro').should('contain', 'Add Macro')
    .select('DOJ')
    cy.get(':nth-child(2) > .macrosContainer > .button').click()

    cy.wait(5000)  //wait for autosave to finish

    cy.reload()
    cy.get('#navReviewNotes').click()
    cy.wait(3000)


    //Submission Specific Findings - Add Macro
    cy.get(':nth-child(3) > .macrosContainer > .insertmacro').should('contain', 'Add Macro')
    .select('HIPAA - Limited Data Set')
    cy.get(':nth-child(3) > .macrosContainer > .button').click()

    cy.wait(5000)    //wait for autosave to finish

    /*
    //Study Specific Findings  
    cy.get('#cke_1_contents > .cke_wysiwyg_frame').then(function($iframe) {
    const $body = $iframe.contents().find("body");
    console.log($body);
    cy.wrap($body[0]).type("My Study Specific Findings");

    cy.wait(5000)  //wait for autosave to finish
    
    //Submission Specific Findings 
    cy.get('#cke_2_contents > .cke_wysiwyg_frame').then(function($iframe) {
    const $body = $iframe.contents().find("body");
    console.log($body);
    cy.wrap($body[0]).type("My Submission Specific Findings");

    cy.get('#cke_1_contents > .cke_wysiwyg_frame').then(function($iframe) {
    const $body = $iframe.contents().find("body");
    console.log($body);
    cy.wrap($body[0]).type("!");S

    cy.wait(5000)    //wait for autosave to finish
*/

    //Draft Letter 
    cy.get('#navNextStep').click()


    cy.get('#letterTypeId')
    .should('contain', 'Select Template Type...')
            .and('contain', 'Minor Stips - Expedited')
            .and('contain', 'FB Admin pre-review')
            .and('contain', 'UNC ONLY-Permission to Register')
            .select('Minor Stips - Expedited')
    cy.get('#btnDraftLetter').click()      

    /*
    //Verify and Finalize letter
    cy.get('#sent_to_email').should("be.visible")
    cy.get('#sent_to_email2').should("be.visible")
    cy.get('.cke_wysiwyg_frame').should("be.visible")
    cy.get('.letterSubHeader').should('contain', 'Minor Stips - Expedited')
    cy.get('#btnViewPDF').should("be.visible")
    cy.get('#btnDelete').should("be.visible")
    cy.get('#btnSaveLetter').should("be.visible")
    cy.get('#btnSendToChair').should("be.visible")
    cy.get('#btnFinalizeLetterModal').should("be.visible")

    //Delete and redraft letter
    cy.get('#btnDelete').click()
    cy.get('#letterTypeId')
    .should('contain', 'Select Template Type...')
            .and('contain', 'Minor Stips - Expedited')
            .and('contain', 'FB Admin pre-review')
            .and('contain', 'UNC ONLY-Permission to Register')
            .select('Minor Stips - Expedited')
    cy.get('#btnDraftLetter').click()  
*/

    //Verify and Finalize letter
    cy.get('#sent_to_email').should("be.visible")
    cy.get('#sent_to_email2').should("be.visible")
    cy.get('.cke_wysiwyg_frame').should("be.visible")
    cy.get('.letterSubHeader').should('contain', 'Minor Stips - Expedited')
    cy.get('#btnViewPDF').should("be.visible")
    cy.get('#btnDelete').should("be.visible")
    cy.get('#btnSaveLetter').should("be.visible")
    cy.get('#btnSendToChair').should("be.visible")
    cy.get('#btnFinalizeLetterModal').should("be.visible")
    cy.get('#btnFinalizeLetterModal').click()
    cy.get('.ui-dialog-content').should("be.visible")
    cy.get('.ui-dialog-buttonset > .btn-info').click()
    
    
        })
      })

      it('Waiting PI Repsonse', () => {
        cy.viewport(1400, 750)         
        cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm?event=general.logout');
        cy.get('input#username.long')
                .type('mhannah1').should('have.value', 'mhannah1')  
        cy.get('input#password.long')
                .type('test{Enter}') 
        cy.get('#nav > :nth-child(2) > a').click()  
        cy.get('#dashboardmenu5 > :nth-child(10) > a').click()
        cy.get('input[placeholder="Title"]')
                .type('My JIT/118 Cypress Test')
        cy.get('.odd > :nth-child(2) > a').click()
        cy.contains(' View Stipulations').should("be.visible").click()
           //RESPOND TO STIPULATIONS
        cy.get('input[name="btnRespond"]').should("be.visible").click()
        cy.get('#cke_1_contents > .cke_wysiwyg_frame').then(function($iframe) {
              const $body = $iframe.contents().find("body");
              console.log($body);
              cy.wrap($body[0]).type("My Response to Stipulations");
        cy.get('#btnSaveResponse').click()

        cy.get('#BTNRESUBMIT').click()
        cy.wait(2000)
        cy.get('.iAgreeCheckbox').click()
        cy.get('.buttonEformYellow').click()

        
  })
})


     
it('Revised-Resubmitted to IRB', () => {
        cy.viewport(1400, 750) 
        cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm?event=general.logout');
        cy.get('input#username.long')
                .type('cdcantre').should('have.value', 'cdcantre')  
        cy.get('input#password.long')
                .type('test{Enter}') 

        cy.get('td[data-title="PI Responses"] > .bucket > :nth-child(2) > table > tbody > :nth-child(2) > [data-column="TBD"] > a').click()
        cy.wait(1000)
        cy.get('#bucketDataTable_filter > label > input').type('My JIT/118 Cypress Test')
        cy.get('#bucketDataTable > tbody > .odd > :nth-child(1) > a').click()
        cy.wait(1000)
        // Get window object
        cy.window().then((win) => {
                // Replace window.open(url, target)-function with our own arrow function
        cy.stub(win, 'open', url => 
                {
                // change window location to be same as the popup url
        win.location.href = Cypress.config().baseUrl + url;
                }).as("popup") // alias it with popup, so we can refer it with @popup
                })
                
                // Click button which triggers javascript's window.open() call
        cy.get('#swimLaneReview0 > .swimlane1 > :nth-child(1)').click()
                // Make sure that it triggered window.open function call
        cy.get("@popup").should("be.called")
        

        //Create a review
        cy.get('#navNextStep').click()
        cy.get('#hasReviewTypes').should("be.visible")
        cy.get('#reviewTypeId')
        .should('contain', 'Select Review Type...')
                .and('contain', 'Not Full Board (Expedited, Exempt, NHSR, other)')
                .and('contain', 'Full Board')
                .select('Not Full Board (Expedited, Exempt, NHSR, other)')
        cy.get('#btnCreateReview').click() 
        cy.wait(2000)

        // CAPTURE URL OF REVIEW WINDOW

        cy.url().as("reviewWindow");

        //Verify header info

        cy.get('#irbInfo').should("be.visible")
        cy.get('#irbInfo > :nth-child(3) > :nth-child(1)').should("be.visible")
        cy.get('#irbInfo > :nth-child(3) > :nth-child(2)').should("be.visible")
        cy.get('#irbInfo > :nth-child(3) > :nth-child(3)').should("be.visible")
        //Verify left rail
        cy.get('#navContainer').should("be.visible")
        cy.get('#navReviewType').should("be.visible")
        cy.get('#navReviewConditions').should("be.visible")
        cy.get('#navNextStep').should("be.visible")
        cy.get('#navApplication').should("be.visible")
        cy.get('#navLibrary').should("be.visible")
        cy.get('#navStipulations').should("be.visible")
        cy.get('#navExpandCollapse').should("be.visible")
        cy.get('#navItemList').should("be.visible")
        cy.get('#navOptions').should("be.visible")
        cy.get('#navPIResponses').should("be.visible")
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

        //PI Responses
        cy.get('#navPIResponses').click()
        cy.viewport(1200, 612) 



        cy.get('#PIResponseHeader').should("be.visible")
        cy.get('#PIResponseHeader > :nth-child(2) > :nth-child(1)').should("be.visible")
        cy.get('#PIResponseHeader > :nth-child(2) > :nth-child(2)').should("be.visible")
        cy.get('#PIResponseHeader > :nth-child(2) > :nth-child(3)').should("be.visible")
        cy.get('.answerForStip > :nth-child(1)').should("be.visible")
        //cy.get('.compareClick').should("be.visible")
        cy.get(':nth-child(1) > .nextChange').should("be.visible")
        cy.get('.stipDiv > :nth-child(1)').should("be.visible")
        cy.get('.stipDiv > :nth-child(2) > p').should("be.visible")
        cy.get('.stipDiv > :nth-child(2)').should("be.visible")
        cy.get('.responseDiv > :nth-child(1)').should("be.visible")
        cy.get('.responseDiv > :nth-child(2) > p').should("be.visible")
        cy.get('.responseDiv > :nth-child(2)').should("be.visible")
        cy.get('.actionDiv > :nth-child(1)').should("be.visible")
        cy.get('.actionDiv > :nth-child(2)').should("be.visible")
        cy.get('.resolve').should("be.visible")
        cy.get('.resend').should("be.visible")
        cy.get('.withdraw').should("be.visible")
        cy.get('.responseConfirm').should("be.visible")

        cy.get('.resolve').click()
        cy.get('.responseConfirm').click()
        cy.get('#saveResponseConfirmations').click()

        cy.wait(3000)


        //NAVIGATE BACK TO REVIEW WINDOW
        cy.get("@reviewWindow").then((url) => {
        cy.visit(url)
        })
        

        //Record Review Result (minor stip w/o stip)
        cy.get('#navReviewResult').click()
        cy.get('#reviewResult3').click()
        cy.wait(3000) //allow auto save to complete


        cy.get('#navReviewNotes').click()
        cy.wait(3000)

        /*

        //Study Specific Findings  
        cy.get('iframe.cke_wysiwyg_frame')  // "cke_wysiwyg_frame" class is used here
        .then($frameWindow => {

                const win = cy.state('window'); // grab the window Cypress is testing
                const ckEditor = win.CKEDITOR;  // CKEditor has added itself to the window
                const instances = ckEditor.instances;  // can be multiple editors on the page

                const myEditor = Object.values(instances)
                .filter(instance => instance.id === 'cke_1')[0]; // select the instance by id

                // use CKEditor API to change the text
                myEditor.setData('<h1>Study Specific Findings</h1>'); 

        //  cy.get(':nth-child(2) > .subHeader').click()

        cy.wait(5000)  //wait for autosave to finish

        cy.reload()
        cy.get('#navReviewNotes').click()
        cy.wait(3000)

        //Submission Specific Findings
        cy.get('iframe.cke_wysiwyg_frame')  // "cke_wysiwyg_frame" class is used here
        .then($frameWindow => {

                const win = cy.state('window'); // grab the window Cypress is testing
                const ckEditor = win.CKEDITOR;  // CKEditor has added itself to the window
                const instances = ckEditor.instances;  // can be multiple editors on the page

                const myEditor = Object.values(instances)
                .filter(instance => instance.id === 'cke_2')[0]; // select the instance by id

                // use CKEditor API to change the text
                myEditor.setData('<h1>Submission Specific Findings</h1>'); 
                

        cy.wait(5000)    //wait for autosave to finish

        */
        
        //Draft Letter 
        cy.get('#navLetter').click()
        cy.get('#letterTypeId').select('Minor Stips - Expedited')
        cy.get('#btnDraftLetter').click()  
        cy.get('#btnFinalizeLetterModal').click()
        cy.get('.body > div').and('contain', 'You have no stipulations in place.')
        cy.get('.closeFinal').click()

        cy.get('#btnDelete').click()
        cy.wait(3000)
       // cy.get(':nth-child(3) > [onclick="modalClose();"]').click() //close the draft letter modal

        //Record Review Result -> Select NHSR
        cy.get('#navReviewResult').click()
        cy.get('#reviewResult4').click()
        cy.wait(3000)
        cy.get('#navReviewNotes').click()
        cy.wait(3000)

        //Study Specific Findings
        cy.get('#reviewNotesBox > :nth-child(2)').should("be.visible")
        // cy.get('#cke_studyFindingsCKE > .cke_inner').then(function($iframe) {
        // const $body = $iframe.contents().find("body");
        // console.log($body);
        //  cy.wrap($body[0]).and('contain', 'My Study Specific Findings!')

                //Submission Specific Findings 
        cy.get('#reviewNotesBox > :nth-child(3)').should("be.visible")
        // cy.get('#cke_submissionFindingsCKE > .cke_inner').then(function($iframe) {
        //     const $body = $iframe.contents().find("body");
        //     console.log($body);
        //     cy.wrap($body[0]).and('contain', 'My Submission Specific Findings');

        cy.get('#navNextStep').click()
        cy.get('#letterTypeId')
        .should('contain', 'Select Template Type...')
                .and('contain', '118 Approval Letter')
                .and('contain', 'Not Human Subjects Research')
                .and('contain', 'Emergency Use Ackn.')
                .select('Not Human Subjects Research')
        cy.get('#btnDraftLetter').click()      

        //Verify and Finalize letter
        cy.get('#sent_to_email').should("be.visible")
        cy.get('#sent_to_email2').should("be.visible")
        cy.get('.cke_wysiwyg_frame').should("be.visible")
        cy.get('.letterSubHeader').should('contain', 'Not Human Subjects Research')
        cy.get('#btnViewPDF').should("be.visible")
        cy.get('#btnDelete').should("be.visible")
        cy.get('#btnSaveLetter').should("be.visible")
        cy.get('#btnSendToChair').should("be.visible")
        cy.get('#btnFinalizeLetterModal').should("be.visible")
        cy.get('#btnFinalizeLetterModal').click()
        cy.get('.ui-dialog-content').should("be.visible")
        cy.get('.ui-dialog-buttonset > .btn-info').click()



          })
        })
    // })
//})
      



    //})
  //  })
  //})
//});

