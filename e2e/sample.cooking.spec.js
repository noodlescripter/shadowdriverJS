
describe("shadowdriverJS api validation", function () {
  const path = require("path")

  it("get();", async function () {
    await browser.get(`file:///${path.resolve("test.html")}`)
  })

  it("shadowdriverjs 2.0.2 BETA Test", async function () {

    x
  })

  it("waitForDisappear(); test", async function () {
    await element(by.xpath("//*[contains(text(),'Loading...')]")).waitFor({ condition: "elementIsNotVisible", timeout: 10000 })
  })

  it("waitUntil();", async function () {
    //wait for loading icon to disappear
    console.log("I am here")
    await element(by.xpath("//*[contains(text(),'Loading...')]")).waitFor({ condition: "elementIsNotVisible", timeout: 20000 })
  })

  it("getText();", async function () {
    await element(by.css('[class="toast-body"]')).waitFor({ condition: "isPresent" }).then(async (element) => {
      await element.getText().then((text) => {
        console.log("toast body: ", text)
        expect(text).contains("test@test.com")
      })
    })
  })
})
