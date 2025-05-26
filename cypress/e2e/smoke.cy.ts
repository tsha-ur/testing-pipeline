describe('Basic smoke test', () => {
    it('Verify robot type on home page', () => {
        cy.visit("/")
        cy.get('[data-testid="run-robot-name"]').contains("UR3")
    });
});