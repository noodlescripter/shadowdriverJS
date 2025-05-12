describe("Sample Test Suite22222", async function () {
  it("should perform a sample test case222222", async function () {
    this.skip()
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
    //await browser.close();
  })

  it("Test using css selector", async () => {
    const mysql = require("mysql2/promise")
    connection = await mysql.createPool({
      host: "127.0.0.1",
      user: "root",
      password: "password",
      database: "user_db",
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    })

    await browser.get("https://www.google.com/")

    const [rows] = await connection.query("SELECT * FROM users")
    console.log("Users:", rows)

    await browser.sleep(3000)
    await element
      .all(by.xpath('//*[@title="Search"]'))
      .then(async function (eles) {
        const len = await eles.length
        console.log("Element count is: ", len)
      })
    await browser.get("https://www.google.com/")
    await browser.sleep(3000)
    await element
      .all(by.xpath('//*[@title="Sear"]'))
      .then(async function (eles) {
        const len = await eles.length
        console.log("Element count is: ", len)
      })
  })
})
