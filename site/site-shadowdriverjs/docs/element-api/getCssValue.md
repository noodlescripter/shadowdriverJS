# await element.getCssValue()

The `await element.getCssValue(propertyName)` function in Selenium WebDriver (used by ShadowdriverJS) is used to retrieve the computed CSS value of a specific property for a given web element. This can be useful for verifying styles or properties that affect an element's appearance and behavior.

## Syntax

```javascript
await element.getCssValue(propertyName);
```

### Parameters

- `propertyName` (string): The name of the CSS property you want to retrieve, e.g., `"color"`, `"display"`, `"fontSize"`.

### Returns

- A promise that will be resolved with the computed value of the specified CSS property. If the property does not exist or is not set, it returns `null`.

## Example: Retrieving the Background Color

Here is an example of how to use `element.getCssValue` to retrieve the background color of a web element:

```javascript
// Navigate to the specified URL
await browser.get('https://example.com');

// Locate the element by its ID
const element = await element(by.id('myElement'));

// Retrieve the 'background-color' CSS value
const backgroundColor = await element.getCssValue('backgroundColor');

console.log(`The background color of the element is: ${backgroundColor}`);
```

In this example:
1. The test navigates to `https://example.com`.
2. It locates the element with the ID `myElement`.
3. It retrieves the computed value of the `backgroundColor` CSS property.
4. A message is logged to the console indicating the background color.

## Example: Checking Multiple CSS Properties

You can also retrieve multiple CSS properties from the same element:

```javascript
// Navigate to the specified URL
await browser.get('https://example.com');

// Locate the element by its ID
const element = await element(by.id('myElement'));

// Retrieve multiple CSS values
const backgroundColor = await element.getCssValue('backgroundColor');
const display = await element.getCssValue('display');
const fontSize = await element.getCssValue('fontSize');

console.log(`Background Color: ${backgroundColor}`);
console.log(`Display: ${display}`);
console.log(`Font Size: ${fontSize}`);
```

## Example: Conditional Checks with CSS Values

You can use `element.getCssValue` in conditional statements to perform different actions based on the computed style:

```javascript
// Navigate to the specified URL
await browser.get('https://example.com');

// Locate and check if an element's color changes after a condition
const element = await element(by.id('myElement'));

if (await element.getCssValue('color') === 'rgb(255, 0, 0)') {
    console.log('The text is red.');
} else {
    console.log('The text is not red.');
}
```

## Example: Checking CSS Values in a Loop

You can check multiple elements to see which ones have specific CSS properties:

```javascript
// Navigate to the specified URL
await browser.get('https://example.com');

// Locate and check if different elements have specific CSS values
const elements = await element.all(by.css('.my-element-class'));

for (let i = 0; i < elements.length; i++) {
    const backgroundColor = await elements[i].getCssValue('backgroundColor');
    const display = await elements[i].getCssValue('display');

    console.log(`Element ${i + 1} - Background Color: ${backgroundColor}`);
    console.log(`Element ${i + 1} - Display: ${display}`);
}
```

## Notes

- `element.getCssValue()` retrieves the computed CSS value, which means it considers all applied styles (including inline styles and styles from external sheets).
- Use this function to verify that elements have the expected styles, especially when dealing with dynamic or responsive designs.
- Remember that some CSS properties may return `null` if they are not set for the element.

## See Also

- **`await element.isEnabled()`:** Checks if a web element is enabled and can be interacted with.
- **`await element.isDisplayed()`:** Checks if a web element is currently displayed on the screen.
- **`await element.getAttribute(attributeName)`:** Retrieves the value of an attribute from a web element.
- **`await element.sendKeys(textOrKeys)`:** Sends text or special keys to a web element.
- **`await browser.sleep(ms)`:** Pauses the execution of the test for a specified duration.
- **`await browser.refresh()`:** Refreshes the currently loaded page.
- **`await browser.getTitle()`:** Retrieves the title of the current page.
- **`await browser.get(url)`:** Navigates to a specified URL.

---

This documentation provides an overview of how to use `element.getCssValue()` in ShadowdriverJS, including examples for retrieving CSS values from elements and performing conditional checks based on those values.