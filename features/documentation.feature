Feature: Example feature
  given I am on the Cucumber.js training page
  I want to make sure I can go to the cucumber website 
  and have documentation on Cucumber training
  
  So that I can concentrate on building awesome applications
  
  @debug-dialog
  Scenario: Reading documentation
    Given I am on the Cucumber.js training page
    When I click on "Download BDD Kickstart white paper"
    Then I should recive a file called "bdd-kickstart.pdf"