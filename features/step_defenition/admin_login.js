module.exports = function() {

    var driver = require('selenium-webdriver');
    var chrome = require('selenium-webdriver/chrome');
    var url = require('url');

    // verify successful navigation to url  
    this.Given(/^I am on "([^"]*)" page$/, function(url) {
        return this.driver.get(url);
    });

    // set "value" in fieldname
    this.When(/^I set "([^"]*)" into input field "([^"]*)"$/, function(value, fieldId) {
        this.driver.findElement({ id: fieldId }).sendKeys(value);
    });

    // i click on sign me in
    this.When(/^I click on text="([^"]*)"$/, function(text) {
        return this.driver.findElement({ id: 'login' }).then(function(element, a) {
            element.click();
        });
    });

    // Then I see get error message
    this.Then(/^I get an error "([^"]*)"$/, function(text) {
        this.driver.findElements({ id: 'error_msg' });
        /* 
         this.driver.wait(condition, 1000);
         var xpath = "//*[contains(text(),'" + text + "')]";
         var condition = this.driver.findElements({ id: 'error_msg' });
         return this.driver.wait(condition, 8000);
         */
    });

    /* Then I am on logged into Admin Dashboard - 
    need to create a loop:
    while I don't see the dashboard title, 
    we need to go back and forth untill we do
    also  log how many attempts did it take */

    this.Given(/^I am logged on to "([^"]*)"$/, function(pageTitle) {
        var condition = driver.until.titleMatches(new RegExp(pageTitle, 'g'));
        return this.driver.wait(condition, 5000);
    });
};
/*
driver.getTitle().then(function(title) {

    if(expectedTitle === title){
        console.log("Verification Successful - The correct title is displayed on the web page.");
    }
    else{
        console.log("Verification Failed - An incorrect title is displayed on the web page.");
    }
});
*/