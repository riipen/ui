import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import _JSXStyle from "styled-jsx/style";

import { withThemeContext } from "../utils";

const ListItem = props => {
  const { children, classes, spacing, theme, variant, ...other } = props;

  const className = clsx(classes, "list-item", variant);

  return (
    <React.Fragment>
      <li className={className} {...other}>
        {children}
      </li>
      <style jsx>{`
        .list-item {
          list-style-type: none;
          margin: 0;
        }

        .horizontal {
          display: inline-block;
          margin-right: ${theme.spacing(spacing)}px;
        }
        .horizontal:last-child {
          margin-right: 0;
        }
        .vertical {
          display: block;
          margin-bottom: ${theme.spacing(spacing)}px;
        }
        .vertical:last-child {
          margin-bottom: 0;
        }
      `}</style>
    </React.Fragment>
  );
};

ListItem.propTypes = {
  /**
   * The content of the list item.
   */
  children: PropTypes.any,

  /**
   * Array of additional CSS classes to use.
   */
  classes: PropTypes.array,

  /**
   * Additional spacing based in theme spacing multiplier to apply after list item.
   */
  spacing: PropTypes.number,

  /**
   * @ignore
   * The theme context object
   */
  theme: PropTypes.object,

  /**
   * The orientation variant to display the list item as.
   */
  variant: PropTypes.oneOf(["horizontal", "vertical"])
};

ListItem.defaultProps = {
  classes: [],
  spacing: 2,
  variant: "vertical"
};

ListItem.displayName = "ListItem";

export default withThemeContext(ListItem);
