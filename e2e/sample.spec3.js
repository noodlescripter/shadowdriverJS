describe("shadowdriverJS api validation", function () {
  const path = require("path")

  it("get();", async function () {
    await browser.get(`file:///${path.resolve("test.html")}`)
  })

  it("isDisplayed();, sendKeys();", async function () {
    await element(by.id("email"))
      .isDisplayed()
      .then(async function (present) {
        if (present) {
          console.log("email field is present")
          await element(by.id("email")).sendKeys("test@test.com")
        }
      })

    await element(by.id("password"))
      .isDisplayed()
      .then(async function (present) {
        if (present) {
          console.log("password field is present")
          await element(by.id("password")).sendKeys("testtestes1234")
        }
      })
  })

  it("click();", async function () {
    await element(by.id("loginBtn")).waitFor({condition: "elementIsVisible"})
    await element(by.id("loginBtn")).click({condition: "isVisible"})
  })

  it("waitUntil();", async function () {
    //wait for loading icon to disappear
    await element(by.xpath("//*[contains(text(),'Loading...')]")).waitFor({condition:"isVisible"})
    await element(by.xpath("//*[contains(text(),'Loading...')]")).waitFor({condition:"isNotVisible"}, 5000)
  })

  async function waitFor(locator, dTimeout = 10000) {
    return await browser.wait(waitUntil.elementIsVisible(locator)), dTimeout
  }

  it("getText();", async function () {
    const toastBody = await element(by.css('[class="toast-body"]'))
    await waitFor(toastBody, 5000)
    await toastBody.getText().then((text) => {
      console.log("toast body: ", text)
      expect(text).contains("test@test.com")
    })
  })
})
