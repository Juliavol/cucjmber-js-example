Feature: Admin Dashboard
  try to login with the following cases:
  incorrect email + incorrect password
  incorrect email + correct password
  correct email + incorrect password
  correct email + correct password
  So that I can concentrate on building awesome applications
  
  @debug-dialog
Scenario: 1st Failed admin login
    Given I am on videmob DevEnv5 login page
    When I set wrong email into input field id="uemail"
    When I set wrong password into input field id="upw"
    When I click on text="Sign me in"
    Then I get an error "Your username or password is incorrect."
  
Scenario: 2nd Failed admin login
    Given I am on videmob DevEnv5 login page
    When I set wrong email into input field id="uemail"
    When I set correct password into input field id="upw"
    When I click on text="Sign me in"
    Then I get an error "Your username or password is incorrect."

Scenario: 3rd Failed admin login
    Given I am on videmob DevEnv5 login page
    When I set correct email into input field id="uemail"
    When I set wrong password into input field id="upw"
    When I click on text="Sign me in"
    Then I get an error "Your username or password is incorrect."

Scenario: successful admin login
    Given I am on videmob DevEnv5 login page
    When I set correct email into input field id="uemail"
    When I set correct password into input field id="upw"
    When I click on text="Sign me in"
    Then I am on logged into Admin Dashboard