import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import _JSXStyle from "styled-jsx/style";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

import InputHint from "./InputHint";
import Typography from "./Typography";

class InputLabel extends React.Component {
  static displayName = "InputLabel";

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
     * Color of the label text
     */
    color: PropTypes.oneOf(["default", "white", "black"]),

    /**
     * Hint text to display under the label.
     */
    hint: PropTypes.node,

    /**
     * If true, an asterisk will be appended to the end of the label.
     */
    required: PropTypes.bool,

    /**
     * Weight of the label text
     */
    weight: PropTypes.oneOf(["light", "regular", "medium", "bold"])
  };

  static defaultProps = {
    classes: [],
    color: "default",
    required: false,
    weight: "regular"
  };

  static contextType = ThemeContext;

  render() {
    const {
      children,
      color,
      classes,
      hint,
      required,
      weight,
      ...other
    } = this.props;

    const theme = this.context;

    const className = clsx(classes, color, weight);

    const marginBottom = hint ? 1 : 3;

    return (
      <React.Fragment>
        {children && (
          <label className={className} {...other}>
            <Typography color="inherit" variant="inherit">
              {children}
              {required && " *"}
            </Typography>
          </label>
        )}
        {hint && <InputHint color={color}>{hint}</InputHint>}
        <style jsx>{`
          label {
            color: ${theme.palette.text.secondary};
            display: inline-block;
            font-family: ${theme.typography.body1.fontFamily};
            font-size: 16px;
            font-weight: ${theme.typography.body1.fontWeight};
            letter-spacing: ${theme.typography.body1.letterSpacing};
            line-height: 1.4;
            margin-bottom: ${theme.spacing(marginBottom)}px;
          }

          .white {
            color: ${theme.palette.common.white};
          }

          .black {
            color: ${theme.palette.common.black};
          }

          .light {
            font-weight: ${theme.typography.fontWeight.light};
          }

          .medium {
            font-weight: ${theme.typography.fontWeight.medium};
          }

          .bold {
            font-weight: ${theme.typography.fontWeight.bold};
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default withClasses(InputLabel);
