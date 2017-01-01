var seleniumWebdriver = require('selenium-webdriver');
// i am on login admin  page
module.exports = function () {
  this.Given(/^I am on videmob DevEnv5 login page$/, function() {
    return this.driver.get('http://adserverjsonapi5.dimsem.com/user_login/admin');
  });
// when I see "admin Panel"
  this.When(/^I see "(.*)"$/, function (text) {
    var xpath = "//*[contains(text(),'" + text + "')]";
    var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    return this.driver.wait(condition, 5000);
  });
// set wrong email in field
 this.Then(/^I insert wrong email into text field"(.*)"$/, function (text) {
   this.d­riv­er.f­in­dEl­eme­nt({id: 'uemail'}­).setT­ext('Samion@cydersoft.com'); 
  });
	
// set wrong password in field
 this.Then(/^I insert wrong email into text field"(.*)"$/, function (text) {
   this.d­riv­er.f­in­dEl­eme­nt({id: 'upw'}­).setT­ext('12345'); 
  });

// i click on sign me in
   this.When(/^click on "([^"]*)"$/, function (text) {
    return this.driver.findElement({linkText: text}).then(function(element) {
      return element.click();
  });

// I verify I am on Admin login page 
  This.Then(/^I am on Publisher login page$/, function() {
    return this.driver.get('http://adserverjsonapi5.dimsem.com/user_login/admin');
  });

//then I see "Dashboard"

  this.Then(/^I see "(.*)"$/, function (text) {
    var xpath = "//*[contains(text(),'" + text + "')]";
    var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    return this.driver.wait(condition, 5000);
  });
   };
