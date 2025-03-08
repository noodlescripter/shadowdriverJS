/**
 * Enhanced Selenium WebElement Extensions
 * 
 * This module extends the Selenium WebElement prototype with enhanced methods
 * for more reliable browser automation testing.
 * 
 * Features:
 * - Enhanced click method with conditional waiting
 * - New waitFor method with multiple wait condition types
 * - Flexible timeout options
 * 
 * @module selenium-webelement-extensions
 * @author hamim alam (hamimalam@outlook.com)
 */

/** 
 * Comments are written by Claude 3.7  Sonnet:)
*/

const { WebElement } = require('selenium-webdriver/lib/webdriver');
const { until } = require('selenium-webdriver');

// Store the original click method
const originalClick = WebElement.prototype.click;

/**
 * Enhanced click method with built-in waiting capabilities
 * 
 * @param {Object} options - Configuration options for the click action
 * @param {boolean} [options.jsClick] - Use JavaScript executor for clicking (useful for elements blocked by overlays)
 * @param {string} [options.condition] - Wait condition before clicking (isDisplayed, isVisible, isClickable, isPresent)
 * @param {number} [options.timeout=10000] - Max time to wait in milliseconds
 * 
 * @example
 * // Click with default settings
 * await element.click();
 * 
 * @example
 * // Click using JavaScript executor
 * await element.click({ jsClick: true });
 * 
 * @example
 * // Wait for element to be visible before clicking with 5 second timeout
 * await element.click({ condition: 'isVisible', timeout: 5000 });
 * 
 * @returns {Promise} Promise resolved when click is complete
 */
WebElement.prototype.click = async function (options = {}) {
    const _timeout = options.timeout || 10000
    if (options.jsClick) {
        console.log("clicking using js executor");
        await this.getDriver().executeScript("arguments[0].click();", this);
        return;
    }
    if (options.condition) {
        //await this.getDriver().sleep(1000)
        const _options = options.condition;
        if (_options === "isDisplayed") {
            console.log("Waiting to element to be displayed before clicking")
            await this.getDriver().wait(async () => {
                return await this.isDisplayed()
            }, _timeout)
        } else if (_options === 'isVisible') {
            console.log("Waiting for element to be visible before performing click action")
            await this.getDriver().wait(until.elementIsVisible(this), _timeout)
        } else if (_options === 'isClickable') {
            console.log("Waiting for element to be enable before performing click action")
            await this.getDriver().wait(until.elementIsEnabled(this), _timeout)
        } else if (_options === 'isPresent') {
            console.log("Waiting for element to be present before performing click action")
            await this.getDriver().wait(async () => {
                return await this.isPresent()
            }, _timeout)

        } else {
            console.log("Original Click function....")
        }
    }
    // Call the original click method
    return originalClick.call(this);
};

/**
 * Wait for element to satisfy specified condition
 * 
 * @param {Object} options - Configuration options for waiting
 * @param {string} [options.condition] - Wait condition type, available options:
 *   - elementIsEnabled, clickAble: Wait until element is enabled
 *   - elementIsClickable: Wait until element is clickable
 *   - elementIsVisible, isVisible: Wait until element is visible
 *   - elementSelected: Wait until element is selected (checkbox, radio)
 *   - elementNotEnabled: Wait until element is disabled
 *   - elementIsNotVisible, isNotVisible: Wait until element is not visible
 *   - elementNoSelected: Wait until element is not selected
 *   - isDisplayed: Wait until element is displayed
 *   - isPresent: Wait until element is present in DOM
 *   - isNotPresent: Wait until element is not present
 * @param {number} [options.timeout=10000] - Max time to wait in milliseconds
 * 
 * @example
 * // Wait for element to be visible with default timeout
 * await element.waitFor({ condition: 'isVisible' });
 * 
 * @example
 * // Wait up to 15 seconds for element to be clickable
 * await element.waitFor({ condition: 'elementIsClickable', timeout: 15000 });
 * 
 * @returns {WebElement} This element for chaining
 * @throws {Error} If wait times out or invalid condition is provided
 */
WebElement.prototype.waitFor = async function (options = {}) {
    try {
        const _timeout = options.timeout;
        if(_timeout){
            console.log("timeout given!!!!!!!!!!")
        }
        if (options.condition) {
           // await this.getDriver().sleep(1000)
            const _condition = options.condition;
            console.log(`Waiting for condition: ${_condition} with timeout: ${_timeout}ms`);

            // Handle each condition type explicitly
            if (_condition === "elementIsEnabled" || _condition === "clickAble") {
                console.log("Waiting for element to be enabled");
                await this.getDriver().wait(until.elementIsEnabled(this), _timeout);
            }
            else if (_condition === "elementIsClickable") {
                console.log("Waiting for element to be clickable");
                await this.getDriver().wait(until.elementIsEnabled(this), _timeout);
            }
            else if (_condition === "elementIsVisible" || _condition === "isVisible") {
                console.log("Waiting for element to be visible");
                await this.getDriver().wait(until.elementIsVisible(this), _timeout);
            }
            else if (_condition === "elementSelected") {
                console.log("Waiting for element to be selected");
                await this.getDriver().wait(until.elementIsSelected(this), _timeout);
            }
            else if (_condition === "elementNotEnabled") {
                console.log("Waiting for element to be disabled");
                await this.getDriver().wait(until.elementIsDisabled(this), _timeout);
            }
            else if (_condition === 'elementIsNotVisible' || _condition === "isNotVisible") {
                console.log("Waiting for element to not be visible");
                await this.getDriver().wait(until.elementIsNotVisible(await this), _timeout);
            }

            else if (_condition === 'elementNotSelected') {
                console.log("Waiting for element to not be selected");
                await this.getDriver().wait(until.elementIsNotSelected(this), _timeout);
            }
            else if (_condition === 'isDisplayed') {
                console.log("Waiting for element to be displayed");
                await this.getDriver().wait(async () => {
                    return await this.isDisplayed()
                }, _timeout);
            }
            else if (_condition === 'isPresent') {
                console.log("Waiting for element to be present");
                await this.getDriver().wait(async () => {
                    return await this.isDisplayed();
                }, _timeout);
            } else if (_condition === 'isNotPresent') {
                console.log("Waiting for element to be present");
                await this.getDriver().wait(async () => {
                    return !(await this.isDisplayed())
                }, _timeout);
            }
            else {
                console.error(`Invalid condition provided: ${_condition}`);
                throw new Error(`Invalid condition provided: ${_condition}`);

            }
        } else {
            console.log("No condition specified in options");
        }

        return this;
    } catch (error) {
        throw error
    }

}

/**
 * Guidelines for Contributors
 * ---------------------------
 * 
 * When extending or modifying these methods, please follow these guidelines:
 * 
 * 1. Maintain backward compatibility wherever possible
 * 2. Add thorough inline documentation and examples
 * 3. Consider adding new conditions rather than changing existing ones
 * 4. Follow the existing error handling pattern
 * 5. Add appropriate console logging for debugging
 * 6. Add unit tests for any new functionality
 * 
 * Known Issues:
 * - The isPresent condition in waitFor is currently using isDisplayed, which may not be correct
 * - The length check in waitFor may cause errors with some WebElement implementations
 * 
 * TODO:
 * - Add more robust error handling with detailed messages
 * - Add support for stale element handling
 * - Improve logging with configurable verbosity levels
 * - Add proper documentation for return values and exceptions
 */

module.exports = WebElement;