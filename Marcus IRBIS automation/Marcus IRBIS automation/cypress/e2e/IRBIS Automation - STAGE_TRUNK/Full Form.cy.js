describe("Create Full Form Study Application", () => {
  it("Create Full Form", () => {
    cy.visit("https://orisstage.research.unc.edu/irb/index.cfm");
    //cy.visit('https://orisstage.research.unc.edu/irb/eform_screens.cfm?MasterId=383421&ScreenId=80');

    cy.get("input#username.long")
      .type("mhannah1")
      .should("have.value", "mhannah1");
    cy.get("input#password.long").type("test{Enter}");

    cy.get("#nav > :nth-child(2) > a").click();
    cy.get("#dashboard").should("be.visible");
    cy.get('[style="padding: 10px 10px 5px 10px;"]').should("be.visible");
    cy.get(":nth-child(2) > .wizardLinks1").click();
    cy.get("#wizard5").should("be.visible");
    cy.get("#btn5").click();
    cy.wait(15000);

    //1. GENERAL INFORMATION SCREEN

    cy.get("#q_29_3").should("be.visible").type("My Full Form Cypress Test");

    cy.get("#cke_q_29_554")
      .should("be.visible")
      .type("My Full Form Cypress Test");

    cy.get('[qid="q_1855"] > td.copy').should("be.visible");
    cy.get('[inputvalue="0"] > #q_29_1855').click();
    cy.get('[name="submit0"]').should("be.visible");
    cy.get('[name="submit1"]').should("be.visible");
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
      '[action="/irb/index.cfm?event=eform.projectPersonnel.importProjectPersonnel"]'
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
    cy.get('[inputvalue="1"] > #q_98_1205').click();
    cy.get('[qid="h_2045"] > [width="99%"]');
    cy.get('[inputvalue="1"] > #q_98_2045').click();
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
    cy.get("#noansweravailable").should("be.visible");
    cy.get('[qid="h_575"] > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="1"] > #q_98_575').click();
    cy.get('[inputvalue="0"] > #q_98_575').click();
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
    cy.get('[inputvalue="0"] > #q_98_2248').click();
    cy.get('[qid="h_1941"] > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="1"] > #q_98_1941').click();
    cy.get(
      '#tbl_98_1257 > tbody > :nth-child(1) > td.copy > [style="position: relative; display: block;"] > div'
    ).should("be.visible");
    cy.get(
      '#tbl_98_1257 > tbody > :nth-child(2) > td.copy > [style="position: relative; display: block;"] > div'
    ).should("be.visible");
    cy.get(
      '#tbl_98_1257 > tbody > :nth-child(3) > td.copy > [style="position: relative; display: block;"] > div'
    ).should("be.visible");
    cy.get(
      '#tbl_98_1257 > tbody > :nth-child(4) > td.copy > [style="position: relative; display: block;"] > div'
    ).should("be.visible");
    cy.get(
      '#tbl_98_1257 > tbody > :nth-child(5) > td.copy > [style="position: relative; display: block;"] > div'
    ).should("be.visible");
    cy.get(
      ':nth-child(6) > td.copy > [style="position: relative; display: block;"] > div'
    ).should("be.visible");
    cy.get(
      ':nth-child(7) > td.copy > [style="position: relative; display: block;"] > div'
    ).should("be.visible");
    cy.get(
      ':nth-child(8) > td.copy > [style="position: relative; display: block;"] > div'
    ).should("be.visible");
    cy.get("#tbl_98_1257 > tbody > :nth-child(9) > td.copy").should(
      "be.visible"
    );
    cy.get('[name="submit1"]').click();

    //4.SCREENING QUESTIONS
    cy.get('[qid="h_1906"] > [width="99%"] > a').should("be.visible");
    cy.get(
      '[qid="q_443"] > [style="padding:5px 10px 5px 0px;"] > table > tbody > tr > .label'
    ).should("be.visible");
    cy.get('[qid="h_1907"] > [width="99%"] > a').should("be.visible");
    cy.get(
      '[qid="q_34"] > [style="padding:5px 10px 5px 0px;"] > table > tbody > tr > .label'
    ).should("be.visible");
    cy.get('[inputvalue="1"] > #q_10_34').click();
    cy.get(
      '[qid="q_35"] > [style="padding:5px 10px 5px 0px;"] > table > tbody > tr > .label'
    ).should("be.visible");
    cy.get('[inputvalue="1"] > #q_10_35').click();
    cy.get('[inputvalue="1"] > #q_10_80').click();
    cy.get('[inputvalue="1"] > #q_10_79').click();
    cy.get('[name="submit1"]').click();

    // LOCATION
    cy.get('[inputvalue="0"] > #q_140_49').click();
    cy.get('[name="submit1"]').click();

    // PRC SCREENING QUESTIONS
    cy.get('[qid="h_1908"] > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="0"] > #q_129_1909').click();
    cy.get('[inputvalue="0"] > #q_129_1913').click();
    cy.get('[name="submit1"]').click();

    //A.1 BACKGROUND AND RATIONALE

    //TYPE INTO CKEDITOR
    cy.wait(2000);
    cy.get("#cke_1_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS A.1.1 TEST");
    });

    cy.get("#cke_2_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS A.1.2 TEST");
    });

    cy.get('[name="submit1"]').click();

    //A.2 SUBJECTS
    cy.get('[qid="h_1272"] > [width="99%"]').should("be.visible");
    cy.get("#q_62_1272").type("100");
    cy.get('[qid="h_537"] > [width="99%"]').should("be.visible");
    cy.get("#q_62_537").type("50");
    cy.get('[qid="h_1894"] > [width="99%"]').should("be.visible");

    //TYPE INTO CKEDITOR
    cy.get("iframe.cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS A.1.3 TEST");
    });

    cy.get('[qid="h_2079"] > [width="99%"]').should("be.visible");
    //Children
    cy.get(
      '#tbl_62_2079 > tbody > :nth-child(1) > td.copy > [style="position: relative; display: block;"] > div > .copy'
    ).click();
    cy.get("#tr_666\\|\\|1\\,\\[none\\] > .copy > .copyboldred").should(
      "be.visible"
    );
    //Pregnant women
    cy.get(
      '#tbl_62_2079 > tbody > :nth-child(3) > td.copy > [style="position: relative; display: block;"] > div > .copy'
    ).click();
    //Nonviable neonates or neonates of uncertain viability
    cy.get(
      '#tbl_62_2079 > tbody > :nth-child(4) > td.copy > [style="position: relative; display: block;"] > div > .copy'
    ).click();
    //Prisoners
    cy.get(
      '#tbl_62_2079 > tbody > :nth-child(5) > td.copy > [style="position: relative; display: block;"] > div > .copy'
    ).click();
    cy.get("#tr_42\\|\\|1\\,\\[none\\] > .copy > .copyboldred").should(
      "be.visible"
    );

    cy.get('[qid="h_37"] > [width="99%"]').should("be.visible");
    //Decisonally impaired individuals
    cy.get(
      '#tbl_62_37 > tbody > :nth-child(1) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get("#att_40_1").should("be.visible");
    cy.get(".sectionheader > span").should("be.visible");
    //Children who are ward of the state (Foster children)
    cy.get(
      '#tbl_62_37 > tbody > :nth-child(3) > td.copy > [style="position: relative; display: block;"] > div > .copy'
    ).click();
    cy.get('[qid="h_2079"] > [width="99%"]').should("be.visible");
    cy.get(
      '[qid="q_2079"] > [style="display: table-cell; padding: 5px 0px 10px 0px;"]'
    ).should("be.visible");
    cy.get('[qid="h_37"] > [width="99%"]').should("be.visible");
    cy.get(
      '[qid="q_37"] > [style="display: table-cell; padding: 5px 0px 10px 0px;"]'
    ).should("be.visible");
    cy.get('[qid="h_462"] > [width="99%"]').should("be.visible");
    cy.get('[qid="h_671"] > [width="99%"]').should("be.visible");

    //TYPE INTO CKEDITOR
    cy.get("#cke_2_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS A.1.6 TEST");
    });

    cy.get("#q_62_1884")
      .should("contain", "years")
      .and("contain", "months")
      .and("contain", "weeks")
      .and("contain", "days");
    cy.get("#q_62_672").type("18");
    cy.get("#q_62_1274").should("be.visible");
    cy.get("#q_62_673").type("99");
    cy.get('[name="submit1"]').click();

    //A.2.A CHILDREN
    cy.get('[qid="h_2085"] > [width="99%"]').should("be.visible");

    cy.get('[qid="h_2086"] > [width="99%"]').should("be.visible");
    cy.get("#cke_1_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS A.2.A.1 TEST");
    });

    cy.get('[qid="h_2087"] > [width="99%"]').should("be.visible");
    cy.get("#cke_2_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS A.2.A.2 TEST");
    });

    cy.get('[qid="h_2088"] > [width="99%"]').should("be.visible");
    cy.get("#cke_3_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS A.2.A.3 TEST");
    });

    cy.get('[name="submit1"]').click();

    //A.2.B PREGNANT WOMEN
    cy.get('[qid="h_2089"] > [width="99%"]').should("be.visible");

    cy.get('[qid="h_2090"] > [width="99%"]').should("be.visible");
    cy.get("#cke_1_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS A.2.B.1 TEST");
    });

    cy.get('[qid="h_2091"] > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="1"] > #q_133_2091').click();
    cy.get('[inputvalue="2"]').should("be.visible");

    cy.get('#hd_2091\\|\\|1\\,2\\,\\[none\\] > [width="99%"]').should(
      "be.visible"
    );
    cy.get("#cke_2_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS A.2.B.2 TEST");
    });

    cy.get('[qid="h_2093"] > [width="99%"]').should("be.visible");
    cy.get("#cke_3_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS A.2.B.3 TEST");
    });

    cy.get('[qid="h_2094"] > [width="99%"]').should("be.visible");
    cy.get("#cke_4_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS A.2.B.4 TEST");
    });

    cy.get('[name="submit1"]').click();

    //A.2.C NONVIABLE NEONATES
    cy.get('[qid="h_2095"] > [width="99%"]').should("be.visible");
    cy.wait(1000);
    cy.get('[qid="h_2096"] > [width="99%"]').should("be.visible");

    cy.get("#cke_1_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS A.2.C.1 TEST");
    });

    cy.get('[qid="h_2097"] > [width="99%"]').should("be.visible");
    cy.get('[qid="q_2097"] > td.copy').should("be.visible");
    cy.get('[inputvalue="3"] > #q_134_2097').click();

    cy.get('#hd_2097\\|\\|1\\,2\\,3\\,\\[none\\] > [width="99%"]').should(
      "be.visible"
    );

    cy.get("#cke_2_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS A.2.C.2 TEST");
    });

    cy.get('[qid="h_2099"] > [width="99%"]').should("be.visible");

    cy.get("#cke_3_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS A.2.C.3 TEST");
    });

    cy.get('[name="submit1"]').click();

    //A.2.D PRISONERS
    cy.get('[qid="h_2100"] > [width="99%"]').should("be.visible");
    cy.get('[qid="h_2101"] > [width="99%"]').should("be.visible");
    cy.get('[qid="h_2102"] > [width="99%"]').should("be.visible");
    cy.get('[qid="q_2102"] > td.copy').should("be.visible");
    cy.get('[inputvalue="5"] > #q_135_2102').click();

    cy.get(
      '#hd_2102\\|\\|1\\,2\\,3\\,4\\,5\\,\\[none\\] > [width="99%"]'
    ).should("be.visible");

    cy.get("#cke_1_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS A.2.D.1 TEST");
    });

    cy.get('[qid="h_2104"] > [width="99%"]').should("be.visible");

    cy.get("#cke_2_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS A.2.D.2 TEST");
    });

    cy.get('[qid="h_2105"] > [width="99%"]').should("be.visible");

    cy.get("#cke_3_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS A.2.D.3 TEST");
    });

    cy.get('[qid="h_2106"] > [width="99%"]').should("be.visible");

    cy.get("#cke_4_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS A.2.D.4 TEST");
    });

    cy.get('[qid="h_2107"] > [width="99%"]').should("be.visible");

    cy.get("#cke_5_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS A.2.D.5 TEST");
    });

    cy.get('[qid="h_2108"] > [width="99%"]').should("be.visible");

    cy.get("#cke_6_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS A.2.D.6 TEST");
    });

    cy.get('[qid="h_2109"] > [width="99%"]').should("be.visible");

    cy.get("#cke_7_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS A.2.D.7 TEST");
    });

    cy.get('[name="submit1"]').click();

    //A.2.E DECISIONALLY IMPAIRED INDIVIDUALS
    cy.get('[qid="h_2110"] > [width="99%"]').should("be.visible");
    cy.get('[qid="h_2111"] > [width="99%"]').should("be.visible");

    cy.get("#cke_1_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS A.2.E.1 TEST");
    });

    cy.get('[qid="h_2112"] > [width="99%"]').should("be.visible");
    cy.get("#cke_2_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS A.2.E.2 TEST");
    });

    cy.get('[qid="h_2113"] > [width="99%"]').should("be.visible");

    cy.get("#cke_3_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS A.2.E.3 TEST");
    });

    cy.get('[qid="h_2114"] > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="1"] > #q_136_2114').click();

    cy.get("#cke_4_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS A.2.E.4 TEST");
    });

    cy.get('[name="submit1"]').click();

    //A.2.F WARDS OF THE STATE
    cy.get('[qid="h_2116"] > [width="99%"]').should("be.visible");
    cy.get('[qid="h_2117"] > [width="99%"]').should("be.visible");
    cy.get(
      '[style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get(
      '[style="position: relative; display: block;"] > :nth-child(3) > .copy'
    ).click();

    cy.get('[qid="h_2118"] > [width="99%"]').should("be.visible");

    cy.get(".cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS A.2.F.1 TEST");
    });

    cy.get('[name="submit1"]').click();

    //A.3 INCLUSION/EXLUSION CRITERIA
    cy.get('[qid="h_465"] > [width="99%"]').should("be.visible");

    cy.get("#cke_1_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS A.3.1 TEST");
    });

    cy.get('[qid="h_669"] > [width="99%"]').should("be.visible");

    cy.get("#cke_2_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS A.3.2 TEST");
    });

    cy.get('[inputvalue="1"] > #q_63_1218').click();
    cy.get('#hd_1218\\|\\|1 > [width="99%"]').should("be.visible");

    cy.get("#cke_3_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS A.3.3 TEST");
    });

    cy.get('[name="submit1"]').click();

    //A.4 STUDY DESIGN, METHODS, AND PROCEDURES
    cy.get('[qid="h_692"] > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="0"] > #q_64_692').click();
    //TO TEST A.4.A SCREEN
    //cy.get('[inputvalue="1"] > #q_64_692').click()
    cy.get('[qid="h_467"] > [width="99%"]').should("be.visible");

    cy.get("#cke_1_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST A.4.2");
    });

    cy.get('[qid="h_675"] > [width="99%"]').should("be.visible");

    cy.get("#cke_2_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST A.4.3");
    });

    cy.get('[qid="h_676"] > [width="99%"]').should("be.visible");

    cy.get("#cke_3_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST A.4.4");
    });

    cy.get('[qid="h_678"] > [width="99%"]').should("be.visible");

    cy.get("#cke_4_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST A.4.5");
    });

    cy.get('[qid="h_679"] > [width="99%"]').should("be.visible");
    cy.get(
      ':nth-child(3) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get("#att_683_1").should("be.visible");
    cy.get(
      ':nth-child(4) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get("#att_685_1").should("be.visible");
    cy.get(
      ':nth-child(5) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get("#att_686_1").should("be.visible");
    cy.get(
      ':nth-child(6) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get("#att_684_1").should("be.visible");
    cy.get(
      ':nth-child(7) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get("#att_687_1").should("be.visible");
    cy.get(
      ':nth-child(8) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get("#att_688_1").should("be.visible");
    cy.get(
      ':nth-child(9) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get("#att_689_1").should("be.visible");
    cy.get(
      ':nth-child(10) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get("#att_690_1").should("be.visible");
    cy.get(
      ':nth-child(13) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get("#att_2251_1").should("be.visible");

    cy.get('[qid="h_2255"] > [width="99%"]').should("be.visible");
    cy.get(
      '[qid="q_2255"] > td.copy > [style="position: relative; display: block;"] > div > .copy'
    ).click();
    cy.get('[qid="h_2252"] > [width="99%"]').should("be.visible");
    cy.get(
      '[qid="q_2252"] > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();

    cy.get("#q_64_2253").type("UNC TEXT MESSAGE TEST");

    cy.get('[qid="h_694"] > [width="99%"]').should("be.visible");

    cy.get("#cke_5_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST A.4.7");
    });

    cy.get('[qid="h_881"] > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="Yes"] > #q_64_881').click();

    cy.get('#hd_881\\|\\|Yes > [width="99%"]').should("be.visible");

    cy.get("#cke_6_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST A.4.8");
    });

    cy.get('[name="submit1"]').click();

    /*

//A.4.A BIOMEDICAL METHODS AND PROCEDURES
    cy.get('[qid="h_1219"] > [width="99%"]').should("be.visible")
    cy.get('[inputvalue="1"] > #q_74_1219').click()
    cy.wait(1000)
    cy.get('#cke_1_contents > .cke_wysiwyg_frame').then(function($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST A.4.A.1");
    cy.get('#cke_2_contents > .cke_wysiwyg_frame').then(function($iframe) {
        const $body = $iframe.contents().find("body");
        console.log($body);
        cy.wrap($body[0]).type("My Full Form CYPRESS TEST A.4.A.2");  
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
   
        */

    //A.5 BENFITS TO SUBJECTS AND/OR SOCIETY
    cy.wait(1000);

    cy.get('[qid="h_743"] > [width="99%"]').should("be.visible");

    cy.get("#cke_1_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST A.5.1");
    });

    cy.get('[qid="h_738"] > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="Yes"] > #q_65_738').click();
    cy.get('[qid="h_739"] > [width="99%"]').should("be.visible");

    cy.get('#hd_738\\|\\|Yes\\,No\\,\\[none\\] > [width="99%"]').should(
      "be.visible"
    );

    cy.get("#cke_2_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST A.5.2");
    });

    cy.get('[qid="h_741"] > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="Yes"] > #q_65_741').click();
    cy.get('#hd_741\\|\\|Yes > [width="99%"]').should("be.visible");

    cy.get("#cke_3_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST A.5.3");
    });

    cy.get('[name="submit1"]').click();

    //A.6 RISKS AND MEASURES TO MINIMIZE RISKS
    cy.wait(1000);

    cy.get("#cke_1_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My EXEMPT CYPRESS TEST A.6.1");
    });

    cy.get('[name="submit1"]').click();
    cy.get('[qid="h_744"] > [width="99%"] > p').should("be.visible");
    cy.get('[qid="q_745"] > [width="99%"]').should("be.visible");
    cy.get('[qid="h_750"] > [width="99%"]').should("be.visible");
    cy.get('[qid="h_751"] > [width="99%"]').should("be.visible");
    cy.get('[qid="h_759"] > [width="99%"]').should("be.visible");
    cy.get('[qid="q_752"] > [width="99%"]').should("be.visible");
    cy.get('[qid="h_766"] > [width="99%"]').should("be.visible");
    cy.get('[qid="q_753"] > [width="99%"]').should("be.visible");
    cy.get('[qid="h_771"] > [width="99%"]').should("be.visible");
    cy.get('[qid="q_754"] > [width="99%"]').should("be.visible");
    cy.get('[qid="h_775"] > [width="99%"]').should("be.visible");
    cy.get('[qid="h_1043"] > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="1"] > #q_66_1044').click();

    cy.get("#cke_7_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST A.6.13");
    });

    cy.get('[name="submit1"]').click();

    //A.7 DATA AND SAFETY MONITORING
    cy.wait(1000);
    cy.get('[qid="h_782"] > [width="99%"]').should("be.visible");

    cy.get("#cke_1_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST A.7.1");
    });

    cy.get('[qid="h_1798"] > [width="99%"]').should("be.visible");

    cy.get("#cke_2_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST A.7.2");
    });

    cy.get('[qid="h_1310"] > [width="99%"]').should("be.visible");

    cy.get("#cke_3_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST A.7.3");
    });

    cy.get('[inputvalue="1"] > #q_67_1311').click();

    cy.get("#cke_4_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST A.7.4");
    });

    cy.get('[inputvalue="1"] > #q_67_783').click();
    cy.get('[qid="h_784"] > [width="99%"]').should("be.visible");
    cy.get(
      '[qid="q_784"] > [style="display: table-cell; padding: 5px 0px 10px 0px;"]'
    ).should("be.visible");
    cy.get('[qid="h_789"] > [width="99%"]').should("be.visible");
    cy.get("#q_67_789").should("be.visible");

    cy.get('[name="submit1"]').click();

    //A.8 DATA ANALYSIS
    cy.wait(1000);
    cy.get('[qid="h_1944"] > [width="99%"]').should("be.visible");

    cy.get("#cke_1_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST A.8.1");
    });

    cy.get('[qid="h_1946"] > [width="99%"]').should("be.visible");

    cy.get("#cke_2_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST A.8.2");
    });

    cy.get('[qid="h_1947"] > [width="99%"]').should("be.visible");

    cy.get("#cke_3_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST A.8.3");
    });

    cy.get('[qid="h_1948"] > [width="99%"]').should("be.visible");

    cy.get("#cke_4_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST A.8.4");
    });

    cy.get('[name="submit1"]').click();

    //A.9 IDENTIFIERS
    cy.get('[qid="q_792"] > [width="99%"]').should("be.visible");
    cy.get(
      ':nth-child(8) > td.copy > [style="position: relative; display: block;"] > div > .copy'
    ).click();
    cy.get('[inputvalue="1"] > #q_69_1021').click();
    cy.get("#doc_1021_424").should("be.visible");
    cy.get('#hd_1021\\|\\|1 > [width="99%"]').should("be.visible");

    cy.get(".cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST A.9.3");
    });

    cy.get('[name="submit1"]').click();

    //A.10 CONFIDENTIALITY OF THE DATA
    cy.wait(1000);
    cy.get('[qid="h_814"] > [width="99%"]');

    cy.get("#cke_1_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST A.10.1");
    });

    cy.get('[inputvalue="1"] > #q_70_1369').click();

    cy.get("#cke_2_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST A.10.2");
    });

    cy.get('[inputvalue="1"] > #q_70_817').click();

    cy.get('#hd_817\\|\\|1 > [width="99%"]').should("be.visible");

    cy.get("#cke_3_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST A.10.3");
    });

    cy.get('[inputvalue="0"] > #q_70_819').click();

    cy.get('[qid="h_820"] > [width="99%"]').should("be.visible");

    cy.get("#cke_4_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST A.10.5");
    });

    cy.get('[inputvalue="1"] > #q_70_1369').click();

    cy.get("#cke_5_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST A.10.6");
    });

    cy.get('[name="submit1"]').click();

    //A.11 DATA SHARING AND TRANSMISSION
    cy.get('[qid="h_821"] > [width="99%"]').should("be.visible");
    cy.get(
      '[qid="q_821"] > [style="display: table-cell; padding: 5px 0px 10px 0px;"]'
    ).should("be.visible");
    cy.get(
      ':nth-child(11) > td.copy > [style="position: relative; display: block;"] > div > .copy'
    ).click();
    cy.get("#q_71_1858").type("My other explanation");

    cy.get('[qid="h_834"] > [width="99%"]').should("be.visible");

    cy.get(".cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST A.11.2");
    });

    cy.get('[name="submit1"]').click();

    //A.12 POST-STUDY DISPOSITION OF IDENTIFIABLE DATA OR HUMAN BIOLOGICAL MATERIALS
    cy.wait(1000);
    cy.get('#hd_0\\|\\| > [width="99%"]').should("be.visible");

    cy.get(".cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST A.12.1");
    });

    cy.get('[name="submit1"]').click();

    //B.1 METHODS OF RECRUITING
    cy.get('[qid="h_945"] > [width="99%"]').should("be.visible");
    cy.get(
      '#tbl_78_945 > tbody > :nth-child(2) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get("#att_2222_1").should("be.visible");
    cy.get("#tr_2222\\|\\|MyChart > .copy > .label").should("be.visible");
    cy.get(
      '#tbl_78_945 > tbody > :nth-child(4) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get("#att_947_1").should("be.visible");
    cy.get(
      '#tbl_78_945 > tbody > :nth-child(5) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get("#att_960_1").should("be.visible");
    cy.get(
      '#tbl_78_945 > tbody > :nth-child(6) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get("#att_1371_1").should("be.visible");
    cy.get(
      '#tbl_78_945 > tbody > :nth-child(7) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get("#att_961_1").should("be.visible");
    cy.get(
      '#tbl_78_945 > tbody > :nth-child(8) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get("#att_962_1").should("be.visible");
    cy.get(
      '#tbl_78_945 > tbody > :nth-child(9) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get("#att_963_1").should("be.visible");
    cy.get(
      '#tbl_78_945 > tbody > :nth-child(10) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get("#att_964_1").should("be.visible");
    cy.get(
      '#tbl_78_945 > tbody > :nth-child(11) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get("#att_965_1").should("be.visible");
    cy.get(
      '#tbl_78_945 > tbody > :nth-child(12) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get("#att_966_1").should("be.visible");
    cy.get(
      '#tbl_78_945 > tbody > :nth-child(13) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get("#att_1882_1").should("be.visible");
    cy.get(
      '#tbl_78_945 > tbody > :nth-child(14) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get("#att_968_1").should("be.visible");
    cy.get("#tr_968\\|\\|1 > td.copy > .label").should("be.visible");
    cy.get("#q_78_969").type("My Other explanation for B.1.1");
    cy.get(
      '#tbl_78_945 > tbody > :nth-child(16) > td.copy > [style="position: relative; display: block;"] > div > .copy'
    ).click();
    cy.get("#tr_2291\\|\\|1 > td.copy").should("be.visible");
    cy.get("#q_78_2292").type("My Social Media explanation B.1.1");
    cy.get('[qid="h_2236"] > [width="99%"]').should("be.visible");
    cy.get('[qid="q_2236"] > td.copy').should("be.visible");
    cy.get('[inputvalue="1"] > #q_78_2236').click();
    cy.get('[qid="h_2237"] > [width="99%"]').should("be.visible");

    cy.get('[qid="h_948"] > [width="99%"]').should("be.visible");

    cy.get("#cke_1_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST B.1.3");
    });

    cy.get('[qid="h_2207"] > [width="99%"]').should("be.visible");
    cy.get('[qid="q_2207"] > [width="99%"]').should("be.visible");

    cy.get('[qid="h_949"] > [width="99%"]').should("be.visible");

    cy.get("#cke_2_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST B.1.5");
    });

    cy.get('[qid="h_2213"] > [width="99%"]').should("be.visible");

    cy.get("#cke_3_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST B.1.6");
    });

    cy.get('[qid="h_949"] > [width="99%"]').should("be.visible");

    cy.get("#cke_4_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST B.1.7");
    });

    cy.get('[qid="h_950"] > [width="99%"]').should("be.visible");

    cy.get("#cke_5_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST B.1.8");
    });

    cy.get('[qid="h_951"] > [width="99%"]').should("be.visible");

    cy.get("#cke_6_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST B.1.9");
    });

    cy.get('[qid="h_952"] > [width="99%"]').should("be.visible");

    cy.get("#cke_7_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST B.1.10");
    });

    cy.get('[qid="h_953"] > [width="99%"]').should("be.visible");

    cy.get("#cke_8_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST B.1.11");
    });

    cy.get('[name="submit1"]').click();

    //B.2 PROTECTED HEALTH INFORMATION (PHI)
    cy.get('[qid="h_1786"] > [width="99%"]').should("be.visible");
    cy.get('[qid="h_955"] > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="1"] > #q_79_955').click();
    cy.get('[qid="h_1992"] > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="0"] > #q_79_1992').click();
    cy.get('#hd_1992\\|\\|0 > [width="99%"]').should("be.visible");
    cy.get('[qid="h_956"] > [width="99%"]').should("be.visible");
    cy.get("#tbl_79_956 > tbody > :nth-child(1) > td.copy").should(
      "be.visible"
    );
    cy.get("#q_79_957").type(
      "My Full Form IRB B.2.1 test - List the data you are planning to collect for this purpose."
    );
    cy.get("#tbl_79_956 > tbody > :nth-child(2) > td.copy").should(
      "be.visible"
    );
    cy.get("#q_79_958").type(
      "My Full Form B.2.1 test - Describe how confidentiality/privacy will be protected prior to ascertaining the patients willingness to participate"
    );
    cy.get("#tbl_79_956 > tbody > :nth-child(3) > td.copy").should(
      "be.visible"
    );
    cy.get("#q_79_959").type(
      "My Full Form B.2.1 test - Describe when and how you will destroy PHI for individuals"
    );
    cy.get(":nth-child(4) > td.copy").should("be.visible");
    cy.get("#q_79_2293").type(
      "My Full Form B.2.1 test - Please explain how screening could not be practicably conducted without the waiver."
    );
    cy.get(":nth-child(5) > td.copy").should("be.visible");
    cy.get("#q_79_2294").type(
      "My Full Form B.2.1 test - Explain why it would not be possible to conduct the screening without the use of PHI"
    );
    cy.get('[qid="h_1785"] > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="1"] > #q_79_1785').click();
    cy.get("#doc_1785_424").should("be.visible");
    cy.get('#hd_1785\\|\\|1 > [width="99%"]').should("be.visible");
    cy.get('[name="submit1"]').click();

    //B.3 SUBJECT CONTACT, DURATION AND PRIVACY
    cy.get('[qid="h_970"] > [width="99%"]');
    cy.get("#q_80_970").type("My Full Form test B.3.1");
    cy.get('[qid="h_971"] > [width="99%"]').should("be.visible");
    cy.get("#q_80_971").type("My Full Form test B.3.2");
    cy.get('[qid="h_972"] > [width="99%"]').should("be.visible");
    cy.get("#q_80_972").type("My Full Form test B.3.3");
    cy.get('[qid="h_2009"] > [width="99%"]').should("be.visible");
    cy.get(
      '[qid="q_2009"] > td.copy > [style="position: relative; display: block;"] > :nth-child(3) > .copy'
    ).click();
    cy.get('#hd_2009\\|\\|2 > [width="99%"]').should("be.visible");
    cy.get(
      '#tr_2009\\|\\|2 > td.copy > [style="position: relative; display: block;"] > :nth-child(3) > .copy'
    ).click();
    cy.get(
      '#hd_2010\\|\\|6\\,3\\,10\\,12\\,16\\,4\\,11\\,15\\,2\\,14\\,13\\,17 > [width="99%"]'
    ).should("be.visible");
    cy.get(
      '#tr_2009\\|\\|2 > td.copy > [style="position: relative; display: block;"] > :nth-child(3) > .copy'
    ).click();
    cy.get(":nth-child(11) > .copy").click();
    cy.get('#hd_2010\\|\\|15 > [width="99%"]').should("be.visible");
    cy.get("#tr_2010\\|\\|15 > .copy").should("be.visible");
    cy.get(":nth-child(4) > .sorting_1 > .clinicCheck").click();

    cy.get('[qid="h_974"] > [width="99%"]').should("be.visible");

    cy.get("#cke_1_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST B.3.5");
    });

    cy.get('[qid="h_973"] > [width="99%"]').should("be.visible");

    cy.get("#cke_2_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST B.3.6");
    });

    cy.get('[name="submit1"]').click();

    //B.4 INCENTIVES FOR PARTICIPATION
    cy.get('[qid="h_1316"] > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="1"] > #q_83_1316').click();

    cy.get('[qid="h_975"] > [width="99%"]').should("be.visible");

    cy.get("#cke_1_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST B.4.1.A");
    });

    cy.get('[qid="h_976"] > [width="99%"]').should("be.visible");

    cy.get("#cke_2_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST B.4.1.B");
    });

    cy.get('[qid="h_977"] > [width="99%"]').should("be.visible");

    cy.get("#cke_3_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST B.4.1.C");
    });

    cy.get('[qid="h_978"] > [width="99%"]').should("be.visible");

    cy.get("#cke_4_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST B.4.1.D");
    });

    cy.get('[qid="h_1376"] > [width="99%"]').should("be.visible");

    cy.get("#cke_5_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST B.4.1.E");
    });

    cy.get('[qid="h_1951"] > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="1"] > #q_83_1951').click();
    cy.get('#hd_1951\\|\\|1 > [width="99%"]').should("be.visible");
    cy.get(
      '.odd > td.copy > [style="position: relative; display: block;"] > div > .copy'
    ).click();

    cy.get('[name="submit1"]').click();

    //B.5 COST TO BE BORNE BY SUBJECTS
    cy.get('#hd_0\\|\\| > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="1"] > #q_84_1213').click();
    cy.get('#hd_1213\\|\\|1 > [width="99%"]').should("be.visible");
    cy.get("#q_84_993").should("be.visible");

    cy.get('[name="submit1"]').click();

    //C.1 DATA SOURCES
    cy.get('[qid="h_1122"] > [width="99%"]').should("be.visible");
    cy.get(
      '[qid="q_1122"] > [style="display: table-cell; padding: 5px 0px 10px 0px;"]'
    ).should("be.visible");
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
    cy.get('[inputvalue="0"] > #q_85_1280').click();
    cy.get(
      ':nth-child(6) > td.copy > [style="position: relative; display: block;"] > div > .copy'
    ).click();
    cy.get("#tr_1125\\|\\|1 > td.copy > .label").should("be.visible");
    cy.get('[inputvalue="1"] > #q_85_1281').click();
    cy.get(":nth-child(15) > td.copy > .label").should("be.visible");
    cy.get("#q_85_1133").should("be.visible");
    cy.get('[qid="h_1283"] > [width="99%"]').should("be.visible");

    cy.get(".cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST C.1.2");
    });

    cy.get('[qid="h_1284"] > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="1"] > #q_85_1284').click();

    cy.get('[name="submit1"]').click();

    //C.2 ExCODING AND DATA USE AGREEMENTS
    cy.get('#hd_0\\|\\| > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="Yes"] > #q_87_635').click();
    cy.get('[qid="h_637"] > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="No"] > #q_87_637').click();
    cy.get('#hd_637\\|\\|No > [width="99%"]').should("be.visible");
    cy.get(":nth-child(1) > td.copy > .label").should("be.visible");
    cy.get('[inputvalue="Yes"] > #q_87_639').click();
    cy.get(":nth-child(2) > .copy > .label").should("be.visible");
    cy.get("#q_87_2145").should("be.visible");
    cy.get(":nth-child(3) > td.copy > .label").should("be.visible");
    cy.get('[inputvalue="No"] > #q_87_640').click();
    cy.get(":nth-child(4) > td.copy > .label").should("be.visible");
    cy.get('[inputvalue="Yes"] > #q_87_641').click();
    cy.get(":nth-child(5) > td.copy > .label").should("be.visible");
    cy.get('[inputvalue="No"] > #q_87_642').click();
    cy.get(":nth-child(6) > td.copy").should("be.visible");
    cy.get('[qid="h_619"] > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="No"] > #q_87_619').click();
    cy.get('#hd_619\\|\\|No > [width="99%"]').should("be.visible");

    cy.get(".cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST C.2.1");
    });

    cy.get('[name="submit1"]').click();

    //D.1 OBTAING INFORMED CONENT FROM SUBJECTS
    cy.get('[qid="h_509"] > [width="99%"]').should("be.visible");
    cy.get('[qid="h_899"] > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="1"] > #q_75_899').click();
    cy.get("#doc_899_424").should("be.visible");

    cy.get('[qid="h_1325"] > [width="99%"]').should("be.visible");

    cy.get("#cke_1_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST D.1.1");
    });

    cy.get('[qid="h_896"] > [width="99%"]').should("be.visible");
    cy.get("#tbl_75_896").should("be.visible");
    cy.get(
      ':nth-child(2) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get("#att_901_1").should("be.visible");
    cy.get(
      ':nth-child(3) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get("#att_902_1").should("be.visible");
    cy.get("#q_75_906").type("My Full Form CYPRESS TEST D.1.1");
    cy.get('[inputvalue="1"] > #q_75_903').click();
    cy.get("#doc_903_424").should("be.visible");

    cy.get('#hd_903\\|\\|1 > [width="99%"]').should("be.visible");

    cy.get("#cke_2_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST D.1.2");
    });

    cy.get('[inputvalue="1"] > #q_75_907').click();

    cy.get("#cke_3_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST D.1.3");
    });

    cy.get('[inputvalue="1"] > #q_75_909').click();
    cy.get("#doc_909_424").should("be.visible");
    cy.get('[qid="h_1857"] > [width="99%"]').should("be.visible");

    cy.get('[qid="h_910"] > [width="99%"]').should("be.visible");

    cy.get("#cke_4_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST D.1.4");
    });

    cy.get('[qid="h_911"] > [width="99%"]').should("be.visible");

    cy.get("#cke_5_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST D.1.5");
    });

    cy.get('[qid="h_912"] > [width="99%"]').should("be.visible");
    cy.get("#cke_6_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST D.1.6");
    });

    cy.get('[inputvalue="1"] > #q_75_1806').click();
    cy.get("#doc_1806_424").should("be.visible");

    cy.get('[name="submit1"]').click();

    //D.2 WAIVER OF WRITTEN DOUCMENTATION OF INFORMED CONSENT
    cy.get('[qid="h_927"] > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="1"] > #q_76_913').click();
    cy.get(
      '[qid="q_914"] > [style="display: table-cell; padding: 5px 0px 10px 0px;"]'
    ).should("be.visible");
    cy.get(
      '#tbl_76_914 > tbody > :nth-child(1) > td.copy > [style="position: relative; display: block;"] > div > .copy'
    ).click();
    cy.get(".copy > .copyboldred").should("be.visible");
    cy.get(
      '#tbl_76_914 > tbody > :nth-child(3) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get("#att_916_1").should("be.visible");
    cy.get(
      ':nth-child(4) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get("#att_917_1").should("be.visible");
    cy.get(
      ':nth-child(7) > td.copy > [style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get("#att_1346_1").should("be.visible");
    cy.get(
      '[qid="q_922"] > [style="display: table-cell; padding: 5px 0px 10px 0px;"]'
    ).should("be.visible");

    cy.get('[qid="h_1495"] > [width="99%"]').should("be.visible");
    cy.get(".cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST D.2.1");
    });

    cy.get('[name="submit1"]').click();

    //D.3 FULL OR PARTIAL WAIVER OF CONSENT
    cy.get('[qid="h_928"] > [width="99%"]').should("be.visible");
    cy.get('[qid="q_929"] > td.copy').should("be.visible");
    cy.get(
      '[style="position: relative; display: block;"] > :nth-child(2) > .copy'
    ).click();
    cy.get(
      '[style="position: relative; display: block;"] > :nth-child(3) > .copy'
    ).click();
    cy.get(
      '[style="position: relative; display: block;"] > :nth-child(4) > .copy'
    ).click();

    cy.get('#hd_929\\|\\|2 > [width="99%"]').should("be.visible");

    cy.get("#cke_1_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST D.3.1");
    });

    cy.get('[qid="h_1996"] > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="0"] > #q_77_1996').click();
    cy.get('[qid="h_1997"] > [width="99%"]').should("be.visible");
    cy.get('#hd_929\\|\\|1\\,2\\,3 > [width="99%"]').should("be.visible");

    cy.get("#tbl_77_931 > tbody > :nth-child(1) > td.copy").should(
      "be.visible"
    );
    cy.get("#q_77_933").type(
      "Me explaining how the research involves no greater than minimal risk to subjects or to their privacy"
    );

    cy.get("#tbl_77_931 > tbody > :nth-child(2) > td.copy").should(
      "be.visible"
    );
    cy.get("#q_77_935").type(
      "Me explaining how the waiver will not adversely affect the rights and welfare of subjects (Consider the right of privacy and possible risk of breach of confidentiality in light of the information you wish to gather."
    );

    cy.get("#tbl_77_931 > tbody > :nth-child(3) > td.copy").should(
      "be.visible"
    );
    cy.get("#q_77_2167").type(
      "Me explaining why it would not be possible to conduct the study with only de-identified data (i.e. without any identifiers listed in A.9"
    );

    cy.get(":nth-child(4) > td.copy").should("be.visible");
    cy.get("#q_77_941").type(
      "Me explaining how the requirement to obtain consent would make the research impracticable, e.g., most of the subjects are lost to follow-up or are deceased"
    );

    cy.get(":nth-child(5) > td.copy").should("be.visible");
    cy.get("#q_77_937").type(
      "Me explaining (or indicate if not applicable) how, when appropriate, there are plans to provide subjects with pertinent information after their participation is over."
    );

    cy.get(":nth-child(6) > td.copy > .label").should("be.visible");
    cy.get("#q_77_939").type(
      "Me explaining how the risk to privacy is reasonable in relation to the importance of the knowledge to be gained"
    );

    cy.get('[qid="h_942"] > [width="99%"]').should("be.visible");

    cy.get("#tbl_77_942 > tbody > #tr_0\\|\\|0 > td.copy").should("be.visible");
    cy.get("#q_77_944").type(
      "Me explaining how not recording or using Protected Health Information (PHI) would make the research impracticable"
    );

    cy.get('[qid="h_1338"] > [width="99%"]').should("be.visible");

    cy.get("#cke_2_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Full Form CYPRESS TEST D.3.2");
    });

    cy.get('[qid="h_1890"] > [width="99%"]').should("be.visible");
    cy.get('[inputvalue="1"] > #q_77_1890').click();
    cy.get("#doc_1890_424 > .copyboldred").should("be.visible");

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
    cy.get('[style="padding:15px;"] > .button').click();

    //ATTACHMENTS
    cy.get("#btnContinue").click();

    //APPROVING DEPTS
    cy.get(
      '[style="padding:20px 20px 30px 20px;text-align:center;"] > .button'
    ).click();

    //COVER MEMO / SUBMIT
    cy.get(
      '.tablemainsub-sectioncontent-bottom > [align="center"] > .routingModal'
    ).click();
    cy.get("#modalPopup").should("be.visible");
    cy.get(".iAgreeCheckbox").click();
    cy.get(".proceedForm").should("be.visible");
    cy.get(".buttons > .buttonEformYellow").click();
  });
});

