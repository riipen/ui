<!--- This documentation is automatically generated, do not try to edit it. -->

# Drawer API

<p class="description">The API documentation of the Drawer React component.</p>

## Import

```js
import Drawer from 'riipen-ui/Drawer';

// or

import { Drawer } from 'riipen-ui';
```

You can learn more about the difference by [reading this guide](/guides/bundle-size).

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">anchor</span> | <span class="prop-type">"left"<br>&#124;&nbsp;"top"<br>&#124;&nbsp;"right"<br>&#124;&nbsp;"bottom"</span> | <span class="prop-default">"left"</span> | Side from which the drawer will appear. |
| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | The content of the component. |
| <span class="prop-name">classes</span> | <span class="prop-type">array</span> |  | An array of custom CSS classes to apply. |
| <span class="prop-name required">onClose&nbsp;*</span> | <span class="prop-type">func</span> |  | Callback fired when the component requests to be closed.<br><br>**Signature:**<br>`function(event: object) => void`<br>*event:* The event source of the callback. |
| <span class="prop-name">open</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the drawer is open. |


Any other props supplied will be provided to the root element.