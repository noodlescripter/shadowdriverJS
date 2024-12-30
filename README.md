# ShadowdriverJS: Empowering Web Automation and Testing

ShadowdriverJS is a sophisticated JavaScript library that extends the capabilities of [webdriverJS](https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs) while taking inspiration from the renowned [Protractor](https://www.protractortest.org/#/). It is a versatile tool that simplifies web automation and testing, providing developers and quality assurance professionals with a powerful and flexible solution.

## Installation Made Easy

Getting started with ShadowdriverJS is a breeze. Follow these simple installation steps:

### Step 1: Install ShadowdriverJS
```bash
npm install -g shadowdriver-init
```

### Step 2: Initialize Your Project
```bash
npx shadowdriver-init
```

## Configuration (shadow.conf.js)
You can customize your ShadowdriverJS configuration by creating a shadow.conf.js file in your project directory with the following content:
```javascript
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
    version: "131.0.6778.85",
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
  onPrepare: () => {},
  // This block defines hooks that run before and after tests.

  // This hook runs before all tests in the suite.
  // Access the browser object to manage the browser window.
  // Sets the browser window size to 1920x1080 pixels.
  before: () => {
    //browser.manage().window().setSize(1920, 1080);
  },

  // This hook runs after all tests in the suite.
  after: () => {
    // Closes the browser window.
    browser.quit()
    //generate html report
    generate_HTML("./")
  },
}


```

## Familiar API with Supercharged Features

ShadowdriverJS maintains API compatibility with webdriverJS, offering a seamless transition for those familiar with this framework. It also adopts many conventions from Protractor, making it a compelling alternative. Here are some highlights:

### 1. **browser.(...):** Access all the powerful methods from webdriverJS to interact with your web application.

### 2. **element(...):** Perform a wide range of actions on individual web elements, just like in webdriverJS.

### 3. **elements(...):** Handle multiple elements with ease, following webdriverJS standards.

### 4. **element.all(...):** Also (protractor style) Handle multiple elements with ease, following webdriverJS standards.

### 5. **element(by.xpath, css, id, name, buttonText, partialText, text):** Available selectors.



...and many more! In essence, ShadowdriverJS embraces the entire API from webdriverJS, ensuring you have a comprehensive toolkit at your disposal.

For more details on the API, refer to the official [webdriverJS API documentation](https://www.selenium.dev/selenium/docs/api/javascript/index.html).

## Sample Test Case

Let's take a peek at a sample test case using ShadowdriverJS. This test suite demonstrates the library's capabilities:

```javascript
describe('Sample Test Suite', async function () {

    it('should perform a sample test case', async function () {
        await browser.get(baseURL);
        await browser.sleep(3000);
        await element(by.xpath('//*[@title="test"]')).sendKeys("shadowdriver-init");
        await browser.sleep(3000);
        await element(by.xpath('//*[@title="test"]')).clear();
        await element(by.xpath('//*[@title="test"]')).sendKeys("shadowdriverJS");
        await browser.sleep(3000);
        const windows = await browser.getAllWindowHandles();
        
        if (windows.length > 2)
            console.info("Many windows found");
        else 
            console.info("No window is here, only one");
        
        await elements(by.xpath("//*[@class='test']")).then((eles) =>{
            if(eles.length < 2)
                console.info("It works")
            
            console.info(eles.length, "yes yes yes ");
            console.info(eles.length, "yes yes yes ");
        })
        const mElements = await element.all(by.css("checkbox"));
        for(const sElement of mElements){
            await sElement.isSelected().then(async function(selected){
                if(selected)
                    await sElement.click();
            })
        }
        await browser.quit();
    });
});
```

## Running Your Tests

Running tests with ShadowdriverJS is effortless. If you've initialized your project using `shadowdriver-init`, simply execute:

```bash
npx shadow exec shadow.conf.js --spec file_path/file.spec.js
```

## Contributing

We welcome contributions from the community. If you have ideas, bug fixes, or enhancements, please open an issue to discuss your proposal before submitting a pull request. Your input is valuable in making ShadowdriverJS even better.

Please ensure that you keep your tests up-to-date and follow our contribution guidelines.

ShadowdriverJS is your go-to solution for robust and efficient web automation and testing. Try it out, and unlock the full potential of your web application testing workflows!