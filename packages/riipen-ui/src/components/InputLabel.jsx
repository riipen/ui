import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

import InputHint from "./InputHint";
import Typography from "./Typography";

class InputLabel extends React.Component {
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
     * Hint text to display under the label.
     */
    hint: PropTypes.node,

    /**
     * If true, an asterisk will be appended to the end of the label.
     */
    required: PropTypes.bool
  };

  static defaultProps = {
    classes: [],
    required: false
  };

  static contextType = ThemeContext;

  render() {
    const { children, classes, hint, required, ...other } = this.props;

    const theme = this.context;

    const className = clsx(classes);

    const marginBottom = hint ? 1 : 3;

    return (
      <React.Fragment>
        <label className={className} {...other}>
          <Typography color="inherit" variant="inherit">
            {children}
            {required && " *"}
          </Typography>
        </label>
        {hint && <InputHint>{hint}</InputHint>}
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
        `}</style>
      </React.Fragment>
    );
  }
}

export default withClasses(InputLabel);
