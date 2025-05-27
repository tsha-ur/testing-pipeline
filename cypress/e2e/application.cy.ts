describe("Verify the application node", () => {
    it('Visit the application page and verify the application node', () => {'' +
        // Go to the home page
        cy.visit('/')
        // Navigate to the application page.
        cy.get('[data-testid="nav-menu-application"]').scrollIntoView().should('not.be.disabled').should('be.visible').click();
        // Find my_urcap_id application node and press on it
        cy.get('[data-testid="application.nodes.my-company-id-my-urcap-id-my-urcap-id-app.title_blurb"]').scrollIntoView().should('be.visible').click();
        // Verify that the title is correct
        cy.get('[data-testid="application_contribution_title"]').contains("My Urcap Id App")
    })
})