import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useState } from "react";
import _JSXStyle from "styled-jsx/style";

import { withThemeContext } from "../utils";

const Switch = props => {
  const {
    checked: checkedProp,
    classes,
    color,
    disabled,
    id,
    onChange,
    required,
    size,
    theme,
    value
  } = props;

  const [checked, setChecked] = useState(checkedProp);

  const handleChange = event => {
    const newChecked = !checked;

    setChecked(newChecked);

    if (onChange) {
      onChange(event, newChecked);
    }
  };

  return (
    <span className={clsx(classes)}>
      <input
        checked={checked}
        className={clsx(color, size)}
        disabled={disabled}
        id={id}
        onChange={handleChange}
        required={required}
        type="checkbox"
        value={value}
      />
      <style>{`
        input {
          -webkit-appearance: none;
          outline: none;
          background-color: ${theme.palette.grey[400]};
          position: relative;
          transition: ${theme.transitions.create(["background-color"], {
            duration: theme.transitions.duration.standard
          })};
        }
        input:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          background-color: ${theme.palette.grey[600]};
          transition: ${theme.transitions.create(
            ["transform", "background-color"],
            {
              duration: theme.transitions.duration.standard
            }
          )};
        }
        input:hover:before {
          box-shadow: 0px 0px 15px 3px ${theme.palette.grey[500]};
        }

        input:disabled, input:checked:disabled {
          background-color: ${theme.palette.grey[600]};
          pointer-events: none;
        }
        input:disabled:before, input:disabled:checked:before {
          background-color: ${theme.palette.grey[800]};
        }

        .medium {
          width: 40px;
          height: 20px;
          border-radius: 12px;
        }
        .medium:before {
          height: 20px;
          width: 20px;
          border-radius: 50%;
        }
        .medium:checked:before {
          transform: translate(20px);
        }

        .small {
          width: 30px;
          height: 15px;
          border-radius: 10px;
        }
        .small:before {
          height: 15px;
          width: 15px;
          border-radius: 50%;
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
   * If true, the component is checked.
   */
  checked: PropTypes.bool,

  /**
   * An array of custom CSS classes to apply.
   */
  classes: PropTypes.array,

  /**
   * The color of the spinner.
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
  classes: [],
  color: "secondary",
  size: "medium"
};

Switch.displayName = "Switch";

export default withThemeContext(Switch);
