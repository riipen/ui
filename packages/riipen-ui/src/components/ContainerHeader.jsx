import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import { withThemeContext } from "../utils";

const ContainerHeader = ({ children, classes, color, theme }) => {
  return (
    <React.Fragment>
      <div className={clsx("root", color, classes)}>{children}</div>
      <style jsx>{`
        .root {
          background-color: ${theme.palette.grey[300]};
          border-radius: ${theme.shape.borderRadius.md}
            ${theme.shape.borderRadius.md} 0 0;
          box-shadow: ${theme.shadows[1]};
          color: ${theme.palette.common.white};
          display: flex;
          font-family: ${theme.typography.body1.fontFamily};
          font-size: ${theme.typography.body1.fontSize};
          font-weight: ${theme.typography.body1.fontWeight};
          letter-spacing: ${theme.typography.body1.letterSpacing};
          line-height: ${theme.typography.body1.lineHeight};
          justify-content: space-between;
          overflow: hidden;
          padding: ${theme.spacing(2)}px;
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

        .negative {
          background-color: ${theme.palette.negative.main};
        }

        .warning {
          background-color: ${theme.palette.warning.main};
        }

        .positive {
          background-color: ${theme.palette.positive.main};
        }
      `}</style>
    </React.Fragment>
  );
};

ContainerHeader.propTypes = {
  /**
   * The content to display.
   */
  children: PropTypes.node,

  /**
   * List of additional classes to apply to this component.
   */
  classes: PropTypes.array,

  /**
   * The color of the header.
   */
  color: PropTypes.oneOf([
    "default",
    "negative",
    "positive",
    "primary",
    "secondary",
    "tertiary",
    "warning"
  ]),

  /**
   * @ignore
   * The theme context object
   */
  theme: PropTypes.object
};

ContainerHeader.deafultProps = {
  color: "default"
};

ContainerHeader.displayName = "ContainerHeader";

export default withThemeContext(ContainerHeader);
