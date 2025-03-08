# await browser.back()

The `await browser.back()` function in ShadowdriverJS is used to navigate back to the previous page in the browser's history. This function is similar to the `back()` function in WebDriverJS.

## Syntax

```javascript
await browser.back();
```

### Returns

- A promise that will be resolved when the navigation back operation is complete.

## Example

Here is an example of how to use `await browser.back()` to navigate back a page:

```javascript
// Navigate back to the previous page
// Perform actions after navigation
await browser.back().then(function() {
    console.log('Navigated back to the previous page.');
});
```

In this example, the browser will navigate back to the previous page in its history, and then a message will be logged to the console indicating that the navigation has been performed.

## Notes

- The `browser.back()` function will wait for the page to load completely before resolving the promise.
- You can chain other browser commands after `browser.back()` to perform actions on the new page loaded.

## See Also

- **`await browser.refresh()`:** Refreshes the currently loaded page.
- **`await browser.getTitle()`:** Retrieves the title of the current page after back navigation or refresh.
- **`await browser.get(url)`:** Navigates to a specified URL.

---

This documentation provides an overview of the `await browser.back()` function, including its syntax and return value.