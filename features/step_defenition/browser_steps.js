var seleniumWebdriver = require('selenium-webdriver');
module.exports = function () {

// i am on login admin  page  
  this.Given(/^I am on videmob DevEnv5 login page$/, function() {
    return this.driver.get('http://adserverjsonapi5.dimsem.com/user_login/admin');
  });

// Then I see "text"
  this.Then(/^I see "([^"]*)"$/, function (text) {
  var xpath = "//*[contains(text(),'" + text + "')]";
  var condition = seleniumWebdriver.until.elementLocated({id: 'error_msg'});
  return this.driver.wait(condition, 8000);
});
// set wrong email in field
 this.When(/^I set wrong email into input field(.*)"$/, function (text) {
   var wEmail = "Samion@cydersoft.com"
   this.driver.findElement({id: 'uemail'}).sendKeys("Samion@cydersoft.com");
  });
	
// set wrong password in field
 this.When(/^I set wrong password into input field(.*)"$/, function (text) {
   // var wPassword = "123455"
   this.driver.findElement({id: 'upw'}).sendKeys(123455);
  });

// i click on sign me in
  this.When(/^I click on text="([^"]*)"$/, function (text) {
    return this.driver.findElement({id: 'login'}).then(function(element) {
      return element.click();
    });
  });

};