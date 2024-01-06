// Driver.js
const { Builder } = require('selenium-webdriver');

let yoloDriver;

async function initializeDriver(browserName) {
    if (!yoloDriver) {
        yoloDriver = await new Builder().forBrowser(browserName).build();
    }
    return yoloDriver;
}

module.exports = { initializeDriver };
