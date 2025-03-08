
# await element.sendKeys()

The `await element.sendKeys(textOrKeys)` function in ShadowdriverJS is used to send text or special keys to a web element. This can be useful for typing into input fields or sending specific key events.

## Syntax

```javascript
await element.sendKeys(textOrKeys);
```

### Parameters

- `textOrKeys`: 
  - **string**: If you want to type text into an input field.
  - **keys**: If you want to send special keys (e.g., Enter, ArrowDown).

### Returns

- A promise that will be resolved after the text or keys have been sent to the element.

## Example: Typing Text into an Input Field

Here is an example of how to use `element.sendKeys` to type text into an input field:

```javascript
// Locate the input element by its ID
const inputElement = await element(by.id('myInputField'));

// Type "Hello, World!" into the input field
await inputElement.sendKeys('Hello, World!');

console.log('Text has been entered into the input field.');
```

In this example:
1. The test locates the input element with the ID `myInputField`.
2. It then types the text `"Hello, World!"` into that input field.
3. A message is logged to the console indicating that the text has been entered.

## Example: Sending Special Keys

You can also use `element.sendKeys` to send special keys such as Enter, ArrowDown, etc. Here’s how you can do it:

### Sending Enter Key

```javascript
// Locate the input element by its ID
const inputElement = await element(by.id('myInputField'));

// Type "Hello, World!" and then press Enter
await inputElement.sendKeys('Hello, World!', keys.ENTER);

console.log('Text has been entered into the input field and Enter key pressed.');
```

### Sending Arrow Down Key

```javascript
// Locate the input element by its ID
const inputElement = await element(by.id('myInputField'));

// Type "Hello, World!" and then press ArrowDown
await inputElement.sendKeys('Hello, World!', keys.ARROW_DOWN);

console.log('Text has been entered into the input field and ArrowDown key pressed.');
```

## Notes

- The `keys` object in Selenium WebDriver provides various special keys that you can use:
  - `keys.ENTER`: Sends the Enter key.
  - `keys.TAB`: Sends the Tab key.
  - `keys.ESCAPE`: Sends the Escape key.
  - `keys.ARROW_DOWN`: Sends the ArrowDown key.
  - `keys.ARROW_UP`: Sends the ArrowUp key.
  - `keys.SPACE`: Sends the Space key.

## Example: Chaining Commands

You can also chain other commands after typing and sending keys. For example, you might want to click a button or check if an alert is present:

```javascript
// Locate the input element by its ID
const inputElement = await element(by.id('myInputField'));

// Type "Hello, World!" into the input field
await inputElement.sendKeys('Hello, World!');

// Click on a submit button to process the input
await element(by.id('submitButton')).click();

console.log('Form submitted.');
```

## See Also

- **`await element.clear()`:** Clears the text from an input or textarea element.
- **`await browser.sleep(ms)`:** Pauses the execution of the test for a specified duration.
- **`await browser.refresh()`:** Refreshes the currently loaded page.
- **`await browser.getTitle()`:** Retrieves the title of the current page.
- **`await browser.get(url)`:** Navigates to a specified URL.

---

This documentation provides an overview of how to use `element.sendKeys` in ShadowdriverJS, including examples for both typing text and sending special keys.