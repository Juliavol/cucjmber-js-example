Feature: Admin Dashboard
  try to login with the following cases:
  incorrect email + incorrect password
  incorrect email + correct password
  correct email + incorrect password
  correct email + correct password
  So that I can concentrate on building awesome applications
  
  @debug-dialog
  Scenario: test admin login
    Given I am on videmob DevEnv5 login page
    When I insert wrong email into text field id="uemail"
    When I insert wrong password into text field name="upw"
    When I click on "Sign me in"
    Then I see "Your username or password is incorrect."
  