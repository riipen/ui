<!--- This documentation is automatically generated, do not try to edit it. -->

# Tooltip API

<p class="description">The API documentation of the Tooltip React component.</p>

## Import

```js
import Tooltip from 'riipen-ui/Tooltip';

// or

import { Tooltip } from 'riipen-ui';
```

You can learn more about the difference by [reading this guide](/guides/bundle-size).

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | The content to trigger the tooltip with. |
| <span class="prop-name">classes</span> | <span class="prop-type">array</span> | <span class="prop-default">[]</span> | Any additional classes to apply. |
| <span class="prop-name">click</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Whether tooltip should display on click. |
| <span class="prop-name">color</span> | <span class="prop-type">"default"<br>&#124;&nbsp;"white"<br>&#124;&nbsp;"positive"<br>&#124;&nbsp;"negative"<br>&#124;&nbsp;"warning"</span> | <span class="prop-default">"default"</span> | Color of tooltip. |
| <span class="prop-name">component</span> | <span class="prop-type">elementType</span> | <span class="prop-default">"div"</span> | The component used for the root node. Either a string to use a DOM element or a component. |
| <span class="prop-name">onKeyDown</span> | <span class="prop-type">func</span> |  | Function to call on tooltip keydown. |
| <span class="prop-name">hover</span> | <span class="prop-type">bool</span> | <span class="prop-default">true</span> | Whether tooltip should display on hover. |
| <span class="prop-name">isControlledByProps</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | How the open/close state will be determined: [Default] false: by this component's state, true: by this component's props. |
| <span class="prop-name">keepOpenOnMouseLeave</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Whether the popover should stay open after leaving the content. |
| <span class="prop-name">onClose</span> | <span class="prop-type">func</span> |  | Function to call on tooltip close. |
| <span class="prop-name">onOpen</span> | <span class="prop-type">func</span> |  | Function to call on tooltip open. |
| <span class="prop-name">open</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Whether the popover should be open/shown. Only used when props.isControlledByProps is true [Default] false |
| <span class="prop-name">position</span> | <span class="prop-type">"top-right"<br>&#124;&nbsp;"top-center"<br>&#124;&nbsp;"top-left"<br>&#124;&nbsp;"center-right"<br>&#124;&nbsp;"center-left"<br>&#124;&nbsp;"bottom-right"<br>&#124;&nbsp;"bottom-center"<br>&#124;&nbsp;"bottom-left"</span> | <span class="prop-default">"bottom-center"</span> | Where to display the tooltip in relation to element. |
| <span class="prop-name">size</span> | <span class="prop-type">"small"<br>&#124;&nbsp;"medium"</span> | <span class="prop-default">"small"</span> | The size of the tooltip. |
| <span class="prop-name">tooltip</span> | <span class="prop-type">node</span> |  | The tooltip content to display. |


Any other props supplied will be provided to the root element.