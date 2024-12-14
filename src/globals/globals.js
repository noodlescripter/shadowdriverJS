const { _manager } = require("../browserManager/browserManager")
const { _caps } = require("../browserManager/getCaps")
const { _conf } = require("../configParser/configParser")
const { _driver_manager } = require("../driverManager/driverManager")
const _by = require("../selectorStrategy/selectorBy")
const { _frame_work_mocha, _get_spec_file } = require("../frameworks/mocha")
const { element_strategy } = require("../elementStrategy/elementStrategy")
const { mergeJSON } = require("../json-merger/json-merger")
const {
  convert_json_html,
} = require("../shadowReporter/html_maker/convert_json_html")
const { expect } = require("chai")
const { keyMap } = require("../shadowdriver-utils/keys.js")

/**
 * Sets up global WebDriver and element access for the test environment.
 *
 * @param {object} _main - The WebDriver instance that will be set globally.
 * @throws {Error} - Throws an error if the WebDriver instance is not provided.
 */
function _globals(_main) {
  // Ensure WebDriver is initialized.
  if (_main === null) {
    throw new Error("driver not found")
  } else {
    console.log("I am in the global.... please remove me before the release")
  }

  // Set global 'browser' to the WebDriver instance.
  global.browser = _main

  // Use element_strategy to set up global 'element' function for single and multiple elements.
  const ele = element_strategy(browser)

  // Set global 'element' for single element lookup.
  global.element = ele

  // Set global 'element.all' for multiple element lookups.
  global.element.all = ele.all

  global.by = _by

  //json repoter
  global.JSONreporter = mergeJSON

  //html maker
  global.generate_HTML = convert_json_html

  //expectation
  global.expect = expect

  //global keyboard's key
  global.key = keyMap
}

module.exports = { _globals }
