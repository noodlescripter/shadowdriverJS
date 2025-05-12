---
sidebar_position: 2
---

# Locators

Locators in ShadowdriverJS are used to find elements on a web page. Here are the different locator strategies available:

## by.xpath

Locate elements using an XPath expression.

```javascript
const element = await element(by.xpath('//div[@class="example"]'));
```

## by.id

Find elements by their unique ID attribute.

```javascript
const element = await element(by.id('uniqueId'));
```

## by.name

Locate elements by the name attribute.

```javascript
const element = await element(by.name('elementName'));
```

## by.css

Select elements using a CSS selector.

```javascript
const element = await element(by.css('.example-class'));
```

## by.text

Find elements that match a specific text.

```javascript
const element = await element(by.text('Example Text'));
```

## by.linkText

Locate anchor elements by their link text.

```javascript
const element = await element(by.linkText('Click Here'));
```

## by.partialText

Find elements containing partial text matches.

```javascript
const element = await element(by.partialText('Click'));
```

## by.buttonText

Locate button elements by their displayed text.

```javascript
const element = await element(by.buttonText('Submit'));
```
These locators help you interact with elements on the web page effectively.

