import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";

class ProgressBar extends React.Component {
  static propTypes = {
    /**
     * List of additional classes to apply to this component.
     */
    classes: PropTypes.array.isRequired,

    /**
     * The color to use.
     */
    color: PropTypes.oneOf([
      "negative",
      "positive",
      "primary",
      "secondary",
      "tertiary"
    ]),

    /**
     * The percentage of the completion between 0 and 1.
     */
    completion: PropTypes.number
  };

  static defaultProps = {
    classes: [],
    color: "primary",
    completion: 0
  };

  static contextType = ThemeContext;

  render() {
    const { classes, color, completion } = this.props;

    const theme = this.context;

    const className = clsx(color, classes);

    return (
      <div>
        <progress className={className} value={completion} />
        <style jsx>{`
          progress {
            -moz-appearance: none;
            -webkit-appearance: none;
            background: ${theme.palette.background.default};
            border: none;
            border-radius: ${theme.shape.borderRadius.large};
            height: 8px;
            margin: 0;
            width: 100%;
          }

          progress::-webkit-progress-bar {
            background: ${theme.palette.background.default};
            border-radius: ${theme.shape.borderRadius.large};
          }

          progress::-webkit-progress-value {
            border-radius: ${theme.shape.borderRadius.large};
          }

          progress::-moz-progress-bar {
            border-radius: ${theme.shape.borderRadius.large};
          }

          .primary::-webkit-progress-value {
            background: ${theme.palette.primary.main};
          }

          .primary::-moz-progress-bar {
            background: ${theme.palette.primary.main};
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
        `}</style>
      </div>
    );
  }
}

export default ProgressBar;
