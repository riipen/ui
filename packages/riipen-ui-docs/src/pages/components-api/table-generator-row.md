<!--- This documentation is automatically generated, do not try to edit it. -->

# TableGeneratorRow API

<p class="description">The API documentation of the TableGeneratorRow React component.</p>

## Import

```js
import TableGeneratorRow from 'riipen-ui/TableGeneratorRow';

// or

import { TableGeneratorRow } from 'riipen-ui';
```

You can learn more about the difference by [reading this guide](/guides/bundle-size).

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">classes</span> | <span class="prop-type">Array<string></span> |  | Classes to apply to the root element. |
| <span class="prop-name">columns</span> | <span class="prop-type">Array<{ cell: func, cellProps?: func, header: func, headerProps?: func, mobileFooter?: bool, mobileHeader?: bool }></span> | <span class="prop-default">[]</span> | The columns to render. |
| <span class="prop-name">data</span> | <span class="prop-type">object</span> | <span class="prop-default">{}</span> | Row data to render. |
| <span class="prop-name">expandRow</span> | <span class="prop-type">func</span> |  | Function to determine if row should be expanded or not |
| <span class="prop-name">expandedNode</span> | <span class="prop-type">func</span> |  | Node to render for an expanded row. |
| <span class="prop-name">hover</span> | <span class="prop-type">bool</span> | <span class="prop-default">true</span> | Whether or not to highlight rows on highlight. |
| <span class="prop-name">isLastRow</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Is this the last row or not. |
| <span class="prop-name">mobile</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Render mobile view or not. |
| <span class="prop-name">rowNum</span> | <span class="prop-type">number</span> |  | The number of this row |
| <span class="prop-name">rowProps</span> | <span class="prop-type">object</span> |  | Properties to pass to a rendered row. |


Any other props supplied will be provided to the root element.