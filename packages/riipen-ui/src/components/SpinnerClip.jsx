import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import css from "styled-jsx/css";
import _JSXStyle from "styled-jsx/style";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

const SpinnerClip = ({ classes, color, size }) => {
  const theme = React.useContext(ThemeContext);

  const getStyles = () => {
    return css.resolve`
      @keyframes clip {
        0% {
          transform: rotate(0deg);
        }
        50% {
          transform: rotate(180deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      .root {
        animation-fill-mode: both;
        animation: clip 1.25s 0s infinite linear;
        background: transparent;
        border: 2px solid;
        border-radius: 100%;
        border-bottom-color: transparent !important;
        display: inline-block;
        height: ${size}px;
        width: ${size}px;
      }

      .black {
        border-color: ${theme.palette.common.black};
      }
      .grey600 {
        border-color: ${theme.palette.grey[600]};
      }
      .grey800 {
        border-color: ${theme.palette.grey[800]};
      }
      .greyA400 {
        border-color: ${theme.palette.grey.A400};
      }
      .primary {
        border-color: ${theme.palette.primary.main};
      }
      .secondary {
        border-color: ${theme.palette.secondary.main};
      }
      .tertiary {
        border-color: ${theme.palette.tertiary.main};
      }
    `;
  };

  return (
    <span className={clsx(classes)}>
      <span className={clsx(getStyles().className, "root", color)} />
      {getStyles().styles}
    </span>
  );
};

SpinnerClip.displayName = "SpinnerClip";

SpinnerClip.propTypes = {
  /**
   * List of additional classes to apply to this component.
   */
  classes: PropTypes.array,

  /**
   * The color of the spinner.
   */
  color: PropTypes.oneOf([
    "black",
    "grey600",
    "grey800",
    "greyA400",
    "primary",
    "secondary",
    "tertiary"
  ]),

  /**
   * The size in pixels the spinner should be.
   */
  size: PropTypes.number
};

SpinnerClip.defaultProps = {
  classes: [],
  color: "primary",
  size: 40
};

export default withClasses(SpinnerClip);
