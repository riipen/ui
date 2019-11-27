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
| <span class="prop-name">children</span> | <span class="prop-type">object</span> |  | The content of the component |
| <span class="prop-name">className</span> | <span class="prop-type">string</span> |  | The classes applied to the component |
| <span class="prop-name required">handleClose&nbsp;*</span> | <span class="prop-type">func</span> |  | Function call to handle clickaway/ close events |
| <span class="prop-name">anchorEl</span> | <span class="prop-type">func<br>&#124;&nbsp;object</span> |  | Either a reference to an anchor element or a function to get the reference |
| <span class="prop-name">marginThreshold</span> | <span class="prop-type">number</span> |  | The marigins of the page the popover should respect |
| <span class="prop-name">anchorPosition</span> | <span class="prop-type">object</span> |  | The location to attach the content too on the anchor element |
| <span class="prop-name">contentPosition</span> | <span class="prop-type">object</span> |  | The location to attach the anchor to on the content element |
| <span class="prop-name">type</span> | <span class="prop-type">string</span> |  | The type of element to use at the root |


Any other props supplied will be provided to the root element.