<!--- This documentation is automatically generated, do not try to edit it. -->

# Button API

<p class="description">The API documentation of the Button React component.</p>

## Import

```js
import Button from 'riipen-ui/Button';

// or

import { Button } from 'riipen-ui';
```

You can learn more about the difference by [reading this guide](/guides/bundle-size).

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | The content of the button. |
| <span class="prop-name">classes</span> | <span class="prop-type">array</span> | <span class="prop-default">[]</span> | List of additional classes to apply to this component. |
| <span class="prop-name">color</span> | <span class="prop-type">"default"<br>&#124;&nbsp;"primary"<br>&#124;&nbsp;"secondary"<br>&#124;&nbsp;"tertiary"<br>&#124;&nbsp;"white"</span> | <span class="prop-default">"default"</span> | The color to use. |
| <span class="prop-name">component</span> | <span class="prop-type">elementType</span> |  | The component used for the root node. Either a string to use a DOM element or a component. |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the button will be disabled. |
| <span class="prop-name">fullWidth</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the button will take up the full width of its container. |
| <span class="prop-name">href</span> | <span class="prop-type">string</span> |  | The URL to link to when the button is clicked. If defined, an `a` element will be used as the root node. |
| <span class="prop-name">iconEnd</span> | <span class="prop-type">elementType</span> |  | Element placed after the children. |
| <span class="prop-name">iconStart</span> | <span class="prop-type">elementType</span> |  | Element placed before the children. |
| <span class="prop-name">size</span> | <span class="prop-type">"small"<br>&#124;&nbsp;"medium"<br>&#124;&nbsp;"large"</span> | <span class="prop-default">"medium"</span> | The size of the chip. |
| <span class="prop-name">type</span> | <span class="prop-type">"button"<br>&#124;&nbsp;"reset"<br>&#124;&nbsp;"submit"</span> | <span class="prop-default">"button"</span> | The type of button, determining functionality. |
| <span class="prop-name">variant</span> | <span class="prop-type">"text"<br>&#124;&nbsp;"outlined"<br>&#124;&nbsp;"contained"</span> | <span class="prop-default">"text"</span> | The variant to use. |


Any other props supplied will be provided to the root element.