import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import React from "react";
import PropTypes from "prop-types";
import css from "styled-jsx/css";
import _JSXStyle from "styled-jsx/style";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

import Grid from "./Grid";
import GridItem from "./GridItem";

const VerticalProgressBarItem = ({ bar, children, classes, color, icon }) => {
  const theme = React.useContext(ThemeContext);

  const getLinkedStyles = () => {
    return css.resolve`
      .icon {
        color: ${theme.palette.common.white};
        z-index: ${theme.zIndex.low};
      }
    `;
  };

  const linkedStyles = getLinkedStyles();

  return (
    <div
      className={clsx(
        "progress",
        color && bar && `progress-${color}`,
        !bar && "progress-none",
        classes
      )}
    >
      <Grid classes={[linkedStyles.className, "wrapper"]} spacing={0}>
        <GridItem lg="auto">
          <div className={clsx("iconWrapper", color && `${color}`)}>
            {!!icon && (
              <FontAwesomeIcon
                className={clsx(linkedStyles.className, "icon")}
                size="sm"
                icon={icon}
              />
            )}
          </div>
        </GridItem>
        <GridItem flexGrow={1} flexShrink={1} lg={10}>
          {children}
        </GridItem>
      </Grid>
      <style jsx>{`
        .default {
          background-color: ${theme.palette.grey[300]};
        }

        .positive {
          background-color: ${theme.palette.positive.main};
        }

        .warning {
          background-color: ${theme.palette.warning.main};
        }

        .progress {
          border-left: 8px solid var(--border-color);
          margin-left: ${theme.spacing(3)}px;
        }

        /* Progress bar colors. */
        .progress-default {
          --border-color: ${theme.palette.grey[300]};
        }

        .progress-none {
          --border-color: transparent;
        }

        .progress-positive {
          --border-color: ${theme.palette.positive.main};
        }

        .progress-warning {
          --border-color: ${theme.palette.warning.main};
        }

        .iconWrapper {
          align-items: center;
          border-radius: 50%;
          display: flex;
          height: 24px;
          justify-content: center;
          margin-bottom: ${theme.spacing(7)}px;
          margin-left: -16px;
          margin-right: ${theme.spacing(5)}px;
          margin-top: -1px;
          width: 24px;
        }
      `}</style>
      {linkedStyles.styles}
    </div>
  );
};

VerticalProgressBarItem.propTypes = {
  // external

  /**
   * The content to render inside.
   */
  children: PropTypes.node,

  /**
   * Additional classes to style with.
   */
  classes: PropTypes.array,

  /**
   * The colour of the progress icon.
   */
  color: PropTypes.oneOf(["positive", "warning", "default"]),

  /**
   * The progress icon.
   */
  icon: PropTypes.object,

  /**
   * Whether to not have bar.
   */
  bar: PropTypes.bool
};

VerticalProgressBarItem.defaultProps = {
  bar: true,
  classes: []
};

export default withClasses(VerticalProgressBarItem);
