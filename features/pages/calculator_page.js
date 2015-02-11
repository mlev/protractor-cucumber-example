
var CalculatorPage = function() {

  this.get = function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  };

  this.setFirstValue = function(value) {
    element(by.model('first')).sendKeys(value);
  };

  this.setSecondValue = function(value) {
    element(by.model('second')).sendKeys(value);
  };

  this.setOperator = function(value) {
    element(by.model('operator')).element(by.cssContainingText('option', value)).click();
  };

  this.getResult = function() {
    return element(by.binding('latest')).getText();
  };

  this.clickGo = function() {
    element(by.id('gobutton')).click()
  }
};

module.exports = CalculatorPage;
