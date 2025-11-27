Feature: Login Test

  Scenario: Valid login
    Given I open login page
    When I enter valid credentials
    Then I should see dashboard

  Scenario: Create service
    Given i Navigate to service page
