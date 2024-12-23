describe("Protocol Continuation", () => {
  const ownerOnyen = "savlynch";
  const PI = "maddoxb";
  const IRBAnalyst = "jfuse";
  const IRBNumber = "21-2110";

  it.only("Create Protocol Continuation", () => {
    cy.visit(Cypress.config().devTrunkBaseUrl);
    cy.get("input#username.long")
      .type(ownerOnyen)
      .should("have.value", ownerOnyen);
    cy.get("input#password.long").type("test{Enter}");

    cy.viewport(1300, 750);

    cy.get("#dashboardmenu4 > :nth-child(4) > a")
      .should("contain", "Modification")
      .click();
    cy.get('input[placeholder="IRB Number"]').type(IRBNumber);
    cy.get(":nth-child(1) > .sorting_1 > .oneClickOnly").click();

    cy.get("#protocolExceptionSelector").should("be.visible");
    cy.get("#protocolExceptionSelector > .updateCardText > div")
      .should("contain", "Protocol Exception")
      .click();
    cy.get(":nth-child(1) > .selectCardTitle").should(
      "contain",
      "Protocol Exception"
    );
    cy.get(":nth-child(1) > .selectCardDescription").should(
      "contain",
      "Request a protocol exception to allow the enrollment of a single participant who does not meet eligibility"
    );
    cy.get(":nth-child(2) > .selectCardTitle").should(
      "contain",
      "Continuation"
    );
    cy.get("#protocolException > :nth-child(2) > :nth-child(2)").should(
      "contain",
      "Request to continue of some or all research activities with currently enrolled"
    );
    cy.get("em").should(
      "contain",
      "Note: The continuation of study activities must be well justified to be in the best interest of the participant, and relate to the safety of the participant. Enrollment of new subjects is not permitted under this exception."
    );
    cy.get("#chooseProtocolException").should("be.visible");
    cy.get("#chooseContinuation").should("be.visible").click();

    //ITEM LIST
    cy.get("#itemListContainer").should("be.visible");
    cy.get("#itemListHeader > :nth-child(2)").should("contain", "Item List");
    cy.get(".subHeader").should("contain", "Protocol Exception");
    cy.get("#navViewForm > :nth-child(2)").should("contain", "View Form");
    cy.get("#navSaveForm > :nth-child(2)").should("contain", "Add Participant");
    cy.get("#navSubmitToRouting > :nth-child(2)").should(
      "contain",
      "Submit Exception"
    );
    cy.get("#navPICert > :nth-child(2)").should("contain", "PI Certification");
    cy.get("#navDownloadPDF > :nth-child(2)").should("contain", "Download PDF");
    //View history modal
    cy.get("#navViewHistory > :nth-child(2)")
      .should("contain", "View History")
      .click();
    cy.get(".ui-dialog").should("be.visible");
    cy.get("b.copy").should("contain", "Continuation created");
    cy.get('[style="padding-bottom:10px;"] > div.copy').should("be.visible");
    cy.get(
      '[aria-labelledby="ui-dialog-title-modalPopup"] > .ui-dialog-titlebar > .ui-dialog-titlebar-close > .ui-icon'
    ).click();
    cy.get("#navDeleteException > :nth-child(2)").should(
      "contain",
      "Delete Exception"
    );

    //PROTOCOL CONTINUATION REQUEST HEADER - STUDY DATA
    cy.get("#irbInfo > .pageHeaderTitle").should(
      "contain",
      "UNC IRB Protocol Exception Request"
    );
    cy.get('[width="14%"]').should("contain", "IRB Number:");
    cy.get("#goToStudyManagement > a").should("contain", "21-2110");
    cy.get("tbody > :nth-child(1) > :nth-child(3)").should(
      "contain",
      "Study Status"
    );
    cy.get("tbody > :nth-child(1) > :nth-child(4)").should(
      "contain",
      "Approved"
    );
    cy.get("tbody > :nth-child(1) > :nth-child(5)").should("be.visible");
    cy.get("tbody > :nth-child(2) > :nth-child(1)").should("contain", "PI:");
    cy.get("#openPIWindow").should("be.visible");
    cy.get("tbody > :nth-child(2) > :nth-child(3)").should("contain", "IRB:");
    cy.get("tbody > :nth-child(2) > :nth-child(4)").should(
      "contain",
      "Biomedical"
    );
    cy.get(":nth-child(3) > .label").should("be.visible");
    cy.get(":nth-child(4) > .label").should("contain", "Study Title:");
    cy.get(":nth-child(4) > .copy").should(
      "contain",
      "A Comparison of Two Brief Suicide Prevention Interventions Tailored for Youth on the Autism Spectrum"
    );

    //PROTOCOL CONTINUATION
    cy.get("#formBody > .pageHeaderTitle").should(
      "contain",
      "Protocol Continuation"
    );
    cy.get(".introText > :nth-child(1)").should(
      "contain",
      "The IRB can grant a continuation of some or all research activities with currently enrolled subjects during lapse of IRB approval for a therapeutic or treatment study where the IRB has determined there is a prospect for direct benefit."
    );
    cy.get(".introText > :nth-child(2)").should(
      "contain",
      "List below for each participant their study identification code (Study ID) and the specific study activities that you propose to continue as well as the clinical/medical justification for the continuation and the risks to the participant if study activities are not continued."
    );
    cy.get("em").should(
      "contain",
      "Do not provide any direct participant identifiers. Activities can be general, e.g., administration of study drug, safety labs, imaging, etc."
    );
    cy.get("#noParticipants > p").should(
      "contain",
      "There are currently no participants."
    );

    //Add Participant
    cy.get("#btnSave").click();

    cy.get(".ui-dialog").should("be.visible");
    cy.get("form > table > tbody > :nth-child(1) > :nth-child(1)").should(
      "contain",
      "Participant Study Code:"
    );
    cy.get(":nth-child(1) > .small").should("contain", "(Study ID)");
    cy.get("#participant_study_id").type("12345");

    cy.get("form > table > tbody > :nth-child(2) > :nth-child(1)").should(
      "contain",
      "Activities to continue:"
    );
    cy.get("#activities").type("My activities that will continue");
    cy.get("form > table > tbody > :nth-child(3) > td").should(
      "contain",
      "Justification for continuation of activities listed above:"
    );
    cy.get("#justification").type(
      "My justification for continuation of activities listed above."
    );
    cy.get(":nth-child(2) > .ui-button-text").should("be.visible");
    cy.get(":nth-child(1) > .ui-button-text").should("be.visible").click();

    //Verify added participant
    cy.get(":nth-child(1) > strong").should(
      "contain",
      "Participant Study Code (Study ID):"
    );
    cy.get(":nth-child(1) > .textAnswer").should("contain", "12345");
    cy.get(":nth-child(2) > strong").should(
      "contain",
      "Activities to continue:"
    );
    cy.get(":nth-child(2) > .textAnswer").should(
      "contain",
      "My activities that will continue"
    );
    cy.get(":nth-child(3) > strong").should(
      "contain",
      "Justification for continuation of activities listed above:"
    );
    cy.get(":nth-child(3) > .textAnswer").should(
      "contain",
      "My justification for continuation of activities listed above."
    );

    //Edit participant
    cy.get(".btn-outline-secondary").click();
    cy.get("#dialogAddParticipant").should("be.visible");
    cy.get(":nth-child(2) > .ui-button-text").click();

    cy.get("#btnSave").should("be.visible");
    cy.get("#btnSubmit").should("be.visible").click();
  });

  //PROTOCOL CONTINUATION: PI CERT
  it("Protocol Continuation - Being Routed", () => {
    cy.visit(devMaintBaseUCypress.config().devTrunkBaseUrl);
    cy.get("input#username.long").type(PI).should("have.value", PI);
    cy.get("input#password.long").type("test{Enter}");

    cy.get("#dashboardmenu8 > :nth-child(2) > a").click();
    cy.get('input[placeholder="IRB Number"]').type(IRBNumber);
    cy.get(".sorting_1 > a").click();

    cy.get("#navPICert > :nth-child(2)").click();
  });

  //PROTOCOL CONTINUATION - STUDY HISTORY SCREEN/SUBMISSION DETAILS
  it("Protocol Continuation - Verify Study History/Submission Details", () => {
    cy.visit(Cypress.config().devTrunkBaseUrl);
    cy.get("input#username.long")
      .type(IRBAnalyst)
      .should("have.value", IRBAnalyst);
    cy.get("input#password.long").type("test{Enter}");

    cy.viewport(1200, 700);
    cy.get(
      'td[data-title="Accepted By IRB"] > .bucket > :nth-child(2) > table > tbody > :nth-child(10) > .countTotal > a'
    ).click();
    cy.wait(1000);
    cy.get("#bucketDataTable_filter > label > input").type(
      "A Comparison of Two Brief Suicide Prevention Interventions Tailored for Youth on the Autism Spectrum"
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
    cy.get(
      ":nth-child(1) > :nth-child(2) > table > tbody > tr > :nth-child(2) > .button"
    ).click();
    cy.get('#date_received_cell > tbody > tr > [width="140px"] > label').should(
      "be.visible"
    );
  });

  it("Protocol Continuation - Verify Application/Review popup", () => {
    cy.visit(Cypress.config().devTrunkBaseUrl);
    cy.get("input#username.long")
      .type(IRBAnalyst)
      .should("have.value", IRBAnalyst);
    cy.get("input#password.long").type("test{Enter}");

    cy.viewport(1200, 700);
    cy.get(
      'td[data-title="Accepted By IRB"] > .bucket > :nth-child(2) > table > tbody > :nth-child(10) > .countTotal > a'
    ).click();
    cy.wait(1000);
    cy.get("#bucketDataTable_filter > label > input").type(
      "A Comparison of Two Brief Suicide Prevention Interventions Tailored for Youth on the Autism Spectrum"
    );
    cy.get("#bucketDataTable > tbody > .odd > :nth-child(1) > a").click();

    cy.get(".swimlane1 > div").should("be.visible");

    // Get window object
    cy.window().then((win) => {
      // Replace window.open(url, target)-function with our own arrow function
      cy.stub(win, "open", (url) => {
        // change window location to be same as the popup url
        win.location.href = Cypress.config().devTrunkBaseUrl + url;
      }).as("application"); // alias it with popup, so we can refer it with @application
    });

    // Click button which triggers javascript's window.open() call
    cy.contains("Application").click();
    // Make sure that it triggered window.open function call
    //cy.get("@application").should("be.called");

    //REVIEW POPUP

    //Create a Review
    cy.get("#navNextStep")
      .should("contain", "Next Step: Add Review Type")
      .click();
    cy.get("#modalPopup").should("be.visible");
    cy.get('#hasReviewTypes > [style="display: block;"]').should(
      "contain",
      "Create review type : 'Administrative'?"
    );
    cy.get("#btnCreateReview").click();

    //Verify header info
    cy.get("#irbInfo > :nth-child(1) > :nth-child(1)").should(
      "contain",
      "21-2110"
    );
    cy.get("#irbInfo > :nth-child(1) > :nth-child(3)").should(
      "contain",
      "Ref ID:"
    );
    cy.get("#irbInfo > :nth-child(2) > :nth-child(1)").should(
      "contain",
      "Protocol Exception"
    );
    cy.get("#irbInfo > :nth-child(2) > :nth-child(4)").should(
      "contain",
      "(Continuation)"
    );
    cy.get(":nth-child(1) > strong").should("contain", "PI:");
    cy.get("#irbInfo > :nth-child(3) > :nth-child(1)").should(
      "contain",
      "PI: Maddox, Brenna"
    );
    cy.get(":nth-child(2) > strong").should("contain", "Analyst:");
    cy.get("#analystName").should("contain", "Cantrell, Celeste");
    cy.get(":nth-child(3) > strong").should("contain", "Admin Dept:");
    cy.get("#irbInfo > :nth-child(3) > :nth-child(3)").should(
      "contain",
      "Admin Dept: Psychiatry - Research"
    );

    //Verify left rail
    cy.get("#navContainer").should("be.visible");
    cy.get("#navReviewType").should("be.visible");
    cy.get("#navReviewConditions").should("be.visible");
    cy.get("#navNextStep").should("be.visible");
    cy.get("#navApplication").should("be.visible");
    cy.get("#navLibrary").should("not.exist");
    cy.get("#navStipulations").should("be.visible");
    cy.get("#navExpandCollapse").should("not.exist");
    cy.get("#navItemList").should("not.exist");
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

    cy.get("#closeNavContainer").click();

    //Protocol Continuation
    cy.get("#applicationForm").should("be.visible");
    cy.get(".pageHeaderTitle").should("contain", "Protocol Continuation");
    cy.get(".introText > :nth-child(1)").should(
      "contain",
      "The IRB can grant a continuation of some or all research activities with currently enrolled subjects during lapse of IRB approval for a therapeutic or treatment study where the IRB has determined there is a prospect for direct benefit. "
    );
    cy.get(".introText > :nth-child(2)").should(
      "contain",
      "List below for each participant their study identification code (Study ID) and the specific study activities that you propose to continue as well as the clinical/medical justification for the continuation and the risks to the participant if study activities are not continued."
    );
    cy.get("em").should(
      "contain",
      "Do not provide any direct participant identifiers. Activities can be general, e.g., administration of study drug, safety labs, imaging, etc."
    );

    cy.get(":nth-child(2) > :nth-child(2) > strong").should(
      "contain",
      "Participant Study Code (Study ID):"
    );
    cy.get(":nth-child(2) > .textAnswer").should("contain", "12345");
    cy.get(":nth-child(2) > :nth-child(3) > strong").should(
      "contain",
      "Activities to continue:"
    );
    cy.get(":nth-child(3) > .textAnswer").should(
      "contain",
      "My activities that will continue"
    );
    cy.get(":nth-child(4) > strong").should(
      "contain",
      "Justification for continuation of activities listed above:"
    );
    cy.get(":nth-child(4) > .textAnswer").should(
      "contain",
      "My justification for continuation of activities listed above."
    );

    //Create a stipulation
    cy.get(
      ":nth-child(1) > .questionNumber > .addProtocolEventStipButton"
    ).click();
    cy.wait(1000);

    cy.get(".cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My test stip for question 1");
    });
    cy.contains("Save").click();
    cy.get(".editStipulation > p").should("be.visible");
    cy.get("#navStipulations").should("contain", "Stipulations (1)");

    //Record Review result
    cy.get("#navNextStep").click();
    cy.get("#selectResult").should("be.visible");
    cy.get("#reviewResult1").should("contain", "Minor Stipulations");
    cy.get("#reviewResult2").should("have.class", "stipsNotAllowed"); //Withdrawn
    cy.get("#reviewResult3").should("have.class", "stipsNotAllowed"); //Acknowledged
    cy.get("#reviewResult1").click();
    cy.get(".swimlane2 > div").should("contain", "Result: Minor Stipulations");

    //Draft Letter
    cy.get("#navLetter").should("contain", "Letter").click();
    cy.get(".ui-dialog").should("be.visible");
    cy.get('#hasTemplates > [style="display: block;"]').should(
      "contain",
      "Protocol Exception - Minor Stips"
    );
    cy.get(':nth-child(3) > [onclick="modalClose();"]').should(
      "contain",
      "Close"
    );
    cy.get("#btnDraftLetter").should("contain", "Draft Letter").click();

    //Verify and Finalize letter
    cy.get("#sent_to_email").should("be.visible");
    cy.get("#sent_to_email2").should("be.visible");
    cy.get(".cke_wysiwyg_frame").should("be.visible");
    cy.get(".letterSubHeader").should(
      "contain",
      "Protocol Exception - Minor Stips"
    );
    cy.get("#btnViewPDF").should("contain", "View PDF");
    cy.get("#btnDelete").should("contain", "Delete");
    cy.get("#btnSaveLetter").should("contain", "Save");
    cy.get("#btnSendToChair").should("contain", "Send to Chair");
    cy.get("#btnFinalizeLetterModal")
      .should("contain", "Finalize Letter")
      .click();
    cy.get(".ui-dialog-content").should("be.visible");
    cy.get(".ui-dialog-buttonset > .btn-info").click();
  });

  it("Protocol Continuation - Waiting PI Response", () => {
    cy.visit(Cypress.config().devTrunkBaseUrl);
    cy.get("input#username.long")
      .type(ownerOnyen)
      .should("have.value", ownerOnyen);
    cy.get("input#password.long").type("test{Enter}");
    cy.viewport(1300, 750);

    cy.get("#dashboardmenu5 > :nth-child(10) > a").click();
    cy.get('input[placeholder="IRB Number"]').type(IRBNumber);
    cy.get(".odd > :nth-child(2) > a").click();

    //ITEM LIST
    cy.get("#itemListContainer").should("be.visible");
    cy.get("#itemListHeader > :nth-child(2)").should("contain", "Item List");
    cy.get(".subHeader").should("contain", "Protocol Exception");
    cy.get("#navViewForm > :nth-child(2)").should("contain", "View Form");
    cy.get("#navResubmit > :nth-child(2)").should("contain", "Resubmit");
    cy.get("#navStipulations > :nth-child(2)").should(
      "contain",
      "Stipulations"
    );
    cy.get("#navSubmitToRouting > :nth-child(2)").should(
      "contain",
      "Submit Exception"
    );
    cy.get("#navPICert > :nth-child(2)").should("contain", "PI Certification");
    cy.get("#navDownloadPDF > :nth-child(2)").should("contain", "Download PDF");
    //View history modal
    cy.get("#navViewHistory > :nth-child(2)")
      .should("contain", "View History")
      .click();
    cy.get(".ui-dialog").should("be.visible");
    cy.get("b.copy").should("contain", "Continuation created");
    cy.get('[style="padding-bottom:10px;"] > div.copy').should("be.visible");
    cy.get(
      '[aria-labelledby="ui-dialog-title-modalPopup"] > .ui-dialog-titlebar > .ui-dialog-titlebar-close > .ui-icon'
    ).click();

    //PROTOCOL CONTINATUION REQUEST HEADER - STUDY DATA
    cy.get("#irbInfo > .pageHeaderTitle").should(
      "contain",
      "UNC IRB Protocol Exception Request"
    );
    cy.get('[width="14%"]').should("contain", "IRB Number:");
    cy.get("#goToStudyManagement > a").should("contain", IRBNumber);
    cy.get("tbody > :nth-child(1) > :nth-child(3)").should(
      "contain",
      "Study Status"
    );
    cy.get("tbody > :nth-child(1) > :nth-child(4)").should(
      "contain",
      "Approved"
    );
    cy.get("tbody > :nth-child(1) > :nth-child(5)").should("be.visible");
    cy.get("tbody > :nth-child(2) > :nth-child(1)").should("contain", "PI:");
    cy.get("#openPIWindow").should("be.visible");
    cy.get("tbody > :nth-child(2) > :nth-child(3)").should("contain", "IRB:");
    cy.get("tbody > :nth-child(2) > :nth-child(4)").should(
      "contain",
      "Biomedical"
    );
    cy.get(":nth-child(3) > .label").should("be.visible");
    cy.get(":nth-child(4) > .label").should("contain", "Study Title:");
    cy.get(":nth-child(4) > .copy").should(
      "contain",
      "A Comparison of Two Brief Suicide Prevention Interventions Tailored for Youth on the Autism Spectrum"
    );

    //PROTOCOL CONTINUATION FORM
    cy.get("#formBody > .pageHeaderTitle").should(
      "contain",
      "Protocol Continuation"
    );
    cy.get(".introText").should("be.visible");
    cy.get("#formBody > .pageHeaderTitle").should(
      "contain",
      "Protocol Continuation"
    );
    cy.get(".introText > :nth-child(1)").should(
      "contain",
      "The IRB can grant a continuation of some or all research activities with currently enrolled subjects during lapse of IRB approval for a therapeutic or treatment study where the IRB has determined there is a prospect for direct benefit."
    );
    cy.get(".introText > :nth-child(2)").should(
      "contain",
      "List below for each participant their study identification code (Study ID) and the specific study activities that you propose to continue as well as the clinical/medical justification for the continuation and the risks to the participant if study activities are not continued."
    );
    cy.get("em").should(
      "contain",
      "Do not provide any direct participant identifiers. Activities can be general, e.g., administration of study drug, safety labs, imaging, etc."
    );

    //ADDITIONAL INFORMATION
    cy.get("#additionalInfo > .pageHeaderTitle").should("be.visible");
    cy.get("#additionalInfo").should("be.visible");
    cy.contains("1 stipulations").click();

    //RESPOND TO STIPULATIONS
    cy.get(":nth-child(2) > strong").should(
      "contain",
      "Participant Study Code (Study ID):"
    );
    cy.get(":nth-child(2) > .textAnswer").should("contain", "12345");
    cy.get(":nth-child(3) > strong").should(
      "contain",
      "Activities to continue:"
    );
    cy.get(":nth-child(3) > .textAnswer").should(
      "contain",
      "My activities that will continue"
    );
    cy.get(":nth-child(4) > strong").should(
      "contain",
      "Justification for continuation of activities listed above:"
    );
    cy.get(":nth-child(4) > .textAnswer").should(
      "contain",
      "My justification for continuation of activities listed above."
    );

    cy.get(".stipHeader").should("contain", "Stipulation: by IRB Admin on");
    cy.get(".editStipulation > p").should(
      "contain",
      "My test stip for question 1"
    );
    cy.get(".stipButtons > .stipEditButton").click();

    cy.wait(1000);

    cy.get(".cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type(
        "My test Protocol Continuation Response for question 1"
      );
    });

    //cy.wait(3000)
    cy.get(".save").click(); //Not sure why this fails for PE's and PC's?
    cy.wait(1000);
    cy.get(".save").click(); //Clicking it again work? What?

    cy.get("#navStipulations > :nth-child(2) > .small").should(
      "contain",
      "Responded: 1/1"
    );

    cy.get("#navResubmit > :nth-child(2)")
      .should("contain", "Resubmit")
      .click();

    /*
  cy.get('iframe').then(function($iframe) {
  const $body = $iframe.contents().find("body");
  console.log($body);
  cy.wrap($body).type("My test Protocol Exception Response for question 1");
  */

    //cy.get('.save').click()
    // cy.reload()

    // cy.wait(2000)

    //RESBUMIT ADMINISTRATIVE REVIEW
    //  cy.get('#navResubmit > :nth-child(2)').click()
  });

  it("Protocol Exceptions - Verify Resubmitted Review popup", () => {
    cy.visit(Cypress.config().devTrunkBaseUrl);

    cy.get("input#username.long");
    cy.get("input#username.long")
      .type("cdcantre")
      .should("have.value", IRBAnalyst);
    cy.get("input#password.long").type("test{Enter}");
    cy.viewport(1200, 700);

    cy.get(
      'td[data-title="PI Responses"] > .bucket > :nth-child(2) > table > tbody > :nth-child(2) > [data-column="NFB"] > a'
    ).click();
    cy.wait(1000);
    cy.get("#bucketDataTable_filter > label > input").type(
      "A Comparison of Two Brief Suicide Prevention Interventions Tailored for Youth on the Autism Spectrum"
    );
    cy.get("#bucketDataTable > tbody > .odd > :nth-child(1) > a").click();

    // Get window object
    cy.window().then((win) => {
      // Replace window.open(url, target)-function with our own arrow function
      cy.stub(win, "open", (url) => {
        // change window location to be same as the popup url
        win.location.href = Cypress.config().devTrunkBaseUrl + url;
      }).as("popup"); // alias it with popup, so we can refer it with @popup
    });

    // Click button which triggers javascript's window.open() call
    cy.contains("Application").should("be.visible").click();

    // Make sure that it triggered window.open function call
    //cy.get("@popup").should("be.called");

    //REVIEW POPUP

    //Verify header info
    cy.get("#irbInfo > :nth-child(1) > :nth-child(1)").should(
      "contain",
      IRBNumber
    );
    cy.get("#irbInfo > :nth-child(1) > :nth-child(3)").should(
      "contain",
      "Ref ID:"
    );
    cy.get("#irbInfo > :nth-child(2) > :nth-child(1)").should(
      "contain",
      "Protocol Exception"
    );
    cy.get("#irbInfo > :nth-child(2) > :nth-child(4)").should(
      "contain",
      "(Continuation)"
    );
    cy.get(":nth-child(1) > strong").should("contain", "PI:");
    cy.get("#irbInfo > :nth-child(3) > :nth-child(1)").should(
      "contain",
      "PI: Maddox, Brenna"
    );
    cy.get(":nth-child(2) > strong").should("contain", "Analyst:");
    cy.get("#analystName").should("contain", "Cantrell, Celeste");
    cy.get(":nth-child(3) > strong").should("contain", "Admin Dept:");
    cy.get("#irbInfo > :nth-child(3) > :nth-child(3)").should(
      "contain",
      "Admin Dept: Psychiatry - Research"
    );

    //Verify left rail
    cy.get("#navContainer").should("be.visible");
    cy.get("#navReviewType").should("be.visible");
    cy.get("#navReviewConditions").should("be.visible");
    cy.get("#navNextStep").should("be.visible");
    cy.get("#navApplication").should("be.visible");
    cy.get("#navLibrary").should("not.exist");
    cy.get("#navStipulations").should("be.visible");
    cy.get("#navExpandCollapse").should("not.exist");
    cy.get("#navItemList").should("not.exist");
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

    cy.get("#closeNavContainer").click();

    //Protocol Continuation
    cy.get("#applicationForm").should("be.visible");
    cy.get(".pageHeaderTitle").should("contain", "Protocol Continuation");
    cy.get(".introText > :nth-child(1)").should(
      "contain",
      "The IRB can grant a continuation of some or all research activities with currently enrolled subjects during lapse of IRB approval for a therapeutic or treatment study where the IRB has determined there is a prospect for direct benefit. "
    );
    cy.get(".introText > :nth-child(2)").should(
      "contain",
      "List below for each participant their study identification code (Study ID) and the specific study activities that you propose to continue as well as the clinical/medical justification for the continuation and the risks to the participant if study activities are not continued."
    );
    cy.get("em").should(
      "contain",
      "Do not provide any direct participant identifiers. Activities can be general, e.g., administration of study drug, safety labs, imaging, etc."
    );

    cy.get(":nth-child(2) > :nth-child(2) > strong").should(
      "contain",
      "Participant Study Code (Study ID):"
    );
    cy.get(":nth-child(2) > .textAnswer").should("contain", "12345");
    cy.get(":nth-child(2) > :nth-child(3) > strong").should(
      "contain",
      "Activities to continue:"
    );
    cy.get(":nth-child(3) > .textAnswer").should(
      "contain",
      "My activities that will continue"
    );
    cy.get(":nth-child(4) > strong").should(
      "contain",
      "Justification for continuation of activities listed above:"
    );
    cy.get(":nth-child(4) > .textAnswer").should(
      "contain",
      "My justification for continuation of activities listed above."
    );

    // CAPTURE URL OF REVIEW WINDOW
    cy.url().as("reviewWindow");

    //PI RESPONSES
    // Get window object
    cy.window().then((win) => {
      // Replace window.open(url, target)-function with our own arrow function
      cy.stub(win, "open", (url) => {
        // change window location to be same as the popup url
        win.location.href = Cypress.config().devTrunkBaseUrl + url;
      }).as("piResponses"); // alias it with popup, so we can refer it with @popup
    });

    // Click button which triggers javascript's window.open() call
    cy.get("#navPIResponses").click();
    cy.viewport(1200, 800);
    // Make sure that it triggered window.open function call
    //cy.get("@piResponses").should("be.called");

    cy.get("#irbInfo > :nth-child(1) > span").should("contain", "PI Responses");
    cy.get("#irbInfo > :nth-child(1) > div").should(
      "contain",
      "PI: Maddox, Brenna"
    );
    cy.get("#irbInfo > :nth-child(2) > :nth-child(1)").should(
      "contain",
      IRBNumber
    );
    cy.get("#irbInfo > :nth-child(2) > :nth-child(3)").should(
      "contain",
      "Ref ID:"
    );
    cy.get("#irbInfo > :nth-child(3) > span").should(
      "contain",
      "Protocol Exception"
    );
    cy.get("#irbInfo > :nth-child(3) > div").should(
      "contain",
      "(Continuation)"
    );

    cy.get("#PIResponseHeader").should("be.visible");
    //ANSWER
    cy.get(".answerForStip > :nth-child(1)").should("contain", "Answer");
    cy.get(".changeButton").should("be.visible");

    //STIPLUATION/RESPONSE #1
    //cy.get('#questionPIResponseparticipant_study_id > :nth-child(1)').should('contain', 'Stipulation/Response #1')
    cy.get(".stipDiv > :nth-child(1)").should(
      "contain",
      "Stipulation by Justin Feussner on"
    );
    cy.get(".stipDiv > :nth-child(2) > p").should(
      "contain",
      "My test stip for question 1"
    );
    //Response
    cy.get(".responseDiv > :nth-child(1)").should("be.visible");
    cy.get(".responseDiv > :nth-child(2)").should(
      "contain",
      "My test Protocol Continuation Response for question 1"
    );
    //Action
    cy.get(".actionDiv > :nth-child(1)").should(
      "contain",
      "Click the Desired Action"
    );
    cy.get(".actionDiv > :nth-child(2)").should("be.visible");
    cy.get(".resend").click();
    cy.wait(5000);
    cy.get(".resendDiv > :nth-child(1)").should(
      "contain",
      "Resend (Create new stipulation)"
    );
    cy.get(".pdftextbox-longer").should("contain", "Select Macro");
    cy.get(".cke_inner").should("be.visible");
    cy.get(".withdraw").should("be.visible");
    cy.get(".resolve").click();
    cy.get(".responseConfirm").click();
    cy.get("#saveResponseConfirmations").click();

    //NAVIGATE BACK TO REVIEW WINDOW
    cy.get("@reviewWindow").then((url) => {
      cy.visit(url);
    });

    //PROTOCOL CONTINUATION FORM
    cy.get("#formBody > .pageHeaderTitle").should(
      "contain",
      "Protocol Continuation"
    );
    cy.get(".introText").should("be.visible");
    cy.get("#formBody > .pageHeaderTitle").should(
      "contain",
      "Protocol Continuation"
    );
    cy.get(".introText > :nth-child(1)").should(
      "contain",
      "The IRB can grant a continuation of some or all research activities with currently enrolled subjects during lapse of IRB approval for a therapeutic or treatment study where the IRB has determined there is a prospect for direct benefit."
    );
    cy.get(".introText > :nth-child(2)").should(
      "contain",
      "List below for each participant their study identification code (Study ID) and the specific study activities that you propose to continue as well as the clinical/medical justification for the continuation and the risks to the participant if study activities are not continued."
    );
    cy.get("em").should(
      "contain",
      "Do not provide any direct participant identifiers. Activities can be general, e.g., administration of study drug, safety labs, imaging, etc."
    );

    //RESPOND TO STIPULATIONS
    cy.get(":nth-child(2) > strong").should(
      "contain",
      "Participant Study Code (Study ID):"
    );
    cy.get(":nth-child(2) > .textAnswer").should("contain", "12345");
    cy.get(":nth-child(3) > strong").should(
      "contain",
      "Activities to continue:"
    );
    cy.get(":nth-child(3) > .textAnswer").should(
      "contain",
      "My activities that will continue"
    );
    cy.get(":nth-child(4) > strong").should(
      "contain",
      "Justification for continuation of activities listed above:"
    );
    cy.get(":nth-child(4) > .textAnswer").should(
      "contain",
      "My justification for continuation of activities listed above."
    );

    //Record Review result
    cy.get("#navNextStep").click();
    cy.get("#selectResult").should("be.visible");
    cy.get("#reviewResult1").should("contain", "Minor Stipulations"); //Minor Stipulations
    cy.get("#reviewResult2").should("contain", "Withdrawn"); //Withdrawn
    cy.get("#reviewResult3").should("contain", "Acknowledged").click(); //Acknowledged
    cy.get(".swimlane2 > div").should("contain", "Result: Acknowledged");

    //Draft Letter
    cy.get("#navLetter").should("contain", "Letter").click();
    cy.get(".ui-dialog").should("be.visible");
    cy.get("#letterTypeId")
      .should("contain", "Select Template Type...")
      .and("contain", "Protocol Exception - Acknowledged")
      .and("contain", "Protocol Continuation - Approval")
      .select("Protocol Continuation - Approval");
    cy.get(':nth-child(3) > [onclick="modalClose();"]').should(
      "contain",
      "Close"
    );
    cy.get("#btnDraftLetter").should("contain", "Draft Letter").click();
    cy.wait(10000);

    //Verify and Finalize letter
    cy.get("#sent_to_email").should("be.visible");
    cy.get("#sent_to_email2").should("be.visible");
    cy.get(".cke_wysiwyg_frame").should("be.visible");
    cy.get(".letterSubHeader").should(
      "contain",
      "Protocol Exception - Acknowledged"
    );
    cy.get("#btnViewPDF").should("contain", "View PDF");
    cy.get("#btnDelete").should("contain", "Delete");
    cy.get("#btnSaveLetter").should("contain", "Save");
    cy.get("#btnSendToChair").should("contain", "Send to Chair");
    cy.get("#btnFinalizeLetterModal")
      .should("contain", "Finalize Letter")
      .click();
    cy.get(".ui-dialog-content").should("be.visible");
    cy.get(".ui-dialog-buttonset > .btn-info").click();
  });
});
