<!--- This documentation is automatically generated, do not try to edit it. -->

# RichTextEditor API

<p class="description">The API documentation of the RichTextEditor React component.</p>

## Import

```js
import RichTextEditor from 'riipen-ui/RichTextEditor';

// or

import { RichTextEditor } from 'riipen-ui';
```

You can learn more about the difference by [reading this guide](/guides/bundle-size).

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| <span class="prop-name">controlWhitelist</span> | <span class="prop-type">Array<string></span> |  | Optional array of whitelisted styles ex. ['code-block', 'BOLD', 'LINK'] |
| <span class="prop-name">error</span> | <span class="prop-type">node</span> |  | An error to display below the input. |
| <span class="prop-name">id</span> | <span class="prop-type">string</span> |  | An ID to set on the wrapper div of this component. |
| <span class="prop-name">isRequired</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Optional indicator to show if field is required. Defaults to false. |
| <span class="prop-name">label</span> | <span class="prop-type">string</span> |  | Optional form field label string. |
| <span class="prop-name">maxLength</span> | <span class="prop-type">number</span> |  | Optional max character length. Shows a character count component if present. |
| <span class="prop-name">placeholder</span> | <span class="prop-type">node</span> |  | Optional placeholder. Shows when there is no text. |
| <span class="prop-name">style</span> | <span class="prop-type">object</span> |  | Optional style applied to parent div of editor. Used to set a minimum height. |
| <span class="prop-name">warning</span> | <span class="prop-type">node</span> |  | A warning to display below the input. |


Any other props supplied will be provided to the root element.