const path = require('path');

// Obtain the current working directory (root of your project)
const projectRoot = process.cwd();

// Adjust the path to the yolo.conf.js file based on your project directory structure
const confPath = path.resolve(projectRoot, 'shadow.conf.js');

const conf = require(confPath);

const { configExe } = require('./parser/ConfigParser');

async function run(commandArgs) {
    await configExe(conf, commandArgs);
}

// commands line arguments
const commandLineArgs = process.argv.slice(2);
const typeOfArgs = ["suite", "spec"];
if(commandLineArgs[0].includes('spec') || commandLineArgs[0].includes('suite')) {
    const arg = commandLineArgs[0].split('=');
    if(arg[0] === 'suite'){
        console.log('Suite is getting executed');
    }
    if(arg[0] === 'spec'){
        console.log('Spec is getting executed');
        console.log("Single spec file getting executed!");
        const specFile = arg[1];
        run(specFile).catch((err) => {
            console.error(err);
        });
    }

} else {
    run().catch((err) => console.log(err));
}

