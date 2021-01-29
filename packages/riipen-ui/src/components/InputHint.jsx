import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import _JSXStyle from "styled-jsx/style";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

import Typography from "./Typography";

class InputHint extends React.Component {
  static displayName = "InputHint";

  static propTypes = {
    /**
     * The content of the component.
     */
    children: PropTypes.node,

    /**
     * Color of the hint text
     */
    color: PropTypes.oneOf(["default", "white"]),

    /**
     * An array of custom CSS classes to apply.
     */
    classes: PropTypes.array
  };

  static defaultProps = {
    classes: [],
    color: "default"
  };

  static contextType = ThemeContext;

  render() {
    const { children, color, classes } = this.props;

    const theme = this.context;

    const className = clsx(classes, color);

    return (
      <React.Fragment>
        <div className={className}>
          <Typography variant="body2">{children}</Typography>
        </div>
        <style jsx>{`
          div {
            color: ${theme.palette.text.secondary};
            margin-bottom: ${theme.spacing(2)}px;
          }

          .white {
            color: ${theme.palette.common.white};
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default withClasses(InputHint);
