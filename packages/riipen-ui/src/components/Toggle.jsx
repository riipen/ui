import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import _JSXStyle from "styled-jsx/style";

import { withThemeContext } from "../utils";

import InputLabel from "./InputLabel";

const Toggle = ({
  classes,
  color,
  disabled,
  label,
  hint,
  name,
  onChange,
  options,
  required,
  size,
  theme,
  value,
  variant
}) => {
  const styleClasses = clsx(
    "toggle",
    color,
    variant,
    size,
    classes,
    disabled && "disabled"
  );

  return (
    <div>
      {(label || hint) && (
        <InputLabel hint={hint} required={required}>
          {label}
        </InputLabel>
      )}
      <div className={styleClasses}>
        <fieldset>
          {options.map((item, i) => {
            const isDisabled = disabled || item.disabled;
            const handleChange = () => onChange(item.value);

            return (
              <span className={clsx(isDisabled && "disabled")} key={item.value}>
                <input
                  checked={value === item.value}
                  disabled={isDisabled}
                  id={`${name}-${item.value}`}
                  name={`${name}-${item.value}`}
                  onChange={handleChange}
                  type="radio"
                  value={item.value}
                />
                <label key={i} htmlFor={`${name}-${item.value}`}>
                  {item.label}
                </label>
              </span>
            );
          })}
        </fieldset>
        <style jsx>{`
          .toggle {
            white-space: nowrap;
          }

          /* Hide input */

          .toggle input {
            height: 1px;
            position: absolute;
            width: 1px;
          }

          .toggle label {
            cursor: pointer;
            border-style: solid;
            border-width: 1px;
            display: inline-block;
            text-align: center;
            transition: 0.2s linear;
          }

          .toggle fieldset,
          .toggle label {
            border-color: transparent;
          }

          /* Sizes */

          .small label {
            min-width: 100px;
            width: 100px;
          }

          .medium label {
            min-width: 150px;
            width: 150px;
          }

          .large label {
            min-width: 200px;
            width: 200px;
          }

          /* Colors */

          .toggle input:checked + label {
            color: ${theme.palette.common.white};
          }

          .toggle label {
            background-color: transparent;
            border-color: ${theme.palette.grey[300]};
            color: ${theme.palette.text.secondary};
          }

          .default label:hover {
            border-color: ${theme.palette.grey[600]};
            color: ${theme.palette.text.primary};
          }

          .default input:checked + label {
            background-color: ${theme.palette.grey[400]};
            border-color: ${theme.palette.grey[400]};
            color: ${theme.palette.common.white};
          }

          .primary label:hover {
            border-color: ${theme.palette.primary.light};
            color: ${theme.palette.primary.dark};
          }

          .primary input:checked + label {
            background-color: ${theme.palette.primary.main};
            border-color: ${theme.palette.primary.main};
            color: ${theme.palette.common.white};
          }

          .secondary label:hover {
            border-color: ${theme.palette.secondary.light};
            color: ${theme.palette.secondary.dark};
          }

          .secondary input:checked + label {
            background-color: ${theme.palette.secondary.main};
            border-color: ${theme.palette.secondary.main};
            color: ${theme.palette.common.white};
          }

          .tertiary label:hover {
            border-color: ${theme.palette.tertiary.light};
            color: ${theme.palette.tertiary.dark};
          }

          .tertiary input:checked + label {
            background-color: ${theme.palette.tertiary.main};
            border-color: ${theme.palette.tertiary.main};
            color: ${theme.palette.common.white};
          }

          .disabled label:hover,
          .disabled label {
            background-color: ${theme.palette.disabled};
            border-color: ${theme.palette.disabled};
            color: ${theme.palette.grey[200]};
          }

          .disabled input:checked + label {
            background-color: ${theme.palette.disabled};
            border-color: ${theme.palette.grey[500]};
            color: ${theme.palette.grey[200]};
          }

          /* Variants */

          .joined label {
            padding: 8px 8px 8px 8px;
          }

          .joined span:first-of-type label {
            border-radius: ${theme.shape.borderRadius.md} 0 0
              ${theme.shape.borderRadius.md};
            padding: 8px 6px 8px 12px;
          }

          .joined span:last-of-type label {
            border-radius: 0 ${theme.shape.borderRadius.md}
              ${theme.shape.borderRadius.md} 0;
            padding: 8px 12px 8px 6px;
          }

          .spaced label {
            border-radius: ${theme.shape.borderRadius.md};
            display: inline-block;
            padding: ${theme.spacing(1.5)}px ${theme.spacing(4)}px;
            text-align: center;
          }

          .spaced span {
            margin-right: ${theme.spacing(4)}px;
          }

          .spaced span:last-of-type {
            margin-right: 0;
          }
        `}</style>
      </div>
    </div>
  );
};

Toggle.propTypes = {
  // external

  /**
   * Array of additional CSS classes to use.
   */
  classes: PropTypes.arrayOf(PropTypes.string),

  /**
   * The color of the toggle.
   */
  color: PropTypes.oneOf(["default", "primary", "secondary", "tertiary"]),

  /**
   * Whether or not the toggle is disabled
   */
  disabled: PropTypes.bool,

  /**
   * Informative text to display alongside the input component.
   */
  hint: PropTypes.string,

  /**
   * If set, display a label before the toggle pills.
   */
  label: PropTypes.string,

  /**
   * The name to use on toggle inputs
   */
  name: PropTypes.string.isRequired,

  /**
   * Function to invoke when toggle is changed
   */
  onChange: PropTypes.func,

  /**
   * The options the toggle accepts:
   *  - disabled: if the option is disabled or not
   *  - label: the label on the option
   *  - value: the value of the option
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      disabled: PropTypes.bool,
      label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
      value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
    })
  ).isRequired,

  /**
   * Whether the input is required.
   */
  required: PropTypes.bool,

  /**
   * A whitelisted size.
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),

  /**
   * @ignore
   * The theme context object
   */
  theme: PropTypes.object,

  /**
   * The current value of the toggle
   */
  value: PropTypes.any,

  /**
   * Toggle variant to display
   */
  variant: PropTypes.oneOf(["joined", "spaced"])
};

Toggle.defaultProps = {
  color: "primary",
  size: "medium",
  variant: "joined"
};

export default withThemeContext(Toggle);
