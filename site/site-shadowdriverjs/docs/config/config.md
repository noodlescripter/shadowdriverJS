---
sidebar_position: 1
---

# shadow.conf.js

Below is an example configuration file for ShadowdriverJS. This configuration file defines how your testing environment should behave, including browser capabilities, test framework, hooks for setup and teardown, and test suite management.

```javascript
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
    before: async () => {
        await browser.manage().window().setSize(1920, 1080); // Sets window size.
    },

    // Hook runs after all tests.
    after: async () => {
        await browser.close(); // Closes the browser window.
    },

    // Function to generate a report.
    generate_report: () => {
        generate_HTML('./');
    }
};
```

## Key Highlights

- **Framework**: Uses the Mocha framework for testing.
- **Browser Capabilities**: Configures browser capabilities for Chrome, including options like maximizing the browser window and disabling GPU.
- **Base URL**: Sets the base URL for your tests.
- **Specs**: Specifies the test files to run.
- **Suites**: Supports test suites for organizing multiple test files.
- **Logging**: Includes logging configuration for the framework.
- **Hooks**: Includes hooks for pre-test and post-test setup and teardown.
- **Report Generation**: Allows report generation after tests are completed.


This configuration file provides a comprehensive setup for running tests with ShadowdriverJS, ensuring that your testing environment is properly configured and managed.