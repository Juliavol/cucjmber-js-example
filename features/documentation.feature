Feature: Example feature
  given I am on videmob DevEnv5 on vmvast page 
  then page should return XML
  I want to verify the response is an empty VAST XML
  
  So that I can concentrate on building awesome applications
  
  @debug-dialog
  Scenario: sending VAST request
    Given I am on videmob DevEnv5 on vmvast page 
    Then I should see "<VAST version="2.0"/>"
