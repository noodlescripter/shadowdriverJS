const Mocha = require('mocha');
const { log, error, info } = require('console');
const ShadowReporter = require("../shadowReporter/shaowReporter");
const { _driver_manager } = require('../driverManager/driverManager');

/**
 * Function to determine whether a single or multiple spec files are provided.
 * @param {string|array} _file - The file or array of files to be executed in Mocha.
 * @returns {object} - Returns an object with `single` and `multi` properties indicating single or multiple files.
 */
function _get_spec_file(_file) {
    let single, multi;

    if (_file instanceof Array) {
        multi = _file;
    } else {
        single = _file;
    }

    return { single, multi };
}

/**
 * Function to initialize and configure Mocha with provided options.
 * @param {object} _conf_file - The configuration file containing Mocha options.
 * @param {string|array} _files - The file or array of files to add to the Mocha instance.
 * @returns {object} - Returns the initialized Mocha instance.
 */
function _frame_work_mocha(_conf_file, _files) {
    let mochaOptions, client_conf_file = null;

    if (_conf_file) {
        console.log(`Conf file is provided!!!!!!!!!`);
        client_conf_file = _conf_file;
    }

    // Check if the configuration file provides Mocha options
    if (client_conf_file.mochaOptions) {
        mochaOptions = _conf_file.mochaOptions;
    }

    let mocha_init = mochaOptions ? new Mocha({ mochaOptions }) : new Mocha();
    if (!mochaOptions?.timeout) {
        console.info('Timeout provided......... LOCAL TESTING');
        mocha_init.timeout(60000); // Default timeout of 60 seconds
    }

    // Run the Mocha tests and handle results asynchronously
    const { single, multi } = _get_spec_file(_files);

    return new Promise(async (resolve, reject) => {
        const requireConf = require(client_conf_file);
        const { _globals } = require('../globals/globals');
        log('Yeaeyaa conf file in my hand', _conf_file);
        if (mocha_init) {
            mocha_init._cleanReferencesAfterRun = false;
        } else {
            console.log('return me clean mocha run')
        }
        mocha_init.reporter(ShadowReporter);
        try {
            let specFiles = single ? [single] : multi;
            log("Parsed spec= ", specFiles);
            const logger_mocha_cap = requireConf.logger.mocha_cap.log === true;
            if (logger_mocha_cap) {
                log('Mocha init', mocha_init)
            }
            for (const [file_index, spec] of specFiles.entries()) {
                log(`Starting test for: ${spec}`);
                // **Open a new browser for each test file**
                const _driver = await _driver_manager(_conf_file);
                _globals(_driver);
                // Clear previously added files in mocha_init
                mocha_init.files = []; // Reset Mocha files to avoid state retention
                // Add the current spec file to Mocha
                mocha_init.addFile(spec);
                // Run the test for the current spec file
                if (_driver === null || !_driver) {
                    throw new Error("Driver is null, and I am not going to tell you why!!!! Down vote me, that is ok..... //TODO: Find why driver is null!!!!!")
                }
                await new Promise((resTest, rejTest) => {
                    const beforeHook = typeof requireConf.before;
                    if (beforeHook) {
                        log('Executing before hook')
                        requireConf.before();
                    }
                    const runner = mocha_init.run((failures) => {
                        if (failures > 0) {
                            error(`Test failed in ${spec}: ${failures} failures.`);
                        }
                        resTest(); // Move to the next test file once complete
                    });
                    // Handle test failures
                    runner.on('fail', (test, err) => {
                        console.error(`Test failed in file ${spec}: ${test.title}`);
                        console.error(`${err}`)
                    });
                    // Handle the end of all tests for the current file
                    runner.on('end', () => {
                        log(`Finished running tests in ${spec}`);
                        if (typeof requireConf.after === 'function') {
                            log('after hook is getting executed to close the browser');
                            requireConf.after(); // Close the browser
                        }
                        resTest(); // Resolve once the test run finishes
                        console.log('File index: ', file_index, 'specs: ', specFiles.length);
                        if (file_index === specFiles.length - 1)
                        {
                            if(requireConf.generate_report)
                            {
                                requireConf.generate_report();
                            }
                        }
                    });
                });
            }
            resolve(); // Resolve the main promise after all test files are run
        } catch (err) {
            console.error('Critical error during test execution:', err);
            reject(err); // Reject only if a critical error occurs outside of tests
        }
    });
}

module.exports = { _frame_work_mocha, _get_spec_file };