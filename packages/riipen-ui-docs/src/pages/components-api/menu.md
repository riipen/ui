<!--- This documentation is automatically generated, do not try to edit it. -->

# Menu API

<p class="description">The API documentation of the Menu React component.</p>

## Import

```js
import Menu from 'riipen-ui/Menu';

// or

import { Menu } from 'riipen-ui';
```

You can learn more about the difference by [reading this guide](/guides/bundle-size).

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">anchorEl</span> | <span class="prop-type">object</span> |  | The element the menu is attached too |
| <span class="prop-name">anchorPosition</span> | <span class="prop-type">object</span> |  | The location to attach the content too on the anchor element |
| <span class="prop-name">autoFocus</span> | <span class="prop-type">bool</span> |  | Whether to autofocus the first element on first open |
| <span class="prop-name">children</span> | <span class="prop-type">Array<{ type?: import MenuItem from "./MenuItem"; }></span> |  | The content of the component. |
| <span class="prop-name">classes</span> | <span class="prop-type">array</span> | <span class="prop-default">[]</span> | Array or string of additional CSS classes to use. |
| <span class="prop-name">closeOnClick</span> | <span class="prop-type">bool</span> | <span class="prop-default">true</span> | Whether or not the menu should close when an option is chosen with a click event |
| <span class="prop-name">color</span> | <span class="prop-type">"primary"<br>&#124;&nbsp;"secondary"</span> | <span class="prop-default">"primary"</span> | The color of the component. It supports those theme colors that make sense for this component. |
| <span class="prop-name">contentPosition</span> | <span class="prop-type">object</span> |  | The location to attach the anchor to on the content element |
| <span class="prop-name">onChange</span> | <span class="prop-type">func</span> |  | The function callback for when the selection is changed |
| <span class="prop-name">onClose</span> | <span class="prop-type">func</span> |  | The function callback to use when the menu closes |
| <span class="prop-name">popoverStyles</span> | <span class="prop-type">object</span> | <span class="prop-default">{}</span> | The styles to be applied to the popover list |
| <span class="prop-name">selectedIndex</span> | <span class="prop-type">number</span> |  | The index of the item selected in the list |


Any other props supplied will be provided to the root element.