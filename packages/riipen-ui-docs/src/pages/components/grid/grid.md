# Grid

<p class="description">The Riipen Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.</p>

The grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs. Riipen Design’s responsive UI is based on a 12-column grid layout.

## How it works

The grid system is implemented with the `Grid` component:

- It uses [CSS’s Flexible Box module](https://www.w3.org/TR/css-flexbox-1/) for high flexibility.
- Item widths are set in percentages, so they’re always fluid and sized relative to their parent element.
- Items have padding to create the spacing between individual items.
- There are five grid breakpoints: xs, sm, md, lg, and xl.

If you are **new to or unfamiliar with flexbox**, we encourage you to read this [CSS-Tricks flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) guide.

### Static grid

The column widths apply at all breakpoints (i.e. `lg` and down).

{{"demo": "pages/components/grid/Static.js"}}

### Dynamic grid

Some columns have multiple widths defined, causing the layout to change at the defined breakpoint.

{{"demo": "pages/components/grid/Dynamic.js"}}

### Hiding grid items

Grid items can be hidden at certain resolutions and down. See below for an example of hiding items
at both the medium breakpoint and the small breakpoint.

{{"demo": "pages/components/grid/Hiding.js"}}

### Spacing grid items

Grid items have an automatic spacing applied to them based on the current theme. You can manipulate
this spacing by passing in a spacing factor size which makes the spacing between items larger or
smaller.

{{"demo": "pages/components/grid/Spacing.js"}}


### Growing grid items
Grid items can grow to fill the space remaining in the grid relative to other grid items. Extra space is 
split between growing grid items that end up in the same row 

{{"demo": "pages/components/grid/Grow.js"}}
