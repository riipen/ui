<!--- This documentation is automatically generated, do not try to edit it. -->

# Typography API

<p class="description">The API documentation of the Typography React component.</p>

## Import

```js
import Typography from 'riipen-ui/Typography';

// or

import { Typography } from 'riipen-ui';
```

You can learn more about the difference by [reading this guide](/guides/bundle-size).

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | The content of the component. |
| <span class="prop-name">classes</span> | <span class="prop-type">array</span> | <span class="prop-default">[]</span> | An array of custom CSS classes to apply. |
| <span class="prop-name">color</span> | <span class="prop-type">"inherit"<br>&#124;&nbsp;"initial"<br>&#124;&nbsp;"black"<br>&#124;&nbsp;"grey600"<br>&#124;&nbsp;"grey800"<br>&#124;&nbsp;"greyA400"<br>&#124;&nbsp;"negative"<br>&#124;&nbsp;"positive"<br>&#124;&nbsp;"primary"<br>&#124;&nbsp;"secondary"<br>&#124;&nbsp;"tertiary"<br>&#124;&nbsp;"white"</span> | <span class="prop-default">"inherit"</span> | The color of the component. It supports those theme colors that make sense for this component. |
| <span class="prop-name">component</span> | <span class="prop-type">elementType</span> |  | The component used for the root node. Either a string to use a DOM element or a component. By default, it maps the variant to a good default headline component. |
| <span class="prop-name">display</span> | <span class="prop-type">"initial"<br>&#124;&nbsp;"block"<br>&#124;&nbsp;"inline"</span> | <span class="prop-default">"initial"</span> | Controls the display type. |
| <span class="prop-name">fontWeight</span> | <span class="prop-type">"bold"<br>&#124;&nbsp;"light"<br>&#124;&nbsp;"medium"<br>&#124;&nbsp;"regular"</span> |  | Set the font weight on the component. |
| <span class="prop-name">gutter</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If true, the text will have a bottom margin. |
| <span class="prop-name">textAlign</span> | <span class="prop-type">"inherit"<br>&#124;&nbsp;"left"<br>&#124;&nbsp;"center"<br>&#124;&nbsp;"right"<br>&#124;&nbsp;"justify"</span> | <span class="prop-default">"inherit"</span> | Set the text-align on the component. |
| <span class="prop-name">variant</span> | <span class="prop-type">"h1"<br>&#124;&nbsp;"h2"<br>&#124;&nbsp;"h3"<br>&#124;&nbsp;"h4"<br>&#124;&nbsp;"h5"<br>&#124;&nbsp;"h6"<br>&#124;&nbsp;"body1"<br>&#124;&nbsp;"body2"<br>&#124;&nbsp;"body3"<br>&#124;&nbsp;"inherit"</span> | <span class="prop-default">"body1"</span> | Applies the theme typography styles. |


Any other props supplied will be provided to the root element.