# await element.getAttribute

The `await element.getAttribute(attributeName)` function in Selenium WebDriver (used by ShadowdriverJS) is used to retrieve the value of an attribute from a web element. This can be useful for checking the state or properties of elements on a webpage.

## Syntax

```javascript
await element.getAttribute(attributeName);
```

### Parameters

- `attributeName` (string): The name of the attribute you want to retrieve, e.g., `"id"`, `"class"`, `"value"`.

### Returns

- A promise that will be resolved with the value of the specified attribute. If the attribute does not exist, it returns `null`.

## Example: Retrieving the Value Attribute of an Input Field

Here is an example of how to use `element.getAttribute` to retrieve the value of a form field's `value` attribute:

```javascript
// Locate the input element by its ID
const inputElement = await element(by.id('myInputField'));

// Retrieve the 'value' attribute of the input field
const inputValue = await inputElement.getAttribute('value');

console.log(`The value attribute is: ${inputValue}`);
```

In this example:
1. The test locates the input element with the ID `myInputField`.
2. It retrieves the value of the `value` attribute of that input field.
3. A message is logged to the console indicating the current value of the input field.

## Example: Checking for an 'href' Attribute in a Link

You can also use `element.getAttribute` to check if an element has a specific attribute, such as `href`:

```javascript
// Locate the link element by its ID
const linkElement = await element(by.id('myLink'));

// Check if the link has an 'href' attribute and retrieve it if present
const hrefValue = await linkElement.getAttribute('href');

if (hrefValue) {
    console.log(`The link URL is: ${hrefValue}`);
} else {
    console.log('No href attribute found.');
}
```

## Example: Retrieving Multiple Attributes

You can also retrieve multiple attributes from the same element:

```javascript
// Locate the input element by its ID
const inputElement = await element(by.id('myInputField'));

// Retrieve both 'value' and 'type' attributes of the input field
const inputValue = await inputElement.getAttribute('value');
const inputType = await inputElement.getAttribute('type');

console.log(`Value attribute: ${inputValue}`);
console.log(`Type attribute: ${inputType}`);
```

## Notes

- If the specified attribute does not exist, `element.getAttribute` returns `null`.
- This function is useful for verifying that elements have certain attributes or for extracting specific information from them.

## See Also

- **`await element.sendKeys(textOrKeys)`:** Sends text or special keys to a web element.
- **`await element.clear()`:** Clears the text from an input or textarea element.
- **`await browser.sleep(ms)`:** Pauses the execution of the test for a specified duration.
- **`await browser.refresh()`:** Refreshes the currently loaded page.
- **`await browser.getTitle()`:** Retrieves the title of the current page.
- **`await browser.get(url)`:** Navigates to a specified URL.

---

This documentation provides an overview of how to use `element.getAttribute` in ShadowdriverJS, including examples for retrieving different types of attributes.