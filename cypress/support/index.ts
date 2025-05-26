Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
    // Intercept the specified PUT request and alias it as 'applicationLoad'
    cy.intercept({
        method: 'PUT',
        url: '/universal-robots/polyscopex-services/polyscopex-services/rest-api/applications',
        times: 1,
    }).as('applicationLoad');
    originalFn(url);
    const timeout = options?.timeout || 360000;
    cy.wait('@applicationLoad', { timeout: timeout });
    cy.get('[data-testid=app-container]', { timeout }).should('exist').and('be.visible');
});