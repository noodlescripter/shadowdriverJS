const path = require('path');

// Obtain the current working directory (root of your project)
const projectRoot = process.cwd();

// Adjust the path to the yolo.conf.js file based on your project directory structure
const confPath = path.resolve(projectRoot, 'shadow.conf.js');

const conf = require(confPath);

const { configExe } = require('./parser/ConfigParser');

async function run() {
    await configExe(conf);
}

run().catch((err) => console.log(err));
