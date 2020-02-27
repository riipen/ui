import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

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
    const { children, classes, required, ...other } = this.props;

    const theme = this.context;

    const className = clsx(classes);

    return (
      <React.Fragment>
        <label className={className} {...other}>
          <Typography>
            {children}
            {required && " *"}
          </Typography>
        </label>
        <style jsx>{`
          label {
            display: inline-block;
            margin-bottom: ${theme.spacing(1)}px;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default withClasses(InputLabel);
