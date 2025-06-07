
# ShadowdriverJS IntelliSense - Quick Start Guide

ShadowdriverJS IntelliSense is a **Visual Studio Code extension** that provides intelligent code completion, documentation tooltips, and snippet support for writing web automation tests. This guide walks you through installation and basic usage.

<!-- truncate -->

---

## 📦 Installation Instructions


### 1. Install via VSIX File (Advanced)
1. Download the [shadowdriverjs-intellisense-0.0.1.vsix](https://github.com/noodlescripter/shadowdriverJS/raw/refs/heads/develop/shadowdriverjs-intellisense/shadowdriverjs-intellisense-0.0.1.vsix) file from the official release. (Note: You are welcome to update and edit the existing browser, elements and by commands 🙂)
2. In VS Code, go to:  
   `Help > Extensions: Install from VSIX`
3. Select the downloaded file and follow prompts

---

## 🧠 Features Overview

- **Auto-completion** for browser, element, and locator methods
- **Live documentation tooltips**
- **Code snippets** for common operations
- Supports **JavaScript & TypeScript**

---

## 💡 Quick Usage Examples

### 1. Basic Test Setup
```javascript
// Type `browser.` to see all browser methods
browser.get("https://example.com");

// Type `by.` to see locator methods
element(by.id("username")).sendKeys("testuser");
```

### 2. Locator Methods
```javascript
by.css("#login-button")
by.xpath("//button[text()='Submit']")
by.id("password-field")
```

---

## ⚠️ Troubleshooting

- **Extension not showing suggestions?**  
  Ensure you're editing a `.js` or `.ts` file. IntelliSense activates automatically for these file types.

- **Documentation not appearing?**  
  Hover over method names (e.g., `browser.get`) to view tooltips.

---
