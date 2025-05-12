const { expect } = require("chai");
const { element_strategy } = require("../src/elementStrategy/elementStrategy");
const jest = require('jest-mock');

// Mock the driver object
const driver = {
    findElement: jest.fn(),
    findElements: jest.fn()
};

describe("test element strategy", () => {
    let elementObj;

    beforeEach(() => {
        // Reset the mock implementations before each test
        driver.findElement.mockReset();
        driver.findElements.mockReset();
        
        // Initialize element object with the mock driver
        elementObj = element_strategy(driver);
    });

    it("should return a web element object", async function() {
        const locator = { xpath: "//div" };
        driver.findElement.mockResolvedValue({ elementType: "element", locator });

        const webElement = await elementObj("element", locator);
        expect(webElement).to.be.an("object");
        expect(webElement.elementType).to.equal("element");
    });

    it("should return multiple elements", async function() {
        const locators = [{ xpath: "//div" }, { xpath: "//span" }];
        driver.findElements.mockResolvedValue(locators.map(locator => ({ elementType: "elements", locator })));

        const webElements = await elementObj.all("elements", locators);
        expect(webElements).to.be.an("array");
        expect(webElements[0].elementType).to.equal("elements");
    });
});