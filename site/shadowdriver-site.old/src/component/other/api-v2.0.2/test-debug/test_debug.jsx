export default function ShadowdriverTestDebug() {
  const codeString = `
    // .vscode/launch.json
    {
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "shadow-runner",
      "program": "${"${workspaceFolder}"}/src/shadowRunner/runner.js",
      "args": ["exec", "shadow.conf.js", "--spec", "${"${file}"}"],
      "skipFiles": ["<node_internals>/**"],
      "env": {
        "NODE_ENV": "development"
      },
      "console": "integratedTerminal"
    }
  ]
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
          ShadowdriverJS Debug Configuration
        </h2>
        <hr
          style={{
            height: "5px",
            backgroundColor: "white",
            border: "none",
            margin: "20px 0",
          }}
        />

        {/* Description Section */}
        <p className="fs-5 text-white">
          <strong>[1]</strong> ShadowDriverJS can be easily debugged in VS Code
          by setting up a proper launch configuration. This allows you to:
        </p>

        <ul className="fs-5 text-white">
          <li>
            <span className="text-success">Set breakpoints</span> in your test
            files
          </li>
          <li>
            <span className="text-success">Step through code</span> during test
            execution
          </li>
          <li>
            <span className="text-success">Inspect variables</span> in real-time
          </li>
          <li>
            <span className="text-success">Debug test failures</span> more
            effectively
          </li>
        </ul>

        <p className="fs-5 text-white">
          <strong>[2]</strong> To set up debugging in VS Code, create a{" "}
          <span className="text-success">.vscode/launch.json</span> file in your
          project root with the following configuration:
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
          <strong>[3]</strong> The configuration includes several important
          properties:
        </p>

        <ul className="fs-5 text-white">
          <li>
            <span className="text-warning">program</span>: Points to the shadow
            runner script location
          </li>
          <li>
            <span className="text-warning">args</span>: Specifies the
            configuration file and test spec to run
          </li>
          <li>
            <span className="text-warning">console</span>: Uses the integrated
            terminal for better output visibility
          </li>
        </ul>

        <p className="fs-5 text-white">
          <strong>[4]</strong> After setting up the configuration, you can start
          debugging by pressing F5 or using the VS Code debug panel with your
          test file open.
        </p>
      </div>
    </div>
  )
}
