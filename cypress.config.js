const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    "reporter": "mochawesome",
    "reporterOptions": {
      "reportDir": "cypress/reports",
      "overwrite": false,
      "html": false,
      "json": true
    },

    env: {

      "clientUrl": "https://opensource-demo.orangehrmlive.com/",
      "adminUrl": "https://admin.opensource-demo.orangehrmlive.com/"

    },
    "specPattern": "**/*.feature",
    "defaultCommandTimeout": 4000,
    "videoCompression": 32,
    "chromeWebSecurity": false,
    "includeShadowDom": true,
    "video": false,
    "projectId": "ovfh44",
    "retries": {
    
      "runMode": 2,
      
      "openMode": 4
    },
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
});
