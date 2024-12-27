const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');

/**
 * Converts test results JSON to HTML report using handlebars template
 * @param {string} client_path - Path where the HTML report should be generated
 */
function convert_json_html(client_path) {
    try {
        // Define paths
        const json_res_path = path.join(__dirname, "../../../json-test-report/test-results.json");
        const temp_path = path.join(__dirname, "../template.html");
        const generate = path.join(client_path, "test-report.html");

        // Read and parse test results
        const testData = JSON.parse(fs.readFileSync(json_res_path, 'utf-8'));
        
        // Read template
        const templateContent = fs.readFileSync(temp_path, 'utf-8');

        // Register custom handlebars helpers
        handlebars.registerHelper('formatDuration', function(duration) {
            return duration ? `${duration.toFixed(2)}ms` : '0ms';
        });

        handlebars.registerHelper('formatTimestamp', function(timestamp) {
            return new Date(timestamp).toLocaleString();
        });

        handlebars.registerHelper('getStatusIcon', function(status) {
            switch(status) {
                case 'pass': return '✓';
                case 'fail': return '✗';
                case 'skipped': return '-';
                default: return '?';
            }
        });

        // Prepare data for template
        const templateData = {
            timestamp: testData.timestamp,
            totalTests: testData.summary.total,
            passedTests: testData.summary.passed,
            failedTests: testData.summary.failed,
            skippedTests: testData.summary.skipped,
            totalDuration: testData.summary.duration,
            results: testData.results.map(result => ({
                ...result,
                statusClass: result.status,
                durationFormatted: `${result.duration}ms`,
                timestampFormatted: new Date(result.timestamp).toLocaleString()
            }))
        };

        // Compile template
        const template = handlebars.compile(templateContent);
        
        // Generate HTML with provided data
        const htmlOutput = template(templateData);

        // Write HTML file
        fs.writeFileSync(generate, htmlOutput);

        console.log(`Test report generated successfully at: ${generate}`);
        
        // Return the path to the generated report
        return generate;

    } catch (error) {
        console.error('Error generating test report:', error);
        throw error;
    }
}

/**
 * Format the duration in a human-readable format
 * @param {number} duration - Duration in milliseconds
 * @returns {string} Formatted duration
 */
function formatDuration(duration) {
    if (duration < 1000) {
        return `${duration}ms`;
    }
    return `${(duration / 1000).toFixed(2)}s`;
}

module.exports = { 
    convert_json_html 
};