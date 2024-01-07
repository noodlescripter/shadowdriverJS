const { expect } = require('chai');
const by = require('../lib/By'); // Replace with the actual path to your module

describe('Test Modules', () => {
    it('should return a valid XPath locator', () => {
        const xpathLocator = by.xpath('//div[@id="example"]');
        expect(xpathLocator).to.be.an('object'); // Check if it's an object
        expect(xpathLocator.using).to.equal('xpath'); // Check if it's an XPath locator
        expect(xpathLocator.value).to.equal('//div[@id="example"]'); // Check the XPath value
    });

    it('should handle dynamic locators', () => {
        const dynamicLocator = by.xpath('//div[@id="example"]/h1[text()="Hello, World!"]');
        expect(dynamicLocator).to.be.an('object'); // Check if it's an object
        expect(dynamicLocator.using).to.equal('xpath'); // Check if it's an XPath locator
        expect(dynamicLocator.value).to.equal('//div[@id="example"]/h1[text()="Hello, World!"]'); // Check the XPath value
    });
});
