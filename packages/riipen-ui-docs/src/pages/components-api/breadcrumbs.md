<!--- This documentation is automatically generated, do not try to edit it. -->

# Breadcrumbs API

<p class="description">The API documentation of the Breadcrumbs React component.</p>

## Import

```js
import Breadcrumbs from 'riipen-ui/Breadcrumbs';

// or

import { Breadcrumbs } from 'riipen-ui';
```

You can learn more about the difference by [reading this guide](/guides/bundle-size).

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name required">children&nbsp;*</span> | <span class="prop-type">node</span> |  | The breadcrumb children. |
| <span class="prop-name">classes</span> | <span class="prop-type">array</span> |  | An array of custom CSS classes to apply. |
| <span class="prop-name">component</span> | <span class="prop-type">elementType</span> | <span class="prop-default">"nav"</span> | The component used for the root node. Either a string to use a DOM element or a component. By default, it maps the variant to a good default headline component. |
| <span class="prop-name">separator</span> | <span class="prop-type">node</span> | <span class="prop-default">"/"</span> | Custom separator node. |


Any other props supplied will be provided to the root element.