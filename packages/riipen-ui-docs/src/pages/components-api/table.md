<!--- This documentation is automatically generated, do not try to edit it. -->

# Table API

<p class="description">The API documentation of the Table React component.</p>

## Import

```js
import Table from 'riipen-ui/Table';

// or

import { Table } from 'riipen-ui';
```

You can learn more about the difference by [reading this guide](/guides/bundle-size).

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">allowSearch</span> | <span class="prop-type">bool</span> | <span class="prop-default">true</span> | Displays the label instead of the header |
| <span class="prop-name">children</span> | <span class="prop-type">Array<{ type?: import TableColumn from "./TableColumn"; }><br>&#124;&nbsp;{ type?: import TableColumn from "./TableColumn"; }</span> |  | The children columns to render Must be of type TableColumn |
| <span class="prop-name">classes</span> | <span class="prop-type">Array<string></span> |  | Classes to apply to the root element |
| <span class="prop-name">entities</span> | <span class="prop-type">array</span> | <span class="prop-default">[]</span> | The entities to render in the table |
| <span class="prop-name">hover</span> | <span class="prop-type">bool</span> | <span class="prop-default">true</span> | Whether or not to highlight rows on highlight |
| <span class="prop-name">mobileBreakpoint</span> | <span class="prop-type">"xs"<br>&#124;&nbsp;"sm"<br>&#124;&nbsp;"md"<br>&#124;&nbsp;"lg"<br>&#124;&nbsp;"xl"</span> | <span class="prop-default">"md"</span> | Size to change table render from desktop to mobile |


Any other props supplied will be provided to the root element.