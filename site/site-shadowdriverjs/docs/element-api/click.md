# await element.click(...options)

## Introduction

ShadowDriverJS extends Selenium WebDriver's `WebElement` class by enhancing the `click()` method with additional functionality. You can now specify conditions that must be met before performing a click action, such as waiting for the element to be displayed or clickable. Additionally, you can choose whether to use JavaScript execution or Selenium's native driver for clicking.

## Table of Contents

- [Usage Examples](#usage-examples)
  - [Basic Click with Default Options](#basic-click-with-default-options)
  - [Using JavaScript Executor for Clicking](#using-javascript-executor-for-clicking)
## Usage Examples

### Basic Click with Default Options

This is the default usage of the `click()` method. No conditions are specified, so it will perform a click immediately.

```javascript
const element = await element(by.xpath("//button[@id='myButton']"));
await element.click();
```

### Using JavaScript Executor for Clicking

You can use the JavaScript executor to perform the click action instead of using Selenium's native driver. This is useful if you encounter issues with Selenium's native click operation.

```javascript
const element = await element(by.xpath("//button[@id='myButton']"));
await element.click({ jsClick: true });
```

## Additional Considerations

- Ensure that you have imported the necessary modules from Selenium WebDriver and any other libraries you might be using.
- Be mindful of the default timeout value. You can override it if needed.
- If an element does not meet the specified condition within the given `timeout`, a timeout error will occur.

This enhanced `click()` method provides robust control over your test interactions, ensuring that elements are interacted with only when they are in a suitable state for interaction.

Happy coding!

---