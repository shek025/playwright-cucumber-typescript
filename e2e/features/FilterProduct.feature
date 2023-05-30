  @products @regression

  Feature: Verify Product page functionality
    JIRA_ID: DemoProj_1235

  Background:
    Given User navigates to sauce demo application

  Scenario Outline: As a Authenticated Users I Filter the products based on different filter criteria
    When I login with valid username and password
      | username      | password     |
      | standard_user | secret_sauce |
    Then I verify Product page displays
    When I filter the product with below filter criteria
      | filter              |
      | Name (Z to A)       |
      | Name (A to Z)       |
      | Price (low to high) |
      | Price (high to low) |
