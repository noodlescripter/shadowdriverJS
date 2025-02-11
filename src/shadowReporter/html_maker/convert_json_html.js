const fs = require("fs")
const path = require("path")

/**
 * Generates HTML report directly from test results
 * @param {string} client_path - Output directory path
 */
function convert_json_html(client_path) {
  try {
    // Setup paths
    const jsonDir = path.resolve(__dirname, "../../../json-test-report")
    const outputPath = path.resolve(client_path, "test-report.html")

    // Ensure output directory exists
    if (!fs.existsSync(client_path)) {
      fs.mkdirSync(client_path, { recursive: true })
    }

    // Get all JSON files
    const jsonFiles = fs
      .readdirSync(jsonDir)
      .filter((file) => file.endsWith(".json"))

    let totalTests = 0
    let passedTests = 0
    let failedTests = 0
    let skippedTests = 0
    let testResults = []

    // Process each JSON file
    jsonFiles.forEach((filename) => {
      const filePath = path.join(jsonDir, filename)
      const fileContent = fs.readFileSync(filePath, "utf-8")
      const testData = JSON.parse(fileContent)

      totalTests += testData.summary?.total || 0
      passedTests += testData.summary?.passed || 0
      failedTests += testData.summary?.failed || 0
      skippedTests += testData.summary?.skipped || 0

      // Collect all test results
      if (testData.results) {
        testResults.push(...testData.results)
      }
    })

    // Generate HTML content
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Results</title>
    <style>
        :root {
            --success: #10b981;
            --error: #ef4444;
            --warning: #f59e0b;
            --info: #3b82f6;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.5;
            margin: 0;
            padding: 20px;
            background: #f3f4f6;
        }
        
        .header {
            background: #1e293b;
            color: white;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        
        .stat-card {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
            text-align: center;
        }
        
        .number {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 8px;
        }
        
        .total { color: var(--info); }
        .passed { color: var(--success); }
        .failed { color: var(--error); }
        .skipped { color: var(--warning); }
        
        .test-case {
            background: white;
            margin-bottom: 16px;
            padding: 16px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        
        .test-case.failed {
            border-left: 4px solid var(--error);
        }
        
        .error-details {
            background: #fef2f2;
            padding: 16px;
            margin-top: 16px;
            border-radius: 6px;
        }
        
        .error-message {
            color: var(--error);
            margin-bottom: 8px;
        }
        
        .error-stack {
            font-family: monospace;
            white-space: pre-wrap;
            background: #1e293b;
            color: #e5e7eb;
            padding: 12px;
            border-radius: 4px;
            overflow-x: auto;
        }
        
        .test-meta {
            display: flex;
            gap: 16px;
            margin-top: 8px;
            color: #6b7280;
            font-size: 14px;
        }
        
        .status-badge {
            display: inline-flex;
            align-items: center;
            padding: 4px 12px;
            border-radius: 9999px;
            font-size: 14px;
            font-weight: 500;
            color: white;
        }
        
        .status-badge.pass { background: var(--success); }
        .status-badge.fail { background: var(--error); }
        .status-badge.skip { background: var(--warning); }
        
        @media (max-width: 768px) {
            .stats-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Test Results <p>by sdr JS</p></h1>
    </div>
    
    <div class="stats-grid">
        <div class="stat-card">
            <div class="number total">${totalTests}</div>
            <div>Total Tests</div>
        </div>
        <div class="stat-card">
            <div class="number passed">${passedTests}</div>
            <div>Passed</div>
        </div>
        <div class="stat-card">
            <div class="number failed">${failedTests}</div>
            <div>Failed</div>
        </div>
        <div class="stat-card">
            <div class="number skipped">${skippedTests}</div>
            <div>Skipped</div>
        </div>
    </div>

    <div class="test-cases">
        ${testResults
          .map(
            (test) => `
            <div class="test-case ${test.status === "fail" ? "failed" : ""}">
                <h3>${test.fullTitle || test.title}</h3>
                <div class="test-meta">
                    <span class="status-badge ${test.status}">${
              test.status
            }</span>
                    <span>Duration: ${test.duration}ms</span>
                    <span>Executed: ${new Date(
                      test.timestamp
                    ).toLocaleString()}</span>
                </div>
                ${
                  test.error
                    ? `
                    <div class="error-details">
                        <div class="error-message">${test.error.message}</div>
                        ${
                          test.error.stack
                            ? `
                            <pre class="error-stack">${test.error.stack}</pre>
                        `
                            : ""
                        }
                        ${
                          test.error.diff
                            ? `
                            <div class="diff-details">
                                <h4>Differences:</h4>
                                <pre class="error-stack">${test.error.diff}</pre>
                            </div>
                        `
                            : ""
                        }
                        ${
                          test.error.expected || test.error.actual
                            ? `
                            <div class="comparison">
                                <h4>Expected:</h4>
                                <pre class="error-stack">${JSON.stringify(
                                  test.error.expected,
                                  null,
                                  2
                                )}</pre>
                                <h4>Actual:</h4>
                                <pre class="error-stack">${JSON.stringify(
                                  test.error.actual,
                                  null,
                                  2
                                )}</pre>
                            </div>
                        `
                            : ""
                        }
                    </div>
                `
                    : ""
                }
            </div>
        `
          )
          .join("")}
    </div>
</body>
</html>`

    fs.writeFileSync(outputPath, html)
    console.log("\nTest Report Summary:")
    console.log("-------------------")
    console.log(`Total Tests: ${totalTests}`)
    console.log(`Passed: ${passedTests}`)
    console.log(`Failed: ${failedTests}`)
    console.log(`Skipped: ${skippedTests}`)
    console.log(`\nReport saved to: ${outputPath}`)

    return outputPath
  } catch (error) {
    console.error("Error generating report:", error)
    throw error
  }
}

module.exports = {
  convert_json_html,
}
