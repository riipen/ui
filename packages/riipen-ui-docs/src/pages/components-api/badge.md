<!--- This documentation is automatically generated, do not try to edit it. -->

# Badge API

<p class="description">The API documentation of the Badge React component.</p>

## Import

```js
import Badge from 'riipen-ui/Badge';

// or

import { Badge } from 'riipen-ui';
```

You can learn more about the difference by [reading this guide](/guides/bundle-size).

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">anchor</span> | <span class="prop-type">{ horizontal: "left"<br>&#124;&nbsp;"right", vertical: "bottom"<br>&#124;&nbsp;"top" }</span> | <span class="prop-default">{  horizontal: "right",  vertical: "top"}</span> | The anchor of the badge. |
| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | The badge will be added relative to this node. |
| <span class="prop-name">classes</span> | <span class="prop-type">array</span> |  | An array of custom CSS classes to apply. |
| <span class="prop-name">color</span> | <span class="prop-type">"negative"<br>&#124;&nbsp;"positive"<br>&#124;&nbsp;"primary"<br>&#124;&nbsp;"secondary"<br>&#124;&nbsp;"muted"</span> | <span class="prop-default">"primary"</span> | The color of the component. It supports those theme colors that make sense for this component. |
| <span class="prop-name">component</span> | <span class="prop-type">elementType</span> | <span class="prop-default">"span"</span> | The component used for the root node. Either a string to use a DOM element or a component. |
| <span class="prop-name">content</span> | <span class="prop-type">node</span> |  | The content rendered within the badge. |
| <span class="prop-name">max</span> | <span class="prop-type">number</span> | <span class="prop-default">99</span> | Max count to show. |
| <span class="prop-name">overlap</span> | <span class="prop-type">"circle"<br>&#124;&nbsp;"rectangle"</span> | <span class="prop-default">"rectangle"</span> | Wrapped shape the badge should overlap. |
| <span class="prop-name">showZero</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Controls whether the badge is hidden when `badgeContent` is zero. |
| <span class="prop-name">size</span> | <span class="prop-type">"small"<br>&#124;&nbsp;"medium"</span> | <span class="prop-default">"medium"</span> | The size of the badge. Only applicable to 'standard' variant. |
| <span class="prop-name">variant</span> | <span class="prop-type">"dot"<br>&#124;&nbsp;"standard"</span> | <span class="prop-default">"standard"</span> | The variant to use. |


Any other props supplied will be provided to the root element.