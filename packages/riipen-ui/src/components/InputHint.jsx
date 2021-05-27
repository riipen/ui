import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import _JSXStyle from "styled-jsx/style";

import withClasses from "../utils/withClasses";
import withThemeContext from "../utils/withThemeContext";

import Typography from "./Typography";

const InputHint = ({ children, classes, color, theme }) => {
  const className = clsx(classes);

  return (
    <React.Fragment>
      <div className={className}>
        <Typography variant="body2" color={color}>
          {children}
        </Typography>
      </div>
      <style jsx>{`
        div {
          color: ${theme.palette.text.secondary};
          margin-bottom: ${theme.spacing(2)}px;
        }
      `}</style>
    </React.Fragment>
  );
};

InputHint.displayName = "InputHint";

InputHint.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Color of the hint text. Passed through to Typography
   */
  color: PropTypes.string,

  /**
   * An array of custom CSS classes to apply.
   */
  classes: PropTypes.array,

  /**
   * @ignore
   * The theme context object
   */
  theme: PropTypes.object
};

InputHint.defaultProps = {
  classes: [],
  color: "inherit"
};

export default withThemeContext(withClasses(InputHint));
