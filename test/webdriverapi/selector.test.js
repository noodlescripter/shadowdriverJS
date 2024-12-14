const {expect} = require('chai');
const by = require('../../src/selectorStrategy/selectorBy'); // Replace with the actual path to your module

describe('Test Library LIB', () => {
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
    it('should handle name locator', () => {
        const nameLocator = by.name('uniqueName');
        expect(nameLocator).to.be.an('object');
        expect(nameLocator.using).to.equal('css selector');
        expect(nameLocator.value).to.equal('*[name="uniqueName"]');
    });
    it('verify id locator',
        function () {
            const idLocator = by.id('uniqueID');
            expect(idLocator).to.be.an('object');
            expect(idLocator.using).to.equal('css selector');
            expect(idLocator.value).to.equal('*[id="uniqueID"]');
        });
    it('verify css selector',
        function () {
            const idLocator = by.css('.someClassName');
            expect(idLocator).to.be.an('object');
            expect(idLocator.using).to.equal('css selector');
            expect(idLocator.value).to.equal('.someClassName');
        });
});
