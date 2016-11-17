Feature: Example feature
  given I am on the Cucumber.js training page
  I want to make sure I can go to the cucumber website 
  and have documentation on Cucumber training
  
  So that I can concentrate on building awesome applications

  Scenario: Reading documentation
    Given I am on the Cucumber.js training page
    I should see "Learn BDD and Cucumber from the world's leading experts"
    Then I should click on "Download BDD Kickstart white paper"