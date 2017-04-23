Feature: Admin Dashboard
  try to login with the following cases:
  incorrect email + incorrect password
  incorrect email + correct password
  correct email + incorrect password
  correct email + correct password
  So that I can concentrate on building awesome applications
  
  @debug-dialog
Scenario: 1st Failed admin login
    Given I am on "http://adserverjsonapi5.dimsem.com/user_login/admin" page
    When I set "samion@cydersoft.com" into input field "uemail"
    When I set "111111" into input field "upw"
    When I click on text="Sign me in"
    Then I get an error "Your username or password is incorrect."
  
Scenario: 2nd Failed admin login
    Given I am on "http://adserverjsonapi5.dimsem.com/user_login/admin" page
    When I set "samion@cydersoft.com" into input field "uemail"
    When I set "123456" into input field "upw"
    When I click on text="Sign me in"
    Then I get an error "Your username or password is incorrect."

Scenario: 3rd Failed admin login
    Given I am on "http://adserverjsonapi5.dimsem.com/user_login/admin" page
    When I set "semion@cydersoft.com" into input field "uemail"
    When I set "122222" into input field "upw"
    When I click on text="Sign me in"
    Then I get an error "Your username or password is incorrect."

Scenario: successful admin login
    Given I am on "http://adserverjsonapi5.dimsem.com/user_login/admin" page
    When I set "semion@cydersoft.com" into input field "uemail"
    When I set "123456" into input field "upw"
    When I click on text="Sign me in"
    Then I am logged on to "Dashboard"