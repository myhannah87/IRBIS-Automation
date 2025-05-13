const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "defaultCommandTimeout": 15000,
   
    //"devMaintBaseUrl": 'https://orisdev.research.unc.edu/irb_maint/',
    "devMaintBaseUrl": 'https://orisdev.research.unc.edu/irb_cb7_ph3/',
    "devTrunkBaseUrl": 'https://orisdev.research.unc.edu/irb/',
    "stageTrunkBaseUrl": 'https://orisstage.research.unc.edu/irb/',
  },
   
 

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  });