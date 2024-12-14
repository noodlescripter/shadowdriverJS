const { Builder, Capabilities } = require('selenium-webdriver');

let shadowdriver = null;
let shadowBrowserCaps = {
    browserName: null,
    chromeOptions: [],
};

function getBrowserName(browser) {
    if (browser.chrome) {
        return "chrome";
    }
    // Add more conditions if you support more browsers
    return null;
}

async function initializeDriver(browserCaps) {
    console.log("Initializing driverManager...");

    if (browserCaps && typeof browserCaps === 'object') {
        if (browserCaps.browserName) {
            shadowBrowserCaps.browserName = browserCaps.browserName;
            console.log('Browser capabilities provided: ', browserCaps);

            if (browserCaps.chromeOptions) {
                shadowBrowserCaps.chromeOptions = browserCaps.chromeOptions;
            }
        }
    } else if (browserCaps) {
        throw new Error("browserCaps must be an object.");
    }

    if (!shadowBrowserCaps.browserName) {
        console.error("Browser name not provided by the client.");
        shadowBrowserCaps.browserName = "chrome"; // Default to chrome if not provided
    }

    if (shadowBrowserCaps.browserName === "chrome") {
        let browserCapsForChrome = Capabilities.chrome();
        browserCapsForChrome.set("browserName", "chrome");
        browserCapsForChrome.set("platform", "any");
        if (shadowBrowserCaps.chromeOptions.args) {
            browserCapsForChrome.set("goog:chromeOptions", {
                args: shadowBrowserCaps.chromeOptions.args,
            });
        }
        shadowdriver = await new Builder().withCapabilities(browserCapsForChrome).build();
    }

    return shadowdriver;
}

module.exports = { initializeDriver };
