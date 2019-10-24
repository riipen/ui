const breakpoints = {
  "xs": 0,
  "sm": 600,
  "md": 960,
  "lg": 1280,
  "xl": 1920,
};

export default {
  breakpoints: Object.assign({}, breakpoints, {
    up: (bp) => `@media (min-width: ${breakpoints[bp]}px)`,
    down: (bp) => `@media (max-width: ${breakpoints[bp]}px)`,
  }),
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    background: {
      'default': "#fafafa",
    },
    primary: {
      main: '#3f51b5',
    },
  },
  shape: {
    borderRadius: {
      large: '4px',
    },
  },
  spacing: (factor) => 5 * factor,
};
