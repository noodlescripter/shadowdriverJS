const {By} = require('selenium-webdriver');

var by = {
    xpath: (locator)=>{ return By.xpath(locator) }
}

module.exports = by;