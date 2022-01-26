<!--- This documentation is automatically generated, do not try to edit it. -->

# Tab API

<p class="description">The API documentation of the Tab React component.</p>

## Import

```js
import Tab from 'riipen-ui/Tab';

// or

import { Tab } from 'riipen-ui';
```

You can learn more about the difference by [reading this guide](/guides/bundle-size).

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">active</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the tab indicator will be displayed. |
| <span class="prop-name">breakpoint</span> | <span class="prop-type">"sm"<br>&#124;&nbsp;"md"<br>&#124;&nbsp;"lg"<br>&#124;&nbsp;"xl"<br>&#124;&nbsp;"none"</span> | <span class="prop-default">"sm"</span> | The breakpoint to display the mobile tab styling. Use "none" for no styling. |
| <span class="prop-name">classes</span> | <span class="prop-type">array</span> |  | An array of custom CSS classes to apply. |
| <span class="prop-name">color</span> | <span class="prop-type">"primary"<br>&#124;&nbsp;"secondary"</span> | <span class="prop-default">"secondary"</span> | Determines the color of the indicator. |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the tab will be disabled. |
| <span class="prop-name">displayActive</span> | <span class="prop-type">bool</span> |  | If `true` will force the tab to be displayed active. |
| <span class="prop-name">fullWidth</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, will make the tab grow to use all the available space. |
| <span class="prop-name">icon</span> | <span class="prop-type">elementType</span> |  | The icon element. |
| <span class="prop-name">label</span> | <span class="prop-type">node</span> |  | The label element. |
| <span class="prop-name">onClick</span> | <span class="prop-type">func</span> |  | Callback fired when the tab is clicked.<br><br>**Signature:**<br>`function(event: object, value: any) => void`<br>*event:* The event source of the callback.<br>*value:* We default to the index of the child (number). |
| <span class="prop-name">orientation</span> | <span class="prop-type">"horizontal"<br>&#124;&nbsp;"vertical"</span> | <span class="prop-default">"horizontal"</span> | The indicator orientation. |
| <span class="prop-name">textTransform</span> | <span class="prop-type">"inherit"<br>&#124;&nbsp;"capitalize"<br>&#124;&nbsp;"uppercase"<br>&#124;&nbsp;"lowercase"</span> | <span class="prop-default">"uppercase"</span> | Set the text-transform on the tabs. |
| <span class="prop-name required">value&nbsp;*</span> | <span class="prop-type">any</span> |  | The value provided when a click event is dispatched. |


Any other props supplied will be provided to the root element.