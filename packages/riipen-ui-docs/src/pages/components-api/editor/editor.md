<!--- This documentation is automatically generated, do not try to edit it. -->

# Editor API

<p class="description">The API documentation of the Editor React component.</p>

## Import

```js
import Editor from 'riipen-ui/editor/Editor';

// or

import { Editor } from 'riipen-ui/editor';
```

You can learn more about the difference by [reading this guide](/guides/bundle-size).

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">additionalControls</span> | <span class="prop-type">node</span> |  | Additional controls to display. |
| <span class="prop-name">controlWhitelist</span> | <span class="prop-type">Array<string></span> |  | Optional array of whitelisted styles ex. ['code-block', 'BOLD', 'LINK'] |
| <span class="prop-name">controlPosition</span> | <span class="prop-type">"top"<br>&#124;&nbsp;"bottom"</span> | <span class="prop-default">"top"</span> | Position of controls for the editor |
| <span class="prop-name">error</span> | <span class="prop-type">any</span> |  | If the error style should be shown or not |
| <span class="prop-name">initialValue</span> | <span class="prop-type">any</span> |  | Initial content to set in the editor |
| <span class="prop-name">onChange</span> | <span class="prop-type">func</span> |  | Function to execute when editor content changes, gets html value of editor |
| <span class="prop-name">placeholder</span> | <span class="prop-type">node</span> |  | Optional placeholder. Shows when there is no text. |
| <span class="prop-name">style</span> | <span class="prop-type">object</span> |  | Optional style applied to parent div of editor. Used to set a minimum height. |


Any other props supplied will be provided to the root element.