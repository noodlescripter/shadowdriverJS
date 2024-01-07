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
module.exports = {
    browserName: 'chrome',
    mochaTimeout: 90000,
    reportName: 'report.html',
    baseURL: 'https://google.com/',
    specs: [
        'e2e/sample.spec.js'
    ],
    onPrepare: () => {
        browser.manage().window().maximize();
    }
};

```

## Familiar API with Supercharged Features

ShadowdriverJS maintains API compatibility with webdriverJS, offering a seamless transition for those familiar with this framework. It also adopts many conventions from Protractor, making it a compelling alternative. Here are some highlights:

### 1. **browser.(...):** Access all the powerful methods from webdriverJS to interact with your web application.

### 2. **element(...):** Perform a wide range of actions on individual web elements, just like in webdriverJS.

### 3. **elements(...):** Handle multiple elements with ease, following webdriverJS standards.


...and many more! In essence, ShadowdriverJS embraces the entire API from webdriverJS, ensuring you have a comprehensive toolkit at your disposal.

For more details on the API, refer to the official [webdriverJS API documentation](https://www.selenium.dev/selenium/docs/api/javascript/index.html).

## Sample Test Case

Let's take a peek at a sample test case using ShadowdriverJS. This test suite demonstrates the library's capabilities:

```javascript
describe('Sample Test Suite', async function () {

    it('should perform a sample test case', async function () {
        await browser.get(baseURL);
        await browser.sleep(3000);
        await element(by.xpath('//*[@title="Search"]')).sendKeys("shadowdriver-init");
        await browser.sleep(3000);
        await element(by.xpath('//*[@title="Search"]')).clear();
        await element(by.xpath('//*[@title="Search"]')).sendKeys("shadowdriverJS");
        await browser.sleep(3000);
        const windows = await browser.getAllWindowHandles();
        if (windows.length > 2) {
            console.info("Many windows found");
        } else {
            console.info("No window is here, only one");
        }
        await elements(by.xpath("//*[@class='lol']")).then((eles) =>{
            if(eles.length < 2) {
                console.info("It works")
            }
            console.info(eles.length, "yes yes yes ");
            console.info(eles.length, "yes yes yes ");
        })
        await browser.quit();
    });
});
```

## Running Your Tests

Running tests with ShadowdriverJS is effortless. If you've initialized your project using `shadowdriver-init`, simply execute:

```bash
npm run shadow
```

## Contributing

We welcome contributions from the community. If you have ideas, bug fixes, or enhancements, please open an issue to discuss your proposal before submitting a pull request. Your input is valuable in making ShadowdriverJS even better.

Please ensure that you keep your tests up-to-date and follow our contribution guidelines.

ShadowdriverJS is your go-to solution for robust and efficient web automation and testing. Try it out, and unlock the full potential of your web application testing workflows!