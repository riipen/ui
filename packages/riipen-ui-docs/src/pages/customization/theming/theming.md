# Theming

<p class="description">Customize Riipen-UI with your theme. You can change the colors, the typography and much more.</p>

The theme specifies the color of the components, darkness of the surfaces, level of shadow, etc.

To promote greater consistency between apps, a default theme is provided.

## Theme provider

If you wish to customize the theme, you need to use the `ThemeProvider` component in order to inject a theme into your application.
However, this is optional; Riipen-UI components come with a default theme.

`ThemeProvider` relies on the context feature of React to pass the theme down to the components,
so you need to make sure that `ThemeProvider` is a parent of the components you are trying to customize.
