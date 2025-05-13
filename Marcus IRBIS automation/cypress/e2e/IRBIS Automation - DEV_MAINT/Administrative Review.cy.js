describe("Administrative Review", () => {

  const ownerOnyen = 'mhannah1'
  const PI = 'jslatt'
  const IRBAnalyst = "jfuse";
  //const testURL = 'https://orisdev.research.unc.edu/irb_maint/index.cfm?event=home.dashboard.irbstudymanagement&irb_id=11-0190';
  const testURL = 'https://orisdev.research.unc.edu/irb_cb7_ph3/index.cfm?event=home.dashboard.irbstudymanagement&irb_id=11-0190';
  
  it("Create Administrative Review Application", () => {
    cy.visit(testURL);
    cy.get("input#username.long")
      .type(ownerOnyen)
      .should("have.value", ownerOnyen);
    //.type('cjfennim').should('have.value', 'cjfennim')
    cy.get("input#password.long").type("test{Enter}");

    cy.viewport(1300, 750);

    cy.get("#renewalSelector > .updateCardText").click();
    cy.get("#alertBoxes > .pad10").should(
      "contain",
      "Your study is indicated for Annual Administrative Review"
    );
    cy.get("#btnCreateRenewal").click();

    //Administrative Review header area
    cy.get("#divNSIHeader > .hd").should(
      "contain",
      "Administrative Annual Review"
    );
    cy.get(':nth-child(2) > tbody > :nth-child(1) > [width="14%"]').should(
      "contain",
      "IRB Number:"
    );
    cy.get(".classToLoad").should("contain", "11-0190");

    cy.get(":nth-child(2) > tbody > :nth-child(2) > :nth-child(1)").should(
      "contain",
      "PI:"
    );
    cy.get("tbody > :nth-child(2) > :nth-child(2) > a").should(
      "contain",
      "Slattery, John"
    );

    cy.get(":nth-child(3) > .label").should("contain", "Sponsor:");
    cy.get(":nth-child(3) > .copy").should("contain", "Corgentech Inc.");

    cy.get(":nth-child(4) > .label").should("contain", "Study Title:");
    cy.get(":nth-child(4) > .copy").should("contain", "Shock Treatment 2.0");

    cy.get(":nth-child(2) > tbody > :nth-child(1) > :nth-child(3)").should(
      "contain",
      "Study Status:"
    );
    cy.get(":nth-child(2) > tbody > :nth-child(1) > :nth-child(4)").should(
      "contain",
      "Approved"
    );

    cy.get(":nth-child(2) > tbody > :nth-child(2) > :nth-child(3)").should(
      "contain",
      "IRB:"
    );
    cy.get(":nth-child(2) > tbody > :nth-child(2) > :nth-child(4)").should(
      "contain",
      "Non-Biomedical"
    );

    cy.get(":nth-child(2) > tbody > :nth-child(1) > :nth-child(5)").should(
      "contain",
      "Admin Annual Review Date:"
    );
    cy.get(":nth-child(2) > tbody > :nth-child(1) > :nth-child(6)").should(
      "be.visible"
    );

    cy.get(
      '[style="margin-top: 20px;"] > tbody > :nth-child(1) > [width="14%"]'
    ).should("contain", "Reference Id:");
    cy.get(':nth-child(2) > [width="14%"]')
      .should("contain", "Date Submitted:")
      .should("contain", "Date Submitted:");

    cy.get(
      '[style="margin-top: 20px;"] > tbody > :nth-child(1) > :nth-child(3)'
    ).should("contain", "Submission Status:");
    cy.get(
      '[style="margin-top: 20px;"] > tbody > :nth-child(2) > :nth-child(3)'
    ).should("contain", "Date PI Certified:");

    //Item List
    cy.get("#divItemList").should("be.visible");
    cy.get("#divItemList > :nth-child(2)").should(
      "contain",
      "Admin Annual Review Submission"
    );
    cy.get("#itemListForm1 > dd").should(
      "contain",
      "Administrative Annual Review Submission"
    );
    cy.get("#itemListCOI > dd").should(
      "contain",
      "COI Disclosures / IRB Training"
    );
    cy.get("#divItemList > :nth-child(5)").should(
      "contain",
      "Submission Routing"
    );
    //PI CERT VERIFICATION PLACEHOLDER

    cy.get("#divItemList > :nth-child(8)").should(
      "contain",
      "Submission Management"
    );
    cy.get("#itemViewSubmission > dd").should("contain", "View Submission");
    // cy.get('#itemListRevisions > dd').should('contain', 'View Revisions')
    cy.get("#itemListHistory > dd").should("contain", "View History");
    cy.get("#itemListPDF > dd").should("contain", "View PDF");

    //Administrative Review Form
    cy.get("#divEFORMScreen > :nth-child(3)").should(
      "contain",
      "Administrative Annual Review Submission"
    );
    cy.get("#divAdminReviewForm1 > .hd").should(
      "contain",
      "Current Study Status"
    );

    cy.get(".bold > .Q1").should("contain", "1. Choose only one:");
    cy.get(":nth-child(2) > .Q1").should(
      "contain",
      "A) Data collection continues"
    );
    cy.get(":nth-child(3) > .Q1").should(
      "contain",
      "B) All data has been collected/obtained"
    );

    //Verify triggered options under option B
    cy.get("#renewalActionRequestedB").click();
    cy.get("#closeMyStudy_sub > .questionBlock").should(
      "contain",
      "NOTE, the study may be closed if:"
    );
    cy.get("#closeMyStudy_sub > .questionBlock > ul > :nth-child(1)").should(
      "contain",
      "All identifying information has been destroyed"
    );
    cy.get("#closeMyStudy_sub > .questionBlock > ul > :nth-child(2)").should(
      "contain",
      "Analysis of identifiable data is complete and you were approved to store identifiers beyond closure of your study"
    );
    cy.get(".closeMyStudyAnchor").should(
      "contain",
      "Click here to close the study"
    );

    //Verify triggered options under option A
    cy.get("#renewalActionRequestedA").click();
    cy.get("#closeMyStudy_sub > .questionBlock").should("not.be.visible");

    //Progress Report
    cy.get("#divAdminReviewForm2 > .hd").should("contain", "Progress Report");
    cy.get("#divAdminReviewForm2 > .bd > .questionHouse > .bold").should(
      "contain",
      "2. Number of Subjects involved through direct contact or use of their data"
    );
    cy.get(
      "#divAdminReviewForm2 > .bd > .questionHouse > :nth-child(2)"
    ).should("contain", "Total number as currently approved by IRB");
    cy.get("#PriorResponse").should("be.visible");

    cy.get(".\\32 B").should(
      "contain",
      "B. Total number of subjects included/enrolled to date"
    );
    cy.get("#NumberSubjectsEnrolled").type("2");

    cy.get(".\\32 C").should(
      "contain",
      "C. Number of subjects included/enrolled since last renewal"
    );
    cy.get("#NumberSubjectsIncludedLastRenewal").type("0");

    cy.get(".\\32 D").should(
      "contain",
      "D. Number to be included/enrolled in upcoming year"
    );
    cy.get("#NumberSubjectsIncludedUpcomingYear").type("0");

    cy.get("span.\\32 E").should(
      "contain",
      "Since initial approval, have any subjects been enrolled who are members of vulnerable/protected groups"
    );
    cy.get("#protectedGroups2").click();
    cy.get("#protectedGroups_sub").should("not.be.visible");

    cy.get("#protectedGroups1").click();
    cy.get("#protectedGroups_sub > :nth-child(1)").should(
      "contain",
      "Please enter the number of subjects enrolled for each group:"
    );
    cy.get("#protectedGroups_sub > :nth-child(2)").should(
      "contain",
      "Children:"
    );
    cy.get("#Children").type("1");

    cy.get("#protectedGroups_sub > :nth-child(3)").should(
      "contain",
      "Pregnant women:"
    );
    cy.get("#PregnantWomen").type("2");

    cy.get("#protectedGroups_sub > :nth-child(4)").should(
      "contain",
      "Nonviable neonates or neonates of uncertain viability"
    );
    cy.get("#Neonates").type("3");

    cy.get("#protectedGroups_sub > :nth-child(5)").should(
      "contain",
      "Prisoners"
    );
    cy.get("#Prisoners").type("4");

    cy.get("#protectedGroups_sub > :nth-child(6)").should(
      "contain",
      "Decisionally impaired individuals"
    );
    cy.get("#DecisionallyImpaired").type("5");

    cy.get("#shortForm2").click();
    cy.get("#shortForm_sub").should("not.be.visible");

    cy.get("#shortForm1").click();
    cy.get("#shortForm_sub > :nth-child(1)").should(
      "contain",
      "How many subjects?"
    );
    cy.get("#NumberSubjects").type("1");
    cy.get("#shortForm_sub > :nth-child(2)").should(
      "contain",
      "Explain why you were not able to provide a full, translated consent form:"
    );
    cy.get("#Explain_ShortForm").type(
      "My explanation of why I wasn't able to provide a full, translated consent form."
    );

    cy.get("#divAdminReviewForm3 > .hd").should("contain", "Study Updates");
    cy.get(".bd > .questionBlock").should("be.visible");
    cy.get("h4").should("contain", "New Safety Information");
    cy.get(".bd > .questionBlock > :nth-child(3)").should(
      "contain",
      "If there are any events that meet the reporting requirements of New Safety Information (NSI) as defined in OHRE SOP 1401 that has not yet been reported, please submit an NSI at this time."
    );
    cy.get(".questionBlock > :nth-child(4)").should(
      "contain",
      "All other deviations should be documented in your study records in a Protocol Deviation Tracking Log."
    );

    //SUBMIT
    cy.get("#btnSubmit").click();

    cy.get("#btnSubmitToRouting").click();
  });

  //ADMINISTRATIVE REVIEW: PI CERT
  it("Administrative Review - Being Routed", () => {
    cy.visit(Cypress.config().devMaintBaseUrl);

    cy.get("input#username.long").type(PI).should("have.value", PI);
    //.type('cjfennim').should('have.value', 'cjfennim')
    cy.get("input#password.long").type("test{Enter}");

    cy.get("#nav > :nth-child(2) > a").click();
    cy.get("#dashboardmenu8 > :nth-child(2) > a").click();
    //cy.get('.searchColumn ui-state-default')
    cy.get('input[placeholder="Title"]').type("Shock Treatment 2.0");
    cy.get(".sorting_1 > a").click();

    cy.get("#itemListPICert > dd").click();
    cy.get(
      '[style="padding: 10px; text-align: center;"] > .searchresults'
    ).should(
      "contain",
      "Please review the following Administrative Annual Review Form. Certify below to finalize submission to the IRB."
    );
    cy.get('form > [type="submit"]').click();
  });

  //ACCEPT ADMINISTRATIVE REVIEW
  it("Administrative Review - Accept for Review", () => {
    cy.visit(Cypress.config().devMaintBaseUrl);
    cy.get("input#username.long")
      .type("mhannah1")
      .should("have.value", "mhannah1");
    cy.get("input#password.long").type("test{Enter}");

    cy.viewport(1200, 700);
    cy.get(
      'td[data-title="Submitted To IRB"] > .bucket > :nth-child(2) > table > tbody > :nth-child(8) > .countTotal > a'
    ).click();
    cy.wait(1000);
    cy.get("#bucketDataTable_filter > label > input").type(
      "Shock Treatment 2.0"
    );
    // cy.pause()
    cy.get("#bucketDataTable > tbody > .odd > :nth-child(1) > a").click();
    cy.get("#itemListAcceptSubmission > dd").click();
    //cy.pause()
    // cy.get('#closeAcceptWindow').click()
    cy.wait(6000)
  });

  //ADMINISTRATIVE REVIEW - STUDY HISTORY SCREEN/SUBMISSION DETAILS
  it("Administrative Review - Verify Study History/Submission Details", () => {
    cy.visit(Cypress.config().devMaintBaseUrl);
    cy.get("input#username.long")
      .type(IRBAnalyst)
      .should("have.value", IRBAnalyst);
    cy.get("input#password.long").type("test{Enter}");

    cy.get(
      'td[data-title="Accepted By IRB"] > .bucket > :nth-child(2) > table > tbody > :nth-child(2) > [data-column="NFB"] > a'
    ).click();
    cy.wait(1000);
    cy.viewport(1200, 1000);
    cy.get("#bucketDataTable_filter > label > input").type(
      "Shock Treatment 2.0"
    );
    cy.get("#bucketDataTable > tbody > .odd > :nth-child(1) > a").click();

    cy.get("span > u").should("contain", "Submission Type");
    cy.get('[width="7%"] > u').should("contain", "Reference ID");
    cy.get('[width="11%"] > u').should("contain", "Approval State");
    cy.get(":nth-child(4) > u").should("contain", "Date Routing Complete");
    cy.get(":nth-child(5) > u").should("contain", "Action Date");
    cy.get(":nth-child(6) > u").should("contain", "Expiration Date");
    cy.get(":nth-child(7) > u").should("contain", "AR Date");
    cy.get('[nowrap="nowrap"] > u').should("contain", "Review Type");

    cy.get('[style="padding-left: 50px;"]').should(
      "contain",
      "Submission Status:"
    );
    cy.get('[style="padding-left: 10px; color: red;"]').should(
      "contain",
      "Accepted for Review"
    );
    cy.get(".searchresults > :nth-child(3)").should("contain", "Reference ID:");
    cy.get(
      ':nth-child(1) > :nth-child(1) > table > tbody > tr > [width="140px"] > label'
    ).should("contain", "IRB:");
    cy.get('#date_received_cell > tbody > tr > [width="140px"] > label').should(
      "contain",
      "Accepted By IRB:"
    );
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
    //Assign Analyst
    cy.get(':nth-child(2) > tbody > tr > :nth-child(2) > .button').click()
    cy.get(
      ":nth-child(1) > :nth-child(2) > table > tbody > tr > :nth-child(2) > .button"
    ).click();
    cy.get('#date_received_cell > tbody > tr > [width="140px"] > label').should(
      "be.visible"

    );
  });

  it("Administrative Review - Verify Application/Review popup", () => {
    cy.visit(Cypress.config().devMaintBaseUrl);
    cy.get("input#username.long")
      .type(IRBAnalyst)
      .should("have.value", IRBAnalyst);
    //.type('cjfennim').should('have.value', 'cjfennim')
    cy.get("input#password.long").type("test{Enter}");

    //cy.viewport(1200, 700)

    cy.get(
      'td[data-title="Accepted By IRB"] > .bucket > :nth-child(2) > table > tbody > :nth-child(2) > [data-column="NFB"] > a'
    ).click();
    cy.viewport(1200, 1000);
    cy.wait(1000);
    cy.get("#bucketDataTable_filter > label > input").type(
      "Shock Treatment 2.0"
    );
    cy.get("#bucketDataTable > tbody > .odd > :nth-child(1) > a").click();
    //cy.get('managerpid').click()
    cy.get(".swimlane1 > div").should("be.visible");

    // Get window object
    cy.window().then((win) => {
      // Replace window.open(url, target)-function with our own arrow function
     // cy.stub(win, "open", (url) => {
        cy.stub(win, 'open').callsFake (url => 
        // change window location to be same as the popup url
        win.location.href = Cypress.config().devMaintBaseUrl + url);
       // win.location.href = Cypress.config().devMaintBaseURL + url;
      }).as("application"); // alias it with popup, so we can refer it with @popup
    // Click button which triggers javascript's window.open() call
    cy.contains("Application").click();
  
    // Make sure that it triggered window.open function call
    //cy.get("@application").should("be.called");
  
    //REVIEW POPUP
    cy.get("#submission").should("be.visible");
    cy.get(":nth-child(1) > strong").should("contain", "Navigate To:");
    cy.get("#stipulationLink").should("contain", "Stipulations (0)");
    cy.get(":nth-child(8) > strong").should("contain", "Next Step:");
    cy.get('[style="float:right;"] > strong').should("contain", "IRB No");
    cy.get('[style="float:right;"] > .link').should("contain", "11-0190");

    cy.get("#divEFORMScreen > :nth-child(3)").should(
      "contain",
      "Administrative Annual Review Submission"
    );
    cy.get("#divAdminReviewForm1 > .hd").should(
      "contain",
      "Current Study Status"
    );
    cy.get("#divAdminReviewForm1 > .bd").should("be.visible");

    cy.get("#divAdminReviewForm2 > .hd").should("contain", "Progress Report");
    cy.get("#divAdminReviewForm2 > .bd").should("be.visible");

    cy.get("#divAdminReviewForm3 > .hd").should("contain", "Study Updates");
    cy.get("#divAdminReviewForm3 > .bd").should("be.visible");

     //CREATE STIP
    cy.get("#stipContainer2B > .button").click();
    cy.wait(3000);
    cy.get('.cke_wysiwyg_frame').should("be.visible");
    cy.get(".cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My test AR stip for question 2B");
      });

    cy.get("#btnARStipSubmit").click();
    cy.wait(2000);
    /*
    cy.get(".stipContainer").should(
      "contain",
      "My test AR stip for question 2B"
    );
    */

      // NAVIGATE FROM APPLICATION TO RECORD RESULTS SCREEN
    cy.window().then((win) => {
      // Replace window.open(url, target)-function with our own arrow function
      //cy.stub(win, "open", (url) => {
        cy.stub(win, 'open').callsFake (url => 
          // change window location to be same as the popup url
          win.location.href = Cypress.config().devMaintBaseUrl + url);
      }).as("recordResult"); // alias it with popup, so we can refer it with @popup
          

    // Click button which triggers javascript's window.open() call
    cy.contains("Record Result").should("be.visible").click();
    // Make sure that it triggered window.open function call
    //cy.get("@recordResult").should("be.called");

    //RECORD RESULTS
    //cy.contains('Assign Me').click()
    cy.get("#results").should("be.visible");
    cy.get("#finding").should("be.visible");
    cy.get("#cke_submission_findings").should("be.visible");
    cy.get("#internal");

    cy.get("#reviewResult")
      .should("contain", "...")
      .and("contain", "Acknowledged")
      .and("contain", "Minor Stipulations")
      .and("contain", "Withdrawn")
      .select("Minor Stipulations");

    //DRAFT LETTER
    //cy.reload();
    cy.contains("Draft Letter").should("be.visible").click();
    cy.get("#modalPopup").should("be.visible");
    cy.get("tr > .copy").should("contain", "Minor Stipulations");
    cy.get("#btnMakeLetter").click();
    cy.wait(2000);

    //FINALIZE ADMINISTRATIVE REVIEW - MINOR STIP LETTER
    cy.get("#submission > :nth-child(3)").should("be.visible");
    cy.wait(3000);
    cy.get("#finalizeLetterAR").click();

    // Click ok in js confirmation alert
    cy.on("window:alert", (t) => {
      expect(t).to.contains("OK").click();

    cy.wait(3000)  
      });
    });

  it("Administrative Review - Waiting PI Response", () => {
    cy.visit(Cypress.config().devMaintBaseUrl);
    cy.get("input#username.long")
      .type(ownerOnyen)
      .should("have.value", ownerOnyen);
    cy.get("input#password.long").type("test{Enter}");
    cy.get("#nav > :nth-child(2) > a").click();
    cy.get("#dashboardmenu5 > :nth-child(10) > a").click();
    cy.get('input[placeholder="Title"]').type("Shock Treatment 2.0");
    cy.get(".odd > :nth-child(2) > a").click();

    //Item List
    cy.get("#divItemList").should("be.visible");
    cy.get("#divItemList > :nth-child(2)").should(
      "contain",
      "Admin Annual Review Submission"
    );
    cy.get("#itemListForm1 > dd").should(
      "contain",
      "Administrative Annual Review Submission"
    );
    cy.get("#itemListCOI > dd").should(
      "contain",
      "COI Disclosures / IRB Training"
    );
    cy.get("#divItemList > :nth-child(5)").should(
      "contain",
      "Submission Routing"
    );
    cy.get("#itemListStipulations > dd").should("contain", "Stipulations");
    cy.get("#itemListResubmit > dd").should("contain", "Resubmit");
    cy.get("#itemListPICertView > dd").should("contain", "PI Certified On");

    cy.get("#divItemList > :nth-child(9)").should(
      "contain",
      "Submission Management"
    );
    cy.get("#itemViewSubmission > dd").should("contain", "View Submission");
    cy.get("#itemListRevisions > dd").should("contain", "View Revisions");
    cy.get("#itemListHistory > dd").should("contain", "View History");
    cy.get("#itemListPDF > dd").should("contain", "View PDF");

    //RESPOND TO STIPULATIONS
    cy.get("#itemListStipulations > dd").click();

    cy.get("#stipIntructions").should(
      "contain",
      "INSTRUCTIONS: Please review and respond to the stipulations as follows."
    );

    cy.get(".\\32 B").should(
      "contain",
      "B. Total number of subjects included/enrolled to date"
    );
    cy.get('[style="display: block;"] > :nth-child(2) > span').should(
      "contain",
      "2"
    );
    cy.get("#stipContainer2B").should("be.visible");
    cy.get(".respondToStip").click();

    cy.wait(1000);

    cy.get("iframe").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My test AR Response for question 2B");
    });
    cy.get(".saveARStipResponse").click();

    //RESBUMIT ADMINISTRATIVE REVIEW
    cy.get("#itemListResubmit > dd").click();
    cy.get("#modalPopup").should("be.visible");
    cy.get(".alertMessageBox").should(
      "contain",
      "Are you ready to resubmit this Administrative Annual Review Form?"
    );
    cy.get("form > .copy")
      .should("contain", "Resubmit Administrative Review")
      .click();
      
    cy.wait(3000);  
    
  });

  it.only("Administrative Review - Verify Resubmitted Review popup", () => {
    cy.visit(Cypress.config().devMaintBaseUrl);
    cy.get("input#username.long")
      .type(IRBAnalyst)
      .should("have.value", IRBAnalyst);
    //.type('cjfennim').should('have.value', 'cjfennim')
    cy.get("input#password.long").type("test{Enter}");
    cy.viewport(1200, 1000);

    cy.get(
      'td[data-title="PI Responses"] > .bucket > :nth-child(2) > table > tbody > :nth-child(2) > [data-column="NFB"] > a'
    ).click();
    cy.viewport(1200, 700);
    cy.wait(1000);
    cy.get("#bucketDataTable_filter > label > input").type(
      "Shock Treatment 2.0"
    );
    cy.get("#bucketDataTable > tbody > .odd > :nth-child(1) > a").click();

    // Get window object
    cy.window().then((win) => {
      // Replace window.open(url, target)-function with our own arrow function
      //cy.stub(win, "open", (url) => {
        cy.stub(win, 'open').callsFake (url => 
        // change window location to be same as the popup url
        win.location.href = Cypress.config().devMaintBaseUrl + url);
      }).as("popup"); // alias it with popup, so we can refer it with @popup
      
      // Click button which triggers javascript's window.open() call
    cy.contains("Application").should("be.visible").click();

    // Make sure that it triggered window.open function call
    //cy.get("@popup").should("be.called");

    //REVIEW POPUP
    cy.get(":nth-child(1) > strong").should("contain", "Navigate To:");
    cy.contains("Application").should("be.visible");
    cy.contains("Library").should("be.visible");
    cy.get("#piResponsesLink").should("contain", "PI Responses (1)");
    cy.get("#stipulationLink").should("contain", "Stipulations (0)");
    cy.get(":nth-child(8) > strong").should("contain", "Next Step:");
    cy.get('[style="float:right;"] > strong').should("contain", "IRB No");
    cy.get('[style="float:right;"] > .link').should("contain", "11-0190");
    cy.get('[style="float:right; text-align:left;"]').should(
      "contain",
      "Administrative Review"
    );

    cy.get("#divEFORMScreen > :nth-child(3)").should(
      "contain",
      "Administrative Annual Review Submission"
    );
    cy.get("#divAdminReviewForm1 > .hd").should(
      "contain",
      "Current Study Status"
    );
    cy.get("#divAdminReviewForm1 > .bd").should("be.visible");

    cy.get("#divAdminReviewForm2 > .hd").should("contain", "Progress Report");
    cy.get("#divAdminReviewForm2 > .bd").should("be.visible");

    cy.get("#divAdminReviewForm3 > .hd").should("contain", "Study Updates");
    cy.get("#divAdminReviewForm3 > .bd").should("be.visible");

    //Verify Add Stipulations button are present
    cy.get("#stipContainer1 > .button").should("be.visible");
    cy.get("#stipContainer2B > .button").should("be.visible");
    cy.get("#stipContainer2C > .button").should("be.visible");
    cy.get("#stipContainer2D > .button").should("be.visible");
    cy.get("#stipContainer2E > .button").should("be.visible");
    cy.get("#stipContainer2F > .button").should("be.visible");

    // CAPTURE URL OF REVIEW WINDOW
    cy.url().as("reviewWindow");

    //PI RESPONSES
    // Get window object
    cy.window().then((win) => {
      // Replace window.open(url, target)-function with our own arrow function
      cy.stub(win, "open", (url) => {
        // change window location to be same as the popup url
        win.location.href = Cypress.config().devMaintBaseUrl + url;
      }).as("piResponses"); // alias it with popup, so we can refer it with @popup
    });

    // Click button which triggers javascript's window.open() call
    cy.get("#piResponsesLink").click();
    // Make sure that it triggered window.open function call
    cy.get("@piResponses").should("be.called");

    cy.get(".gradientVert").should("be.visible");
    cy.get(".greyShadow").should("be.visible");

    cy.get("#divAdminReviewForm2 > .hd").should("contain", "Progress Report");
    cy.get(
      '#divAdminReviewForm2 > .bd > .questionHouse > [style="display: inline-block;"]'
    ).should(
      "contain",
      "B. Total number of subjects included/enrolled to date"
    );
    cy.get(
      '[style="display: inline-block;"] > :nth-child(2) > .readOnlyClass'
    ).should("contain", "2");
    cy.get(":nth-child(3) > p").should(
      "contain",
      "My test AR stip for question 2B"
    );
    cy.get(".responseContainer > p").should(
      "contain",
      "question 2B"
    );

    cy.get(".stipContainer").should("be.visible");
    cy.get(".resolveResponse").click();
    cy.get(".actionConfirm > .glyphicon").click();
    cy.get("#btnSaveConfirms").click();
    cy.get(".allConfirmed").should("contain", "All Actions Confirmed");

    cy.get("@reviewWindow").then((url) => {
      cy.visit(url);
    });

    // NAVIGATE FROM APPLICATION TO RECORD RESULTS SCREEN
    cy.window().then((win) => {
      // Replace window.open(url, target)-function with our own arrow function
      cy.stub(win, 'open').callsFake (url => 
        // change window location to be same as the popup url
        win.location.href = Cypress.config().devMaintBaseUrl + url);
      }).as("recordResult"); // alias it with popup, so we can refer it with @popup
   

    // Click button which triggers javascript's window.open() call
    cy.contains("Record Result").should("be.visible").click();
    // Make sure that it triggered window.open function call
    //cy.get("@recordResult").should("be.called");

    //RECORD RESULTS
    cy.get(".big-Arial-grey").should("contain", "SUBMISSION REVIEW");
    cy.get(".big-Arial-grey > span").should("contain", " ADMINISTRATIVE");
    cy.get("#results").should("be.visible");
    cy.get("#finding").should("be.visible");
    cy.get("#cke_submission_findings").should("be.visible");
    cy.get("#internal").should("be.visible");

    cy.get("#reviewResult")
      .should("contain", "...")
      .and("contain", "Acknowledged")
      .and("contain", "Minor Stipulations")
      .and("contain", "Withdrawn")
      .select("Acknowledged");

    //DRAFT LETTER
    cy.reload();
    cy.contains("Draft Letter").should("be.visible").click();
    cy.get("#modalPopup").should("be.visible");
    cy.get("tr > .copy").should("contain", "AR Acknowledged");
    cy.get("#btnMakeLetter").click();
    cy.wait(2000);

    //Verify Letter
    cy.get("#viewPDF").should("contain", "View PDF");
    cy.get(":nth-child(2) > .button").should("contain", "Delete");
    cy.get("#btnSave1").should("contain", "Save");
    cy.get("#btnSaveClose").should("contain", "Save & Close");
    cy.get("#finalizeLetterAR").should("contain", "Finalize Letter");
    cy.get('[width="100%"] > .searchresults').should(
      "contain",
      "This letter is in draft and not finalized."
    );

    cy.get("#letter_to").should("contain", "jslatt@email.unc.edu");
    cy.get("#letter_cc").should("be.visible");
    cy.get("#cke_LetterText").should("be.visible");

    //FINALIZE ADMINISTRATIVE REVIEW - ACKNOWLEDGEMENT
    cy.get("#submission > :nth-child(3)").should("be.visible");

    //Override COIs
    cy.get("#coiOverrideInformationAjaxLetter").should("be.visible");
    cy.get("#COIDisclosureStopAjaxLetter > span").should(
      "contain",
      "The letter cannot be finalized at this time."
    );
    cy.get(".air").should(
      "contain",
      "AIR COI Disclosures are not satisfied for this submission for each project personnel."
    );
    cy.get(".air > a").click();
    cy.get(".ui-dialog").should("be.visible");
    cy.get(".tableheaderirb > td").should(
      "contain",
      "Please provide a reason for the COI Disclosure Override and click"
    );
    cy.get("b").should("contain", "Reason");

    cy.get("#overrideReason").type("My automated response");
    cy.get("#submitAddCOIDisclosureOverride").click();

    cy.wait(5000);
    cy.get("#finalizeLetterAR").click();

    // Click ok in js confirmation alert
    cy.on("window:alert", (t) => {
      expect(t).to.contains("OK").click();
    
    });
  });
});
 


