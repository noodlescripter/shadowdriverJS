export default function BrowserAPI() {
  return (
    <section id="browser-methods" className="mb-5">
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-3 text-light">
            <div className="p-3 bg-secondary rounded shadow">
              <h4 className="text-warning fw-bold mb-3">Why Use Browser Methods?</h4>
              <p className="fs-6">
                Browser methods provide a way to automate actions such as navigation, refreshing, or interacting with browser controls. These methods are essential for building robust automated tests.
              </p>
              <h5 className="text-warning mt-4">Examples:</h5>
              <ul className="fs-6">
                <li>Use <code>browser.get()</code> to navigate to a page.</li>
                <li>Refresh a page using <code>browser.refresh()</code>.</li>
                <li>Navigate browser history with <code>browser.back()</code>.</li>
              </ul>
            </div>
          </div>

          {/* Main Content  */}
          <div className="col-md-6">
            <h2 className="text-primary fw-bold text-center mb-4 display-6">Browser Methods</h2>
            <hr
            style={{
              height: "5px", // Thickness of the line
              backgroundColor: "white", // Line color
              border: "none", // Removes default border styling
              margin: "20px 0", // Optional spacing
            }}
          />
            <p className="text-white text-center fs-5 mb-5">
              ShadowdriverJS provides a comprehensive set of browser methods to help you seamlessly interact with your web application.
            </p>

            <div className="bg-dark text-light p-4 rounded shadow">
              <ul className="list-unstyled">
                {/* Method Item */}
                <li className="border-start border-4 border-success ps-3 mb-4">
                  <div className="d-flex align-items-center mb-2">
                    <span className="text-success me-2">
                      <i className="fas fa-arrow-right"></i>
                    </span>
                    <h3 className="fs-5 text-success fw-bold mb-0">await browser.get(url)</h3>
                  </div>
                  <p className="text-white ms-4">
                    Opens a URL in the browser, allowing navigation to the specified web page.
                  </p>
                  <pre className="text-warning p-3 rounded bg-secondary">
                    <code>{`await browser.get('https://example.com');`}</code>
                  </pre>
                </li>

                {/* Method Item */}
                <li className="border-start border-4 border-success ps-3 mb-4">
                  <div className="d-flex align-items-center mb-2">
                    <span className="text-success me-2">
                      <i className="fas fa-sync-alt"></i>
                    </span>
                    <h3 className="fs-5 text-success fw-bold mb-0">await browser.refresh()</h3>
                  </div>
                  <p className="text-white ms-4">
                    Refreshes the current page, reloading its content from the server.
                  </p>
                  <pre className="text-warning p-3 rounded bg-secondary">
                    <code>{`await browser.refresh();`}</code>
                  </pre>
                </li>

                {/* Method Item */}
                <li className="border-start border-4 border-success ps-3 mb-4">
                  <div className="d-flex align-items-center mb-2">
                    <span className="text-success me-2">
                      <i className="fas fa-arrow-left"></i>
                    </span>
                    <h3 className="fs-5 text-success fw-bold mb-0">await browser.back()</h3>
                  </div>
                  <p className="text-white ms-4">
                    Navigates back in the browser’s history, moving to the previous page.
                  </p>
                  <pre className="text-warning p-3 rounded bg-secondary">
                    <code>{`await browser.back();`}</code>
                  </pre>
                </li>

                {/* Method Item */}
                <li className="border-start border-4 border-success ps-3 mb-4">
                  <div className="d-flex align-items-center mb-2">
                    <span className="text-success me-2">
                      <i className="fas fa-arrow-right"></i>
                    </span>
                    <h3 className="fs-5 text-success fw-bold mb-0">await browser.forward()</h3>
                  </div>
                  <p className="text-white ms-4">
                    Navigates forward in the browser’s history, moving to the next page if available.
                  </p>
                  <pre className="text-warning p-3 rounded bg-secondary">
                    <code>{`await browser.forward();`}</code>
                  </pre>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-3 text-light">
            <div className="p-3 bg-secondary rounded shadow">
              <h4 className="text-warning fw-bold mb-3">Best Practices</h4>
              <p className="fs-6">
                Leverage browser methods effectively by following these best practices:
              </p>
              <ul className="fs-6">
                <li>Use explicit waits where necessary.</li>
                <li>Navigate directly to URLs rather than relying on clicks.</li>
                <li>Minimize browser refreshes to optimize test speed.</li>
              </ul>
              <h5 className="text-warning mt-4">Learn More:</h5>
              <p>
                Check out our <a href="/docs" className="text-info fw-bold text-decoration-none">documentation</a> for detailed examples.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}