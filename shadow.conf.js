module.exports = {
    framework: "mocha",
    ai_res: true,
    capabilities: {
        browserName: 'chrome',
    },
    mochaTimeout: 90000,

    reportName: 'report.html',
    baseURL: 'https://google.com/',
    specs: [
        'e2e/sample.spec.js'
    ],
    suites:{

    },
    onPrepare: () => {
        browser.manage().window().maximize();
    },
    before:()  =>{
    }
};
