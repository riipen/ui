import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useState } from "react";
import _JSXStyle from "styled-jsx/style";

// import ThemeContext from "../styles/ThemeContext";
import { useIsFocusVisible, withThemeContext } from "../utils";

const Switch = props => {
  const {
    checked: checkedProp,
    classes,
    // color,
    disabled,
    id,
    onChange,
    required,
    // size,
    theme,
    value
    // ...other
  } = props;

  const [checked, setChecked] = useState(checkedProp);
  const [focusVisible, setFocusVisible] = useState(false);
  const { ref, isFocusVisible, onBlurVisible } = useIsFocusVisible();

  const handleFocus = e => {
    setFocusVisible(isFocusVisible(e));
  };

  const handleBlur = () => {
    setFocusVisible(false);
    onBlurVisible();
  };

  const handleInputChange = event => {
    const newChecked = !checked;

    setChecked(newChecked);

    if (onChange) {
      // TODO v5: remove the second argument.
      onChange(event, newChecked);
    }
  };

  return (
    <span
      ref={ref}
      className={clsx(classes, {
        focusVisible
      })}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <input
        checked={checked}
        className={clsx(
          classes
          // focusVisible ? "focusVisible" : null,
          // {
          //   focusVisible
          // }
        )}
        disabled={disabled}
        id={id}
        // name={name}
        onChange={handleInputChange}
        required={required}
        type="checkbox"
        value={value}
      />
      <style>{`
        input {
          -webkit-appearance: none;
          outline: none;
          width: 40px;
          height: 20px;
          border-radius: 12px;
          background-color: ${theme.palette.grey[400]};
          position: relative;
          z-index: 0; 
        }
        input:checked {
          background-color: ${theme.palette.primary.light};
        }
        input:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 20px;
          width: 20px;
          background-color: ${theme.palette.grey[600]};
          border-radius: 50%;
          transition: ${theme.transitions.create(["transform"], {
            duration: theme.transitions.duration.standard
          })};;
        }
        input:checked:before {
          transform: translate(20px);
          background-color: ${theme.palette.primary.dark};
        }
        input:hover:before {
          box-shadow: 0px 0px 10px 3px ${theme.palette.grey[600]};
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
   * @ignore
   */
  defaultChecked: PropTypes.bool,

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
