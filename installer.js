const fs = require('fs');
const readline = require('readline');
const { exec } = require('child_process');
const chalk = require('chalk');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to create a project folder and files with content
function createProjectFolder(projectName) {
    const projectPath = `./${projectName}`;

    // Create the project folder in the current directory
    fs.mkdirSync(projectPath);
    fs.mkdirSync(`${projectPath}/e2e`);

    // Create files with content
    const fileContents = {
        'yolo.conf.js': 'module.exports = {};',
        'package.json': '{ "name": "' + projectName + '", "version": "1.0.0", "description": "yoloJS testing library, using webdriverJS. Built with the respect of ProtractorJS", "main": "", "scripts": { "yolo": "node ./node_modules/yolojs/yolo.js" }, "author": "", "license": "ISC" }',
        'jsconfig.json': '{ "compilerOptions": { "target": "ES6" } }'
    };

    const e2eSampleSpec = "describe('Sample Test Suite', async function () {\n" +
        "\n" +
        "    it('should perform a sample test case', async function () {\n" +
        "        await browser.get(baseURL);\n" +
        "        await browser.sleep(3000);\n" +
        "        await element(by.xpath('//*[@title=\"Search\"]')).sendKeys(\"Hello\");\n" +
        "        await browser.sleep(3000);\n" +
        "        await element(by.xpath('//*[@title=\"Search\"]')).clear();\n" +
        "        await element(by.xpath('//*[@title=\"Search\"]')).sendKeys(\"tor mare chudi\")\n" +
        "        await browser.sleep(3000);\n" +
        "        const windows = await browser.getAllWindowHandles();\n" +
        "        if(windows.length > 2){\n" +
        "            console.info(\"Many windows found\");\n" +
        "        } else {\n" +
        "            console.info(\"No window is here only one\");\n" +
        "        }\n" +
        "        await browser.quit();\n" +
        "    });\n" +
        "});\n"

    for (const fileName in fileContents) {
        fs.writeFileSync(`${projectPath}/${fileName}`, fileContents[fileName]);
    }
    fs.writeFileSync(`${projectPath}/e2e/sample.spec.js`, e2eSampleSpec);
    console.log(chalk.green(`Project folder "${projectName}" created with files and content in the current directory.`));
}

rl.question('Enter the project name: ', (projectName) => {
    createProjectFolder(projectName);
    rl.question('Do you want to run "npm install"? (yes/no): ', (answer) => {
        if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y' || answer.toLowerCase() === null || answer.toLowerCase() === '') {
            exec('npm install', (error, stdout, stderr) => {
                if (error) {
                    console.error(chalk.red(`Error running npm install: ${error}`));
                } else {
                    console.log(chalk.green(stdout));
                    console.log(chalk.bgCyan('Developer of this library is looking for a good job, @noodlescripter, hamim.alam.personal@gmail.com, hamimalam@outlook.com'));
                    console.log(chalk.bgCyan('Thank you for installing yoloJS 1.0.0 BETA, Happy Coding.'));
                }
                rl.close();
            });
        } else {
            console.log(chalk.bgBlue('Skipping npm install.'));
            rl.close();
        }
    });
});
