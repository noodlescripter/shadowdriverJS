const fs = require('fs');
const path = require('path');

async function copyFiles(sourceFiles, destinationDir) {
    try {
        // Create destination directory if it doesn't exist
        if (!fs.existsSync(destinationDir)) {
            fs.mkdirSync(destinationDir, { recursive: true });
        }

        // Array to store file copy promises
        const copyPromises = sourceFiles.map(async (sourcePath) => {
            try {
                // Get the filename from the source path
                const fileName = path.basename(sourcePath);
                const destPath = path.join(destinationDir, fileName);

                // Check if source file exists
                if (!fs.existsSync(sourcePath)) {
                    throw new Error(`Source file not found: ${sourcePath}`);
                }

                // Copy the file
                await fs.promises.copyFile(sourcePath, destPath);
                console.log(`Successfully copied ${fileName} to ${destinationDir}`);
                return { success: true, file: fileName };
            } catch (error) {
                console.error(`Error copying ${sourcePath}:`, error.message);
                return { success: false, file: sourcePath, error: error.message };
            }
        });

        // Wait for all copies to complete
        const results = await Promise.all(copyPromises);
        
        // Log summary
        const successful = results.filter(r => r.success).length;
        console.log(`\nCopy complete: ${successful}/${results.length} files copied successfully`);
        
        return results;
    } catch (error) {
        console.error('Error in copyFiles:', error.message);
        throw error;
    }
}

const filesToCopy = [
    'src/shadowReporter/template.html'
]

const dir = 'package/shadowReporter'

copyFiles(filesToCopy, dir)
.then(res =>{
  console.log('done copying')  
})
.catch(err =>{
    return Error(err)
})