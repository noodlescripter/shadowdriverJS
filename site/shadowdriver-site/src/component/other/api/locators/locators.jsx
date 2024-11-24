export default function LocatorsAPI() {
  const api = [
    { api: "by.xpath", description: "Locate elements using an XPath expression." },
    { api: "by.id", description: "Find elements by their unique ID attribute." },
    { api: "by.name", description: "Locate elements by the name attribute." },
    { api: "by.css", description: "Select elements using a CSS selector." },
    { api: "by.text", description: "Find elements that match a specific text." },
    { api: "by.linkText", description: "Locate anchor elements by their link text." },
    { api: "by.partialText", description: "Find elements containing partial text matches." },
    { api: "by.buttonText", description: "Locate button elements by their displayed text." }
  ];

  return (
    <section id="locators-methods" className="mb-5">
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-3 text-light">
            <div className="p-3 bg-secondary rounded shadow">
              <h4 className="text-warning fw-bold mb-3">Why Use Locators?</h4>
              <p className="fs-6">
                Locators are the foundation of automated testing. They allow you to identify elements
                on a web page for interaction, such as clicking buttons, filling forms, or verifying content.
              </p>
              <h5 className="text-warning mt-4">Quick Tips:</h5>
              <ul className="fs-6">
                <li>Use `by.id` for unique elements.</li>
                <li>Choose `by.css` for flexible and powerful selections.</li>
                <li>Consider `by.text` for user-visible content.</li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-md-6">
            <h2 className="text-success fw-bold text-center mb-4 display-6">Locators</h2>
            <p className="text-white text-center fs-5 mb-5">
              ShadowdriverJS provides a variety of locators to help you identify and interact with elements in the DOM effectively.
            </p>

            <div className="bg-dark text-light p-4 rounded shadow">
              <ul className="list-unstyled">
                {api.map((item, index) => (
                  <li key={index} className="border-start border-4 border-success ps-3 mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <span className="text-success me-2">
                        <i className="fas fa-arrow-right"></i>
                      </span>
                      <h3 className="fs-5 text-success fw-bold mb-0">{item.api}</h3>
                    </div>
                    <p className="text-white ms-4">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-3 text-light">
            <div className="p-3 bg-secondary rounded shadow">
              <h4 className="text-warning fw-bold mb-3">Best Practices</h4>
              <p className="fs-6">
                When choosing locators, ensure they are:
              </p>
              <ul className="fs-6">
                <li>Unique to the element.</li>
                <li>Resilient to UI changes.</li>
                <li>Optimized for performance.</li>
              </ul>
              <h5 className="text-warning mt-4">Learn More:</h5>
              <p>
                Visit the <a href="/docs" className="text-info fw-bold text-decoration-none">documentation</a> for detailed guidance on using locators.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}