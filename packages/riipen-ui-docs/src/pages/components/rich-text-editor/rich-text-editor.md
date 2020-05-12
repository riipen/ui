# Rich Text Editors

<p class="description">Rich text editors let users enter and edit text.</p>

Rich text editors allow users to enter text into a UI. They typically appear in forms.

The Rich Text Editor uses [Draft.js](https://draftjs.org/docs/api-reference-editor).

## Editor props

{{"demo": "pages/components/rich-text-editor/Usage.js"}}

## Validation

The `error` prop toggles the error state.

{{"demo": "pages/components/rich-text-editor/Validation.js"}}

## Accessibility

In order for the rich text editors to be accessible, the rich text editor should be linked to the label. You can use the prop ariaLabelledBy to achieve this.

```html
<label for="my-input" id="my-input-label">Email address</label>
<RichTextEditor ariaLabelledBy="my-input-label" />
```
