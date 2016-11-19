module.exports = function () {
  this.After(function() {
    return this.driver.quit();
  });
  this.setDefaultTimeout(60 * 1000);
};