import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";

import Typography from "./Typography";

class InputHint extends React.Component {
  static propTypes = {
    /**
     * The content of the component.
     */
    children: PropTypes.node,

    /**
     * An array of custom CSS classes to apply.
     */
    classes: PropTypes.array
  };

  static defaultProps = {
    classes: []
  };

  static contextType = ThemeContext;

  render() {
    const { children, classes } = this.props;

    const theme = this.context;

    const className = clsx(classes);

    return (
      <React.Fragment>
        <div className={className}>
          <Typography variant="caption">{children}</Typography>
        </div>
        <style jsx>{`
          div {
            margin-bottom: ${theme.spacing(2)}px;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default InputHint;
