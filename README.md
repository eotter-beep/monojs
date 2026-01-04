# mono.js

A lightweight DOM and utility library for creating HTML elements and styling dynamically.

## Functions

### `header1(text)`
Creates and returns an `<h1>` element with the given text content.
```js
const heading = header1('Welcome');
document.body.appendChild(heading);
```

### `paragraph(text)`
Creates and returns a `<p>` element with the given text content.
```js
const para = paragraph('This is a paragraph.');
document.body.appendChild(para);
```

### `title(text)`
Sets the document title. Automatically creates or updates the `<title>` element in `<head>`.
```js
title('My Page');
```

### `link(url, text)`
Creates and returns an `<a>` element. User must append to the DOM.
```js
const anchor = link('https://example.com', 'Click here');
document.body.appendChild(anchor);
```

### `css(code)`
Injects CSS into the document by appending a `<style>` element to `<head>`.
```js
css('body { font-size: 16px; }');
```

### `font(name)`
Imports a Google Font and injects it via CSS.
```js
font('Roboto');
```

It doesn't handle spaces so you need to replace them with plus signs.

### `wait(seconds)`
Returns a Promise that resolves after the specified number of seconds.
```js
await wait(2);
console.log('2 seconds have passed');
```

## Installation

```js
import header1, { paragraph, title, link, css, font, wait } from 'https://eotter-beep.github.io/monojs/index.js';
```
