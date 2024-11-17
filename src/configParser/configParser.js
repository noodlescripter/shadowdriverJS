const path = require('path');

/**
 * Function to load and return the configuration file.
 *
 * @param {string} _name - The name of the configuration file. If not provided, defaults to 'shadow.conf.js'.
 * @returns {object} - The contents of the required configuration file.
 * @throws {Error} - Throws an error if the configuration file path is invalid or the file is not found.
 */
function _conf(_name) {
    // Ensure the _name argument is a string
    if (typeof _name !== 'string') {
        throw new TypeError(`Expected a string for the configuration file name, but received ${typeof _name}`);
    }

    // Get the current working directory (root of the project).
    const _root = process.cwd();

    // Create the full path to the configuration file using the root directory and the provided file name.
    // If no file name is provided, default to 'shadow.conf.js'.
    const _confPath = path.join(_root, _name || 'shadow.conf.js');

    // Log the full path of the configuration file (optional, useful for debugging).
    console.log("Config file path:", _confPath);
    
    // Dynamically require and return the contents of the configuration file.
    try {
        return _confPath;
    } catch (err) {
        throw new Error(`Configuration file not found at path: ${_confPath}`);
    }
}

// Export the _conf function to make it accessible in other modules.
module.exports = { _conf };