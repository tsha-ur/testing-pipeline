const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'http://localhost',
        specPattern: 'cypress/e2e/**/*.cy.ts',
        supportFile: 'cypress/support/index.ts',
        viewportHeight: 800,
        viewportWidth: 1280,
        waitForAnimations: true,
        animationDistanceThreshold: 50,
    },
});