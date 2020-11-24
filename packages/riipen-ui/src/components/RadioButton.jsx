import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import ThemeContext from "../styles/ThemeContext";
import withClasses from "../utils/withClasses";

import Typography from "./Typography";

const RadioButton = ({
  checked,
  classes,
  disabled,
  label,
  prefix: Prefix,
  prefixProps,
  suffix: Suffix,
  suffixProps,
  ...other
}) => {
  const theme = React.useContext(ThemeContext);

  return (
    <div
      className={clsx(
        classes,
        "root",
        checked && "checked",
        disabled && "disabled"
      )}
    >
      <label
        className={clsx(checked && "checked", disabled && "disabled")}
        htmlFor={other.id}
      >
        <input checked={checked} disabled={disabled} type="radio" {...other} />
        <Typography variant="body2" color={checked ? "initial" : "grey600"}>
          {Prefix && (
            <span className="content">
              <Prefix {...prefixProps} />
            </span>
          )}
          <span className="content">{label}</span>
          {Suffix && (
            <span className="content">
              <Suffix {...suffixProps} />
            </span>
          )}
        </Typography>
      </label>
      <style jsx>{`
        .root {
          display: inline-flex;
          cursor: pointer;
          border: 1px solid ${theme.palette.grey[300]};
          background: #ffffff;
        }

        .root.checked {
          background-color: #f5f5f5;
        }

        .root.disabled {
          background-color: ${theme.palette.grey[200]};
        }

        label {
          display: inline-flex;
          padding: 5px 10px;
          cursor: pointer;
        }

        .content {
          margin: 0 5px;
        }

        input {
          opacity: 0;
          position: absolute;
          pointer-events: none;
        }

        .disabled {
          cursor: default;
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
   * If `true`, the radio will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Label text to display for the radio.
   */
  label: PropTypes.string,

  /**
   * The component to render before the label text.
   */
  prefix: PropTypes.elementType,

  /**
   * The props to supply to the prefix component.
   */
  prefixProps: PropTypes.object,

  /**
   * The component to render after the label text.
   */
  suffix: PropTypes.elementType,

  /**
   * The props to supply to the suffix component.
   */
  suffixProps: PropTypes.object
};

RadioButton.displayName = "RadioButton";

export default withClasses(RadioButton);
