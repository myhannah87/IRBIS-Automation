describe('Login', () => {
  beforeEach (() => {
    cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm');
   // cy.visit('https://orisdev.research.unc.edu/irb_maint/eform_screens.cfm?MasterId=382963&ScreenId=121');
    //cy.get('title')
      //  .invoke('text')
        //.should('equal', '\nIRB \n') 
    cy.get('input#username.long')
        .type('mhannah1').should('have.value', 'mhannah1')  
    cy.get('input#password.long')
        .type('test{Enter}')
});



describe('Create EXEMPT Application',  () => {
  it('Create EXEMPT', () => {
      cy.get('#nav > :nth-child(2) > a').click()
      cy.get(':nth-child(2) > .wizardLinks1').click()
      cy.get('#dashboard').should("be.visible")
      cy.get('[style="padding: 10px 10px 5px 10px;"]').should("be.visible")
      cy.get(':nth-child(2) > .wizardLinks1').click()
      cy.get('#wizard2').should("be.visible")
      cy.get('#btn2').click()
      //cy.wait(12000)


//REQUEST EXEMPTION
      cy.get('[qid="h_1114"] > [width="99%"]').should("be.visible")
      //cy.get('[inputvalue="1"] > #q_93_1115').click()
      //cy.get('#h_1146').should('contain', 'Sorry, your study will not qualify for an exemption.')
      cy.get('[inputvalue="0"] > #q_93_1115').click()
      
      //CATEGORY 1
      cy.get('[qid="q_1052"] > [style="display: table-cell; padding: 5px 0px 10px 0px;"]').should("be.visible")
      
      //CATEGORY 2     
      cy.get('[inputvalue="0"] > #q_93_1147').click()
      cy.get('#tbl_93_1058 > tbody > :nth-child(1) > td.copy > [style="position: relative; display: block;"] > div').should("be.visible")
      cy.get('#tbl_93_1058 > tbody > :nth-child(2) > td.copy > [style="position: relative; display: block;"] > div').should("be.visible")
      cy.get('#tbl_93_1058 > tbody > :nth-child(2) > td.copy > [style="position: relative; display: block;"] > div > .copy').click()
      cy.get('#tbl_93_1058 > tbody > :nth-child(3) > td.copy > [style="position: relative; display: block;"] > div').should("be.visible")
      cy.get('#tbl_93_1058 > tbody > :nth-child(4) > td.copy > [style="position: relative; display: block;"] > div').should("be.visible")
      cy.get('#tbl_93_1058 > tbody > :nth-child(6) > td.copy > [style="position: relative; display: block;"] > div').should("be.visible")
      cy.get('#tbl_93_1058 > tbody > :nth-child(7) > td.copy > [style="position: relative; display: block;"] > div').should("be.visible")
      cy.get('#tbl_93_1058 > tbody > :nth-child(7) > td.copy > [style="position: relative; display: block;"] > div > .copy').click()
      cy.get('#tbl_93_1058 > tbody > :nth-child(8) > td.copy > [style="position: relative; display: block;"] > div').should("be.visible")
      cy.get('#tbl_93_1058 > tbody > :nth-child(8) > td.copy > [style="position: relative; display: block;"] > div').should("be.visible")
      cy.get('#tbl_93_1058 > tbody > :nth-child(9) > td.copy > .label > mark').should("be.visible")
      cy.get('#q_93_1068').type('My Exempt test')
      
      //CATEGORY 3 
      cy.get(':nth-child(1) > .copy > .label')
      cy.get('#tbl_93_1069 > tbody > :nth-child(2) > td.copy').should("be.visible")
      cy.get('#tbl_93_1069 > tbody > :nth-child(3) > td.copy').should("be.visible")
      cy.get('#tbl_93_1069 > tbody > :nth-child(4) > td.copy').should("be.visible")
      cy.get('#tbl_93_1069 > tbody > :nth-child(5) > .label').should("be.visible")
      cy.get('#tbl_93_1069 > tbody > :nth-child(6) > td.copy > [style="position: relative; display: block;"] > div').should("be.visible")
      cy.get('#tbl_93_1069 > tbody > :nth-child(7) > td.copy > [style="position: relative; display: block;"] > div').should("be.visible")
      cy.get('#tbl_93_1069 > tbody > :nth-child(8) > td.copy > [style="position: relative; display: block;"] > div').should("be.visible")
      cy.get('#tbl_93_1069 > tbody > :nth-child(9) > td.copy > .label').should("be.visible")
      cy.get('#q_93_1082').type('N/A')

      //CATEGORY 4 
      cy.get('[qid="h_1070"] > [width="99%"]').should("be.visible")
      cy.get('#tbl_93_1070 > tbody > :nth-child(1) > td.copy > [style="position: relative; display: block;"] > div').should("be.visible")
      cy.get('#tbl_93_1071 > tbody > :nth-child(2) > .label').should("be.visible")
      cy.get('#tbl_93_1070 > tbody > :nth-child(4) > td.copy > [style="position: relative; display: block;"] > div').should("be.visible")
      cy.get('#tbl_93_1070 > tbody > :nth-child(5) > td.copy > [style="position: relative; display: block;"] > div').should("be.visible")
      cy.get('#tbl_93_1070 > tbody > :nth-child(6) > td.copy > [style="position: relative; display: block;"] > div').should("be.visible")

      //CATEGORY 5 
      cy.get('[qid="h_1071"] > [width="99%"]').should("be.visible")
      cy.get('#tbl_93_1071 > tbody > :nth-child(1) > td.copy > [style="position: relative; display: block;"] > :nth-child(2)').should("be.visible")
      cy.get('#tbl_93_1071 > tbody > :nth-child(2) > .label').should("be.visible")
      cy.get('#tbl_93_1071 > tbody > :nth-child(3) > td.copy > [style="position: relative; display: block;"] > div').should("be.visible")
      cy.get('#tbl_93_1071 > tbody > :nth-child(4) > td.copy > [style="position: relative; display: block;"] > div').should("be.visible")
      cy.get('#tbl_93_1071 > tbody > :nth-child(5) > td.copy > [style="position: relative; display: block;"] > div').should("be.visible")

      //CATEGORY 6 
      cy.get('[qid="h_1072"] > [width="99%"]').should("be.visible")
      cy.get('#tbl_93_1072 > tbody > :nth-child(2) > .label').should("be.visible")
      cy.get('#tbl_93_1072 > tbody > :nth-child(3) > td.copy > [style="position: relative; display: block;"] > div').should("be.visible")
      cy.get('#tbl_93_1072 > tbody > :nth-child(4) > td.copy > [style="position: relative; display: block;"] > div').should("be.visible")
      cy.get('#tbl_93_1072 > tbody > :nth-child(5) > .label').should("be.visible")
      cy.get('#tbl_93_1072 > tbody > :nth-child(6) > td.copy > [style="position: relative; display: block;"] > div').should("be.visible")
      cy.get('#tbl_93_1072 > tbody > :nth-child(7) > td.copy > [style="position: relative; display: block;"] > div').should("be.visible")
      cy.get('#tbl_93_1072 > tbody > :nth-child(8) > td.copy > [style="position: relative; display: block;"] > div').should("be.visible")
      cy.get('[name="submit1"]').click()
      

//CONSENT PROCESS FOR EXEMPTIONS
      cy.get('#eFormScreen_Copy').should("be.visible")
      cy.get('#eFormScreen_ButtonCopy').click()
      cy.get(':nth-child(1) > :nth-child(1) > [colspan="2"]')
               //TYPE INTO CKEDITOR
      cy.get("iframe.cke_wysiwyg_frame").then(function($iframe) {
        const $body = $iframe.contents().find("body");
        console.log($body);
        cy.wrap($body[0]).type("My EXEMPT CYPRESS TEST");

      cy.get('[name="submit1"]').click()



//1. GENERAL INFORMATION SCREEN

    cy.get('#q_29_3').should("be.visible")
      .type('My Exempt Cypress Test')//.should('have.value', 'My NHSR Regression Test') 

    cy.get('#cke_q_29_554').should("be.visible")
      .type('My Exempt Cypress Test')//.should('have.value', 'My NHSR Regression Test') 

    cy.get('[qid="q_1855"] > td.copy').should("be.visible")
    cy.get('[inputvalue="0"] > #q_29_1855').click()
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
    cy.get('#noansweravailable').should("be.visible")
    cy.get('[qid="h_575"] > [width="99%"]').should("be.visible")
    cy.get('[inputvalue="1"] > #q_98_575').click()
    cy.get('[inputvalue="0"] > #q_98_575').click()
    cy.get('[qid="h_1318"] > [width="99%"]').should("be.visible")
    cy.get('#tbl_98_1318 > tbody > :nth-child(1) > td.copy > [style="position: relative; display: block;"] > :nth-child(2)').should("be.visible")
    cy.get('#tbl_98_1318 > tbody > :nth-child(2) > td.copy > [style="position: relative; display: block;"] > :nth-child(2)').should("be.visible")
    cy.get('#tbl_98_1318 > tbody > :nth-child(3) > td.copy > [style="position: relative; display: block;"] > :nth-child(2)').should("be.visible")
    cy.get('#tbl_98_1318 > tbody > :nth-child(4) > td.copy > [style="position: relative; display: block;"] > :nth-child(2)').should("be.visible")
    cy.get('#tbl_98_1318 > tbody > :nth-child(5) > td.copy > [style="position: relative; display: block;"] > :nth-child(2)').should("be.visible")
    cy.get('[qid="h_1940"] > [width="99%"]').should("be.visible")
    cy.get('[qid="h_1940"] > [width="99%"] > a').should("be.visible")
    cy.get('[inputvalue="1"] > #q_98_1940').click()
    cy.get('[inputvalue="1"] > #q_98_2248').click()
    cy.get('[qid="h_1941"] > [width="99%"]').should("be.visible")
    cy.get('[inputvalue="1"] > #q_98_1941').click()
    cy.get('#tbl_98_1257 > tbody > :nth-child(1) > td.copy > [style="position: relative; display: block;"] > div').should("be.visible")
    cy.get('#tbl_98_1257 > tbody > :nth-child(2) > td.copy > [style="position: relative; display: block;"] > div').should("be.visible")
    cy.get('#tbl_98_1257 > tbody > :nth-child(3) > td.copy > [style="position: relative; display: block;"] > div').should("be.visible")
    cy.get('#tbl_98_1257 > tbody > :nth-child(4) > td.copy > [style="position: relative; display: block;"] > div').should("be.visible")
    cy.get('#tbl_98_1257 > tbody > :nth-child(5) > td.copy > [style="position: relative; display: block;"] > div').should("be.visible")
    cy.get(':nth-child(6) > td.copy > [style="position: relative; display: block;"] > div').should("be.visible")
    cy.get(':nth-child(7) > td.copy > [style="position: relative; display: block;"] > div').should("be.visible")
    cy.get(':nth-child(8) > td.copy > [style="position: relative; display: block;"] > div').should("be.visible")
    cy.get('#tbl_98_1257 > tbody > :nth-child(9) > td.copy').should("be.visible")
    cy.get('[name="submit1"]').click()


//4.SCREENING QUESTIONS
    cy.get('[qid="h_1906"] > [width="99%"] > a').should("be.visible")
    cy.get('[qid="q_443"] > [style="padding:5px 10px 5px 0px;"] > table > tbody > tr > .label').should("be.visible")
    cy.get('[qid="h_1907"] > [width="99%"] > a').should("be.visible")
    cy.get('[qid="q_34"] > [style="padding:5px 10px 5px 0px;"] > table > tbody > tr > .label').should("be.visible")
    cy.get('[inputvalue="1"] > #q_10_34').click()
    cy.get('[qid="q_35"] > [style="padding:5px 10px 5px 0px;"] > table > tbody > tr > .label').should("be.visible")
    cy.get('[inputvalue="1"] > #q_10_35').click()
    cy.get('[inputvalue="1"] > #q_10_80').click()
    cy.get('[inputvalue="1"] > #q_10_79').click() 
    cy.get('[name="submit1"]').click()


// LOCATION
    cy.get('[inputvalue="0"] > #q_140_49').click()
    cy.get('[name="submit1"]').click()


// PRC SCREENING QUESTIONS
    cy.get('[qid="h_1908"] > [width="99%"]').should("be.visible")
    cy.get('[inputvalue="0"] > #q_129_1909').click() 
    cy.get('[inputvalue="0"] > #q_129_1913').click() 
    cy.get('[name="submit1"]').click()
    

//A.1 BACKGROUND AND RATIONALE
   
        //TYPE INTO CKEDITOR
    cy.get("iframe.cke_wysiwyg_frame").then(function($iframe) {
    const $body = $iframe.contents().find("body");
    console.log($body);
    cy.wrap($body[0]).type("My EXEMPT CYPRESS TEST");
    
    cy.get('[name="submit1"]').click()
   

//A.2 SUBJECTS
    cy.get('[qid="h_1272"] > [width="99%"]').should("be.visible")
    cy.get('#q_62_1272').type('100')
    cy.get('[qid="h_537"] > [width="99%"]').should("be.visible")
    cy.get('#q_62_537').type('50')
    cy.get('[qid="h_1894"] > [width="99%"]').should("be.visible")
      
      //TYPE INTO CKEDITOR
    cy.get("iframe.cke_wysiwyg_frame").then(function($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My EXEMPT CYPRESS TEST");
      
    cy.get('[qid="h_2079"] > [width="99%"]').should("be.visible")
    cy.get('[qid="q_2079"] > [style="display: table-cell; padding: 5px 0px 10px 0px;"]').should("be.visible")
    cy.get('[qid="h_37"] > [width="99%"]').should("be.visible")
    cy.get('[qid="q_37"] > [style="display: table-cell; padding: 5px 0px 10px 0px;"]').should("be.visible")
    cy.get('[qid="h_462"] > [width="99%"]').should("be.visible")
    cy.get('[qid="h_671"] > [width="99%"]').should("be.visible")
    
    //TYPE INTO CKEDITOR
    cy.get('#cke_2_contents > .cke_wysiwyg_frame').then(function($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My EXEMPT CYPRESS TEST2");

    cy.get('#q_62_1884')
     .should('contain', 'years')
     .and('contain', 'months')
     .and('contain', 'weeks')
     .and('contain', 'days')
    cy.get('#q_62_672').type('18')
    cy.get('#q_62_1274').should("be.visible")
    cy.get('#q_62_673').type('99')
    cy.get('[name="submit0"]').click()
    cy.get('[name="submit1"]').click()


//A.4 STUDY DESIGN, METHODS, AND PROCEDURES
    cy.get('[qid="h_692"] > [width="99%"]').should("be.visible")
    cy.get('[inputvalue="1"] > #q_64_692').click()
    cy.get('[qid="h_467"] > [width="99%"]').should("be.visible")

      //TYPE INTO CKEDITOR
    cy.get('#cke_1_contents > .cke_wysiwyg_frame').then(function($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My EXEMPT CYPRESS TEST A.4.2");

    cy.get('[qid="h_679"] > [width="99%"]').should("be.visible")
    cy.get('[qid="h_694"] > [width="99%"]').should("be.visible")

      //TYPE INTO CKEDITOR
    cy.get('#cke_2_contents > .cke_wysiwyg_frame').then(function($iframe) {
        const $body = $iframe.contents().find("body");
        console.log($body);
        cy.wrap($body[0]).type("My EXEMPT CYPRESS TEST A.4.4");  

    cy.get('[qid="h_881"] > [width="99%"]').should("be.visible")
    cy.get('[inputvalue="Yes"] > #q_64_881').should("be.visible")
    cy.get('[inputvalue="Yes"] > #q_64_881').click()

        //TYPE INTO CKEDITOR
    cy.get('#cke_3_contents > .cke_wysiwyg_frame').then(function($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My EXEMPT CYPRESS TEST A.4.5");  

    cy.get('[name="submit1"]').click() 
 

//A.4.A BIOMEDICAL METHODS AND PROCEDURES
    cy.get('[qid="h_1219"] > [width="99%"]').should("be.visible")
    cy.get('[inputvalue="1"] > #q_74_1219').click()
    cy.wait(1000)
    cy.get('#cke_1_contents > .cke_wysiwyg_frame').then(function($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My EXEMPT CYPRESS TEST A.4.A.1");
    cy.get('#cke_2_contents > .cke_wysiwyg_frame').then(function($iframe) {
        const $body = $iframe.contents().find("body");
        console.log($body);
        cy.wrap($body[0]).type("My EXEMPT CYPRESS TEST A.4.A.2");  
    cy.get('[qid="h_697"] > [width="99%"]').should("be.visible")
    cy.get('[inputvalue="1"] > #q_74_697').click()
    cy.get('#doc_697_424').should("be.visible")
    cy.get('[inputvalue="0"] > #q_74_697').click()
    cy.get('[qid="h_1298"] > [width="99%"]').should("be.visible")
    cy.get('#q_74_1298')  
    .should('contain', 'No')
     .and('contain', 'Exempt')
     .and('contain', 'Yes (Industry Sponsored)')
     .and('contain', 'Yes or Pending (Investigator Initiated)')
    
     // IND QUESTIONS
        //No
    cy.get('#q_74_1298').select('No') 
    cy.get(`#hd_1298\\|\\|No > [width="99%"]`).should("be.visible")
    cy.get('#tr_1298\\|\\|No > td.copy').should("be.visible")
    cy.get('#tr_1298\\|\\|No > td.copy > [style="position: relative; display: block;"] > :nth-child(2)').should("be.visible")
    cy.get('#tr_1298\\|\\|No > td.copy > [style="position: relative; display: block;"] > :nth-child(3)').should("be.visible")
    cy.get('td.copy > [style="position: relative; display: block;"] > :nth-child(4)').should("be.visible")
    cy.get('#tr_1298\\|\\|No > td.copy > [style="position: relative; display: block;"] > :nth-child(3) > .copy').click()
    cy.get('#att_1973_2 > .copyboldred').should("be.visible")
    cy.get('#att_1973_2 > a').should("be.visible")
        //Exempt
    cy.get('#q_74_1298').select('Exempt')
    cy.get('#att_1298_2').should("be.visible")
        //Yes Industry Sponsored
    cy.get('#q_74_1298').select('Yes (Industry Sponsored)')
    cy.get('[qid="h_1299"] > [width="99%"]').should("be.visible")
    cy.get('#q_74_1299').type('My IND Number')
    cy.get('#q_74_1300').type('The name of the party holding the IND')
    cy.get('#hd_1298\\|\\|Yes > [width="99%"]').should("be.visible")
    cy.get('#tr_1298\\|\\|Yes > td.copy > [style="position: relative; display: block;"] > :nth-child(2)').should("be.visible")
    cy.get('#tr_1298\\|\\|Yes > td.copy > [style="position: relative; display: block;"] > :nth-child(3)').should("be.visible")
        //Yes Industry Sponsored
    cy.get('#q_74_1298').select('Yes or Pending (Investigator Initiated)')       
    cy.get('#att_1298_4').should("be.visible")    
    cy.get('#hd_1298\\|\\|Yes\\ Investigator\\ Initiated > [width="99%"]').should("be.visible")
    cy.get('[qid="h_1299"] > [width="99%"]').should("be.visible")
    cy.get('[qid="h_1300"] > [width="99%"]').should("be.visible")
    
    cy.get('#q_74_1298').select('No') 

        //A.4.A.5 -> IDE
    cy.get('[qid="h_2063"] > [width="99%"]').should("be.visible")
    cy.get('[qid="q_2063"] > td.copy').should("be.visible")
    cy.get('[inputvalue="Investigator"] > #q_74_2063').click()
    cy.get('#doc_2063_1242').should("be.visible")
    cy.get('[inputvalue="Safety"] > #q_74_2063').click()
    cy.get('#doc_2063_1244').should("be.visible")
    cy.get('[inputvalue="Tool"] > #q_74_2063').click()
    cy.get('#hd_2063\\|\\|Tool > [width="99%"]').should("be.visible")
    cy.get('#doc_2063_1273').should("be.visible")
    cy.get('[inputvalue="None"] > #q_74_2063').click()
    
    cy.get('[inputvalue="Investigator"] > #q_74_2063').click()
         //A.4.A.5.A -> IDE
        cy.get('[inputvalue="IDE"] > #q_74_2063').click()
        cy.get('#doc_2063_1243').should("be.visible")
        cy.get('#hd_2063\\|\\|Investigator\\,IDE\\,Safety > [width="99%"]').should("be.visible")
        cy.get('#tr_2063\\|\\|Investigator\\,IDE\\,Safety > td.copy').should("be.visible")
          ////A.4.A.5.B IDE 
        cy.get('[inputvalue="Yes"] > #q_74_1304').click()
        cy.get('#doc_1304_846').should("be.visible")
        cy.get('[qid="h_1305"] > [width="99%"]').should("be.visible")
        cy.get('#q_74_1305').type('My IDE Number')
        cy.get('#hd_1304\\|\\|Yes\\,Waived\\,Exempt > [width="99%"]').should("be.visible")
        cy.get('#q_74_2064').type('My Manufacturer')
        cy.get('[qid="h_2065"] > [width="99%"]').should("be.visible")
        cy.get('[inputvalue="1"] > #q_74_2065').click()
        cy.get('#doc_2065_424').should("be.visible")
        cy.get('#hd_2065\\|\\|1 > [width="99%"]').should("be.visible")
        cy.get('#tr_2065\\|\\|1 > .copy').should("be.visible")
        cy.get('[qid="h_1306"] > [width="99%"]').should("be.visible")
        cy.get('#q_74_1306').type('The name of person or group that hold IDE')
        cy.get('[qid="h_2008"] > [width="99%"]').should("be.visible")
        cy.get('[qid="q_2008"] > td.copy > [style="position: relative; display: block;"] > :nth-child(2)').should("be.visible")
        cy.get('[qid="q_2008"] > td.copy > [style="position: relative; display: block;"] > :nth-child(3)').should("be.visible")
        cy.get('#hd_1304\\|\\|Yes\\,Waived\\,Exempt\\,NoFDA > [width="99%"]').should("be.visible")
        cy.get('#tr_1304\\|\\|Yes\\,Waived\\,Exempt\\,NoFDA > [style="display: table-cell; padding: 5px 0px 10px 0px;"] > [style="width:95%; text-align: left; padding: 0 0 10px 20px;"] > a').click()

        cy.get('#eformDivCollection').should("be.visible")
        cy.get('.eform_div_odd > .label').should("be.visible")
        cy.get('[qid="q_708"] > .label').should("be.visible")
        cy.get('[qid="q_708"] > .copy > #q_74_708').type('My Device Name')
        cy.get('[qid="q_883"] > .label').should("be.visible")
        cy.get('[qid="q_883"] > .copy > #q_74_883').type('My Brief Description of device')
        cy.get('[qid="q_710"] > .label').should("be.visible")
        cy.get('[qid="q_710"] > .copy > #q_74_710').type('My decription of the use of the device in this study')
        cy.get('[qid="q_1309"] > .copy > .copyboldred').should("be.visible")
        cy.get('form > #tbl_74_707 > tbody > :nth-child(5) > .copy > [type="submit"]').click()
        cy.get('#coll_707 > .tablemainsub2').should("be.visible")
              //IDE vs NSF
        cy.get('[inputvalue="NoFDA"] > #q_74_1304').click()
        cy.get('#hd_1304\\|\\|NoFDA > [width="99%"]').should("be.visible")
        cy.get('#tr_1304\\|\\|NoFDA > td.copy').should("be.visible")
        cy.get('[inputvalue="Exempt"] > #q_74_2067').click()
        cy.get('#hd_2067\\|\\|Exempt > [width="99%"]').should("be.visible")
        cy.wait(1000)
        cy.get('[inputvalue="NSR"] > #q_74_2067').click()
        cy.get('#hd_2067\\|\\|NSR > [width="99%"] > a').should("be.visible")

        cy.get('[qid="h_884"] > [width="99%"]').should("be.visible")
        cy.get('[qid="q_884"] > [style="display: table-cell; padding: 5px 0px 10px 0px;"]').should("be.visible")
        cy.get(':nth-child(1) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy').click()
        cy.get('#att_885_1').should("be.visible")
        cy.get(':nth-child(4) > td.copy > [style="position: relative; display: block;"] > div > .copy').click()
        cy.get('#tr_889\\|\\|1 > .copy > .searchresults').should("be.visible")
        cy.get(':nth-child(7) > td.copy > [style="position: relative; display: block;"] > div > .copy').click()
        cy.get('#tr_890\\|\\|1 > .copy > .searchresults').should("be.visible")
        cy.get(':nth-child(9) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy').click()
        cy.get('#att_2044_1').should("be.visible")
        cy.get(':nth-child(10) > td.copy > [style="position: relative; display: block;"] > div > .copy').click()
        cy.get('#tr_891\\|\\|1 > td.copy').should("be.visible")
        cy.get('[inputvalue="2"] > #q_74_2259').click()
        cy.get('#doc_2259_1333').should("be.visible")
        cy.get(':nth-child(13) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy').click()
        cy.get('#att_893_1').should("be.visible")
        cy.get(':nth-child(15) > td.copy > [style="position: relative; display: block;"] > div > .copy').click()
        cy.get('#hd_2168\\|\\|1 > [width="99%"]').should("be.visible")
        cy.get('#tr_2168\\|\\|1 > td.copy > [inputvalue="1"]').should("be.visible")
        cy.get('[inputvalue="2"] > #q_74_2169').click()
        cy.get('[qid="h_2170"] > [width="99%"]').should("be.visible")
        cy.get('[qid="q_2170"] > td.copy').should("be.visible")
        cy.get('[qid="h_2171"] > [width="99%"]').should("be.visible")
        cy.get('#q_74_2171').should("be.visible")
        cy.get('[qid="h_2172"] > [width="99%"]').should("be.visible")
        cy.get('#q_74_2172').should("be.visible")
        cy.get('[qid="h_1379"] > [width="99%"]').should("be.visible")
        cy.get('[inputvalue="1"] > #q_74_1379').click()
        cy.get('[qid="h_1989"] > [width="99%"]').should("be.visible")
        cy.get('#q_74_1989').should("be.visible").should("be.visible")
        cy.get('[qid="h_1380"] > [width="99%"]').should("be.visible")
        cy.get('[inputvalue="1"] > #q_74_1380').click()
        cy.get('#doc_1380_424').should("be.visible")
        cy.get('[inputvalue="0"] > #q_74_1380').click()
        cy.get('#doc_1380_425').should("be.visible")
        cy.get('[name="submit1"]').click()
        

//A.6 RISKS AND MEASURES TO MINIMIZE RISKS
        cy.get('[qid="h_744"] > [width="99%"] > p').should("be.visible")
        cy.get('[qid="q_745"] > [width="99%"]').should("be.visible")
        cy.get('[qid="h_750"] > [width="99%"]').should("be.visible")
        cy.get('[qid="h_751"] > [width="99%"]').should("be.visible")
        cy.get('[qid="h_759"] > [width="99%"]').should("be.visible")
        cy.get('[qid="q_752"] > [width="99%"]').should("be.visible")
        cy.get('[qid="h_766"] > [width="99%"]').should("be.visible")
        cy.get('[qid="q_753"] > [width="99%"]').should("be.visible")
        cy.get('[qid="h_771"] > [width="99%"]').should("be.visible")
        cy.get('[qid="q_754"] > [width="99%"]').should("be.visible")
        cy.get('[qid="h_775"] > [width="99%"]').should("be.visible")
        cy.get('[qid="h_1043"] > [width="99%"]').should("be.visible")
        cy.get('[inputvalue="1"] > #q_66_1044').click()
        cy.get('#cke_7_contents > .cke_wysiwyg_frame').then(function($iframe) {
          const $body = $iframe.contents().find("body");
          console.log($body);
          cy.wrap($body[0]).type("My EXEMPT CYPRESS TEST A.6.12");
         cy.get('[name="submit1"]').click()


//A.9 IDENTIFIERS
        cy.get('[qid="q_792"] > [width="99%"]').should("be.visible")
        cy.get(':nth-child(8) > td.copy > [style="position: relative; display: block;"] > div > .copy').click()
        cy.get('[inputvalue="1"] > #q_69_1021').click()
        cy.get('#doc_1021_424').should("be.visible")
        cy.get('#hd_1021\\|\\|1 > [width="99%"]').should("be.visible")
        cy.get('.cke_wysiwyg_frame').then(function($iframe) {
          const $body = $iframe.contents().find("body");
          console.log($body);
          cy.wrap($body[0]).type("My EXEMPT CYPRESS TEST A.9.3");
          cy.get('[name="submit1"]').click()



//A.10 CONFIDENTIALITY OF THE DATA
        cy.get('[qid="h_814"] > [width="99%"]')
        cy.get('#cke_1_contents > .cke_wysiwyg_frame').then(function($iframe) {
          const $body = $iframe.contents().find("body");
          console.log($body);
          cy.wrap($body[0]).type("My EXEMPT CYPRESS TEST A.10.1");
        cy.get('[inputvalue="1"] > #q_70_1369').click()
        cy.get('#cke_2_contents > .cke_wysiwyg_frame').then(function($iframe) {
          const $body = $iframe.contents().find("body");
          console.log($body);
          cy.wrap($body[0]).type("My EXEMPT CYPRESS TEST A.10.2");
        cy.get('[name="submit1"]').click()
         

//B.1 METHODS OF RECRUITING
        cy.get('[qid="h_945"] > [width="99%"]').should("be.visible")
        cy.get(':nth-child(2) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy').click()
        cy.get('#att_2222_1').should("be.visible")
        cy.get('#tr_2222\\|\\|MyChart > .copy > .label').should("be.visible")
        cy.get(':nth-child(4) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy').click()
        cy.get('#att_947_1').should("be.visible")
        cy.get(':nth-child(5) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy').click()
        cy.get('#att_960_1').should("be.visible")
        cy.get(':nth-child(6) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy').click()
        cy.get('#att_1371_1').should("be.visible")
        cy.get(':nth-child(7) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy').click()
        cy.get('#att_961_1').should("be.visible")
        cy.get(':nth-child(8) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy').click()
        cy.get('#att_962_1').should("be.visible")
        cy.get(':nth-child(9) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy').click()
        cy.get('#att_963_1').should("be.visible")
        cy.get(':nth-child(10) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy').click()
        cy.get('#att_964_1').should("be.visible")
        cy.get(':nth-child(11) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy').click()
        cy.get('#att_965_1').should("be.visible")
        cy.get(':nth-child(12) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy').click()
        cy.get('#att_966_1').should("be.visible")
        cy.get(':nth-child(13) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy').click()
        cy.get('#att_1882_1').should("be.visible")
        cy.get(':nth-child(14) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy').click()
        cy.get('#att_968_1').should("be.visible")
        cy.get('#tr_968\\|\\|1 > td.copy > .label').should("be.visible")
        cy.get('#q_78_969').type('My Other explanation for B.1.1')
        cy.get(':nth-child(16) > td.copy > [style="position: relative; display: block;"] > div > .copy').click()
        cy.get('#tr_2291\\|\\|1 > td.copy').should("be.visible")
        cy.get('#q_78_2292').type('My Social Media explanation B.1.1')
        cy.get('[qid="h_2236"] > [width="99%"]').should("be.visible")
        cy.get('[qid="q_2236"] > td.copy').should("be.visible")
        cy.get('[inputvalue="1"] > #q_78_2236').click()
        cy.get('[qid="h_2237"] > [width="99%"]').should("be.visible")
        cy.get('[qid="h_948"] > [width="99%"]').should("be.visible")
        cy.get('#cke_1_contents > .cke_wysiwyg_frame').then(function($iframe) {
          const $body = $iframe.contents().find("body");
          console.log($body);
          cy.wrap($body[0]).type("My EXEMPT CYPRESS TEST B.1.3");
        cy.get('[qid="h_949"] > [width="99%"]').should("be.visible")
        cy.get('#cke_2_contents > .cke_wysiwyg_frame').then(function($iframe) {
          const $body = $iframe.contents().find("body");
          console.log($body);
          cy.wrap($body[0]).type("My EXEMPT CYPRESS TEST B.1.4");
        cy.get('[name="submit1"]').click()


//Part C.1 DATA SOURCES
        cy.get('[qid="h_1122"] > [width="99%"]').should("be.visible")
        cy.get('[qid="q_1122"] > [style="display: table-cell; padding: 5px 0px 10px 0px;"]').should("be.visible")
        cy.get(':nth-child(1) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy').click()
        cy.get('#tbl_85_1122 > tbody > :nth-child(2) > td.copy').should("be.visible")
        cy.get('[style="position: relative; display: block;"] > :nth-child(4) > .copy').click()
        cy.get('#att_1994_3').should("be.visible")
        cy.get('.copy > .searchresults').should("be.visible")
        cy.get(':nth-child(4) > td.copy > [style="position: relative; display: block;"] > div > .copy').click()
        cy.get('#tr_1123\\|\\|1 > td.copy > .label').should("be.visible")
        cy.get('[inputvalue="0"] > #q_85_1280').click()
        cy.get(':nth-child(6) > td.copy > [style="position: relative; display: block;"] > div > .copy').click()
        cy.get('#tr_1125\\|\\|1 > td.copy > .label').should("be.visible")
        cy.get('[inputvalue="1"] > #q_85_1281').click()
        cy.get(':nth-child(15) > td.copy > .label').should("be.visible")
        cy.get('#q_85_1133').should("be.visible")
        cy.get('[qid="h_1283"] > [width="99%"]').should("be.visible")
        cy.get('.cke_wysiwyg_frame').then(function($iframe) {
          const $body = $iframe.contents().find("body");
          console.log($body);
          cy.wrap($body[0]).type("My EXEMPT CYPRESS TEST C.1.2");
        cy.get('[qid="h_1284"] > [width="99%"]').should("be.visible")
        cy.get('[inputvalue="1"] > #q_85_1284').click()
        cy.get('[name="submit1"]').click()


//Part C.2 ExCODING AND DATA USE AGREEMENTS
        cy.get('#hd_0\\|\\| > [width="99%"]').should("be.visible")
        cy.get('[inputvalue="Yes"] > #q_87_635').click()
        cy.get('[qid="h_637"] > [width="99%"]').should("be.visible")
        cy.get('[inputvalue="No"] > #q_87_637').click()
        cy.get('#hd_637\\|\\|No > [width="99%"]').should("be.visible")
        cy.get(':nth-child(1) > td.copy > .label').should("be.visible")
        cy.get('[inputvalue="Yes"] > #q_87_639').click()
        cy.get(':nth-child(2) > .copy > .label').should("be.visible")
        cy.get('#q_87_2145').should("be.visible")
        cy.get(':nth-child(3) > td.copy > .label').should("be.visible")
        cy.get('[inputvalue="No"] > #q_87_640').click()
        cy.get(':nth-child(4) > td.copy > .label').should("be.visible")
        cy.get('[inputvalue="Yes"] > #q_87_641').click()
        cy.get(':nth-child(5) > td.copy > .label').should("be.visible")
        cy.get('[inputvalue="No"] > #q_87_642').click()
        cy.get(':nth-child(6) > td.copy').should("be.visible")
        cy.get('[qid="h_619"] > [width="99%"]').should("be.visible")
        cy.get('[inputvalue="No"] > #q_87_619').click()
        cy.get('#hd_619\\|\\|No > [width="99%"]').should("be.visible")
        cy.get('.cke_wysiwyg_frame').then(function($iframe) {
          const $body = $iframe.contents().find("body");
          console.log($body);
          cy.wrap($body[0]).type("My EXEMPT CYPRESS TEST C.2.1");
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
        cy.get('.tablemainsub-sectioncontent-bottom > [align="center"] > .routingModal').click()
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
                       });  
                     });  
                   });
                 });
               });
             });
            });
          });
        });
      });
    });
  });






