// dont remove this command
Cypress.Commands.add('setupScenario', function(name) {
  Cypress.log({ message: name })
  cy.request('POST', Cypress.env("CALLBACK"), JSON.stringify({ scenario: name }))
});
