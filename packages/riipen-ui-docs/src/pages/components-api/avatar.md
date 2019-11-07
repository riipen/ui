<!--- This documentation is automatically generated, do not try to edit it. -->

# Avatar API

<p class="description">The API documentation of the Avatar React component.</p>

## Import

```js
import Avatar from 'riipen-ui/Avatar';

// or

import { Avatar } from 'riipen-ui';
```

You can learn more about the difference by [reading this guide](/guides/bundle-size).

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name required">alt&nbsp;*</span> | <span class="prop-type">string</span> |  | Used to provide an alt attribute to the rendered img element. |
| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | Used to render icon or text elements inside the Avatar if src is not set. |
| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | An array of custom CSS classes to apply. |
| <span class="prop-name">size</span> | <span class="prop-type">string</span> | <span class="prop-default">"96px"</span> | The height and width size to render the Avatar at. |
| <span class="prop-name">src</span> | <span class="prop-type">string</span> |  | The src attribute for the img element. |
| <span class="prop-name">variant</span> | <span class="prop-type">"circle"<br>&#124;&nbsp;"rounded"<br>&#124;&nbsp;"square"</span> | <span class="prop-default">"circle"</span> | The shape of the avatar. |


Any other props supplied will be provided to the root element.