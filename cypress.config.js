const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8081/',
  },
  trashAssetsBeforeRuns: false
});
