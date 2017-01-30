module.exports = function() {

    var driver = require('selenium-webdriver');
    var chrome = require('selenium-webdriver/chrome');



    var url = require('url');
    // i am on login admin  page  
    this.Given(/^I am on videmob DevEnv5 login page$/, function() {
        return this.driver.get('http://adserverjsonapi5.dimsem.com/user_login/admin');
    });

    // set wrong email in field
    this.When(/^I set wrong email into input field(.*)"$/, function(text) {
        this.driver.findElement({ id: 'uemail' }).sendKeys("Samion@cydersoft.com");
    });

    // set correct email in field
    this.When(/^I set correct email into input field(.*)"$/, function(text) {
        this.driver.findElement({ id: 'uemail' }).sendKeys("Semion@cydersoft.com");
    });

    // set wrong password in field
    this.When(/^I set wrong password into input field(.*)"$/, function(text) {
        this.driver.findElement({ id: 'upw' }).sendKeys(123455);
    });

    // set correct password in field
    this.When(/^I set correct password into input field(.*)"$/, function(text) {
        this.driver.findElement({ id: 'upw' }).sendKeys(123456);
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

    this.Given(/^I am logged on to Admin Dashboard$/, function() {
        this.driver.get('http://adserverjsonapi5.dimsem.com/admin/dashboard');
        this.driver.wait(this.driver.getTitle('Dashboard'), 2000);

    });
};