//Full Form ROUTING/ PI cert
it("Full Form Being Routed/PI Cert", () => {
  cy.visit(
    "https://orisstage.research.unc.edu/irb/index.cfm?event=general.logout"
  );
  cy.get("input#username.long")
    .type("cjfennim")
    .should("have.value", "cjfennim");
  cy.get("input#password.long").type("test{Enter}");

  cy.get("#dashboardmenu8 > :nth-child(2) > a").click();
  //cy.get('.searchColumn ui-state-default')
  cy.get('input[placeholder="Title"]').type("My Full Form Cypress Test");
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
  cy.get(".coiTableConfig_personnelTab > .searchresults").should("be.visible");
  cy.get("td.externalInstitutionHeaderName").should("be.visible");

  //sIRB tab
  cy.get("#Tab_sirb > .middlegreen").click();
  cy.get(".box_tab_info").should("be.visible");

  //Routing tab /Ceritfy as PI
  cy.get(".middleyellow").click();
  cy.get("#btnCertify").click();
  cy.get(".buttonEformYellow").click();
});

it("Full Form - Administering Dept Approval", () => {
  cy.visit(
    "https://orisstage.research.unc.edu/irb/index.cfm?event=general.logout"
  );
  cy.get("input#username.long").type("jslatt").should("have.value", "jslatt");
  cy.get("input#password.long").type("test{Enter}");

  cy.get("#nav > :nth-child(2) > a").click();
  cy.get("#dashboardmenu8 > dd.even > a").click();
  cy.get('input[placeholder="Title"]').type("My Full Form Cypress Test");
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
  cy.visit(
    "https://orisstage.research.unc.edu/irb/index.cfm?event=general.logout"
  );
  cy.get("input#username.long")
    .type("mhannah1")
    .should("have.value", "mhannah1");
  cy.get("input#password.long").type("test{Enter}");

  cy.get(
    'td[data-title="Submitted To IRB"] > .bucket > :nth-child(2) > table > tbody > :nth-child(2) > .countTotal > a'
  ).click();
  cy.wait(1000);
  cy.get("#bucketDataTable_filter > label > input").type(
    "My Full Form Cypress Test"
  );
  cy.get(".confirmAcceptByIRB").click();
});

