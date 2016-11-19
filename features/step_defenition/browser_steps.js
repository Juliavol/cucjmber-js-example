var seleniumWebdriver = require('selenium-webdriver');

module.exports = function () {
  this.Given(/^I am on the Cucumber.js training page$/, function() {
    return this.driver.get('https://cucumber.io/training');
  });

  this.When(/click on "([^"]*)"$/, function (text) {
    return this.driver.findElement({linkText: text}).then(function(element) {
      return element.click();
    });
  });

  this.Then(/^I should see "([^"]*)"$/, function (text) {
    var xpath = "//*[contains(text(),'" + text + "')]";
    var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    return this.driver.wait(condition, 5000);
  });

  this.Then(/^I should recive a file called "([^"]*)"/, function(file_name){
   var condition = seleniumWebdriver.until.urlIs("https://cucumber.io/"+file_name)
   return this.driver.wait(condition, 5000);
  })
};