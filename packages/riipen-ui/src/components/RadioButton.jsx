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
  id,
  prefix,
  size,
  suffix,
  ...other
}) => {
  const theme = React.useContext(ThemeContext);

  let typographyVariant;
  if (size === "small") {
    typographyVariant = "body2";
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
    >
      <label
        className={clsx(checked && "checked", disabled && "disabled")}
        htmlFor={id}
      >
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
          margin: 0 5px;
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
          width: 100px;
        }

        .medium label {
          min-width: 150px;
          padding: 8px;
          width: 150px;
        }

        .large label {
          min-width: 200px;
          padding: 10px;
          width: 200px;
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
   * The id of the input component.
   */
  id: PropTypes.string,

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
  suffix: PropTypes.node
};

RadioButton.defaultProps = {
  size: "medium",
  color: "default"
};

RadioButton.displayName = "RadioButton";

export default withClasses(RadioButton);
