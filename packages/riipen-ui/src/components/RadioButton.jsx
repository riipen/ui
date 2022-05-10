import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import _JSXStyle from "styled-jsx/style";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

import Typography from "./Typography";

const RadioButton = ({
  checked,
  classes,
  color,
  disabled,
  label,
  prefix,
  size,
  suffix,
  wrapperProps,
  ...other
}) => {
  const theme = React.useContext(ThemeContext);

  let typographyVariant;
  if (size === "medium") {
    typographyVariant = "body2";
  } else if (size === "small") {
    typographyVariant = "body3";
  } else if (size === "large") {
    typographyVariant = "h5";
  }

  return (
    <div
      className={clsx(
        classes,
        color,
        checked && "checked",
        disabled && "disabled",
        "root",
        size
      )}
      {...wrapperProps}
    >
      <label className={clsx(checked && "checked", disabled && "disabled")}>
        <input checked={checked} disabled={disabled} type="radio" {...other} />
        <Typography
          component="span"
          variant={typographyVariant}
          color="inherit"
        >
          {prefix && <span className="content">{prefix}</span>}
          <span className="content">{label}</span>
          {suffix && <span className="content">{suffix}</span>}
        </Typography>
      </label>
      <style jsx>{`
        /* Common */

        .content {
          margin: 0 ${theme.spacing(1)}px;
        }

        .root {
          display: inline-flex;
          cursor: pointer;
          border: 1px solid ${theme.palette.grey[300]};
          transition: 0.2s linear;
        }

        label {
          cursor: pointer;
          text-align: center;
        }

        input {
          opacity: 0;
          position: absolute;
          pointer-events: none;
        }

        .disabled {
          cursor: default;
        }

        /* Sizes */

        .small label {
          min-width: 100px;
          padding: 4px;
          width: 100%;
        }

        .medium label {
          min-width: 150px;
          padding: 6px 12px;
          width: 100%;
        }

        .large label {
          min-width: 200px;
          padding: 10px;
          width: 100%;
        }

        /* Colors */

        .root {
          background-color: transparent;
          border-color: ${theme.palette.grey[300]};
          color: ${theme.palette.text.secondary};
        }

        .root.default:hover {
          border-color: ${theme.palette.grey[600]};
          color: ${theme.palette.text.primary};
        }

        .root.default.checked {
          background-color: ${theme.palette.grey[300]};
          border-color: ${theme.palette.grey[300]};
          color: ${theme.palette.common.black};
        }

        .root.primary:hover {
          border-color: ${theme.palette.primary.light};
          color: ${theme.palette.primary.dark};
        }

        .root.primary.checked {
          background-color: ${theme.palette.primary.main};
          border-color: ${theme.palette.primary.main};
          color: ${theme.palette.common.white};
        }

        .root.secondary:hover {
          border-color: ${theme.palette.secondary.light};
          color: ${theme.palette.secondary.dark};
        }

        .root.secondary.checked {
          background-color: ${theme.palette.secondary.main};
          border-color: ${theme.palette.secondary.main};
          color: ${theme.palette.common.white};
        }

        .root.tertiary:hover {
          border-color: ${theme.palette.tertiary.light};
          color: ${theme.palette.tertiary.dark};
        }

        .root.tertiary.checked {
          background-color: ${theme.palette.tertiary.main};
          border-color: ${theme.palette.tertiary.main};
          color: ${theme.palette.common.white};
        }

        .root.disabled:hover,
        .root.disabled {
          background-color: ${theme.palette.disabled};
          border-color: ${theme.palette.disabled};
          color: ${theme.palette.grey[200]};
        }
      `}</style>
    </div>
  );
};

RadioButton.propTypes = {
  /**
   * If `true`, the component is checked.
   */
  checked: PropTypes.bool,

  /**
   * An array of custom CSS classes to apply.
   */
  classes: PropTypes.array,

  /**
   * The color of the radio button.
   */
  color: PropTypes.oneOf(["default", "primary", "secondary", "tertiary"]),

  /**
   * If `true`, the radio will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Label text to display for the radio.
   */
  label: PropTypes.node,

  /**
   * The component to render before the label text.
   */
  prefix: PropTypes.node,

  /**
   * The size of the radio button
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),

  /**
   * The component to render after the label text.
   */
  suffix: PropTypes.node,

  /**
   * Props to apply to div wrapper.
   */
  wrapperProps: PropTypes.object
};

RadioButton.defaultProps = {
  size: "medium",
  color: "default",
  wrapperProps: {}
};

RadioButton.displayName = "RadioButton";

export default withClasses(RadioButton);
