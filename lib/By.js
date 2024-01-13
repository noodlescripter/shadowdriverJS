const {By} = require('selenium-webdriver');

var by = {
    xpath: (locator)=>{
        return By.xpath(locator)
    },
    id: (locator) => {
        return By.id(locator);
    },
    css: (locator) =>{
        return By.css(locator);
    },
    name: (locator) =>{
        return By.name(locator);
    },
    text: (givenText) =>{
        return this.xpath(`//*[normalize-space(text())="${givenText}"]`);
    },
    linkText:(givenText) =>{
        return By.linkText(givenText);
    },
    partialText: (givenText) =>{
        return By.partialLinkText(givenText);
    },
    buttonText: (givenText) =>{
        return this.xpath(`//button[normalize-space(text())='${givenText}']`);
    },
}

module.exports = by;