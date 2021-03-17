import PropTypes from "prop-types";
import React from "react";
import _JSXStyle from "styled-jsx/style";

import withClasses from "../utils/withClasses";

import SpinnerClip from "./SpinnerClip";
import SpinnerPulse from "./SpinnerPulse";
import SpinnerScale from "./SpinnerScale";

const Spinner = ({ variant, ...other }) => {
  const spinnersMap = {
    clip: SpinnerClip,
    pulse: SpinnerPulse,
    scale: SpinnerScale
  };

  const Component = spinnersMap[variant];

  return <Component {...other} />;
};

Spinner.displayName = "Spinner";

Spinner.propTypes = {
  /**
   * The variant of spinner to display.
   */
  variant: PropTypes.oneOf(["clip", "pulse", "scale"])
};

Spinner.defaultProps = {
  variant: "scale"
};

export default withClasses(Spinner);
