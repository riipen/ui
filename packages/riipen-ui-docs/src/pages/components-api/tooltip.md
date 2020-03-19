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
| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | The tooltip content. |
| <span class="prop-name">classes</span> | <span class="prop-type">array</span> | <span class="prop-default">[]</span> | Any additional classes to apply. |
| <span class="prop-name">color</span> | <span class="prop-type">"default"<br>&#124;&nbsp;"white"<br>&#124;&nbsp;"positive"<br>&#124;&nbsp;"negative"<br>&#124;&nbsp;"warning"</span> | <span class="prop-default">"default"</span> | Color of tooltip. |
| <span class="prop-name">component</span> | <span class="prop-type">elementType</span> | <span class="prop-default">"div"</span> | The component used for the root node. Either a string to use a DOM element or a component. |
| <span class="prop-name">contentPosition</span> | <span class="prop-type">object</span> | <span class="prop-default">{ vertical: "bottom", horizontal: "left" }</span> | The location to attach the anchor to on the content element. |
| <span class="prop-name">hover</span> | <span class="prop-type">bool</span> | <span class="prop-default">true</span> | Whether tooltip should display on hover. |
| <span class="prop-name">onClose</span> | <span class="prop-type">func</span> |  | Function to call on tooltip close. |
| <span class="prop-name">onOpen</span> | <span class="prop-type">func</span> |  | Function to call on tooltip open. |
| <span class="prop-name">tooltip</span> | <span class="prop-type">node</span> |  | The tooltip content to display. |


Any other props supplied will be provided to the root element.