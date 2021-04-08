# Input

<p class="description">Inputs let users enter and edit text.</p>

Inputs allow users to enter text into a UI. They typically appear in forms and dialogs.

## Form props

Standard form attributes are supported e.g. required, readOnly, type, etc. as well as a `label` and `hint`
which are used to give context about a field’s input, such as how the input will be used.

{{"demo": "pages/components/input/Props.js"}}

## Validation

The `error` prop toggles the error state.

{{"demo": "pages/components/input/Validation.js"}}

## Meta

The `meta` prop displays additional text in the bottom right.

{{"demo": "pages/components/input/Meta.js"}}

## Multiline

The `multiline` prop transforms the input into a `textarea`.

{{"demo": "pages/components/input/Multiline.js"}}

## Adornments

You can use the `startAdornment` and `endAdornment` props to add additional content inside the input.

{{"demo": "pages/components/input/Adornments.js"}}

## Label Color

The `labelColor` prop can change the color of the label.

{{"demo": "pages/components/input/Color.js"}}

## Label Weight

The `labelWeight` prop can change the weight of the label.

{{"demo": "pages/components/input/Weight.js"}}

## Size

The `size` prop changes the size of the input field.

{{"demo": "pages/components/input/Size.js"}}

## Variant

The `variant` prop can change the styling of the input field.

{{"demo": "pages/components/input/Variant.js"}}

## Accessibility

In order for the input to be accessible, the input should be linked to the label. The underlying DOM nodes should have this structure.

```html
<label for="my-input">Email address</label> <input id="my-input" />
```

If you are using the Input component, you just have to provide a unique `id` or `name`.
