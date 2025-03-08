# await element.clear()

The `await element.clear()` function in Selenium WebDriver (which is used by ShadowdriverJS) is used to clear the text from an input or textarea element on a webpage. This can be useful when you want to ensure that the field starts with a clean slate during your tests.

## Syntax

```javascript
await element.clear();
```

### Parameters

- `element` (WebElement): The web element whose text you want to clear.

### Returns

- A promise that will be resolved after the text has been cleared from the element.

## Example

Here is an example of how to use `await element.clear()` to clear the text in a form field:

```javascript
// Find the input element by its ID or other locator
const inputElement = await element(by.id("inputId"));

// Clear the text in the input field
await inputElement.clear();

console.log('Text has been cleared from the input field.');
```

In this example, the test will:
1. Locate the input element with the ID `myInputField`.
2. Clear the text in that input field.
3. Log a message to the console indicating that the text has been cleared.

## Notes

- The `element.clear()` function works for any form field such as `<input>` or `<textarea>`.
- If the element is not an input or textarea, attempting to call `clear()` will have no effect and will resolve immediately.
- You can chain other commands after `element.clear()` to perform additional actions on the element.

## See Also

- **`await browser.sleep(ms)`:** Pauses the execution of the test for a specified duration.
- **`await browser.refresh()`:** Refreshes the currently loaded page.
- **`await browser.getTitle()`:** Retrieves the title of the current page.
- **`await browser.get(url)`:** Navigates to a specified URL.

---

This documentation provides an overview of the `await element.clear()` function, including its syntax, parameters, and example usage.