const AdmZip = require('adm-zip');
const fs = require('fs/promises');
const path = require('path');

/**
 * Unzips a file and renames the extracted folder or files.
 * @param {string} zipFilePath - Path to the ZIP file.
 * @param {string} extractToPath - Directory where the files will be extracted.
 * @param {string} newName - New name for the extracted folder or file.
 */
async function unzipAndRename({ zipFilePath, extractToPath, newName }) {
  if (!zipFilePath || !extractToPath || !newName) {
    throw new Error('zipFilePath, extractToPath, and newName are required parameters.');
  }

  try {
    // Ensure the ZIP file exists
    await fs.access(zipFilePath);

    // Unzip the file
    const zip = new AdmZip(zipFilePath);
    zip.extractAllTo(extractToPath, true);
    console.log(`Files extracted to ${extractToPath}`);

    // Get the extracted items
    const extractedItems = await fs.readdir(extractToPath);
    if (extractedItems.length === 0) {
      throw new Error('No files or folders found in the ZIP file.');
    }

    // Rename the first extracted item (assuming one main folder/file is extracted)
    const originalPath = path.join(extractToPath, extractedItems[0]);
    const newPath = path.join(extractToPath, newName);

    await fs.rename(originalPath, newPath);
    console.log(`Renamed ${originalPath} to ${newPath}`);
  } catch (err) {
    console.error(`Error unzipping or renaming: ${err.message}`);
  }
}
module.exports = {unzipAndRename}