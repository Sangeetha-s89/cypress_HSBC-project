const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.hsbc.co.in/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
