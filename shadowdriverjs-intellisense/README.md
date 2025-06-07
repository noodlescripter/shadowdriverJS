# ShadowdriverJS IntelliSense

A Visual Studio Code extension that provides intelligent code completion and documentation for ShadowdriverJS, making web automation testing more efficient and developer-friendly.

## Features

- Intelligent code completion for ShadowdriverJS methods
- Detailed documentation for each method
- Snippet support for quick code insertion
- Support for JavaScript and TypeScript files

## Installation

### Method 1: From VSIX File

1. Download the `.vsix` file from the releases page
2. Open Visual Studio Code
3. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac) to open the command palette
4. Type "Install from VSIX" and select the option
5. Navigate to and select the downloaded `.vsix` file
6. Click "Install"
7. Restart Visual Studio Code when prompted

### Method 2: From VS Code Marketplace

1. Open Visual Studio Code
2. Go to the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X`)
3. Search for "ShadowdriverJS IntelliSense"
4. Click "Install"

## Benefits

### 1. Enhanced Productivity
- Auto-completion for all ShadowdriverJS methods
- Quick access to method documentation
- Intelligent parameter suggestions
- Snippet support for common operations

### 2. Code Quality
- Prevents typos in method names
- Ensures correct parameter usage
- Provides immediate access to method documentation
- Reduces development time

### 3. Learning Support
- Built-in documentation for each method
- Example usage through snippets
- Clear parameter descriptions
- Method categorization (browser, element, locator methods)

## Supported Features

### Browser Methods
- `get(url)` - Navigate to URL
- `sleep(milliseconds)` - Wait for specified time
- `actions()` - Create action sequence
- `getTitle()` - Get page title
- `getUrl()` - Get current URL
- `getPageSource()` - Get page source

### Element Methods
- `sendKeys(text)` - Type text into element
- `click()` - Click element
- `getText()` - Get element text
- `getAttribute(attribute)` - Get element attribute

### Locator Methods
- `css(selector)` - Find by CSS selector
- `xpath(xpath)` - Find by XPath
- `id(id)` - Find by ID
- `text(text)` - Find by text
- `linkText(text)` - Find by link text
- `partialText(text)` - Find by partial text
- `buttonText(text)` - Find by button text

### Key Constants
- `Shift` - Shift key
- `Control` - Control key
- `Enter` - Enter key

## Usage

The extension automatically provides code completion when you type:
- After `browser.` - Shows browser methods
- After `by.` - Shows locator methods
- After `element` - Shows locator methods
- After `key.` - Shows key constants
- After any element method (dot notation) - Shows element methods

## Requirements

- Visual Studio Code 1.60.0 or higher
- JavaScript or TypeScript project

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 