export default function ShadowReporter() {
  const codeString = `
    //Generate shadowdriverjs HTML report hook
    generate_report: () => {
        generate_HTML('./');
    }
  `
  return (
    <div className="container py-5">
      <div
        id="configuration"
        className="mb-4 p-4 bg-dark text-light rounded shadow-sm"
      >
        {/* Title Section */}
        <h2 className="mb-4 text-primary fw-semibold display-6">
          ShadowDriverJS Report Hook Overview
        </h2>
        <hr
          style={{
            height: "5px", // Thickness of the line
            backgroundColor: "white", // Line color
            border: "none", // Removes default border styling
            margin: "20px 0", // Optional spacing
          }}
        />
        {/* Description Section */}
        <p className="fs-5 text-white">
          <strong>[1]</strong> The{" "}
          <span className="text-success">generate_report</span> hook in
          ShadowDriverJS allows you to create an HTML report summarizing your
          test results. This function can be customized to save the report in
          your desired directory.
        </p>

        {/* Code Block */}
        <pre
          className="text-white p-3 rounded"
          style={{
            background: "#1a1e36",
            fontSize: "0.9rem",
            overflowX: "auto",
          }}
        >
          <code className="text-warning">{codeString}</code>
        </pre>

        <p className="fs-5 text-white">
          <strong>[2]</strong> The{" "}
          You can serve serve the report by running below in terminal or by double clicking on <span className="text-warning">./report.html</span>
        </p>

        {/* Code Block */}
        <span>Mac/Linux</span>
        <pre
          className="text-white p-3 rounded"
          style={{
            background: "#1a1e36",
            fontSize: "0.9rem",
            overflowX: "auto",
          }}
        >
          <code className="text-warning">open report.html</code>
        </pre>

        <span>Windows</span>
        <pre
          className="text-white p-3 rounded"
          style={{
            background: "#1a1e36",
            fontSize: "0.9rem",
            overflowX: "auto",
          }}
        >
          <code className="text-warning">start report.html</code>
        </pre>

        {/* Report Image Section */}
        <div className="mt-4">
          <h4 className="text-primary fw-bold">Sample Report</h4>
          <p className="fs-5 text-white">
            Below is an example of a generated HTML report using the{" "}
            <span className="text-success">generate_report</span> hook:
          </p>
          <div className="d-flex justify-content-center mt-3">
            <img
              src="/shadowdriverjs-reporter.png"
              alt="Sample ShadowDriverJS Report"
              className="img-fluid shadow rounded"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
