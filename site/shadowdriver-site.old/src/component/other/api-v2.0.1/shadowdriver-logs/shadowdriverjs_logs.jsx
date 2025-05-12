export default function ShadowdriverJSLogs() {
  const codeString = `
  // Logs
  capabilities:{
    // all other caps
    driver_log: "severe", // OFF, ALL, DEBUG, INFO, SEVERE, WARNING
    browser_log: "severe" // OFF, ALL, DEBUG, INFO, SEVERE, WARNING
  }
  `;

  return (
    <div className="container py-5">
      <div id="configuration" className="mb-4 p-4 bg-dark text-light rounded shadow-sm">
        {/* Title Section */}
        <h2 className="mb-4 text-primary fw-semibold display-6">
          ShadowdriverJS Logging Options
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
          <strong>[1]</strong> ShadowDriverJS provides the ability to configure
          detailed logging preferences through the <span className="text-success">capabilities</span>
          object. You can control the log level for both the WebDriver and browser
          logs. The log levels include:
        </p>

        <ul className="fs-5 text-white">
          <li><span className="text-success">OFF</span>: Disables all logging.</li>
          <li><span className="text-success">ALL</span>: Logs everything (debug, info, warning, error).</li>
          <li><span className="text-success">DEBUG</span>: Logs debug messages that provide detailed information useful for debugging.</li>
          <li><span className="text-success">INFO</span>: Logs informational messages that describe the normal operation of ShadowDriverJS.</li>
          <li><span className="text-success">SEVERE</span>: Logs only critical errors and issues that might require immediate attention.</li>
          <li><span className="text-success">WARNING</span>: Logs warnings that may not be critical but are worth noticing.</li>
        </ul>

        <p className="fs-5 text-white">
          <strong>[2]</strong> To configure logging in ShadowDriverJS, use the <span className="text-success">capabilities</span> object and specify the
          desired log levels for both the <span className="text-success">driver_log</span> and <span className="text-success">browser_log</span> properties. Example:
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
          <strong>[3]</strong> Depending on the log level you choose, you can control the verbosity of logs. For example:
        </p>

        <ul className="fs-5 text-white">
          <li><span className="text-warning">SEVERE</span>: Only critical errors will be logged, keeping the log output minimal and focused on serious issues.</li>
          <li><span className="text-warning">ALL</span>: This setting will log everything, including debug messages that are useful for troubleshooting, but may result in large log files.</li>
        </ul>

        <p className="fs-5 text-white">
          <strong>[4]</strong> After configuring the logs, you can review them by checking the specified log file (for example, <span className="text-warning">./chromedriver.log</span>).
        </p>
      </div>
    </div>
  );
}