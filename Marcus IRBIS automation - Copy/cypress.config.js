module.exports = {
  e2e: {
    
    "defaultCommandTimeout": 10000,
   
    "baseUrl": 'https://orisdev.research.unc.edu/irb_maint/',
    //"baseUrl": 'https://orisdev.research.unc.edu/irb/index.cfm?',
    //watchForFileChanges:false,
    failOnStatusCode: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here


/*
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://orisdev.research.unc.edu/irb_maint/index.cfm?event=admin.reviewWindow&reviewId=0&appId= '
  },
})
*/
      
    },
  },
};
