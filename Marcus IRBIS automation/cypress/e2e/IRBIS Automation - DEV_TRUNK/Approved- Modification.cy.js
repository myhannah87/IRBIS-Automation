describe("Approval - Modification", () => {
  const submissionOwner = "graceal7";
  const PI = "yemi";
  const IRBAnalyst = "jfuse";
  const IRBNumber = "24-0853";

  it("Create Modification", () => {
    cy.visit(Cypress.config().devTrunkBaseUrl);
    cy.get("input#username.long")
      .type(submissionOwner)
      .should("have.value", submissionOwner);
    cy.get("input#password.long").type("test{Enter}");

    cy.viewport(1300, 750);

    cy.get("#dashboardmenu4 > :nth-child(4) > a")
      .should("contain", "Modification")
      .click();
    cy.get('input[placeholder="IRB Number"]').type(IRBNumber);
    cy.get(":nth-child(1) > .sorting_1 > .oneClickOnly").click();

    cy.get("#pmSelector > .updateCardText").click();
    cy.get(".hdWizard").should("contain", "Create a Modification");

    cy.get("#wizard17 > .wizardType").should(
      "contain",
      "Modify Study and Personnel"
    );
    cy.get("#wizard15 > .wizardType").should(
      "contain",
      "Personnel Only Modification"
    );
    cy.get("#wizard16 > .wizardType").should(
      "contain",
      "Study Only Modification"
    );

    cy.get("#wizard16 > .btn-primary").click();

    //Navigate to Post Approval Submissions
    cy.get(
      "#CollapsiblePanel2 > .CollapsiblePanelTab > .searchresults"
    ).click();
    cy.get(
      '#CollapsiblePanel2 > .CollapsiblePanelContent > :nth-child(1) > [style="float:left; width:200px; white-space:;"] > .copy'
    ).click();

    //MODIFICATION INFORMATION
    cy.wait(1000);
    cy.get('[qid="h_1639"] > [width="99%"]').should(
      "contain",
      "To modify an approved study, edit the individual answers that make up the application."
    );
    //question 1
    cy.get('[qid="h_555"] > [width="99%"]').should(
      "contain",
      "Provide a brief non-technical summary (50-100 words) of any changes you will be making to the study."
    );

    cy.get("#cke_1_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type(
        "My brief non-technical summary of any changes you will be making to the study"
      );

      //question 2
      cy.get('[qid="h_1854"] > [width="99%"]').should(
        "contain",
        "Is this study in Data Analysis only (i.e. enrollment, intervention and follow-up are complete)?"
      );
      //Yes
      cy.get('[inputvalue="1"] > #q_99_1854').click();
      cy.get('[qid="h_2049"] > [width="99%"]').should("not.be.visible");
      cy.get("#q_99_2049").should("not.be.visible");
      cy.get('[qid="h_2050"] > [width="99%"]').should("not.be.visible");
      cy.get('[qid="q_2050"] > td.copy').should("not.be.visible");
      //No
      cy.get('[inputvalue="0"] > #q_99_1854').click();
      cy.get('[qid="h_2049"] > [width="99%"]').should(
        "contain",
        "Total number of subjects enrolled to date:"
      );
      cy.get("#q_99_2049").type("100");
      cy.get('[qid="h_2050"] > [width="99%"]').should(
        "contain",
        "Is this study currently open to the enrollment of new subjects?"
      );
      cy.get('[inputvalue="1"] > #q_99_2050').click();
      cy.get('[qid="h_2051"] > [width="99%"]').should(
        "contain",
        "Total number of subjects actively participating"
      );
      cy.get("#q_99_2051").type("200");

      //question 3
      cy.get('[qid="h_1935"] > [width="99%"]').should(
        "contain",
        "Do you have plans to re-consent subjects as a result of this modification?"
      );
      //No
      cy.get('[inputvalue="0"] > #q_99_1935').click();
      cy.get('#hd_1935\\|\\|0 > [width="99%"]').should(
        "contain",
        "Please provide justification below:"
      );
      cy.get("#q_99_2324").type(
        "My justification for palns to re-consent subjects"
      );
      //Yes
      cy.get('[inputvalue="1"] > #q_99_1935').click();
      cy.get("#doc_1935_424").should("be.visible");
      //question 3a
      cy.get('[qid="h_2163"] > [width="99%"]').should(
        "contain",
        "3a. Are you planning to re-consent currently enrolled subjects as a result of this modification?"
      );
      cy.get('[inputvalue="1"] > #q_99_2163').click();
      cy.get('[inputvalue="0"] > #q_99_2163').click();
      cy.get('#hd_2163\\|\\|0 > [width="99%"]').should(
        "contain",
        "Please provide justification below:"
      );
      cy.get("#q_99_2325").type("My justification for 3a");
      //question 3b - yes
      cy.get('[qid="h_2164"] > [width="99%"]').should(
        "contain",
        "3b. Are you planning to re-consent previously enrolled subjects as a result of this modification?"
      );
      cy.get('[inputvalue="1"] > #q_99_2164').click();

      //question 3b - no
      cy.get('[inputvalue="0"] > #q_99_2164').click();
      cy.get('#hd_2164\\|\\|0 > [width="99%"]').should(
        "contain",
        "Please provide justification below:"
      );
      cy.get("#q_99_2326").type("My justification for 3b");

      cy.get('[qid="h_2052"] > [width="99%"]').should(
        "contain",
        "Please describe your plans for re-consenting subjects"
      );
      cy.get("mark").should(
        "contain",
        "NOTE: If you are updating more than one consent document, please describe the reconsent plan for each form."
      );
      cy.get("#q_99_2052").type("My plan for re-consenting subjects for 3b.");

      //question 4 - yes
      cy.get('[qid="h_1152"] > [width="99%"]').should(
        "contain",
        "Is this modification being submitted in response to Promptly Reportable Information?"
      );
      cy.get('[inputvalue="1"] > #q_99_1152').click();
      cy.get('[qid="h_1851"] > [width="99%"]').should(
        "contain",
        "Select the Promptly Reportable Information report(s) that prompted this modification."
      );
      cy.get('[qid="q_1851"] > .copy').should(
        "contain",
        "There are no available answers for this question."
      );
      cy.get('[qid="h_1153"] > [width="99%"]').should(
        "contain",
        "If yes, explain, including whether these events"
      );
      cy.get("#cke_2_contents").should("be.visible");
      //no
      cy.get('[inputvalue="0"] > #q_99_1152').click();
      cy.get('[qid="h_1851"] > [width="99%"]').should("not.be.visible");
      cy.get('[qid="q_1851"] > .copy').should("not.be.visible");
      cy.get('[qid="h_1153"] > [width="99%"]').should("not.be.visible");
      cy.get("#cke_2_contents").should("not.be.visible");

      //question 5 - yes
      cy.get('[qid="h_1970"] > [width="99%"]').should(
        "contain",
        "Have the risks as described in A.6., consent form, or any other study document changed?"
      );
      cy.get('[inputvalue="1"] > #q_99_1970').click();
      cy.get('#hd_1970\\|\\|1 > [width="99%"]').should(
        "contain",
        "If yes, list any changes in potential risks"
      );
      cy.get("#cke_3_contents").should("be.visible");
      //no
      cy.get('[inputvalue="0"] > #q_99_1970').click();
      cy.get('#hd_1970\\|\\|1 > [width="99%"]').should("not.be.visible");
      cy.get("#cke_3_contents").should("not.be.visible");

      cy.get('[name="submit1"]').click();

      //CONTINUING WITH MODIFICATION
      cy.get("p").should(
        "contain",
        'Click the "save and continue" button to access your existing application.'
      );
      cy.get('[name="submit1"]').click();

      //Go to consent forms to satisfy requirement
      cy.get(
        "#CollapsiblePanel8 > .CollapsiblePanelTab > .searchresults"
      ).click();
      cy.get(
        '#CollapsiblePanel8 > .CollapsiblePanelContent > [style="padding: 3px;"] > [style="float:left; width:200px; white-space:;"] > .copy'
      ).click();

      //Submit
      cy.get(".buttonEformYellow").click();
      cy.wait(8000);

      cy.get(
        "#modalPopup > .tablemainsub-allborders > tbody > .odd > .searchresults"
      ).should("contain", "Application:");
      cy.get("tbody > :nth-child(2) > .searchresults").should(
        "contain",
        "Principal Investigator:"
      );
      cy.get(
        "#modalPopup > .tablemainsub-allborders > tbody > .odd > .copy"
      ).should(
        "contain",
        "A Novel Surgical Irrigation Solution in Post-Mastectomy Reconstruction"
      );
      cy.get(
        "#modalPopup > .tablemainsub-allborders > tbody > :nth-child(2) > .copy"
      ).should("contain", "Yemi Ogunleye");

      cy.get(".agreeToTerms").should(
        "contain",
        "By checking this box, you acknowledge that you understand the potential delays the above warnings may cause."
      );
      cy.get(".iAgreeCheckbox").click();
      cy.get(".proceedForm > :nth-child(1)").should(
        "contain",
        "At this point you are ready to proceed to submission."
      );
      //cy.get('[style="color: red"]').should('contain', 'DO NOT SUBMIT until you (and your faculty advisor, co-investigators and other personnel, where applicable) are done editing.')
      cy.get(".buttons > .buttonEformYellow").click();
      cy.wait(3000);
      cy.get(
        '[style="padding-bottom:10px;"] > table > tbody > tr > .copybold'
      ).should("contain", "Application Status");
    });
  });

  //APPROVED MODIFICATION - ROUTING
  it("Approved Mod - Being Routed", () => {
    cy.visit(Cypress.config().devTrunkBaseUrl);
    cy.get("input#username.long").type(PI).should("have.value", PI);
    cy.get("input#password.long").type("test{Enter}");

    cy.viewport(1300, 1000);

    cy.get("#dashboardmenu8 > :nth-child(2) > a").click();
    //cy.get('.searchColumn ui-state-default')
    cy.get('input[placeholder="IRB Number"]').type(IRBNumber);
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
    //cy.get(":nth-child(14) > tbody > :nth-child(2) > :nth-child(1)").should(
    //"contain",
    //"Surgery - Plastic Reconstructive "
    //);
    cy.get(":nth-child(14) > tbody > :nth-child(2) > :nth-child(2)").should(
      "contain",
      "Level III"
    );
    cy.get(":nth-child(14) > tbody > :nth-child(2) > .copysmall").should(
      "contain",
      //"Approval  sent on"
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
    cy.wait(3000);
    cy.get(".buttonEformYellow").click();

    cy.wait(5000);
    cy.get('[cellspacing="2"] > tbody > :nth-child(1) > :nth-child(2)').should(
      "contain",
      "Routing Complete"
    );
  });

  //Approved - Modification Accept for Review
  it("Accept Approved - Modification For Review", () => {
    cy.visit(Cypress.config().devTrunkBaseUrl);
    cy.get("input#username.long")
      .type("mhannah1")
      .should("have.value", "mhannah1");
    cy.get("input#password.long").type("test{Enter}");

    cy.get(
      'td[data-title="Submitted To IRB"] > .bucket > :nth-child(2) > table > tbody > :nth-child(2) > .countTotal > a'
    ).click();
    cy.wait(1000);
    cy.get("#bucketDataTable_filter > label > input").type(IRBNumber);
    cy.get(".confirmAcceptByIRB").click();

    cy.wait(5000);
  });

  it("Verify Study History Screen", () => {
    cy.visit(Cypress.config().devTrunkBaseUrl);
    cy.get("input#username.long")
      .type(IRBAnalyst)
      .should("have.value", IRBAnalyst); //Log in as Celeste (IRB Analyst)
    cy.get("input#password.long").type("test{Enter}");

    cy.viewport(1400, 750);

    cy.get(
      'td[data-title="Accepted By IRB"] > .bucket > :nth-child(2) > table > tbody > :nth-child(2) > [data-column="TBD"] > a'
    ).click();
    cy.wait(1000);
    cy.get("#bucketDataTable_filter > label > input").type(IRBNumber);
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
    cy.get(".studyWatchButton").should("be.visible");
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
    ).should("contain", "Approved");
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
      "A Novel Surgical Irrigation Solution in Post-Mastectomy Reconstruction:"
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

    //cy.get('.watchNotes').should("be.visible").click()
    cy.get("#link_action").should("be.visible");
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
  });

  it("Verify Application/Review popup", () => {
    cy.visit(Cypress.config().devTrunkBaseUrl);    
    cy.get("input#username.long")
      .type(IRBAnalyst)
      .should("have.value", IRBAnalyst);
    cy.get("input#password.long").type("test{Enter}");

    cy.viewport(1400, 750);

    cy.get(
      'td[data-title="Accepted By IRB"] > .bucket > :nth-child(2) > table > tbody > :nth-child(2) > [data-column="TBD"] > a'
    ).click();
    cy.wait(1000);
    cy.get("#bucketDataTable_filter > label > input").type(IRBNumber);
    cy.get("#bucketDataTable > tbody > .odd > :nth-child(1) > a").click();

    //Assign Me -> Justin
    //cy.get(':nth-child(2) > tbody > tr > :nth-child(2) > .button').click();
    cy.get(".appSwimLanes").should("be.visible");
    // Get window object
    cy.window().then((win) => {
      // Replace window.open(url, target)-function with our own arrow function
      cy.stub(win, "open", (url) => {
        // change window location to be same as the popup url
        win.location.href = Cypress.config().devTrunkBaseUrl + url; 
      }).as("application"); // alias it with popup, so we can refer it with @popup
    
      // Click button which triggers javascript's window.open() call
      cy.contains("Application").click();

      //Create a Review
    cy.get("#navNextStep").click();
    cy.get("#hasReviewTypes").should("be.visible");
    cy.get("#reviewTypeId")
      .should("contain", "Select Review Type...")
      .and("contain", "Not Full Board (Expedited, Exempt, NHSR, other)")
      .and("contain", "Full Board (Meeting)")
      .select("Not Full Board (Expedited, Exempt, NHSR, other)");
    cy.get("#btnCreateReview").click();
    cy.wait(5000);

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
    cy.wait(5000);
    cy.get('#reviewConditionsIcon').should("have.class", "stopIcon fail");
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
    cy.get("#stopListManagementPlan").scrollIntoView()
    .should("be.visible");
    cy.get("#stopListHSP").scrollIntoView()
    .should("be.visible");
    cy.get("#stopListGCP").scrollIntoView()
    .should("be.visible");

    /*
    //Select an Analyst
    cy.get("#navNextStep").click();
    cy.get("#analystSelector").should("be.visible");
    cy.get(".managerTextbox").type("justin");
    cy.get('[name="Justin Feussner"]').click();
    */

    //Checklist Requirement
    cy.get('#navChecklist').click();
    cy.get('#checklistQuestionBoxQ01 > .question > [data-answertext="Criterion Met"]').scrollIntoView().click();
    cy.wait(1000)
    cy.get('#checklistQuestionBoxQ02 > .question > [data-answertext="Criterion Met"]').scrollIntoView().click();
    cy.wait(1000)
    cy.get('#checklistQuestionBoxQ03 > .question > [data-answertext="Criterion Met"]').scrollIntoView().click();
    cy.wait(1000)
    cy.get('#checklistQuestionBoxQ04 > .question > [data-answertext="Criterion Met"]').scrollIntoView().click();
    cy.wait(1000)
    cy.get('#checklistQuestionBoxQ05 > .question > [data-answertext="Criterion Met"]').scrollIntoView().click();
    cy.wait(1000)
    cy.get('#checklistQuestionBoxQ06 > .question > [data-answertext="Criterion Met"]').scrollIntoView().click();
    cy.wait(1000)
    cy.get('#checklistQuestionBoxQ07 > .question > [data-answertext="Criterion Met"]').scrollIntoView().click();
    cy.wait(1000)
    cy.get('#checklistQuestionBoxQ07A> .question > [data-answertext="Criterion Met"]').scrollIntoView().click();
    cy.wait(1000)
    cy.get('#confirmAll').scrollIntoView().click();
    cy.wait(1000)
    cy.get('#checkBoxPre_111CriteriaMet').scrollIntoView().click();
    
    cy.wait(1000)

    /*
    //Checklist not required
    cy.get('#checkBoxPre_NotRequired').click();
    cy.get('#justifyText').type('Checklist is not applicable');
    cy.get('[data-buttontype="Save"]').click();
    
    cy.wait(2000);
    */

    /*
    //Add a stipulation
    cy.get("#navApplication").click();
    cy.get("#addStipForQuestion554").click();
    cy.wait(1000);
    cy.get(".cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My test stip");
      cy.get("#questionId554 > #stip0 > .stipButtons > .save").click();
      cy.get(".editStipulation > p").should("be.visible");

      cy.reload();

      cy.get("#navReviewResult").click();

      //Disabled review results:
      cy.get("#reviewResult1").should("have.class", "stipsNotAllowed"); //Exempted
      cy.get("#reviewResult3").should("have.class", "stipsNotAllowed"); //Suspended
      cy.get("#reviewResult4").should("have.class", "stipsNotAllowed"); //Withdrawn
      cy.get("#reviewResult5").should("have.class", "stipsNotAllowed"); //NHSR
      cy.get("#reviewResult6").should("have.class", "stipsNotAllowed"); //Rely on External IRB
      cy.get("#reviewResult7").should("have.class", "stipsNotAllowed"); // Rely on NCI-CIRB
      cy.get("#reviewResult8").should("have.class", "stipsNotAllowed"); // Terminated

      */

      cy.get("#navReviewResult").click();

      //Select Approved
      cy.get("#reviewResult1").click();
      cy.wait(3000);

      //Findings
      cy.get("#navReviewNotes").click();
      cy.wait(3000);

      //Study Specific Findings
      //cy.get("#reviewNotesBox > :nth-child(2)").should("be.visible");
      cy.get("#cke_studyFindingsCKE").should("be.visible");

      //Submission Specific Findings
      //cy.get("#reviewNotesBox > :nth-child(3)").should("be.visible");
      cy.get("#cke_submissionFindingsCKE").should("be.visible");
      

      //Draft Letter
      cy.get("#navNextStep").click();
      cy.get("#letterTypeId")
        .should("contain", "Select Template Type...")
        .and("contain", "Expedited Approval(Modification)_CR")
        .and("contain", "PRI - Expedited Approval (PRI Modification ONLY)")
        .select("Expedited Approval(Modification)_CR");
      cy.get("#btnDraftLetter").click();

     //Verify and Finalize letter
      cy.get("#sent_to_email").should("be.visible");
      cy.get("#sent_to_email2").should("be.visible");
      cy.get(".cke_wysiwyg_frame").should("be.visible");
      cy.get(".letterSubHeader").should("contain", "Expedited Approval(Modification)_CR");
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
});

  /*
  it("Waiting PI Repsonse", () => {
    cy.visit(
      "https://orisdev.research.unc.edu/irb_maint/index.cfm?event=general.logout"
    );
    cy.get("input#username.long")
      .type("khwhite")
      .should("have.value", "khwhite");
    cy.get("input#password.long").type("test{Enter}");
    //cy.get('#nav > :nth-child(2) > a').click()
    cy.get("#dashboardmenu5 > :nth-child(10) > a").click();
    cy.get('input[placeholder="IRB Number"]').type("22-2442");
    cy.get(".odd > :nth-child(2) > a").click();
    cy.contains(" View Stipulations").should("be.visible").click();
    //RESPOND TO STIPULATIONS
    cy.get('input[name="btnRespond"]').should("be.visible").click();
    cy.get("#cke_1_contents > .cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My Response to Stipulations");
      cy.get("#btnSaveResponse").click();

      cy.get("#BTNRESUBMIT").click();
      cy.wait(2000);
      cy.get(".iAgreeCheckbox").click();
      cy.get(".buttonEformYellow").click();
    });
  });

  it("Revised-Resubmitted to IRB", () => {
    cy.visit(
      "https://orisdev.research.unc.edu/irb_maint/index.cfm?event=general.logout"
    );
    cy.get("input#username.long")
      .type("cdcantre")
      .should("have.value", "cdcantre");
    cy.get("input#password.long").type("test{Enter}");

    cy.get(
      'td[data-title="PI Responses"] > .bucket > :nth-child(2) > table > tbody > :nth-child(2) > [data-column="NFB"] > a'
    ).click();
    cy.wait(1000);
    cy.get("#bucketDataTable_filter > label > input").type("22-2442");
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
    cy.contains("Application").click();
    // Make sure that it triggered window.open function call
    cy.get("@popup").should("be.called");

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
        win.location.href = Cypress.config().baseUrl + url;
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
    //cy.get('#saveResponseConfirmations').click()

    cy.wait(3000);

    //NAVIGATE BACK TO REVIEW WINDOW
    cy.get("@reviewWindow").then((url) => {
      cy.visit(url);
    });

    //Record Review Result (minor stip w/o stip)
    cy.get("#navReviewResult").click();
    cy.get("#reviewResult2").click();
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

            cy.wait(5000); //wait for autosave to finish

            //Draft Letter
            cy.get("#navNextStep").click();
            cy.get("#letterTypeId").select("Minor Stips - Expedited");
            cy.get("#btnDraftLetter").click();
            cy.get("#btnFinalizeLetterModal").click();
            cy.get(".body > div").and(
              "contain",
              "You have no stipulations in place."
            );
            cy.get(".closeFinal").click();

            cy.get("#btnDelete").click();
            cy.wait(3000);
            //cy.get(':nth-child(3) > [onclick="modalClose();"]').click() //close the draft letter modal

            //Record Review Result -> Select EXEMPT
            cy.get("#navReviewResult").click();
            cy.get("#reviewResult1").click();
            //Risk of Research
            cy.get("#riskOfResearchContainer > :nth-child(1)").and(
              "contain",
              "Risk of Research"
            );
            cy.get("#riskOfResearch").should("be.visible");
            cy.get("#reminderDateContainer").should("be.visible");

            cy.wait(3000);

            //Verify Categories
            cy.get("#reviewResultsCategories > span").should("be.visible");
            cy.get("#reviewResultCategories").should("be.visible");
            cy.get("#reviewResultCategory13").should(
              "contain",
              "1.Educational setting"
            );
            cy.get("#reviewResultCategory14").should(
              "contain",
              "2.Survey, interview, public observation"
            );
            cy.get("#reviewResultCategory15").should(
              "contain",
              "3. Benign Behavioral intervention"
            );
            cy.get("#reviewResultCategory16").should(
              "contain",
              "4. Secondary data/specimens"
            );
            cy.get("#reviewResultCategory17").should(
              "contain",
              "5.Federal demonstration projects"
            );
            cy.get("#reviewResultCategory18").should(
              "contain",
              "6.Taste or food preference"
            );

            //Review Notes
            cy.get("#navReviewNotes").click();
            cy.wait(3000);

            //Study Specific Findings
            cy.get("#reviewNotesBox > :nth-child(2)").should("be.visible");

            //Submission Specific Findings
            cy.get("#reviewNotesBox > :nth-child(3)").should("be.visible");

            cy.get("#navNextStep").click();

            //Test Exempt category stop
            cy.get("#modalPopup").should(
              "contain",
              "Please select a review category before drafting letter."
            );
            cy.get(".button").click();
            cy.get("#navReviewResult").click();
            cy.get("#reviewResultCategory12").click();

            cy.get("#navNextStep").click();
            cy.wait(1000);

            //Draft Exempt letter
            cy.get("#btnDraftLetter").click();
            cy.wait(1000);

            // cy.get('#riskOfResearch').should("be.visible")
            // .should('contain', 'Greater than Minimal')
            // .and('contain', 'Minimal').click()

            //Override COIs
            cy.get(".stopListCOI > .letterStopData > .overrideCOI").click();
            cy.get(".overrideCOIReason > .form-control").type(
              "My automated response"
            );
            cy.get("#saveOverride").click();

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
            cy.get("#navLetter").click();

            //Verify and Finalize letter
            cy.get("#sent_to_email").should("be.visible");
            cy.get("#sent_to_email2").should("be.visible");
            cy.get(".cke_wysiwyg_frame").should("be.visible");
            cy.get(".letterSubHeader").should("contain", "Exemption");
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
  });

*/