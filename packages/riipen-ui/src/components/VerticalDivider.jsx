import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import _JSXStyle from "styled-jsx/style";

import { withThemeContext } from "../utils";

const VerticalDivider = props => {
  const { classes, spacing, theme, width } = props;

  const className = clsx(classes);

  return (
    <>
      <div className={className} />
      <style jsx>{`
        div {
          background-color: ${theme.palette.divider};
          width: ${width}px;
          margin-left: ${theme.spacing(spacing)}px;
          margin-right: ${theme.spacing(spacing)}px;
        }
      `}</style>
    </>
  );
};

VerticalDivider.propTypes = {
  /**
   * List of additional classes to apply to this component.
   */
  classes: PropTypes.array,

  /**
   * Additional spacing based in theme spacing multiplier to apply after each list item.
   */
  spacing: PropTypes.number,

  /**
   * @ignore
   * The theme context object.
   */
  theme: PropTypes.object,

  /**
   * The width of the divider in pixels.
   */
  width: PropTypes.number
};

VerticalDivider.defaultProps = {
  classes: [],
  spacing: 2,
  width: 1
};

VerticalDivider.displayName = "VerticalDivider";

export default withThemeContext(VerticalDivider);
