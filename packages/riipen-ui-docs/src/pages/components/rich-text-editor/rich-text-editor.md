# Rich Text Editors

<p class="description">Rich text editors let users enter and edit text.</p>

Rich text editors allow users to enter text into a UI. They typically appear in forms.

## Form props

Standard form attributes are supported e.g. required, readOnly, type, etc. as well as a `label` and `hint`
which are used to give context about a field’s input, such as how the input will be used.

{{"demo": "pages/components/rich-text-editor/Usage.js"}}

## Accessibility

In order for the rich text editors to be accessible, the rich text editor should be linked to the label. The underlying DOM nodes should have this structure.

```html
<label for="my-input">Email address</label> <input id="my-input" />
```

If you are using the RichTextEditor component, you just have to provide a unique `id` or `name`.
