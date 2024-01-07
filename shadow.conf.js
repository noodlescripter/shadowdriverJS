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
