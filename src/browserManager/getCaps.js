// Import the configuration parser to load settings from the provided configuration file.
const {_conf} = require('../configParser/configParser.js');

/**
 * Function to extract browser capabilities from the specified configuration file.
 *
 * @param {string} _name - The name of the configuration file. If not provided, defaults to 'shadow.conf.js'.
 * @returns {object} - The browser capabilities extracted from the configuration file.
 * @throws {Error} - Throws an error if the configuration file does not contain valid browser capabilities.
 */
function _caps(_name) {
    // Set a default configuration file if none is provided, defaulting to 'shadow.conf.js'.
    console.log("File name: ", _name)
    const path = require(_name);
    // Extract the 'capabilities' property, which holds the browser-specific settings needed to launch a browser.
    const _browser_caps = path.capabilities;

    // Validate that browser capabilities are present. If not, throw an error to prevent further execution.
    if (!_browser_caps) {
        throw new Error('Browser capabilities not found'); // Critical: Cannot proceed without browser capabilities.
    }

    // Return the browser capabilities so they can be used to configure and launch the browser in another part of the app.
    return _browser_caps;
}

// Export the _caps function to make it available for use in other modules.
module.exports = {_caps};