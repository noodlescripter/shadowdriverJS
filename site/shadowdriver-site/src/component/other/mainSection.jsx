export default function MainSection() {
  return (
    <section className="bg-gradient text-center py-5" style={{ background: "linear-gradient(to right, #1e3c72, #2a5298)", color: "#fff" }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-md-6 text-start">
            <h1 className="display-4 fw-bold mb-4 text-light">
              Next-Generation Web Testing
            </h1>
            <p className="lead mb-4 text-light">
              Fast, reliable testing for modern web applications inspired by Protractor and WebDriverJS.
            </p>
            <a
              href="#get-started"
              className="btn btn-success btn-lg shadow-lg"
            >
              Get Started
            </a>
          </div>

          {/* Image Section */}
          <div className="col-md-6 text-center">
            <img
              src={'../../My_Movie.gif'}
              alt="Testing Illustration"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
        <hr />

        {/* How to Install Section */}
        <div className="row mt-5">
          <div className="col">
            <h2 className="fw-bold mb-4 text-light">
              Install shadowdriverJS
            </h2>
            <p className="lead text-light mx-auto" style={{ maxWidth: "700px" }}>
              To install shadowdriverJS, run below command in order
            </p>
            <div className="bg-dark text-white p-3 rounded my-4 mx-auto" style={{ maxWidth: "700px" }}>
              <code>npm install -g shadowdriver-init@latest</code>
            </div>
            <div className="bg-dark text-white p-3 rounded my-4 mx-auto" style={{ maxWidth: "700px" }}>
              <code>npx shadowdriver-init</code>
            </div>
            <p className="lead text-light mx-auto" style={{ maxWidth: "700px" }}>
              This command will create a new project folder, generate configuration files, and install all necessary dependencies.
              <a href="/api" className="text-warning fw-bold text-decoration-none ms-1">documentation</a>.
            </p>
          </div>
        </div>
        <hr />
        {/* How to Run the Test Section */}
        <div className="row mt-5">
          <div className="col">
            <h2 className="fw-bold mb-4 text-light">
              How to Run the Test
            </h2>
            <p className="lead text-light mx-auto" style={{ maxWidth: "700px" }}>
              To execute your tests using ShadowdriverJS, simply run the following command in your terminal:
            </p>
            <div className="bg-dark text-white p-3 rounded my-4 mx-auto" style={{ maxWidth: "700px" }}>
              <code>npx shadow exec shadow.conf.js --spec e2e/sample/sample.spec.js</code>
            </div>
            <p className="lead text-light mx-auto" style={{ maxWidth: "700px" }}>
              This command will start the test runner and execute the configured test scripts. For more detailed instructions, visit our
              <a href="/api" className="text-warning fw-bold text-decoration-none ms-1">documentation</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}