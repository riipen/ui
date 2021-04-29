import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import _JSXStyle from "styled-jsx/style";

import withClasses from "../utils/withClasses";
import withThemeContext from "../utils/withThemeContext";

import InputHint from "./InputHint";
import Typography from "./Typography";

const InputLabel = ({
  children,
  color,
  classes,
  fontWeight,
  hint,
  required,
  theme,
  variant,
  ...other
}) => {
  const className = clsx(classes);

  const marginBottom = hint ? 1 : 3;

  return (
    <React.Fragment>
      {children && (
        <label className={className} {...other}>
          <Typography color={color} fontWeight={fontWeight} variant={variant}>
            {children}
            {required && " *"}
          </Typography>
        </label>
      )}
      {hint && <InputHint color={color}>{hint}</InputHint>}
      <style jsx>{`
        label {
          color: ${theme.palette.text.secondary};
          display: inline-block;
          font-family: ${theme.typography.body1.fontFamily};
          font-size: 16px;
          font-weight: ${theme.typography.body1.fontWeight};
          letter-spacing: ${theme.typography.body1.letterSpacing};
          line-height: 1.4;
          margin-bottom: ${theme.spacing(marginBottom)}px;
        }
      `}</style>
    </React.Fragment>
  );
};

InputLabel.displayName = "InputLabel";

InputLabel.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * An array of custom CSS classes to apply.
   */
  classes: PropTypes.array,

  /**
   * Color of the label text. Passed through to Typopgraphy
   */
  color: PropTypes.string,

  /**
   * Font weight for the label text. Passed through to Typopgraphy
   */
  fontWeight: PropTypes.string,

  /**
   * Hint text to display under the label.
   */
  hint: PropTypes.node,

  /**
   * If true, an asterisk will be appended to the end of the label.
   */
  required: PropTypes.bool,

  /**
   * @ignore
   * The theme context object
   */
  theme: PropTypes.object,

  /**
   * Variant for the label text. Passed through to Typopgraphy
   */
  variant: PropTypes.string
};

InputLabel.defaultProps = {
  classes: [],
  color: "inherit",
  required: false,
  weight: "regular",
  variant: "inherit"
};

export default withThemeContext(withClasses(InputLabel));
