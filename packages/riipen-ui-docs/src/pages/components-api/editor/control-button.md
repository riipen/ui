<!--- This documentation is automatically generated, do not try to edit it. -->

# ControlButton API

<p class="description">The API documentation of the ControlButton React component.</p>

## Import

```js
import ControlButton from 'riipen-ui/editor/ControlButton';

// or

import { ControlButton } from 'riipen-ui/editor';
```

You can learn more about the difference by [reading this guide](/guides/bundle-size).

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name required">active&nbsp;*</span> | <span class="prop-type">bool</span> |  | If the control is active. |
| <span class="prop-name required">label&nbsp;*</span> | <span class="prop-type">node</span> |  | The display for the button. We use a string or &lt;Icon />. |
| <span class="prop-name required">onClick&nbsp;*</span> | <span class="prop-type">func</span> |  | Function to execute on control button click. |
| <span class="prop-name">size</span> | <span class="prop-type">"small"<br>&#124;&nbsp;"medium"<br>&#124;&nbsp;"large"</span> | <span class="prop-default">"small"</span> | The width of the control button. |


Any other props supplied will be provided to the root element.