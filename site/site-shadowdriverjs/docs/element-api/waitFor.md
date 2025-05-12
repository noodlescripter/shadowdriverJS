# element.waitFor(...options)

## Introduction

ShadowDriverJS is a powerful library that extends Selenium WebDriver capabilities to handle elements within shadow DOM. This README provides detailed information about the `waitFor()` method, which is used to wait until an element meets certain conditions.

## Table of Contents

- [Overview](#overview)
- [Usage](#usage)
  - [Basic Usage](#basic-usage)
  - [Advanced Options](#advanced-options)
- [Examples](#examples)
- [FAQs](#faqs)

## Overview

The `waitFor()` method is a helper function provided by ShadowDriverJS that simplifies the process of waiting for elements to meet specific conditions. It can be used with any element found using the `element(by.xpath(...))`, `element(by.css(...))`, or other similar locators.

This method is particularly useful when dealing with elements inside shadow DOM, where standard methods might not work due to encapsulation constraints.

## Usage

### Basic Usage

The most basic usage of `waitFor()` involves specifying a condition that the element must meet. The library will keep checking this condition until it becomes true or until a timeout occurs.

```javascript
await element(by.xpath("//div")).waitFor();
```

This line waits indefinitely (or until the specified timeout) for the element to be present in the DOM.

### Advanced Options

For more control over the waiting process, you can provide advanced options. These options allow you to specify various parameters that define how the `waitFor()` method should behave.

#### Element Visibility

To wait until an element is visible, use:

```javascript
await element(by.xpath("//div")).waitFor({ options: "elementIsVisible" });
```

This ensures that not only does the element exist in the DOM, but it is also fully visible to the user. The function will continue checking if the element becomes visible.

#### Element Display

To wait until an element is displayed (i.e., has a display style other than `none`), use:

```javascript
await element(by.xpath("//div")).waitFor({ options: "elementIsDisplayed" });
```

This ensures that the element not only exists and is in the DOM but also has its `display` property set to something other than `none`.

### Combining Conditions

You can combine multiple conditions using logical operators like AND (`&&`) or OR (`||`). For example:

```javascript
await element(by.xpath("//div")).waitFor({
    options: "elementIsVisible",
    timeout: 5000, // Wait up to 5 seconds for the condition to be met.
});
```

This waits until the element is visible and does so within a specified time limit.

## Examples

Here are some practical examples demonstrating how `waitFor()` can be used in real-world scenarios.

### Example 1: Waiting for an Element to Become Visible

```javascript
try {
    await element(by.xpath("//div")).waitFor({ options: "elementIsVisible" });
} catch (error) {
    console.log("Element did not become visible within the specified time.");
}
```

### Example 2: Combining Conditions with Logical Operators

```javascript
await element(by.xpath("//div")).waitFor({
    options: "elementIsDisplayed && textEquals('Expected Text')",
    timeout: 10000,
});
```

In this example, we wait until the element is displayed and contains the exact text `'Expected Text'`.

## FAQs

### Q: What happens if the `waitFor()` method times out?

A: If the condition specified in the `waitFor()` method does not become true within the allotted time (default timeout), a timeout error will be thrown. It's advisable to catch this exception and handle it appropriately.

```javascript
try {
    await element(by.xpath("//div")).waitFor({ options: "elementIsVisible", timeout: 2000 });
} catch (error) {
    console.error("Element did not become visible within the specified time.");
}
```

### Q: Can I specify my own condition function?

A: Yes, you can pass a custom JavaScript function that returns a boolean value indicating whether the element meets your criteria. The function should take the element as an argument.

```javascript
await element(by.xpath("//div")).waitFor(function(element) {
    return element.isDisplayed() && element.getText().then(text => text === "Expected Text");
});
```

This allows for highly customized waiting logic based on dynamic conditions or complex checks.

---

By using `waitFor()`, you can enhance your automation scripts to be more robust and responsive, especially when dealing with shadow DOM elements. Happy coding!