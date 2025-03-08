---
sidebar_position: 1
---

# await browser.get()

The `browser.get()` function in ShadowdriverJS is used to navigate to a specified URL. This function is similar to the `get()` function in WebDriverJS.

## Syntax

```javascript
await browser.get(url);
```

### Parameters

- `url` (string): The URL to navigate to.

### Returns

- A promise that will be resolved when the navigation is complete.

## Example

Here is an example of how to use `browser.get()` to navigate to a website:

```javascript
// Navigate to the specified URL
// Perform actions after navigation
await browser.getTitle().then(function(title) {
    console.log('The page title is: ' + title);
});
```

In this example, the browser will navigate to `https://example.com`, and then the title of the page will be logged to the console.

## Notes

- The `browser.get()` function will wait for the page to load completely before resolving the promise.
- You can chain other browser commands after `browser.get()` to perform actions on the loaded page.

## See Also

- browser.getTitle(): Retrieves the title of the current page.
```

This documentation provides an overview of the `browser.get()` function, including its syntax, parameters, return value, an example, and related functions.