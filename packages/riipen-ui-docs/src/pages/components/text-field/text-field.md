# Text Field

<p class="description">Text fields let users enter and edit text.</p>

Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.

## Form props

Standard form attributes are supported e.g. required, readOnly, type, etc. as well as a `label` and `hint`
which are used to give context about a field’s input, such as how the input will be used.

{{"demo": "pages/components/text-field/Props.js"}}

## Validation

The `error` prop toggles the error state.

{{"demo": "pages/components/text-field/Validation.js"}}

## Multiline

The `multiline` prop transforms the text field into a `textarea`.

{{"demo": "pages/components/text-field/Multiline.js"}}

## Accessibility

In order for the text field to be accessible, the input should be linked to the label. The underlying DOM nodes should have this structure.

```html
<label for="my-input">Email address</label>
<input id="my-input" />
```

If you are using the TextField component, you just have to provide a unique id.
