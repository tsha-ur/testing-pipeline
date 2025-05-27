describe("Verify the program node", () => {
    it('Visit the program page and insert the program node', () => {
        cy.visit('/')
        // Go to the program page
        cy.get('[data-testid="nav-menu-program"]').should('not.be.disabled').should('be.visible').click();
        //  Press the insert-point-into button
        cy.get('[data-testid="insertion-point-into"]').should('not.be.disabled').should('be.visible').click();
        // Select the urcap program node
        cy.get('[data-testid="command_my-company-id-my-urcap-id-my-urcap-id-prg"]').should('not.be.disabled').should('be.visible').click();
    })
})