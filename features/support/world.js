// var chrome = require('selenium-webdriver/chrome');
// var chromeDriverPath = require('chromedriver').path;
// chrome.setDefaultService(new chrome.ServiceBuilder(chromeDriverPath).build())

var webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome');

var chromeCapabilities = webdriver.Capabilities.chrome();
//setting chrome options to start the browser fully maximized
var chromeOptions = {
    'args': ['--test-type', '--start-maximized', '--incognito']
};
chromeCapabilities.set('chromeOptions', chromeOptions);
var driver = new webdriver.Builder().withCapabilities(chromeCapabilities).build();

function CustomWorld(params) {
    driver.manage().timeouts().implicitlyWait(30000);
    // this.driver = new chrome.Driver()
    this.driver = driver
}

module.exports = function() {
    this.World = CustomWorld;
};