const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',//for html reports
  reporterOptions: {
    embeddedScreenshots: true,
    saveAllAttempts:true,
  }
  ,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on);//for reports
      

    },
  },
});
