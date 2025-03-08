# ShadowdriverJS Logging Options

### Overview of Logging Configuration in ShadowDriverJS

ShadowdriverJS provides the ability to configure detailed logging preferences through the `capabilities` object. This allows you to control the log level for both the WebDriver and browser logs, helping you manage verbosity and focus on critical issues.

#### Log Levels
The available log levels include:

1. **OFF**: Disables all logging.
2. **ALL**: Logs everything (debug, info, warning, error).
3. **DEBUG**: Logs debug messages that provide detailed information useful for debugging.
4. **INFO**: Logs informational messages that describe the normal operation of ShadowDriverJS.
5. **SEVERE**: Logs only critical errors and issues that might require immediate attention.
6. **WARNING**: Logs warnings that may not be critical but are worth noticing.

### Configuration Example

To configure logging in ShadowdriverJS, you use the `capabilities` object and specify the desired log levels for both the `driver_log` and `browser_log` properties.

#### Example Configuration
```javascript
// Configure logging preferences
 capabilities:{
    // all other caps
    driver_log: "severe", // OFF, ALL, DEBUG, INFO, SEVERE, WARNING
    browser_log: "severe" // OFF, ALL, DEBUG, INFO, SEVERE, WARNING
  }

```

### Controlling Verbosity of Logs

Depending on the log level you choose, you can control the verbosity of logs:

1. **SEVERE**: Only critical errors will be logged, keeping the log output minimal and focused on serious issues.
   - Example: This setting is useful for production environments where you want to minimize logging noise.
   
2. **ALL**: This setting will log everything, including debug messages that are useful for troubleshooting, but may result in large log files.
   - Example: This setting is ideal for development environments or when debugging specific issues.

### Reviewing Logs

After configuring the logs, you can review them by checking the specified log file (for example, `./chromedriver.log`). Here’s how you can access and view the logs:

1. **Log File Path**: The default log file path depends on your setup, but it is typically something like `/tmp/chromedriver.log` or a similar directory.
2. **Reviewing Logs**:
   - You can use tools like `cat`, `less`, or any text editor to open and review the log files.

#### Example: Using `cat` Command

```bash
cat ./chromedriver.log
```

Or using `less` for pagination:

```bash
less ./chromedriver.log
```

### Best Practices

- **Production Environment**: Use the `SEVERE` or `WARNING` log level to minimize noise and focus on critical issues.
- **Development Environment**: Use the `ALL` or `DEBUG` log level to capture detailed information for troubleshooting.


By configuring logging levels appropriately, you can ensure that your logs are useful and not overwhelming, helping you maintain a balance between verbosity and focus on critical issues.

## References

- **Capabilities Documentation**: [ShadowdriverJS Capabilities](../config)
- **Logging Levels**: [Log Level Descriptions](#)

---

This documentation provides an overview of how to configure logging in ShadowDriverJS, including the available log levels and best practices for different environments.