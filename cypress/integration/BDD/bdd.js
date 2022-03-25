const { Given, Then } = require('cypress-cucumber-preprocessor/steps');

Given('I am on the page "/login"', () => {
    cy.visit(url);
})

Then('I see "Google" in the title', () => {
    cy.title().should('contain', 'Google');
})
