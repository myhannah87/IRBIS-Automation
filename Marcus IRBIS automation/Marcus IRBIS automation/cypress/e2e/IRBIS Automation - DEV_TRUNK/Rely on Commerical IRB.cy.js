describe("Create Rely on Commerical IRB Application", () => {
  const submissionOwner = "mhannah1";
  const PI = "cjfennim";
  const IRBAnalyst = "jfuse";
  const deptApprover = "jslatt";
  const localDeptApprover = "anlyt";

  it("Create Rely on Commerical IRB", () => {
    cy.visit(Cypress.config().devTrunkBaseUrl);

    cy.get("input#username.long")
      .type("mhannah1")
      .should("have.value", submissionOwner);
    cy.get("input#password.long").type("test{Enter}");
    cy.get("#nav > :nth-child(2) > a").click();
    cy.get("#dashboard").should("be.visible");
    cy.get('[style="padding: 10px 10px 5px 10px;"]').should("be.visible");
    cy.get(":nth-child(2) > .wizardLinks1").click();
    cy.get("#wizard4").should("be.visible");
    cy.get("#btn4").click();
    cy.get("#wizard11").should("be.visible");
    cy.get("#wizard11 > .wizardButtons > .btn-primary").click();
    //cy.wait(15000)

    //RELY ON INFORMATION
    cy.get('[qid="h_1984"] > [width="99%"]').should("be.visible");
    cy.get('[qid="h_1991"] > [width="99%"]').should("be.visible");
    cy.get('[qid="h_1985"] > [width="99%"]').should("be.visible");
    cy.get("#q_60_1985")
      .should("contain", "Advarra")
      .and("contain", "Chesapeake")
      .and("contain", "Schulman Associates")
      .and("contain", "Sterling")
      .and("contain", "WIRB-Copernicus Group");
    cy.get("#q_60_1985").select("Advarra");
    cy.get('[qid="h_2260"] > [width="99%"]').should("be.visible");
    cy.get(
      '[qid="q_2260"] > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get('[qid="h_2261"] > [width="99%"]').should("be.visible");
    cy.get(
      '[qid="q_2261"] > td.copy > [style="position: relative; display: block;"] > div > .copy'
    ).click();
    cy.get('[qid="h_2262"] > [width="99%"]').should("be.visible");
    cy.get(
      '[qid="q_2262"] > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get('#hd_2262\\|\\|1\\,2\\,3 > [width="99%"]').should("be.visible");
    cy.get(
      '[qid="q_2262"] > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get(
      '[style="position: relative; display: block;"] > :nth-child(3) > .copy'
    ).click();
    cy.get('#hd_2262\\|\\|1\\,2\\,3 > [width="99%"]').should("be.visible");
    cy.get(
      '[style="position: relative; display: block;"] > :nth-child(3) > .copy'
    ).click();
    cy.get(
      '[style="position: relative; display: block;"] > :nth-child(4) > .copy'
    ).click();
    cy.get('#hd_2262\\|\\|1\\,2\\,3 > [width="99%"]').should("be.visible");
    cy.get("#q_60_2263").type("My Rely on Commerical IRB TEST 5.A.2");
    cy.get('[name="submit1"]').click();

    //1. GENERAL INFORMATION SCREEN

    cy.get("#q_29_3")
      .should("be.visible")
      .type("My Rely on Commerical IRB Cypress Test"); //.should('have.value', 'My Rely on Commerical Regression Test')

    cy.get(".cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Rely on Commerical IRB CYPRESS TEST");
    });
    cy.get('[name="submit1"]').click();

    //2. PROJECT PERSONNEL SCREEN
    //PROJECT PERSONNEL WIZARD MODAL (SEARCH PESRONNEL BY RAMSES NUMBER)
    cy.get("#modalPopup").should("be.visible");
    cy.get("#first_name").should("be.visible");
    cy.get("#last_name").should("be.visible");
    cy.get("#pid").should("be.visible");
    cy.get(
      ':nth-child(3) > .tablemainsub > tbody > [align="center"] > .copy > .seachSubmit'
    ).should("be.visible");
    cy.get(
      ':nth-child(3) > .tablemainsub > tbody > [align="center"] > .copy > .button'
    ).should("be.visible");
    cy.get("#ramses_number").should("be.visible");
    cy.get(
      ':nth-child(4) > .tablemainsub > tbody > [align="center"] > .copy > .seachSubmit'
    ).should("be.visible");
    cy.get(
      ':nth-child(4) > .tablemainsub > tbody > [align="center"] > .copy > .seachSubmit'
    ).should("be.visible");
    //cy.get('[style="width: 100%; text-align: center; margin-top: 10px;"] > .button').click()
    cy.get("#first_name").type("Chuck");
    cy.get("#last_name").type("Fennimore");
    cy.get(
      ':nth-child(3) > .tablemainsub > tbody > [align="center"] > .copy > .seachSubmit'
    ).click();
    cy.get("#modalPopup").should("be.visible");
    cy.get('[width="40%"] > a').click();
    cy.get(".sorting_asc > .DataTables_sort_wrapper").should("be.visible");
    cy.get(
      '[aria-label="Sponsor: activate to sort column ascending"] > .DataTables_sort_wrapper'
    ).should("be.visible");
    cy.get(
      '[aria-label="Title: activate to sort column ascending"] > .DataTables_sort_wrapper'
    ).should("be.visible");
    cy.get(":nth-child(1) > .sorting_1 > .copy").click();
    cy.get("#modalPopup").should("be.visible");
    cy.get(
      '[action="/irb_maint/index.cfm?event=eform.projectPersonnel.importProjectPersonnel"]'
    ).should("be.visible");
    cy.get(".divImportButtons > .button").should("be.visible");
    cy.get("#btnSubmitR").should("be.visible");
    cy.get(':nth-child(7) > tbody > .odd > [width="4%"] > input').click();
    cy.get(".importSubmit").click();
    //MAKE CHUCK PI / VERIFY PERSONNEL POP UP
    cy.get('[qid="h_1895"] > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="1"] > #q_2_1895').should("be.visible");
    cy.get('[inputvalue="0"] > #q_2_1895').click();
    cy.get('[qid="h_4"] > [width="99%"]').should("be.visible");
    cy.get(":nth-child(3) > :nth-child(6) > a").click();
    cy.get('[qid="q_11"] > .copy > #q_2_11').type("123456789");
    cy.get(
      '[qid="q_15"] > td.copy > [inputvalue="Principal Investigator"] > #q_2_15'
    ).click();
    cy.get('[inputvalue="Faculty Advisor"]').should("be.visible");
    cy.get('[inputvalue="Co-investigator"]').should("be.visible");
    cy.get('[inputvalue="Study Coordinator"]').should("be.visible");
    cy.get('[inputvalue="Research Assistant"]').should("be.visible");
    cy.get('[inputvalue="Regulatory Associate"]').should("be.visible");
    cy.get('[inputvalue="External Site PI"]').should("be.visible");
    cy.get('[inputvalue="Other"]').should("be.visible");
    //cy.get('#q_2_1276').should("be.visible")
    cy.get('[qid="q_550"] > td.copy > .label').should("be.visible");
    cy.get('[qid="q_550"] > td.copy > [inputvalue="1"] > #q_2_550').should(
      "be.visible"
    );
    cy.get('[qid="q_550"] > td.copy > [inputvalue="0"]').should("be.visible");
    cy.get(
      'form > #tbl_2_4 > tbody > :nth-child(14) > .copy > [type="button"]'
    ).should("be.visible");
    cy.get(
      'form > #tbl_2_4 > tbody > :nth-child(14) > .copy > [type="submit"]'
    ).click();
    cy.get(".liaisonValues").click();
    cy.get("#q_2_31").should("be.visible");
    cy.get('[name="submit0"]').should("be.visible");
    cy.get('[name="submit1"]').click();

    //3.FUNDING SOURCES
    cy.get('[qid="h_1205"] > [width="99%"]').should("be.visible");
    cy.get('[qid="q_1205"] > .copy').should("be.visible");
    cy.get('[qid="h_2045"] > [width="99%"]').should("be.visible");
    cy.get('[qid="q_2045"] > .copy').should("be.visible");
    cy.get('[qid="h_533"] > [width="99%"]').should("be.visible");

    //VERIFY EXTERNAL FUNDING SOURCES POPUP
    cy.get(
      '[qid="q_533"] > [style="display: table-cell; padding: 5px 0px 10px 0px;"] > [style="width:95%; text-align: left; padding: 0 0 10px 20px;"] > a'
    ).click();
    cy.get(".eform_div_odd > .label").should("be.visible");
    cy.get(
      "form > #tbl_98_533 > tbody > :nth-child(1) > .copy > #ram_98_535"
    ).should("be.visible");
    cy.get(
      "form > #tbl_98_533 > tbody > :nth-child(2) > .copy > #q_98_535"
    ).should("be.visible");
    cy.get('[qid="q_1204"] > .copy > #q_98_1204').should("be.visible");
    cy.get('[qid="q_1954"] > .copy > #q_98_1954').should("be.visible");
    cy.get('[qid="q_1955"] > .copy > #q_98_1955').should("be.visible");
    cy.get('[qid="q_551"] > .copy > #q_98_551').should("be.visible");
    cy.get(
      'form > #tbl_98_533 > tbody > :nth-child(7) > .copy > [type="submit"]'
    ).should("be.visible");
    cy.get(
      'form > #tbl_98_533 > tbody > :nth-child(7) > .copy > [type="button"]'
    ).click();

    cy.get("#coll_533").should("be.visible");
    cy.get(".odd > :nth-child(7) > a").should("be.visible");
    cy.get(".odd > :nth-child(8) > a").should("be.visible");
    cy.get('[qid="h_1286"] > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="1"] > #q_98_1286').click();

    //VERIFY INTERNAL FUNDING SOURCES POPUP
    cy.get(
      '#tr_1286\\|\\|1 > [style="display: table-cell; padding: 5px 0px 10px 0px;"] > [style="width:95%; text-align: left; padding: 0 0 10px 20px;"] > a'
    ).click();
    cy.get('[qid="q_1150"] > .copy > #q_98_1150').should("be.visible");
    cy.get('[qid="q_1151"] > .copy > #q_98_1151').should("be.visible");
    cy.get('[qid="q_1156"] > .copy > #q_98_1156').should("be.visible");
    cy.get(
      'form > #tbl_98_1149 > tbody > :nth-child(4) > .copy > [type="submit"]'
    ).should("be.visible");
    cy.get(
      'form > #tbl_98_1149 > tbody > :nth-child(4) > .copy > [type="button"]'
    ).click();

    cy.get('[style="padding: 0 0 10px 20px;"] > a').click();
    cy.wait(1000);
    cy.get("#noansweravailable").should("be.visible");
    // cy.get('[qid="h_575"] > [width="99%"]').should("be.visible")
    // cy.get('[inputvalue="1"] > #q_98_575').click()
    cy.get('[qid="h_1318"] > [width="99%"]').should("be.visible");
    cy.get(
      '#tbl_98_1318 > tbody > :nth-child(1) > td.copy > [style="position: relative; display: block;"] > :nth-child(2)'
    ).should("be.visible");
    cy.get(
      '#tbl_98_1318 > tbody > :nth-child(2) > td.copy > [style="position: relative; display: block;"] > :nth-child(2)'
    ).should("be.visible");
    cy.get(
      '#tbl_98_1318 > tbody > :nth-child(3) > td.copy > [style="position: relative; display: block;"] > :nth-child(2)'
    ).should("be.visible");
    cy.get(
      '#tbl_98_1318 > tbody > :nth-child(4) > td.copy > [style="position: relative; display: block;"] > :nth-child(2)'
    ).should("be.visible");
    cy.get(
      '#tbl_98_1318 > tbody > :nth-child(5) > td.copy > [style="position: relative; display: block;"] > :nth-child(2)'
    ).should("be.visible");
    cy.get('[qid="h_1940"] > [width="99%"]').should("be.visible");
    cy.get('[qid="h_1940"] > [width="99%"] > a').should("be.visible");
    cy.get('[inputvalue="1"] > #q_98_1940').click();
    cy.get('[qid="h_2248"] > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="0"] > #q_98_2248').click();
    cy.get('[qid="h_1941"] > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="1"] > #q_98_1941').click();
    cy.get('[name="submit1"]').click();

    //4.SCREENING QUESTIONS
    cy.get(
      '[qid="q_443"] > [style="padding:5px 10px 5px 0px;"] > table > tbody > tr > .label'
    ).should("be.visible");
    cy.get(
      '[qid="q_443"] > [style="padding:5px 10px 5px 0px;"] > table > tbody > tr > .copy'
    ).should("be.visible");
    cy.get(
      '[qid="q_34"] > [style="padding:5px 10px 5px 0px;"] > table > tbody > tr > .label'
    ).should("be.visible");
    cy.get(
      '[qid="q_34"] > [style="padding:5px 10px 5px 0px;"] > table > tbody > tr > .copy'
    ).should("be.visible");
    cy.get(
      '[qid="q_35"] > [style="padding:5px 10px 5px 0px;"] > table > tbody > tr > .label'
    ).should("be.visible");
    cy.get(
      '[qid="q_35"] > [style="padding:5px 10px 5px 0px;"] > table > tbody > tr > .copy'
    ).should("be.visible");
    cy.get(
      '[qid="q_80"] > [style="padding:5px 10px 5px 0px;"] > table > tbody > tr > .label'
    ).should("be.visible");
    cy.get('[inputvalue="1"] > #q_10_80').click();
    cy.get(
      '[qid="q_79"] > [style="padding:5px 10px 5px 0px;"] > table > tbody > tr > .label'
    ).should("be.visible");
    cy.get('[inputvalue="1"] > #q_10_79').click();
    cy.get(
      '[qid="q_713"] > [style="padding:5px 10px 5px 0px;"] > table > tbody > tr > .label'
    ).should("be.visible");
    cy.get(
      '[qid="q_713"] > [style="padding:5px 10px 5px 0px;"] > table > tbody > tr > .copy'
    ).should("be.visible");
    cy.get('[name="submit1"]').click();

    // LOCATION
    cy.get('[inputvalue="0"] > #q_140_49').click();
    cy.get('[name="submit1"]').click();

    // ONOCOLOGY SPECIFIC QUESTIONS
    //PRC SCREENING QUESTIONS
    cy.get('[qid="h_1909"] > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="1"] > #q_129_1909').click();
    cy.get('#hd_1909\\|\\|1 > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="1"] > #q_129_1910').click();
    cy.get('#hd_1910\\|\\|1 > [width="99%"]').should("be.visible");
    cy.get('[name="submit1"]').click();

    //INVESTIGATOR INITIATED STUDIES
    cy.get('#hd_0\\|\\| > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="1"] > #q_103_1924').click();
    cy.get('#hd_1924\\|\\|1 > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="Yes"] > #q_103_1223').click();
    cy.get('#hd_1223\\|\\|Yes > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="No"] > #q_103_1225').click();
    cy.get('#hd_1225\\|\\|No > [width="99%"]').should("be.visible");
    cy.get('[name="submit1"]').click();

    //OTHER CPO SERVICES
    cy.get('[qid="h_1925"] > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="1"] > #q_105_1925').click();
    cy.get('#hd_1925\\|\\|1 > [width="99%"]').should("be.visible");
    cy.get('[name="submit1"]').click();

    //A.4.A BIOMEDICAL METHODS AND PROCEDURES
    cy.get('[qid="h_2228"] > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="1"] > #q_74_2228').click();
    cy.get("#doc_2228_424").should("be.visible");
    cy.get('#hd_2228\\|\\|1 > [width="99%"]').should("be.visible");
    //A.4.A.1 - Add investigational devices, drugs, biologics, or other substances pop up
    // cy.get('#noansweravailable').should("be.visible")
    cy.get(
      '[style="width:95%; text-align: left; padding: 0 0 10px 20px;"] > a'
    ).click();
    cy.get("#eformDivCollection").should("be.visible");
    cy.get('[qid="q_2230"] > .copy > #q_74_2230').type(
      "My Rely On Commerical IRB A.4.A.1 test"
    );
    cy.get('[qid="q_2231"] > td.copy > .label').should("be.visible");
    cy.get('[qid="q_2231"] > td.copy > [inputvalue="IND"] > #q_74_2231').should(
      "be.visible"
    );
    cy.get(
      '[qid="q_2231"] > td.copy > [inputvalue="IDE"] > #q_74_2231'
    ).click();
    cy.get('[qid="q_2232"] > .label').should("be.visible");
    cy.get('[qid="q_2232"] > .copy > #q_74_2232').type(
      "My Rely On Commerical IRB IND/IDE test"
    );
    cy.get('[qid="q_2233"] > td.copy > #q_74_2233').type(
      "My Rely On Commerical IRB Brief Description test"
    );
    cy.get(
      'form > #tbl_74_2229 > tbody > :nth-child(5) > .copy > [type="submit"]'
    ).click();

    cy.get('[qid="h_884"] > [width="99%"]').should("be.visible");
    cy.get(
      ':nth-child(1) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get("#att_885_1").should("be.visible");
    //cy.get(':nth-child(6) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy').click()
    cy.get(
      ':nth-child(7) > td.copy > [style="position: relative; display: block;"] > div > .copy'
    ).click();
    cy.get("#att_2044_1").should("be.visible");
    cy.get(
      ':nth-child(8) > td.copy > [style="position: relative; display: block;"] > div > .copy'
    ).click();
    cy.get("#tr_891\\|\\|1 > td.copy").should("be.visible");
    cy.get('[inputvalue="2"] > #q_74_2259').click();
    cy.get("#doc_2259_1333").should("be.visible");
    cy.get(
      ':nth-child(10) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get("#att_893_1").should("be.visible");
    cy.get(
      ':nth-child(11) > td.copy > [style="position: relative; display: block;"] > div > .copy'
    ).click();
    cy.get('[name="submit1"]').click();

    //A.9 IDENTIFIERS
    cy.get('#hd_0\\|\\| > [width="99%"]').should("be.visible");
    cy.get(
      ':nth-child(8) > td.copy > [style="position: relative; display: block;"] > div > .copy'
    ).click();
    cy.get('[name="submit1"]').click();

    //A.10 CONFIDENTIALITY OF THE DATA
    cy.get('[qid="h_817"] > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="1"] > #q_70_817').click();
    cy.wait(2000);

    cy.get("#cke_1_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Rely On Commerical IRB A.10.1 test");
    });

    cy.get('[qid="h_819"] > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="0"] > #q_70_819').click();
    cy.get('[inputvalue="1"] > #q_70_1369').click();

    cy.get("#cke_2_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Rely On Commerical IRB A.10.3 test");
    });

    cy.get('[name="submit1"]').click();

    //B.1 METHODS OF RECRUITING
    cy.get('[qid="h_945"] > [width="99%"]').should("be.visible");
    cy.get(
      ':nth-child(1) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get("#att_2222_1").should("be.visible");
    cy.get("#tr_2222\\|\\|MyChart > .copy > .label").should("be.visible");
    cy.get(
      ':nth-child(3) > td.copy > [style="position: relative; display: block;"] > div > .copy'
    ).click();
    cy.get(
      ':nth-child(4) > td.copy > [style="position: relative; display: block;"] > div > .copy'
    ).click();
    cy.get("#att_968_1").should("be.visible");
    cy.get("#q_78_969").should("be.visible");
    cy.get(
      ':nth-child(6) > td.copy > [style="position: relative; display: block;"] > div > .copy'
    ).click();
    cy.get("#q_78_2292").type("My Rely On Commerical IRB B.1.1 test");
    cy.get("#tr_2291\\|\\|1 > td.copy").should("be.visible");
    cy.get('[inputvalue="2"] > #q_78_2236').click();
    cy.get("#doc_2236_1313").should("be.visible");
    cy.get('[qid="h_2237"] > [width="99%"]').should("be.visible");
    cy.get('[name="submit1"]').click();

    //B.2 PROTECTED HEALTH INFORMATION (PHI)
    cy.get('[qid="h_1786"] > [width="99%"]').should("be.visible");
    cy.get('[qid="h_955"] > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="1"] > #q_79_955').click();
    // cy.get('[qid="h_1992"] > [width="99%"]').should("be.visible")
    // cy.get('[inputvalue="0"] > #q_79_1992').click()
    // cy.get('#hd_1992\\|\\|0 > [width="99%"]').should("be.visible")
    // cy.get('[qid="h_956"] > [width="99%"]').should("be.visible")
    // cy.get('#tbl_79_956 > tbody > :nth-child(1) > td.copy').should("be.visible")
    cy.get("#q_79_957").type(
      "My Rely On Commerical IRB B.2.1 test - List the data you are planning to collect for this purpose."
    );
    cy.get("#tbl_79_956 > tbody > :nth-child(2) > td.copy").should(
      "be.visible"
    );
    cy.get("#q_79_958").type(
      "My Rely On Commerical B.2.1 test - Describe how confidentiality/privacy will be protected prior to ascertaining the patients willingness to participate"
    );
    cy.get("#tbl_79_956 > tbody > :nth-child(3) > td.copy").should(
      "be.visible"
    );
    cy.get("#q_79_959").type(
      "My Rely On Commerical B.2.1 test - Describe when and how you will destroy PHI for individuals"
    );
    cy.get(":nth-child(4) > td.copy").should("be.visible");
    cy.get("#q_79_2293").type(
      "My Rely On Commerical B.2.1 test - Please explain how screening could not be practicably conducted without the waiver."
    );
    cy.get(":nth-child(5) > td.copy").should("be.visible");
    cy.get("#q_79_2294").type(
      "My Rely On Commerical B.2.1 test - Explain why it would not be possible to conduct the screening without the use of PHI"
    );
    cy.get('[qid="h_1785"] > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="1"] > #q_79_1785').click();
    cy.get("#doc_1785_424").should("be.visible");
    cy.get('#hd_1785\\|\\|1 > [width="99%"]').should("be.visible");
    cy.get('[name="submit1"]').click();

    //B.3 SUBJECT CONTACT, DURATION AND PRIVACY
    cy.get('#hd_0\\|\\| > [width="99%"]').should("be.visible");
    cy.get(
      '#tr_0\\|\\|0 > td.copy > [style="position: relative; display: block;"] > :nth-child(3) > .copy'
    ).click();
    cy.get('#hd_2009\\|\\|2 > [width="99%"]').should("be.visible");
    cy.get(
      '#tr_2009\\|\\|2 > td.copy > [style="position: relative; display: block;"] > :nth-child(3) > .copy'
    ).click();
    cy.get(
      '#hd_2010\\|\\|6\\,3\\,10\\,12\\,16\\,4\\,11\\,15\\,2\\,14\\,13 > [width="99%"]'
    ).should("be.visible");
    cy.get(
      '#tr_2009\\|\\|2 > td.copy > [style="position: relative; display: block;"] > :nth-child(3) > .copy'
    ).click();
    cy.get(":nth-child(10) > .copy").click();
    cy.get('#hd_2010\\|\\|15 > [width="99%"]').should("be.visible");
    cy.get("#tr_2010\\|\\|15 > .copy").should("be.visible");
    cy.get(":nth-child(4) > .sorting_1 > .clinicCheck").click();
    cy.wait(1000);
    cy.get('[name="submit1"]').click();

    //B.4 INCENTIVES FOR PARTICIPATION
    cy.get('#hd_0\\|\\| > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="1"] > #q_83_1951').click();
    cy.get('#hd_1951\\|\\|1 > [width="99%"]').should("be.visible");
    cy.get(
      '.odd > td.copy > [style="position: relative; display: block;"] > div > .copy'
    ).click();
    cy.get('[name="submit1"]').click();

    //C.1 DATA SOURCES
    cy.get('#hd_0\\|\\| > [width="99%"]').should("be.visible");
    cy.get('[style="display: table-cell; padding: 5px 0px 10px 0px;"]').should(
      "be.visible"
    );
    cy.get(
      ':nth-child(1) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get("#tbl_85_1122 > tbody > :nth-child(2) > td.copy").should(
      "be.visible"
    );
    cy.get(
      '[style="position: relative; display: block;"] > :nth-child(4) > .copy'
    ).click();
    cy.get("#att_1994_3").should("be.visible");
    cy.get(".copy > .searchresults").should("be.visible");
    cy.get(
      ':nth-child(4) > td.copy > [style="position: relative; display: block;"] > div > .copy'
    ).click();
    cy.get("#tr_1123\\|\\|1 > td.copy > .label").should("be.visible");
    cy.get('[inputvalue="1"] > #q_85_1280').click();
    cy.get(
      ':nth-child(6) > td.copy > [style="position: relative; display: block;"] > div > .copy'
    ).click();
    cy.get("#tr_1125\\|\\|1 > td.copy > .label").should("be.visible");
    cy.get('[inputvalue="0"] > #q_85_1281').click();
    cy.get('[name="submit1"]').click();

    //DATA SECURITY
    cy.get('[qid="h_1848"] > [width="99%"]').should("be.visible");
    cy.get('[qid="h_2146"] > [width="99%"]').should("be.visible");
    cy.get(
      '[style="position: relative; display: block;"] > div > .copy'
    ).click();
    cy.get('[style="border-top:0px;"] > tbody > tr > [width="99%"]').should(
      "be.visible"
    );
    cy.get('[name="submit1"]').click();

    //CTRC ADDENDUM - INTRODUCTION
    cy.get('[qid="h_1381"] > [width="99%"] > div').should("be.visible");
    cy.get('[qid="h_1693"] > [width="99%"]').should("be.visible");
    cy.get(
      ':nth-child(1) > td.copy > [style="position: relative; display: block;"] > div > .copy'
    ).click();
    cy.get('[name="submit1"]').click();

    //CTRC ADDENDUM - CTRC CLINICAL FACILITIES AND NURSING SERVICES - OUTPATIENT CLINIC
    cy.get('[style="width: 100%;"]').should("be.visible");
    cy.get('[name="submit1"]').click();

    //CTRC ADDENDUM - CTRC BILLING AND COST ASSIGNMENT SHEET
    cy.get('[style="width: 100%;"]').should("be.visible");
    cy.get('[name="submit1"]').click();

    //CONSENT FORMS
    cy.get("#btnContinue").click();

    //ATTACHMENTS
    cy.get("#btnContinue").click();

    //APPROVING DEPTS
    cy.get(
      '[style="padding:20px 20px 30px 20px;text-align:center;"] > .button'
    ).click();

    //COVER MEMO / SUBMIT
    cy.get(".saveNote").click();
    //cy.get('.tablemainsub-sectioncontent-bottom > [align="center"] > .routingModal').click()
    cy.get("#modalPopup").should("be.visible");
    cy.get(".iAgreeCheckbox").click();
    cy.get(".proceedForm").should("be.visible");
    cy.get(".buttons > .buttonEformYellow").click();
  });

  //Rely on Commerical ROUTING/ PI cert
  it("Rely on Commerical Being Routed/PI Cert", () => {
    cy.visit(Cypress.config().devTrunkBaseUrl);
    cy.get("input#username.long").type(PI).should("have.value", PI);
    cy.get("input#password.long").type("test{Enter}");

    cy.get("#dashboardmenu8 > :nth-child(2) > a").click();
    //cy.get('.searchColumn ui-state-default')
    cy.get('input[placeholder="Title"]').type("My Rely on Commerical test");
    cy.get(".sorting_1 > a").click();

    //Application Status screen
    cy.get("#triggerLoading").should("be.visible");
    cy.get("#btnPDF").should("be.visible");
    cy.get("#btnUnsubmit").should("be.visible");
    cy.get(".box_tab_info").should("be.visible");

    //Routing Tab

    //PI/FA Cert area
    cy.get(".box_tab_info > :nth-child(2)")
      .should("be.visible")
      .should("contain", "Investigator(s) who must certify this Submission");
    cy.get('[width="40%"] > .searchresults').should("contain", "Investigator");
    cy.get(':nth-child(4) > tbody > :nth-child(1) > [width="39%"]').should(
      "contain",
      "Role"
    );
    cy.get('[width="20%"]').should("contain", "Decision").should("be.visible");
    cy.get(":nth-child(4) > tbody > .odd > :nth-child(1)");
    cy.get(":nth-child(4) > tbody > .odd > :nth-child(2)").should(
      "contain",
      "Principal Investigator"
    );
    cy.get(".odd > .copysmall").should("contain", "Not Yet Reviewed");

    //Dept approval area
    cy.get(".box_tab_info > :nth-child(6)").should(
      "contain",
      "Department(s) that must approve this Submission"
    );
    cy.get(':nth-child(8) > tbody > tr > [width="39%"]').should(
      "contain",
      "Department"
    );
    cy.get(':nth-child(8) > tbody > tr > [width="40%"]').should(
      "contain",
      "Approving Person(s)"
    );
    cy.get('[width="19%"]').should("contain", "Approving Decision");

    //Data Security Section
    cy.get(".box_tab_info > :nth-child(12)").should(
      "contain",
      "Department that will oversee Data Security Level for this Submission"
    );
    cy.get(':nth-child(14) > tbody > :nth-child(1) > [width="39%"]').should(
      "contain",
      "Department"
    );
    cy.get(":nth-child(14) > tbody > :nth-child(1) > :nth-child(2)").should(
      "contain",
      "Security Level Review"
    );
    cy.get(":nth-child(14) > tbody > :nth-child(1) > :nth-child(3)").should(
      "contain",
      "Notification Type"
    );
    cy.get(":nth-child(14) > tbody > :nth-child(2) > :nth-child(1)").should(
      "contain",
      "Office of Research Information Systems"
    );
    cy.get(":nth-child(14) > tbody > :nth-child(2) > :nth-child(2)").should(
      "contain",
      "Level"
    );
    cy.get(":nth-child(14) > tbody > :nth-child(2) > .copysmall").should(
      "contain",
      "Initial (will be sent upon certification)"
    );

    //Routing Comments tab
    cy.get("#Tab_notes > .middlegreen > .copy").click();
    cy.get(".box_tab_info").should("be.visible");

    //Status History tab
    cy.get("#Tab_history > .middlegreen > .copy").click();
    cy.get(".box_tab_info").should("be.visible");
    cy.get(".box_tab_info > :nth-child(2)").should("be.visible");
    cy.get(".box_tab_info > :nth-child(6)").should("be.visible");

    //Submitted Documents tab
    cy.get("#Tab_attachments > .middlegreen").click();
    cy.get(".box_tab_info").should("be.visible");
    cy.get(
      '[style="margin-bottom: 20px;"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > table > tbody > tr > .copybold'
    ).should("be.visible");
    cy.get(
      ":nth-child(3) > :nth-child(1) > :nth-child(1) > :nth-child(1) > table > tbody > tr > .copybold"
    ).should("be.visible");

    //Addendum tab
    cy.get("#Tab_addendum > .middlegreen > .copy").click();
    cy.get(".box_tab_info").should("be.visible");
    cy.get("span.searchresults").should("be.visible");

    //Personnel tab
    cy.get("#Tab_personnel > .middlegreen > .copy").click();
    cy.get(".box_tab_info").should("be.visible");
    cy.get(".coiTableConfig_personnelTab > .searchresults").should(
      "be.visible"
    );
    cy.get("td.externalInstitutionHeaderName").should("be.visible");

    //sIRB tab
    cy.get("#Tab_sirb > .middlegreen").click();
    cy.get(".box_tab_info").should("be.visible");

    //Routing tab /Ceritfy as PI
    cy.get(".middleyellow").click();
    cy.get("#btnCertify").click();
    cy.get(".relyOnText").should(
      "contain",
      "Please be aware that reliance on an external IRB"
    );
    cy.get("#relyOnAcceptCheckbox").should("be.visible");
    cy.get(".relyOnText > strong").should(
      "contain",
      "I agree to obtain and review the policies designated by the external IRB PRIOR to conducting research."
    );
    cy.get(".buttonEformYellow").should("not.be.visible");
    cy.get("#relyOnAcceptCheckbox").click();
    cy.wait(2000);
    cy.get(".buttonEformYellow").click();
  });

  it("Rely on Commerical - Administering Dept Approval", () => {
    cy.visit(Cypress.config().devTrunkBaseUrl);
    cy.get("input#username.long")
      .type(deptApprover)
      .should("have.value", deptApprover);
    cy.get("input#password.long").type("test{Enter}");

    cy.get("#nav > :nth-child(2) > a").click();
    cy.get("#dashboardmenu8 > dd.even > a").click();
    cy.get('input[placeholder="Title"]').type("My Rely on Commerical test");
    cy.get(".sorting_1 > a").click();
    cy.get('[style="padding:10px;"] > div.searchresults').should(
      "contain",
      "This submission is being routed to you because approval of your Department or Review Committee is required"
    );
    cy.get("#btnPDF").should("be.visible");
    cy.get(":nth-child(2) > .button").should("be.visible");
    cy.get("td > :nth-child(3) > .button").should("be.visible");
    cy.get(":nth-child(2) > .button").click();
    cy.get(".actionContainer > form").should(
      "contain",
      "The expectation is that this approval is being given on behalf of the head of the Department, Division, or Center."
    );
    cy.get(".btnCancel").should("be.visible");
    cy.get(".buttonEformYellow").click();
  });

  it("Rely on Commerical - Local/PRC Dept Approval", () => {
    cy.visit(Cypress.config().devTrunkBaseUrl);
    cy.get("input#username.long")
      .type(localDeptApprover)
      .should("have.value", localDeptApprover);
    cy.get("input#password.long").type("test{Enter}");

    cy.get("#dashboardmenu8 > dd.even > a").click();
    cy.get('input[placeholder="Title"]').type(
      "My Rely on Commerical IRB Cypress Test"
    );
    cy.get(".sorting_1 > a").click();
    cy.get('[style="padding:10px;"] > div.searchresults').should(
      "contain",
      "This submission is being routed to you because approval of your Department or Review Committee is required"
    );
    cy.get("#btnPDF").should("be.visible");
    cy.get(":nth-child(2) > .button").should("be.visible");
    cy.get("td > :nth-child(3) > .button").should("be.visible");
    cy.get(":nth-child(2) > .button").click();
    cy.get(".actionContainer > form").should(
      "contain",
      "The expectation is that this approval is being given on behalf of the head of the Department, Division, or Center."
    );
    cy.get(".btnCancel").should("be.visible");
    cy.get(".buttonEformYellow").click();
  });

  //Rely on Commerical Accept for Review
  it("Accept Rely on Commerical For Review", () => {
    cy.visit(Cypress.config().devTrunkBaseUrl);
    cy.get("input#username.long")
      .type(submissionOwner)
      .should("have.value", submissionOwner);
    cy.get("input#password.long").type("test{Enter}");

    cy.get(
      'td[data-title="Submitted To IRB"] > .bucket > :nth-child(2) > table > tbody > :nth-child(5) > .countTotal > a'
    ).click();
    cy.wait(1000);
    cy.get("#bucketDataTable_filter > label > input").type(
      "My Rely on Commerical IRB Cypress Test"
    );
    cy.get(".confirmAcceptByIRB").click();
  });

  it("Verify Study History Screen", () => {
    cy.visit(Cypress.config().devTrunkBaseUrl);
    cy.get("input#username.long")
      .type(IRBAnalyst)
      .should("have.value", IRBAnalyst); //Log in as Justin (IRB Analyst)
    cy.get("input#password.long").type("test{Enter}");
    cy.get(
      'td[data-title="Accepted By IRB"] > .bucket > :nth-child(2) > table > tbody > :nth-child(4) > .countTotal > a'
    ).click();
    cy.wait(1000);
    cy.get("#bucketDataTable_filter > label > input").type(
      "My Rely on Commerical IRB Cypress Test"
    );
    cy.get("#bucketDataTable > tbody > .odd > :nth-child(1) > a").click();
    //STUDY DASHBOARD
    cy.get("#studyHistoryDashboard").should("be.visible");
    cy.get("#form_irbid2").should("be.visible");
    cy.get("#studyHistoryDashboard > :nth-child(3)").should("be.visible");
    cy.get(".messageCenterNewDl > dd > .sidebarLinks").should("be.visible");
    cy.get(".messageCenterLogsDl > dd > .sidebarLinks").should("be.visible");
    cy.get("#studyHistoryDashboard > :nth-child(6)").should("be.visible");
    //TimeStamp Log
    cy.get(".timeStampLogDl > dd > .sidebarLinks").should("be.visible").click();
    cy.get("#modalPopup").should("be.visible");
    cy.get(".choosen").should("be.visible");
    cy.get(".showing").should("contain", "Showing All Logs");
    cy.get('[data-filtertype="History"]').click();
    cy.get(".showing").should("contain", "Showing Study Logs");
    cy.get('[data-filtertype="Letter"]').click();
    cy.get(".showing").should("contain", "Showing Letter Logs");
    cy.get('[data-filtertype="Change"]').click();
    cy.get(".showing").should("contain", "Showing Change Logs");
    cy.get(
      '[aria-labelledby="ui-dialog-title-modalPopup"] > .ui-dialog-titlebar > .ui-dialog-titlebar-close > .ui-icon'
    ).click();
    //COI DIsclosure Log
    cy.get(".coiDisclosureLogDl > dd > .sidebarLinks")
      .should("be.visible")
      .click();
    cy.get(
      '[aria-labelledby="ui-dialog-title-modalPopup"] > .ui-dialog-titlebar'
    ).should("be.visible");
    cy.get("#modalPopup").should("be.visible");
    cy.get("label > select").should("be.visible");
    cy.get(
      '[aria-labelledby="ui-dialog-title-modalPopup"] > .ui-dialog-titlebar > .ui-dialog-titlebar-close > .ui-icon'
    ).click();
    //Attachment Log
    cy.get(".eformAttachmentsDl > dd > .sidebarLinks").should("be.visible");
    //Add PRI
    cy.get(".addNSIDl > dd > .sidebarLinks").should("be.visible");
    //Physician Network Sites
    cy.get(".networkSitesDl > dd > .sidebarLinks").should("be.visible").click();
    cy.get("#modalPopup").should("be.visible");
    cy.get('[aria-labelledby="ui-dialog-title-modalPopup"]').should(
      "be.visible"
    );
    cy.get("label > select").should("be.visible");
    cy.get("label > input").type("UNC Family Medicine at Goldsboro");
    cy.get(".sorting_1").should("contain", "UNC Family Medicine at Goldsboro");
    cy.get(
      '[aria-labelledby="ui-dialog-title-modalPopup"] > .ui-dialog-titlebar > .ui-dialog-titlebar-close > .ui-icon'
    ).click();

    //STUDY HISTORY
    cy.get(".tablemainsub-allborders").should("be.visible");
    cy.get(".mod > :nth-child(1) > div > a").should("be.visible");
    cy.get(
      '.tablemainsub-allborders > :nth-child(1) > :nth-child(1) > [align="left"]'
    ).should("contain", "IRB No:");
    cy.get(
      ".tablemainsub-allborders > :nth-child(1) > :nth-child(2) > :nth-child(1)"
    ).should("contain", "IRB");
    cy.get(
      ".tablemainsub-allborders > :nth-child(1) > :nth-child(3) > :nth-child(1)"
    ).should("contain", "PI:");
    cy.get(
      ".tablemainsub-allborders > :nth-child(1) > :nth-child(1) > :nth-child(3)"
    ).should("contain", "Study Status:");
    cy.get(
      ".tablemainsub-allborders > :nth-child(1) > :nth-child(1) > .copy"
    ).should("contain", "Submitted");
    cy.get(
      '.tablemainsub-allborders > :nth-child(1) > :nth-child(2) > [align="left"]'
    ).should("contain", "Expiration Date:");
    cy.get(":nth-child(1) > :nth-child(3) > :nth-child(3)").should(
      "contain",
      "Last Approved:"
    );
    cy.get('[rowspan="2"] > b').should("contain", "Study Title");
    cy.get('[rowspan="2"]').should(
      "contain",
      "My Rely on Commerical IRB Cypress Test"
    );

    //Study Notes
    cy.get(".studyNotesLink").click();
    cy.get("#modalPopup").should("be.visible");
    cy.get("#lastestUpdate").should(
      "contain",
      "There is no current Study Note"
    );
    cy.get("#noteText").should(
      "contain",
      "Type here to begin a new Study Note"
    );
    cy.get("#btnSave").should("be.visible");
    cy.get("#btnSaveAndClose").should("be.visible");
    cy.get("#btnClose").should("be.visible");
    cy.get("#noteText").type("Hello World!");
    cy.get("#btnSaveAndClose").click();
    cy.get("#studyNotesPreview").should("contain", "by Justin Feussner on");

    //Study Tags
    cy.get("#addTag2").click();
    cy.get(".tagList").should("be.visible");
    cy.get("#tag55 > .customTagNoHighlight").should("contain", "Minimal Risk");
    cy.get("#addTag2").click();
    cy.get(".draftSubsLink").should("be.visible");
    cy.get("span > u").should("contain", "Submission Type");
    cy.get('[width="7%"] > u').should("contain", "Reference ID");
    cy.get('[width="11%"] > u').should("contain", "Approval State");
    cy.get(":nth-child(4) > u").should("contain", "Date Routing Complete");
    cy.get(":nth-child(5) > u").should("contain", "Action Date");
    cy.get(":nth-child(6) > u").should("contain", "Expiration Date");
    cy.get(":nth-child(7) > u").should("contain", "AR Date");
    cy.get('[nowrap="nowrap"] > u').should("contain", "Review Type");

    cy.get('[style="padding-left: 50px;"]').should("be.visible");
    cy.get('[style="padding-left: 10px; color: red;"]').should("be.visible");
    cy.get(".searchresults > :nth-child(3)").should("be.visible");
    cy.get(".searchresults > :nth-child(4)").should("be.visible");
    cy.get(".submissionNoteLink").should("be.visible");
    cy.get(".returnToSender").should("be.visible");

    cy.get(".watchButton").should("be.visible").click();
    cy.get(
      ':nth-child(1) > :nth-child(2) > table > tbody > tr > [width="115px"] > label'
    ).should("be.visible");
    cy.get(
      ':nth-child(2) > :nth-child(2) > table > tbody > tr > [width="115px"] > label'
    ).should("be.visible");
    cy.get(
      ':nth-child(3) > :nth-child(2) > table > tbody > tr > [width="115px"] > label'
    ).should("be.visible");
    cy.get('#date_received_cell > tbody > tr > [width="140px"] > label').should(
      "be.visible"
    );

    //OPTIONS
    cy.get("#link_action > .button").click();
    cy.get("#action_menu").should("be.visible");
    cy.get("#closewindow").click();
  });

  it("Verify Application/Review popup", () => {
    cy.visit(Cypress.config().devTrunkBaseUrl);
    cy.get("input#username.long")
      .type(IRBAnalyst)
      .should("have.value", IRBAnalyst); //Log in as Justin (IRB Analyst)
    cy.get("input#password.long").type("test{Enter}");

    cy.get(
      'td[data-title="Accepted By IRB"] > .bucket > :nth-child(2) > table > tbody > :nth-child(4) > .countTotal > a'
    ).click();
    cy.wait(1000);
    cy.get("#bucketDataTable_filter > label > input").type(
      "My Rely on Commerical IRB Cypress Test"
    );
    cy.get("#bucketDataTable > tbody > .odd > :nth-child(1) > a").click();
    cy.get(".appSwimLanes").should("be.visible");
    // Get window object
    cy.window().then((win) => {
      // Replace window.open(url, target)-function with our own arrow function
      cy.stub(win, "open", (url) => {
        // change window location to be same as the popup url
        win.location.href = Cypress.config().devTrunkBaseUrl + url;
      }).as("popup"); // alias it with popup, so we can refer it with @popup
    });

    // Click button which triggers javascript's window.open() call
    //cy.get(".swimlane1 > div").click();
    cy.contains("Application").click();
    // Make sure that it triggered window.open function call
    cy.get("@popup").should("be.called");

    //Verify header info

    cy.get("#irbInfo").should("be.visible");
    cy.get("#irbInfo > :nth-child(3) > :nth-child(1)").should("be.visible");
    cy.get("#irbInfo > :nth-child(3) > :nth-child(2)").should("be.visible");
    cy.get("#irbInfo > :nth-child(3) > :nth-child(3)").should("be.visible");

    //Verify left rail
    cy.get("#navContainer").should("be.visible");
    cy.get("#navReviewType").should("be.visible");
    cy.get("#navReviewConditions").should("be.visible");
    cy.get("#navNextStep").should("be.visible");
    cy.get("#navApplication").should("be.visible");
    cy.get("#navLibrary").should("be.visible");
    cy.get("#navStipulations").should("be.visible");
    cy.get("#navExpandCollapse").should("be.visible");
    cy.get("#navItemList").should("be.visible");
    cy.get("#navOptions").should("be.visible");
    cy.get("navChecklist").should("not.exist");
    cy.get("#navReviewResult").should("be.visible");
    cy.get("#navReviewNotes").should("be.visible");
    cy.get("#navLetter").should("be.visible");

    //Verify review conditions -> REVIEW
    cy.get("#navReviewConditions").click();
    cy.get("#stopsHeader").should("be.visible");
    cy.get("#optionsList > :nth-child(1)").should("be.visible");
    cy.get("#stopListStipulations").should("be.visible");
    cy.get("#stopListCategory").should("be.visible");
    cy.get("#stopListLetterEmail").should("be.visible");
    cy.get("#stopListPIResponse").should("be.visible");
    cy.get("#stopListChecklist").should("be.visible");
    cy.get("#stopListPRIResponse").should("be.visible");
    cy.get("#stopListModExpiration").should("be.visible");

    //Verify review conditions -> SUBMISSION
    cy.get("#optionsList > :nth-child(2)").should("be.visible");
    cy.get("#stopListFlags").should("be.visible");
    cy.get("#stopListExternalInstitutions").should("be.visible");
    cy.get("#stopListRouting").should("be.visible");
    cy.get("#stopListPrisoners").should("be.visible");

    //Verify review conditions -> COI
    cy.get("#optionsList > :nth-child(3)").should("be.visible");
    cy.get("#stopListCOI").should("be.visible");
    cy.get("#stopListManagementPlan").should("be.visible");
    cy.get("#stopListHSP").should("be.visible");
    cy.get("#stopListGCP").should("be.visible");

    //Select an Analyst
    cy.get("#navNextStep").click();
    cy.get("#analystSelector").should("be.visible");
    cy.get(".managerTextbox").type("Justin");
    cy.get('[name="Justin Feussner"]').click();

    //Add a stipulation
    cy.get("#navApplication").click();
    cy.get("#addStipForQuestion554").click();
    cy.wait(3000);

    cy.get(".cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My test stip");
    });
    cy.get("#questionId554 > #stip0 > .stipButtons > .save").click();
    cy.get(".editStipulation > p").should("be.visible");

    cy.get("#navReviewResult").click();

    //Disabled review results:
    cy.get("#reviewResult1").should("have.class", "stipsNotAllowed"); //Approved
    cy.get("#reviewResult2").should("have.class", "stipsNotAllowed"); //Exempted
    cy.get("#reviewResult4").should("have.class", "stipsNotAllowed"); //NHSR
    cy.get("#reviewResult5").should("have.class", "stipsNotAllowed"); //Rely on External IRB
    cy.get("#reviewResult6").should("have.class", "stipsNotAllowed"); //Rely on NCI-CIRB
    cy.get("#reviewResult7").should("have.class", "stipsNotAllowed"); // Withdraw

    //Select Minor Stipulations
    cy.get("#reviewResult3").click();
    cy.wait(3000);

    //Draft Letter
    cy.get("#navNextStep").click();
    cy.get("#letterTypeId")
      .should("contain", "Select Template Type...")
      .and("contain", "Minor Stips - Expedited")
      .and("contain", "FB Admin pre-review")
      .and("contain", "UNC ONLY-Permission to Register")
      .select("Minor Stips - Expedited");
    cy.get("#btnDraftLetter").click();

    //Verify and Finalize letter
    cy.get("#sent_to_email").should("be.visible");
    cy.get("#sent_to_email2").should("be.visible");
    cy.get(".cke_wysiwyg_frame").should("be.visible");
    cy.get(".letterSubHeader").should("contain", "Minor Stips - Expedited");
    cy.get("#btnViewPDF").should("be.visible");
    cy.get("#btnDelete").should("be.visible");
    cy.get("#btnSaveLetter").should("be.visible");
    cy.get("#btnSendToChair").should("be.visible");
    cy.get("#btnFinalizeLetterModal").should("be.visible");

    //Delete and redraft letter
    cy.get("#btnDelete").click();
    cy.wait(3000);
    cy.get(':nth-child(3) > [onclick="modalClose();"]').click(); //close the draft letter modal
    cy.get("#navNextStep").click();
    cy.get("#letterTypeId")
      .should("contain", "Select Template Type...")
      .and("contain", "Minor Stips - Expedited")
      .and("contain", "FB Admin pre-review")
      .and("contain", "UNC ONLY-Permission to Register")
      .select("Minor Stips - Expedited");
    cy.get("#btnDraftLetter").click();

    //Verify and Finalize letter
    cy.get("#sent_to_email").should("be.visible");
    cy.get("#sent_to_email2").should("be.visible");
    cy.get(".cke_wysiwyg_frame").should("be.visible");
    cy.get(".letterSubHeader").should("contain", "Minor Stips - Expedited");
    cy.get("#btnViewPDF").should("be.visible");
    cy.get("#btnDelete").should("be.visible");
    cy.get("#btnSaveLetter").should("be.visible");
    cy.get("#btnSendToChair").should("be.visible");
    cy.get("#btnFinalizeLetterModal").should("be.visible");
    cy.get("#btnFinalizeLetterModal").click();
    cy.get(".ui-dialog-content").should("be.visible");
    cy.get(".ui-dialog-buttonset > .btn-info").click();
  });

  it("Waiting PI Repsonse", () => {
    cy.visit(Cypress.config().devTrunkBaseUrl);
    cy.get("input#username.long")
      .type(submissionOwner)
      .should("have.value", submissionOwner);
    cy.get("input#password.long").type("test{Enter}");
    cy.get("#nav > :nth-child(2) > a").click();
    cy.get("#dashboardmenu5 > :nth-child(10) > a").click();
    cy.get('input[placeholder="Title"]').type(
      "My Rely on Commerical IRB Cypress Test"
    );
    cy.get(".odd > :nth-child(2) > a").click();
    cy.contains(" View Stipulations").should("be.visible").click();
    //RESPOND TO STIPULATIONS
    cy.get('input[name="btnRespond"]').should("be.visible").click();
    cy.get("#cke_1_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Response to Stipulations");
    });

    cy.get("#btnSaveResponse").click();

    cy.get("#BTNRESUBMIT").click();
    cy.wait(2000);
    cy.get(".iAgreeCheckbox").click();
    cy.get(".buttonEformYellow").click();
  });

  it("Revised-Resubmitted to IRB", () => {
    cy.visit(Cypess.config().devTrunkBaseUrl);
    cy.get("input#username.long")
      .type(IRBAnalyst)
      .should("have.value", IRBAnalyst);
    cy.get("input#password.long").type("test{Enter}");

    cy.get(
      'td[data-title="PI Responses"] > .bucket > :nth-child(2) > table > tbody > :nth-child(4) > .countTotal > a'
    ).click();
    cy.wait(1000);
    cy.get("#bucketDataTable_filter > label > input").type(
      "My Rely on Commerical IRB Cypress Test"
    );
    cy.get("#bucketDataTable > tbody > .odd > :nth-child(1) > a").click();
    cy.wait(1000);
    // Get window object
    cy.window().then((win) => {
      // Replace window.open(url, target)-function with our own arrow function
      cy.stub(win, "open", (url) => {
        // change window location to be same as the popup url
        win.location.href = Cypress.config().devTrunkBaseUrl + url;
      }).as("application"); // alias it with popup, so we can refer it with @popup
    });

    // Click button which triggers javascript's window.open() call
    // cy.get('#swimLaneReview0 > .swimlane1 > :nth-child(1)').click()
    //cy.contains("Result: TBD").click();
    cy.contains("Application").click();
    // Make sure that it triggered window.open function call
    cy.get("@application").should("be.called");

    // CAPTURE URL OF REVIEW WINDOW

    cy.url().as("reviewWindow");

    //Verify header info

    cy.get("#irbInfo").should("be.visible");
    cy.get("#irbInfo > :nth-child(3) > :nth-child(1)").should("be.visible");
    cy.get("#irbInfo > :nth-child(3) > :nth-child(2)").should("be.visible");
    cy.get("#irbInfo > :nth-child(3) > :nth-child(3)").should("be.visible");
    //Verify left rail
    cy.get("#navContainer").should("be.visible");
    cy.get("#navReviewType").should("be.visible");
    cy.get("#navReviewConditions").should("be.visible");
    cy.get("#navNextStep").should("be.visible");
    cy.get("#navApplication").should("be.visible");
    cy.get("#navLibrary").should("be.visible");
    cy.get("#navStipulations").should("be.visible");
    cy.get("#navExpandCollapse").should("be.visible");
    cy.get("#navItemList").should("be.visible");
    cy.get("#navOptions").should("be.visible");
    cy.get("#navPIResponses").should("be.visible");
    cy.get("#navReviewResult").should("be.visible");
    cy.get("#navReviewNotes").should("be.visible");
    cy.get("#navLetter").should("be.visible");

    //Verify review conditions -> REVIEW
    cy.get("#navReviewConditions").click();
    cy.get("#stopsHeader").should("be.visible");
    cy.get("#optionsList > :nth-child(1)").should("be.visible");
    cy.get("#stopListStipulations").should("be.visible");
    cy.get("#stopListCategory").should("be.visible");
    cy.get("#stopListLetterEmail").should("be.visible");
    cy.get("#stopListPIResponse").should("be.visible");
    cy.get("#stopListChecklist").should("be.visible");
    cy.get("#stopListPRIResponse").should("be.visible");
    cy.get("#stopListModExpiration").should("be.visible");

    //Verify review conditions -> SUBMISSION
    cy.get("#optionsList > :nth-child(2)").should("be.visible");
    cy.get("#stopListFlags").should("be.visible");
    cy.get("#stopListExternalInstitutions").should("be.visible");
    cy.get("#stopListRouting").should("be.visible");
    cy.get("#stopListPrisoners").should("be.visible");

    //Verify review conditions -> COI
    cy.get("#optionsList > :nth-child(3)").should("be.visible");
    cy.get("#stopListCOI").should("be.visible");
    cy.get("#stopListManagementPlan").should("be.visible");
    cy.get("#stopListHSP").should("be.visible");
    cy.get("#stopListGCP").should("be.visible");

    //PI RESPONSES
    cy.viewport(1200, 612);

    // Get window object
    cy.window().then((win) => {
      // Replace window.open(url, target)-function with our own arrow function
      cy.stub(win, "open", (url) => {
        // change window location to be same as the popup url
        win.location.href = Cypress.config().devTrunkBaseUrl + url;
      }).as("popup"); // alias it with popup, so we can refer it with @popup
    });

    //PI Responses
    cy.get("#navPIResponses").click();
    cy.viewport(1200, 612);

    cy.get("#PIResponseHeader").should("be.visible");
    cy.get("#PIResponseHeader > :nth-child(2) > :nth-child(1)").should(
      "be.visible"
    );
    cy.get("#PIResponseHeader > :nth-child(2) > :nth-child(2)").should(
      "be.visible"
    );
    cy.get("#PIResponseHeader > :nth-child(2) > :nth-child(3)").should(
      "be.visible"
    );
    cy.get(".answerForStip > :nth-child(1)").should("be.visible");
    //cy.get('.compareClick').should("be.visible")
    cy.get(":nth-child(1) > .nextChange").should("be.visible");
    cy.get(".stipDiv > :nth-child(1)").should("be.visible");
    cy.get(".stipDiv > :nth-child(2) > p").should("be.visible");
    cy.get(".stipDiv > :nth-child(2)").should("be.visible");
    cy.get(".responseDiv > :nth-child(1)").should("be.visible");
    cy.get(".responseDiv > :nth-child(2) > p").should("be.visible");
    cy.get(".responseDiv > :nth-child(2)").should("be.visible");
    cy.get(".actionDiv > :nth-child(1)").should("be.visible");
    cy.get(".actionDiv > :nth-child(2)").should("be.visible");
    cy.get(".resolve").should("be.visible");
    cy.get(".resend").should("be.visible");
    cy.get(".withdraw").should("be.visible");
    cy.get(".responseConfirm").should("be.visible");

    cy.get(".resolve").click();
    cy.get(".responseConfirm").click();
    cy.get("#saveResponseConfirmations").click();

    cy.wait(3000);

    //NAVIGATE BACK TO REVIEW WINDOW
    cy.get("@reviewWindow").then((url) => {
      cy.visit(url);
    });

    //Record Review Result (minor stip w/o stip)
    cy.get("#navReviewResult").click();
    cy.get("#reviewResult3").click();
    cy.wait(3000); //allow auto save to complete

    cy.get("#navReviewNotes").click();
    cy.wait(3000);

    //STUDY SPECIFIC FINDINGS
    cy.get("iframe.cke_wysiwyg_frame") // "cke_wysiwyg_frame" class is used here
      .then(($frameWindow) => {
        const win = cy.state("window"); // grab the window Cypress is testing
        const ckEditor = win.CKEDITOR; // CKEditor has added itself to the window
        const instances = ckEditor.instances; // can be multiple editors on the page

        const myEditor = Object.values(instances).filter(
          (instance) => instance.id === "cke_1"
        )[0]; // select the instance by id

        // use CKEditor API to change the text
        myEditor.setData("Study Specific Findings");
      });

    //  cy.get(':nth-child(2) > .subHeader').click()

    cy.wait(5000); //wait for autosave to finish

    cy.reload();
    cy.get("#navReviewNotes").click();
    cy.wait(3000);

    //SUBMISSION SPECIFIC FINDINGS
    cy.get("iframe.cke_wysiwyg_frame") // "cke_wysiwyg_frame" class is used here
      .then(($frameWindow) => {
        const win = cy.state("window"); // grab the window Cypress is testing
        const ckEditor = win.CKEDITOR; // CKEditor has added itself to the window
        const instances = ckEditor.instances; // can be multiple editors on the page

        const myEditor = Object.values(instances).filter(
          (instance) => instance.id === "cke_2"
        )[0]; // select the instance by id

        // use CKEditor API to change the text
        myEditor.setData("Submission Specific Findings");
      });

    cy.wait(5000); //wait for autosave to finish

    //Draft Letter
    cy.get("#navNextStep").click();
    cy.get("#letterTypeId").select("Minor Stips - Expedited");
    cy.get("#btnDraftLetter").click();
    cy.get("#btnFinalizeLetterModal").click();
    cy.get(".body > div").and("contain", "You have no stipulations in place.");
    cy.get(".closeFinal").click();

    cy.get("#btnDelete").click();
    cy.wait(3000);
    cy.get(':nth-child(3) > [onclick="modalClose();"]').click(); //close the draft letter modal

    //Record Review Result -> Select Rely on External
    cy.get("#navReviewResult").click();
    cy.get("#reviewResult5").click();
    cy.get("#expirationDate").click();
    cy.get(":nth-child(1) > :nth-child(6) > .ui-state-default").click();
    cy.get("#riskOfResearch")
      .should("contain", "...")
      .and("contain", "Minimal")
      .and("contain", "Greater than Minimal")
      .select("Minimal");

    cy.wait(3000);
    cy.get("#navReviewNotes").click();
    cy.wait(3000);

    //Study Specific Findings
    cy.get("#reviewNotesBox > :nth-child(2)").should("be.visible");

    //Submission Specific Findings
    cy.get("#reviewNotesBox > :nth-child(3)").should("be.visible");

    cy.get("#navNextStep").click();
    cy.get("#letterTypeId")
      .should("contain", "Select Template Type...")
      .and("contain", "ORSC NE Rely on External IRB letter")
      .and("contain", "Rely on External IRB")
      .select("Rely on External IRB");
    cy.get("#btnDraftLetter").click();

    //Override COIs
    cy.get(".stopListCOI > .letterStopData > .overrideCOI").click();
    cy.get(".overrideCOIReason > .form-control").type("My automated response");
    cy.get("#saveOverride").click();

    //Verify and Finalize letter
    cy.get("#navNextStep").click();
    cy.get("#sent_to_email").should("be.visible");
    cy.get("#sent_to_email2").should("be.visible");
    cy.get(".cke_wysiwyg_frame").should("be.visible");
    cy.get(".letterSubHeader").should("contain", "Rely on External IRB");
    cy.get("#btnViewPDF").should("be.visible");
    cy.get("#btnDelete").should("be.visible");
    cy.get("#btnSaveLetter").should("be.visible");
    cy.get("#btnSendToChair").should("be.visible");
    cy.get("#btnFinalizeLetterModal").should("be.visible");
    cy.get("#btnFinalizeLetterModal").click();
    cy.get(".ui-dialog-content").should("be.visible");
    cy.get(".ui-dialog-buttonset > .btn-info").click();
  });
});
