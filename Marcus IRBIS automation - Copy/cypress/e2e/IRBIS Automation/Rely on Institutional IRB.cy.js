describe('Login', () => {
    // it('Login', () => {
      beforeEach (() => {
         cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm');
       //cy.visit('https://orisdev.research.unc.edu/irb_maint/eform_routing.cfm?masterid=382905');
      // cy.visit('https://orisdev.research.unc.edu/irb_maint/eform_attachments.cfm?MasterId=383036');
        // cy.visit('https://orisdev.research.unc.edu/irb_maint/eform_screens.cfm?MasterId=383043&ScreenId=121');
       cy.get('input#username.long')
           .type('mhannah1').should('have.value', 'mhannah1')  
       cy.get('input#password.long')
           .type('test{Enter}')
           
         });
 
 
 
  describe('Create Rely on Institutional IRB Application',  () => {
     it('Create Rely on Institutional IRB', () => {
         cy.get('#nav > :nth-child(2) > a').click()
         cy.get('#dashboard').should("be.visible")
         cy.get('[style="padding: 10px 10px 5px 10px;"]').should("be.visible")
         cy.get(':nth-child(2) > .wizardLinks1').click()
         cy.get('#wizard4').should("be.visible")
         cy.get('#btn4').click()
         cy.get('#wizard12').should("be.visible")
         cy.get('#wizard12 > .wizardButtons > .btn-primary').click()
        //cy.wait(15000)
        

//RELY ON INFORMATION
        cy.get('[qid="h_1984"] > [width="99%"]').should("be.visible")
        cy.get('[qid="h_864"] > [width="99%"]').should("be.visible")
        cy.get('[inputvalue="1"] > #q_60_864').click()
        cy.get('[qid="h_1546"] > [width="99%"]').should("be.visible")
        cy.get('#cke_1_contents > .cke_wysiwyg_frame').then(function($iframe) {
                const $body = $iframe.contents().find("body");
                console.log($body);
                cy.wrap($body[0]).type("Explaining why I am requesting reliance on an external IRB for this study."); 
        cy.get('[qid="h_1799"] > [width="99%"]').should("be.visible")
        cy.get('#cke_2_contents > .cke_wysiwyg_frame').then(function($iframe) {
                const $body = $iframe.contents().find("body");
                console.log($body);
                cy.wrap($body[0]).type("Describing the role of UNC Chapel Hill and UNC Chapel Hill investigator(s) in this study."); 
        cy.get('[qid="h_865"] > [width="99%"]').should("be.visible")
        cy.get('#q_60_865').type('Dr. Marcus Hannah')
        cy.get('#q_60_866').type('University of Marcus Hannah')
        cy.get('#q_60_867').type('FW12345')
        cy.get('[qid="q_2260"] > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy').click()
        cy.get('#att_2260_1').should("be.visible")
        cy.get('[qid="h_2261"] > [width="99%"]').should("be.visible")
        cy.get('[qid="q_2261"] > td.copy > [style="position: relative; display: block;"] > div > .copy').click()
        cy.get('[qid="h_2262"] > [width="99%"]').should("be.visible")
        cy.get('[qid="q_2262"] > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy').click()
        cy.get('#hd_2262\\|\\|1\\,2\\,3 > [width="99%"]').should("be.visible")
        cy.get('[qid="q_2262"] > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy').click()
        cy.get('[style="position: relative; display: block;"] > :nth-child(3) > .copy').click()
        cy.get('#hd_2262\\|\\|1\\,2\\,3 > [width="99%"]').should("be.visible")
        cy.get('[style="position: relative; display: block;"] > :nth-child(3) > .copy').click()
        cy.get('[style="position: relative; display: block;"] > :nth-child(4) > .copy').click()
        cy.get('#hd_2262\\|\\|1\\,2\\,3 > [width="99%"]').should("be.visible")
        cy.get('#q_60_2263').type('My Rely on NCI-CIRB CYPRESS TEST 5.A.2')
        cy.get('[name="submit1"]').click()
        


        


 //1. GENERAL INFORMATION SCREEN
 
         cy.get('#q_29_3').should("be.visible")
         .type('My Rely on Institutional IRB Cypress Test')//.should('have.value', 'My NHSR Regression Test') 
         cy.get('.cke_wysiwyg_frame').then(function($iframe) {
            const $body = $iframe.contents().find("body");
            console.log($body);
            cy.wrap($body[0]).type("My Rely on Institutional IRB CYPRESS TEST"); 
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
        cy.get('[qid="h_1205"] > [width="99%"]').should("be.visible")
        cy.get('[inputvalue="1"] > #q_98_1205').click()
        cy.get('[qid="h_2045"] > [width="99%"]')
        cy.get('[inputvalue="1"] > #q_98_2045').click()
        cy.get('[qid="h_533"] > [width="99%"]').should("be.visible")
 
         //VERIFY EXTERNAL FUNDING SOURCES POPUP
         cy.get('[qid="q_533"] > [style="display: table-cell; padding: 5px 0px 10px 0px;"] > [style="width:95%; text-align: left; padding: 0 0 10px 20px;"] > a').click()
         cy.get('.eform_div_odd > .label').should("be.visible")
         cy.get('form > #tbl_98_533 > tbody > :nth-child(1) > .copy > #ram_98_535').should("be.visible")
         cy.get('form > #tbl_98_533 > tbody > :nth-child(2) > .copy > #q_98_535').should("be.visible")
         cy.get('[qid="q_1204"] > .copy > #q_98_1204').should("be.visible")
         cy.get('[qid="q_1954"] > .copy > #q_98_1954').should("be.visible")
         cy.get('[qid="q_1955"] > .copy > #q_98_1955').should("be.visible")
         cy.get('[qid="q_551"] > .copy > #q_98_551').should("be.visible")
         cy.get('form > #tbl_98_533 > tbody > :nth-child(7) > .copy > [type="submit"]').should("be.visible")
         cy.get('form > #tbl_98_533 > tbody > :nth-child(7) > .copy > [type="button"]').click()
        
         cy.get('#coll_533').should("be.visible")
         cy.get('.odd > :nth-child(7) > a').should("be.visible")
         cy.get('.odd > :nth-child(8) > a').should("be.visible")
         cy.get('[qid="h_1286"] > [width="99%"]').should("be.visible")
         cy.get('[inputvalue="1"] > #q_98_1286').click()
       
         //VERIFY INTERNAL FUNDING SOURCES POPUP
         cy.get('#tr_1286\\|\\|1 > [style="display: table-cell; padding: 5px 0px 10px 0px;"] > [style="width:95%; text-align: left; padding: 0 0 10px 20px;"] > a').click()
         cy.get('[qid="q_1150"] > .copy > #q_98_1150').should("be.visible")
         cy.get('[qid="q_1151"] > .copy > #q_98_1151').should("be.visible")
         cy.get('[qid="q_1156"] > .copy > #q_98_1156').should("be.visible")
         cy.get('form > #tbl_98_1149 > tbody > :nth-child(4) > .copy > [type="submit"]').should("be.visible")
         cy.get('form > #tbl_98_1149 > tbody > :nth-child(4) > .copy > [type="button"]').click()
       
 
         cy.get('[style="padding: 0 0 10px 20px;"] > a').click()
         cy.wait(1000)
         cy.get('#noansweravailable').should("be.visible")
         cy.get('[qid="h_575"] > [width="99%"]').should("be.visible")
         cy.get('[inputvalue="1"] > #q_98_575').click()
         cy.get('[qid="h_1318"] > [width="99%"]').should("be.visible")
         cy.get('#tbl_98_1318 > tbody > :nth-child(1) > td.copy > [style="position: relative; display: block;"] > :nth-child(2)').should("be.visible")
         cy.get('#tbl_98_1318 > tbody > :nth-child(2) > td.copy > [style="position: relative; display: block;"] > :nth-child(2)').should("be.visible")
         cy.get('#tbl_98_1318 > tbody > :nth-child(3) > td.copy > [style="position: relative; display: block;"] > :nth-child(2)').should("be.visible")
         cy.get('#tbl_98_1318 > tbody > :nth-child(4) > td.copy > [style="position: relative; display: block;"] > :nth-child(2)').should("be.visible")
         cy.get('#tbl_98_1318 > tbody > :nth-child(5) > td.copy > [style="position: relative; display: block;"] > :nth-child(2)').should("be.visible")
         cy.get('[qid="h_1940"] > [width="99%"]').should("be.visible")
         cy.get('[qid="h_1940"] > [width="99%"] > a').should("be.visible")
         cy.get('[inputvalue="1"] > #q_98_1940').click()
         cy.get('[qid="h_2248"] > [width="99%"]').should("be.visible")
         cy.get('[inputvalue="0"] > #q_98_2248').click()
         cy.get('[qid="h_1941"] > [width="99%"]').should("be.visible")
         cy.get('[inputvalue="1"] > #q_98_1941').click()
         cy.get('[name="submit1"]').click()

     
 //4.SCREENING QUESTIONS
        cy.get('[qid="h_1906"] > [width="99%"] > a').should("be.visible")
        cy.get('[qid="q_443"] > [style="padding:5px 10px 5px 0px;"] > table > tbody > tr > .label').should("be.visible")
        cy.get('[qid="h_1907"] > [width="99%"] > a').should("be.visible")
        cy.get('[qid="q_34"] > [style="padding:5px 10px 5px 0px;"] > table > tbody > tr > .label').should("be.visible")
        cy.get('[inputvalue="1"] > #q_10_34').click()
        cy.get('[qid="q_35"] > [style="padding:5px 10px 5px 0px;"] > table > tbody > tr > .label').should("be.visible")
        cy.get('[inputvalue="1"] > #q_10_35').click()
        cy.get('[qid="q_80"] > [style="padding:5px 10px 5px 0px;"] > table > tbody > tr > .label').should("be.visible")
        cy.get('[inputvalue="1"] > #q_10_80').click()
        cy.get('[qid="q_79"] > [style="padding:5px 10px 5px 0px;"] > table > tbody > tr > .label').should("be.visible")
        cy.get('[inputvalue="1"] > #q_10_79').click()
        cy.get('[qid="q_713"] > [style="padding:5px 10px 5px 0px;"] > table > tbody > tr > .label').should("be.visible")
        cy.get('[qid="q_713"] > [style="padding:5px 10px 5px 0px;"] > table > tbody > tr > .copy').should("be.visible")
        cy.get('[name="submit1"]').click()
  
 // LOCATION
         cy.get('[inputvalue="0"] > #q_140_49').click()
         cy.get('[name="submit1"]').click()

        

         


// ONOCOLOGY SPECIFIC QUESTIONS 
        //PRC SCREENING QUESTIONS
        cy.get('[qid="h_1909"] > [width="99%"]').should("be.visible")
        cy.get('[inputvalue="1"] > #q_129_1909').click()
        cy.get('#hd_1909\\|\\|1 > [width="99%"]').should("be.visible")
        cy.get('[inputvalue="1"] > #q_129_1910').click()
        cy.get('#hd_1910\\|\\|1 > [width="99%"]').should("be.visible")
        cy.get('[name="submit1"]').click()
 
        //INVESTIGATOR INITIATED STUDIES
        cy.get('#hd_0\\|\\| > [width="99%"]').should("be.visible")
        cy.get('[inputvalue="1"] > #q_103_1924').click()
        cy.get('#hd_1924\\|\\|1 > [width="99%"]').should("be.visible")
        cy.get('[inputvalue="Yes"] > #q_103_1223').click()
        cy.get('#hd_1223\\|\\|Yes > [width="99%"]').should("be.visible")
        cy.get('[inputvalue="No"] > #q_103_1225').click()
        cy.get('#hd_1225\\|\\|No > [width="99%"]').should("be.visible")
        cy.get('[name="submit1"]').click()

        //OTHER CPO SERVICES
        cy.get('[qid="h_1925"] > [width="99%"]').should("be.visible")
        cy.get('[inputvalue="1"] > #q_105_1925').click()
        cy.get('#hd_1925\\|\\|1 > [width="99%"]').should("be.visible")
        cy.get('[name="submit1"]').click()



//A.4.A BIOMEDICAL METHODS AND PROCEDURES
        cy.get('[qid="h_2228"] > [width="99%"]').should("be.visible")
        cy.get('[inputvalue="1"] > #q_74_2228').click()
        cy.get('#doc_2228_424').should("be.visible")
        cy.get('#hd_2228\\|\\|1 > [width="99%"]').should("be.visible")
      //A.4.A.1 - Add investigational devices, drugs, biologics, or other substances pop up 
       // cy.get('#noansweravailable').should("be.visible")
        cy.get('[style="width:95%; text-align: left; padding: 0 0 10px 20px;"] > a').click()
        cy.get('#eformDivCollection').should("be.visible")
        cy.get('[qid="q_2230"] > .copy > #q_74_2230').type('My Rely On Institutional IRB A.4.A.1 test')
        cy.get('[qid="q_2231"] > td.copy > .label').should("be.visible")
        cy.get('[qid="q_2231"] > td.copy > [inputvalue="IND"] > #q_74_2231').should("be.visible")
        cy.get('[qid="q_2231"] > td.copy > [inputvalue="IDE"] > #q_74_2231').click()
        cy.get('[qid="q_2232"] > .label').should("be.visible")
        cy.get('[qid="q_2232"] > .copy > #q_74_2232').type('My Rely On Institutional IRB IND/IDE test')
        cy.get('[qid="q_2233"] > td.copy > #q_74_2233').type('My Rely On Institutional IRB Brief Description test')
        cy.get('form > #tbl_74_2229 > tbody > :nth-child(5) > .copy > [type="submit"]').click()

        cy.get('[qid="h_884"] > [width="99%"]').should("be.visible")
        cy.get(':nth-child(1) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy').click()
        cy.get('#att_885_1').should("be.visible")
        //cy.get(':nth-child(6) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy').click()
        cy.get(':nth-child(7) > td.copy > [style="position: relative; display: block;"] > div > .copy').click()
       // cy.get('#att_2044_1').should("be.visible")
       // cy.get(':nth-child(8) > td.copy > [style="position: relative; display: block;"] > div > .copy').click()
        cy.get('#tr_891\\|\\|1 > td.copy').should("be.visible")
        cy.get('[inputvalue="2"] > #q_74_2259').click()
        cy.get('#doc_2259_1333').should("be.visible")
        cy.get(':nth-child(9) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy').click()
        cy.get('#att_893_1').should("be.visible")
        //cy.get(':nth-child(11) > td.copy > [style="position: relative; display: block;"] > div > .copy').click()
        cy.get('[name="submit1"]').click()


//A.9 IDENTIFIERS
        cy.get('#hd_0\\|\\| > [width="99%"]').should("be.visible")
        cy.get(':nth-child(8) > td.copy > [style="position: relative; display: block;"] > div > .copy').click()
        cy.get('[name="submit1"]').click()

//A.10 CONFIDENTIALITY OF THE DATA
        cy.get('[qid="h_817"] > [width="99%"]').should("be.visible")
        cy.get('[inputvalue="1"] > #q_70_817').click()
        cy.wait(2000)
        cy.get('#cke_1_contents > .cke_wysiwyg_frame').then(function($iframe) {
                const $body = $iframe.contents().find("body");
                console.log($body);
                cy.wrap($body[0]).type("My Rely On Institutional IRB A.10.1 test");
        cy.get('[qid="h_819"] > [width="99%"]').should("be.visible")
        cy.get('[inputvalue="0"] > #q_70_819').click()
        cy.get('[inputvalue="1"] > #q_70_1369').click()
        cy.get('#cke_2_contents > .cke_wysiwyg_frame').then(function($iframe) {
                const $body = $iframe.contents().find("body");
                console.log($body);
                cy.wrap($body[0]).type("My Rely On Institutional IRB A.10.3 test");
        cy.get('[name="submit1"]').click()


//B.1 METHODS OF RECRUITING
        cy.get('[qid="h_945"] > [width="99%"]').should("be.visible")
        cy.get(':nth-child(1) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy').click()
        cy.get('#att_2222_1').should("be.visible")
        //cy.get('#tr_2222\\|\\|MyChart > .copy > .label').should("be.visible")
        cy.get(':nth-child(3) > td.copy > [style="position: relative; display: block;"] > div > .copy').click()
        //cy.get(':nth-child(4) > td.copy > [style="position: relative; display: block;"] > div > .copy').click()
        //cy.get('#att_968_1').should("be.visible")
        //cy.get('#q_78_969').should("be.visible")
        //cy.get(':nth-child(6) > td.copy > [style="position: relative; display: block;"] > div > .copy').click()
        cy.get('#q_78_2292').type('My Rely On Institutional IRB B.1.1 test')
        cy.get('#tr_2291\\|\\|1 > td.copy').should("be.visible")
        cy.get('[inputvalue="2"] > #q_78_2236').click()
        cy.get('#doc_2236_1313').should("be.visible")
        cy.get('[qid="h_2237"] > [width="99%"]').should("be.visible")
        cy.get('[name="submit1"]').click()
 

//B.2 PROTECTED HEALTH INFORMATION (PHI)
        cy.get('[qid="h_1786"] > [width="99%"]').should("be.visible")
        cy.get('[qid="h_955"] > [width="99%"]').should("be.visible")
        cy.get('[inputvalue="1"] > #q_79_955').click()
        cy.get('[qid="h_1992"] > [width="99%"]').should("be.visible")
        cy.get('[inputvalue="0"] > #q_79_1992').click()
        cy.get('#hd_1992\\|\\|0 > [width="99%"]').should("be.visible")
        cy.get('[qid="h_956"] > [width="99%"]').should("be.visible")
        cy.get('#tbl_79_956 > tbody > :nth-child(1) > td.copy').should("be.visible")
        cy.get('#q_79_957').type('My Rely On Institutional IRB B.2.1 test - List the data you are planning to collect for this purpose.')
        cy.get('#tbl_79_956 > tbody > :nth-child(2) > td.copy').should("be.visible")
        cy.get('#q_79_958').type('My Rely On Institutional B.2.1 test - Describe how confidentiality/privacy will be protected prior to ascertaining the patients willingness to participate')
        cy.get('#tbl_79_956 > tbody > :nth-child(3) > td.copy').should("be.visible")
        cy.get('#q_79_959').type('My Rely On Institutional B.2.1 test - Describe when and how you will destroy PHI for individuals')
        cy.get(':nth-child(4) > td.copy').should("be.visible")
        cy.get('#q_79_2293').type('My Rely On Institutional B.2.1 test - Please explain how screening could not be practicably conducted without the waiver.')
        cy.get(':nth-child(5) > td.copy').should("be.visible")
        cy.get('#q_79_2294').type('My Rely On Institutional B.2.1 test - Explain why it would not be possible to conduct the screening without the use of PHI')
        cy.get('[qid="h_1785"] > [width="99%"]').should("be.visible")
        cy.get('[inputvalue="1"] > #q_79_1785').click()
        cy.get('#doc_1785_424').should("be.visible")
        cy.get('#hd_1785\\|\\|1 > [width="99%"]').should("be.visible")
        cy.get('[name="submit1"]').click()


//B.3 SUBJECT CONTACT, DURATION AND PRIVACY
        cy.get('#hd_0\\|\\| > [width="99%"]').should("be.visible")
        cy.get('#tr_0\\|\\|0 > td.copy > [style="position: relative; display: block;"] > :nth-child(3) > .copy').click()
        cy.get('#hd_2009\\|\\|2 > [width="99%"]').should("be.visible")
        cy.get('#tr_2009\\|\\|2 > td.copy > [style="position: relative; display: block;"] > :nth-child(3) > .copy').click()
        cy.get('#hd_2010\\|\\|6\\,3\\,10\\,12\\,16\\,4\\,11\\,15\\,2\\,14\\,13 > [width="99%"]').should("be.visible")
        cy.get('#tr_2009\\|\\|2 > td.copy > [style="position: relative; display: block;"] > :nth-child(3) > .copy').click()
        cy.get(':nth-child(10) > .copy').click()
        cy.get('#hd_2010\\|\\|15 > [width="99%"]').should("be.visible")
        cy.get('#tr_2010\\|\\|15 > .copy').should("be.visible")
        cy.get(':nth-child(4) > .sorting_1 > .clinicCheck').click()
        cy.wait(1000)
        cy.get('[name="submit1"]').click()

                
//B.4 INCENTIVES FOR PARTICIPATION
        cy.get('#hd_0\\|\\| > [width="99%"]').should("be.visible")
        cy.get('[inputvalue="1"] > #q_83_1951').click()
        cy.get('#hd_1951\\|\\|1 > [width="99%"]').should("be.visible")
        cy.get('.odd > td.copy > [style="position: relative; display: block;"] > div > .copy').click()
        cy.get('[name="submit1"]').click()


//C.1 DATA SOURCES
        cy.get('#hd_0\\|\\| > [width="99%"]').should("be.visible")
        cy.get('[style="display: table-cell; padding: 5px 0px 10px 0px;"]').should("be.visible")
        cy.get(':nth-child(1) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy').click()
        cy.get('#tbl_85_1122 > tbody > :nth-child(2) > td.copy').should("be.visible")
        cy.get('[style="position: relative; display: block;"] > :nth-child(4) > .copy').click()
        cy.get('#att_1994_3').should("be.visible")
        cy.get('.copy > .searchresults').should("be.visible")
        cy.get(':nth-child(4) > td.copy > [style="position: relative; display: block;"] > div > .copy').click()
        cy.get('#tr_1123\\|\\|1 > td.copy > .label').should("be.visible")
        cy.get('[inputvalue="1"] > #q_85_1280').click()
        cy.get(':nth-child(6) > td.copy > [style="position: relative; display: block;"] > div > .copy').click()
        cy.get('#tr_1125\\|\\|1 > td.copy > .label').should("be.visible")
        cy.get('[inputvalue="0"] > #q_85_1281').click()
        cy.get('[name="submit1"]').click()


//DATA SECURITY
cy.get('[qid="h_1848"] > [width="99%"]').should("be.visible")
cy.get('[qid="h_2146"] > [width="99%"]').should("be.visible")
cy.get('[style="position: relative; display: block;"] > div > .copy').click()
cy.get('[style="border-top:0px;"] > tbody > tr > [width="99%"]').should("be.visible")
cy.get('[name="submit1"]').click()



//CTRC ADDENDUM - INTRODUCTION
cy.get('[qid="h_1381"] > [width="99%"] > div').should("be.visible")
cy.get('[qid="h_1693"] > [width="99%"]').should("be.visible")
cy.get(':nth-child(1) > td.copy > [style="position: relative; display: block;"] > div > .copy').click()
cy.get('[name="submit1"]').click()


//CTRC ADDENDUM - CTRC CLINICAL FACILITIES AND NURSING SERVICES - OUTPATIENT CLINIC
cy.get('[style="width: 100%;"]').should("be.visible")
cy.get('[name="submit1"]').click()

  
//CTRC ADDENDUM - CTRC BILLING AND COST ASSIGNMENT SHEET
cy.get('[style="width: 100%;"]').should("be.visible")
cy.get('[name="submit1"]').click()


//CONSENT FORMS
cy.get('[style="padding:15px;"] > .button').click()

//ATTACHMENTS         
cy.get('#btnContinue').click()

//APPROVING DEPTS        
cy.get('[style="padding:20px 20px 30px 20px;text-align:center;"] > .button').click()


//COVER MEMO / SUBMIT        
cy.get('.saveNote').click()
//cy.get('.tablemainsub-sectioncontent-bottom > [align="center"] > .routingModal').click()
cy.get('#modalPopup').should("be.visible")
cy.get('.iAgreeCheckbox').click()
cy.get('.proceedForm').should("be.visible")
cy.get('.buttons > .buttonEformYellow').click()




                      });
                    }); 
                  });
                });         
             });
          });
       });
    });
