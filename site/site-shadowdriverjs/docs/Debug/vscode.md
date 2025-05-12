# ShadowdriverJS Debug Configuration

### Overview of Debugging in ShadowdriverJS

ShadowdriverJS can be easily debugged in Visual Studio Code (VS Code) by setting up a proper launch configuration. This allows you to:

1. **Set breakpoints** in your test files.
2. **Step through code** during test execution.
3. **Inspect variables** in real-time for better debugging.
4. **Debug test failures** more effectively.

### Setting Up Debugging in VS Code

To set up debugging, follow these steps and create a `.vscode/launch.json` file in your project root with the appropriate configuration:

#### Example `launch.json` Configuration
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "shadow-runner",
      "program": "${workspaceFolder}/src/shadowRunner/runner.js",
      "args": ["exec", "shadow.conf.js", "--spec", "${file}"],
      "skipFiles": [
        "<node_internals>/**"
      ],
      "env": {
        "NODE_ENV": "development"
      },
      "console": "integratedTerminal"
    }
  ]
}
```

### Explanation of Configuration Properties

1. **`type: node`**: Specifies that the debugger is for Node.js applications.
2. **`request: launch`**: Indicates that this configuration sets up a debugging session.
3. **`name: shadow-runner`**: A descriptive name for your debugging configuration, which appears in the VS Code debug panel.
4. **`program: ${workspaceFolder}/src/shadowRunner/runner.js`**: Points to the location of the `shadow-runner.js` script that runs ShadowdriverJS tests. Adjust this path according to your project structure.
5. **`args: ["exec", "shadow.conf.js", "--spec", "${file}"]`**: Specifies the arguments passed to the `shadowRunner.js`. This typically includes:
   - `"exec"`: The command to execute.
   - `"shadow.conf.js"`: The configuration file used by ShadowdriverJS.
   - `"--spec" "${file}"`: Indicates that you are debugging a specific test file. Replace `${file}` with the actual path or filename of your test file when you start debugging.
6. **`skipFiles: ["<node_internals>/**"]`**: Skips files in the Node.js internals folder, which helps prevent unnecessary debug output.
7. **`env: { "NODE_ENV": "development" }`**: Sets the environment variable `NODE_ENV` to `development`, which is useful for enabling certain features or configurations specific to development mode.
8. **`console: integratedTerminal`**: Uses the VS Code integrated terminal for better output visibility.

### Steps to Set Up and Debug

1. **Create the `.vscode/launch.json` File**:
   - Open your project in VS Code.
   - Navigate to `File -> Preferences -> Settings`, then search for "launch json" or use the shortcut `Ctrl + Shift + D`.
   - Click on the `launch.json` file and ensure it is open.
   - Paste the provided JSON configuration into this file.

2. **Start Debugging**:
   - Open the test file you want to debug in VS Code.
   - Press `F5` or click on the green play button in the debug panel.
   - Alternatively, you can right-click on the `launch.json` configuration and select "Run 'shadow-runner'".

### Benefits of Setting Up Debugging

- **Set Breakpoints**: You can set breakpoints anywhere in your test files to pause execution at specific points for inspection.
- **Step Through Code**: Use step-by-step debugging features to inspect variable values, function calls, and more during the execution of tests.
- **Inspect Variables**: View and modify variables on-the-fly without interrupting the flow of the program.
- **Debug Test Failures**: Easily debug failing tests by setting breakpoints and stepping through the code to identify issues.

### Example: Debugging a Test File

Suppose you want to debug a test file named `example.test.js` located in your project directory. Here’s how you would set up and start debugging:

1. **Create `.vscode/launch.json`**:
   ```json
   {
     "version": "0.2.0",
     "configurations": [
       {
         "type": "node",
         "request": "launch",
         "name": "shadow-runner",
         "program": "${workspaceFolder}/src/shadowRunner/runner.js",
         "args": ["exec", "shadow.conf.js", "--spec", "example.test.js"],
         "skipFiles": [
           "<node_internals>/**"
         ],
         "env": {
           "NODE_ENV": "development"
         },
         "console": "integratedTerminal"
       }
     ]
   }
   ```

2. **Start Debugging**:
   - Open `example.test.js` in VS Code.
   - Press `F5` or click the debug button and select `shadow-runner`.
   - The debugger will start, and you can set breakpoints and step through the code as needed.

### Further Reading

For more information on configuring other settings or advanced debugging features, please refer to the following documents:

- [VS Code Debugging Guide](https://code.visualstudio.com/docs/editor/debugging)

By setting up this configuration, you can effectively debug your ShadowdriverJS tests and improve development efficiency.

---

This comprehensive guide should help you set up and start debugging your ShadowdriverJS projects in Visual Studio Code.