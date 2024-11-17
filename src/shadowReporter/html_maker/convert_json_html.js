const fs = require('fs');
const path = require('path')
const handleBars = require('handlebars');

function convert_json_html(client_path){
  const json_res_path = path.join(__dirname, "../../../json-test-report/test-results.json");
  const temp_path = path.join(__dirname, "../template.html");
  const generate = path.join(client_path, "report.html");
  const testRes = JSON.parse(fs.readFileSync(json_res_path, 'utf-8'));
  const temp = fs.readFileSync(temp_path, 'utf-8');
  const template = handleBars.compile(temp);
  const htmlOut = template({results: testRes});
  fs.writeFileSync(generate, htmlOut);
}
module.exports = {convert_json_html}