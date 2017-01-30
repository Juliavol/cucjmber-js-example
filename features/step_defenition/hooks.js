module.exports = function() {
    // this.AfterFeature(function(a, b) {
    //     // return this.webDriver.quit();
    //     b();
    // });
    // This works and I have no idea why I should read the documentation :)
    this.setDefaultTimeout(60 * 1000);
};