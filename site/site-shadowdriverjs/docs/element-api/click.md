# await element.click(...options)

## Introduction

ShadowDriverJS extends Selenium WebDriver's `WebElement` class by enhancing the `click()` method with additional functionality. You can now specify conditions that must be met before performing a click action, such as waiting for the element to be displayed or clickable. Additionally, you can choose whether to use JavaScript execution or Selenium's native driver for clicking.

## Table of Contents

- [Usage Examples](#usage-examples)
  - [Basic Click with Default Options](#basic-click-with-default-options)
  - [Using JavaScript Executor for Clicking](#using-javascript-executor-for-clicking)
  - [Waiting for Element to be Displayed](#waiting-for-element-to-be-displayed)
  - [Waiting for Element to be Visible](#waiting-for-element-to-be-visible)
  - [Waiting for Element to be Clickable (Enabled)](#waiting-for-element-to-be-clickable-enabled)
  - [Waiting for Element to be Present](#waiting-for-element-to-be-present)

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

### Waiting for Element to be Displayed

Wait until the element is displayed before performing the click action. This ensures that the element is rendered on the page before attempting to interact with it.

```javascript
const element = await element(by.xpath("//button[@id='myButton']"));
await element.click({ condition: "isDisplayed" });
```

### Waiting for Element to be Visible

Wait until the element is visible before performing the click action. This ensures that the element has a size and position on the page.

```javascript
const element = await element(by.xpath("//button[@id='myButton']"));
await element.click({ condition: "isVisible" });
```

### Waiting for Element to be Clickable (Enabled)

Wait until the element is clickable before performing the click action. This ensures that the element can actually be clicked.

```javascript
const element = await element(by.xpath("//button[@id='myButton']"));
await element.click({ condition: "isClickable" });
```

### Waiting for Element to be Present

Wait until the element is present before attempting a click. This ensures that the element exists in the DOM at the time of interaction.

```javascript
const element = await element(by.xpath("//button[@id='myButton']"));
await element.click({ condition: "isPresent" });
```

## Parameters

The `click()` method accepts an options object with the following parameters:

- **timeout**: The maximum amount of time to wait for the specified condition. Default value is 10 seconds (10000 milliseconds). Example:
  
  ```javascript
  await element.click({ timeout: 5000 });
  ```

- **jsClick**: Boolean indicating whether to use JavaScript execution (`true`) or Selenium's native driver click action (`false`). The default behavior depends on the specific case, but you can override it. Example:

  ```javascript
  await element.click({ jsClick: true });
  ```

- **condition**: A string representing the condition that must be met before performing the click. Valid values are:
  - `"isDisplayed"`
  - `"isVisible"`
  - `"isClickable"` (also accepted as `"isclickable"`)
  - `"isPresent"`

## Additional Considerations

- Ensure that you have imported the necessary modules from Selenium WebDriver and any other libraries you might be using.
- Be mindful of the default timeout value. You can override it if needed.
- If an element does not meet the specified condition within the given `timeout`, a timeout error will occur.

This enhanced `click()` method provides robust control over your test interactions, ensuring that elements are interacted with only when they are in a suitable state for interaction.

Happy coding!
