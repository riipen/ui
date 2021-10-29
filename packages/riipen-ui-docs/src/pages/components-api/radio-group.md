<!--- This documentation is automatically generated, do not try to edit it. -->

# RadioGroup API

<p class="description">The API documentation of the RadioGroup React component.</p>

## Import

```js
import RadioGroup from 'riipen-ui/RadioGroup';

// or

import { RadioGroup } from 'riipen-ui';
```

You can learn more about the difference by [reading this guide](/guides/bundle-size).

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | The content of the component. |
| <span class="prop-name">error</span> | <span class="prop-type">node</span> |  | An error to display below the input. |
| <span class="prop-name">hint</span> | <span class="prop-type">node</span> |  | Hint text to display under the label of the input. |
| <span class="prop-name">label</span> | <span class="prop-type">node</span> |  | Label text to display for the input. |
| <span class="prop-name">labelProps</span> | <span class="prop-type">object</span> |  | Any props to pass through to the InputLabel. |
| <span class="prop-name">onChange</span> | <span class="prop-type">func</span> |  | Callback fired when a radio button is selected.<br><br>**Signature:**<br>`function(event: object) => void`<br>*event:* The event source of the callback. You can pull out the new value by accessing `event.target.value` (string). |
| <span class="prop-name">required</span> | <span class="prop-type">bool</span> |  | If true, an asterisk will be appended to the end of the label. |
| <span class="prop-name">suffix</span> | <span class="prop-type">node</span> |  | Any suffix to display beside the label. |
| <span class="prop-name">value</span> | <span class="prop-type">any</span> |  | The value of the selected radio button. |
| <span class="prop-name">warning</span> | <span class="prop-type">node</span> |  | A warning to display below the input. |


Any other props supplied will be provided to the root element.