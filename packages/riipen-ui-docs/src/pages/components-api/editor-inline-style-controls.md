<!--- This documentation is automatically generated, do not try to edit it. -->

# EditorInlineStyleControls API

<p class="description">The API documentation of the EditorInlineStyleControls React component.</p>

## Import

```js
import EditorInlineStyleControls from 'riipen-ui/EditorInlineStyleControls';

// or

import { EditorInlineStyleControls } from 'riipen-ui';
```

You can learn more about the difference by [reading this guide](/guides/bundle-size).

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">classes</span> | <span class="prop-type">Array<string></span> | <span class="prop-default">[]</span> | The additional css classes to style the controls with. |
| <span class="prop-name required">editorState&nbsp;*</span> | <span class="prop-type">any</span> |  | The draftjs editor state immutable record. |
| <span class="prop-name required">toggle&nbsp;*</span> | <span class="prop-type">func</span> |  | Function to toggle inline style. |
| <span class="prop-name">whitelist</span> | <span class="prop-type">Array<string></span> |  | Optional array of whitelisted inline styles ex. ['ITALIC', 'BOLD'] |


Any other props supplied will be provided to the root element.