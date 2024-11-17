const fs = require('fs');
const path = require('path');
const Mocha = require('mocha');
const { Base } = Mocha.reporters;

class ShadowReporter extends Base {
  constructor(runner) {
    super(runner);

    // Store test results
    this.results = [];

    // Define path for JSON output directory
    this.jsonOutputDir = path.resolve(__dirname, '../../json-test-report/'); // Adjust if necessary

    // Ensure the output directory exists
    if (!fs.existsSync(this.jsonOutputDir)) {
      fs.mkdirSync(this.jsonOutputDir, { recursive: true });
    }

    // Listen to events from the runner
    runner.on('pass', (test) => this.onTestEnd(test, 'pass'));
    runner.on('fail', (test, err) => this.onTestEnd(test, 'fail', err));
    runner.on('end', () => {
      console.log('onEnd method is triggered');
      this.onEnd();
    });
  }

  // Handle test end, store the result
  onTestEnd(test, status, err = null) {
    this.results.push({
      title: test.title,
      fullTitle: test.fullTitle(),
      duration: test.duration,
      status: status,
      error: err ? err.message : null,
    });
  }

  // Handle the end of all tests, save results to JSON
  onEnd() {
    const jsonReport = JSON.stringify(this.results, null, 2);
    // Write the results to a JSON file
    const outputPath = path.join(this.jsonOutputDir, 'test-results.json');
    fs.writeFileSync(outputPath, jsonReport);

    console.log(`Test results written to: ${outputPath}`);
  }
}

module.exports = ShadowReporter;