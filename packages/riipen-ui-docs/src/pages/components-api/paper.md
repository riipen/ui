<!--- This documentation is automatically generated, do not try to edit it. -->

# Paper API

<p class="description">The API documentation of the Paper React component.</p>

## Import

```js
import Paper from 'riipen-ui/Paper';

// or

import { Paper } from 'riipen-ui';
```

You can learn more about the difference by [reading this guide](/guides/bundle-size).

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | The content of the component. |
| <span class="prop-name">classes</span> | <span class="prop-type">array</span> | <span class="prop-default">[]</span> | List of additional classes to apply to this component. |
| <span class="prop-name">component</span> | <span class="prop-type">elementType</span> | <span class="prop-default">"div"</span> | The component used for the root node. Either a string to use a HTML element or a component. |
| <span class="prop-name">elevation</span> | <span class="prop-type">number</span> |  | The elevation of the box shadow with respect to the current theme. |
| <span class="prop-name">padding</span> | <span class="prop-type">number</span> | <span class="prop-default">2</span> | The amount of padding the paper should have. |
| <span class="prop-name">rounded</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, rounded corners are enabled. |
| <span class="prop-name">variant</span> | <span class="prop-type">"elevation"<br>&#124;&nbsp;"outlined"</span> | <span class="prop-default">"elevation"</span> | The variant to use. |


Any other props supplied will be provided to the root element.