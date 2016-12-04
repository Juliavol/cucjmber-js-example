var seleniumWebdriver = require('selenium-webdriver');

module.exports = function () {
  this.Given(/^I am on videmob DevEnv5 on vmvast page$/, function() {
    return this.driver.get('http://adservernodejs5.dimsem.com/vmvast');
  });

  this.Then(/^I should see "(.*)"$/, function (text) {
    var xpath = "//*[contains(text(),'" + text + "')]";
    var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    return this.driver.wait(condition, 5000);
  });
}