<!--- This documentation is automatically generated, do not try to edit it. -->

# GridItem API

<p class="description">The API documentation of the GridItem React component.</p>

## Import

```js
import GridItem from 'riipen-ui/GridItem';

// or

import { GridItem } from 'riipen-ui';
```

You can learn more about the difference by [reading this guide](/guides/bundle-size).

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">alignItems</span> | <span class="prop-type">"flex-start"<br>&#124;&nbsp;"center"<br>&#124;&nbsp;"flex-end"<br>&#124;&nbsp;"stretch"<br>&#124;&nbsp;"baseline"</span> | <span class="prop-default">"stretch"</span> | A whitelisted set of align items options for the grid item. |
| <span class="prop-name">children</span> | <span class="prop-type">any</span> |  | The content of the grid item. |
| <span class="prop-name">classes</span> | <span class="prop-type">array</span> | <span class="prop-default">[]</span> | An array of custom CSS classes to apply. |
| <span class="prop-name">flexDirection</span> | <span class="prop-type">"row"<br>&#124;&nbsp;"row-reverse"<br>&#124;&nbsp;"column"<br>&#124;&nbsp;"column-reverse"<br>&#124;&nbsp;"initial"<br>&#124;&nbsp;"inherit"</span> | <span class="prop-default">"column"</span> | The styling to pass into the flex-direction of the grid. |
| <span class="prop-name">flexGrow</span> | <span class="prop-type">number</span> | <span class="prop-default">0</span> | Defines if the grid item should grow to fill extra space in the row |
| <span class="prop-name">flexShrink</span> | <span class="prop-type">number</span> | <span class="prop-default">0</span> | Defines if the grid item should shrink to allow more space in the row |
| <span class="prop-name">flexWrap</span> | <span class="prop-type">"nowrap"<br>&#124;&nbsp;"wrap"<br>&#124;&nbsp;"wrap-reverse"<br>&#124;&nbsp;"inherit"<br>&#124;&nbsp;"initial"<br>&#124;&nbsp;"unset"</span> | <span class="prop-default">"wrap"</span> | The styling to pass into the flex-wrap of the grid item. |
| <span class="prop-name">justifyContent</span> | <span class="prop-type">"flex-start"<br>&#124;&nbsp;"center"<br>&#124;&nbsp;"flex-end"<br>&#124;&nbsp;"space-between"<br>&#124;&nbsp;"space-around"<br>&#124;&nbsp;"space-evenly"</span> | <span class="prop-default">"flex-start"</span> | A whitelisted set of justify content options for the grid item. |
| <span class="prop-name">lg</span> | <span class="prop-type">number<br>&#124;&nbsp;"hidden"<br>&#124;&nbsp;"auto"</span> | <span class="prop-default">12</span> | The columns use at the large resolution. Can also be 'hidden'. Can also be 'hidden' or 'auto'. |
| <span class="prop-name">md</span> | <span class="prop-type">number<br>&#124;&nbsp;"hidden"<br>&#124;&nbsp;"auto"</span> |  | The columns use at the medium resolution. Can also be 'hidden'. Can also be 'hidden' or 'auto'. |
| <span class="prop-name">sm</span> | <span class="prop-type">number<br>&#124;&nbsp;"hidden"<br>&#124;&nbsp;"auto"</span> |  | The columns use at the small resolution. Can also be 'hidden'. Can also be 'hidden' or 'auto'. |
| <span class="prop-name">spacing</span> | <span class="prop-type">0<br>&#124;&nbsp;1<br>&#124;&nbsp;2<br>&#124;&nbsp;3<br>&#124;&nbsp;4<br>&#124;&nbsp;5<br>&#124;&nbsp;6<br>&#124;&nbsp;7<br>&#124;&nbsp;8<br>&#124;&nbsp;9<br>&#124;&nbsp;10</span> | <span class="prop-default">3</span> | Defines the space between this grid item and other items. |
| <span class="prop-name">size</span> | <span class="prop-type">"xs"<br>&#124;&nbsp;"sm"<br>&#124;&nbsp;"md"<br>&#124;&nbsp;"lg"</span> | <span class="prop-default">"lg"</span> | The size of the component to render. Passed in by the Grid. |
| <span class="prop-name">xs</span> | <span class="prop-type">number<br>&#124;&nbsp;"hidden"<br>&#124;&nbsp;"auto"</span> |  | The columns use at the extra small resolution. Can also be 'hidden' or 'auto'. |


Any other props supplied will be provided to the root element.