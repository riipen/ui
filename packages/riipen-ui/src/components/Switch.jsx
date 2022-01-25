import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import _JSXStyle from "styled-jsx/style";

import ThemeContext from "../styles/ThemeContext";

const Switch = props => {
  const {
    checked,
    classes,
    color,
    disabled,
    id,
    onChange,
    required,
    size,
    value,
    ...other
  } = props;

  const theme = React.useContext(ThemeContext);

  return (
    <span className={clsx(classes)}>
      <input
        checked={checked}
        className={clsx(color, other.readOnly ? "read-only" : null, size)}
        disabled={disabled}
        id={id}
        onChange={onChange}
        required={required}
        type="checkbox"
        value={value}
        {...other}
      />
      <style jsx>{`
        input {
          background-color: ${theme.palette.grey[400]};
          cursor: pointer;
          outline: none;
          position: relative;
          transition: ${theme.transitions.create(["background-color"], {
            duration: theme.transitions.duration.standard
          })};
          -webkit-appearance: none;
        }
        input:before {
          background-color: ${theme.palette.grey[600]};
          content: "";
          left: 0;
          position: absolute;
          top: 0;
          transition: ${theme.transitions.create(
            ["transform", "background-color"],
            {
              duration: theme.transitions.duration.standard
            }
          )};
        }
        input:hover:before {
          box-shadow: 0px 0px 7px 1px ${theme.palette.grey[500]};
        }

        .read-only {
          cursor: initial;
          pointer-events: none;
        }

        input:disabled,
        input:checked:disabled {
          background-color: ${theme.palette.grey[200]};
          pointer-events: none;
        }
        input:disabled:before,
        input:disabled:checked:before {
          background-color: ${theme.palette.disabled};
        }

        .medium {
          border-radius: 12px;
          height: 20px;
          width: 40px;
        }
        .medium:before {
          border-radius: 50%;
          height: 20px;
          width: 20px;
        }
        .medium:checked:before {
          transform: translate(20px);
        }

        .small {
          border-radius: 10px;
          height: 15px;
          width: 30px;
        }
        .small:before {
          border-radius: 50%;
          height: 15px;
          width: 15px;
        }
        .small:checked:before {
          transform: translate(15px);
        }

        .primary:checked {
          background-color: ${theme.palette.primary.light};
        }
        .primary:checked:before {
          background-color: ${theme.palette.primary.dark};
        }

        .secondary:checked {
          background-color: ${theme.palette.secondary.light};
        }
        .secondary:checked:before {
          background-color: ${theme.palette.secondary.dark};
        }

        .tertiary:checked {
          background-color: ${theme.palette.tertiary.light};
        }
        .tertiary:checked:before {
          background-color: ${theme.palette.tertiary.dark};
        }

        .negative:checked {
          background-color: ${theme.palette.negative.light};
        }
        .negative:checked:before {
          background-color: ${theme.palette.negative.dark};
        }

        .positive:checked {
          background-color: ${theme.palette.positive.light};
        }
        .positive:checked:before {
          background-color: ${theme.palette.positive.dark};
        }
      `}</style>
    </span>
  );
};

Switch.propTypes = {
  /**
   * If true, the input is checked.
   */
  checked: PropTypes.bool,

  /**
   * An array of custom CSS classes to apply.
   */
  classes: PropTypes.array,

  /**
   * The color of the switch.
   */
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "positive",
    "negative"
  ]),

  /**
   * If true, the switch will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * The id of the input element.
   */
  id: PropTypes.string,

  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing event.target.value (string). You can pull out the new checked state by accessing event.target.checked (boolean).
   */
  onChange: PropTypes.func,

  /**
   * If true, the input element will be required.
   */
  required: PropTypes.bool,

  /**
   * The size of the switch. small is equivalent to the dense switch styling.
   */
  size: PropTypes.oneOf(["small", "medium"]),

  /**
   * @ignore
   * The theme context object
   */
  theme: PropTypes.object,

  /**
   * The value of the component. The DOM API casts this to a string. The browser uses "on" as the default value.
   */
  value: PropTypes.any
};

Switch.defaultProps = {
  checked: false,
  classes: [],
  color: "secondary",
  size: "medium"
};

Switch.displayName = "Switch";

export default Switch;
