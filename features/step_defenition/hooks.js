

module.exports = function () {
  this.After(function() {
    return this.Webdriver.quit();
  });
  // This works and I have no idea why I should read the documentation :)
  this.setDefaultTimeout(60 * 1000);
};