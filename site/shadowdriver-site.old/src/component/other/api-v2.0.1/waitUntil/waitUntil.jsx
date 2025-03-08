export default function WaitUntil() {
  const elements = [
      {
          apiName: "elementTextMatches(locator, text);",
          example: `await browser.wait(
              waitUntil.elementTextMatches(element(by.id("elementId")), "Expected Text"),
              iTimeout
          );`,
          explanation: "Waits until the visible text of the element matches the expected text."
      },
      {
          apiName: "elementTextContains(locator, text);",
          example: `await browser.wait(
              waitUntil.elementTextContains(element(by.id("elementId")), "Partial Text"),
              iTimeout
          );`,
          explanation: "Waits until the visible text of the element contains the specified substring."
      },
      {
          apiName: "elementTextIs(locator, text);",
          example: `await browser.wait(
              waitUntil.elementTextIs(element(by.id("elementId")), "Exact Text"),
              iTimeout
          );`,
          explanation: "Waits until the visible text of the element is exactly the specified text."
      },
      {
          apiName: "elementIsNotSelected(locator);",
          example: `await browser.wait(
              waitUntil.elementIsNotSelected(element(by.id("checkboxId"))),
              iTimeout
          );`,
          explanation: "Waits until the specified element is not selected (for checkboxes or options)."
      },
      {
          apiName: "elementIsSelected(locator);",
          example: `await browser.wait(
              waitUntil.elementIsSelected(element(by.id("checkboxId"))),
              iTimeout
          );`,
          explanation: "Waits until the specified element is selected (for checkboxes or options)."
      },
      {
          apiName: "elementIsDisabled(locator);",
          example: `await browser.wait(
              waitUntil.elementIsDisabled(element(by.id("inputId"))),
              iTimeout
          );`,
          explanation: "Waits until the specified element is disabled."
      },
      {
          apiName: "ableToSwitchToFrame(locator);",
          example: `await browser.wait(
              waitUntil.ableToSwitchToFrame(element(by.id("frameId"))),
              iTimeout
          );`,
          explanation: "Waits until it is possible to switch to the specified iframe."
      },
      {
          apiName: "elementIsEnabled(locator);",
          example: `await browser.wait(
              waitUntil.elementIsEnabled(element(by.id("buttonId"))),
              iTimeout
          );`,
          explanation: "Waits until the specified element is enabled for interaction."
      },
      {
          apiName: "elementIsNotVisible(locator);",
          example: `await browser.wait(
              waitUntil.elementIsNotVisible(element(by.id("elementId"))),
              iTimeout
          );`,
          explanation: "Waits until the specified element is not visible."
      },
      {
          apiName: "elementIsVisible(locator);",
          example: `await browser.wait(
              waitUntil.elementIsVisible(element(by.id("elementId"))),
              iTimeout
          );`,
          explanation: "Waits until the specified element is visible."
      },
      {
          apiName: "stalenessOf(element);",
          example: `await browser.wait(
              waitUntil.stalenessOf(await element(by.id("elementId"))),
              iTimeout
          );`,
          explanation: "Waits until the specified element is stale (i.e., no longer attached to the DOM)."
      },
      {
          apiName: "elementsLocated(locator);",
          example: `await browser.wait(
              waitUntil.elementsLocated(by.className("className")),
              iTimeout
          );`,
          explanation: "Waits until the specified elements are located based on the given locator."
      },
      {
          apiName: "elementLocated(locator);",
          example: `await browser.wait(
              waitUntil.elementLocated(by.id("elementId")),
              iTimeout
          );`,
          explanation: "Waits until the specified element is located."
      },
      {
          apiName: "urlMatches(url);",
          example: `await browser.wait(
              waitUntil.urlMatches("https://example.com"),
              iTimeout
          );`,
          explanation: "Waits until the current URL matches the specified URL exactly."
      },
      {
          apiName: "urlContains(partialUrl);",
          example: `await browser.wait(
              waitUntil.urlContains("example.com"),
              iTimeout
          );`,
          explanation: "Waits until the current URL contains the specified substring."
      },
      {
          apiName: "urlIs(url);",
          example: `await browser.wait(
              waitUntil.urlIs("https://example.com"),
              iTimeout
          );`,
          explanation: "Waits until the current URL is exactly the specified URL."
      },
      {
          apiName: "titleMatches(title);",
          example: `await browser.wait(
              waitUntil.titleMatches("Expected Title"),
              iTimeout
          );`,
          explanation: "Waits until the current page title matches the specified title."
      },
      {
          apiName: "titleContains(partialTitle);",
          example: `await browser.wait(
              waitUntil.titleContains("Partial Title"),
              iTimeout
          );`,
          explanation: "Waits until the current page title contains the specified substring."
      },
      {
          apiName: "alertIsPresent();",
          example: `await browser.wait(
              waitUntil.alertIsPresent(),
              iTimeout
          );`,
          explanation: "Waits until an alert is present on the page."
      },
      {
          apiName: "titleIs(title);",
          example: `await browser.wait(
              waitUntil.titleIs("Exact Title"),
              iTimeout
          );`,
          explanation: "Waits until the current page title is exactly the specified title."
      },
  ];

  return (
      <>
          <div className="mb-5">
              <div className="container">
                  <h2 className="text-primary fw-bold text-start mb-4 display-8">
                      Wait Until API
                  </h2>
                  <hr
                      style={{
                          height: "5px", // Thickness of the line
                          backgroundColor: "white", // Line color
                          border: "none", // Removes default border styling
                          margin: "20px 0", // Optional spacing
                      }}
                  />
                  <p className="text-white text-start fs-5 mb-2">
                      Allows waiting for specific conditions in your tests.
                  </p>
                  <div className="bg-dark text-white p-4 rounded shadow-sm">
                      <ul className="list-unstyled">
                          {elements.map((item, index) => (
                              <li
                                  key={index}
                                  className="border-start border-4 border-success ps-3 mb-5"
                              >
                                  <div className="d-flex align-items-center mb-1">
                                      <span className="text-success me-2">
                                          <i className="fas fa-arrow-right"></i>
                                      </span>
                                      <h4 className="text-success fw-bold m-0">
                                          {item.apiName}
                                          <div className="text-warning fs-6"></div>
                                      </h4>
                                  </div>
                                  <div className="container mt-1">
                                      <p className="text-primary">{item.explanation}</p>
                                  </div>
                                  <div className="container bg-gradient m-1">
                                      <pre className="text-warning text-start">
                                          {item.example}
                                      </pre>
                                  </div>
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>
          </div>
          <div className="mt-5 p-4 text-white bg-bg-gradient rounded">
              <h3 className="text-success fw-bold mb-3">About Wait Until</h3>
              <p className="fs-5">
                  The Wait Until APIs you see here are part of our custom toolkit, designed to simplify the process of waiting for specific conditions while automating web applications.
              </p>
              <p className="fs-5">
                  Our toolkit combines the robust capabilities of WebDriverJS with easily understandable conditions, enabling quick troubleshooting and testing automation without compromising functionality.
              </p>
              <p className="fs-5">
                  To dive deeper into how our tools extend WebDriverJS and explore advanced features, visit the
                  <a
                      href="https://www.selenium.dev/selenium/docs/api/javascript/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-warning fw-bold text-decoration-none"
                  >
                      <p className="p-1">official documentation of WebDriverJS</p>
                  </a>
              </p>
          </div>
      </>
  );
}