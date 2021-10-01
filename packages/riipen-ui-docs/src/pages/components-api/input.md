<!--- This documentation is automatically generated, do not try to edit it. -->

# Input API

<p class="description">The API documentation of the Input React component.</p>

## Import

```js
import Input from 'riipen-ui/Input';

// or

import { Input } from 'riipen-ui';
```

You can learn more about the difference by [reading this guide](/guides/bundle-size).

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">classes</span> | <span class="prop-type">array</span> |  | An array of custom CSS classes to apply. |
| <span class="prop-name">disabled</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If true, disables the input. |
| <span class="prop-name">endAdornment</span> | <span class="prop-type">node</span> |  | Content to render on the right side of the input. |
| <span class="prop-name">error</span> | <span class="prop-type">node</span> |  | An error to display below the input. |
| <span class="prop-name">hint</span> | <span class="prop-type">string</span> |  | Hint text to display under the label of the input. |
| <span class="prop-name">label</span> | <span class="prop-type">node</span> |  | Label text to display for the input. |
| <span class="prop-name">labelProps</span> | <span class="prop-type">object</span> |  | Props passed through to the InputLabel. |
| <span class="prop-name">meta</span> | <span class="prop-type">node</span> |  | Any text to display under the right side of the input. |
| <span class="prop-name">multiline</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, a textarea element will be rendered. |
| <span class="prop-name">onBlur</span> | <span class="prop-type">func</span> |  | Function to execute when input is out of focus. |
| <span class="prop-name">onFocus</span> | <span class="prop-type">func</span> |  | Function to execute when input is in focus. |
| <span class="prop-name">required</span> | <span class="prop-type">bool</span> |  | If true, an asterisk will be appended to the end of the label. |
| <span class="prop-name">size</span> | <span class="prop-type">"large"<br>&#124;&nbsp;"medium"<br>&#124;&nbsp;"small"</span> | <span class="prop-default">"medium"</span> | A whitelisted set of sizes that the input can be rendered at. |
| <span class="prop-name">startAdornment</span> | <span class="prop-type">node</span> |  | Content to render on the left side of the input. |
| <span class="prop-name">variant</span> | <span class="prop-type">"default"<br>&#124;&nbsp;"underlined"</span> | <span class="prop-default">"default"</span> | The input variant styling to apply. |
| <span class="prop-name">warning</span> | <span class="prop-type">node</span> |  | A warning to display below the input. |


Any other props supplied will be provided to the root element.