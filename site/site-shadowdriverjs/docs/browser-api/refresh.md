# await browser.refresh()

The `await browser.refresh()` function in ShadowdriverJS is used to refresh the current page. This function is similar to the `refresh()` function in WebDriverJS.

## Syntax

```javascript
await browser.refresh();
```

### Returns

- A promise that will be resolved when the refresh operation is complete.

## Example

Here is an example of how to use `await browser.refresh()` to refresh a webpage:

```javascript
// Refresh the current page
// Perform actions after refreshing
await browser.refresh().then(function() {
    console.log('The page has been refreshed.');
});
```

In this example, the browser will refresh the currently loaded page, and then a message will be logged to the console indicating that the page has been refreshed.

## Notes

- The `browser.refresh()` function will wait for the page to reload completely before resolving the promise.
- You can chain other browser commands after `browser.refresh()` to perform actions on the refreshed page.

## See Also

- browser.getTitle(): Retrieves the title of the current page.
- browser.get(url): Navigates to a specified URL.

## Related Functions

- **browser.refresh()**: Refreshes the currently loaded page.
- **browser.getTitle()**: Gets the title of the current page after refresh or navigation.
```

This documentation provides an overview of the `await browser.refresh()` function, including its syntax, return value, an example, and related functions.