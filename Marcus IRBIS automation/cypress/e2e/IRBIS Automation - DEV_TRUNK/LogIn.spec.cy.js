// describe('empty spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })


//TEST LOGIN

describe('Heading Text', () => {
  it('contains the correct title', () =>{
      cy.visit('https://orisdev.research.unc.edu/irb/index.cfm');

     cy.get('title')
         .invoke('text')
         .should('equal', '\nIRB \n') 
        // .debug();
         
  });
});


//beforeEach method
/*
describe('Heading Text', () => {
    beforeEach (() => {
      cy.visit('https://orisdev.research.unc.edu/irb/index.cfm');

      cy.get('title')
          .invoke('text')
          .should('equal', '\nIRB \n') 
 });
*/


/*
describe('Heading Text', () => {
it('contains the correct title', () =>{
  //cy.visit('https://orisdev.research.unc.edu/irb/index.cfm'); USING BASE URL CONCEPT INSTEAD


 cy.get('title')
     .invoke('text')
     .should('equal', '\nIRB \n') 
});
});
*/

describe('Single Sign-on ONYEN', () => {
      it('Type in ONYEN', () =>{    
      cy.get('input#username.long')
      .type('mhannah1').should('have.value', 'mhannah1')
});
});

describe('Type Password', () => {
  it('Type Password', () =>{    
  cy.get('input#password.long')
  .type('Lordoflords!{Enter}')//.should('have.value', 'Lordoflords!')
 // cy.get('input#password.form-control').type('{enter}')  Clicks 
});
});

/*--COULD NOT GET THIS TO WORK
describe('Admin Buckets Screen Verification', () => {
  it('Contains Search Button', () =>{
    cy.get('input#searchButton')
    .should('contain', 'Search')
  });
});
*/


describe('Admin Buckets Screen FIND Button Verification', () => {
  it('Contains Find Button', () =>{
    cy.get('#bucketFinder')
    .should('contain', 'Find')
  });
});

 

describe('Admin Buckets Screen REFRESH Button Verification', () => {
  it('Contains Refresh Button', () =>{
    cy.get('#refreshData')
    .should('contain', 'Refresh')
  });
});





  
