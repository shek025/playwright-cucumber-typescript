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
    When I add a product to cart
    Then I verify product is added to cart successfully
    When I go to card
    And I input all details for checkout
    Then I Verify that order placed successfully

