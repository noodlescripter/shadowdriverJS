const fs = require('fs');
const path = require('path');
const vm = require('vm');
const Mocha = require('mocha');
const glob = require('glob');
const {initializeDriver} = require('../lib/Driver');
const shadowdriver = require('../lib/shadowdriver');
const by = require('../lib/By');
async function configExe(confFile) {
    if (confFile.browserName) {
        global.browser = await initializeDriver(confFile.browserName);
    } else {
        return new Error("something went wrong, please consider checking the log!!!")
    }
    if (confFile.baseURL) {
        global.baseURL = confFile.baseURL;
    }

    global.element = (_) => browser.findElement(_);
    global.elements = (_) => browser.findElements(_);


    global.by = await by;
    global.shadowdriver = shadowdriver;

    if (typeof confFile.onPrepare === 'function') {
        await confFile.onPrepare();
    }

    global.mochaInstance = new Mocha({
        timeout: confFile.mochaTimeout ? confFile.mochaTimeout : 30000,
        reporter: 'mochawesome',
        reporterOptions: {
            reportFilename: confFile.reportName ? confFile.reportName : "testing-report",
            quiet: true,
        },
    });

    if (confFile.specs && Array.isArray(confFile.specs)) {
        confFile.specs.forEach(spec => {
            mochaInstance.addFile(spec);
        });
    }
    await new Promise((resolve, reject) => {
        mochaInstance.run(function (failures) {
            process.exitCode = failures ? 1 : 0;
            resolve();
        });
    });
    if (typeof confFile.destroyAll === 'function') {
        console.info("Leaving in peace");
        await confFile.destroyAll();
    }
}

module.exports = {configExe};
