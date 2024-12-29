// Import the _manager function from the browserManager module, which is responsible for initializing WebDriver instances.
const { _manager } = require('../browserManager/browserManager');

/**
 * Function to manage WebDriver initialization and retrieve browser capabilities.
 *
 * @param {string} _name - The name of the configuration file used for WebDriver initialization.
 * @returns {object} - Returns an object containing the initialized WebDriver instance and its browser capabilities.
 * @throws {Error} - Throws an error if no configuration file is provided or if WebDriver initialization fails.
 */
async function _driver_manager(_name) {
    // Ensure a configuration file name is provided. If not, throw an error to stop execution.
    if (!_name) {
        throw new Error('No configuration file provided');
    }

    try {
        // Initialize the WebDriver using the _manager function, passing the configuration file name.
        const _driver =  await _manager(_name);

        // Retrieve the browser capabilities from the initialized WebDriver instance.
        // Log the capabilities to the console for debugging and verification purposes.

        // Return an object containing both the WebDriver instance (_driver) and its capabilities (caps).
        return (await _driver)

    } catch (driver_is_null_error) {
        // Catch any errors related to the WebDriver initialization and throw a descriptive error.
        throw new Error(driver_is_null_error);
    }
}

module.exports = { _driver_manager };