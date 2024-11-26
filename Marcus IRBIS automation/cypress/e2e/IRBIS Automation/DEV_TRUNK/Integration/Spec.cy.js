
//reference types="cypress" />
describe('window open', function () {
    it('opens a new window with page1', function () {
      // window.open is called on click
      // thus we can create method stub after the cy.visit
      // but before cy.click
      cy.visit('/index.html')
      cy.window().then((win) => {
        cy.stub(win, 'open').as('windowOpen')
      })
  
      cy.get('#open-window').click()
      cy.get('@windowOpen').should('be.calledWith', 'page1.html')
    })
  })

  "(new url)https://orisdev.research.unc.edu/irb/nullindex.cfm?event=admin.review.pageReview&appid=414897&reviewId=0&eformreviewid=0&area=1&jsexec=&rand=0.8544914106670098"
