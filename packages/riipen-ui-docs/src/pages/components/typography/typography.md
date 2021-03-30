# Typography

<p class="description">Use typography to present your design and content as clearly and efficiently as possible.</p>

Too many type sizes and styles at once can spoil any layout. A typographic scale has a limited
set of type sizes that work well together along with the layout grid.

## General

The *Roboto* font will **not** be automatically loaded by Riipen-UI.
The developer is responsible for loading all fonts used in their application.

## Roboto Font CDN

Shown below is a sample link markup used to load the Roboto font from a CDN:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
```

## Component

{{"demo": "pages/components/typography/Component.js"}}

## Color

{{"demo": "pages/components/typography/Color.js"}}

You can also use the CSS native "inherit" for a wider range of colors.

## Font Weight

{{"demo": "pages/components/typography/FontWeight.js"}}

## Text Transform

{{"demo": "pages/components/typography/TextTransform.js"}}

## Changing the semantic element

You can change the underlying element for a one time occasion with the `component` property:

```jsx
{/* There is already an h1 in the page, let's not duplicate it. */}
<Typography variant="h1" component="h2">
  h1. Heading
</Typography>
```

## Accessibility

A few key factors to follow for an accessible typography:

- **Color**. Provide enough contrast between text and its background, check out the minimum recommended [WCAG 2.0 color contrast ratio](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) (4.5:1).
- **Font size**. Use [relative units (rem)](/customization/typography/#font-size) to accommodate the user's settings.
- **Heading hierarchy**. [Don't skip](https://www.w3.org/WAI/tutorials/page-structure/headings/) heading levels. In order to solve this problem, you need to [separate the semantics from the style](#changing-the-semantic-element).
