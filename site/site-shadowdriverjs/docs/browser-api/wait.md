# await browser.wait()

#### Table of Contents

1. **Introduction**
2. **Purpose of `await browser.wait()`**
3. **Parameters**
4. **Usage Examples**
5. **Best Practices**
6. **Summary**

---

## 1. Introduction

In Selenium WebDriver tests, you often need to wait for a condition to be met before proceeding with further actions. For example, waiting for an element to appear on the page or until a page has completely loaded. `await browser.wait()` is a utility provided by ShadowdriverJS that allows you to pause your test execution and wait until a specific condition is satisfied.

ShadowdriverJS abstracts some of the WebDriver API calls into more readable methods, making it easier for developers to write maintainable tests. The `browser` object in this context is used instead of directly interacting with the `driver`.

---

## 2. Purpose of `await browser.wait()`

The primary purpose of `await browser.wait()` is to ensure that your test script waits until a specific condition is met. This is particularly useful for scenarios where elements are loaded dynamically or when you need to wait for interactions like clicks, dropdowns, or forms to be completed.

---

## 3. Parameters

`await browser.wait()` accepts the following parameters:

1. **Condition**: A function that returns a boolean value indicating whether the condition has been met.
2. **Timeout (optional)**: Maximum time in milliseconds to wait for the condition to be met. Defaults to 30,000 ms if not specified.
3. **PollingInterval (optional)**: Time interval between each poll check in milliseconds. Defaults to 500 ms.

---

## 4. Usage Examples

### Example 1: Waiting for an Element to Become Visible

```javascript
describe("Element Visibility Test", function() {
    it("Should wait until the element is visible", async function() {
        await browser.get('http://example.com/with-element');
        
        // Wait for the element with id 'myElement' to become visible
        const element = await element(by.id('myElement'));
        await browser.wait(
            until.elementIsVisible(element),
            5000 // Timeout of 5 seconds
        );

        console.log("Element is now visible.");
    });
});
```

### Example 2: Waiting for an Element to Be Clickable

```javascript
describe("Clickable Element Test", function() {
    it("Should wait until the element becomes clickable", async function() {
        await browser.get('http://example.com/button-page');

        // Wait for the button with id 'myButton' to become both visible and enabled (clickable)
        const button = await element(by.id('myButton'));
        await browser.wait(
            async () => 
                (await button.isDisplayed()) && 
                (await button.isEnabled()), 
            5000, // Timeout of 5 seconds
            'Element did not become clickable within the specified time.'
        );

        console.log("Button is now ready to be clicked.");
    });
});
```


### Example 3: Waiting for an Element to Have a Specific Value

```javascript
describe("Element Attribute Test", function() {
    it("Should wait until the element has specific text in its value attribute", async function() {
        await browser.get('http://example.com/input-page');

        // Wait for the input field with id 'myInput' to have the expected text in its value attribute
        const inputField = await element(by.id('myInput'));
        await browser.wait(
            async () => (await inputField.getAttribute('value')) === 'Expected Text',
            5000, // Timeout of 5 seconds
            'Input field did not have the expected value within the specified time.'
        );

        console.log("Input field now has the expected text.");
    });
});
```

### Example 4: Waiting for an Element to Disappear

```javascript
describe("Element Disappearance Test", function() {
    it("Should wait until the element disappears from the page", async function() {
        await browser.get('http://example.com/loader-page');

        // Wait for the loader with id 'loader' to disappear
        const loader = await element(by.id('loader'));
        await browser.wait(
            async () => !await loader.isDisplayed(),
            10000, // Timeout of 10 seconds
            'Loader did not hide within the specified time.'
        );

        console.log("Loader has disappeared.");
    });
});
```

---

## 5. Best Practices

### Always Use Promises with `await`

Since `await browser.wait()` returns a promise, it is essential to use `await` when calling this method inside async functions or test cases.

```javascript
try {
    await element(by.id('loader')).waitFor({ condition: 'elementIsVisible' });
} catch (error) {
    console.error("Error waiting for the loader:", error);
}
```

### Use Meaningful Error Messages

Providing a meaningful message when an error occurs can help with debugging and understanding what went wrong.

```javascript
await browser.wait(
    async () => !await element(by.id('element')).isDisplayed(),
    5000,
    'Element did not disappear within the specified time.'
);
```

### Define Custom Conditions

You can also define custom conditions using functions that return a boolean value. This allows for more flexibility in your tests.

```javascript
const waitForText = async (element, text) => {
    return await element.getAttribute('value') === text;
};

// Usage
await browser.wait(
    waitForText,
    5000,
    'Element did not contain the expected text',
    inputField,
    'Expected Text'
);
```

---

## 6. Summary

`await browser.wait()` is a powerful tool for ensuring that your Selenium WebDriver tests wait for specific conditions to be met before proceeding. By using this method, you can make your test scripts more robust and reliable. Always ensure you handle promises with `await`, provide meaningful error messages, and consider defining custom conditions when necessary.

If you have any questions or need further assistance, feel free to ask!