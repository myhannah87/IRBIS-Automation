describe("Protocol Exception", () => {

  const ownerOnyen = "mchopra";
  const PI = "rtraub";
  const IRBAnalyst = "jfuse";
  const IRBNumber = "22-2824";

  it("Create Protocol Exception", () => {
    cy.visit(Cypress.config().stageTrunkBaseUrl);
    //cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm?event=home.dashboard.irbStudyManagement&irb_id=22-2824');
    cy.get("input#username.long")
      .type(ownerOnyen)
      .should("have.value", "mchopra");
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
    cy.get("#chooseProtocolException").should("be.visible").click();

    //ITEM LIST
    cy.get("#itemListContainer").should("be.visible");
    cy.get("#itemListHeader > :nth-child(2)").should("contain", "Item List");
    cy.get(".subHeader").should("contain", "Protocol Exception");
    cy.get("#navViewForm > :nth-child(2)").should("contain", "View Form");
    cy.get("#navSaveForm > :nth-child(2)").should("contain", "Save Form");
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
    cy.get("b.copy").should("contain", "Exception created");
    cy.get('[style="padding-bottom:10px;"] > div.copy').should("be.visible");
    cy.get(".ui-icon").click();
    cy.get("#navDeleteException > :nth-child(2)").should(
      "contain",
      "Delete Exception"
    );

    //PROTOCOL EXCEPTION REQUEST HEADER - STUDY DATA
    cy.get("#irbInfo > .pageHeaderTitle").should(
      "contain",
      "UNC IRB Protocol Exception Request"
    );
    cy.get('[width="14%"]').should("contain", "IRB Number:");
    cy.get("#goToStudyManagement > a").should("contain", "22-2824");
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
      "Retrospective review of patients switched from plasma exchange therapy to efgartigimod treatment"
    );

    //PROTOCOL EXCPETION FORM
    cy.get("#formBody > .pageHeaderTitle").should(
      "contain",
      "Protocol Exception"
    );
    cy.get(".introText").should("be.visible");
    cy.get(".introText > :nth-child(1)").should(
      "contain",
      "This protocol exception request applies to a single individual."
    );
    cy.get(".introText > :nth-child(2)").should(
      "contain",
      "Approval is required prior to implementing the request."
    );

    //question 1
    cy.get("#questionList > :nth-child(1) > :nth-child(2) > div").should(
      "contain",
      "Participant Study Identification Code (Study ID)"
    );
    cy.get("#participant_study_id").type(
      "My Participant Study Identification Code"
    );
    //.type('My Participant Study Identification Code (Study ID).')

    //question 2
    cy.get("#questionList > :nth-child(2) > :nth-child(2) > div").should(
      "contain",
      "Provide a description and rationale for the request."
    );
    cy.get("#description").type(
      "My description and rationale for the request."
    );

    //question 3
    cy.get("#questionList > :nth-child(3) > :nth-child(2)").should(
      "contain",
      "Does the protocol exception pose new risks not currently listed in the consent form, increase the likelihood or severity of experiencing known risks, or otherwise affect the safety of the participant?"
    );
    cy.get("#new_risks_no").should("be.visible");
    cy.get("#new_risks_yes").should("be.visible").click();
    cy.get("#new_risks_justification").type(
      "My justification regarding the response."
    );

    //question 4
    cy.get("#questionList > :nth-child(4) > :nth-child(2)").should(
      "contain",
      "Does the protocol exception require a different informed consent form or process than the one currently approved by the IRB?"
    );
    cy.get("#different_informed_consent_no").should("be.visible").click();
    cy.get(":nth-child(4) > :nth-child(2) > .showHide").should(
      "not.be.visible"
    );
    cy.get("#explain_consent_process").should("not.be.visible");
    cy.get("#different_informed_consent_yes").should("be.visible").click();
    cy.get(":nth-child(4) > :nth-child(2) > .showHide").should(
      "contain",
      "Explain the consenting process you will use in relation to this protocol exception and if applicable, attach any proposed addendum to the informed consent that will be used."
    );
    cy.get("#explain_consent_process").type(
      "My explanation of the consenting process I will use in relation to this protocol exception and if applicable."
    );

    //question 5
    cy.get("#questionList > :nth-child(5) > :nth-child(2)").should(
      "contain",
      "Does the protocol exception affect the integrity of the study data?"
    );
    cy.get("#integrity_affected_no").should("be.visible");
    cy.get("#integrity_affected_yes").should("be.visible").click();
    cy.get("#integrity_affected_justification").type(
      "My justification regarding your response."
    );

    //question 6
    cy.get("#questionList > :nth-child(6) > :nth-child(2)").should(
      "contain",
      "Will data collected as a result of the exception be analyzed in a different manner from other collected data?"
    );
    cy.get("#data_analyzed_different_no").should("be.visible").click();
    cy.get(":nth-child(6) > :nth-child(2) > .showHide").should(
      "not.be.visible"
    );
    cy.get("#data_analyzed_different_description").should("not.be.visible");
    cy.get("#data_analyzed_different_yes").should("be.visible").click();
    cy.get(":nth-child(6) > :nth-child(2) > .showHide").should("be.visible");
    cy.get("#data_analyzed_different_description").type(
      "My explanation of how it will be analyzed differently."
    );

    //question 7
    cy.get(":nth-child(7) > :nth-child(2)").should(
      "contain",
      "Have you previously requested this exception for this same reason?"
    );
    cy.get("#previously_requested_no").should("be.visible").click();
    cy.get(":nth-child(7) > :nth-child(2) > .showHide").should(
      "not.be.visible"
    );
    cy.get("#previously_requested_description").should("not.be.visible");
    cy.get("#previously_requested_yes").should("be.visible").click();
    cy.get(":nth-child(7) > :nth-child(2) > .showHide").should("be.visible");
    cy.get("#previously_requested_description").type(
      "My explanation of if a previous exception was requested for the same reason."
    );

    //question 8
    cy.get(":nth-child(8) > :nth-child(2)").should(
      "contain",
      "Is this study externally sponsored?"
    );
    cy.get("#externally_sponsored_yes").click();
    cy.get("#external_organization_FDA").should("be.visible").click();
    cy.get("#external_organization_NIH").should("be.visible");
    cy.get("#external_organization_Industry_Sponsor").should("be.visible");
    cy.get("#external_organization_Other").should("be.visible");
    // Need to eventually incorporate triggered textarea here.
    cy.get("#external_organization_NA").should("be.visible");
    cy.get("th").should("contain", "Documentation");
    cy.get("em").should("contain", "No Documentation Provided");
    cy.get("#externally_sponsored_no").click();
    cy.get(":nth-child(8) > :nth-child(2) > .showHide").should(
      "not.be.visible"
    );
    cy.get("#documentationContainer").should("not.be.visible");

    //question 9
    cy.get(":nth-child(9) > :nth-child(2)").should(
      "contain",
      "For participants not meeting inclusion/exclusion criteria"
    );
    cy.get("#endorsement_uploaded_yes").click();
    cy.get(":nth-child(9) > :nth-child(2) > .showHide").should(
      "not.be.visible"
    );
    cy.get("#na_endorsement_explanation").should("not.be.visible");
    cy.get("#endorsement_uploaded_NA").click();
    cy.get("#na_endorsement_explanation").type(
      "My provided explanation as to why a written endorsement been uploaded as an attachment"
    );

    cy.get("#navSaveForm > :nth-child(2)").click();
    cy.get("#navSubmitToRouting > :nth-child(2)").click();
  });

  //PROTOCOL EXCEPTION: PI CERT
  it("Protocol Exception - Being Routed/PI Cert", () => {
    cy.visit(Cypress.config().stageTrunkBaseUrl);
    //cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm?event=home.protocolException&id=383967');
    cy.get("input#username.long").type(PI).should("have.value", PI);
    cy.get("input#password.long").type("test{Enter}");

    cy.wait(2000);
    cy.get("#dashboardmenu8 > :nth-child(2) > a").click();
    cy.get('input[placeholder="Title"]').type(
      "Retrospective review of patients switched from plasma exchange therapy to efgartigimod treatment"
    );
    cy.get(".sorting_1 > a").click();

    cy.get("#navSubmitToRouting > :nth-child(2) > .small").should(
      "contain",
      "Submitted:"
    );
    cy.get("#navPICert > :nth-child(2)").click();
    //cy.wait(5000)
    cy.get("#navPICert > :nth-child(2) > .small").should(
      "contain",
      "Certified:"
    );
  });

  //PROTOCOL EXCEPTION - STUDY HISTORY SCREEN/SUBMISSION DETAILS
  it("Protocol Exception - Verify Study History/Submission Details", () => {
    cy.visit(Cypress.config().stageTrunkBaseUrl);
    cy.get("input#username.long")
      .type(IRBAnalyst)
      .should("have.value", IRBAnalyst);
    cy.get("input#password.long").type("test{Enter}");

    cy.viewport(1200, 700);
    cy.get(
      'td[data-title="Accepted By IRB"] > .bucket > :nth-child(2) > table > tbody > :nth-child(2) > [data-column="TBD"] > a'
    ).click();
    cy.wait(1000);
    cy.get("#bucketDataTable_filter > label > input").type(
      "Retrospective review of patients switched from plasma exchange therapy to efgartigimod treatment"
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

  it("Protocol Exception - Verify Application/Review popup", () => {
    cy.visit(Cypress.config().stageTrunkBaseUrl);
    cy.get("input#username.long")
      .type(IRBAnalyst)
      .should("have.value", IRBAnalyst);
    //.type('cjfennim').should('have.value', 'cjfennim')
    cy.get("input#password.long").type("test{Enter}");

    cy.viewport(1200, 700);
    cy.get(
      'td[data-title="Accepted By IRB"] > .bucket > :nth-child(2) > table > tbody > :nth-child(2) > [data-column="TBD"] > a'
    ).click();
    cy.wait(1000);
    cy.get("#bucketDataTable_filter > label > input").type(
      "Retrospective review of patients switched from plasma exchange therapy to efgartigimod treatment"
    );
    cy.get("#bucketDataTable > tbody > .odd > :nth-child(1) > a").click();

    cy.get(".swimlane1 > div").should("be.visible");

    // Get window object
    cy.window().then((win) => {
      // Replace window.open(url, target)-function with our own arrow function
      cy.stub(win, "open", (url) => {
        // change window location to be same as the popup url
        win.location.href = Cypress.config().stageTrunkBaseUrl + url;
      }).as("application"); // alias it with popup, so we can refer it with @application
    });

    // Click button which triggers javascript's window.open() call
    cy.contains("Application").click();
    // Make sure that it triggered window.open function call
    cy.get("@application").should("be.called");

    //REVIEW POPUP

    //Verify header info
    cy.get("#irbInfo > :nth-child(1) > :nth-child(1)").should(
      "contain",
      "22-2824"
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
      "(Protocol Exception)"
    );
    cy.get(":nth-child(1) > strong").should("contain", "PI:");
    cy.get("#irbInfo > :nth-child(3) > :nth-child(1)").should(
      "contain",
      "PI: Traub, Rebecca"
    );
    cy.get(":nth-child(2) > strong").should("contain", "Analyst:");
    cy.get("#analystName").should("contain", "Feussner, Justin");
    cy.get(":nth-child(3) > strong").should("contain", "Admin Dept:");
    cy.get("#irbInfo > :nth-child(3) > :nth-child(3)").should(
      "contain",
      "Admin Dept: Neurology-Neuromuscular"
    );

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

    //Protocol Exception
    cy.get("#applicationForm").should("be.visible");

    //Question 1
    cy.get(
      "#questionList > :nth-child(1) > :nth-child(2) > :nth-child(1)"
    ).should(
      "contain",
      "Participant Study Identification Code (Study ID) – Do not provide any direct subject identifiers. Instead, use a code identifier such as the one used in the study records."
    );
    cy.get(":nth-child(1) > :nth-child(2) > .textAnswer").should(
      "contain",
      "My Participant Study Identification Code"
    );
    cy.get(
      ":nth-child(1) > .questionNumber > .addProtocolEventStipButton"
    ).should("be.visible");

    //Question 2
    cy.get(
      "#questionList > :nth-child(2) > :nth-child(2) > :nth-child(1)"
    ).should("contain", "Provide a description and rationale for the request.");
    cy.get(":nth-child(2) > :nth-child(2) > .textAnswer").should(
      "contain",
      "My description and rationale for the request."
    );
    cy.get(
      ":nth-child(2) > .questionNumber > .addProtocolEventStipButton"
    ).should("be.visible");

    //Question 3
    cy.get("#questionList > :nth-child(3) > :nth-child(2)").should(
      "contain",
      "Does the protocol exception pose new risks not currently listed in the consent form, increase the likelihood or severity of experiencing known risks, or otherwise affect the safety of the participant?"
    );
    cy.get(
      ":nth-child(3) > :nth-child(2) > :nth-child(1) > .glyphicon-check"
    ).should("be.visible");
    cy.get(
      ":nth-child(3) > :nth-child(2) > :nth-child(1) > .glyphicon-unchecked"
    ).should("be.visible");
    cy.get(":nth-child(3) > :nth-child(2) > .textAnswer").should(
      "contain",
      "My justification regarding the response."
    );
    cy.get(
      ":nth-child(3) > .questionNumber > .addProtocolEventStipButton"
    ).should("be.visible");

    //Question 4
    cy.get("#questionList > :nth-child(4) > :nth-child(2)").should(
      "contain",
      "Does the protocol exception require a different informed consent form or process than the one currently approved by the IRB?"
    );
    cy.get(
      ":nth-child(4) > :nth-child(2) > :nth-child(1) > .glyphicon-check"
    ).should("be.visible");
    cy.get(
      ":nth-child(4) > :nth-child(2) > :nth-child(1) > .glyphicon-unchecked"
    ).should("be.visible");
    cy.get(":nth-child(4) > :nth-child(2) > :nth-child(3)").should(
      "contain",
      "Explain the consenting process you will use in relation to this protocol exception and if applicable, attach any proposed addendum to the informed consent that will be used."
    );
    cy.get(
      ":nth-child(4) > :nth-child(2) > :nth-child(3) > .textAnswer"
    ).should(
      "contain",
      "My explanation of the consenting process I will use in relation to this protocol exception and if applicable."
    );
    cy.get(
      ":nth-child(4) > .questionNumber > .addProtocolEventStipButton"
    ).should("be.visible");

    //Question 5
    cy.get("#questionList > :nth-child(5) > :nth-child(2)").should(
      "contain",
      "Does the protocol exception affect the integrity of the study data?"
    );
    cy.get(
      ":nth-child(5) > :nth-child(2) > :nth-child(1) > .glyphicon-check"
    ).should("be.visible");
    cy.get(
      ":nth-child(5) > :nth-child(2) > :nth-child(1) > .glyphicon-unchecked"
    ).should("be.visible");
    cy.get(":nth-child(5) > :nth-child(2) > .textAnswer").should(
      "contain",
      "My justification regarding your response."
    );
    cy.get(
      ":nth-child(5) > .questionNumber > .addProtocolEventStipButton"
    ).should("be.visible");

    //Question 6
    cy.get(":nth-child(6) > :nth-child(2)").should(
      "contain",
      "Will data collected as a result of the exception be analyzed in a different manner from other collected data?"
    );
    cy.get(
      ":nth-child(6) > :nth-child(2) > :nth-child(1) > .glyphicon-check"
    ).should("be.visible");
    cy.get(
      ":nth-child(6) > :nth-child(2) > :nth-child(1) > .glyphicon-unchecked"
    ).should("be.visible");
    cy.get('[data-showid="data_analyzed_different_yes"]').should(
      "contain",
      "Explain how it will be analyzed differently."
    );
    cy.get('[data-showid="data_analyzed_different_yes"] > .textAnswer').should(
      "contain",
      "My explanation of how it will be analyzed differently."
    );
    cy.get(
      ":nth-child(6) > .questionNumber > .addProtocolEventStipButton"
    ).should("be.visible");

    //Question 7
    cy.get("#questionList > :nth-child(7) > :nth-child(2)").should(
      "contain",
      "Have you previously requested this exception for this same reason?"
    );
    cy.get(
      ":nth-child(7) > :nth-child(2) > :nth-child(1) > .glyphicon-check"
    ).should("be.visible");
    cy.get(
      ":nth-child(7) > :nth-child(2) > :nth-child(1) > .glyphicon-unchecked"
    ).should("be.visible");
    cy.get('[data-showid="previously_requested_yes"]').should(
      "contain",
      "My explanation of if a previous exception was requested for the same reason."
    );
    cy.get(
      ":nth-child(7) > .questionNumber > .addProtocolEventStipButton"
    ).should("be.visible");

    //Question 8
    cy.get(":nth-child(8) > :nth-child(2)").should(
      "contain",
      "Is this study externally sponsored?"
    );
    cy.get(
      ":nth-child(8) > :nth-child(2) > :nth-child(1) > .glyphicon-unchecked"
    ).should("be.visible");
    cy.get(
      ":nth-child(8) > :nth-child(2) > :nth-child(1) > .glyphicon-check"
    ).should("be.visible");

    //Question 9
    cy.get("#questionList > :nth-child(9) > :nth-child(2)").should(
      "contain",
      "For participants not meeting inclusion/exclusion criteria, a physician uninvolved in the care of the participant must provide a written endorsement for the inclusion of the ineligible person due to clinical alternatives being limited to less favorable options."
    );
    cy.get(
      ":nth-child(9) > :nth-child(2) > :nth-child(3) > .glyphicon-unchecked"
    ).should("be.visible");
    cy.get(
      ":nth-child(9) > :nth-child(2) > :nth-child(3) > .glyphicon-check"
    ).should("be.visible");
    cy.get('[data-showid="endorsement_uploaded_NA"]').should(
      "contain",
      "Please provide an explanation."
    );
    cy.get('[data-showid="endorsement_uploaded_NA"] > .textAnswer').should(
      "contain",
      "My provided explanation as to why a written endorsement been uploaded as an attachment"
    );

    //Create a stipulation
    cy.get(
      ":nth-child(1) > .questionNumber > .addProtocolEventStipButton"
    ).click();
    cy.wait(3000);

    cy.get(".cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My test stip for question 1");
    });

    cy.contains("Save").click().click();
    cy.get(".editStipulation > p").should("be.visible");
    //cy.get("#navStipulations").should("contain", "Stipulations (1)");

    //cy.reload()
    cy.get("#navStipulations").click();
    cy.get("#formBody").should("be.visible");
    //cy.get('[style="display: flex;"] > :nth-child(2) > :nth-child(1)').should(
     // "contain",
     // "Participant Study Identification Code"
    //);
    cy.get('#questionIdparticipant_study_id > :nth-child(2) > .textAnswer').should(
      "contain",
      "Participant Study Identification Code"
    );
    cy.contains("Stipulation: by Justin Feussner on").should("be.visible");
    cy.get(".editStipulation > p").should(
      "contain",
      "My test stip for question 1"
    );

    //Record Review result
    cy.get("#navNextStep").click();
    cy.get("#selectResult").should("be.visible");
    cy.get("#reviewResult1").should("contain", "Minor Stipulations");
    cy.get("#reviewResult2").should("have.class", "stipsNotAllowed"); //Withdrawn
    cy.get("#reviewResult3").should("have.class", "stipsNotAllowed"); //Acknowledged
    cy.get("#reviewResult1").click();
    //cy.get('.swimlane2 > div').should('contain', 'Result: Minor Stipulations')

    //Notes/Findings
    cy.get('#navReviewNotes').click()

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

  it("Protocol Exceptions - Waiting PI Response", () => {
    cy.visit(Cypress.config().stageTrunkBaseUrl);

    //cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm?event=home.protocolException&id=383860');
    cy.get("input#username.long")
      .type("mchopra")
      .should("have.value", ownerOnyen);
    cy.get("input#password.long").type("test{Enter}");
    cy.viewport(1300, 750);

    cy.get("#dashboardmenu5 > :nth-child(10) > a").click();
    cy.get('input[placeholder="Title"]').type(
      "Retrospective review of patients switched from plasma exchange therapy to efgartigimod treatment"
    );
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
    cy.get("b.copy").should("contain", "Exception created");
    cy.get('[style="padding-bottom:10px;"] > div.copy').should("be.visible");
    cy.get(".ui-icon").click();

    //PROTOCOL EXCEPTION REQUEST HEADER - STUDY DATA
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
      "Retrospective review of patients switched from plasma exchange therapy to efgartigimod treatment"
    );

    //PROTOCOL EXCPETION FORM
    cy.get("#formBody > .pageHeaderTitle").should(
      "contain",
      "Protocol Exception"
    );
    cy.get(".introText").should("be.visible");
    cy.get(".introText > :nth-child(1)").should(
      "contain",
      "This protocol exception request applies to a single individual."
    );
    cy.get(".introText > :nth-child(2)").should(
      "contain",
      "Approval is required prior to implementing the request."
    );

    //ADDITIONAL INFORMATION
    cy.get("#additionalInfo > .pageHeaderTitle").should("be.visible");
    cy.get("#additionalInfo").should("be.visible");
    cy.contains("1 stipulations").click();

    //RESPOND TO STIPULATIONS
    cy.get(
      "#questionIdparticipant_study_id > :nth-child(2) > :nth-child(1)"
    ).should("contain", "Participant Study Identification Code (Study ID)");
    cy.get(
      "#questionIdparticipant_study_id > :nth-child(2) > .textAnswer"
    ).should("contain", "My Participant Study Identification Code");
    cy.get(".stipHeader").should("contain", "Stipulation: by IRB Admin on");
    cy.get(".editStipulation > p").should(
      "contain",
      "My test stip for question 1"
    );
    cy.get(".stipButtons > .stipEditButton").click();

    cy.wait(1000);

    //cy.get('iframe').then(function($iframe) {
    cy.get(".cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type(
        "My test Protocol Exception Response for question 1"
      );
    });

    //cy.wait(3000)
    cy.get(".save").click(); //Not sure why this fails
    cy.wait(1000);
    cy.get(".save").click(); //Clicking it again work? What?

    cy.get("#navStipulations > :nth-child(2) > .small").should(
      "contain",
      "Responded: 1/1"
    );

    cy.get("#navResubmit > :nth-child(2)")
      .should("contain", "Resubmit")
      .click();
  });

  it("Protocol Exceptions - Verify Resubmitted Review popup", () => {
    cy.visit(Cypress.config().stageTrunkBaseUrl);
    //cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm?event=admin.reviewWindow.PIResponses&masterId=383860&previousReviewId=285764&reviewId=531421&appId=416692');
    //cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm?event=admin.reviewWindow&reviewId=531421&appId=416692');

    cy.get("input#username.long")
      .type(IRBAnalyst)
      .should("have.value", IRBAnalyst);
    //.type('cjfennim').should('have.value', 'cjfennim')
    cy.get("input#password.long").type("test{Enter}");
    cy.viewport(1200, 700);

    cy.get(
      'td[data-title="PI Responses"] > .bucket > :nth-child(2) > table > tbody > :nth-child(2) > [data-column="NFB"] > a'
    ).click();
    cy.viewport(1200, 700);
    cy.wait(1000);
    cy.get("#bucketDataTable_filter > label > input").type(
      "Retrospective review of patients switched from plasma exchange therapy to efgartigimod treatment"
    );
    cy.get("#bucketDataTable > tbody > .odd > :nth-child(1) > a").click();

    // Get window object
    cy.window().then((win) => {
      // Replace window.open(url, target)-function with our own arrow function
      cy.stub(win, "open", (url) => {
        // change window location to be same as the popup url
        win.location.href = Cypress.config().stageTrunkBaseUrl + url;
      }).as("popup"); // alias it with popup, so we can refer it with @popup
    });

    // Click button which triggers javascript's window.open() call
    cy.contains("Application").should("be.visible").click();

    // Make sure that it triggered window.open function call
    cy.get("@popup").should("be.called");

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
      "(Protocol Exception)"
    );
    cy.get(":nth-child(1) > strong").should("contain", "PI:");
    cy.get("#irbInfo > :nth-child(3) > :nth-child(1)").should(
      "contain",
      "PI: Traub, Rebecca"
    );
    cy.get(":nth-child(2) > strong").should("contain", "Analyst:");
    cy.get("#analystName").should("contain", "Feussner, Justin");
    cy.get(":nth-child(3) > strong").should("contain", "Admin Dept:");
    cy.get("#irbInfo > :nth-child(3) > :nth-child(3)").should(
      "contain",
      "Admin Dept: Neurology-Neuromuscular"
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

    cy.get("#closeNavContainer").click();

    //Protocol Exception
    cy.get("#applicationForm").should("be.visible");

    //Question 1
    cy.get(
      "#questionList > :nth-child(1) > :nth-child(2) > :nth-child(1)"
    ).should(
      "contain",
      "Participant Study Identification Code (Study ID) – Do not provide any direct subject identifiers. Instead, use a code identifier such as the one used in the study records."
    );
    cy.get(":nth-child(1) > :nth-child(2) > .textAnswer").should(
      "contain",
      "My Participant Study Identification Code"
    );
    cy.get(
      ":nth-child(1) > .questionNumber > .addProtocolEventStipButton"
    ).should("be.visible");

    //Question 2
    cy.get(
      "#questionList > :nth-child(2) > :nth-child(2) > :nth-child(1)"
    ).should("contain", "Provide a description and rationale for the request.");
    cy.get(":nth-child(2) > :nth-child(2) > .textAnswer").should(
      "contain",
      "My description and rationale for the request."
    );
    cy.get(
      ":nth-child(2) > .questionNumber > .addProtocolEventStipButton"
    ).should("be.visible");

    //Question 3
    cy.get("#questionList > :nth-child(3) > :nth-child(2)").should(
      "contain",
      "Does the protocol exception pose new risks not currently listed in the consent form, increase the likelihood or severity of experiencing known risks, or otherwise affect the safety of the participant?"
    );
    cy.get(
      ":nth-child(3) > :nth-child(2) > :nth-child(1) > .glyphicon-check"
    ).should("be.visible");
    cy.get(
      ":nth-child(3) > :nth-child(2) > :nth-child(1) > .glyphicon-unchecked"
    ).should("be.visible");
    cy.get(":nth-child(3) > :nth-child(2) > .textAnswer").should(
      "contain",
      "My justification regarding the response."
    );
    cy.get(
      ":nth-child(3) > .questionNumber > .addProtocolEventStipButton"
    ).should("be.visible");

    //Question 4
    cy.get("#questionList > :nth-child(4) > :nth-child(2)").should(
      "contain",
      "Does the protocol exception require a different informed consent form or process than the one currently approved by the IRB?"
    );
    cy.get(
      ":nth-child(4) > :nth-child(2) > :nth-child(1) > .glyphicon-check"
    ).should("be.visible");
    cy.get(
      ":nth-child(4) > :nth-child(2) > :nth-child(1) > .glyphicon-unchecked"
    ).should("be.visible");
    cy.get(":nth-child(4) > :nth-child(2) > :nth-child(3)").should(
      "contain",
      "Explain the consenting process you will use in relation to this protocol exception and if applicable, attach any proposed addendum to the informed consent that will be used."
    );
    cy.get(
      ":nth-child(4) > :nth-child(2) > :nth-child(3) > .textAnswer"
    ).should(
      "contain",
      "My explanation of the consenting process I will use in relation to this protocol exception and if applicable."
    );
    cy.get(
      ":nth-child(4) > .questionNumber > .addProtocolEventStipButton"
    ).should("be.visible");

    //Question 5
    cy.get("#questionList > :nth-child(5) > :nth-child(2)").should(
      "contain",
      "Does the protocol exception affect the integrity of the study data?"
    );
    cy.get(
      ":nth-child(5) > :nth-child(2) > :nth-child(1) > .glyphicon-check"
    ).should("be.visible");
    cy.get(
      ":nth-child(5) > :nth-child(2) > :nth-child(1) > .glyphicon-unchecked"
    ).should("be.visible");
    cy.get(":nth-child(5) > :nth-child(2) > .textAnswer").should(
      "contain",
      "My justification regarding your response."
    );
    cy.get(
      ":nth-child(5) > .questionNumber > .addProtocolEventStipButton"
    ).should("be.visible");

    //Question 6
    cy.get(":nth-child(6) > :nth-child(2)").should(
      "contain",
      "Will data collected as a result of the exception be analyzed in a different manner from other collected data?"
    );
    cy.get(
      ":nth-child(6) > :nth-child(2) > :nth-child(1) > .glyphicon-check"
    ).should("be.visible");
    cy.get(
      ":nth-child(6) > :nth-child(2) > :nth-child(1) > .glyphicon-unchecked"
    ).should("be.visible");
    cy.get('[data-showid="data_analyzed_different_yes"]').should(
      "contain",
      "Explain how it will be analyzed differently."
    );
    cy.get('[data-showid="data_analyzed_different_yes"] > .textAnswer').should(
      "contain",
      "My explanation of how it will be analyzed differently."
    );
    cy.get(
      ":nth-child(6) > .questionNumber > .addProtocolEventStipButton"
    ).should("be.visible");

    //Question 7
    cy.get("#questionList > :nth-child(7) > :nth-child(2)").should(
      "contain",
      "Have you previously requested this exception for this same reason?"
    );
    cy.get(
      ":nth-child(7) > :nth-child(2) > :nth-child(1) > .glyphicon-check"
    ).should("be.visible");
    cy.get(
      ":nth-child(7) > :nth-child(2) > :nth-child(1) > .glyphicon-unchecked"
    ).should("be.visible");
    cy.get('[data-showid="previously_requested_yes"]').should(
      "contain",
      "My explanation of if a previous exception was requested for the same reason."
    );
    cy.get(
      ":nth-child(7) > .questionNumber > .addProtocolEventStipButton"
    ).should("be.visible");

    //Question 8
    cy.get(":nth-child(8) > :nth-child(2)").should(
      "contain",
      "Is this study externally sponsored?"
    );
    cy.get(
      ":nth-child(8) > :nth-child(2) > :nth-child(1) > .glyphicon-unchecked"
    ).should("be.visible");
    cy.get(
      ":nth-child(8) > :nth-child(2) > :nth-child(1) > .glyphicon-check"
    ).should("be.visible");

    //Question 9
    cy.get("#questionList > :nth-child(9) > :nth-child(2)").should(
      "contain",
      "For participants not meeting inclusion/exclusion criteria, a physician uninvolved in the care of the participant must provide a written endorsement for the inclusion of the ineligible person due to clinical alternatives being limited to less favorable options."
    );
    cy.get(
      ":nth-child(9) > :nth-child(2) > :nth-child(3) > .glyphicon-unchecked"
    ).should("be.visible");
    cy.get(
      ":nth-child(9) > :nth-child(2) > :nth-child(3) > .glyphicon-check"
    ).should("be.visible");
    cy.get('[data-showid="endorsement_uploaded_NA"]').should(
      "contain",
      "Please provide an explanation."
    );
    cy.get('[data-showid="endorsement_uploaded_NA"] > .textAnswer').should(
      "contain",
      "My provided explanation as to why a written endorsement been uploaded as an attachment"
    );

    // CAPTURE URL OF REVIEW WINDOW
    cy.url().as("reviewWindow");

    //PI RESPONSES
    // Get window object
    cy.window().then((win) => {
      // Replace window.open(url, target)-function with our own arrow function
      cy.stub(win, "open", (url) => {
        // change window location to be same as the popup url
        win.location.href = Cypress.config().stageTrunkBaseUrl + url;
      }).as("piResponses"); // alias it with popup, so we can refer it with @popup
    });

    // Click button which triggers javascript's window.open() call
    cy.get("#navPIResponses").click();
    cy.viewport(1200, 800);
    // Make sure that it triggered window.open function call
    cy.get("@piResponses").should("be.called");

    cy.get("#irbInfo > :nth-child(1) > span").should("contain", "PI Responses");
    cy.get("#irbInfo > :nth-child(1) > div").should(
      "contain",
      "PI: Traub, Rebecca"
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
      "(Protocol Exception)"
    );

    cy.get("#PIResponseHeader").should("be.visible");
    //ANSWER
    cy.get(".answerForStip > :nth-child(1)").should("contain", "Answer");
    cy.get(".changeButton").should("be.visible");
    cy.get(
      ".answerForStip > :nth-child(2) > :nth-child(2) > :nth-child(1)"
    ).should(
      "contain",
      "Participant Study Identification Code (Study ID) – Do not provide any direct subject identifiers. Instead, use a code identifier such as the one used in the study records."
    );
    cy.get(
      ".answerForStip > :nth-child(2) > :nth-child(2) > .textAnswer"
    ).should("contain", "My Participant Study Identification Code");
    //STIPLUATION/RESPONSE #1
    cy.get("#questionPIResponseparticipant_study_id > :nth-child(1)").should(
      "contain",
      "Stipulation/Response #1"
    );
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
      "My test Protocol Exception Response for question 1"
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

    //Record Review result
    cy.get("#navNextStep").click();
    cy.get("#selectResult").should("be.visible");
    cy.get("#reviewResult1").should("contain", "Minor Stipulations"); //Minor Stipulations
    cy.get("#reviewResult2").should("contain", "Withdrawn"); //Withdrawn
    cy.get("#reviewResult3").should("contain", "Acknowledged").click(); //Acknowledged
    cy.get(".swimlane2 > div").should("contain", "Result: Acknowledged");

    //Notes/Findings
    cy.get('#navReviewNotes').click()

    //Draft Letter
    cy.get("#navLetter").should("contain", "Letter").click();
    cy.get(".ui-dialog").should("be.visible");
    cy.get("#letterTypeId")
      .should("contain", "Select Template Type...")
      .and("contain", "Protocol Exception - Acknowledged")
      .and("contain", "Protocol Continuation - Approval")
      .select("Protocol Exception - Acknowledged");
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
