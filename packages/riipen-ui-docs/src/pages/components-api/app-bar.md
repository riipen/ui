<!--- This documentation is automatically generated, do not try to edit it. -->

# AppBar API

<p class="description">The API documentation of the AppBar React component.</p>

## Import

```js
import AppBar from 'riipen-ui/AppBar';

// or

import { AppBar } from 'riipen-ui';
```

You can learn more about the difference by [reading this guide](/guides/bundle-size).

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | The content of the component. |
| <span class="prop-name">classes</span> | <span class="prop-type">array</span> |  | An array of custom CSS classes to apply. |
| <span class="prop-name">color</span> | <span class="prop-type">"primary"<br>&#124;&nbsp;"secondary"<br>&#124;&nbsp;"white"<br>&#124;&nbsp;"black"</span> | <span class="prop-default">"primary"</span> | The color of the component. It supports those theme colors that make sense for this component. |
| <span class="prop-name">position</span> | <span class="prop-type">"absolute"<br>&#124;&nbsp;"fixed"<br>&#124;&nbsp;"relative"<br>&#124;&nbsp;"static"<br>&#124;&nbsp;"sticky"</span> | <span class="prop-default">"fixed"</span> | The positioning type. The behavior of the different options is described [in the MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning). Note: `sticky` is not universally supported and will fall back to `static` when unavailable. |


Any other props supplied will be provided to the root element.