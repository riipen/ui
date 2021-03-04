<!--- This documentation is automatically generated, do not try to edit it. -->

# RadioButtonGroup API

<p class="description">The API documentation of the RadioButtonGroup React component.</p>

## Import

```js
import RadioButtonGroup from 'riipen-ui/RadioButtonGroup';

// or

import { RadioButtonGroup } from 'riipen-ui';
```

You can learn more about the difference by [reading this guide](/guides/bundle-size).

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name required">children&nbsp;*</span> | <span class="prop-type">node</span> |  | The content of the component. |
| <span class="prop-name">error</span> | <span class="prop-type">node</span> |  | An error to display below the input. |
| <span class="prop-name">hint</span> | <span class="prop-type">node</span> |  | Hint text to display under the label of the input. |
| <span class="prop-name">label</span> | <span class="prop-type">node</span> |  | Label text to display for the input. |
| <span class="prop-name">name</span> | <span class="prop-type">string</span> |  | The name of the form element the label is bound to. |
| <span class="prop-name">onChange</span> | <span class="prop-type">func</span> |  | Callback fired when a radio button is selected.<br><br>**Signature:**<br>`function(event: object) => void`<br>*event:* The event source of the callback. You can pull out the new value by accessing `event.target.value` (string). |
| <span class="prop-name">required</span> | <span class="prop-type">bool</span> |  | If true, an asterisk will be appended to the end of the label. |
| <span class="prop-name">warning</span> | <span class="prop-type">node</span> |  | A warning to display below the input. |


Any other props supplied will be provided to the root element.