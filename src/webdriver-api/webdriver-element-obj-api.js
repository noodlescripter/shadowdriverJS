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
const { conditionMapper } = require("./mapper/waitFor-condition/conditionMapper.js");

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
WebElement.prototype.click = async function (options = { jsClick: false, agrs: [] }) {
    const _timeout = options.timeout || 10000

    /**
     * this function is used to click on the element using js executor, so this is is completely seperate from the original click function webdriverjs or shadowdriverjs
     * 
     */
    if (options.jsClick === true) {
        console.log("[WebElement] Using JavaScript executor for click operation");
        await this.getDriver().executeScript("arguments[0].click();", this);
        return this; // posibly return the element is not needed
    }

    // Check if a condition is specified in the options

    const isClientGiven_condition = options.condition || options.options;

    /**
     * TODO: should go in the future release but not in the current release (2.0.2)
     */

    // if (isClientGiven_condition) {
    //     /**
    //      * Please do not add any hard wait like this.getDriver().sleep(1000) or this.getDriver().wait(1000)
    //      * add log for only testing purpose
    //      */
    //     const _options = isClientGiven_condition ? isClientGiven_condition : null; //if null then it will be undefined
    //     if (_options === null || _options === undefined) {
    //         console.log("No condition specified in options");
    //         throw new Error("No condition specified in options: function is: click()");
    //     }


    //     /**
    //      * TODO: Never use this code in production, this is only for testing purpose
    //      * TODO: will be removed in future, but if you want to use the original click function then you can use the original click function.
    //      * TODO: You can create or imporve the original click function in the shaowdriverjs or webdriverjs. I will be happy to approve the PR (Only for shadowdriverJS).
    //      */

    //     // //below code will be completely removed
    //     // if (_options === "isDisplayed") {
    //     //     //adding log for testing purpose
    //     //     console.log("Waiting to element to be displayed before clicking")

    //     //     // Wait for the element to be displayed
    //     //     await this.getDriver().wait(async () => {
    //     //         return await this.isDisplayed()
    //     //     }, _timeout)

    //     // } else if (_options === 'isVisible') {
    //     //     console.log("Waiting for element to be visible before performing click action")
    //     //     await this.getDriver().wait(until.elementIsVisible(this), _timeout)
    //     // } else if (_options === 'isClickable') {
    //     //     console.log("Waiting for element to be enable before performing click action")
    //     //     await this.getDriver().wait(until.elementIsEnabled(this), _timeout)
    //     // } else if (_options === 'isPresent') {
    //     //     console.log("Waiting for element to be present before performing click action")
    //     //     await this.getDriver().wait(async () => {
    //     //         return await this.isPresent()
    //     //     }, _timeout)

    //     // } else {
    //     //     console.log("Original Click function....")
    //     // }
    // }

    /**
     * ONLY return this if no error occurs, otherwise return error!!!!
     */
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
        if (_timeout) {
            console.log(`[WebElement] Wait timeout set to ${_timeout}ms`);
        }
        const isClientGiven_condition = options.condition || options.options;
        console.log(`[WebElement] Wait condition requested: ${isClientGiven_condition}`);
        
        if (isClientGiven_condition) {
            const _condition = options.condition || options.options;
            console.log(`[WebElement] Waiting for condition "${_condition}" with timeout ${_timeout}ms`);

            if (conditionMapper.GET_MATCHING_CONDITION(_condition)) {
                console.log(`[WebElement] Found matching condition: ${_condition}`);
                const _matchingCondition = conditionMapper.GET_MATCHING_CONDITION(_condition);
                
                if (_matchingCondition) {
                    console.log(`[WebElement] Executing wait with condition: ${_matchingCondition}`);
                    await this.getDriver().wait(until[_matchingCondition](this), _timeout);
                } else {
                    console.error(`[WebElement] Error: Invalid condition mapping for "${_condition}"`);
                    throw new Error(`Invalid condition provided: ${_condition}`);
                }
            } else {
                console.error(`[WebElement] Error: Unsupported condition "${_condition}"`);
                throw new Error(`Invalid condition provided: ${_condition}`);
            }
        } else {
            console.log("[WebElement] No wait condition specified in options");
        }

        return this;
    } catch (error) {
        console.error(`[WebElement] Wait operation failed: ${error.message}`);
        throw error;
    }
}


/**
 * 
 * TODO: in future release should be added
 */

// //function like foreach or each only to iterate over the elements and should be only called for element.all
// WebElement.prototype.each = async function (callback) {
//     const element = await this.getDriver().findElements(this);
//     for (let i = 0; i < element.length; i++) {
//         await callback(element[i], i);
//     }
//     return this;
// }


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