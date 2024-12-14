const { _caps } = require("./getCaps.js")
const { Builder } = require("selenium-webdriver")
const { Options, ServiceBuilder } = require("selenium-webdriver/chrome")
const fs = require("fs")
const path = require("path")

/**
 * Function to manage the initialization of the browser instance.
 *
 * @param {string} _name - Optional. The name of the configuration file that contains browser capabilities. Defaults to 'shadow.conf.js' if not provided.
 * @returns {object} - The initialized WebDriver instance for the browser.
 * @throws {Error} - Throws an error if the browser could not be initialized.
 */
async function _manager(_name) {
  let _local_browser_init = null

  const _main = _caps(_name)

  if (_main && typeof _main === "object") {
    const _browser = _main.browserName
    const browser_log = _main.browser_log ? _main.browser_log.toUpperCase() : "severe".toUpperCase()
    const driver_log = _main.driver_log ? _main.driver_log.toUpperCase() : "severe".toLocaleUpperCase()
    console.log("Attempting to launch:", `${_browser} browser.`)

    if (_browser === "chrome") {
      if (_main["goog:chromeOptions"]) {
        console.log("Chrome options detected.")
        const customDriverPath = _main.driverPath
        console.log(customDriverPath)
        if (!fs.existsSync(customDriverPath)) {
          throw new Error("Broken")
        }
        let chromeOptions = new Options()
        chromeOptions.setChromeBinaryPath(_main.browserPath)
        // Add any additional Chrome options
        chromeOptions.addArguments(...(_main["goog:chromeOptions"].args || []))
        chromeOptions.setLoggingPrefs({
          driver: driver_log,
          browser: browser_log
        });
        
        // Initialize the browser with custom Chrome options and driver path
        _local_browser_init = new Builder()
          .forBrowser("chrome")
          .setChromeOptions(chromeOptions)
          .setChromeService(
            new ServiceBuilder(customDriverPath)
              .loggingTo("./chromedriver.log")
          )
          .build()
        let console_log = function () {
          const logFilePath = path.resolve("./chromedriver.log")

          // Check if the log file exists
          if (!fs.existsSync(logFilePath)) {
            console.error(`Log file not found at ${logFilePath}`)
            process.exit(1)
          }
 
          // Open the log file for reading and streaming its updates to the console
          const stream = fs.createReadStream(logFilePath, {
            encoding: "utf-8",
            flags: "a+",
          })
          stream.on("data", (chunk) => {
            console.log(chunk)
          })
          stream.on("error", (err) => {
            console.error(`Error reading log file: ${err.message}`)
          })
          stream.on("end", () => {
            console.log("End of log file.")
          })
        }
        console_log()
      } else {
        console.log("No Chrome options provided.")
      }
      if (!_main["goog:chromeOptions"]) {
        console.log(
          "No Chrome options detected. Using the ShadowDriverJS default settings."
        )
        // Initialize the WebDriver with default options if no Chrome options are present.
        // _local_browser_init = new Builder().withCapabilities(_main).build()
      }
    } else {
      console.log("Unsupported browser:", _browser)
      console.log("Please raise a support ticket to handle this issue!")
    }
  }
  if (_local_browser_init) {
    console.log("it did")
    // Set timeouts for the WebDriver instance
    await _local_browser_init.manage().setTimeouts({
      implicit: 10000, // 10 seconds for implicit waits
      pageLoad: 20000, // 20 seconds for page loads
      script: 30000, // 30 seconds for script execution
    })
    return _local_browser_init
  }
  throw new Error("Failed to initialize the browser.")
}

module.exports = { _manager }

//node src/shadowRunner/runner.js exec shadow.conf.js --spec e2e/sample.spec.js
