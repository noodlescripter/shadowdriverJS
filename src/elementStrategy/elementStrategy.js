/**
 * Function to handle element location strategies for a given WebDriver instance.
 * It allows for locating both single and multiple elements using WebDriver commands.
 *
 * @param {object} _feed_driver - The WebDriver instance that should be used for element interactions.
 * @throws {Error} - Throws an error if the WebDriver instance is not initialized.
 * @returns {function} - Returns a function to locate single elements, with an additional method for locating multiple elements.
 */
function element_strategy(_feed_driver) {
    // Check if the WebDriver instance is initialized. If not, throw an error to prevent further execution.
    if (_feed_driver === null) {
        throw new Error("Browser is not initialized.");
    }

    /**
     * Function to locate a single element using WebDriver.
     *
     * @param {object} _ - The locator strategy (e.g., XPath, ID, CSS) to find the element.
     * @returns {object} - The WebDriver element located based on the provided strategy.
     * @throws {Error} - Throws an error if WebDriver fails to locate the element.
     */
    function element(_) {
        try {
            // Call WebDriver's findElement method to locate a single element based on the provided locator strategy.
            //return _feed_driver.findElement.call(_feed_driver, _);
            return _feed_driver.findElement(_);
        } catch (e) {
            // Propagate the error if any occurs during the element lookup process.
            throw e;
        }
    }

    /**
     * Method to locate multiple elements using WebDriver.
     * This method is added to the 'element' function to handle multiple element lookups (e.g., using class names, tags, etc.).
     *
     * @param {object} _ - The locator strategy (e.g., XPath, ID, CSS) to find multiple elements.
     * @returns {array} - An array of WebDriver elements located based on the provided strategy.
     * @throws {Error} - Throws an error if WebDriver fails to locate the elements.
     */
    element.all = function (_) {
        try {
            // Call WebDriver's findElements method to locate multiple elements based on the provided locator strategy.
            return _feed_driver.findElements(_);
        } catch (e) {
            // Propagate the error if any occurs during the multiple element lookup process.
            throw e;
        }
    };

    // Return the 'element' function, which includes the 'all' method for locating multiple elements.
    return element;
}

// Export the 'element_strategy' function to be used in other parts of the application.
module.exports = { element_strategy };