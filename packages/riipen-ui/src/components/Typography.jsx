import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

const variantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p"
};

class Typography extends React.Component {
  static displayName = "Typography";

  static propTypes = {
    /**
     * The content of the component.
     */
    children: PropTypes.node,

    /**
     * An array of custom CSS classes to apply.
     */
    classes: PropTypes.array,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf([
      "initial",
      "inherit",
      "primary",
      "secondary",
      "tertiary",
      "positive",
      "negative"
    ]),

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     * By default, it maps the variant to a good default headline component.
     */
    component: PropTypes.elementType,

    /**
     * Controls the display type.
     */
    display: PropTypes.oneOf(["initial", "block", "inline"]),

    /**
     * Set the font weight on the component.
     */
    fontWeight: PropTypes.oneOf(["bold", "light", "medium", "regular"]),

    /**
     * If true, the text will have a bottom margin.
     */
    gutter: PropTypes.bool,

    /**
     * Set the text-align on the component.
     */
    textAlign: PropTypes.oneOf([
      "inherit",
      "left",
      "center",
      "right",
      "justify"
    ]),

    /**
     * Applies the theme typography styles.
     */
    variant: PropTypes.oneOf([
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "body1",
      "body2",
      "body3",
      "inherit"
    ])
  };

  static defaultProps = {
    classes: [],
    color: "inherit",
    display: "initial",
    gutter: false,
    textAlign: "inherit",
    variant: "body1"
  };

  static contextType = ThemeContext;

  render() {
    const {
      children,
      classes,
      color,
      component,
      display,
      fontWeight,
      gutter,
      textAlign,
      variant
    } = this.props;

    const theme = this.context;

    const className = clsx(
      "root",
      `color-${color}`,
      display,
      fontWeight,
      gutter ? "gutter" : null,
      variant,
      `align-${textAlign}`,
      classes
    );

    const Component = component || variantMapping[variant] || "span";

    return (
      <React.Fragment>
        <Component className={className}>{children}</Component>
        <style jsx>{`
          .root {
            margin: 0;
          }

          .block {
            display: block;
          }
          .inline {
            display: inline;
          }

          .gutter {
            margin-bottom: 0.35em;
          }

          .color-inherit {
            color: inherit;
          }
          .color-initial {
            color: initial;
          }
          .color-primary {
            color: ${theme.palette.primary.main};
          }
          .color-secondary {
            color: ${theme.palette.secondary.main};
          }
          .color-tertiary {
            color: ${theme.palette.tertiary.main};
          }
          .color-positive {
            color: ${theme.palette.positive.main};
          }
          .color-negative {
            color: ${theme.palette.negative.main};
          }

          .align-center {
            text-align: center;
          }
          .align-left {
            text-align: left;
          }
          .align-right {
            text-align: right;
          }

          .body1 {
            font-family: ${theme.typography.body1.fontFamily};
            font-weight: ${theme.typography.body1.fontWeight};
            font-size: ${theme.typography.body1.fontSize};
            line-height: ${theme.typography.body1.lineHeight};
            letter-spacing: ${theme.typography.body1.letterSpacing};
          }
          .body2 {
            font-family: ${theme.typography.body2.fontFamily};
            font-weight: ${theme.typography.body2.fontWeight};
            font-size: ${theme.typography.body2.fontSize};
            line-height: ${theme.typography.body2.lineHeight};
            letter-spacing: ${theme.typography.body2.letterSpacing};
          }
          .body3 {
            font-family: ${theme.typography.body3.fontFamily};
            font-weight: ${theme.typography.body3.fontWeight};
            font-size: ${theme.typography.body3.fontSize};
            line-height: ${theme.typography.body3.lineHeight};
            letter-spacing: ${theme.typography.body3.letterSpacing};
          }
          .h1 {
            font-family: ${theme.typography.h1.fontFamily};
            font-weight: ${theme.typography.h1.fontWeight};
            font-size: ${theme.typography.h1.fontSize};
            line-height: ${theme.typography.h1.lineHeight};
            letter-spacing: ${theme.typography.h1.letterSpacing};
          }
          .h2 {
            font-family: ${theme.typography.h2.fontFamily};
            font-weight: ${theme.typography.h2.fontWeight};
            font-size: ${theme.typography.h2.fontSize};
            line-height: ${theme.typography.h2.lineHeight};
            letter-spacing: ${theme.typography.h2.letterSpacing};
          }
          .h3 {
            font-family: ${theme.typography.h3.fontFamily};
            font-weight: ${theme.typography.h3.fontWeight};
            font-size: ${theme.typography.h3.fontSize};
            line-height: ${theme.typography.h3.lineHeight};
            letter-spacing: ${theme.typography.h3.letterSpacing};
          }
          .h4 {
            font-family: ${theme.typography.h4.fontFamily};
            font-weight: ${theme.typography.h4.fontWeight};
            font-size: ${theme.typography.h4.fontSize};
            line-height: ${theme.typography.h4.lineHeight};
            letter-spacing: ${theme.typography.h4.letterSpacing};
          }
          .h5 {
            font-family: ${theme.typography.h5.fontFamily};
            font-weight: ${theme.typography.h5.fontWeight};
            font-size: ${theme.typography.h5.fontSize};
            line-height: ${theme.typography.h5.lineHeight};
            letter-spacing: ${theme.typography.h5.letterSpacing};
          }

          .bold {
            font-weight: ${theme.typography.fontWeight.bold};
          }
          .light {
            font-weight: ${theme.typography.fontWeight.light};
          }
          .medium {
            font-weight: ${theme.typography.fontWeight.medium};
          }
          .regular {
            font-weight: ${theme.typography.fontWeight.regular};
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default withClasses(Typography);
