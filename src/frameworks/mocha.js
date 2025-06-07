const Mocha = require("mocha")
const { log, error, info } = require("console")
const ShadowReporter = require("../shadowReporter/shaowReporter")
const { _driver_manager } = require("../driverManager/driverManager")
const chalk = require("chalk")
// Define some styles
const styles = {
  header: chalk.bold.underline.cyan,
  pass: chalk.green,
  fail: chalk.red,
  white: chalk.white,
  error: chalk.yellow,
  separator: chalk.gray,
}
/**
 * Function to determine whether single or multiple spec files are provided.
 * @param {string|array} _file - The file or array of files to be executed in Mocha.
 * @returns {object} - Returns an object with `single` and `multi` properties indicating single or multiple files.
 */
function _get_spec_file(_file) {
  return Array.isArray(_file) ? { multi: _file } : { single: _file }
}

/**
 * Function to initialize and configure Mocha with provided options.
 * @param {object} _conf_file - The configuration file containing Mocha options.
 * @param {string|array} _files - The file or array of files to add to the Mocha instance.
 * @returns {Promise} - Returns a promise that resolves when the test run is complete.
 */
async function _frame_work_mocha(_conf_file, _files) {
  const test_informations = [] // Initialize an empty array to keep track of test results
  let mochaOptions,
    client_conf_file = null

  if (_conf_file) {
    console.log(`Conf file is provided!!!!!!!!!`)
    client_conf_file = _conf_file
  }

  // Check if the configuration file provides Mocha options
  if (client_conf_file.mochaOptions) {
    mochaOptions = client_conf_file.mochaOptions
  }

  const { single, multi } = _get_spec_file(_files)
  const specFiles = single ? [single] : multi

  const requireConf = require(client_conf_file)
  const { _globals } = require("../globals/globals")

  return new Promise(async (resolve, reject) => {
    try {
      //need to run onPrepare hook if exist
      //TODO - in the future, we can add more hooks and seperate them in different modules
      if (typeof requireConf.onPrepare === "function") {
        log("Executing onPrepare hook")
        try {
          requireConf.onPrepare()
        } catch (err) {
          error("Error in onPrepare hook", err)
        }
      }

      await new Promise((resolve, reject) => {
        if (typeof requireConf.before === "function") {
          log("Executing before hook")
          try {
            requireConf.before()
            resolve()
          } catch (err) {
            error("Error in before hook", err)
            reject(err)
          }
        } else {
          resolve()
        }
      })

      /*    log("Parsed spec= ", specFiles)
      for(let  index = 0; index < specFiles.length; index++) {
        log(`Starting test for: ${specFiles[index]}`)
        //need to check if this is the last file
        const isLast = index === specFiles.length - 1
        if(isLast){
          log("Generating report");

        }
      } */
      let isLast = false

      for (const [index, spec] of specFiles.entries()) {
        log(`Starting test for: ${spec}`)
        isLast = index === specFiles.length - 1
        // Create a new Mocha instance for each test file
        const mocha_init = mochaOptions ? new Mocha(mochaOptions) : new Mocha()
        mocha_init.reporter(ShadowReporter) // only reporting the last spec res
        if (!mochaOptions?.timeout) {
          console.info("Timeout provided......... LOCAL TESTING")
          mocha_init.timeout(60000) // Default timeout of 60 seconds
        }

        // Open a new browser for each test file
        require("../webdriver-api/webdriver-element-obj-api")
        const _driver = await _driver_manager(_conf_file)
        _globals(_driver)
        // Add the test file
        mocha_init.addFile(spec)

        if (!_driver) {
          throw new Error("Driver is null. Check why.")
        }
        try {

          await new Promise(resolve => setTimeout(resolve, 2000));

          await new Promise((resTest) => {
            const runner = mocha_init.run((failures) => {
              if (failures > 0) {
                error(`Test failed in ${spec}: ${failures} failures.`)
                test_informations.push({
                  spec,
                  failures: true,
                  passed: false,
                  errors: null,
                })
              } else {
                test_informations.push({
                  spec,
                  failures: false,
                  passed: true,
                  errors: null,
                })
              }
              resTest()
            })

            // Handle the start of a test
            runner.on("start", (err) => {
              console.log(`on start: ${spec}`)
              if (requireConf.beforeTest === "function") {
                requireConf.beforeTest(err)
              }
            })

            // Handle test failures
            runner.on("fail", (test, err) => {
              console.error(`Test failed in file ${spec}: ${test.title}`)
              console.error(`${err}`)
              test_informations.push({
                spec,
                failures: true,
                passed: false,
                errors: err,
              })
            })

            // Handle the end of all tests for the current file
            runner.on("end", () => {
              log(`Finished running tests in ${spec}`)
              if (typeof requireConf.after === "function") {
                log("Executing after hook to close the browser")
                requireConf.after() // Close the browser
              }
            })
          })
        } catch (error) {
          console.error('Error occurred:', error);

          // With styling (red text)
          console.error('%cError:', 'color: red; font-weight: bold', error);

          // With red underline
          console.log('%cError: ' + error.message, 'border-bottom: 2px solid red;');

          // Detailed error information
          console.group('Error Details');
          console.error('Message:', error.message);
          console.error('Stack:', error.stack);
          console.error('Name:', error.name);
          console.groupEnd();

          throw error; // Re-throw if needed
        }
      }
      // Summary of all tests after completion
      console.log(styles.header("Test Summary:"))

      // Create a separator line
      console.log(styles.separator("-".repeat(50)))

      let passedCount = 0
      //need to return false to error for jenkins
      var failedCount = 0

      test_informations.forEach(({ spec, failures, passed, errors }) => {
        const statusSymbol = passed ? "✔" : "✖"
        const statusColor = passed ? styles.pass : styles.fail
        const statusText = passed ? "Passed" : "Failed"
        const errorMessage = passed ? "" : ` - Errors: ${styles.error(errors)}`

        console.log(
          `${statusColor(statusSymbol)} ${styles.white(spec)}: ${statusColor(
            statusText
          )}${errorMessage}`
        )

        // Count passed and failed tests for final summary
        if (passed) passedCount++
        else failedCount++
      })
      if (isLast) {
        console.log("Generating report... Please wait...")
      }
      if (failedCount > 0) {
        /**
         * @Issue = Jenkins always returns true no matter what.
         * need to reject if there is any kind of failures. aka, is complaining about Jenkins always returns true no matter what.
         * 
         * @Added By = @haminatorr
         *  */
        reject("Test failed, check the report for more details and fix the issues or contact your lead developer.")
      } else {
        resolve() // Resolve the main promise after all test files are run
      }
    } catch (err) {
      console.error("Critical error during test execution:", err)
      reject(err) // Reject only if a critical error occurs outside of tests
    }
  })
}
module.exports = { _frame_work_mocha, _get_spec_file }
