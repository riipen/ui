<!--- This documentation is automatically generated, do not try to edit it. -->

# Form API

<p class="description">The API documentation of the Form React component.</p>

## Import

```js
import Form from 'riipen-ui/Form';

// or

import { Form } from 'riipen-ui';
```

You can learn more about the difference by [reading this guide](/guides/bundle-size).

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | The content of the component. |
| <span class="prop-name">classes</span> | <span class="prop-type">array</span> | <span class="prop-default">[]</span> | An array of custom CSS classes to apply. |
| <span class="prop-name">error</span> | <span class="prop-type">string<br>&#124;&nbsp;node</span> |  | Top level form error to display. One of either string or react node. |
| <span class="prop-name">errors</span> | <span class="prop-type">Array<string><br>&#124;&nbsp;Array<element><br>&#124;&nbsp;object</span> |  | A list of form errors to display. One of an object consisting of key value errors, an array of strings, or an array of react nodes. |
| <span class="prop-name">errorScroll</span> | <span class="prop-type">bool</span> | <span class="prop-default">true</span> | If `false`, error will not be scrolled to when it is passed to the form. |
| <span class="prop-name">enter</span> | <span class="prop-type">bool</span> | <span class="prop-default">true</span> | If `false`, pressing enter to submit the form will be disabled. |


Any other props supplied will be provided to the root element.