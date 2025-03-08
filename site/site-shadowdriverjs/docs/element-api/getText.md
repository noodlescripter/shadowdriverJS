---
sidebar_position: 2
---

# element.getText()

The `element.getText()` function in ShadowdriverJS is used to simulate a mouse getText on a web element. This function is similar to the `getText()` function in WebDriverJS.

## Syntax

```javascript
await element.getText();
```

### Parameters

- None

### Returns

- A promise that will be resolved when the getText action is complete.

## Example

Here is an example of how to use `element.getText()` to getText a button on a web page:

```javascript
// Find the button element by its ID and getText it
const li = await element(by.id('submitButton')).getText();
console.log(li)
```

In this example, the button with the ID `submitButton` will be getTexted.

## Notes

- The `element.getText()` function will wait for the element to be getTextable before performing the getText action.
- You can chain other element commands after `element.getText()` to perform additional actions on the element.

## See Also

- element.sendKeys(): Sends keystrokes to the element.
