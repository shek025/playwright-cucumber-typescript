@login @regression
Feature: Login to Sauce application with different users
  JIRA_ID: DemoProj_1234

  Background:
    Given User navigates to sauce demo application
   
  Scenario Outline: As a Authenticated Users I login to applcation
    When User enter the username as "<username>"
    And User enter the password as "<password>"
    Then User click on the login button
    Then I verify Product page displays
    When I logout user
    Then I verify user is successfully logged out
    Examples:
      | username                | password     |
      | standard_user           | secret_sauce |
      | problem_user            | secret_sauce |
      | performance_glitch_user | secret_sauce |


  Scenario Outline: As a Locked out user I try to login to applcation
    When User enter the username as "<username>"
    And User enter the password as "<password>"
    Then User click on the login button
    And I verify error message "<errorMsg>" is displayed
      Examples:
        | username        | password     | errorMsg                                            |
        | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out. |