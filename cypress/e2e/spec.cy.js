describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.console.log("hai");
    cy.console.log("hai");
  })
})