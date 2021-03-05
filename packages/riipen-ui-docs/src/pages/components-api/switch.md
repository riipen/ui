<!--- This documentation is automatically generated, do not try to edit it. -->

# Switch API

<p class="description">The API documentation of the Switch React component.</p>

## Import

```js
import Switch from 'riipen-ui/Switch';

// or

import { Switch } from 'riipen-ui';
```

You can learn more about the difference by [reading this guide](/guides/bundle-size).

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">checked</span> | <span class="prop-type">bool</span> |  | If true, the component is checked. |
| <span class="prop-name">classes</span> | <span class="prop-type">array</span> | <span class="prop-default">[]</span> | An array of custom CSS classes to apply. |
| <span class="prop-name">color</span> | <span class="prop-type">"primary"<br>&#124;&nbsp;"secondary"<br>&#124;&nbsp;"tertiary"<br>&#124;&nbsp;"positive"<br>&#124;&nbsp;"negative"</span> | <span class="prop-default">"secondary"</span> | The color of the spinner. |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool</span> |  | If true, the switch will be disabled. |
| <span class="prop-name">id</span> | <span class="prop-type">string</span> |  | The id of the input element. |
| <span class="prop-name">onChange</span> | <span class="prop-type">func</span> |  | Callback fired when the state is changed.<br><br>**Signature:**<br>`function(event: object) => void`<br>*event:* The event source of the callback. You can pull out the new value by accessing event.target.value (string). You can pull out the new checked state by accessing event.target.checked (boolean). |
| <span class="prop-name">required</span> | <span class="prop-type">bool</span> |  | If true, the input element will be required. |
| <span class="prop-name">size</span> | <span class="prop-type">"small"<br>&#124;&nbsp;"medium"</span> | <span class="prop-default">"medium"</span> | The size of the switch. small is equivalent to the dense switch styling. |
| <span class="prop-name">value</span> | <span class="prop-type">any</span> |  | The value of the component. The DOM API casts this to a string. The browser uses "on" as the default value. |


Any other props supplied will be provided to the root element.