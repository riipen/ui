<!--- This documentation is automatically generated, do not try to edit it. -->

# MenuList API

<p class="description">The API documentation of the MenuList React component.</p>

## Import

```js
import MenuList from 'riipen-ui/MenuList';

// or

import { MenuList } from 'riipen-ui';
```

You can learn more about the difference by [reading this guide](/guides/bundle-size).

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">children</span> | <span class="prop-type">Array<{ type?: import MenuItem from "./MenuItem"; }></span> |  | The content of the component. |
| <span class="prop-name">autoFocus</span> | <span class="prop-type">bool</span> |  | Wether to select the first element on list open |
| <span class="prop-name">selectedIndex</span> | <span class="prop-type">number</span> |  | The selected index of the list |
| <span class="prop-name">selectChange</span> | <span class="prop-type">func</span> |  | The function callback when an item is selected |
| <span class="prop-name">color</span> | <span class="prop-type">"primary"<br>&#124;&nbsp;"secondary"</span> |  | The color of the component. It supports those theme colors that make sense for this component. |
| <span class="prop-name">classes</span> | <span class="prop-type">array</span> |  | List of additional classes to apply to this component. |


Any other props supplied will be provided to the root element.