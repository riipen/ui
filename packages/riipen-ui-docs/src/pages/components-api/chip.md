<!--- This documentation is automatically generated, do not try to edit it. -->

# Chip API

<p class="description">The API documentation of the Chip React component.</p>

## Import

```js
import Chip from 'riipen-ui/Chip';

// or

import { Chip } from 'riipen-ui';
```

You can learn more about the difference by [reading this guide](/guides/bundle-size).

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">classes</span> | <span class="prop-type">array</span> | <span class="prop-default">[]</span> | List of additional classes to apply to this component. |
| <span class="prop-name">color</span> | <span class="prop-type">"default"<br>&#124;&nbsp;"primary"<br>&#124;&nbsp;"secondary"<br>&#124;&nbsp;"tertiary"<br>&#124;&nbsp;"positive"<br>&#124;&nbsp;"warning"<br>&#124;&nbsp;"negative"</span> | <span class="prop-default">"default"</span> | The color to use. |
| <span class="prop-name">component</span> | <span class="prop-type">elementType</span> | <span class="prop-default">"div"</span> | The component used for the root node. Either a string to use a DOM element or a component. |
| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | The elements to render inside the pill |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the chip should be displayed in a disabled state. |
| <span class="prop-name">hover</span> | <span class="prop-type">bool</span> |  | Whether to invert colors on hover |
| <span class="prop-name">iconStart</span> | <span class="prop-type">elementType</span> |  | Icon to display at start of chip |
| <span class="prop-name">label</span> | <span class="prop-type">node</span> |  | The content of the label. |
| <span class="prop-name">onClick</span> | <span class="prop-type">func</span> |  | Action to perform when clicked |
| <span class="prop-name">onIconClick</span> | <span class="prop-type">func</span> |  | Callback function fired when the icon is clicked. |
| <span class="prop-name">size</span> | <span class="prop-type">"small"<br>&#124;&nbsp;"medium"</span> | <span class="prop-default">"medium"</span> | The size of the chip. |
| <span class="prop-name">spacing</span> | <span class="prop-type">number</span> | <span class="prop-default">1</span> |  |
| <span class="prop-name">variant</span> | <span class="prop-type">"default"<br>&#124;&nbsp;"outlined"</span> | <span class="prop-default">"default"</span> | The variant to use. |


Any other props supplied will be provided to the root element.