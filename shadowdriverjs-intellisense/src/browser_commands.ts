const browser_commands = [
    {
        "label": "isEnabled",
        "kind": "command",
        "detail": "Check if element is enabled",
        "documentation": "Tests whether this element is enabled, as dictated by the `disabled` attribute.",
        "usage": "isEnabled()"
    },
    {
        "label": "isSelected",
        "kind": "command",
        "detail": "Check if element is selected",
        "documentation": "Tests whether this element is selected.",
        "usage": "isSelected()"
    },
    {
        "label": "submit",
        "kind": "command",
        "detail": "Submit the form containing this element",
        "documentation": "Submits the form containing this element (or this element if it is itself a FORM element). This command is a no-op if the element is not contained in a form.",
        "usage": "submit()"
    },
    {
        "label": "clear",
        "kind": "command",
        "detail": "Clear the value of this element",
        "documentation": "Clears the `value` of this element. This command has no effect if the underlying DOM element is neither a text INPUT element nor a TEXTAREA element.",
        "usage": "clear()"
    },
    {
        "label": "isDisplayed",
        "kind": "command",
        "detail": "Check if element is displayed",
        "documentation": "Tests whether this element is currently displayed.",
        "usage": "isDisplayed()"
    },
    {
        "label": "sleep",
        "kind": "method",
        "detail": "Pause execution for a specified amount of time",
        "documentation": "Pauses the script for the given number of milliseconds. This can be used to wait for asynchronous operations.",
        "usage": "sleep(ms)"
    },
    {
        "label": "getWindowHandle",
        "kind": "method",
        "detail": "Get the current window handle",
        "documentation": "Returns the ID of the currently selected window.",
        "usage": "getWindowHandle()"
    },
    {
        "label": "getAllWindowHandles",
        "kind": "method",
        "detail": "Get all window handles",
        "documentation": "Returns a list containing the IDs of all windows that belong to this driver instance.",
        "usage": "getAllWindowHandles()"
    },
    {
        "label": "getPageSource",
        "kind": "method",
        "detail": "Get page source",
        "documentation": "Returns the complete HTML document as one string, or `null` if no document is available.",
        "usage": "getPageSource()"
    },
    {
        "label": "close",
        "kind": "method",
        "detail": "Close current window",
        "documentation": "Closes the current window. If there are multiple windows open and no other window has focus, this command closes the currently selected window.",
        "usage": "close()"
    },
    {
        "label": "get",
        "kind": "method",
        "detail": "Navigate to URL",
        "documentation": "Navigates the current window to the specified URL. If the navigation fails or encounters a timeout, an error will be thrown.",
        "usage": "get(url)"
    },
    {
        "label": "getCurrentUrl",
        "kind": "method",
        "detail": "Get current URL",
        "documentation": "Returns the URL of the currently active document.",
        "usage": "getCurrentUrl()"
    },
    {
        "label": "getTitle",
        "kind": "method",
        "detail": "Get page title",
        "documentation": "Returns the title of the current document. If no title is set, an empty string will be returned.",
        "usage": "getTitle()"
    },
    {
        "label": "findElement",
        "kind": "method",
        "detail": "Find single element by locator",
        "documentation": "Finds a single WebElement using the specified locator. If the locator is a function, it will attempt to locate an element using that function.",
        "usage": "findElement(locator)"
    },
    {
        "label": "normalize_",
        "kind": "private-method",
        "detail": "Normalize found elements",
        "documentation": "Resolves WebElement promises and ensures the result is a single WebElement. Throws an error if no element is found.",
        "usage": "async normalize_(webElementPromise)"
    },
    {
        "label": "findElementInternal_",
        "kind": "private-method",
        "detail": "Internal method to find elements",
        "documentation": "Internal helper function for finding elements. Resolves a WebElement or throws an error if no element is found.",
        "usage": "async findElementInternal_(locatorFn, context)"
    },
    {
        "label": "findElements",
        "kind": "method",
        "detail": "Find multiple elements by locator",
        "documentation": "Finds multiple WebElements using the specified locator. If the locator is a function, it will attempt to locate elements using that function.",
        "usage": "findElements(locator)"
    },
    {
        "label": "findElementsInternal_",
        "kind": "private-method",
        "detail": "Internal method to find multiple elements",
        "documentation": "Internal helper function for finding multiple elements. Resolves an array of WebElements or an empty array if none are found.",
        "usage": "async findElementsInternal_(locatorFn, context)"
    },
    {
        "label": "takeScreenshot",
        "kind": "method",
        "detail": "Take screenshot of the page",
        "documentation": "Takes a screenshot of the current page and returns it as a base64 encoded string.",
        "usage": "takeScreenshot()"
    },
    {
        "label": "setDelayEnabled",
        "kind": "method",
        "detail": "Enable or disable delay",
        "documentation": "Enables or disables the delay applied to all commands. This can be useful for debugging purposes.",
        "usage": "setDelayEnabled(enabled)"
    },
    {
        "label": "resetCooldown",
        "kind": "method",
        "detail": "Reset cooldown timer",
        "documentation": "Resets the cooldown timer, allowing immediate execution of commands without waiting.",
        "usage": "resetCooldown()"
    },
    {
        "label": "getFederalCredentialManagementDialog",
        "kind": "method",
        "detail": "Get federal credential management dialog",
        "documentation": "Returns a new instance of the Federal Credential Management Dialog.",
        "usage": "getFederalCredentialManagementDialog()"
    },
    {
        "label": "manage",
        "kind": "method",
        "detail": "Manage driver options",
        "documentation": "Provides methods to manage browser options and preferences.",
        "usage": "manage()"
    },
    {
        "label": "navigate",
        "kind": "method",
        "detail": "Navigate to a URL or perform actions like refresh, forward, etc.",
        "documentation": "Provides methods for navigating the web page, including going back, forward, and refreshing the page.",
        "usage": "navigate()"
    },
    {
        "label": "switchTo",
        "kind": "method",
        "detail": "Switch to different contexts",
        "documentation": "Provides methods for switching to different contexts like frames, windows, alert dialogs, etc.",
        "usage": "switchTo()"
    },
    {
        "label": "script",
        "kind": "method",
        "detail": "Execute JavaScript scripts",
        "documentation": "Allows the execution of custom JavaScript functions or scripts within the browser context.",
        "usage": "script()"
    }
]



export default browser_commands;