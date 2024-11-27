describe('Sample Test Suite22222', async function () {

    it('should perform a sample test case222222', async function () {
        await browser.get("https://www.google.com/");
        await browser.sleep(3000);
        await element(by.xpath('//*[@title="Search"]')).sendKeys("Hello");
        await browser.sleep(3000);
        await element(by.xpath('//*[@title="Search"]')).clear();
        await element(by.xpath('//*[@title="Search"]')).sendKeys("tor mare chudi");
        await browser.sleep(3000);
        const windows = await browser.getAllWindowHandles();
        if (windows.length > 2) {
            console.info("Many windows found");
        } else {
            console.info("No window is here, only one");
        }
        //await browser.close();
    });
    
    it('Test using css selector',
        async () => {
            await browser.get("https://www.google.com/");

            await browser.sleep(3000);
            await element.all(by.xpath('//*[@title="Search"]')).then(async function (eles) {
                const len = await eles.length;
                console.log("Element count is: ", len)
            })
            await element(by.css('[title="Search"]')).sendKeys(shadowdriver.key().ENTER, 'Testing With Shadowdriverjs');
            await browser.sleep(5000);
            await browser.quit();
        })
});
