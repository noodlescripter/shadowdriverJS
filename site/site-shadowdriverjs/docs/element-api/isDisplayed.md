# await element.isDisplayed()

The `await element.isDisplayed()` function in Selenium WebDriver (used by ShadowdriverJS) is used to check if a web element is currently visible and displayed on the screen. This can be useful for verifying that an element appears as expected after certain interactions or during test assertions.

## Syntax

```javascript
await element.isDisplayed();
```

### Parameters

- None, but it requires the `element` to be located using one of the available locators (`by.id()`, `by.className()`, etc.).

### Returns

- A promise that will be resolved with a boolean value: `true` if the element is displayed and visible, `false` otherwise.

## Example: Checking if an Element Is Displayed After Navigation

Here is an example of how to use `element.isDisplayed()` to check if an element appears after navigating to a specific page:

```javascript
// Navigate to the specified URL
await browser.get('https://example.com');

// Locate the element by its ID
const element = await element(by.id('myElement'));

// Check if the element is displayed
if (await element.isDisplayed()) {
    console.log('The element is displayed on the page.');
} else {
    console.log('The element is not displayed on the page.');
}
```

In this example:
1. The test navigates to `https://example.com`.
2. It locates the element with the ID `myElement`.
3. It checks if the element is displayed.
4. A message is logged to the console indicating whether the element is visible.

## Example: Checking if an Element Is Displayed After Interactions

You can also use `element.isDisplayed()` after performing other interactions, such as clicking a button:

```javascript
// Navigate to the specified URL
await browser.get('https://example.com');

// Locate and click on a submit button
const buttonElement = await element(by.id('submitButton'));
await buttonElement.click();

// Wait for the page to load after submitting
await browser.sleep(1000);

// Locate the element that should appear after clicking the button
const resultElement = await element(by.id('resultElement'));

// Check if the element is displayed
if (await resultElement.isDisplayed()) {
    console.log('The result element is displayed on the page.');
} else {
    console.log('The result element is not displayed on the page.');
}
```

## Example: Checking for Multiple Elements

You can check multiple elements to see which ones are displayed:

```javascript
// Navigate to the specified URL
await browser.get('https://example.com');

// Locate multiple elements and check if they are displayed
const elements = await element.all(by.css('.my-element-class'));

for (let i = 0; i < elements.length; i++) {
    const isDisplayed = await elements[i].isDisplayed();
    console.log(`Element ${i + 1} is displayed: ${isDisplayed}`);
}
```

## Notes

- `element.isDisplayed()` checks only if the element is present and visible in the DOM. It does not ensure that the element is interactable or has a non-zero size.
- Use this function to verify that elements appear as expected after navigation, interactions, or other conditions.

## See Also

- **`await element.getAttribute(attributeName)`:** Retrieves the value of an attribute from a web element.
- **`await element.sendKeys(textOrKeys)`:** Sends text or special keys to a web element.
- **`await element.clear()`:** Clears the text from an input or textarea element.
- **`await browser.sleep(ms)`:** Pauses the execution of the test for a specified duration.
- **`await browser.refresh()`:** Refreshes the currently loaded page.
- **`await browser.getTitle()`:** Retrieves the title of the current page.
- **`await browser.get(url)`:** Navigates to a specified URL.

---

This documentation provides an overview of how to use `element.isDisplayed()` in ShadowdriverJS, including examples for checking if elements are displayed after navigation and interactions.