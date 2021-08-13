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
    <>
      {children && (
        <label className={className} {...other}>
          <Typography
            component="span"
            color={color}
            fontWeight={fontWeight}
            variant={variant}
          >
            {children}
            {required && " *"}
          </Typography>
        </label>
      )}
      {hint && <InputHint color={color}>{hint}</InputHint>}
      <style jsx>{`
        label {
          display: inline-block;
          margin-bottom: ${theme.spacing(marginBottom)}px;
        }
      `}</style>
    </>
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
  color: "greyA400",
  fontWeight: "medium",
  required: false,
  variant: "h5"
};

export default withThemeContext(withClasses(InputLabel));
