<!--- This documentation is automatically generated, do not try to edit it. -->

# TableGenerator API

<p class="description">The API documentation of the TableGenerator React component.</p>

## Import

```js
import TableGenerator from 'riipen-ui/TableGenerator';

// or

import { TableGenerator } from 'riipen-ui';
```

You can learn more about the difference by [reading this guide](/guides/bundle-size).

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">classes</span> | <span class="prop-type">Array<string></span> |  | Classes to apply to the root element. |
| <span class="prop-name">columns</span> | <span class="prop-type">Array<{ cell: func, cellProps?: func, header: func, headerProps?: func, mobileFooter?: bool, mobileHeader?: bool }></span> | <span class="prop-default">[]</span> | The columns to render. |
| <span class="prop-name">data</span> | <span class="prop-type">array</span> | <span class="prop-default">[]</span> | The entities to render in the table rows. |
| <span class="prop-name">empty</span> | <span class="prop-type">node</span> |  | The react node to display if no data is provided. |
| <span class="prop-name">expandRow</span> | <span class="prop-type">func</span> |  | Function to determine if row should be expanded or not |
| <span class="prop-name">expandedNode</span> | <span class="prop-type">func</span> |  | Node to render for an expanded row. |
| <span class="prop-name">hover</span> | <span class="prop-type">bool</span> | <span class="prop-default">true</span> | Whether or not to highlight rows on highlight. |
| <span class="prop-name">mobileBreakpoint</span> | <span class="prop-type">"xs"<br>&#124;&nbsp;"sm"<br>&#124;&nbsp;"md"<br>&#124;&nbsp;"lg"<br>&#124;&nbsp;"xl"</span> | <span class="prop-default">"md"</span> | Size to change table render from desktop to mobile. |
| <span class="prop-name">rowProps</span> | <span class="prop-type">object</span> |  | Properties to pass to a rendered row. |


Any other props supplied will be provided to the root element.