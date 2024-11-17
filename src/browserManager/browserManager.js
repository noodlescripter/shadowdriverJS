// Import the necessary modules for fetching browser capabilities and building the WebDriver instance.
const {_caps} = require('./getCaps.js');
const { Builder } = require('selenium-webdriver');

/**
 * Function to manage the initialization of the browser instance.
 *
 * @param {string} _name - Optional. The name of the configuration file that contains browser capabilities. Defaults to 'shadow.conf.js' if not provided.
 * @returns {object} - The initialized WebDriver instance for the browser.
 * @throws {Error} - Throws an error if the browser could not be initialized.
 */
async function _manager(_name) {
    // Variable to store the initialized WebDriver instance, set to null initially.
    let _local_browser_init = null;

    // If a configuration file name is not provided, default to using 'shadow.conf.js'.
    // Fetch the browser configuration (capabilities) from the provided configuration file.
    const _main = _caps(_name);

    // Ensure that the configuration data exists and is of type 'object'.
    if (_main && typeof _main === 'object') {

        // Extract the browser name (e.g., 'chrome', 'firefox') from the configuration.
        const _browser = _main.browserName;
        console.log("Attempting to launch:", `${_browser} browser.`);

        // Check if the specified browser is Chrome, as this is the only supported browser in this implementation.
        if (_browser === "chrome") {

            // Check if Chrome-specific options (like headless mode, window size, etc.) are provided in the configuration.
            if (_main['goog:chromeOptions']) {
                console.log('Chrome options detected.');

                // Initialize the WebDriver instance with the Chrome capabilities.
                _local_browser_init = new Builder().withCapabilities(_main).build();
                
            } else {
                // If no Chrome options are found, log a message and proceed without them.
                console.log('No Chrome options provided.');
            }

            // Redundant check to ensure Chrome options are handled, with a fallback to the default settings.
            if (!_main['goog:chromeOptions']) {
                console.log('No Chrome options detected. Using the ShadowDriverJS default settings.');
                // Initialize the WebDriver with default options if no Chrome options are present.
                _local_browser_init = new Builder().withCapabilities(_main).build();
            }
        } else {
            // Log an error if the browser is not Chrome (as other browsers are not supported in this code).
            console.log('Unsupported browser:', _browser);
            console.log('Please raise a support ticket to handle this issue!');
        }
    }

    // If the WebDriver was successfully initialized, return the instance for further use.
    if (_local_browser_init) {
        return _local_browser_init;
    }

    // If the browser initialization fails, throw an error indicating failure.
    throw new Error("Failed to initialize the browser.");
}

// Export the _manager function so it can be used in other modules within the application.
module.exports = { _manager };