const fs = require('fs');
const path = require('path');
const vm = require('vm');
const Mocha = require('mocha');
const glob = require('glob');
const {initializeDriver} = require('../lib.dep/Driver');
const shadowdriver = require('../lib.dep/shadowdriver');
const by = require('../lib.dep/By');
const {capabilities} = require("../shadow.conf");

const {fetchOpenAIResponse} = require('../lib.dep/ai/open-ai/ai-engine');

async function configExe(confFile, commandArgs) {
    // checking if the caps are present!!
    //console.log("Args: ", commandArgs);
    const browserCaps = confFile.capabilities ? confFile.capabilities : null;
    const framework = confFile.framework ? confFile.framework : null;
    if (framework.toLocaleLowerCase() !== 'mocha') {
        const res = await fetchOpenAIResponse(`Framework: ${framework.toLocaleLowerCase()} is not supported yet in shadowdriverJS!`, confFile.ai_res)
        console.error(res);
        throw new Error(res);
    }
    /*lesson learned !!! need to leave a comment!!! and outstanding logs*/
    if (browserCaps) {
        console.log("browserManager caps are present");
        const caps = browserCaps;
        if (typeof caps === 'object') {
            console.log("caps is present and they are objects");
            console.log('coming from parser! browserManager name is: ', caps.browserName);
            console.log("yes it is an object passed my client")
            try {
                global.browser = await initializeDriver(browserCaps);
            } catch (browserCapsError) {
                console.log("Something went wrong is browserManager caps, please consider checking");
                throw browserCapsError;
            }
        }
    }
    if (confFile.baseURL) {
        global.baseURL = confFile.baseURL;
    }


    global.element = (_) => {
        try {
            return browser.findElement.call(browser, _);
        } catch (e) {
            throw e;
        }
    }

    global.element.all = (_) =>{
        try {
            return browser.findElements.call(browser, _);
        } catch (e) {
            throw e;
        }
    }

    global.elements = (_) => {
        try {
            return browser.findElements.call(browser, _);
        } catch (e) {
            throw e;
        }
    }


    global.by =  by;
    global.shadowdriver = shadowdriver;

    if (typeof confFile.onPrepare === 'function') {
        await confFile.onPrepare();
    }
    if (typeof confFile.before === 'function') {
        await confFile.before()
    }
    global.mochaInstance = new Mocha(
        {
            timeout: confFile.mochaTimeout ? confFile.mochaTimeout : 30000,
            reporterOptions: {
                reportFilename: confFile.reportName ? confFile.reportName : "testing-report",
                quiet: true,
            },
        }
    );

    if (commandArgs) {
        console.log('Commands line args is provided by the client....');
        mochaInstance.addFile(commandArgs);
    } else {
        if (confFile.specs && Array.isArray(confFile.specs)) {
            confFile.specs.forEach(spec => {
                mochaInstance.addFile(spec);
            });
        }
    }

    await new Promise((resolve, reject) => {
        const runner = mochaInstance.run(function (failures) {
            process.exitCode = failures ? 1 : 0;
            resolve();
        });
        runner.on('fail', async function (test, err) {
            const res = await fetchOpenAIResponse(err.message, confFile.ai_res)
            console.error(res);
            throw new Error(res);
        });
    });

    if (typeof confFile.destroyAll === 'function') {
        console.info("Leaving in peace");
        await confFile.destroyAll()
    }
    if (typeof confFile.after === 'after') {
        console.info("After");
        await confFile.after()
    }

}

module.exports = {configExe};
