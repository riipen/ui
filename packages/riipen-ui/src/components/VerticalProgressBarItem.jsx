import clsx from "clsx";
import React from "react";
import PropTypes from "prop-types";
import css from "styled-jsx/css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

import Grid from "./Grid";
import GridItem from "./GridItem";

const VerticalProgressBarItem = ({ progress }) => {
  const theme = React.useContext(ThemeContext);

  const getLinkedStyles = () => {
    return css.resolve`
      .icon {
        color: ${theme.palette.common.white};
        z-index: ${theme.zIndex.low};
      }

      .wrapper {
        margin-top: ${theme.spacing(-6)}px;
      }
    `;
  };

  const linkedStyles = getLinkedStyles();

  const iconClasses = [
    "iconWrapper",
    progress.color && `${progress.color}`
  ].filter(Boolean);

  const className = clsx(
    "progress",
    progress.color && !progress.noBar && `progress-${progress.color}`,
    progress.noBar && "progress-none"
  );

  return (
    <React.Fragment>
      <div className={className}>
        <Grid classes={[linkedStyles.className, "wrapper"]} spacing={0}>
          <GridItem lg={2}>
            <div className={clsx(iconClasses)}>
              {!!progress.icon && (
                <FontAwesomeIcon
                  className={clsx(linkedStyles.className, "icon")}
                  size="sm"
                  icon={progress.icon}
                />
              )}
            </div>
          </GridItem>
          <GridItem lg={10}>{progress.children}</GridItem>
        </Grid>
      </div>
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
          padding: ${theme.spacing(4)}px 0;
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
          margin: ${theme.spacing(2)}px 0 ${theme.spacing(7)}px
            ${theme.spacing(-4.65)}px;
          padding: ${theme.spacing(1.5)}px;
          width: 24px;
        }
      `}</style>
      {linkedStyles.styles}
    </React.Fragment>
  );
};

VerticalProgressBarItem.propTypes = {
  // external

  /**
   * The progress to render.
   */
  progress: PropTypes.shape({
    /**
     * The content to render inside.
     */
    children: PropTypes.node,

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
    noBar: PropTypes.bool
  }).isRequired
};

export default withClasses(VerticalProgressBarItem);
