const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'http://localhost',
        specPattern: 'cypress/e2e/**/*.cy.ts',
        supportFile: 'cypress/support/index.ts',
        video: true,
        videoCompression: 32,
        trashAssetsBeforeRuns: true,
    },
});