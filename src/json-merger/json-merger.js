const fs = require("fs");
const path = require("path");

function mergeJSON(inputDIR, outputDIR) {
  try {
    const json_files = fs.readdirSync(inputDIR);

    // Filter out JSON files
    const s_json_file = json_files.filter(file => file.endsWith('.json'));

    if (s_json_file.length > 0) {
      let mergeData = [];

      // Read each JSON file and parse its data
      for (const sFile of s_json_file) {
        const filePath = path.join(inputDIR, sFile);
        const fileData = fs.readFileSync(filePath, 'utf-8');
        const json_data = JSON.parse(fileData);
        mergeData.push(json_data);
      }
      // Write the merged data to the output directory
      fs.writeFileSync(outputDIR, JSON.stringify(mergeData, null, 2));
      console.log('JSON files have been successfully merged into:', outputDIR);
    } else {
      console.log('No JSON files found to merge.');
    }
  } catch (mergeJSONError) {
    console.error('Error merging JSON files:', mergeJSONError.message);
  }
}

module.exports = { mergeJSON };