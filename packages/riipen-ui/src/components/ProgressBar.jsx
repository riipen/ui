import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

class ProgressBar extends React.Component {
  static displayName = "ProgressBar";

  static propTypes = {
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
      "tertiary",
      "warning"
    ]),

    unfilled: PropTypes.oneOf(["light", "dark"]),

    /**
     * The percentage of the completion between 0 and 1.
     */
    completion: PropTypes.number
  };

  static defaultProps = {
    classes: [],
    color: "primary",
    completion: 0,
    unfilled: "light"
  };

  static contextType = ThemeContext;

  render() {
    const { classes, color, completion, unfilled } = this.props;

    const theme = this.context;

    const className = clsx(color, unfilled, classes);

    return (
      <div>
        <progress className={className} value={completion} />
        <style jsx>{`
          progress {
            -moz-appearance: none;
            -webkit-appearance: none;
            border: none;
            border-radius: ${theme.shape.borderRadius.md};
            height: 8px;
            width: 100%;
          }

          progress::-webkit-progress-bar {
            border-radius: ${theme.shape.borderRadius.md};
          }

          progress::-webkit-progress-value {
            border-radius: ${theme.shape.borderRadius.md};
          }

          progress::-moz-progress-bar {
            border-radius: ${theme.shape.borderRadius.md};
          }

          .primary::-webkit-progress-value {
            background: ${theme.palette.primary.main};
          }

          .primary::-moz-progress-bar {
            background: ${theme.palette.primary.main};
          }

          .light {
            background: ${theme.palette.grey[50]};
          }

          .light::-webkit-progress-bar {
            background: ${theme.palette.grey[50]};
          }

          .dark {
            background: ${theme.palette.grey[300]};
          }

          .dark::-webkit-progress-bar {
            background: ${theme.palette.grey[300]};
          }

          .secondary::-webkit-progress-value {
            background: ${theme.palette.secondary.main};
          }

          .secondary::-moz-progress-bar {
            background: ${theme.palette.secondary.main};
          }

          .tertiary::-webkit-progress-value {
            background: ${theme.palette.tertiary.main};
          }

          .tertiary::-moz-progress-bar {
            background: ${theme.palette.tertiary.main};
          }

          .positive::-webkit-progress-value {
            background: ${theme.palette.positive.main};
          }

          .positive::-moz-progress-bar {
            background: ${theme.palette.positive.main};
          }

          .negative::-webkit-progress-value {
            background: ${theme.palette.negative.main};
          }

          .negative::-moz-progress-bar {
            background: ${theme.palette.negative.main};
          }

          .warning::-webkit-progress-value {
            background: ${theme.palette.warning.main};
          }

          .warning::-moz-progress-bar {
            background: ${theme.palette.warning.main};
          }
        `}</style>
      </div>
    );
  }
}

export default withClasses(ProgressBar);
