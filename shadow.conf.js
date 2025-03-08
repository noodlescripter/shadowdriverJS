const path = require("path")
module.exports = {
  // Specifies the testing framework to use. In this case, it's Mocha.
  framework: "mocha",

  //suites configuration
  suites: {
    dummyTest: ["e2e/sample.spec.js", "e2e/sample.spec2.js"],
  },

  // This line seems to be a custom option, likely specific to your setup.
  // It might be used to enable some AI-related features in your tests.
  //ai_res: false,

  // Configure the browser capabilities for your tests.
  capabilities: {
    // Specifies the browser to use for testing. Here, it's Chrome.
    browserName: "chrome",
    //logs
    browser_log: "OFF",
    driver_log: "OFF",
    //chromeversion
    version: "132.0.6834.110",
    // Provides Chrome-specific options.
    // browserPath: path.resolve("browser/browserBinary/chrome.exe"), //Win 10/11
    // browserPath: path.resolve("browser/browserBinary/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing"), //M Mac OS
    browserPath: path.resolve("browser/browserBinary/chrome"), //Linux (Ubuntu)
    driverPath: path.resolve("driver/browserDriver/chromedriver"), // Linux or Mac
    //driverPath: path.resolve("driver/browserDriver/chromedriver.exe"), //Win 10/11
    "goog:chromeOptions": {
      //binary
      // Passes arguments to the Chrome browser.
      args: [
        // Disables infobars that can sometimes appear in Chrome during automated testing.
        "--disable-infobars",
        // Disables the use of the GPU, which can be helpful for consistency in test environments.
        "--disable-gpu",
        // Starts the browser maximized to ensure the entire web page is visible.
        "--start-maximized",
        `--user-data-dir=${path.resolve("userData")}`,
      ],
    },
  },

  // Sets the base URL for your tests. This URL will be prepended to relative paths in your tests.
  // In this case, the base URL is set to 'https://google.com/'.
  baseURL: "https://google.com/",

  // Specifies the test files to run.
  // This configuration will run the tests defined in the 'e2e/sample.spec.js' file.
  specs: ["e2e/sample.spec.js"],
  // Define test suites to organize your test specs.
  // Each suite is a key-value pair where the key is the suite name
  // and the value is an array of test spec file paths.
  suites: {
    dummyTest: ["e2e/sample.spec.js", "e2e/sample.spec2.js"],
  },
  logger: {
    mocha_cap: {
      log: false,
    },
  },
  // This hook is executed before the test framework is initialized.
  // It does not have access to the browser object or WebDriver instance.
  // Use this hook to perform any setup tasks that do not require browser interaction, such as:
  // - Initializing environment variables
  // - Setting up test data
  // - Configuring external services
  // - Starting up test servers
  //do not have browser object access
  onPrepare: async () => {
   /*  console.log("I am on prepare and I do not have access to the browser");
    const mysql = require('mysql2/promise'); // Use the promise version

    // Create a MySQL connection pool
    global.con = mysql.createPool({
        host: "127.0.0.1",
        user: "root",
        password: "password",
        database: "user_db",
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });

    // Optional: Handle disconnection gracefully if using a pool
    global.con.on("error", function (err) {
        console.error("Database error:", err);
    }); */
    
},
  // This block defines hooks that run before and after tests.

  // This hook runs before all tests in the suite.
  // Access the browser object to manage the browser window.
  // Sets the browser window size to 1920x1080 pixels.
  before: () => {
    console.log("I am before hook and I have access to the browser")
    //browser.manage().window().setSize(1920, 1080);
  },

  // This hook runs after all tests in the suite.
  after: () => {
    // Closes the browser window.
    browser.quit()
    //generate html report
    console.log("after is running")
    generate_HTML("./")
  },
}
