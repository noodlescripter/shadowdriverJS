# Browser Extensions API

The Browser Extensions API provides additional functionality to enhance browser automation capabilities in ShadowdriverJS. This API extends the base browser instance with methods for window management, browser information, screenshots, and more.

## Browser Information

### `getBrowserName()`
Returns the name of the current browser.

```javascript
const browserName = await browser.getBrowserName();
// Returns: "chrome", "firefox", "edge", or "safari"
```

### `getBrowserVersion()`
Returns the version of the current browser.

```javascript
const version = await browser.getBrowserVersion();
// Returns: "120.0.6099.109" (example version)
```

## Window Management

### `getAllWindows()`
Returns an array of all window handles.

```javascript
const windows = await browser.getAllWindows();
// Returns: ["CDwindow-1234", "CDwindow-5678"]
```

### `getCurrentWindow()`
Returns the handle of the current window.

```javascript
const currentWindow = await browser.getCurrentWindow();
// Returns: "CDwindow-1234"
```

### `switchToWindow(handle)`
Switches to a specific window using its handle.

```javascript
await browser.switchToWindow("CDwindow-1234");
```

### `createNewWindow()`
Creates a new browser window and returns its handle.

```javascript
const newWindow = await browser.createNewWindow();
// Returns: "CDwindow-5678"
```

### `createNewTab()`
Creates a new browser tab and returns its handle.

```javascript
const newTab = await browser.createNewTab();
// Returns: "CDwindow-5678"
```

### `closeCurrentWindow()`
Closes the current window or tab.

```javascript
await browser.closeCurrentWindow();
```

## Window Size Control

### `setWindowSize(width, height)`
Sets the size of the current window.

```javascript
await browser.setWindowSize(1024, 768);
```

### `maximizeWindow()`
Maximizes the current window.

```javascript
await browser.maximizeWindow();
```

### `minimizeWindow()`
Minimizes the current window.

```javascript
await browser.minimizeWindow();
```

### `getWindowSize()`
Returns the current window dimensions.

```javascript
const size = await browser.getWindowSize();
// Returns: { width: 1024, height: 768 }
```

## Screenshots

### `takeScreenshot()`
Takes a screenshot of the current page and returns it as a base64 encoded string.

```javascript
const screenshot = await browser.takeScreenshot();
// Returns: "iVBORw0KGgoAAAANSUhEUgAA..."
```

### `saveScreenshot(filePath)`
Takes a screenshot and saves it to the specified file path.

```javascript
await browser.saveScreenshot("./screenshots/test.png");
```

## Browser Logs

### `getLogs(type)`
Retrieves browser logs of the specified type.

```javascript
// Get browser logs
const browserLogs = await browser.getLogs("browser");

// Get driver logs
const driverLogs = await browser.getLogs("driver");

// Get performance logs
const performanceLogs = await browser.getLogs("performance");
```

## Browser Configuration

The browser can be configured using the `shadow.conf.js` file. Here's an example configuration:

```javascript
module.exports = {
  capabilities: {
    browserName: "chrome", // or "firefox", "edge", "safari"
    "goog:chromeOptions": {
      args: ["--headless", "--disable-gpu"]
    },
    driverPath: "/path/to/chromedriver",
    browserPath: "/path/to/chrome",
    browser_log: "info",
    driver_log: "info"
  }
};
```

### Supported Browsers

- **Chrome**
  - Options: `goog:chromeOptions`
  - Driver: chromedriver

- **Firefox**
  - Options: `moz:firefoxOptions`
  - Driver: geckodriver

- **Edge**
  - Options: `ms:edgeOptions`
  - Driver: edgedriver

- **Safari**
  - Options: `safari.options`
  - Driver: safaridriver

## Timeouts

The browser automatically sets the following timeouts:

- Implicit Wait: 10 seconds
- Page Load: 20 seconds
- Script Execution: 30 seconds

These timeouts can be modified using the WebDriver's timeout management:

```javascript
await browser.manage().setTimeouts({
  implicit: 5000,    // 5 seconds
  pageLoad: 10000,   // 10 seconds
  script: 15000      // 15 seconds
});
```

## Error Handling

The browser extensions include proper error handling for common scenarios:

- Invalid window handles
- Browser initialization failures
- Screenshot capture errors
- Log retrieval errors

Example error handling:

```javascript
try {
  await browser.switchToWindow("invalid-handle");
} catch (error) {
  console.error("Failed to switch window:", error.message);
}
``` 