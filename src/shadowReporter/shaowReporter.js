const fs = require("fs")
const path = require("path")
const Mocha = require("mocha")
const { Base } = Mocha.reporters

class ShadowReporter extends Base {
  constructor(runner) {
    super(runner)

    // Store test results
    this.results = []
    this.currentSuite = null
    this.suites = new Map() // Track all suites and their tests

    // Define path for JSON output directory
    this.jsonOutputDir = path.resolve(__dirname, "../../json-test-report/")

    // Ensure the output directory exists
    if (!fs.existsSync(this.jsonOutputDir)) {
      fs.mkdirSync(this.jsonOutputDir, { recursive: true })
    }

    // Track current suite
    runner.on("suite", (suite) => {
      this.currentSuite = suite.title
      if (!this.suites.has(suite.title)) {
        this.suites.set(suite.title, [])
      }
    })

    // Listen to events from the runner
    runner.on("pass", (test) => this.onTestEnd(test, "pass"))
    runner.on("fail", (test, err) => this.onTestEnd(test, "fail", err))
    runner.on("pending", (test) => this.onTestEnd(test, "pending"))
    runner.on("end", () => {
      console.log("\nTest execution completed. Generating report...")
      this.onEnd()
    })
  }

  // Handle test end, store the result
  onTestEnd(test, status, err = null) {
    const result = {
      title: test.title,
      suite: this.currentSuite || 'Default Suite',
      fullTitle: test.fullTitle(),
      duration: test.duration || 0,
      status: status,
      timestamp: new Date().toISOString(),
      error: null
    }

    // Handle different types of errors and status
    if (err) {
      result.error = {
        message: err.message,
        stack: err.stack,
        actual: err.actual,
        expected: err.expected
      }
    }

    // For pending/skipped tests
    if (status === "pending") {
      result.duration = 0
      result.status = "skipped"
    }

    this.results.push(result)
    
    // Add to suite tracking
    if (this.suites.has(this.currentSuite)) {
      this.suites.get(this.currentSuite).push(result)
    }
  }

  // Print test list by suite
  printTestList() {
    console.log("\n=== Complete Test Execution List ===")
    
    this.suites.forEach((tests, suiteName) => {
      if (suiteName) {  // Only print suite name if it exists
        console.log(`\n${suiteName}:`)
      }
      
      tests.forEach(test => {
        let icon, color
        switch (test.status) {
          case "pass":
            icon = "✓"
            color = "\x1b[32m" // Green
            break
          case "fail":
            icon = "✗"
            color = "\x1b[31m" // Red
            break
          case "skipped":
            icon = "-"
            color = "\x1b[33m" // Yellow
            break
        }
        
        console.log(`${color}  ${icon} ${test.title}\x1b[0m (${test.duration}ms)`)
        
        // Print error message if test failed
        if (test.error) {
          console.log(`     \x1b[31mError: ${test.error.message}\x1b[0m`)
        }
      })
    })
  }

  // Handle the end of all tests, save results to JSON
  onEnd() {
    // Generate summary statistics
    const summary = {
      total: this.results.length,
      passed: this.results.filter(r => r.status === "pass").length,
      failed: this.results.filter(r => r.status === "fail").length,
      skipped: this.results.filter(r => r.status === "skipped").length,
      duration: this.results.reduce((sum, test) => sum + (test.duration || 0), 0)
    }

    const report = {
      timestamp: new Date().toISOString(),
      summary: summary,
      results: this.results
    }

    // Write the results to a JSON file with timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    const outputPath = path.join(this.jsonOutputDir, `test-results.json`)
    fs.writeFileSync(outputPath, JSON.stringify(report, null, 2))
    
    // Print test list first
    this.printTestList()
    
    // Print summary
    console.log("\n=== Test Execution Summary ===")
    console.log(`Total Tests: ${summary.total}`)
    console.log(`\x1b[32mPassed: ${summary.passed}\x1b[0m`)
    console.log(`\x1b[31mFailed: ${summary.failed}\x1b[0m`)
    console.log(`\x1b[33mSkipped: ${summary.skipped}\x1b[0m`)
    console.log(`Total Duration: ${summary.duration}ms`)
    console.log(`\nReport saved to: ${outputPath}`)
  }
}

module.exports = ShadowReporter