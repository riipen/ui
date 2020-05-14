<!--- This documentation is automatically generated, do not try to edit it. -->

# Popover API

<p class="description">The API documentation of the Popover React component.</p>

## Import

```js
import Popover from 'riipen-ui/Popover';

// or

import { Popover } from 'riipen-ui';
```

You can learn more about the difference by [reading this guide](/guides/bundle-size).

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">anchorEl</span> | <span class="prop-type">func<br>&#124;&nbsp;object</span> |  | Either a reference to an anchor element or a function to get the reference |
| <span class="prop-name">anchorPosition</span> | <span class="prop-type">object</span> |  | The location to attach the content too on the anchor element |
| <span class="prop-name">children</span> | <span class="prop-type">object</span> |  | The content of the component |
| <span class="prop-name">classes</span> | <span class="prop-type">array</span> |  | Array of additional CSS classes to use. |
| <span class="prop-name">component</span> | <span class="prop-type">string</span> | <span class="prop-default">"span"</span> | The type of element to use at the root |
| <span class="prop-name">contentPosition</span> | <span class="prop-type">object</span> |  | The location to attach the anchor to on the content element |
| <span class="prop-name">fullWidth</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Whether or not the dropdown should take up the entire screen-width. |
| <span class="prop-name">isOpen</span> | <span class="prop-type">bool</span> | <span class="prop-default">true</span> | Whether the popover should be displayed |
| <span class="prop-name">keepOnScreen</span> | <span class="prop-type">bool</span> |  | Whether to keep the popout on screen when the anchor element scrolls off |
| <span class="prop-name">lockScroll</span> | <span class="prop-type">bool</span> | <span class="prop-default">true</span> | Whether to lock the scrollbar when the popover is open |
| <span class="prop-name">marginThreshold</span> | <span class="prop-type">number</span> | <span class="prop-default">16</span> | The marigins of the page the popover should respect |
| <span class="prop-name">onClose</span> | <span class="prop-type">func</span> |  | Function call to handle clickaway/ close events, if not provided the anchor element must be removed to clear the popover or use isOpen |
| <span class="prop-name">styles</span> | <span class="prop-type">object</span> | <span class="prop-default">{}</span> | Styles to apply to the component |


Any other props supplied will be provided to the root element.