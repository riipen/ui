# Usage

<p class="description">Get started with React and Riipen-UI in no time.</p>

Riipen-UI components work in isolation. **They are self-supporting**, and will only
inject the styles they need to display. They don't rely on any global style-sheets.

You can use any of the components as demonstrated in the documentation.
Please refer to each component's [demo page](/components/buttons/) to see how they should be imported.

## Quick start

Here's a quick example to get you started, **it's literally all you need**:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import Button from "riipen-ui/Button";

function App() {
  return <Button color="primary">Hello World</Button>;
}

ReactDOM.render(<App />, document.querySelector("#app"));
```

## Globals

Riipen-UI usage experience can be improved with a handful of important globals that you’ll need to be aware of.

### Responsive meta tag

To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your `<head>` element.

```html
<meta
  name="viewport"
  content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
/>
```

## Next steps

Now that you have an idea of the basic setup, it's time to learn more about:

- How to take advantage of the [theming solution](/customization/theming/).
- How to [override](/customization/components/) the look and feel of the components.
