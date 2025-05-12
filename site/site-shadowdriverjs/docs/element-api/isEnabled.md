# await element.isEnabled()

The `await element.isEnabled()` function in Selenium WebDriver (used by ShadowdriverJS) is used to check if a web element is enabled and can be interacted with, such as clicking or entering text. This is useful for verifying that an element is ready for user interaction.

## Syntax

```javascript
await element.isEnabled();
```

### Parameters

- None, but it requires the `element` to be located using one of the available locators (`by.id()`, `by.className()`, etc.).

### Returns

- A promise that will be resolved with a boolean value: `true` if the element is enabled and can be interacted with, `false` otherwise.

## Example: Checking if an Element Is Enabled Before Interaction

Here is an example of how to use `element.isEnabled()` to check if an element is enabled before performing an interaction:

```javascript
// Navigate to the specified URL
await browser.get('https://example.com');

// Locate the element by its ID
const element = await element(by.id('myElement'));

// Check if the element is enabled
if (await element.isEnabled()) {
    console.log('The element is enabled and can be interacted with.');

    // Perform an interaction, such as clicking the button
    await element.click();
} else {
    console.log('The element is not enabled. Cannot perform interaction.');
}
```

In this example:
1. The test navigates to `https://example.com`.
2. It locates the element with the ID `myElement`.
3. It checks if the element is enabled.
4. If it is enabled, it proceeds to click the button.
5. Otherwise, it logs a message indicating that the element cannot be interacted with.

## Example: Checking for Disabled Elements

You can also use `element.isEnabled()` in conjunction with other checks to verify multiple elements:

```javascript
// Navigate to the specified URL
await browser.get('https://example.com');

// Locate and check if different elements are enabled
const submitButton = await element(by.id('submitButton'));
const disabledButton = await element(by.id('disabledButton'));

console.log(`Submit Button is Enabled: ${await submitButton.isEnabled()}`);
console.log(`Disabled Button is Enabled: ${await disabledButton.isEnabled()}`);
```

## Example: Checking Enabled State After Interaction

You can also use `element.isEnabled()` to check if an element remains enabled after performing interactions:

```javascript
// Navigate to the specified URL
await browser.get('https://example.com');

// Locate and click on a submit button
const buttonElement = await element(by.id('submitButton'));
await buttonElement.click();

// Wait for the page to load after submitting
await browser.sleep(1000);

// Check if the submit button remains enabled
if (await buttonElement.isEnabled()) {
    console.log('Submit Button is still Enabled.');
} else {
    console.log('Submit Button is now Disabled or not Interactable.');
}
```

## Example: Checking Multiple Elements in a Loop

You can check multiple elements to see which ones are enabled:

```javascript
// Navigate to the specified URL
await browser.get('https://example.com');

// Locate and check if different elements are enabled
const elements = await element.all(by.css('.my-element-class'));

for (let i = 0; i < elements.length; i++) {
    const isElementEnabled = await elements[i].isEnabled();
    console.log(`Element ${i + 1} is Enabled: ${isElementEnabled}`);
}
```

## Notes

- `element.isEnabled()` checks if the element can be interacted with, meaning it returns `false` for elements that are either disabled or not visible.
- Use this function to ensure that only enabled and interactable elements are processed in your tests.

## See Also

- **`await element.isDisplayed()`:** Checks if a web element is currently displayed on the screen.
- **`await element.getAttribute(attributeName)`:** Retrieves the value of an attribute from a web element.
- **`await element.sendKeys(textOrKeys)`:** Sends text or special keys to a web element.
- **`await element.clear()`:** Clears the text from an input or textarea element.
- **`await browser.sleep(ms)`:** Pauses the execution of the test for a specified duration.
- **`await browser.refresh()`:** Refreshes the currently loaded page.
- **`await browser.getTitle()`:** Retrieves the title of the current page.
- **`await browser.get(url)`:** Navigates to a specified URL.

---

This documentation provides an overview of how to use `element.isEnabled()` in ShadowdriverJS, including examples for checking if elements are enabled before and after interactions.