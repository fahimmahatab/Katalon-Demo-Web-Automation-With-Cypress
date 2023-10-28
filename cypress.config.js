const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter:'cypress-mochawesome-reporter',
  video: true,
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      config.specPattern = [
        'cypress/e2e/LoginTest.cy.js',
        'cypress/e2e/MakeAppointmentTest.cy.js'
      ]
      return config;
    },
  },
});
