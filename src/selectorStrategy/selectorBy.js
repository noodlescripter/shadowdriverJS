// Import the 'By' class from 'selenium-webdriver' to locate elements using various strategies.
const { By } = require('selenium-webdriver');

/**
 * The 'by' object contains methods to locate elements in the DOM using different strategies (e.g., by XPath, ID, CSS, etc.).
 * It serves as a simplified and reusable utility for finding elements.
 */
const by = {
    // Locates an element using XPath.
    xpath: locator => By.xpath(locator),

    // Locates an element by its 'id' attribute.
    id: locator => By.id(locator),

    // Locates an element using a CSS selector.
    css: locator => By.css(locator),

    // Locates an element by its 'name' attribute.
    name: locator => By.name(locator),

    /**
     * Locates an element by its exact text content. The text is normalized to remove extra whitespace.
     * Uses XPath to search for any element with the given text.
     *
     * @param {string} givenText - The text content of the element to locate.
     * @returns {object} - The WebDriver locator for the element matching the text.
     */
    text: givenText => by.xpath(`//*[normalize-space(text())="${givenText}"]`),

    // Locates a link by its exact text.
    linkText: givenText => By.linkText(givenText),

    // Locates a link by partial text (useful when the full text is not known).
    partialText: givenText => By.partialLinkText(givenText),

    /**
     * Locates a button by its exact text content. The text is normalized to remove extra whitespace.
     * Uses XPath to find the button element matching the given text.
     *
     * @param {string} givenText - The text content of the button to locate.
     * @returns {object} - The WebDriver locator for the button with the given text.
     */
    buttonText: givenText => by.xpath(`//button[normalize-space(text())='${givenText}']`)
};

// Export the 'by' object so that it can be used to locate elements in other parts of the application.
module.exports = by;