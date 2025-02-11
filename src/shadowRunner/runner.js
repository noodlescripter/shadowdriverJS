#!/usr/bin/env node
const { _driver_manager } = require("../driverManager/driverManager")
const { _conf } = require("../configParser/configParser")
const { _globals } = require("../globals/globals")
const { _frame_work_mocha, _get_spec_file } = require("../frameworks/mocha")

const args = process.argv.splice(2)

async function runTests() {
  // Check if the first argument (config file) is provided
  if (!args[0]) {
    console.error("Error: No configuration file provided.")
    process.exit(1)
  }
  try {
    const cli_arguments = [args[0], args[1], args[2], args[3]]
    if (cli_arguments[0] !== "exec") {
      console.error("Error: No exec command provided.")
      process.exit(1)
    }
    const arg_one = args[1]
    const parser = _conf(arg_one) // Parse the config file

    // Initialize the driver
    /* const driver = await _driver_manager(parser);
        _globals(driver);  // Set up global WebDriver and element strategy */

    const arg_two = args[2]
    console.log("arg_two:", arg_two) // Log arg_two for debugging
    const arg_three = args[3]
    console.log("arg_three:", arg_three) // Log arg_three for debugging
    if (arg_two === "--spec") {
      console.log("Spec is getting executed")
      if (!arg_three) {
        console.error("Error: No spec file provided.")
        process.exit(1)
      }
      console.log("Single spec file is getting executed!")
      await _frame_work_mocha(parser, arg_three)
    } else if (arg_two === "--suite") {
      console.log("Suite is getting executed", parser)

      // Require the suites configuration file
      const suiteArray = require(parser)

      if (suiteArray && suiteArray.suites) {
        console.log("Well suite is provided")

        // Correctly access the 'dummyTest' array instead of 'arg_three'
        const suiteProvided = arg_three
        const arrayOfFile = suiteArray.suites[suiteProvided]
          ? suiteArray.suites[suiteProvided]
          : null
        console.log("Array of file:", arrayOfFile)

        if (arrayOfFile) {
          console.log("Yes, found the suite files:", arrayOfFile)
          //Call the function with the correct array of files
          await _frame_work_mocha(parser, arrayOfFile)
        } else {
          throw new Error("Invalid suite configuration")
        }
      } else {
        throw new Error("Invalid suite configuration")
      }
    } else {
      console.error(
        'Error: Invalid execution type. Expected "spec" or "suite".'
      )
      process.exit(1)
    }
  } catch (err) {
    console.error("Error in :", err.message || err)
    process.exit(1)
  }
}

// Start the test execution
runTests()
