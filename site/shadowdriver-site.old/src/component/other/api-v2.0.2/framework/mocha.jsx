export default function MochaFramework() {
  return (
    <section
      className="py-5"
      /* style={{
        background: "linear-gradient(135deg, #1c1f24, #2d3138)",
        color: "#fff",
      }} */
    >
      <div className="container">
        {/* Title Section */}
        <h2
          className="text-center mb-4 display-5 fw-bold text-primary link-underline-warning"
          style={{
            /* color: "linear-gradient(135deg, #1c1f24, #2d3138)", */
            textShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          ShadowdriverJS - Mocha Support
        </h2>
        <hr
          style={{
            height: "5px", // Thickness of the line
            backgroundColor: "white", // Line color
            border: "none", // Removes default border styling
            margin: "20px 0", // Optional spacing
          }}
        />

        {/* Introduction */}
        <p
          className="fs-5 text-center mb-5"
          style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.8" }}
        >
          ShadowdriverJS is a powerful browser automation framework that
          integrates seamlessly with testing frameworks. At this time,
          ShadowdriverJS exclusively supports{" "}
          <strong className="text-warning">
            <a href="https://mochajs.org/">Mocha</a>
          </strong>
          .
        </p>

        {/* Code Example */}
        <div
          className="p-4 rounded shadow-lg"
          /* style={{
            background: "linear-gradient(135deg, #1c1f24, #2d3138)",
          }} */
        >
          <h4
            className="text-primary fw-bold mb-3"
            style={{ textShadow: "0 2px 5px rgba(0, 0, 0, 0.5)" }}
          >
            Sample Mocha Test Script
          </h4>
          <hr
            style={{
              height: "5px", // Thickness of the line
              backgroundColor: "white", // Line color
              border: "none", // Removes default border styling
              margin: "20px 0", // Optional spacing
            }}
          />
          <pre
            className="text-warning p-3 rounded overflow-auto"
            style={
              {
                /* boxShadow: "0 8px 15px rgba(0, 0, 0, 0.5)",
              fontSize: "0.95rem",
              lineHeight: "1.6", */
              }
            }
          >
            <code>
              {`
//sample.spec.js

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
  }) \n
  it("Test using css selector and keys", async () => {
    await browser.get("https://www.google.com/")

    await browser.sleep(3000)
    await element
      .all(by.xpath('//*[@title="Search"]'))
      .then(async function (eles) {
        const len = await eles.length
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
`}
            </code>
          </pre>
        </div>

        {/* Explanation Section */}
        <div className="mt-5">
          <h4
            className="text-warning fw-bold mb-3 text-center"
            style={{ textShadow: "0 2px 5px rgba(0, 0, 0, 0.5)" }}
          >
            Explanation
          </h4>
          <ul
            className="fs-5 list-unstyled"
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            <li className="mb-3">
              <span className="text-success fw-bold">✔</span>{" "}
              <strong>Mocha Integration:</strong> ShadowdriverJS is built to run
              Mocha tests seamlessly.
            </li>
            <li className="mb-3">
              <span className="text-success fw-bold">✔</span>{" "}
              <strong>Browser Automation:</strong> Demonstrates navigation,
              input handling, and window management.
            </li>
            <li className="mb-3">
              <span className="text-success fw-bold">✔</span>{" "}
              <strong>Element Locators:</strong> Examples of XPath and CSS
              selectors for identifying elements.
            </li>
          </ul>
        </div>

        {/* Helpful Links */}
        <div className="mt-5">
          <h4
            className="text-warning fw-bold mb-3 text-center"
            style={{ textShadow: "0 2px 5px rgba(0, 0, 0, 0.5)" }}
          >
            Helpful Links
          </h4>
          <ul
            className="list-unstyled fs-5 text-center"
            style={{ lineHeight: "1.8" }}
          >
            <li className="mb-3">
              <a
                href="/api"
                target="_blank"
                rel="noopener noreferrer"
                className="text-info fw-bold text-decoration-none"
                style={{ transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.target.style.color = "#21d4fd")}
                onMouseLeave={(e) => (e.target.style.color = "#17a2b8")}
              >
                ShadowdriverJS Documentation
              </a>
            </li>
            <li className="mb-3">
              <a
                href="/api"
                className="text-info fw-bold text-decoration-none"
                style={{ transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.target.style.color = "#21d4fd")}
                onMouseLeave={(e) => (e.target.style.color = "#17a2b8")}
              >
                ShadowdriverJS API Reference
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
