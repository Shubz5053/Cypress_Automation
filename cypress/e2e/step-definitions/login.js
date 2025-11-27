const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

beforeEach(() => {
  cy.restoreLocalStorage();
});



Given("I open login page", () => {
  cy.visit("/sign-in");
});

When("I enter valid credentials", () => {
  cy.get("#email").type("shubhamsitnew01@yopmail.com");
  cy.get("#password").type("Admin@123");
  cy.get("button[type='submit']").click();
});

Then("I should see dashboard", () => {
  cy.url().should("include", "/employer/jobs-page");
});

Given("i Navigate to service page", () => {
  cy.visit("/employer/services")
  cy.get("a[id='menuWraparound']").eq(0).click()
})

afterEach(() => {
  cy.saveLocalStorage();
});
