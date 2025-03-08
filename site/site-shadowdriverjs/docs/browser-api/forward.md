# await browser.forward()

The `await browser.forward()` function in ShadowdriverJS is used to navigate forward to the next page in the browser's history. This function is similar to the `forward()` function in WebDriverJS.

## Syntax

```javascript
await browser.forward();
```

### Returns

- A promise that will be resolved when the navigation forward operation is complete.

## Example

Here is an example of how to use `await browser.forward()` to navigate forward a page:

```javascript
// Navigate forward to the next page
// Perform actions after navigation
await browser.forward().then(function() {
    console.log('Navigated forward to the next page.');
});
```

In this example, the browser will navigate forward to the next page in its history, and then a message will be logged to the console indicating that the navigation has been performed.

## Notes

- The `browser.forward()` function will wait for the page to load completely before resolving the promise.
- You can chain other browser commands after `browser.forward()` to perform actions on the new page loaded.

## See Also

- **`await browser.refresh()`:** Refreshes the currently loaded page.
- **`await browser.getTitle()`:** Retrieves the title of the current page after forward navigation or refresh.
- **`await browser.get(url)`:** Navigates to a specified URL.

---

This documentation provides an overview of the `await browser.forward()` function, including its syntax and return value.