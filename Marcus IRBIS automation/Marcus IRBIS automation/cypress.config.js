const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "defaultCommandTimeout": 10000,
   
    "devMaintBaseUrl": 'https://orisdev.research.unc.edu/irb_maint/',
    "devTrunkBaseUrl": 'https://orisdev.research.unc.edu/irb/',
    "stageTrunkBaseUrl": 'https://orisstage.research.unc.edu/irb/',
  },
   
 

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  });