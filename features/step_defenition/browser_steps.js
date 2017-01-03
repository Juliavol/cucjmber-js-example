var seleniumWebdriver = require('selenium-webdriver');
module.exports = function () {

// i am on login admin  page  
  this.Given(/^I am on videmob DevEnv5 login page$/, function() {
    return this.driver.get('http://adserverjsonapi5.dimsem.com/user_login/admin');
  });

// when I see "text"
  this.Then(/^I see "([^"]*)"$/, function (text) {
  var xpath = "//*[contains(text(),'" + text + "')]";
  var condition = seleniumWebdriver.until.elementLocated({Text: text});
  return this.driver.wait(condition, 8000);
});
// set wrong email in field
 this.When(/^I insert wrong email into text field(.*)"$/, function (text) {
   this.driver.findElement({id: 'uemail'}).setText('Samion@cydersoft.com'); 
  });
	
// set wrong password in field
 this.When(/^I insert wrong password into text field(.*)"$/, function (text) {
   this.driver.findElement({id: 'upw'}).setText('12345'); 
  });

// i click on sign me in
  this.Then(/^I click on "([^"]*)"$/, function (text, callback) {
    return this.driver.findElement({Text: text}).then(function(element) {
      return element.click();
    });
  });

};