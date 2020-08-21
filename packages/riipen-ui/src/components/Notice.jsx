import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

class Notice extends React.Component {
  static displayName = "Notice";

  static propTypes = {
    /**
     * The content of the Notice.
     */
    children: PropTypes.node,

    /**
     * List of additional classes to apply to this component.
     */
    classes: PropTypes.array,

    /**
     * The color to use.
     */
    color: PropTypes.oneOf([
      "negative",
      "positive",
      "primary",
      "secondary",
      "tertiary"
    ])
  };

  static defaultProps = {
    classes: [],
    color: "primary"
  };

  static contextType = ThemeContext;

  render() {
    const { classes, children, color } = this.props;

    const theme = this.context;

    const className = clsx(color, classes);

    return (
      <React.Fragment>
        <div className={className}>{children}</div>
        <style jsx>{`
          div {
            border: 1px solid transparent;
            border-radius: ${theme.shape.borderRadius.md};
            opacity: 0.9;
            padding: ${theme.spacing(2)}px ${theme.spacing(4)}px;
          }

          .primary {
            background-color: ${theme.palette.primary.light};
            border-color: ${theme.palette.primary.main};
          }
          .secondary {
            background-color: ${theme.palette.secondary.light};
            border-color: ${theme.palette.secondary.main};
          }
          .tertiary {
            background-color: ${theme.palette.tertiary.light};
            border-color: ${theme.palette.tertiary.main};
          }
          .negative {
            background-color: ${theme.palette.negative.light};
            border-color: ${theme.palette.negative.main};
          }
          .positive {
            background-color: ${theme.palette.positive.light};
            border-color: ${theme.palette.positive.main};
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default withClasses(Notice);
