const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const { NodeModulesPolyfillPlugin } = require('@esbuild-plugins/node-modules-polyfill');
async function setupNodeEvents(on, config) {

  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createBundler({
      plugins: [NodeModulesPolyfillPlugin(), createEsbuildPlugin.default(config)],
    })
  );
  return config;
}


module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "https://sit.careerequity.com/",
    pageLoadTimeout: 70000,
    defaultCommandTimeout: 70000,
    watchForFileChanges: false
  },
});