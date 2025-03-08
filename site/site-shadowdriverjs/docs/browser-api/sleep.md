# await browser.sleep()

The `await browser.sleep(ms)` function in ShadowdriverJS is used to pause the execution of your test script for a specified number of milliseconds. This function can be useful for waiting until certain elements or conditions are met without blocking the entire test flow.

## Syntax

```javascript
await browser.sleep(ms);
```

### Parameters

- `ms` (number): The duration in milliseconds that the test should pause.

### Returns

- A promise that resolves after the specified delay.

## Example

Here is an example of how to use `await browser.sleep()` to add a delay in your script:

```javascript
// Wait for 2 seconds before proceeding
await browser.sleep(2000);
console.log('Test paused for 2 seconds.');
```

In this example, the test will pause execution for 2 seconds (2000 milliseconds), and then log a message to the console.

## Notes

- The `browser.sleep()` function is non-blocking; it does not block the browser or any other asynchronous operations.
- Use this function judiciously, as excessive use of delays can slow down your test suite unnecessarily.
- You can chain other commands after `browser.sleep()` to continue with the next actions in your script.

## See Also

- **`await browser.refresh()`:** Refreshes the currently loaded page.
- **`await browser.getTitle()`:** Retrieves the title of the current page.
- **`await browser.get(url)`:** Navigates to a specified URL.

---

This documentation provides an overview of the `await browser.sleep()` function, including its syntax, parameters, return value, and example usage.