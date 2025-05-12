const fs = require('fs').promises
const path = require('path')
const Mocha = require('mocha')
const { Base } = Mocha.reporters

// ANSI color codes for console output
const COLORS = {
  RESET: '\x1b[0m',
  GREEN: '\x1b[32m',
  RED: '\x1b[31m',
  YELLOW: '\x1b[33m'
}

// Test status icons
const STATUS_ICONS = {
  pass: '✓',
  fail: '✗',
  skipped: '-'
}

class ShadowReporter extends Base {
  constructor(runner) {
    super(runner)
    
    this.results = []
    this.currentSuite = null
    this.suites = new Map()
    this.startTime = Date.now()
    
    // Initialize report directory
    this.jsonOutputDir = path.resolve(__dirname, '../../json-test-report/')
    this.initializeReporter(runner)
  }

  async initializeReporter(runner) {
    try {
      await fs.mkdir(this.jsonOutputDir, { recursive: true })
      this.setupEventListeners(runner)
    } catch (error) {
      console.error('Failed to initialize reporter:', error)
    }
  }

  setupEventListeners(runner) {
    runner.on('suite', (suite) => {
      this.currentSuite = suite.title
      if (!this.suites.has(suite.title)) {
        this.suites.set(suite.title, [])
      }
    })

    runner.on('pass', (test) => this.onTestEnd(test, 'pass'))
    runner.on('fail', (test, err) => this.onTestEnd(test, 'fail', err))
    runner.on('pending', (test) => this.onTestEnd(test, 'skipped'))
    runner.on('end', () => this.onEnd())
  }

  formatDuration(ms) {
    if (ms < 1000) return `${ms}ms`
    return `${(ms / 1000).toFixed(2)}s`
  }

  onTestEnd(test, status, err = null) {
    const result = {
      title: test.title,
      suite: this.currentSuite || 'Default Suite',
      fullTitle: test.fullTitle(),
      duration: test.duration || 0,
      status,
      timestamp: new Date().toISOString(),
      error: err ? {
        message: err.message,
        stack: err.stack,
        actual: err.actual,
        expected: err.expected,
        diff: err.diff // Adding diff for better error reporting
      } : null
    }

    this.results.push(result)
    
    if (this.suites.has(this.currentSuite)) {
      this.suites.get(this.currentSuite).push(result)
    }
  }

  printTestResult(test) {
    const icon = STATUS_ICONS[test.status]
    const color = test.status === 'pass' ? COLORS.GREEN :
                 test.status === 'fail' ? COLORS.RED : 
                 COLORS.YELLOW
    
    console.log(
      `${color}  ${icon} ${test.title}${COLORS.RESET} (${this.formatDuration(test.duration)})`
    )

    if (test.error) {
      console.log(`     ${COLORS.RED}Error: ${test.error.message}${COLORS.RESET}`)
      if (test.error.diff) {
        console.log(`     ${COLORS.RED}Diff: ${test.error.diff}${COLORS.RESET}`)
      }
    }
  }

  printTestList() {
    console.log('\n=== Complete Test Execution List ===')

    this.suites.forEach((tests, suiteName) => {
      if (suiteName) {
        console.log(`\n${suiteName}:`)
      }
      tests.forEach(test => this.printTestResult(test))
    })
  }

  async saveReport(report, outputPath) {
    try {
      await fs.writeFile(outputPath, JSON.stringify(report, null, 2))
      console.log(`\nReport saved to: ${outputPath}`)
    } catch (error) {
      console.error('Failed to save report:', error)
    }
  }

  generateSummary() {
    const endTime = Date.now()
    return {
      total: this.results.length,
      passed: this.results.filter(r => r.status === 'pass').length,
      failed: this.results.filter(r => r.status === 'fail').length,
      skipped: this.results.filter(r => r.status === 'skipped').length,
      duration: endTime - this.startTime,
      startTime: new Date(this.startTime).toISOString(),
      endTime: new Date(endTime).toISOString()
    }
  }

  printSummary(summary) {
    console.log('\n=== Test Execution Summary ===')
    console.log(`Total Tests: ${summary.total}`)
    console.log(`${COLORS.GREEN}Passed: ${summary.passed}${COLORS.RESET}`)
    console.log(`${COLORS.RED}Failed: ${summary.failed}${COLORS.RESET}`)
    console.log(`${COLORS.YELLOW}Skipped: ${summary.skipped}${COLORS.RESET}`)
    console.log(`Total Duration: ${this.formatDuration(summary.duration)}`)
  }

  async onEnd() {
    console.log('\nTest execution completed. Generating report...')
    
    const summary = this.generateSummary()
    const report = {
      timestamp: new Date().toISOString(),
      summary,
      results: this.results
    }

    // Generate a safe filename using timestamp
    const timestamp = new Date()
      .toISOString()
      .replace(/[:.]/g, '-')
      .split('.')[0] // Remove milliseconds
    
    const outputPath = path.join(
      this.jsonOutputDir,
      `test-results-${timestamp}.json`
    )
    
    this.printTestList()
    this.printSummary(summary)
    await this.saveReport(report, outputPath)
  }
}

module.exports = ShadowReporter