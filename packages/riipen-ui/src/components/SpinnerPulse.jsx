import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import css from "styled-jsx/css";
import _JSXStyle from "styled-jsx/style";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

const SpinnerPulse = ({ classes, color, margin, size }) => {
  const theme = React.useContext(ThemeContext);

  const getStyles = index => {
    return css.resolve`
      @keyframes pulse {
        0% {
          transform: scale(1);
          opacity: 1;
        }
        45% {
          transform: scale(0.1);
          opacity: 0.7;
        }
        80% {
          transform: scale(1);
          opacity: 1;
        }
      }

      .root {
        animation-fill-mode: both;
        animation: pulse 1.5s ${index * 0.12}s infinite
          cubic-bezier(0.2, 0.68, 0.18, 1.08);
        border-radius: 100%;
        display: inline-block;
        height: ${size}px;
        margin: ${margin}px;
        width: ${size}px;
      }

      .primary {
        background-color: ${theme.palette.primary.main};
      }
      .secondary {
        background-color: ${theme.palette.secondary.main};
      }
      .tertiary {
        background-color: ${theme.palette.tertiary.main};
      }
    `;
  };

  return (
    <span className={clsx(classes)}>
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <React.Fragment key={index}>
            <span className={clsx(getStyles(index).className, "root", color)} />
            {getStyles(index).styles}
          </React.Fragment>
        ))}
    </span>
  );
};

SpinnerPulse.displayName = "SpinnerPulse";

SpinnerPulse.propTypes = {
  /**
   * List of additional classes to apply to this component.
   */
  classes: PropTypes.array,

  /**
   * The color of the spinner.
   */
  color: PropTypes.oneOf(["primary", "secondary", "tertiary"]),

  /**
   * The margin in pixels betwene pulse elements.
   */
  margin: PropTypes.number,

  /**
   * The size in pixels the spinner should be.
   */
  size: PropTypes.number
};

SpinnerPulse.defaultProps = {
  classes: [],
  color: "primary",
  margin: 5,
  size: 10
};

export default withClasses(SpinnerPulse);
