import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import _JSXStyle from "styled-jsx/style";

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
      "inherit",
      "initial",
      "black",
      "disabled",
      "grey500",
      "grey600",
      "grey800",
      "greyA400",
      "negative",
      "positive",
      "primary",
      "secondary",
      "tertiary",
      "warning",
      "white"
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
     * Custom spacing to apply to letters to the Typography.
     */
    letterSpacing: PropTypes.oneOf([1, 2]),

    /**
     * Screen size to render font from desktop to mobile.
     */
    mobileBreakpoint: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),

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
     * Set the text-transform on the component.
     */
    textTransform: PropTypes.oneOf([
      "inherit",
      "capitalize",
      "uppercase",
      "lowercase"
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
    ]),

    /**
     * Set the word break on the component.
     */
    wordBreak: PropTypes.oneOf(["break-all", "break-word", "normal"])
  };

  static defaultProps = {
    classes: [],
    color: "inherit",
    display: "initial",
    gutter: false,
    mobileBreakpoint: "sm",
    textAlign: "inherit",
    textTransform: "inherit",
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
      letterSpacing,
      mobileBreakpoint,
      textAlign,
      textTransform,
      variant,
      wordBreak
    } = this.props;

    const theme = this.context;

    const className = clsx(
      "root",
      `color-${color}`,
      display,
      fontWeight,
      gutter ? "gutter" : null,
      letterSpacing ? `letter-spacing-${letterSpacing}` : null,
      mobileBreakpoint ? "mobile" : null,
      variant,
      `align-${textAlign}`,
      `transform-${textTransform}`,
      wordBreak ? `word-break-${wordBreak}` : null,
      classes
    );

    const Component = component || variantMapping[variant] || "span";

    return (
      <>
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
            color: ${theme.palette.grey[800]};
            font-family: ${theme.typography.body1.fontFamily};
            font-weight: ${theme.typography.body1.fontWeight};
            font-size: ${theme.typography.body1.fontSize};
            line-height: ${theme.typography.body1.lineHeight};
            letter-spacing: ${theme.typography.body1.letterSpacing};
          }
          .body2 {
            color: ${theme.palette.grey[800]};
            font-family: ${theme.typography.body2.fontFamily};
            font-weight: ${theme.typography.body2.fontWeight};
            font-size: ${theme.typography.body2.fontSize};
            line-height: ${theme.typography.body2.lineHeight};
            letter-spacing: ${theme.typography.body2.letterSpacing};
          }
          .body3 {
            color: ${theme.palette.grey[800]};
            font-family: ${theme.typography.body3.fontFamily};
            font-weight: ${theme.typography.body3.fontWeight};
            font-size: ${theme.typography.body3.fontSize};
            line-height: ${theme.typography.body3.lineHeight};
            letter-spacing: ${theme.typography.body3.letterSpacing};
          }
          .h1 {
            color: ${theme.palette.grey.A400};
            font-family: ${theme.typography.h1.fontFamily};
            font-weight: ${theme.typography.h1.fontWeight};
            font-size: ${theme.typography.h1.fontSize};
            line-height: ${theme.typography.h1.lineHeight};
            letter-spacing: ${theme.typography.h1.letterSpacing};
          }
          .h2 {
            color: ${theme.palette.grey.A400};
            font-family: ${theme.typography.h2.fontFamily};
            font-weight: ${theme.typography.h2.fontWeight};
            font-size: ${theme.typography.h2.fontSize};
            line-height: ${theme.typography.h2.lineHeight};
            letter-spacing: ${theme.typography.h2.letterSpacing};
          }
          .h3 {
            color: ${theme.palette.grey.A400};
            font-family: ${theme.typography.h3.fontFamily};
            font-weight: ${theme.typography.h3.fontWeight};
            font-size: ${theme.typography.h3.fontSize};
            line-height: ${theme.typography.h3.lineHeight};
            letter-spacing: ${theme.typography.h3.letterSpacing};
          }
          .h4 {
            color: ${theme.palette.grey.A400};
            font-family: ${theme.typography.h4.fontFamily};
            font-weight: ${theme.typography.h4.fontWeight};
            font-size: ${theme.typography.h4.fontSize};
            line-height: ${theme.typography.h4.lineHeight};
            letter-spacing: ${theme.typography.h4.letterSpacing};
          }
          .h5 {
            color: ${theme.palette.grey.A400};
            font-family: ${theme.typography.h5.fontFamily};
            font-weight: ${theme.typography.h5.fontWeight};
            font-size: ${theme.typography.h5.fontSize};
            line-height: ${theme.typography.h5.lineHeight};
            letter-spacing: ${theme.typography.h5.letterSpacing};
          }

          .color-inherit {
            color: inherit;
          }
          .color-initial {
            color: initial;
          }
          .color-black {
            color: ${theme.palette.common.black};
          }
          .color-disabled {
            color: ${theme.palette.text.disabled};
          }
          .color-grey500 {
            color: ${theme.palette.grey[500]};
          }
          .color-grey600 {
            color: ${theme.palette.grey[600]};
          }
          .color-grey800 {
            color: ${theme.palette.grey[800]};
          }
          .color-greyA400 {
            color: ${theme.palette.grey.A400};
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
          .color-warning {
            color: ${theme.palette.warning.main};
          }
          .color-white {
            color: ${theme.palette.common.white};
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

          .letter-spacing-1 {
            letter-spacing: 1px;
          }
          .letter-spacing-2 {
            letter-spacing: 2px;
          }

          .transform-capitalize {
            text-transform: capitalize;
          }
          .transform-uppercase {
            text-transform: uppercase;
          }
          .transform-lowercase {
            text-transform: lowercase;
          }

          .word-break-break-all {
            word-break: break-all;
          }
          .word-break-break-word {
            word-break: break-word;
          }
          .word-break-normal {
            word-break: normal;
          }

          @media (max-width: ${theme.breakpoints[mobileBreakpoint]}px) {
            .body1.mobile {
              font-size: ${theme.typography.body1.mobile.fontSize};
              line-height: ${theme.typography.body1.mobile.lineHeight};
            }
            .body2.mobile {
              font-size: ${theme.typography.body2.mobile.fontSize};
              line-height: ${theme.typography.body2.mobile.lineHeight};
            }
            .body3.mobile {
              font-size: ${theme.typography.body3.mobile.fontSize};
              line-height: ${theme.typography.body3.mobile.lineHeight};
            }
            .h1.mobile {
              font-size: ${theme.typography.h1.mobile.fontSize};
              line-height: ${theme.typography.h1.mobile.lineHeight};
            }
            .h2.mobile {
              font-size: ${theme.typography.h2.mobile.fontSize};
              line-height: ${theme.typography.h2.mobile.lineHeight};
            }
            .h3.mobile {
              font-size: ${theme.typography.h3.mobile.fontSize};
              line-height: ${theme.typography.h3.mobile.lineHeight};
            }
            .h4.mobile {
              font-size: ${theme.typography.h4.mobile.fontSize};
              line-height: ${theme.typography.h4.mobile.lineHeight};
            }
            .h5.mobile {
              font-size: ${theme.typography.h5.mobile.fontSize};
              line-height: ${theme.typography.h5.mobile.lineHeight};
            }
          }
        `}</style>
      </>
    );
  }
}

export default withClasses(Typography);
