import React from "react";

const ConfigCode = () => {
  const codeString = `
module.exports = {
    // Specifies the testing framework to use. In this case, it's Mocha.
    framework: "mocha",

    // Configure the browser capabilities for your tests.
    capabilities: {
        // Specifies the browser to use for testing. Here, it's Chrome.
        browserName: 'chrome',
        // Provides Chrome-specific options.
        'goog:chromeOptions': {
            // Passes arguments to the Chrome browser.
            args: [
                '--disable-infobars',   // Disables infobars during testing.
                '--disable-gpu',        // Disables GPU for consistent environments.
                '--start-maximized'     // Starts Chrome maximized.
            ]
        }
    },

    // Sets the base URL for your tests.
    baseURL: 'https://google.com/',

    // Specifies the test files to run.
    specs: [
        'e2e/sample.spec.js'
    ],

    // Define test suites for better organization.
    suites: {
        dummyTest: [
            "e2e/sample.spec.js",
            "e2e/sample.spec2.js"
        ]
    },

    // Logging configuration for the framework.
    logger: {
        mocha_cap: {
            log: false
        }
    },

    // Hook executed before the test framework is initialized.
    onPrepare: () => {
        // Perform any setup tasks here.
    },

    // Hook runs before all tests.
    before: () => {
         browser.manage().window().setSize(1920, 1080); // Sets window size.
    },

    // Hook runs after all tests.
    after: () => {
         browser.close(); // Closes the browser window.
    },

    // Function to generate a report.
    generate_report: () => {
        generate_HTML('./');
    }
};
`;

  return (
    <div className="container py-5">
      <div id="configuration" className="mb-4 p-4 bg-dark text-light rounded shadow-sm">
        {/* Title Section */}
        <h2 className="mb-4 text-primary fw-semibold display-6">
          ShadowdriverJS Configuration Overview
        </h2>
        <hr
            style={{
              height: "5px", // Thickness of the line
              backgroundColor: "white", // Line color
              border: "none", // Removes default border styling
              margin: "20px 0", // Optional spacing
            }}
          />

        {/* Description Section */}
        <p className="fs-5 text-white">
          Below is an example configuration file for ShadowdriverJS. This configuration file defines
          how your testing environment should behave, including browser capabilities, test framework,
          hooks for setup and teardown, and test suite management.
        </p>

        {/* Code Block */}
        <pre
          className="text-white p-3 rounded"
          style={{
            background: "#1a1e36",
            fontSize: "0.9rem",
            overflowX: "auto",
          }}
        >
          <code className="text-warning">{codeString}</code>
        </pre>

        {/* Additional Notes */}
        <div className="mt-4">
          <h4 className="text-primary fw-bold">Key Highlights</h4>
          <ul className="fs-5 text-white">
            <li>Uses the <span className="text-success">Mocha</span> framework for testing.</li>
            <li>
              Configures browser capabilities for <span className="text-success">Chrome</span>, including options
              like maximizing the browser window and disabling GPU.
            </li>
            <li>Supports test suites for organizing multiple test files.</li>
            <li>Includes hooks for pre-test and post-test setup and teardown.</li>
            <li>Allows report generation with a custom <span className="text-success">generate_report</span> function.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConfigCode;