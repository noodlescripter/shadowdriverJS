export default function ElementAPI() {
  const elements = [
    {
      apiName: "element.click();",
      example: `const button = await element(by.id("randomLocator")); \n
await button.click(); // returns true || false`,
      explanation:
        "Simulates a mouse click on the web element identified by the locator.",
    },
    {
      apiName: "element.clear();",
      example: `const input = await element(by.id("randomLocator")); \n
await input.clear(); // returns true || false`,
      explanation: "Clears the text from an input field or a text area.",
    },
    {
      apiName: "element.sendKeys(...keys);",
      example: `const input = await element(by.id("randomLocator")); \n
await input.sendKeys("Hello From shadowdriverJS"); // returns true || false`,
      explanation: "Sends keyboard input to the targeted web element.",
    },
    {
      apiName: "element.getText();",
      example: `const h3 = await element(by.id("randomLocator")); \n
await h3.getText(); // returns the element's visible text || null || error if element is not present`,
      explanation: "Retrieves the visible text content of the web element.",
    },
    {
      apiName: "browser.get(url);",
      example: `await browser.get("https://example.com"); // navigates to the URL`,
      explanation: "Loads a new web page in the browser.",
    },
    {
      apiName: "browser.getTitle();",
      example: `const title = await browser.getTitle(); \n
console.log(title); // logs the current page's title`,
      explanation: "Returns the title of the current page.",
    },
    {
      apiName: "element.getAttribute(attributeName);",
      example: `const value = await element(by.id("randomLocator")).getAttribute("value"); \n
console.log(value); // logs the value attribute of the element`,
      explanation:
        "Fetches the value of a specified attribute for the element.",
    },
    {
      apiName: "element.isDisplayed();",
      example: `const isVisible = await element(by.id("randomLocator")).isDisplayed(); \n
console.log(isVisible); // returns true if the element is visible, false otherwise`,
      explanation: "Checks if the element is visible to the user.",
    },
    {
      apiName: "element.isEnabled();",
      example: `const isEnabled = await element(by.id("randomLocator")).isEnabled(); \n
console.log(isEnabled); // returns true if the element is enabled, false otherwise`,
      explanation: "Checks if the element is enabled for interaction.",
    },
    {
      apiName: "browser.sleep(ms);",
      example: `await browser.sleep(3000); // waits for 3 seconds`,
      explanation:
        "Pauses the execution for the specified number of milliseconds.",
    },
    {
      apiName: "browser.refresh();",
      example: `await browser.refresh(); // reloads the current page`,
      explanation: "Refreshes the current browser page.",
    },
    {
      apiName: "browser.manage().window().maximize();",
      example: `await browser.manage().window().maximize(); // maximizes the browser window`,
      explanation: "Maximizes the current browser window to full screen.",
    },
    {
      apiName: "element.getCssValue(property);",
      example: `const color = await element(by.id("randomLocator")).getCssValue("color"); \n
console.log(color); // logs the computed CSS value of the 'color' property`,
      explanation: "Retrieves the value of a CSS property of the element.",
    },
  ]
  return (
    <>
      <div className="mb-5">
        <div className="container">
          <h2 className="text-primary fw-bold text-start mb-4 display-8">
            Element API
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
            Allows you to interact with DOM elements
          </p>
          <div className="bg-dark text-white p-4 rounded shadow-sm">
            <ul className="list-unstyled">
              {elements.map((item, index) => (
                <>
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
                </>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-5 p-4 text-white bg-bg-gradient rounded">
        <h3 className="text-success fw-bold mb-3">About Element</h3>
        <p className="fs-5">
          The Element APIs you see here are part of our custom toolkit, designed
          to provide a simplified interface for working with DOM elements while
          leveraging the robust capabilities of{" "}
          <span className="fw-bold text-success">WebDriverJS</span>. By acting
          as a wrapper, our tools streamline the integration of complex
          WebDriverJS functionality, making it easier for developers to write
          clean, efficient, and scalable test automation code.
        </p>
        <p className="fs-5">
          Whether you're interacting with elements, managing sessions, or
          executing advanced commands, our toolkit bridges the gap between
          low-level API calls and high-level automation needs. This enables
          rapid development without compromising the power and flexibility of
          WebDriverJS.
        </p>
        <p className="fs-5">
          To dive deeper into how our tools extend WebDriverJS and explore
          advanced features, visit the
          <a
            href="https://www.selenium.dev/selenium/docs/api/javascript/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-warning fw-bold text-decoration-none"
          >
            <p className="p-1">official documentation of webdriverJS</p>
          </a>
        </p>
      </div>
    </>
  )
}
