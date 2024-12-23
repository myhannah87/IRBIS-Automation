describe("Personnel Modification", () => {
  const IRBNumber = '22-0254'
  const PI = "carlac";
  const IRBAnalyst = "jfuse";

  it("Create Personnel Modification", () => {
    cy.visit(Cypress.config().devTrunkBaseUrl); //IRB ID: 22-0254
    cy.get("input#username.long").type(PI).should("have.value", PI);
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
    cy.get("#wizard16 > .wizardType").should(
      "contain",
      "Study Only Modification"
    );
    cy.get("#wizard15 > .wizardType").should(
      "contain",
      "Personnel Only Modification"
    );

    cy.get("#wizard15 > .btn-primary").click();

    //ITEM LIST
    cy.get("#divItemList").should("be.visible");
    cy.get("#divItemList > .hd").should("contain", "Item List");
    cy.get("#divItemList > :nth-child(2)").should(
      "contain",
      "General Information"
    );
    cy.get("#itemListForm1 > dd").should("contain", "2. Project Personnel");
    cy.get("#divItemList > :nth-child(4)").should(
      "contain",
      "Training and Conflict of Interest"
    );

    cy.get("#itemListCOI > dd")
      .should("contain", "COI Disclosures / IRB Training")
      .click();
    cy.get("#ui-dialog-title-modalPopup").should(
      "contain",
      "COI Disclosures for IRB Number 22-0254"
    );
    cy.get(".coiSponsorRow > .copy").should(
      "contain",
      "COI and IRB Training information is not available for this submission."
    );
    cy.get(".ui-icon").click();

    cy.get("#divItemList > :nth-child(6)").should(
      "contain",
      "Submission Routing"
    );
    cy.get("#itemListSubmit > dd").should("contain", "Submit Form").click();
    cy.get(".copyboldred").should(
      "contain",
      "Please complete the Personnel Modification submission before submitting it to routing."
    );
    cy.get(".ui-icon").click();

    cy.get("#itemListPICert > dd").should("contain", "PI Certification Needed");
    cy.get("#divItemList > :nth-child(9)").should(
      "contain",
      "Submission Management"
    );
    cy.get("#itemListHistory > dd").should("contain", "View History");
    cy.get("#itemListPDF > dd").should("contain", "View PDF");
    cy.get("#itemListDelete > dd").should("contain", "Delete Submission");

    //PERSONNEL MOD HEADER
    cy.get("#divNSIHeader > .hd").should("contain", "Personnel Modification");
    cy.get(':nth-child(2) > tbody > :nth-child(1) > [width="14%"]').should(
      "contain",
      "IRB Number:"
    );
    cy.get(".classToLoad").should("be.visible");
    cy.get(
      ".bd > :nth-child(2) > tbody > :nth-child(1) > :nth-child(3)"
    ).should("contain", "Study Status:");
    cy.get(
      ".bd > :nth-child(2) > tbody > :nth-child(1) > :nth-child(4)"
    ).should("be.visible");
    cy.get(':nth-child(2) > tbody > :nth-child(1) > [nowrap="nowrap"]').should(
      "contain",
      "Admin Annual Review Date:"
    );
    cy.get(
      ".bd > :nth-child(2) > tbody > :nth-child(1) > :nth-child(6)"
    ).should("be.visible");
    cy.get(
      ".bd > :nth-child(2) > tbody > :nth-child(2) > :nth-child(1)"
    ).should("contain", "PI:");
    cy.get(":nth-child(2) > tbody > :nth-child(2) > :nth-child(3)").should(
      "contain",
      "IRB:"
    );
    cy.get(":nth-child(2) > tbody > :nth-child(2) > :nth-child(5)").should(
      "contain",
      "Expiration Date:"
    );
    cy.get(":nth-child(2) > tbody > :nth-child(2) > :nth-child(6)").should(
      "be.visible"
    );
    cy.get(
      ".bd > :nth-child(2) > tbody > :nth-child(3) > :nth-child(1)"
    ).should("contain", "Sponsor:");
    cy.get('[colspan="3"]').should("be.visible");
    cy.get(":nth-child(4) > .label").should("contain", "Study Title:");
    cy.get(":nth-child(4) > .copy").should("be.visible");
    cy.get(
      '[style="margin-top: 20px;"] > tbody > :nth-child(1) > [width="14%"]'
    ).should("contain", "Reference Id:");
    cy.get(
      '[style="margin-top: 20px;"] > tbody > :nth-child(1) > :nth-child(2) > a'
    ).should("be.visible");
    cy.get(
      '[style="margin-top: 20px;"] > tbody > :nth-child(1) > [nowrap="nowrap"]'
    ).should("contain", "Submission Status:");
    cy.get(
      '[style="margin-top: 20px;"] > tbody > :nth-child(1) > :nth-child(4)'
    ).should("contain", "Unsubmitted");
    cy.get(':nth-child(2) > [width="14%"]').should(
      "contain",
      "Date Submitted:"
    );
    cy.get(
      '[style="margin-top: 20px;"] > tbody > :nth-child(2) > :nth-child(2)'
    ).should("contain", "Not Submitted");
    cy.get(
      '[style="margin-top: 20px;"] > tbody > :nth-child(2) > :nth-child(3)'
    ).should("contain", "Date PI Certified:");
    cy.get(
      '[style="margin-top: 20px;"] > tbody > :nth-child(2) > :nth-child(4)'
    ).should("contain", "Not Certified");

    //PERSONNEL MODIFICATION SUBMISSION
    cy.get("#PMInstructions").should("be.visible");
    cy.get(".searchresults > ul > :nth-child(1)").should(
      "contain",
      '"Add Internal Personnel" to add new UNC-CH or Hospital Investigator to your study'
    );
    cy.get(".searchresults > ul > :nth-child(2)").should(
      "contain",
      '"Add External Personnel" to add new External Site personnel or Independent Investigator to your study'
    );
    cy.get(".liEdit").should(
      "contain",
      '"Revise Personnel" to edit an Investigator currently on the study (IE: role, email address, phone number)'
    );
    cy.get(".liRemove").should(
      "contain",
      '"Remove Personnel" to delete an Investigator from the study'
    );

    //ADD, REVISE, REMOVE PERSONNEL BUTTONS
    cy.get('[data-external="internal"] > a').should(
      "contain",
      "Add Internal Personnel"
    );
    cy.get('[data-external="external"] > a').should(
      "contain",
      "Add External Personnel"
    );
    cy.get('[data-external="revise"] > a').should(
      "contain",
      "Revise Personnel"
    );
    cy.get('[data-external="remove"] > a').should(
      "contain",
      "Remove Personnel"
    );

    //MODIFIED PROJECT PERSONNEL
    cy.get("#divEFORMScreen > .mod > .hd").should(
      "contain",
      "Modified Project Personnel"
    );
    cy.get("#divEFORMScreen > .mod > .bd > div").should(
      "contain",
      "At this time, no investigators are being added, revised, or removed to/from the Project Personnel."
    );

    //CURRENT PROJECT PERSONNEL
    //cy.get('#divEFORMScreen > :nth-child(4)').should("be.visible") // Cannot verify Current Study Personnel header?
    cy.get("#PersonnelTable > tbody > :nth-child(1) > :nth-child(1)").should(
      "contain",
      "Liaison"
    );
    cy.get("#PersonnelTable > tbody > :nth-child(1) > :nth-child(2)").should(
      "contain",
      "Full Name"
    );
    cy.get("#PersonnelTable > tbody > :nth-child(1) > :nth-child(3)").should(
      "contain",
      "Role"
    );
    cy.get("#PersonnelTable > tbody > :nth-child(1) > :nth-child(4)").should(
      "contain",
      "Department"
    );

    cy.get(".institutionName").should(
      "contain",
      "University of North Carolina at Chapel Hill (UNC-CH)"
    );

    cy.get('[align="center"] > img').should("be.visible");
    cy.get("#originalPersonnelRow720375290 > :nth-child(2)").should(
      "contain",
      "Chibwesha, Carla"
    );
    cy.get("#originalPersonnelRow720375290 > :nth-child(3)").should(
      "contain",
      "Principal Investigator"
    );
    cy.get("#originalPersonnelRow720375290 > :nth-child(4)").should(
      "contain",
      "Obstetrics and Gynecology-Global Health"
    );

    // //REVISE PRESONNEL -> THE PI
    cy.get('[data-external="revise"] > a')
      .should("contain", "Revise Personnel")
      .click();
    cy.get("#ui-dialog-title-modalPopup").should("contain", "Revise Personnel");
    cy.get("#modalPopup > .hd").should("contain", "Current Project Personnel");
    cy.get("#reviseActionHeader > .reviseActionHeader").should(
      "contain",
      'Click the "Revise" link below to edit the chosen Investigator currently on the study.'
    );
    cy.get(
      "#revisePersonnelTable > tbody > :nth-child(1) > :nth-child(1)"
    ).should("contain", "Liaison");
    cy.get(
      "#revisePersonnelTable > tbody > :nth-child(1) > :nth-child(2)"
    ).should("contain", "Full Name");
    cy.get(
      "#revisePersonnelTable > tbody > :nth-child(1) > :nth-child(3)"
    ).should("contain", "Role");
    cy.get(
      "#revisePersonnelTable > tbody > :nth-child(1) > :nth-child(4)"
    ).should("contain", "Department");
    cy.get(
      "#revisePersonnelTable > tbody > :nth-child(2) > .institutionName"
    ).should("contain", "University of North Carolina at Chapel Hill (UNC-CH)");
    cy.get(
      '#revisePersonnelTable > tbody > #originalPersonnelRow720375290 > [align="center"] > img'
    ).should("be.visible"); //Liaison
    cy.get(
      "#revisePersonnelTable > tbody > #originalPersonnelRow720375290 > :nth-child(2)"
    ).should("contain", "Chibwesha, Carla");
    cy.get(
      "#revisePersonnelTable > tbody > #originalPersonnelRow720375290 > :nth-child(3)"
    ).should("contain", "Principal Investigator");
    cy.get(
      "#revisePersonnelTable > tbody > #originalPersonnelRow720375290 > :nth-child(4)"
    ).should("contain", "Obstetrics and Gynecology-Global Health");
    cy.get(
      "#revisePersonnelTable > tbody > #originalPersonnelRow720375290 > .reviseColumn > .editLink"
    ).click();
    cy.get("#modalPopup").should("be.visible");
    cy.get("#phone").type("1");
    cy.get("#btnSubmit").click();
    cy.get(".bd > .personnelTable").should("be.visible");

    //  //ADD PERSONNEL
    cy.get('[data-external="internal"] > a').click();
    cy.get("#modalPopup").should("be.visible");
    cy.get("#add_first_name").type("Marcus");
    cy.get("#add_last_name").type("Hannah");
    cy.get('[name="submit"]').click();
    cy.get("#modalPopup").should("be.visible");
    cy.get("#personListing > tbody > .odd > .copy > a").click();
    cy.get("#modalPopup").should("be.visible");

    cy.get("#personnelModification > tbody > :nth-child(1) > .label").should(
      "contain",
      "Last Name"
    );
    cy.get("#last_name").should("have.value", "Hannah");
    cy.get("#personnelModification > tbody > :nth-child(2) > .label").should(
      "contain",
      "First Name"
    );
    cy.get("#first_name").should("have.value", "Marcus");
    cy.get("#personnelModification > tbody > :nth-child(3) > .label").should(
      "contain",
      "Address"
    );
    cy.get("#personnelModification > tbody > :nth-child(4) > .label").should(
      "contain",
      "Phone"
    );
    cy.get("#phone").should("have.value", "(919) 843-2594");
    cy.get("tbody > :nth-child(5) > .label").should("contain", "UNC Email");
    cy.get("#email").should("have.value", "mhannah1@email.unc.edu");
    cy.get("tbody > :nth-child(6) > .label > span").should(
      "contain",
      "Department Name"
    );
    cy.get("#department_name").should(
      "have.value",
      "Office of Research Information Systems"
    );
    cy.get("tbody > :nth-child(7) > .label").should(
      "contain",
      "External Institution"
    );
    cy.get("#external_institution").should(
      "have.value",
      "University of North Carolina at Chapel Hill (UNC-CH)"
    );

    cy.get(":nth-child(9) > td.copy > .label").should("contain", "Role");
    cy.get(".isPI").should("contain", "Principal Investigator");
    cy.get(":nth-child(9) > td.copy > :nth-child(3)").should(
      "contain",
      "Co-investigator"
    );
    cy.get(":nth-child(9) > td.copy > :nth-child(4)").should(
      "contain",
      "Faculty Advisor"
    );
    cy.get(":nth-child(9) > td.copy > :nth-child(5)").should(
      "contain",
      "Study Coordinator"
    );
    cy.get(":nth-child(9) > td.copy > :nth-child(6)").should(
      "contain",
      "Research Assistant"
    );
    cy.get(":nth-child(9) > td.copy > :nth-child(7)").should(
      "contain",
      "Regulatory Associate"
    );
    cy.get(":nth-child(9) > td.copy > :nth-child(8)").should(
      "contain",
      "External Site PI"
    );
    cy.get(":nth-child(9) > td.copy > :nth-child(9)").should(
      "contain",
      "Other"
    );
    cy.get(".trRoleOther > .label").should(
      "contain",
      "If other, please describe"
    );
    cy.get("#other").should("be.visible");
    cy.get(":nth-child(11) > td.copy").should(
      "contain",
      "Should this person be included on IRB correspondence?"
    );
    cy.get(":nth-child(13) > td.copy").should(
      "contain",
      "Is this person the Liaison?"
    );

    cy.get(":nth-child(3) > #role").click();
    cy.get("#liaisonNo").click();
    cy.get("#btnSubmit").click();

    //Modified Personnel Verification
    cy.get(":nth-child(1) > .institutionName").should(
      "contain",
      "University of North Carolina at Chapel Hill (UNC-CH)"
    );

    cy.get(
      ".bd > .personnelTable > tbody > :nth-child(3) > :nth-child(2)"
    ).should("contain", "Being Revised");
    cy.get(
      ".bd > .personnelTable > tbody > :nth-child(3) > :nth-child(3)"
    ).should("contain", "Chibwesha, Carla");
    cy.get(
      ".bd > .personnelTable > tbody > :nth-child(3) > :nth-child(4)"
    ).should("contain", "Principal Investigator");
    cy.get(
      ".bd > .personnelTable > tbody > :nth-child(3) > :nth-child(5)"
    ).should("contain", "Obstetrics and Gynecology-Global Health");
    cy.get(":nth-child(3) > .editPerson > .viewLink").should("be.visible");
    cy.get(":nth-child(3) > :nth-child(7) > .undoLink").should("be.visible");

    cy.get(".personnelTable > tbody > :nth-child(4) > :nth-child(2)").should(
      "contain",
      "Being Added"
    );
    cy.get("tbody > :nth-child(4) > :nth-child(3)").should(
      "contain",
      "Hannah, Marcus"
    );
    cy.get("tbody > :nth-child(4) > :nth-child(4)").should(
      "contain",
      "Co-investigator"
    );
    cy.get("tbody > :nth-child(4) > :nth-child(5)").should(
      "contain",
      "Office of Research Information Systems"
    );
    cy.get(":nth-child(4) > .editPerson > .viewLink").should("be.visible");
    cy.get(":nth-child(4) > :nth-child(7) > .undoLink").should("be.visible");

    //Submit PM to routing
    cy.get("#itemListSubmit > dd").click();
    cy.get("#modalPopup").should("be.visible");
    cy.get("#ui-dialog-title-modalPopup").should(
      "contain",
      "Submit Personnel Modification for IRB Number 22-0254"
    );
    cy.get(".copyboldred").should(
      "contain",
      "Are you ready to submit this Personnel Modification?"
    );
    //cy.get('.copybold').should('contain', 'The final step in this process is to have the personnel modification submission certified by the PI;')

    cy.get("form > .copy").click();
  });

  //PERSONNEL MOD: PI CERT
  it("Personnel Modification - Being Routed", () => {
    cy.visit(Cypress.config().devTrunkBaseUrl);
    cy.get("input#username.long").type(PI).should("have.value", PI);
    cy.get("input#password.long").type("test{Enter}");
    cy.get("#dashboardmenu8 > :nth-child(2) > a").click();
    //cy.get('.searchColumn ui-state-default')
    cy.get('input[placeholder="Title"]').type(
      "Designing a Digital Health Intervention"
    );
    cy.get(".sorting_1 > a").click();

    cy.get("#itemListPICert > dd").click();
    cy.get(
      '[style="padding: 10px; text-align: center;"] > .searchresults'
    ).should(
      "contain",
      "Please review the following Personnel Modification. Certify below to finalize submission to the IRB."
    );
    cy.get('form > [type="submit"]').click();
  });

  //ACCEPT PERSONNEL MOD
  it("Personnel Modification - Accept for Review", () => {
    cy.visit(Cypress.config().devTrunkBaseUrl);
    cy.get("input#username.long")
      .type("mhannah1")
      .should("have.value", "mhannah1");
    cy.get("input#password.long").type("test{Enter}");

    cy.viewport(1200, 700);
    cy.get(
      'td[data-title="Submitted To IRB"] > .bucket > :nth-child(2) > table > tbody > :nth-child(5) > .countTotal > a'
    ).click();
    cy.wait(1000);
    cy.get("#bucketDataTable_filter > label > input").type(
      "Designing a Digital Health Intervention"
    );
    cy.get("#bucketDataTable > tbody > .odd > :nth-child(1) > a").click();
  });

  //PERSONNEL MOD - STUDY HISTORY SCREEN/SUBMISSION DETAILS
  it("Personnel Modification - Verify Study History/Submission Details", () => {
    cy.visit(Cypress.config().devTrunkBaseUrl);
    cy.get("input#username.long")
      .type(IRBAnalyst)
      .should("have.value", IRBAnalyst);
    cy.get("input#password.long").type("test{Enter}");

    cy.get(
      'td[data-title="Accepted By IRB"] > .bucket > :nth-child(2) > table > tbody > :nth-child(4) > .countTotal > a'
    ).click();
    cy.viewport(1200, 700);
    cy.wait(1000);
    cy.get("#bucketDataTable_filter > label > input").type(
      "Designing a Digital Health Intervention"
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

  it("Personnel Modification - Verify Application/Review popup", () => {
    cy.visit(Cypress.config().devTrunkBaseUrl);
    cy.get("input#username.long")
      .type(IRBAnalyst)
      .should("have.value", IRBAnalyst);
    //.type('cjfennim').should('have.value', 'cjfennim')
    cy.get("input#password.long").type("test{Enter}");

    cy.viewport(1200, 700);

    cy.get(
      'td[data-title="Accepted By IRB"] > .bucket > :nth-child(2) > table > tbody > :nth-child(4) > .countTotal > a'
    ).click();
    cy.wait(1000);
    cy.get("#bucketDataTable_filter > label > input").type(
      "Designing a Digital Health Intervention"
    );
    cy.get("#bucketDataTable > tbody > .odd > :nth-child(1) > a").click();

    cy.get(".swimlane1 > div").should("be.visible");

    // Get window object
    cy.window().then((win) => {
      // Replace window.open(url, target)-function with our own arrow function
      cy.stub(win, 'open').callsFake (url => 
        // change window location to be same as the popup url
        win.location.href = Cypress.config().devTrunkBaseUrl + url);
      }).as("application"); // alias it with popup, so we can refer it with @popup
    // Click button which triggers javascript's window.open() call
    cy.contains("Application").click();

    //Verify left rail
    cy.get("#navContainer").should("be.visible");
    cy.get("#navReviewType").should("be.visible");
    cy.get("#navReviewConditions").should("be.visible");
    cy.get("#navNextStep").should("be.visible");
    cy.get("#navApplication").should("be.visible");
    cy.get("#navStipulations").should("be.visible");
    cy.get("#navOptions").should("be.visible");
    cy.get("#navReviewResult").should("be.visible");
    cy.get("#navReviewNotes").should("be.visible");
    cy.get("#navLetter").should("be.visible");

    //Verify review conditions -> REVIEW
    cy.get("#reviewConditionsIcon").should("have.class", "stopIcon fail");
    cy.get("#navReviewConditions").click();
    cy.get("#stopsHeader > b").should("contain", "FAIL");

    cy.get("#stopsHeader").should("be.visible");
    cy.get("#optionsList > :nth-child(1)").should("be.visible");
    cy.get("#stopListStipulations").should("have.class", "stopIcon na");
    cy.get("#stopListCategory").should("have.class", "stopIcon na");
    cy.get("#stopListLetterEmail").should("have.class", "stopIcon na");
    cy.get("#stopListPIResponse").should("have.class", "stopIcon pass");
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
    cy.get("#stopListCOI").should("have.class", "stopIcon fail");
    cy.get("#stopListManagementPlan").should("have.class", "stopIcon fail");
    cy.get("#stopListHSP").should("have.class", "stopIcon na");
    cy.get("#stopListGCP").should("have.class", "stopIcon na");
    cy.get("#closeNavContainer").click();

    //Select an Analyst
    //cy.get('#navNextStep').click()
    //cy.get('#analystSelector').should("be.visible")
    //cy.get('.managerTextbox').type('celeste')
    //cy.get('[name="Justin Feussner"]').click()

    // cy.get('.bd').should("be.visible")
    cy.get(".section_hdr_1").should("contain", "COI/Training");
    cy.get(".section_hdr_2").should(
      "contain",
      "for IRB NO: 22-0254 - Submission Type: Personnel Modification"
    );
    cy.get("td.externalInstitutionHeaderName").should(
      "contain",
      "University of North Carolina at Chapel Hill (UNC-CH)"
    );
    cy.get(".fullName").should("contain", "Full Name");
    cy.get(".tableheaderirb > :nth-child(3)").should("contain", "Credentials");
    cy.get(".role").should("contain", "Role");
    cy.get(".department").should("contain", "Department");
    cy.get(".hspTraining").should("contain", "HSP");
    cy.get(".gcp").should("contain", "GCP");
    cy.get(".coiTraining").should("contain", "COI Training");
    cy.get(".tableheaderirb > :nth-child(9)").should("contain", "COI WebID");
    cy.get(".tableheaderirb > :nth-child(10)").should("contain", "COI Number");
    cy.get(".tableheaderirb > :nth-child(11)").should(
      "contain",
      "Initial COI Disclosure"
    );
    cy.get(".tableheaderirb > :nth-child(12)").should(
      "contain",
      "Potential Conflict"
    );
    cy.get(".tableheaderirb > :nth-child(13)").should(
      "contain",
      "COI Review Process"
    );
    cy.get(".tableheaderirb > :nth-child(14)").should(
      "contain",
      "COI Review Result"
    );

    //Verify PI data
    cy.get(':nth-child(1) > [src="/common/fam/star.png"]').should("be.visible");
    cy.get("#pid720375290").should("contain", "Carla Chibwesha");
    cy.get(":nth-child(3) > :nth-child(4)").should(
      "contain",
      "Principal Investigator"
    );
    cy.get(":nth-child(3) > :nth-child(5)").should(
      "contain",
      "Obstetrics and Gynecology-Global Health"
    );
    //HR data
    cy.get(
      ":nth-child(4) > .hrTD > .hrDataDiv > .hrData > tbody > tr > .jobDept"
    ).should(
      "contain",
      "Job Dept: 412490: Obstetrics and Gynecology-Global Health"
    );
    cy.get(
      ":nth-child(4) > .hrTD > .hrDataDiv > .hrData > tbody > tr > :nth-child(2)"
    ).should("contain", "Title: Associate Professor");
    cy.get(
      ":nth-child(4) > .hrTD > .hrDataDiv > .hrData > tbody > tr > :nth-child(3)"
    ).should("contain", "Pos. Type: Regular");
    cy.get(
      ":nth-child(4) > .hrTD > .hrDataDiv > .hrData > tbody > tr > :nth-child(4)"
    ).should("contain", "Emp. Type: Faculty");
    cy.get(
      ":nth-child(4) > .hrTD > .hrDataDiv > .hrData > tbody > tr > :nth-child(5)"
    ).should("contain", "Status: Active");
    cy.get(
      ":nth-child(4) > .hrTD > .hrDataDiv > .hrData > tbody > tr > .fte"
    ).should("contain", "FTE: 1");

    //Verify Marcus Data
    cy.get("#pid730139015").should("contain", "Marcus Hannah");
    cy.get(".coiSponsorRow.beingAdded > :nth-child(4)").should(
      "contain",
      "Co-investigator"
    );
    cy.get(".coiSponsorRow.beingAdded > :nth-child(5)").should(
      "contain",
      "Office of Research Information Systems"
    );
    //HR Data
    cy.get(
      ":nth-child(6) > .hrTD > .hrDataDiv > .hrData > tbody > tr > .jobDept"
    ).should(
      "contain",
      "Job Dept: 621600: Office of Research Information Systems"
    );
    cy.get(
      ":nth-child(6) > .hrTD > .hrDataDiv > .hrData > tbody > tr > :nth-child(2)"
    ).should("contain", "Title: Applications Analyst");
    cy.get(
      ":nth-child(6) > .hrTD > .hrDataDiv > .hrData > tbody > tr > :nth-child(3)"
    ).should("contain", "Pos. Type: Regular");
    cy.get(
      ":nth-child(6) > .hrTD > .hrDataDiv > .hrData > tbody > tr > :nth-child(4)"
    ).should("contain", "Emp. Type: EHRA Non Faculty");
    cy.get(
      ":nth-child(6) > .hrTD > .hrDataDiv > .hrData > tbody > tr > :nth-child(5)"
    ).should("contain", "Status: Active");
    cy.get(
      ":nth-child(6) > .hrTD > .hrDataDiv > .hrData > tbody > tr > .fte"
    ).should("contain", "FTE: 1");

    cy.get("#pid720375290").click();
    cy.get(".ui-dialog").should("be.visible");
    cy.get(".tablemainsub2.collectionData").should("be.visible");
    cy.get("#modalPopup > :nth-child(3)").should("be.visible");
    cy.get(".beingRemoved").should("be.visible");
    cy.get("#modalPopup > :nth-child(6)").should("be.visible");
    cy.get(":nth-child(8) > tbody > :nth-child(1) > .tableheadersub3").should(
      "be.visible"
    );
    cy.get(".closeCOIPersonnelDetails").click();

    //Add a stipulation
    cy.get("#navApplication").click();
    cy.get(".addStipButton").click();
    cy.wait(1000);
    cy.get(".cke_wysiwyg_frame").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My test PM stip");
    });
      cy.get("#applicationForm > #stip0 > .stipButtons > .save").click();
      cy.get(".editStipulation > p").should("be.visible");
      //cy.get('#stipCount').should('contain', '(1)')

      cy.get("#navReviewResult").click();

      //Disabled review results:
      cy.get("#reviewResult1").should("have.class", "stipsNotAllowed"); //Acknowledged
      cy.get("#reviewResult2").should("contain", "Minor Stipulations");
      cy.get("#reviewResult3").should("have.class", "stipsNotAllowed"); //Withdrawn

      //Pending COI Review
      cy.get("#pendingCOIReview_div").should("be.visible");
      cy.get("#pendingCOIReview").should("be.visible");
      cy.get("#pendingCOIReview-Text").should(
        "contain",
        "Pending COI Review (when checked)"
      );

      //Select Minor Stipulations
      cy.get("#reviewResult2").click();
      cy.wait(3000);

      //Review Conditions: Pass check
      cy.get("#reviewConditionsIcon").should("have.class", "stopIcon pass");

      //Draft Letter
      cy.get("#navLetter").click();
      //cy.contains('Draft Letter').should("be.visible").click()
      cy.get("#modalPopup").should("be.visible");
      cy.get('#hasTemplates > [style="display: block;"]').should(
        "contain",
        "Minor Stips - Expedited"
      );
      cy.get("#btnDraftLetter").click();

      //FINALIZE PERSONNEL MOD REVIEW - MINOR STIP LETTER
      cy.get("#btnFinalizeLetterModal").click();

      //Click ok in js confirmation alert
      cy.get(".ui-dialog").should("be.visible");
      cy.get(".ui-dialog-content > div").should(
        "contain",
        "Are you sure you want to finalize this letter?"
      );
      cy.get(".ui-dialog-buttonset > .btn-default").should("contain", "Cancel");
      cy.get(".ui-dialog-buttonset > .btn-info")
        .should("contain", "Finalize")
        .click();
    });
  
  it("Personnel Modification - Waiting PI Response", () => {
    cy.visit(Cypress.config().devTrunkBaseUrl);
    cy.get("input#username.long").type(PI).should("have.value", PI);
    cy.get("input#password.long").type("test{Enter}");

    cy.viewport(1200, 700);

    cy.get("#dashboardmenu5 > :nth-child(10) > a").click();
    cy.get('input[placeholder="Title"]').type(
      "Designing a Digital Health Intervention"
    );
    cy.get(".odd > :nth-child(2) > a").click();

    //ITEM LIST
    cy.get("#divItemList").should("be.visible");
    cy.get("#divItemList > .hd").should("contain", "Item List");
    cy.get("#divItemList > :nth-child(2)").should(
      "contain",
      "General Information"
    );
    cy.get("#itemListForm1 > dd").should("contain", "2. Project Personnel");
    cy.get("#divItemList > :nth-child(4)").should(
      "contain",
      "Training and Conflict of Interest"
    );
    // Verify COI table
    cy.get("#itemListCOI > dd")
      .should("contain", "COI Disclosures / IRB Training")
      .click();
    cy.get("#ui-dialog-title-modalPopup").should(
      "contain",
      "COI Disclosures for IRB Number 22-0254"
    );
    cy.get("td.externalInstitutionHeaderName").should(
      "contain",
      "University of North Carolina at Chapel Hill (UNC-CH)"
    );
    cy.get(".fullName").should("contain", "Full Name");
    cy.get(".role").should("contain", "Role");
    cy.get(".department").should("contain", "Department");
    cy.get(".hspTraining").should("contain", "HSP");
    cy.get(".gcp").should("contain", "GCP");
    cy.get(".coiTraining").should("contain", "COI Training");
    cy.get(".tableheaderirb > :nth-child(7)").should("contain", "COI Number");
    cy.get(".tableheaderirb > :nth-child(8)").should(
      "contain",
      "Initial COI Disclosure"
    );
    cy.get(".tableheaderirb > :nth-child(9)").should(
      "contain",
      "Potential Conflict"
    );
    cy.get(".tableheaderirb > :nth-child(10)").should(
      "contain",
      "COI Review Process"
    );
    cy.get(".tableheaderirb > :nth-child(11)").should(
      "contain",
      "COI Review Result"
    );

    //Verify PI data
    cy.get(':nth-child(1) > [src="/common/fam/star.png"]').should("be.visible");
    cy.get("#pid720375290").should("contain", "Carla Chibwesha");
    cy.get(":nth-child(3) > :nth-child(4)").should(
      "contain",
      "Principal Investigator"
    );
    cy.get(":nth-child(3) > :nth-child(5)").should(
      "contain",
      "Obstetrics and Gynecology-Global Health"
    );

    //Verify Marcus Data
    cy.get("#pid730139015").should("contain", "Marcus Hannah");
    cy.get(".beingAdded > :nth-child(2)").should("contain", "Co-investigator");
    cy.get(".beingAdded > :nth-child(3)").should(
      "contain",
      "Office of Research Information Systems"
    );
    //Close COI Modal
    cy.get(".ui-icon").click();

    cy.get("#divItemList > :nth-child(6)").should(
      "contain",
      "Submission Routing"
    );
    cy.get("#itemListStipulations > dd").should("contain", "Stipulations");
    cy.get("#itemListResubmit > dd").should("contain", "Resubmit").click();
    cy.get("#modalPopup").should("be.visible");
    cy.get(".alertMessageBox").should(
      "contain",
      'Please respond to the stipulations using the "Stipulations" link in the item list (left).'
    );
    cy.get(".ui-icon").click();

    cy.get("#itemListPICertView > dd").should("contain", "PI Certified On");
    cy.get("#divItemList > :nth-child(10)").should(
      "contain",
      "Submission Management"
    );
    cy.get("#itemListHistory > dd").should("contain", "View History");
    cy.get("#itemListPDF > dd").should("contain", "View PDF");
    cy.get("#itemListDelete > dd").should("contain", "Delete Submission");

    //PERSONNEL MOD HEADER
    cy.get("#divNSIHeader > .hd").should("contain", "Personnel Modification");
    cy.get(':nth-child(2) > tbody > :nth-child(1) > [width="14%"]').should(
      "contain",
      "IRB Number:"
    );
    cy.get(".classToLoad").should("be.visible");
    cy.get(
      ".bd > :nth-child(2) > tbody > :nth-child(1) > :nth-child(3)"
    ).should("contain", "Study Status:");
    cy.get(
      ".bd > :nth-child(2) > tbody > :nth-child(1) > :nth-child(4)"
    ).should("be.visible");
    cy.get(':nth-child(2) > tbody > :nth-child(1) > [nowrap="nowrap"]').should(
      "contain",
      "Admin Annual Review Date:"
    );
    cy.get(
      ".bd > :nth-child(2) > tbody > :nth-child(1) > :nth-child(6)"
    ).should("be.visible");
    cy.get(
      ".bd > :nth-child(2) > tbody > :nth-child(2) > :nth-child(1)"
    ).should("contain", "PI:");
    cy.get(":nth-child(2) > tbody > :nth-child(2) > :nth-child(3)").should(
      "contain",
      "IRB:"
    );
    cy.get(":nth-child(2) > tbody > :nth-child(2) > :nth-child(5)").should(
      "contain",
      "Expiration Date:"
    );
    cy.get(":nth-child(2) > tbody > :nth-child(2) > :nth-child(6)").should(
      "be.visible"
    );
    cy.get(
      ".bd > :nth-child(2) > tbody > :nth-child(3) > :nth-child(1)"
    ).should("contain", "Sponsor:");
    cy.get('[colspan="3"]').should("be.visible");
    cy.get(":nth-child(4) > .label").should("contain", "Study Title:");
    cy.get(":nth-child(4) > .copy").should("be.visible");
    cy.get(
      '[style="margin-top: 20px;"] > tbody > :nth-child(1) > [width="14%"]'
    ).should("contain", "Reference Id:");
    cy.get(
      '[style="margin-top: 20px;"] > tbody > :nth-child(1) > :nth-child(2) > a'
    ).should("be.visible");
    cy.get(
      '[style="margin-top: 20px;"] > tbody > :nth-child(1) > [nowrap="nowrap"]'
    ).should("contain", "Submission Status:");
    cy.get(
      '[style="margin-top: 20px;"] > tbody > :nth-child(1) > :nth-child(4)'
    ).should("contain", "Reopened");
    cy.get(':nth-child(2) > [width="14%"]').should(
      "contain",
      "Date Submitted:"
    );
    cy.get(
      '[style="margin-top: 20px;"] > tbody > :nth-child(2) > :nth-child(2)'
    ).should("be.visible");
    cy.get(
      '[style="margin-top: 20px;"] > tbody > :nth-child(2) > :nth-child(3)'
    ).should("contain", "Date PI Certified:");
    cy.get(
      '[style="margin-top: 20px;"] > tbody > :nth-child(2) > :nth-child(4)'
    ).should("be.visible");

    //PERSONNEL MODIFICATION SUBMISSION
    cy.get("#PMInstructions").should("be.visible");
    cy.get(".searchresults > ul > :nth-child(1)").should(
      "contain",
      '"Add Internal Personnel" to add new UNC-CH or Hospital Investigator to your study'
    );
    cy.get(".searchresults > ul > :nth-child(2)").should(
      "contain",
      '"Add External Personnel" to add new External Site personnel or Independent Investigator to your study'
    );
    cy.get(".liEdit").should(
      "contain",
      '"Revise Personnel" to edit an Investigator currently on the study (IE: role, email address, phone number)'
    );
    cy.get(".liRemove").should(
      "contain",
      '"Remove Personnel" to delete an Investigator from the study'
    );

    //ADD, REVISE, REMOVE PERSONNEL BUTTONS
    cy.get('[data-external="internal"] > a').should(
      "contain",
      "Add Internal Personnel"
    );
    cy.get('[data-external="external"] > a').should(
      "contain",
      "Add External Personnel"
    );
    cy.get('[data-external="revise"] > a').should(
      "contain",
      "Revise Personnel"
    );
    cy.get('[data-external="remove"] > a').should(
      "contain",
      "Remove Personnel"
    );

    //Modified Personnel Verification
    cy.get(":nth-child(1) > .institutionName").should(
      "contain",
      "University of North Carolina at Chapel Hill (UNC-CH)"
    );

    cy.get(
      ".bd > .personnelTable > tbody > :nth-child(3) > :nth-child(2)"
    ).should("contain", "Being Revised");
    cy.get(
      ".bd > .personnelTable > tbody > :nth-child(3) > :nth-child(3)"
    ).should("contain", "Chibwesha, Carla");
    cy.get(
      ".bd > .personnelTable > tbody > :nth-child(3) > :nth-child(4)"
    ).should("contain", "Principal Investigator");
    cy.get(
      ".bd > .personnelTable > tbody > :nth-child(3) > :nth-child(5)"
    ).should("contain", "Obstetrics and Gynecology-Global Health");
    cy.get(":nth-child(3) > .editPerson > .viewLink").should("be.visible");
    cy.get(":nth-child(3) > :nth-child(7) > .undoLink").should("be.visible");

    cy.get(".personnelTable > tbody > :nth-child(4) > :nth-child(2)").should(
      "contain",
      "Being Added"
    );
    cy.get("tbody > :nth-child(4) > :nth-child(3)").should(
      "contain",
      "Hannah, Marcus"
    );
    cy.get("tbody > :nth-child(4) > :nth-child(4)").should(
      "contain",
      "Co-investigator"
    );
    cy.get("tbody > :nth-child(4) > :nth-child(5)").should(
      "contain",
      "Office of Research Information Systems"
    );
    cy.get(":nth-child(4) > .editPerson > .viewLink").should("be.visible");
    cy.get(":nth-child(4) > :nth-child(7) > .undoLink").should("be.visible");

    //CURRENT PROJECT PERSONNEL
    //cy.get('#divEFORMScreen > :nth-child(4)').should("be.visible") // Cannot verify Current Study Personnel header?
    cy.get("#PersonnelTable > tbody > :nth-child(1) > :nth-child(1)").should(
      "contain",
      "Liaison"
    );
    cy.get("#PersonnelTable > tbody > :nth-child(1) > :nth-child(2)").should(
      "contain",
      "Full Name"
    );
    cy.get("#PersonnelTable > tbody > :nth-child(1) > :nth-child(3)").should(
      "contain",
      "Role"
    );
    cy.get("#PersonnelTable > tbody > :nth-child(1) > :nth-child(4)").should(
      "contain",
      "Department"
    );

    cy.get(".institutionName").should(
      "contain",
      "University of North Carolina at Chapel Hill (UNC-CH)"
    );

    cy.get('[align="center"] > img').should("be.visible");
    cy.get("#originalPersonnelRow720375290 > :nth-child(2)").should(
      "contain",
      "Chibwesha, Carla"
    );
    cy.get("#originalPersonnelRow720375290 > :nth-child(3)").should(
      "contain",
      "Principal Investigator"
    );
    cy.get("#originalPersonnelRow720375290 > :nth-child(4)").should(
      "contain",
      "Obstetrics and Gynecology-Global Health"
    );

    //Undo adding Marcus
    cy.get(":nth-child(4) > :nth-child(7) > .undoLink").click();

    //RESPOND TO STIPULATIONS
    cy.get("#itemListStipulations > dd").click();

    cy.get("#stipIntructions").should(
      "contain",
      "INSTRUCTIONS: Please review and respond to the stipulations as follows."
    );
    cy.get("#personnelModificationStipulationText").should("be.visible");
    cy.get("span.label").should("contain", "Updated by IRB Admin on");
    cy.get("#personnelModificationStipulationText").should(
      "contain",
      "My test PM stip"
    );
    cy.wait(1000);
    cy.get("iframe").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      console.log($body);
      cy.wrap($body[0]).type("My test PM Response to stipulations");
    });

      cy.get(".button").click();

      //RESBUMIT PERSONNEL MODIFICATION
      cy.get("#itemListResubmit > dd").click();
      cy.get("#modalPopup").should("be.visible");
      cy.get(".alertMessageBox").should(
        "contain",
        "Are you ready to resubmit this Personnel Modification Form?"
      );
      cy.get("form > .copy")
        .should("contain", "Resubmit Personnel Modification")
        .click();
    });
  
  it("Personnel Modification - Verify Resubmitted Review popup", () => {
    cy.visit(Cypress.config().devTrunkBaseUrl);
    // cy.visit('https://orisdev.research.unc.edu/irb_maint/index.cfm?event=admin.reviewWindow&reviewId=592703&appId=472723');
    cy.get("input#username.long")
      .type(IRBAnalyst)
      .should("have.value", IRBAnalyst);
    //.type('cjfennim').should('have.value', 'cjfennim')
    cy.get("input#password.long").type("test{Enter}");
    cy.viewport(1200, 700);

    cy.get(
      'td[data-title="PI Responses"] > .bucket > :nth-child(2) > table > tbody > :nth-child(4) > .countTotal > a'
    ).click();
    cy.viewport(1200, 700);
    cy.wait(1000);
    cy.get("#bucketDataTable_filter > label > input").type(
      "Designing a Digital Health Intervention"
    );
    cy.get("#bucketDataTable > tbody > .odd > :nth-child(1) > a").click();

    // Get window object
    cy.window().then((win) => {
      // Replace window.open(url, target)-function with our own arrow function
      cy.stub(win, 'open').callsFake (url => 
        // change window location to be same as the popup url
        win.location.href = Cypress.config().devTrunkBaseUrl + url);
      }).as("application"); // alias it with popup, so we can refer it with @popup
    // Click button which triggers javascript's window.open() call
    cy.contains("Application").click();

    // Click button which triggers javascript's window.open() call
    cy.contains("Application").should("be.visible").click();
    // Make sure that it triggered window.open function call
    cy.get("@popup").should("be.called");

    // CAPTURE URL OF REVIEW WINDOW
    cy.url().as("reviewWindow");

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
    cy.get("#reviewConditionsIcon").should("have.class", "stopIcon fail");
    cy.get("#navReviewConditions").click();
    cy.get("#stopsHeader > b").should("contain", "FAIL");

    cy.get("#stopsHeader").should("be.visible");
    cy.get("#optionsList > :nth-child(1)").should("be.visible");
    cy.get("#stopListStipulations").should("have.class", "stopIcon na");
    cy.get("#stopListCategory").should("have.class", "stopIcon na");
    cy.get("#stopListLetterEmail").should("have.class", "stopIcon na");
    cy.get("#stopListPIResponse").should("have.class", "stopIcon fail");
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
    cy.get("#stopListCOI").should("have.class", "stopIcon pass");
    cy.get("#stopListManagementPlan").should("have.class", "stopIcon na");
    cy.get("#stopListHSP")
      .should("be.visible")
      .should("have.class", "stopIcon na");
    cy.get("#stopListGCP").should("have.class", "stopIcon na");
    cy.get("#closeNavContainer").click();

    // cy.get('.bd').should("be.visible")
    cy.get(".section_hdr_1").should("contain", "COI/Training");
    cy.get(".section_hdr_2").should(
      "contain",
      "for IRB NO: 22-0254 - Submission Type: Personnel Modification"
    );
    cy.get("td.externalInstitutionHeaderName").should(
      "contain",
      "University of North Carolina at Chapel Hill (UNC-CH)"
    );
    cy.get(".fullName").should("contain", "Full Name");
    cy.get(".tableheaderirb > :nth-child(3)").should("contain", "Credentials");
    cy.get(".role").should("contain", "Role");
    cy.get(".department").should("contain", "Department");
    cy.get(".hspTraining").should("contain", "HSP");
    cy.get(".gcp").should("contain", "GCP");
    cy.get(".coiTraining").should("contain", "COI Training");
    cy.get(".tableheaderirb > :nth-child(9)").should("contain", "COI WebID");
    cy.get(".tableheaderirb > :nth-child(10)").should("contain", "COI Number");
    cy.get(".tableheaderirb > :nth-child(11)").should(
      "contain",
      "Initial COI Disclosure"
    );
    cy.get(".tableheaderirb > :nth-child(12)").should(
      "contain",
      "Potential Conflict"
    );
    cy.get(".tableheaderirb > :nth-child(13)").should(
      "contain",
      "COI Review Process"
    );
    cy.get(".tableheaderirb > :nth-child(14)").should(
      "contain",
      "COI Review Result"
    );

    //Verify PI data
    cy.get(':nth-child(1) > [src="/common/fam/star.png"]').should("be.visible");
    cy.get("#pid720375290").should("contain", "Carla Chibwesha");
    cy.get(":nth-child(3) > :nth-child(4)").should(
      "contain",
      "Principal Investigator"
    );
    cy.get(":nth-child(3) > :nth-child(5)").should(
      "contain",
      "Obstetrics and Gynecology-Global Health"
    );
    //HR data
    cy.get(
      ":nth-child(4) > .hrTD > .hrDataDiv > .hrData > tbody > tr > .jobDept"
    ).should(
      "contain",
      "Job Dept: 412490: Obstetrics and Gynecology-Global Health"
    );
    cy.get(
      ":nth-child(4) > .hrTD > .hrDataDiv > .hrData > tbody > tr > :nth-child(2)"
    ).should("contain", "Title: Associate Professor");
    cy.get(
      ":nth-child(4) > .hrTD > .hrDataDiv > .hrData > tbody > tr > :nth-child(3)"
    ).should("contain", "Pos. Type: Regular");
    cy.get(
      ":nth-child(4) > .hrTD > .hrDataDiv > .hrData > tbody > tr > :nth-child(4)"
    ).should("contain", "Emp. Type: Faculty");
    cy.get(
      ":nth-child(4) > .hrTD > .hrDataDiv > .hrData > tbody > tr > :nth-child(5)"
    ).should("contain", "Status: Active");
    cy.get(
      ":nth-child(4) > .hrTD > .hrDataDiv > .hrData > tbody > tr > .fte"
    ).should("contain", "FTE: 1");

    //PI RESPONSES
    cy.viewport(1200, 612);

    // Get window object
    cy.window().then((win) => {
      // Replace window.open(url, target)-function with our own arrow function
      cy.stub(win, 'open').callsFake (url => 
        // change window location to be same as the popup url
        win.location.href = Cypress.config().devTrunkBaseUrl + url);
      }).as("popup"); // alias it with popup, so we can refer it with @popup

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

    cy.get("#navReviewResult").click();

    //Disabled review results:
    cy.get("#reviewResult1").should("contain", "Acknowledged"); //Acknowledged
    cy.get("#reviewResult2").should("contain", "Minor Stipulations");
    cy.get("#reviewResult3").should("contain", "Withdrawn"); //Withdrawn

    //Pending COI Review
    cy.get("#pendingCOIReview_div").should("be.visible");
    cy.get("#pendingCOIReview").should("be.visible");
    cy.get("#pendingCOIReview-Text").should(
      "contain",
      "Pending COI Review (when checked)"
    );

    //Select Acknowledged review result
    cy.get("#reviewResult1").click();
    cy.wait(3000);

    //Review Conditions check
    cy.get("#reviewConditionsIcon").should("have.class", "stopIcon attention");

    //Verify review conditions -> COI
    cy.get("#navReviewConditions").click();
    cy.get("#optionsList > :nth-child(3)").should("be.visible");
    cy.get("#stopListCOI").should("have.class", "stopIcon pass");
    cy.get("#stopListManagementPlan").should("have.class", "stopIcon na");
    cy.get("#stopListHSP")
      .should("be.visible")
      .should("have.class", "stopIcon attention");
    cy.get("#stopListGCP").should("have.class", "stopIcon na");
    cy.get("#closeNavContainer").click();

    //Draft Letter
    cy.get("#navLetter").click();
    cy.get("#modalPopup").should("be.visible");
    cy.get("#letterTypeId")
      .should("contain", "Select Template Type...")
      .and("contain", "Personnel Mod Ackn Letter (CR)")
      .and("contain", "Personnel Mod for Rely On External")
      .and("contain", "Personnel Mod for Rely On NCI")
      .select("Personnel Mod for Rely On External");
    cy.get("#btnDraftLetter").click();

    //FINALIZE PERSONNEL MOD REVIEW - MINOR STIP LETTER
    cy.get("#btnFinalizeLetterModal").click();

    //Click ok in js confirmation alert
    cy.get(".ui-dialog").should("be.visible");
    cy.get(".ui-dialog-content > div").should(
      "contain",
      "Are you sure you want to finalize this letter?"
    );
    cy.get(".ui-dialog-buttonset > .btn-default").should("contain", "Cancel");
    cy.get(".ui-dialog-buttonset > .btn-info")
      .should("contain", "Finalize")
      .click();
  });
});

