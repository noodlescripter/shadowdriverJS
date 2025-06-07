const element_commands =
    [
        
        {
            "label": "getAttribute",
            "kind": "command",
            "detail": "Get element attribute value",
            "documentation": "Retrieves the value of an element's specified attribute.",
            "usage": "getAttribute('className')"
        },
        {
            "label": "getCssValue",
            "kind": "command",
            "detail": "Get computed CSS property value",
            "documentation": "Returns the value of a computed CSS style property for the element.",
            "usage": "getCssValue('color')"
        },
        {
            "label": "executeScript",
            "kind": "command",
            "detail": "Execute synchronous script in the page context",
            "documentation": "Executes synchronous JavaScript within the browser context. This command allows you to run custom JavaScript that interacts with the page, such as setting variables or modifying the DOM.",
            "usage": "executeScript('document.body.style.backgroundColor = \"red\"')"
        },
        {
            "label": "executeAsyncScript",
            "kind": "command",
            "detail": "Execute asynchronous script in the current page",
            "documentation": "Executes an asynchronous JavaScript in the current page context. This command allows you to run custom JavaScript that interacts with the page, such as setting variables, triggering events, or modifying the DOM.",
            "usage": "executeAsyncScript('console.log(\"Hello from JS!\");')"
        },
        {
            "label": "getElementText",
            "kind": "command",
            "detail": "Get element text",
            "documentation": "Returns the text content of an element. This command retrieves all visible and non-hidden text within a specified element.",
            "usage": "getElementText('.example-element')"
        },
        {
            "label": "getAriaRole",
            "kind": "command",
            "detail": "Get ARIA role",
            "documentation": "Returns the ARIA (Accessible Rich Internet Applications) role of an element. This command retrieves the role attribute, which defines the semantics and purpose of a widget.",
            "usage": "getAriaRole('#unique-id')"
        },
        {
            "label": "getAccessibleName",
            "kind": "command",
            "detail": "Get accessible name",
            "documentation": "Returns the accessible name of an element. This command provides information about how an element is identified to screen readers and other assistive technologies.",
            "usage": "getAccessibleName('.accessible-element')"
        },
        {
            "label": "getShadowRoot",
            "kind": "command",
            "detail": "Get shadow root of the current web element",
            "documentation": "Retrieves the shadow root of the specified element. This command is useful for interacting with elements that have a shadow DOM.",
            "usage": "getShadowRoot()"
        },
        {
            "label": "getRect",
            "kind": "command",
            "detail": "Get element rectangle",
            "documentation": "Returns an object describing an element's location and size, in pixels relative to the document element.",
            "usage": "getRect()"
        },
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
        }

    ];

export default element_commands;