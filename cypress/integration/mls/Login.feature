Feature: Login to MLS

  Scenario: Opening a Google network page
    Given I open login page
    When I fill "email" field with "eduard.taran@valor-software.com" value
    And I fill "password" field with "TaranST123!" value
    And I should click on 'Login' button
