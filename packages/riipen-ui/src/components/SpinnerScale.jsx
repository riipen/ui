import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import css from "styled-jsx/css";
import _JSXStyle from "styled-jsx/style";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

const SpinnerScale = ({ classes, color, height, margin, width }) => {
  const theme = React.useContext(ThemeContext);

  const getStyles = index => {
    return css.resolve`
      @keyframes scale {
        0% {
          transform: scaley(1);
        }
        40% {
          transform: scaley(0.4);
        }
        60% {
          transform: scaley(0.4);
        }
        100% {
          transform: scaley(1);
        }
      }

      .root {
        animation-fill-mode: both;
        animation: scale 1.5s ${index * 0.1}s infinite
          cubic-bezier(0.2, 0.68, 0.18, 1.08);
        display: inline-block;
        height: ${height}px;
        margin: ${margin}px;
        width: ${width}px;
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
      {Array(5)
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

SpinnerScale.displayName = "SpinnerScale";

SpinnerScale.propTypes = {
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
   * The height in pixels each element should be.
   */
  height: PropTypes.number,

  /**
   * The margin in pixels betwene pulse elements.
   */
  margin: PropTypes.number,

  /**
   * The width in pixels each element should be.
   */
  width: PropTypes.number
};

SpinnerScale.defaultProps = {
  classes: [],
  color: "primary",
  height: 40,
  margin: 5,
  width: 5
};

export default withClasses(SpinnerScale);
