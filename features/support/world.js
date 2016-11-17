// var chrome = require('selenium-webdriver/chrome');
// var chromeDriverPath = require('chromedriver').path;
// chrome.setDefaultService(new chrome.ServiceBuilder(chromeDriverPath).build())

var webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    firefox = require('selenium-webdriver/firefox');

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    // .setChromeOptions(/* ... */)
    // .setFirefoxOptions(/* ... */)
    .build();

function CustomWorld() {
  driver.manage().timeouts().implicitlyWait(30000);
  // this.driver = new chrome.Driver()
  this.driver = driver
}

module.exports = function() {
  this.World = CustomWorld;
};