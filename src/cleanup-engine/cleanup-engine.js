const path = require("path")
const fs = require("fs/promises")
async function deleteFile({ file_path, recursive = false, force = false }) {
  try {
    await fs.rm(path.resolve(file_path), { recursive, force })
    console.log("File or directory deleted successfully")
  } catch (err) {
    console.error(`Error deleting file or directory: ${err.message}`)
  }
}

module.exports = { deleteFile }
