describe("Promptly Reportable Information (PRI)", () => {

  const logIn =
  //"https://orisdev.research.unc.edu/irb_maint/index.cfm?event=home.dashboard.irbstudymanagement&irb_id=06-0006";
  "https://orisdev.research.unc.edu/irb_cb7_ph2/index.cfm?event=home.dashboard.irbstudymanagement&irb_id=06-0006";

  const submissionOwner = "mhannah1";
  const PI = "maceo";
  const IRBAnalyst = "geers";
  

  
  it("Create PRI Application", () => {
    cy.visit(logIn);
    cy.get("input#username.long")
      .type(submissionOwner)
      .should("have.value", submissionOwner);
    //.type('cjfennim').should('have.value', 'cjfennim')
    cy.get("input#password.long").type("test{Enter}");

    cy.viewport(1300, 750);

    cy.get("#PRISelector > .updateCardText > div")
      .should("contain", "Promptly Reportable Information")
      .click();

    // Brief Description of Promptly Reportable Information Screen
    cy.get("#divNSIHeader > .hd").should("be.visible");
    cy.get(
      '[href="https://policies.unc.edu/TDClient/2833/Portal/KB/ArticleDet?ID=132230"]'
    ).should("contain", "SOP 1401");

    cy.get(':nth-child(1) > tbody > :nth-child(1) > [width="14%"]').should(
      "contain",
      "IRB Number:"
    );
    cy.get(".classToLoad").should("contain", "06-0006");

    cy.get(
      ".bd > :nth-child(1) > tbody > :nth-child(2) > :nth-child(1)"
    ).should("contain", "PI:");
    cy.get("tbody > :nth-child(2) > :nth-child(2) > a").should(
      "contain",
      "Stephenson, John"
    );

    cy.get(":nth-child(3) > .label").should("contain", "Sponsor:");
    cy.get(".bd > :nth-child(1) > tbody > :nth-child(3) > .copy").should(
      "contain",
      "Cancer Research Institute"
    );

    cy.get(":nth-child(4) > .label").should("contain", "Study Title:");
    cy.get(".tablemainsub-allborders > tbody > :nth-child(4) > .copy").should(
      "contain",
      "Shock Treatment"
    );

    cy.get(
      ".bd > :nth-child(1) > tbody > :nth-child(1) > :nth-child(3)"
    ).should("contain", "Study Status:");
    cy.get(
      ".bd > :nth-child(1) > tbody > :nth-child(1) > :nth-child(4)"
    ).should("contain", "Approved");

    cy.get(
      ".bd > :nth-child(1) > tbody > :nth-child(2) > :nth-child(3)"
    ).should("contain", "IRB:");
    cy.get(
      ".bd > :nth-child(1) > tbody > :nth-child(2) > :nth-child(4)"
    ).should("contain", "Biomedical");

    cy.get(":nth-child(1) > tbody > :nth-child(1) > :nth-child(5)").should(
      "be.visible"
    ); //expiration date
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

    //ITEM LIST VERIFICATION

    /*
        //Item List
        cy.get('#divItemList').should("be.visible")
        cy.get('#divItemList > :nth-child(2)').should('contain', 'Admin Annual Review Submission')
        cy.get('#itemListForm1 > dd').should('contain', 'Administrative Annual Review Submission')
        cy.get('#itemListCOI > dd').should('contain', 'COI Disclosures / IRB Training')
        cy.get('#divItemList > :nth-child(5)').should('contain', 'Submission Routing')
        //PI CERT VERIFICATION PLACEHOLDER

        cy.get('#divItemList > :nth-child(9)').should('contain', 'View Submission')
       // cy.get('#itemListRevisions > dd').should('contain', 'View Revisions')
        cy.get('#itemListHistory > dd').should('contain', 'View History')
        cy.get('#itemListPDF > dd').should('contain', 'View PDF')

       */

    cy.get('[style="margin-left: 10px; margin-bottom: 10px;"]').should(
      "contain",
      "IRBIS has not been assessed for storing personally identifiable information or PHI"
    );

    cy.get("#divNSIForm1 > .hd").should(
      "contain",
      "Brief Description of Promptly Reportable Information"
    );
    cy.get(".copyboldred").should(
      "contain",
      "The brief description is limited to 200 characters."
    );
    cy.get(":nth-child(2) > .textbox-longest2").type("My Cypress PRI test");

    cy.get('[align="left"] > :nth-child(2) > .copy').should("be.visible");
    cy.get(":nth-child(2) > .copyred").should("be.visible");
    cy.get(
      '[style="padding:10px 0px 0px 25px; margin-top: 10px;"] > .textbox-longest2'
    ).should("be.visible");
    cy.get(
      '[style="padding:10px 0px 0px 25px; margin-top: 10px;"] > .copyred'
    ).should("be.visible");

    //Investigator's Brochure (IB) Update
    cy.get("#divNSIForm1b > .hd").should("contain", "Brochure (IB) Update");
    cy.get("#A00").should(
      "contain",
      "Is this submission regarding an Investigator"
    );
    //Question A00 Verification
    cy.get('[data-idtohide="A01,A02,A03,A04,APrompt"]').click(); //No
    cy.get("#A01").should("not.be.visible");
    cy.get("#A02").should("not.be.visible");
    cy.get("#A03").should("not.be.visible");
    cy.get("#A04").should("not.be.visible");
    cy.get("#APrompt").should("not.be.visible");

    cy.get('[data-idtoshow="A01,A02,A03,A04,APrompt"]').click(); //Yes
    cy.get('#A01 > #QA0Chk > [value="1"]').click();
    cy.get("#A02 > .copy").type("My PRI answer to Question 3");
    cy.get('#A03 > #QA0Chk > [value="1"]').click();
    cy.get("#A04").should("be.visible");
    cy.get("#A04 > .copy").type("My PRI answer to Question 5");
    cy.get("#APrompt").should(
      "contain",
      "Please create a modification linked to this PRI"
    );

    cy.get(
      '[style="text-align: center; padding:10px;margin-top: 10px;"] > .copy'
    ).click();

    //Form 2 - Exapnded Header Verification:
    cy.get(
      '[style="margin-top: 20px;"] > tbody > :nth-child(1) > [width="14%"]'
    ).should("contain", "Reference Id:");
    cy.get(
      '[style="margin-top: 20px;"] > tbody > :nth-child(1) > :nth-child(2) > a'
    ).should("be.visible"); //Actual reference id link

    cy.get(':nth-child(2) > [width="14%"]').should(
      "contain",
      "Date Submitted:"
    );
    cy.get(
      '[style="margin-top: 20px;"] > tbody > :nth-child(2) > :nth-child(2)'
    ).should("contain", "Not Submitted");

    cy.get(
      '[style="margin-top: 20px;"] > tbody > :nth-child(1) > :nth-child(3)'
    ).should("contain", "PRI Status:");
    cy.get(
      '[style="margin-top: 20px;"] > tbody > :nth-child(1) > :nth-child(4)'
    ).should("contain", "In Draft");

    cy.get(
      '[style="margin-top: 20px;"] > tbody > :nth-child(2) > :nth-child(3)'
    ).should("contain", "Date PI Certified:");
    cy.get(
      '[style="margin-top: 20px;"] > tbody > :nth-child(2) > :nth-child(4)'
    ).should("contain", "Not Certified");

    cy.get(
      '[style="margin-top: 20px;"] > tbody > :nth-child(1) > :nth-child(5)'
    ).should("contain", "Reportable:");
    cy.get(
      '[style="margin-top: 20px;"] > tbody > :nth-child(1) > :nth-child(6)'
    ).should("contain", "No");

    //Part A: Does This PRI Need to be Reported
    cy.get(".copyred").should(
      "contain",
      "IRBIS has not been assessed for storing personally identifiable information or PHI"
    );

    cy.get('[data-idtoshow="Q1B"]').click();
    cy.get("#Q1B").should("be.visible");
    cy.get("#Q2").should("not.be.visible");

    cy.get("#Q1BChk > .isReportable").click();
    cy.get("#COMMENTC > .copyboldred").should(
      "contain",
      "Based on your responses, you are required to submit this Promptly Reportable Information to the IRB. Click Submit to proceed."
    );

    cy.get('#Q1BChk > [value="0"]').click();
    cy.get("#COMMENTA > .copyboldred").should(
      "contain",
      "Based on your response, this event is not required to be reported to this IRB."
    );

    cy.get('[data-idtoshow="Q2,Q1A"]').click();
    cy.get("#Q1B").should("not.be.visible");
    cy.get("#Q2").should("be.visible");

    cy.get('#Q2Chk > [value="1"]').click();
    cy.get("#Q2Text > .copy").type("My explanation for question A2");

    cy.get('#Q3Chk > [value="0"]').click();
    cy.get("#COMMENTB").should(
      "contain",
      "Based on your response this event is not required to be reported to the IRB."
    );

    cy.get("#Q3Chk > .isReportable").click();
    cy.get("#Q3Text > .copy").type("My explanation for question A3");

    cy.get("#Q4").should("be.visible");
    cy.get(":nth-child(1) > .copybold").should("contain", "Economic:");
    cy.get(":nth-child(2) > .copybold").should("contain", "Legal:");
    cy.get(":nth-child(3) > .copybold").should("contain", "Physical:");
    cy.get(":nth-child(4) > .copybold").should("contain", "Psychological:");
    cy.get(":nth-child(5) > .copybold").should("contain", "Social:");

    cy.get("#Economic").click();
    cy.get("#Legal3").click();
    cy.get("#Physical2").click();
    cy.get("#Psychological3").click();
    cy.get("#Social").click();

    cy.get("#ExplanationText").should(
      "contain",
      "Please explain all responses."
    );
    cy.get("#ExplanationHouse > .requiredAnswer").type(
      "My explanation of my responses from A4"
    );

    cy.get("#Q6").should("contain", "A5) Does the event involve a potential");
    cy.get('#Q6Chk > [value="0"]').click();

    cy.get("#Q7").should(
      "contain",
      "A6) Has this event or issue been identified as noncompliance previously "
    );
    cy.get('#Q7Chk > [value="1"]').click();
    cy.get("#Q7Text").should(
      "contain",
      "If Yes, please explain and submit (or attach) relevant documentation to the PRI report."
    );
    cy.get("#Q7Text > .copy").type("My Explanation for A6");

    cy.get("#Q8").should(
      "contain",
      "A7) In review of the study’s deviation log, are there any similar issues or events?"
    );
    cy.get('#Q8Chk > [value="1"]').click();
    cy.get("#Q8Text").should("contain", "If yes, please explain.");
    cy.get("#Q8Text > .copy").type("My Explanation for A7");

    cy.get("#Q9").should(
      "contain",
      "A8) Is this submission regarding other Promptly Reportable Information as outlined in SOP 1401?"
    );
    cy.get('#Q9Chk > [value="1"]').click();
    cy.get("#Q9Text").should(
      "contain",
      "1. Please describe what is being reported and ensure all attachments are included."
    );
    cy.get("#Q9Text > .copy").type("My Explanation for A8");
    cy.get(':nth-child(5) > [value="1"]').click();
    cy.get("#Q9ChangesPrompt").should(
      "contain",
      "Please create a modification linked to this PRI and include the relevant material (e.g., protocol and consent)."
    );
    cy.get(':nth-child(9) > [value="1"]').click();
    cy.get('#A9INDConfirmChk > [value="0"]').click();

    cy.get("#FRMPOST > .copy").click();
    cy.get("#COMMENTC > .copyboldred").should(
      "contain",
      "Based on your responses, you are required to submit this Promptly Reportable Information to the IRB. Click Submit to proceed."
    );

    cy.get("#FRMPOST2 > .copy").click();

    //PART B: INFORMATION ABOUT THE EVENT
    cy.get(
      "div.tablemainsub-allborders > .tablemainsub-allborders > tbody > :nth-child(1) > .label"
    ).should("contain", "B1) Date of Event:");
    cy.get("#EventDate").type("1/1/2024", { force: true });
    cy.get(
      "div.tablemainsub-allborders > .tablemainsub-allborders > tbody > :nth-child(2) > .label"
    ).should("contain", "B2) Location of Event");
    cy.get(".textbox-longer").type("Chapel Hill");
    cy.get("td.copy > .label").should(
      "contain",
      "B3) Full Description of Event."
    );
    cy.get("td.copy > .copy").type("My Cypress PRI test description");

    //PART C: WAS THIS A SERIOUS ADVERSE EVENT?
    cy.get(
      '[name="ae"] > #divNSIForm3 > .bd > div.tablemainsub-allborders > .tablemainsub-allborders > tbody > :nth-child(1) > td.copy > #Q1 > .label'
    ).should("contain", "C1) Did the event result in death?");
    cy.get('#Q2Death > [value="0"]').click();
    cy.get("#Q2 > .label").should(
      "contain",
      "C2) Was the event life-threatening (i.e., placed the subject at immediate risk of death from the event, as it occurred)?"
    );
    cy.get('#Q2 > #Q2LifeThreat > [value="0"]').click();
    cy.get("#Q3 > .label").should(
      "contain",
      "C3) Did the event result in inpatient hospitalization or prolongation of existing hospitalization?"
    );
    cy.get('#Q3Hospital > [value="0"]').click();
    cy.get("#Q4 > .label").should(
      "contain",
      "C4) Did the event result in a persistent or significant disability/incapacity?"
    );
    cy.get('#Q4Disability > [value="1"]').click();
    cy.get("#Q4DisabilityExplain").should("contain", "If yes, please explain:");
    cy.get("#QDisabilityText > .copy").type("My explanation for C4");
    cy.get(":nth-child(5) > td.copy > #Q5 > .label").should(
      "contain",
      "C5) Did the event result in a congenital anomaly/birth defect?"
    );
    cy.get(
      ':nth-child(5) > td.copy > #Q5 > #Q2LifeThreat > [value="1"]'
    ).click();
    cy.get("#Q5AnomalyExplain").should("contain", "If yes, please explain:");
    cy.get("#QAnomalyText > .copy").type("My explanation for C5");
    cy.get(":nth-child(6) > td.copy > #Q5 > .label").should(
      "contain",
      "C6) Based upon appropriate medical judgment,"
    );
    cy.get('[onclick="Q6Chk(1)"]').click();
    cy.get("#Q6JeopardyExplain").type("My explanation for C6");
    cy.get("#QJeopardyText > .copy").type("My explanation for C6");

    //PART D: PROTOCOL/CONSENT FORMS
    cy.get(
      '[name="pc"] > #divNSIForm3 > .bd > div.tablemainsub-allborders > .tablemainsub-allborders > tbody > .odd > td.copy > #Q1 > .label'
    ).should("contain", "D1) Given this event");
    cy.get('#Q2Protocol > [value="1"]').click();
    cy.get("strong").should(
      "contain",
      "Please submit the changes as a modification."
    );
    cy.get("#QProtocolText > .copy").type(
      "My description of my changes for question D1"
    );

    //PART 3: ROOT CAUSE ANALYSIS AND CORRECTIVE AND PREVENTATIVE ACTION (CAPA) PLAN
    cy.get(
      '[name="ca"] > #divNSIForm3 > .bd > div.tablemainsub-allborders > .tablemainsub-allborders > tbody > .odd > td.copy > #Q1'
    ).should("contain", "E1) Root Cause Analysis:");
    cy.get("#QCorrectiveText > .copy").type("My response for E1");
    cy.get(".odd > td.copy > #Q2").should(
      "contain",
      "E2) Corrective and Preventative Actions:"
    );
    cy.get("#QCorrectiveText2 > .copy").type("My response for E2");
    cy.get(
      '[name="ca"] > #divNSIForm3 > .bd > div.tablemainsub-allborders > .tablemainsub-allborders > tbody > .odd > td.copy > #Q3'
    ).should("contain", "E3) Plan for Effectiveness Check:");
    cy.get("#QCorrectiveText3 > .copy").type("My response for E3");
    cy.get('#Q3 > [style="padding: 10px 0px 0px 0px;"]').should(
      "contain",
      "For additional information about completing a root cause analysis or establishing, please refer to OHRE SOP 1401"
    );

    cy.get("#FRMSUBMIT > .copy").click();

    //SUBMIT
    cy.get("form > .copy").click();
  });

  //PRI: PI CERT

  it("PRI Being Routed", () => {
    cy.visit(Cypress.config().devMaintBaseUrl);
    cy.get("input#username.long").type(PI).should("have.value", PI);
    cy.get("input#password.long").type("test{Enter}");

    cy.get("#nav > :nth-child(2) > a").click();
    cy.get("#dashboardmenu8 > :nth-child(2) > a").click();
    //cy.get('.searchColumn ui-state-default')
    cy.get('input[placeholder="Title"]').type("Shock Treatment");
    cy.get(".sorting_1 > a").click();

    cy.get(".ui-dialog").should("be.visible");
    cy.get("#ui-dialog-title-modalPopup").should(
      "contain",
      "Certify PRI for IRB Number 06-0006"
    );
    cy.get("#closeToEdit").should("be.visible");
    cy.get('[name="btnSubmit"]').click();
    //cy.get('#blankDiv').should('contain', 'Thank you. The Promptly Reportable Information submission for IRB 06-0006 has been successfully certified.')
  });

  //ACCEPT PRI AS REPORTABLE
  it("PRI Accept for Review", () => {
    cy.visit(Cypress.config().devMaintBaseUrl);
    cy.get("input#username.long").type(IRBAnalyst).should("have.value", IRBAnalyst);
    cy.get("input#password.long").type("test{Enter}");

    cy.viewport(1200, 700);
    cy.get(
      'td[data-title="Submitted To IRB"] > .bucket > :nth-child(2) > table > tbody > :nth-child(3) > .countTotal > a'
    ).click();
    cy.wait(1000);
    cy.get("#bucketDataTable_filter > label > input").type("Shock Treatment");
    cy.get("#bucketDataTable > tbody > .odd > :nth-child(1) > a").click();
    cy.get(":nth-child(1) > dd > a").click();
    cy.get(".button").click();
  });

  //PRI STUDY HISTORY SCREEN/SUBMISSION DETIALS
  it("PRI Verify Study History/Submission Details", () => {
    cy.viewport(1500, 800);
    cy.visit(Cypress.config().devMaintBaseUrl);
    cy.get("input#username.long").type(IRBAnalyst).should("have.value", IRBAnalyst);
    cy.get("input#password.long").type("test{Enter}");

    cy.get(
      'td[data-title="Accepted By IRB"] > .bucket > :nth-child(2) > table > tbody > :nth-child(3) > [data-column="TBD"] > a'
    ).click();

    cy.wait(1000);
    cy.get("#bucketDataTable_filter > label > input").type("Shock Treatment");
    cy.get("#bucketDataTable > tbody > .odd > :nth-child(1) > a").click();

    cy.get("span > u").should("contain", "Submission Type");
    cy.get('[width="7%"] > u').should("contain", "Reference ID");
    cy.get('[width="11%"] > u').should("contain", "Approval State");
    cy.get(":nth-child(4) > u").should("contain", "Date Routing Complete");
    cy.get(":nth-child(5) > u").should("contain", "Action Date");
    cy.get(":nth-child(6) > u").should("contain", "Expiration Date");
    cy.get(":nth-child(7) > u").should("contain", "AR Date");
    cy.get('[nowrap="nowrap"] > u').should("contain", "Review Type");

    cy.get(':nth-child(2) > tbody > tr > [width="115px"] > label').should(
      "contain",
      "Event Title:"
    );
    cy.get(".searchresults > :nth-child(3)").should("contain", "Event Status:");
    cy.get(".searchresults > :nth-child(4)").should(
      "contain",
      "Submitted To IRB"
    );
    cy.get(
      ':nth-child(1) > :nth-child(1) > table > tbody > tr > [width="140px"] > label'
    ).should("contain", "IRB:");
    cy.get('#date_received_cell > tbody > tr > [width="140px"] > label').should(
      "contain",
      "Accepted By IRB:"
    );
    cy.get("#studytype").should("be.visible");
    cy.get(".submissionNoteLink").should("be.visible");
    cy.get('#date_received_cell > tbody > tr > [width="140px"] > label').should(
      "contain",
      "IRB:"
    );

    cy.get(
      ':nth-child(1) > :nth-child(2) > table > tbody > tr > [width="115px"] > label'
    ).should("contain", "Primary Analyst:");
    cy.get("#managerpid").should("be.visible");
    cy.get(
      ':nth-child(2) > :nth-child(2) > table > tbody > tr > [width="115px"] > label'
    ).should("contain", "Secondary Analyst:");
    cy.get("#managerpid2").should("be.visible");
    cy.get(
      ':nth-child(3) > :nth-child(2) > table > tbody > tr > [width="115px"] > label'
    ).should("contain", "IRB Chair:");
    cy.get("#chairpid").should("be.visible");
    cy.get(
      ":nth-child(1) > :nth-child(2) > table > tbody > tr > :nth-child(2) > .button"
    ).click();
    //cy.get('#date_received_cell > tbody > tr > [width="140px"] > label').should("be.visible")
  });

  it("PRI Verify Application/Review popup", () => {
    cy.visit(Cypress.config().devMaintBaseUrl);
    cy.viewport(1200, 700);
    //cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm?event=admin.reviewWindow&reviewId=592858');
    cy.get("input#username.long").type("geers").should("have.value", "geers");
    //.type('cjfennim').should('have.value', 'cjfennim')
    cy.get("input#password.long").type("test{Enter}");

    cy.get(
      'td[data-title="Accepted By IRB"] > .bucket > :nth-child(2) > table > tbody > :nth-child(3) > [data-column="TBD"] > a'
    ).click();
    cy.viewport(1200, 700);
    cy.wait(1000);
    cy.get("#bucketDataTable_filter > label > input").type("Shock Treatment");
    cy.get("#bucketDataTable > tbody > .odd > :nth-child(1) > a").click();

    // Get window object
    cy.window().then((win) => {
      // Replace window.open(url, target)-function with our own arrow function
      cy.stub(win, 'open').callsFake (url => 
        // change window location to be same as the popup url
        win.location.href = Cypress.config().devMaintBaseUrl + url);
      }).as("application"); // alias it with popup, so we can refer it with @popup
    // Click button which triggers javascript's window.open() call
    cy.contains("Application").click();

    //REVIEW POPUP

    //Header
    cy.get("#irbInfo").should("be.visible");
    cy.get("#irbInfo > :nth-child(1) > :nth-child(1)").should(
      "contain",
      "06-0006"
    );
    cy.get("#irbInfo > :nth-child(2) > :nth-child(1)").should(
      "contain",
      "Promptly Reportable Information"
    );
    cy.get(":nth-child(1) > strong").should("contain", "PI:");
    cy.get("#irbInfo > :nth-child(3) > :nth-child(1)").should(
      "contain",
      "Stephenson, John"
    );
    cy.get(":nth-child(2) > strong").should("contain", "Analyst:");
    cy.get("#analystName").should("contain", "Geers, Eric");
    cy.get(":nth-child(3) > strong").should("contain", "Admin Dept:");
    cy.get("#irbInfo > :nth-child(3) > :nth-child(3)").should(
      "contain",
      "Office of the Vice Chancellor for Research"
    );

    //Create a review
    cy.get("#navNextStep").click();
    cy.get("#hasReviewTypes").should("be.visible");
    cy.get("#reviewTypeId")
      .should("contain", "Select Review Type...")
      .and("contain", "Not Full Board (Expedited, Exempt, NHSR, other)")
      .and("contain", "Full Board")
      .select("Not Full Board (Expedited, Exempt, NHSR, other)");
    cy.get("#btnCreateReview").click();
    cy.wait(2000);

    //Verify left rail
    cy.get("#navContainer").should("be.visible");
    // cy.get('#navReviewType').should("be.visible")
    // cy.get('#navReviewConditions').should("be.visible")
    cy.get("#navNextStep").should("be.visible");
    cy.get("#navApplication").should("be.visible");
    cy.get("#navStipulations").should("be.visible");
    cy.get("#navOptions").should("be.visible");
    //cy.get('#navPIResponses').should("be.visible")
    cy.get("#navReviewResult").should("be.visible");
    cy.get("#navReviewNotes").should("be.visible");
    cy.get("#navLetter").should("be.visible");

    //Verify review conditions -> REVIEW
    cy.get("#reviewConditionsIcon").should("have.class", "stopIcon pass");
    cy.get("#navReviewConditions").click();
    cy.get("#stopsHeader > b").should("contain", "PASS");

    cy.get("#stopsHeader").should("be.visible");
    cy.get("#optionsList > :nth-child(1)").should("be.visible");
    cy.get("#stopListStipulations").should("have.class", "stopIcon na");
    cy.get("#stopListCategory").should("have.class", "stopIcon na");
    cy.get("#stopListLetterEmail").should("have.class", "stopIcon na");
    //cy.get('#stopListPIResponse').should('have.class', 'stopIcon na')
    cy.get("#stopListChecklist")
      .should("be.visible")
      .should("have.class", "stopIcon na");
    cy.get("#stopListPRIResponse")
      .should("be.visible")
      .should("have.class", "stopIcon na");
    cy.get("#stopListModExpiration")
      .should("be.visible")
      .should("have.class", "stopIcon na");
    cy.get("#stopListPairedPM")
      .should("be.visible")
      .should("have.class", "stopIcon na");

    //Verify review conditions -> SUBMISSION
    cy.get("#optionsList > :nth-child(2)").should("be.visible");
    cy.get("#stopListFlags")
      .should("be.visible")
      .should("have.class", "stopIcon pass");
    cy.get("#stopListExternalInstitutions").should("have.class", "stopIcon na");
    cy.get("#stopListRouting").should("have.class", "stopIcon na");
    cy.get("#stopListPrisoners").should("have.class", "stopIcon na");

    //Verify review conditions -> COI
    cy.get("#optionsList > :nth-child(3)").should("be.visible");
    cy.get("#stopListCOI").should("have.class", "stopIcon na");
    cy.get("#stopListManagementPlan").should("have.class", "stopIcon na");
    cy.get("#stopListHSP")
      .should("be.visible")
      .should("have.class", "stopIcon na");
    cy.get("#stopListGCP").should("have.class", "stopIcon na");
    cy.get("#closeNavContainer").click();

    cy.get("#header0").should("contain", "Promptly Reportable Information");
    cy.get("#screenDetails").should("contain", "Study Details");
    cy.get("#answerInformation").should("be.visible");
    cy.get("#eventHeaderInfo > tbody > :nth-child(1) > :nth-child(1)").should(
      "contain",
      "IRB Number:"
    );
    cy.get('[width="40%"]').should("contain", "06-0006");
    cy.get("#eventHeaderInfo > tbody > :nth-child(2) > :nth-child(1)").should(
      "contain",
      "PI:"
    );
    cy.get("#eventHeaderInfo > tbody > :nth-child(2) > :nth-child(2)").should(
      "contain",
      "Stephenson, John"
    );
    cy.get("#eventHeaderInfo > tbody > :nth-child(3) > :nth-child(1)").should(
      "contain",
      "Sponsor"
    );
    cy.get(':nth-child(3) > [colspan="3"]').should(
      "contain",
      "Cancer Research Institute"
    );
    cy.get("#eventHeaderInfo > tbody > :nth-child(4) > :nth-child(1)").should(
      "contain",
      "Study Title"
    );
    cy.get("#headerInfoTitle").should("contain", "Shock Treatment");
    cy.get("#eventHeaderInfo > tbody > :nth-child(1) > :nth-child(3)").should(
      "contain",
      "Study Status:"
    );
    cy.get('[width="60%"]').should("contain", "Approved");
    cy.get("#eventHeaderInfo > tbody > :nth-child(2) > :nth-child(3)").should(
      "contain",
      "IRB:"
    );
    cy.get("#eventHeaderInfo > tbody > :nth-child(2) > :nth-child(4)").should(
      "contain",
      "Biomedical"
    );

    cy.get("#screen0").should("contain", "Brief Description of Event");
    cy.get("#questionBriefDescription").should(
      "contain",
      "The brief description is limited to 200 characters."
    );
    cy.get("#questionId1 > .answerContainer > .paperPadding").should(
      "contain",
      "My Cypress PRI test"
    );

    cy.get("#screen1").should("contain", "Brochure (IB) Update");

    cy.get("#questionA00").should(
      "contain",
      "1. Is this submission regarding an Investigator"
    );
    cy.get("#questionId50 > .answerContainer > .paperPadding").should(
      "contain",
      "Yes"
    );

    cy.get("#questionA01").should(
      "contain",
      "2. Did the IB update change the risk assessment from what was previously approved?"
    );
    cy.get("#questionId51 > .answerContainer > .paperPadding").should(
      "contain",
      "Yes"
    );

    cy.get("#questionA02").should(
      "contain",
      "3. Please explain why or why not this changes the risk assessment"
    );
    cy.get("#questionId52 > .answerContainer > .paperPadding").should(
      "contain",
      "My PRI answer to Question 3"
    );

    cy.get("#questionA03").should(
      "contain",
      "4. Have any current or past subjects that are under the purview of UNC"
    );
    cy.get("#questionId53 > .answerContainer > .paperPadding").should(
      "contain",
      "Yes"
    );

    cy.get("#questionA04").should(
      "contain",
      "5. Please provide a reconsent or verbal notification plan that includes current and past participation"
    );
    cy.get("#questionId54 > .answerContainer > .paperPadding").should(
      "contain",
      "My PRI answer to Question 5"
    );

    cy.get("#screen2").should(
      "contain",
      "Does This Promptly Reportable Information Need to be Reported?"
    );

    cy.get("#questionA1").should(
      "contain",
      "A1. Did this event occur at a site for which a UNC-Chapel Hill IRB has direct oversight responsibility or involve a research participant at one of those sites?"
    );
    cy.get("#questionId2 > .answerContainer > .paperPadding").should(
      "contain",
      "Yes"
    );
    cy.get("#questionA1Sites").should(
      "contain",
      "Please indicate which site or sites where this PRI applies."
    );
    cy.get("#questionId68 > .answerContainer > .paperPadding").should(
      "contain",
      "None"
    );

    cy.get("#questionA2Yes").should(
      "contain",
      "A2. Was the event unexpected in nature, severity, or frequency? (See SOP 1401)"
    );
    cy.get("#questionId4 > .answerContainer > .paperPadding").should(
      "contain",
      "Yes"
    );

    cy.get(".subQuestion").should("contain", "Please explain all responses:");
    cy.get(".subQuestion > div").should(
      "contain",
      "My explanation for question A2"
    );

    cy.get("#questionA3").should(
      "contain",
      "A3. Do you think the event was related or possibly related to this research?"
    );
    cy.get("#questionId6 > .answerContainer > .paperPadding").should(
      "contain",
      "Yes"
    );

    cy.get("#questionA4").should(
      "contain",
      "A4. Does the event suggest that the research places subjects or others at a greater risk of harm than was previously known or recognized?"
    );
    cy.get("#questionId8 > .answerContainer > .paperPadding").should(
      "be.visible"
    );
    cy.get('#questionId8 > .answerContainer > .paperPadding > .subQuestion > div').should(
      "contain",
      "My explanation of my responses from A4"
    );

    cy.get("#questionA5").should(
      "contain",
      "Does the event involve a potential(1) inappropriate sharing or disclosure of a participant"
    );

    cy.get("#questionId55 > .answerContainer > .paperPadding").should(
      "contain",
      "No"
    );

    cy.get("#questionA6").should(
      "contain",
      "A6. Has this event or issue been identified as noncompliance previously for either this study or other studies that the PI has oversight of"
    );
    cy.get("#questionId56 > .answerContainer > .paperPadding").should(
      "contain",
      "Yes"
    );

    cy.get("#questionA7").should(
      "contain",
      "A7. In review of the study’s deviation log, are there any similar issues or events?"
    );
    cy.get("#questionId58 > .answerContainer > .paperPadding").should(
      "contain",
      "Yes"
    );

    cy.get("#questionA8").should(
      "contain",
      "A8. Is this submission regarding other Promptly Reportable Information as outlined in SOP 1401?"
    );
    cy.get("#questionId60 > .answerContainer").should("contain", "Yes");

    cy.get("#screen3").should("contain", "Information About the Event");

    cy.get("#questionB1").should("contain", "B1. Date of Event:");
    cy.get("#questionId15 > .answerContainer > .paperPadding").should(
      "contain",
      "01/01/2024"
    );

    cy.get("#questionB2").should("contain", "B2. Location of Event:");
    cy.get("#questionId16 > .answerContainer > .paperPadding").should(
      "contain",
      "Chapel Hill"
    );

    cy.get("#questionB3").should("contain", "B3. Full Description of Event.");
    cy.get("#questionId17 > .answerContainer > .paperPadding").should(
      "contain",
      "My Cypress PRI test description"
    );

    cy.get("#screen4").should("contain", "Was this a serious adverse event?");

    cy.get("#questionC1").should(
      "contain",
      "C1. Did the event result in death?"
    );
    cy.get("#questionId67 > .answerContainer > .paperPadding").should(
      "contain",
      "No"
    );

    cy.get("#questionC2").should(
      "contain",
      "C2. Was the event life-threatening (i.e., placed the subject at immediate risk of death from the event, as it occurred)?"
    );
    cy.get("#questionId21 > .answerContainer > .paperPadding").should(
      "contain",
      "No"
    );

    cy.get("#questionC3").should(
      "contain",
      "C3. Did the event result in inpatient hospitalization or prolongation of existing hospitalization?"
    );
    cy.get("#questionId21 > .answerContainer > .paperPadding").should(
      "contain",
      "No"
    );

    cy.get("#screen5").should("contain", "Protocol/Consent Forms");
    cy.get("#questionD1").should(
      "contain",
      "D1. Given this event's occurrence, are there revisions to the study or consent documents that you would like to submit at this time?"
    );
   
    cy.get('#questionId32 > .answerContainer > .paperPadding > .subQuestion').should(
      "contain",
      "Describe your changes below"
    );
    cy.get('#questionId32 > .answerContainer > .paperPadding > .subQuestion > div').should(
      "contain",
      "My description of my changes for question D1"
    );
    
    cy.get("#screen6").should(
      "contain",
      "Root Cause Analysis and Corrective and Preventative Action (CAPA) Plan"
    );
    cy.get("#questionE1").should("contain", "Root Cause Analysis:");
    cy.get("#questionId35 > .answerContainer > .paperPadding").should(
      "contain",
      "My response for E1"
    );

    cy.get("#questionE2").should(
      "contain",
      "Corrective and Preventative Actions:"
    );
    cy.get("#questionId36 > .answerContainer > .paperPadding").should(
      "contain",
      "My response for E2"
    );

    cy.get("#questionE3").should("contain", " Plan for Effectiveness Check:");
    cy.get("#questionId37 > .answerContainer > .paperPadding").should(
      "contain",
      "My response for E3"
    );

    cy.get("#documentLibrary").should("contain", "Document Library");

    cy.get("#screenPIAttachments").should("contain", "PI Attachments");

    cy.get("#screenOHREAttachments").should("contain", "OHRE Attachments");

    cy.get("#screenEmailManagement").should(
      "contain",
      "Email Management for IRB NO: 06-0006"
    );

    //CREATE STIP
    cy.get("#addStipForQuestion8").click();
    cy.get("#questionId8 > #stip0 > .stipHeader").should(
      "contain",
      "Stipulation: by Eric Geers on"
    );
    cy.wait(3000);
    cy.get(".cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My test PRI stip for question A4");
    });

    cy.get("#questionId8 > #stip0 > .stipButtons > .save").click();
    cy.get(".editStipulation > p").should(
      "contain",
      "My test PRI stip for question A4"
    );

    //cy.get('#stipCount').should('contain', '1')

    //RECORD RESULTS
    cy.get("#navReviewResult").click();

    //Disabled review results:
    cy.get("#reviewResult1").should("contain", "Closed");
    cy.get("#reviewResult2").should("contain", "Minor Stipulations");
    cy.get("#reviewResult3").should("contain", "Noted");
    cy.get("#reviewResult4").should("contain", "Suspended");
    cy.get("#reviewResult5").should("contain", "Terminated");
    cy.get("#reviewResult6").should("contain", "Withdrawn");

    //Select Minor Stipulations
    cy.get("#reviewResult2").click();
    cy.get("#PIResponseDueDateContainer > :nth-child(1)").should(
      "contain",
      "PI Response Due Date"
    );
    cy.get("#PIResponseDueDateAlert").should(
      "contain",
      "PI Response Due Date is required"
    );
    cy.get(
      "#PIResponseDueDateContainer > .reviewResultContainer > .ui-datepicker-trigger > img"
    ).click();
    cy.get(":nth-child(5) > :nth-child(4) > .ui-state-default").click();

    //Draft Letter
    cy.wait(2000);
    cy.get("#navLetter").should("be.visible").click();
    cy.wait(2000);
    cy.get("#modalPopup").should("be.visible");
    cy.get("#letterTypeId")
      .should("contain", "Select Template Type...")
      .and("contain", "PRI EXPEDITED STIP LETTER")
      .and("contain", "PRI EXPEDITED STIP LETTER INCLUDING FINDING & CAPA")
      .select("PRI EXPEDITED STIP LETTER");

    cy.get("#btnDraftLetter").click();

    //Verify and Finalize letter
    cy.get("#sent_to_email").should("be.visible");
    cy.get("#sent_to_email2").should("be.visible");
    cy.get(".cke_wysiwyg_frame").should("be.visible");
    cy.get(".letterSubHeader").should("contain", "PRI EXPEDITED STIP LETTER");
    cy.get("#btnViewPDF").should("be.visible");
    cy.get("#btnDelete").should("be.visible");
    cy.get("#btnSaveLetter").should("be.visible");
    cy.get("#btnSendToChair").should("be.visible");
    cy.get("#btnFinalizeLetterModal").should("be.visible");
    cy.get("#btnFinalizeLetterModal").click();
    cy.get(".ui-dialog-content").should("be.visible");
    cy.get(".ui-dialog-buttonset > .btn-info").click();
  });

  it("PRI Waiting PI Response", () => {
    cy.visit(Cypress.config().devMaintBaseUrl );
    cy.get("input#username.long")
      .type(submissionOwner)
      .should("have.value", submissionOwner);
    cy.get("input#password.long").type("test{Enter}");
    cy.get("#nav > :nth-child(2) > a").click();
    cy.get("#dashboardmenu5 > :nth-child(10) > a").click();
    cy.get('input[placeholder="Title"]').type("Shock Treatment");
    cy.get(".odd > :nth-child(2) > a").click();

    //RESPOND TO STIPULATIONS
    cy.get("#itemListStipulations > .stripeMe > dd > a").click();
    cy.get("#A03 > .label").should(
      "contain",
      "4) Have any current or past subjects that are under the purview of UNC"
    );
    cy.get("#A03 > .bYN").should("contain", "Yes");
    cy.get(".respondToStip").click();

    cy.wait(1000);

    cy.get("iframe").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My test PRI Response for question A4");
      cy.get(".saveNSIStipResponse").click();
    });
    //RESBUMIT PRI
    cy.get("#itemListResubmit > .stripeMe > dd > a").click();
    cy.get("#modalPopup > :nth-child(1)").should("be.visible");
    cy.get("form > .copy").click();
  });

  //PRI: PI CERT

  it("Resubmit PRI to Routing", () => {
    cy.visit(Cypress.config().devMaintBaseUrl);
    cy.get("input#username.long").type(PI).should("have.value", PI);
    //.type('cjfennim').should('have.value', 'cjfennim')
    cy.get("input#password.long").type("test{Enter}");

    cy.get("#nav > :nth-child(2) > a").click();
    cy.get("#dashboardmenu8 > :nth-child(2) > a").click();
    //cy.get('.searchColumn ui-state-default')
    cy.get('input[placeholder="Title"]').type("Shock Treatment");
    cy.get(".sorting_1 > a").click();

    cy.get(".ui-dialog").should("be.visible");
    cy.get("#ui-dialog-title-modalPopup").should(
      "contain",
      "Certify PRI for IRB Number 06-0006"
    );
    cy.get("#closeToEdit").should("be.visible");
    cy.get('[name="btnSubmit"]').click();
    cy.get("#blankDiv").should(
      "contain",
      "Thank you. The Promptly Reportable Information submission for IRB 06-0006 has been successfully certified."
    );
  });

  it("Resubmitted PRI - Verify Application/Review popup", () => {
    cy.visit(Cypress.config().devMaintBaseUrl);
    cy.get("input#username.long").type(IRBAnalyst).should("have.value", IRBAnalyst);
    cy.get("input#password.long").type("test{Enter}");
    cy.viewport(1400, 700);

    cy.get(
      'td[data-title="PI Responses"] > .bucket > :nth-child(2) > table > tbody > :nth-child(3) > [data-column="TBD"] > a'
    ).click();
    //cy.get('td[data-title="PI Responses"] > .bucket > :nth-child(2) > table > tbody > :nth-child(3) > [data-column="NFB"] > a').click()
    cy.viewport(1200, 700);
    cy.wait(1000);
    cy.get("#bucketDataTable_filter > label > input").type("Shock Treatment");
    cy.get("#bucketDataTable > tbody > .odd > :nth-child(1) > a").click();

    cy.contains("PI Responses (1)").should("be.visible");

    // Get window object
    cy.window().then((win) => {
      // Replace window.open(url, target)-function with our own arrow function
      cy.stub(win, 'open').callsFake (url => 
        // change window location to be same as the popup url
        win.location.href = Cypress.config().devMaintBaseUrl + url);
      }).as("application"); // alias it with popup, so we can refer it with @popup
    // Click button which triggers javascript's window.open() call
    cy.contains("Application").click();

    //REVIEW POPUP
    //Header
    cy.get("#irbInfo").should("be.visible");
    cy.get("#irbInfo > :nth-child(1) > :nth-child(1)").should(
      "contain",
      "06-0006"
    );
    cy.get("#irbInfo > :nth-child(2) > :nth-child(1)").should(
      "contain",
      "Promptly Reportable Information"
    );
    cy.get(":nth-child(1) > strong").should("contain", "PI:");
    cy.get("#irbInfo > :nth-child(3) > :nth-child(1)").should(
      "contain",
      "Stephenson, John"
    );
    cy.get(":nth-child(2) > strong").should("contain", "Analyst:");
    cy.get("#analystName").should("contain", "Geers, Eric");
    cy.get(":nth-child(3) > strong").should("contain", "Admin Dept:");
    cy.get("#irbInfo > :nth-child(3) > :nth-child(3)").should(
      "contain",
      "Office of the Vice Chancellor for Research"
    );

    //Create a review
    cy.get("#navNextStep").click();
    cy.get("#hasReviewTypes").should("be.visible");
    cy.get("#reviewTypeId")
      .should("contain", "Select Review Type...")
      .and("contain", "Not Full Board (Expedited, Exempt, NHSR, other)")
      .and("contain", "Full Board")
      .select("Not Full Board (Expedited, Exempt, NHSR, other)");
    cy.get("#btnCreateReview").click();
    cy.wait(2000);

    //Verify left rail
    cy.get("#navContainer").should("be.visible");
    cy.get("#navReviewType").should("be.visible");
    cy.get("#navReviewConditions").should("be.visible");
    cy.get("#navNextStep").should("be.visible");
    cy.get("#navApplication").should("be.visible");
    cy.get("#navStipulations").should("be.visible");
    cy.get("#navOptions").should("be.visible");
    cy.get("#navPIResponses").should("be.visible");
    cy.get("#navReviewResult").should("be.visible");
    cy.get("#navReviewNotes").should("be.visible");
    cy.get("#navLetter").should("be.visible");

    //Verify review conditions -> REVIEW
    //cy.wait(2000)
    cy.get("#reviewConditionsIcon").should("have.class", "stopIcon fail");
    cy.get("#navReviewConditions").click();
    cy.get("#stopsHeader > b").should("contain", "FAIL");

    cy.get("#stopsHeader").should("be.visible");
    cy.get("#optionsList > :nth-child(1)").should("be.visible");
    cy.get("#stopListStipulations").should("have.class", "stopIcon na");
    cy.get("#stopListCategory").should("have.class", "stopIcon na");
    cy.get("#stopListLetterEmail").should("have.class", "stopIcon na");
    //cy.get('#stopListPIResponse').should('have.class', 'stopIcon na')
    cy.get("#stopListChecklist")
      .should("be.visible")
      .should("have.class", "stopIcon na");
    cy.get("#stopListPRIResponse")
      .should("be.visible")
      .should("have.class", "stopIcon na");
    cy.get("#stopListModExpiration")
      .should("be.visible")
      .should("have.class", "stopIcon na");
    cy.get("#stopListPairedPM")
      .should("be.visible")
      .should("have.class", "stopIcon na");

    //Verify review conditions -> SUBMISSION
    cy.get("#optionsList > :nth-child(2)").should("be.visible");
    cy.get("#stopListFlags")
      .should("be.visible")
      .should("have.class", "stopIcon pass");
    cy.get("#stopListExternalInstitutions").should("have.class", "stopIcon na");
    cy.get("#stopListRouting").should("have.class", "stopIcon na");
    cy.get("#stopListPrisoners").should("have.class", "stopIcon na");

    //Verify review conditions -> COI
    cy.get("#optionsList > :nth-child(3)").should("be.visible");
    cy.get("#stopListCOI").should("have.class", "stopIcon na");
    cy.get("#stopListManagementPlan").should("have.class", "stopIcon na");
    cy.get("#stopListHSP")
      .should("be.visible")
      .should("have.class", "stopIcon na");
    cy.get("#stopListGCP").should("have.class", "stopIcon na");
    cy.get("#closeNavContainer").click();

    cy.get("#header0").should("contain", "Promptly Reportable Information");
    cy.get("#screenDetails").should("contain", "Study Details");
    cy.get("#answerInformation").should("be.visible");
    cy.get("#eventHeaderInfo > tbody > :nth-child(1) > :nth-child(1)").should(
      "contain",
      "IRB Number:"
    );
    cy.get('[width="40%"]').should("contain", "06-0006");
    cy.get("#eventHeaderInfo > tbody > :nth-child(2) > :nth-child(1)").should(
      "contain",
      "PI:"
    );
    cy.get("#eventHeaderInfo > tbody > :nth-child(2) > :nth-child(2)").should(
      "contain",
      "Stephenson, John"
    );
    cy.get("#eventHeaderInfo > tbody > :nth-child(3) > :nth-child(1)").should(
      "contain",
      "Sponsor"
    );
    cy.get(':nth-child(3) > [colspan="3"]').should(
      "contain",
      "Cancer Research Institute"
    );
    cy.get("#eventHeaderInfo > tbody > :nth-child(4) > :nth-child(1)").should(
      "contain",
      "Study Title"
    );
    cy.get("#headerInfoTitle").should("contain", "Shock Treatment");
    cy.get("#eventHeaderInfo > tbody > :nth-child(1) > :nth-child(3)").should(
      "contain",
      "Study Status:"
    );
    cy.get('[width="60%"]').should("contain", "Approved");
    cy.get("#eventHeaderInfo > tbody > :nth-child(2) > :nth-child(3)").should(
      "contain",
      "IRB:"
    );
    cy.get("#eventHeaderInfo > tbody > :nth-child(2) > :nth-child(4)").should(
      "contain",
      "Biomedical"
    );

    cy.get("#screen0").should("contain", "Brief Description of Event");
    cy.get("#questionBriefDescription").should(
      "contain",
      "The brief description is limited to 200 characters."
    );
    cy.get("#questionId1 > .answerContainer > .paperPadding").should(
      "contain",
      "My Cypress PRI test"
    );

    cy.get("#screen1").should("contain", "Brochure (IB) Update");

    cy.get("#questionA00").should(
      "contain",
      "1. Is this submission regarding an Investigator"
    );
    cy.get("#questionId50 > .answerContainer > .paperPadding").should(
      "contain",
      "Yes"
    );

    cy.get("#questionA01").should(
      "contain",
      "2. Did the IB update change the risk assessment from what was previously approved?"
    );
    cy.get("#questionId51 > .answerContainer > .paperPadding").should(
      "contain",
      "Yes"
    );

    cy.get("#questionA02").should(
      "contain",
      "3. Please explain why or why not this changes the risk assessment"
    );
    cy.get("#questionId52 > .answerContainer > .paperPadding").should(
      "contain",
      "My PRI answer to Question 3"
    );

    cy.get("#questionA03").should(
      "contain",
      "4. Have any current or past subjects that are under the purview of UNC"
    );
    cy.get("#questionId53 > .answerContainer > .paperPadding").should(
      "contain",
      "Yes"
    );

    cy.get("#questionA04").should(
      "contain",
      "5. Please provide a reconsent or verbal notification plan that includes current and past participation"
    );
    cy.get("#questionId54 > .answerContainer > .paperPadding").should(
      "contain",
      "My PRI answer to Question 5"
    );

    cy.get("#screen2").should(
      "contain",
      "Does This Promptly Reportable Information Need to be Reported?"
    );

    cy.get("#questionA1").should(
      "contain",
      "A1. Did this event occur at a site for which a UNC-Chapel Hill IRB has direct oversight responsibility or involve a research participant at one of those sites?"
    );
    cy.get("#questionId2 > .answerContainer > .paperPadding").should(
      "contain",
      "Yes"
    );
    cy.get("#questionA1Sites").should(
      "contain",
      "Please indicate which site or sites where this PRI applies."
    );
    cy.get("#questionId68 > .answerContainer > .paperPadding").should(
      "contain",
      "None"
    );

    cy.get("#questionA2Yes").should(
      "contain",
      "A2. Was the event unexpected in nature, severity, or frequency? (See SOP 1401)"
    );
    cy.get("#questionId4 > .answerContainer > .paperPadding").should(
      "contain",
      "Yes"
    );

    cy.get(".subQuestion").should("contain", "Please explain all responses:");
    cy.get(".subQuestion > div").should(
      "contain",
      "My explanation for question A2"
    );

    cy.get("#questionA3").should(
      "contain",
      "A3. Do you think the event was related or possibly related to this research?"
    );
    cy.get("#questionId6 > .answerContainer > .paperPadding").should(
      "contain",
      "Yes"
    );

    cy.get("#questionA4").should(
      "contain",
      "A4. Does the event suggest that the research places subjects or others at a greater risk of harm than was previously known or recognized?"
    );
    cy.get("#questionId8 > .answerContainer > .paperPadding").should(
      "be.visible"
    );
    cy.get(".paperPadding > :nth-child(13)").should(
      "contain",
      "My explanation of my responses from A4"
    );

    cy.get("#questionA5").should(
      "contain",
      "Does the event involve a potential(1) inappropriate sharing or disclosure of a participant"
    );

    cy.get("#questionId55 > .answerContainer > .paperPadding").should(
      "contain",
      "No"
    );

    cy.get("#questionA6").should(
      "contain",
      "A6. Has this event or issue been identified as noncompliance previously for either this study or other studies that the PI has oversight of"
    );
    cy.get("#questionId56 > .answerContainer > .paperPadding").should(
      "contain",
      "Yes"
    );

    cy.get("#questionA7").should(
      "contain",
      "A7. In review of the study’s deviation log, are there any similar issues or events?"
    );
    cy.get("#questionId58 > .answerContainer > .paperPadding").should(
      "contain",
      "Yes"
    );

    cy.get("#questionA8").should(
      "contain",
      "A8. Is this submission regarding other Promptly Reportable Information as outlined in SOP 1401?"
    );
    cy.get("#questionId60 > .answerContainer").should("contain", "Yes");

    cy.get("#screen3").should("contain", "Information About the Event");

    cy.get("#questionB1").should("contain", "B1. Date of Event:");
    cy.get("#questionId15 > .answerContainer > .paperPadding").should(
      "contain",
      "01/01/2024"
    );

    cy.get("#questionB2").should("contain", "B2. Location of Event:");
    cy.get("#questionId16 > .answerContainer > .paperPadding").should(
      "contain",
      "Chapel Hill"
    );

    cy.get("#questionB3").should("contain", "B3. Full Description of Event.");
    cy.get("#questionId17 > .answerContainer > .paperPadding").should(
      "contain",
      "My Cypress PRI test description"
    );

    cy.get("#screen4").should("contain", "Was this a serious adverse event?");

    cy.get("#questionC1").should(
      "contain",
      "C1. Did the event result in death?"
    );
    cy.get("#questionId67 > .answerContainer > .paperPadding").should(
      "contain",
      "No"
    );

    cy.get("#questionC2").should(
      "contain",
      "C2. Was the event life-threatening (i.e., placed the subject at immediate risk of death from the event, as it occurred)?"
    );
    cy.get("#questionId21 > .answerContainer > .paperPadding").should(
      "contain",
      "No"
    );

    cy.get("#questionC3").should(
      "contain",
      "C3. Did the event result in inpatient hospitalization or prolongation of existing hospitalization?"
    );
    cy.get("#questionId21 > .answerContainer > .paperPadding").should(
      "contain",
      "No"
    );

    cy.get("#screen5").should("contain", "Protocol/Consent Forms");
    cy.get("#questionD1").should(
      "contain",
      "D1. Given this event's occurrence, are there revisions to the study or consent documents that you would like to submit at this time?"
    );
    cy.get("#questionId32 > .answerContainer > .paperPadding").should(
      "contain",
      "Describe your changes below: My description of my changes for question D1"
    );

    cy.get("#screen6").should(
      "contain",
      "Root Cause Analysis and Corrective and Preventative Action (CAPA) Plan"
    );
    cy.get("#questionE1").should("contain", "Root Cause Analysis:");
    cy.get("#questionId35 > .answerContainer > .paperPadding").should(
      "contain",
      "My response for E1"
    );

    cy.get("#questionE2").should(
      "contain",
      "Corrective and Preventative Actions:"
    );
    cy.get("#questionId36 > .answerContainer > .paperPadding").should(
      "contain",
      "My response for E2"
    );

    cy.get("#questionE3").should("contain", " Plan for Effectiveness Check:");
    cy.get("#questionId37 > .answerContainer > .paperPadding").should(
      "contain",
      "My response for E3"
    );

    cy.get("#documentLibrary").should("contain", "Document Library");

    cy.get("#screenPIAttachments").should("contain", "PI Attachments");

    cy.get("#screenOHREAttachments").should("contain", "OHRE Attachments");

    cy.get("#screenEmailManagement").should(
      "contain",
      "Email Management for IRB NO: 06-0006"
    );

    //cy.get('#stipCount').should('contain', '1')

    // CAPTURE URL OF REVIEW WINDOW
    cy.url().as("reviewWindow");

    //PI RESPONSES
    // Get window object
    cy.window().then((win) => {
      // Replace window.open(url, target)-function with our own arrow function
      cy.stub(win, 'open').callsFake (url => 
        // change window location to be same as the popup url
        win.location.href = Cypress.config().devMaintBaseUrl + url);
      }).as("popup"); // alias it with popup, so we can refer it with @popup

    // Click button which triggers javascript's window.open() call
    cy.get("#navPIResponses").click();
    // Make sure that it triggered window.open function call
   // cy.get("@piResponses").should("be.called");

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
    cy.get("#questionPIResponse8 > :nth-child(1)").should(
      "contain",
      "Stipulation/Response #1"
    );
    cy.get(".stipDiv > :nth-child(1)").should(
      "contain",
      "Stipulation by Eric Geers on"
    );
    cy.get(".stipDiv > :nth-child(2) > p").should(
      "contain",
      "My test PRI stip for question A4"
    );

    cy.get(".responseDiv > :nth-child(1)").should(
      "contain",
      "Response by  Marcus Hannah on"
    );
    cy.get(".responseDiv > :nth-child(2) > p").should(
      "contain",
      "My test PRI Response for question A4"
    );
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

    cy.get("@reviewWindow").then((url) => {
      cy.visit(url);
    });

    //RECORD RESULTS
    cy.get("#navReviewResult").click();

    //Disabled review results:
    cy.get("#reviewResult1").should("contain", "Closed");
    cy.get("#reviewResult2").should("contain", "Minor Stipulations");
    cy.get("#reviewResult3").should("contain", "Noted");
    cy.get("#reviewResult4").should("contain", "Suspended");
    cy.get("#reviewResult5").should("contain", "Terminated");
    cy.get("#reviewResult6").should("contain", "Withdrawn");

    //RECORD RESULTS
    cy.get("#reviewResult")
      .should("contain", "Closed")
      .and("contain", "Minor Stipulations")
      .and("contain", "Noted")
      .and("contain", "Suspended")
      .and("contain", "Terminated");

    cy.get("#reviewResult3").click();

    //PRI DETERMINATIONS
    cy.get("#PRIDetermination").should("be.visible");
    cy.get("#PRIDetermination > :nth-child(1)").should(
      "contain",
      "a. Noncompliance or No Determination"
    );
    cy.get("#PRIDetermination > :nth-child(2)").should("contain", "b. UPIRSO");
    cy.get("#PRIDetermination > :nth-child(3)").should("contain", "c. SNC");
    cy.get("#PRIDetermination > :nth-child(4)").should("contain", "d. CNC");
    cy.get("#PRIDetermination > :nth-child(5)").should(
      "contain",
      "e. Complaint"
    );
    cy.get("#PRIDetermination > :nth-child(6)").should(
      "contain",
      "f. Allegations of Noncompliance"
    );
    cy.get("#PRIDetermination > :nth-child(7)").should(
      "contain",
      "g. Suspension"
    );
    cy.get("#PRIDetermination > :nth-child(8)").should(
      "contain",
      "h. Termination"
    );
    cy.get("#PRIDetermination > :nth-child(9)").should(
      "contain",
      "i. Regulatory Agency Audit (e.g., FDA, DEA, DoD)"
    );

    cy.get(":nth-child(2) > #pri_Determination").click();

    //DRAFT LETTER
    cy.get("#navLetter").should("be.visible").click();
    cy.get("#modalPopup").should("be.visible");
    cy.get("#letterTypeId")
      .should("contain", "Select Template Type...")
      .and("contain", "PRI Administrative Closure")
      .and("contain", "PRI EXPEDITED NOTED LETTER – FINDING")
      .and("contain", "PRI EXPEDITED NOTED LETTER – FINDING & CAPA")
      .and("contain", "PRI EXPEDITED NOTED LETTER – RESOLUTION OF STIPS")
      .and("contain", "PRI External Event Acknowledgement")
      .select("PRI EXPEDITED NOTED LETTER – FINDING & CAPA");

    cy.get("#btnDraftLetter").click();

    //FINALIZE PRI - NOTED LETTER
    cy.get("#btnFinalizeLetterModal").click();
    cy.get(".ui-dialog-content").should("be.visible");
    cy.get(".ui-dialog-buttonset > .btn-info").click();
  });
});