it("Verify Study History Screen", () => {
  cy.visit(
    "https://orisstage.research.unc.edu/irb/index.cfm?event=general.logout"
  );
  cy.get("input#username.long")
    .type("cdcantre")
    .should("have.value", "cdcantre"); //Log in as Celeste (IRB Analyst)
  cy.get("input#password.long").type("test{Enter}");
  cy.get(
    'td[data-title="Accepted By IRB"] > .bucket > :nth-child(2) > table > tbody > :nth-child(2) > [data-column="TBD"] > a'
  ).click();
  cy.wait(1000);
  cy.get("#bucketDataTable_filter > label > input").type(
    "My Full Form Cypress Test"
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
  cy.get('[aria-labelledby="ui-dialog-title-modalPopup"]').should("be.visible");
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
  cy.get('[rowspan="2"]').should("contain", "My Full Form Cypress Test");

  //Study Notes
  cy.get(".studyNotesLink").click();
  cy.get("#modalPopup").should("be.visible");
  cy.get("#lastestUpdate").should("contain", "There is no current Study Note");
  cy.get("#noteText").should("contain", "Type here to begin a new Study Note");
  cy.get("#btnSave").should("be.visible");
  cy.get("#btnSaveAndClose").should("be.visible");
  cy.get("#btnClose").should("be.visible");
  cy.get("#noteText").type("Hello World!");
  cy.get("#btnSaveAndClose").click();
  cy.get("#studyNotesPreview").should("contain", "by Celeste Cantrell on");

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
  cy.visit(
    "https://orisstage.research.unc.edu/irb/index.cfm?event=general.logout"
  );
  cy.get("input#username.long")
    .type("cdcantre")
    .should("have.value", "cdcantre"); //Log in as Celeset (IRB Analyst)
  cy.get("input#password.long").type("test{Enter}");

  cy.get(
    'td[data-title="Accepted By IRB"] > .bucket > :nth-child(2) > table > tbody > :nth-child(2) > [data-column="TBD"] > a'
  )
    .click()
    .click();
  cy.wait(1000);
  cy.get("#bucketDataTable_filter > label > input").type(
    "My Full Form Cypress Test"
  );
  cy.get("#bucketDataTable > tbody > .odd > :nth-child(1) > a").click();
  cy.get(".appSwimLanes").should("be.visible");
  // Get window object
  cy.window().then((win) => {
    // Replace window.open(url, target)-function with our own arrow function
    cy.stub(win, "open", (url) => {
      // change window location to be same as the popup url
      win.location.href = Cypress.config().baseUrl + url;
    }).as("popup"); // alias it with popup, so we can refer it with @popup
  });

  // Click button which triggers javascript's window.open() call
  cy.get(".swimlane1 > div").click();
  // Make sure that it triggered window.open function call
  cy.get("@popup").should("be.called");

  //Verify header info

  cy.get("#irbInfo").should("be.visible");
  cy.get("#irbInfo > :nth-child(3) > :nth-child(1)").should("be.visible");
  cy.get("#irbInfo > :nth-child(3) > :nth-child(2)").should("be.visible");
  cy.get("#irbInfo > :nth-child(3) > :nth-child(3)").should("be.visible");

  //Create a Review
  cy.get("#navNextStep").click();
  cy.get("#hasReviewTypes").should("be.visible");
  cy.get("#reviewTypeId")
    .should("contain", "Select Review Type...")
    .and("contain", "Not Full Board (Expedited, Exempt, NHSR, other)")
    .and("contain", "Full Board (Meeting)")
    .select("Full Board (Meeting)");
  cy.get("#btnCreateReview").click();
  cy.wait(5000);

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

  //Verify Commitee section
  cy.get("#navCommittee").click();
  cy.get("#selectCommittee").should("be.visible");
  cy.get("#selectCommittee > .reviewerContainer")
    .should("contain", "Board A")
    .and("contain", "Board B")
    .and("contain", "Board C")
    .and("contain", "Board D")
    .and("contain", "Board E")
    .and("contain", "Board F");
  cy.get("#reviewersForCommittees").should("be.visible");
  cy.get(".committeeReviewers > :nth-child(1) > :nth-child(1)").should(
    "contain",
    "Primary"
  );
  cy.get(".committeeReviewers > :nth-child(2) > :nth-child(1)").should(
    "contain",
    "Secondary"
  );
  cy.get("#upcomingCommittees").should("be.visible");
  cy.get("#manageCommittees > a").should("contain", "Manage Committees");

  /*

//THIS TRIPS UP WEBSOCKETS

 //Assign the review to a Committee
  //Board A verification
  cy.get('#committeeId2').click()
  cy.get('#committeeDate2').should("be.visible")
  cy.wait(1000)
  //cy.get('#navCommittee > .subText').should('contain', 'Board A')

  //Board B verification
  cy.get('#committeeId7').click()
  cy.get('#committeeDate7').should("be.visible")
  //cy.get('#navCommittee > .subText').should('contain', 'Board B')

   //Board C verification
   cy.get('#committeeId8').click()
   cy.get('#committeeDate8').should("be.visible")
   //cy.get('#navCommittee > .subText').should('contain', 'Board C')
   
   //cy.pause()
   
   //Board D verification
   cy.get('#committeeId9').click()
   cy.get('#committeeDate9').should("be.visible")
   //cy.get('#navCommittee > .subText').should('contain', 'Board D')
    

   //Board E verification
   cy.get('#committeeId12').click()
   cy.get('#committeeDate12').should("be.visible")
   //cy.get('#navCommittee > .subText').should('contain', 'Board E')

   //Board F verification
   cy.get('#committeeId13').click()
   cy.get('#committeeDate13').should("be.visible")
   //cy.get('#navCommittee > .subText').should('contain', 'Board F')

   //Reviewers
   cy.get('#reviewersForCommittees').should("be.visible")
   cy.get('.committeeReviewers > :nth-child(1) > :nth-child(1)').should('contain', 'Primary:')
   cy.get('.committeeReviewers > :nth-child(2) > :nth-child(1)').should('contain', 'Secondary:')

   */

  //Upcoming Committee Agendas
  cy.get("#upcomingCommittees").should("be.visible");
  cy.get('[data-committeename="Board A"]').click();
  cy.wait(1000);

  //Select an Analyst
  cy.get("#navReviewResult").click();
  cy.get("#analystSelector").should("be.visible");
  cy.get(".managerTextbox").type("celeste");
  cy.get('[name="Celeste Cantrell"]').click();
  cy.wait(1000);

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
  cy.wait(3000);

  //Disabled review results
  cy.get("#reviewResult1").should("have.class", "stipsNotAllowed"); //Approved

  //Enabled review results
  cy.get("#reviewResult2").should("contain", "Deferral");
  cy.get("#reviewResult3").should("contain", "Disapproved");
  cy.get("#reviewResult4").should("contain", "Minor Stipulations");

  //Select Minor Stipulations
  cy.get("#reviewResult4").click();
  cy.wait(2000);

  //Draft Letter
  cy.get("#navLetter").click();
  cy.get("#letterTypeId")
    .should("contain", "Select Template Type...")
    .and("contain", "Minor Stips - Full Board")
    .and("contain", "UNC ONLY-Permission to Register")
    .select("Minor Stips - Full Board");
  cy.get("#btnDraftLetter").click();

  //Verify and Finalize letter
  cy.get("#sent_to_email").should("be.visible");
  cy.get("#sent_to_email2").should("be.visible");
  cy.get(".cke_wysiwyg_frame").should("be.visible");
  cy.get(".letterSubHeader").should("contain", "Minor Stips - Full Board");
  cy.get("#btnViewPDF").should("be.visible");
  cy.get("#btnDelete").should("be.visible");
  cy.get("#btnSaveLetter").should("be.visible");
  cy.get("#btnSendToChair").should("be.visible");
  cy.get("#btnFinalizeLetterModal").should("be.visible");

  //Delete and redraft letter
  cy.get("#btnDelete").click();
  cy.wait(3000);
  //cy.get(':nth-child(3) > [onclick="modalClose();"]').click() //close the draft letter modal
  cy.get("#navLetter").click();
  cy.get("#letterTypeId")
    .should("contain", "Select Template Type...")
    .and("contain", "Minor Stips - Full Board")
    .and("contain", "UNC ONLY-Permission to Register")
    .select("Minor Stips - Full Board");
  cy.get("#btnDraftLetter").click();

  //Verify and Finalize letter
  cy.get("#sent_to_email").should("be.visible");
  cy.get("#sent_to_email2").should("be.visible");
  cy.get(".cke_wysiwyg_frame").should("be.visible");
  cy.get(".letterSubHeader").should("contain", "Minor Stips - Full Board");
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
  cy.visit(
    "https://orisstage.research.unc.edu/irb/index.cfm?event=general.logout"
  );
  cy.get("input#username.long")
    .type("mhannah1")
    .should("have.value", "mhannah1");
  cy.get("input#password.long").type("test{Enter}");
  cy.get("#nav > :nth-child(2) > a").click();
  cy.get("#dashboardmenu5 > :nth-child(10) > a").click();
  cy.get('input[placeholder="Title"]').type("My Full Form Cypress Test");
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
  cy.visit(
    "https://orisstage.research.unc.edu/irb/index.cfm?event=general.logout"
  );
  cy.get("input#username.long")
    .type("cdcantre")
    .should("have.value", "cdcantre");
  cy.get("input#password.long").type("test{Enter}");

  cy.get(
    'td[data-title="PI Responses"] > .bucket > :nth-child(2) > table > tbody > :nth-child(2) > [data-column="TBD"] > a'
  ).click();
  cy.wait(1000);
  cy.get("#bucketDataTable_filter > label > input").type(
    "My Full Form Cypress Test"
  );
  cy.get("#bucketDataTable > tbody > .odd > :nth-child(1) > a").click();
  cy.wait(1000);

  // Get window object
  cy.window().then((win) => {
    // Replace window.open(url, target)-function with our own arrow function
    cy.stub(win, "open", (url) => {
      // change window location to be same as the popup url
      win.location.href = Cypress.config().baseUrl + url;
    }).as("popup"); // alias it with popup, so we can refer it with @popup
  });

  // Click button which triggers javascript's window.open() call
  // cy.get('#swimLaneReview0 > .swimlane1 > :nth-child(1)').click()
  cy.contains("Result: TBD").click();
  // Make sure that it triggered window.open function call
  cy.get("@popup").should("be.called");

  //Verify header info
  cy.get("#irbInfo").should("be.visible");
  cy.get("#irbInfo > :nth-child(3) > :nth-child(1)").should("be.visible");
  cy.get("#irbInfo > :nth-child(3) > :nth-child(2)").should("be.visible");
  cy.get("#irbInfo > :nth-child(3) > :nth-child(3)").should("be.visible");

  cy.viewport(1200, 700);

  //Create a Review
  cy.get("#navNextStep").click();
  cy.get("#hasReviewTypes").should("be.visible");
  cy.get("#reviewTypeId")
    .should("contain", "Select Review Type...")
    .and("contain", "Full Board (Response to Stips)")
    .and("contain", "Full Board (Reconsideration)")
    .select("Full Board (Response to Stips)");
  cy.get("#btnCreateReview").click();
  cy.wait(5000);

  //CAPTURE URL OF REVIEW WINDOW
  cy.url().as("reviewWindow");

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

  // Get window object
  cy.window().then((win) => {
    // Replace window.open(url, target)-function with our own arrow function
    cy.stub(win, "open", (url) => {
      // change window location to be same as the popup url
      win.location.href = Cypress.config().baseUrl + url;
    }).as("popup"); // alias it with popup, so we can refer it with @popup
  });

  //PI Responses
  cy.get("#navPIResponses").click();
  //cy.viewport(1200, 612)

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
  cy.get("#reviewResult1").click();
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

  //Draft Approval letter
  cy.get("#navNextStep").click();
  cy.get("#letterTypeId")
    .should("contain", "Select Template Type...")
    .and("contain", "Full Board Approval (Initial Cat 9 CR)")
    .and("contain", "Full Board Approval (Initial)")
    .select("Full Board Approval (Initial)");
  cy.get("#btnDraftLetter").click();
  cy.wait(1000);

  //Override COIs
  cy.get(".stopListCOI > .letterStopData > .overrideCOI").click();
  cy.get(".overrideCOIReason > .form-control").type("My automated response");
  cy.get("#saveOverride").click();

  cy.wait(1000);

  cy.reload();
  cy.wait(5000);
  cy.get("#navNextStep").click();

  //Confirm Management Plan
  cy.get(".finalStop").should("be.visible");
  cy.get(".stopListManagementPlan > .conditionsDescription").should(
    "contain",
    'There is at least one member of the study team that has a COI Review Result other than "No Conflict".'
  );
  cy.get(".stopListManagementPlan > .letterStopData").should(
    "contain",
    "Click here to confirm that the COI management plan has been reviewed."
  );
  cy.get(
    ".stopListManagementPlan > .letterStopData > #managementPlanOverride"
  ).click();

  cy.reload();
  cy.wait(5000);
  cy.get("#navNextStep").click();

  //Verify and Finalize letter
  cy.get("#sent_to_email").should("be.visible");
  cy.get("#sent_to_email2").should("be.visible");
  cy.get(".cke_wysiwyg_frame").should("be.visible");
  cy.get(".letterSubHeader").should("contain", "Full Board Approval (Initial)");
  cy.get("#btnViewPDF").should("be.visible");
  cy.get("#btnDelete").should("be.visible");
  cy.get("#btnSaveLetter").should("be.visible");
  cy.get("#btnSendToChair").should("be.visible");
  cy.get("#btnFinalizeLetterModal").should("be.visible");
  cy.get("#btnFinalizeLetterModal").click();
  cy.get(".ui-dialog-content").should("be.visible");
  cy.get(".ui-dialog-buttonset > .btn-info").click();
});
