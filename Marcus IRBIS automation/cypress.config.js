const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "defaultCommandTimeout": 10000,
   
    "baseUrl": 'https://orisdev.research.unc.edu/irb/',
    //"baseUrl": 'https://orisdev.research.unc.edu/irb_maint/',
    //"baseUrl": 'https://orisstage.research.unc.edu/irb/',


    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
