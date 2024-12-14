describe("Sample Test Suite", async function () {
  it("should perform a sample test case", async function () {
    await browser.get("https://www.google.com/")
    await browser.sleep(3000)
    await element(by.xpath('//*[@title="Search"]')).sendKeys("Hello")
    await browser.sleep(3000)
    await element(by.xpath('//*[@title="Search"]')).clear()
    await element(by.xpath('//*[@title="Search"]')).sendKeys("tor mare chudi")
    await browser.sleep(3000)
    const windows = await browser.getAllWindowHandles()
    if (windows.length > 2) {
      console.info("Many windows found")
    } else {
      console.info("No window is here, only one")
    }
    expect("a").to.include("a")
  })
  it("Test using css selector and keys", async () => {
    await browser.get("https://www.google.com/")
    await browser.sleep(3000)
    await element
      .all(by.xpath('//*[@title="Sear"]'))
      .then(async function (eles) {
        const len = await eles.length
        console.log("Element count is: ", len)
      })
    await browser
      .actions()
      .keyDown(key.Shift)
      .sendKeys("show me kitten pic")
      .keyUp(key.Shift)
      .sendKeys("ture")
      .perform()
    await browser.actions().keyDown(key.Return).perform()
    await browser.sleep(5000)
  })
})
