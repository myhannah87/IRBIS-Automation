describe("Committee Agenda/Minutes", () => {
  const IRBAnalyst = "jfuse";
  //const logInURL = 'https://orisdev.research.unc.edu/irb_maint/'

  it("Verify Committee Agenda", () => {
    cy.viewport(1400, 750);
    cy.visit(Cypress.config().devTrunkBaseUrl);
    //cy.get('title')
    //  .invoke('text')
    //.should('equal', '\nIRB \n')
    cy.get("input#username.long")
      .type(IRBAnalyst)
      .should("have.value", IRBAnalyst);
    cy.get("input#password.long").type("test!{Enter}");

    cy.get("#reviewDateCalendar").should("be.visible");
    cy.get("#messageCenterBox").should("be.visible");
    cy.get(".expandView").should("be.visible");
    cy.get(".updateMessageLogs").should("be.visible");

    //Select Committee
    cy.get("#committeeId").select("Board A");

    //Select Review Date
    cy.get("#reviewDate").select("08/01/2022");

    //Agenda and Minutes
    cy.get("#agendaMinutesDocs").should("be.visible");
    cy.get("#agendaMinutesDocs > :nth-child(1) > a").should("be.visible");
    cy.get("#agendaMinutesDocs > :nth-child(2) > a").should("be.visible");
    cy.get("#agendaMinutesDocs > button").click();

    cy.get("#committeeSearchInprogress > :nth-child(1)").should("be.visible");
    cy.get("#committeeInfo").should("be.visible");
    cy.get("#committeeInfo > .copy").should("be.visible");

    cy.get("#documentList > :nth-child(1) > a").should(
      "contain",
      "View Agenda"
    );
    cy.get("#documentList > :nth-child(2) > a").should(
      "contain",
      "View Minutes"
    );

    // CAPTURE URL OF COMMITTEE AGENDA SCREEN
    cy.url().as("committeeAgenda");

    //Meeting Preparation
    cy.get(".committeeArchive").should("be.visible");

    //Data Table headers
    cy.get("#displayTable").should("be.visible");
    cy.get(".sorting_asc").should("be.visible");
    cy.get('[aria-label="Result"] > .DataTables_sort_wrapper').should(
      "contain",
      "Result"
    );
    cy.get(
      '[aria-label="IRB Number: activate to sort column ascending"] > .DataTables_sort_wrapper'
    ).should("contain", "IRB Number");
    cy.get(
      '[aria-label="Title: activate to sort column ascending"] > .DataTables_sort_wrapper'
    ).should("contain", "Title");
    cy.get(
      '[aria-label="PI: activate to sort column ascending"] > .DataTables_sort_wrapper'
    ).should("contain", "PI");
    cy.get(
      '[aria-label="Type: activate to sort column ascending"] > .DataTables_sort_wrapper'
    ).should("contain", "Type");
    cy.get(
      '[aria-label="Date Routing Complete"] > .DataTables_sort_wrapper'
    ).should("contain", "Date Routing Complete");
    cy.get('[aria-label="Approval Date"] > .DataTables_sort_wrapper').should(
      "contain",
      "Approval Date"
    );
    cy.get('[aria-label="Expiration Date"] > .DataTables_sort_wrapper').should(
      "contain",
      "Expiration Date"
    );
    cy.get(
      '[aria-label="Review Type: activate to sort column ascending"] > .DataTables_sort_wrapper'
    ).should("contain", "Review Type");
    cy.get(
      '[aria-label="Reviewer: activate to sort column ascending"] > .DataTables_sort_wrapper'
    ).should("contain", "Reviewer");
    cy.get(
      '[aria-label="Secondary Reviewer: activate to sort column ascending"] > .DataTables_sort_wrapper'
    ).should("contain", "Secondary Reviewer");
    cy.get(
      '[aria-label="Review Result: activate to sort column ascending"] > .DataTables_sort_wrapper'
    ).should("contain", "Review Result");
    cy.get(
      '[aria-label="Sponsor: activate to sort column ascending"] > .DataTables_sort_wrapper'
    ).should("contain", "Sponsor");

    //Verify IRB 21-2224's Data
    cy.get("label > input").type("21-2224");
    cy.get(".sorting_1").should("contain", "6");
    cy.get('[nowrap=""] > a').should("contain", "21-2224");
    cy.get(".trimHeight").should(
      "contain",
      "Dynamic neural mechanisms of brexanolone-induced antidepressant effects in postpartum depression: A feasibility study"
    );
    cy.get(".odd > :nth-child(5)").should("contain", "Girdler, Susan");
    cy.get(".odd > :nth-child(6)").should("contain", "Modification");
    cy.get(".odd > :nth-child(7)").should("contain", "7/14/2022");
    cy.get(".odd > :nth-child(8)").should("contain", "8/01/2022");
    cy.get(".odd > :nth-child(9)").should("contain", "1/24/2025");
    cy.get(".odd > :nth-child(10)").should("contain", "Full Board (Meeting)");
    cy.get("#primaryName399064").should("contain", "Connolly, Sarah");
    cy.get(".odd > :nth-child(13)").should("contain", "Approved");
    cy.get(".odd > :nth-child(14)").should(
      "contain",
      "Baszucki Brain Research Fund"
    );

    //NEED TO EXTRACT THE URL FROM THE LINK AND PERFORM A CY VISIT.
    cy.get("#documentList > :nth-child(1) > a")
      .should("have.attr", "href")
      .then((href) => {
        cy.visit(Cypress.config().devTrunkBaseUrl + href);
      });
    //Verify Agenda
    cy.get(":nth-child(1) > :nth-child(1) > h2").should("contain", "Agenda");
    cy.get("#documentContainer > :nth-child(1) > :nth-child(1)").should(
      "be.visible"
    );
    cy.get('[data-outer="ol"][data-listtypeclass=""] > :nth-child(1)').should(
      "contain",
      "FULL BOARD REVIEWS"
    );
    cy.get(
      '[data-hid="445058B2433575FE13D840960643BBAC"] > :nth-child(1)'
    ).should("contain", "Promptly Reportable Information");
    cy.get(
      '[data-hid="445058B2433575FE13D840960643BBAC"] > :nth-child(3)'
    ).should("contain", "20-1632");
    cy.get(
      '[data-hid="BA8537478F92850B00BB83D3EFA78504"] > .containerBlock > :nth-child(1) > b'
    ).should("contain", "Primary Reviewer");
    cy.get(
      '[data-hid="445058B2433575FE13D840960643BBAC"] > .containerBlock > :nth-child(2) > b'
    ).should("contain", "Secondary Reviewer");
    cy.get(
      '[data-hid="445058B2433575FE13D840960643BBAC"] > .containerBlock > .btnNewBlock'
    ).should("contain", "Create Additional Block");
    cy.get(".titleBar").should("be.visible");

    //Justin and Todd do not have this access - Only Celeste
    /*
        cy.get("#lockedContainer").should(
          "contain",
          "Agenda is currently locked"
        );
        cy.get("#reason").should("be.visible");
        cy.get("#unlockDocument").should("contain", "Unlock");
        */
    cy.get('[style="display:inline-block;"] > strong').should(
      "contain",
      "Export Current:"
    );
    cy.get("#exportToPDF").should("contain", "PDF Document");

    //NAVIGATE BACK TO COMMITTEE AGENDA SCREEN
    cy.get("@committeeAgenda").then((url) => {
      cy.visit(url);
    });

    //Verify Minutes
    cy.get("#documentList > :nth-child(2) > a")
      .should("have.attr", "href")
      .then((href) => {
        cy.visit(Cypress.config().devTrunkBaseUrl + href);
      });

    cy.get("#documentContainer > :nth-child(1)").should("be.visible");
    //Justin and Todd do not have this access - Only Celeste
    /*
      cy.get("#reason").should("be.visible");
      cy.get("#lockedContainer").should("be.visible");
      cy.get("#sideBar > :nth-child(9)").should(
        "contain",
        "Minutes Locked By:"
      );
      cy.get("#sideBar > :nth-child(13)").should(
        "contain",
        "Minutes Publish Agenda Date:"
      );
      cy.get("#sideBar > :nth-child(16)").should(
        "contain",
        "History (Readonly):"
      );
      */
    cy.get('[style="display:inline-block;"] > strong').should(
      "contain",
      "Export Current:"
    );
    cy.get("#exportToPDF").should("be.visible");

    //NAVIGATE BACK TO COMMITTEE AGENDA SCREEN

    cy.get("@committeeAgenda").then((url) => {
      cy.visit(url);
    });
  });

  //})

  //});

  it("Committee Availability", () => {
    cy.viewport(1400, 750);
    cy.visit(Cypress.config().devTrunkBaseUrl);
    //cy.get('title')
    //  .invoke('text')
    //.should('equal', '\nIRB \n')
    cy.get("input#username.long")
      .type(IRBAnalyst)
      .should("have.value", IRBAnalyst);
    cy.get("input#password.long").type("test!{Enter}");
    cy.get("#reviewDateCalendar").should("be.visible");
    cy.get("#messageCenterBox").should("be.visible");
    cy.get(".expandView").should("be.visible");
    cy.get(".updateMessageLogs").should("be.visible");
    cy.get("#committeeAvailability").click();
    cy.get("#ui-dialog-title-calendarModal").should(
      "contain",
      "Availability for Committee Dates (View All)"
    );
    cy.get("table > :nth-child(4)").should("be.visible");
    cy.get("table > :nth-child(5)").should("be.visible");

    cy.get("#leftRail > strong").should("contain", "Committee Selector");
    cy.get("#committeeSelector > .selected").should("be.visible");
    cy.get('#committeeSelector > [data-committeeid="2"]').should("be.visible");
    cy.get('#committeeSelector > [data-committeeid="7"]').should("be.visible");
    cy.get('#committeeSelector > [data-committeeid="8"]').should("be.visible");
    cy.get('#committeeSelector > [data-committeeid="9"]').should("be.visible");
    cy.get('#committeeSelector > [data-committeeid="12"]').should("be.visible");
    cy.get('#committeeSelector > [data-committeeid="13"]').should("be.visible");
    //cy.get('#committeeSelector > [data-committeeid="14"]').should("be.visible")
    cy.get('#committeeSelector > [data-committeeid="16"]').should("be.visible");

    cy.get(".months-container > :nth-child(1)").should("be.visible");
    cy.get(".months-container > :nth-child(2)").should("be.visible");
    cy.get(".months-container > :nth-child(3)").should("be.visible");
    cy.get(".months-container > :nth-child(4)").should("be.visible");
    cy.get(".months-container > :nth-child(5)").should("be.visible");
    cy.get(".months-container > :nth-child(6)").should("be.visible");
    cy.get(".months-container > :nth-child(7)").should("be.visible");
    cy.get(".months-container > :nth-child(8)").should("be.visible");
    cy.get(".months-container > :nth-child(9)").should("be.visible");
    cy.get(".months-container > :nth-child(10)").should("be.visible");
    cy.get(".months-container > :nth-child(11)").should("be.visible");
    cy.get(".months-container > :nth-child(12)").should("be.visible");

    cy.get(
      ":nth-child(12) > .month > tbody > :nth-child(3) > :nth-child(2) > .day-content"
    ).click();
    cy.get(
      '[aria-labelledby="ui-dialog-title-unavailableModal"] > .ui-dialog-titlebar'
    ).should("contain", "Add Unavailability");
    cy.get("#unavailableModal > :nth-child(1) > :nth-child(1)").should(
      "contain",
      "Person:"
    );
    cy.get("#personUnavailable").should("be.visible");
    cy.get("#unavailableModal > :nth-child(2) > :nth-child(1)").should(
      "contain",
      "Date:"
    );
    cy.get("#committeeDate").should("be.visible");
    cy.get("#fullDay").should("be.visible");
    cy.get("#partialDay").should("be.visible");
    cy.get(".ui-dialog-buttonset > :nth-child(1)").should(
      "contain",
      "Update Unavailability"
    );
    cy.get(".ui-dialog-buttonset > :nth-child(2)").should("contain", "Cancel");
    cy.get("#partialDay").click();
    cy.get("#partialDateTime > :nth-child(2) > :nth-child(1)").should(
      "contain",
      "Arriving Late at:"
    );
    cy.get("#arrivingLate")
      .should("contain", "1:00 PM")
      .and("contain", "1:30 PM")
      .and("contain", "2:00 PM")
      .and("contain", "2:30 PM")
      .and("contain", "3:00 PM")
      .and("contain", "3:30 PM")
      .and("contain", "4:00 PM")
      .and("contain", "4:30 PM")
      .and("contain", "5:00 PM");
    cy.get("#partialDateTime > :nth-child(3) > :nth-child(1)").should(
      "contain",
      "Leaving Early at:"
    );
    cy.get("#leavingEarly")
      .should("contain", "1:00 PM")
      .and("contain", "1:30 PM")
      .and("contain", "2:00 PM")
      .and("contain", "2:30 PM")
      .and("contain", "3:00 PM")
      .and("contain", "3:30 PM")
      .and("contain", "4:00 PM")
      .and("contain", "4:30 PM")
      .and("contain", "5:00 PM");

    cy.get("#arrivingLate").select("1:30 PM");
    cy.get("#leavingEarly").select("4:30 PM");
    cy.get(
      '[aria-labelledby="ui-dialog-title-unavailableModal"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > :nth-child(1)'
    ).click();
    cy.get(".partialDay > .day-content").should("be.visible");

    cy.get(".partialDay > .day-content").click();
    cy.get("#fullDay").click();
    cy.get("#partialDateTime > :nth-child(2) > :nth-child(1)").should(
      "not.be.visible"
    );
    cy.get("#partialDateTime > :nth-child(3) > :nth-child(1)").should(
      "not.be.visible"
    );
    cy.get("#arrivingLate").should("not.be.visible");
    cy.get("#leavingEarly").should("not.be.visible");
    cy.get(
      '[aria-labelledby="ui-dialog-title-unavailableModal"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > :nth-child(1)'
    ).click();
    cy.get(":nth-child(3) > .notAttending > .day-content").should("be.visible");

    cy.get(":nth-child(3) > .notAttending > .day-content").click();
    cy.get("#fullDay").click();
    cy.get(
      '[aria-labelledby="ui-dialog-title-unavailableModal"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > :nth-child(1)'
    ).click();
    cy.get('[style=""] > .day-content').should("be.visible");
    cy.get(
      '[aria-labelledby="ui-dialog-title-calendarModal"] > .ui-dialog-titlebar > .ui-dialog-titlebar-close > .ui-icon'
    ).click();
  });
});
