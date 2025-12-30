const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "cypress/reports/cucumber",   // folder containing JSON files
  reportPath: "cypress/reports/html",    // OUTPUT FOLDER (not file)
  reportName: "Cypress Cucumber Report",

  metadata: {
    browser: {
      name: "chrome",
      version: "latest"
    },
    device: "GitHub Actions Runner",
    platform: {
      name: "Ubuntu",
      version: "22.04"
    }
  }
});
