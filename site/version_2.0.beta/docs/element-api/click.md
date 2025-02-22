---
sidebar_position: 1
---

# element.click()

The `element.click()` function in ShadowdriverJS is used to simulate a mouse click on a web element. This function is similar to the `click()` function in WebDriverJS.

## Syntax

```javascript
await element.click();
```

### Parameters

- None

### Returns

- A promise that will be resolved when the click action is complete.

## Example

Here is an example of how to use `element.click()` to click a button on a web page:

```javascript
// Find the button element by its ID and click it
const button = await element(by.id('submitButton'));
await button.click();
```

In this example, the button with the ID `submitButton` will be clicked.

## Notes

- The `element.click()` function will wait for the element to be clickable before performing the click action.
- You can chain other element commands after `element.click()` to perform additional actions on the element.

## See Also

- element.sendKeys(): Sends keystrokes to the element.
